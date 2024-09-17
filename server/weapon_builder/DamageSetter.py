
# Delete this class
class DamageSetter:
    def _set_damage_by_type(self, template, type_name, value):
        current = template[type_name]
        if current[0] > 0:
            raise Exception("Damage is already presented!")
        template[type_name] = value

    def set_damages_to_template(self, template, damages):
        for damageType in damages.items():
            for damage in damageType[1]:
                if damage['destructible'] or damage['time'] > 0 or damage['source'] == 'Spell':
                    continue
                type = damage['type_name']
                curv = damage['curv']
                if curv == '':
                    curv = 0
                val = damage['value']
                magnitude = damage['magnitude']
                dam = curv
                if dam == 0:
                    dam = val
                    if dam == 0:
                        dam = magnitude
                value = [dam, dam]
                if type == 'dtPhysical':
                    self._set_damage_by_type(template, 'bbDamage', value)
                elif type == 'dtEnergy':
                    self._set_damage_by_type(template, 'ebDamage', value)
                elif type == 'dtFire':
                    self._set_damage_by_type(template, 'fbDamage', value)
                elif type == 'dtPoison':
                    self._set_damage_by_type(template, 'pbDamage', value)
                elif type == 'dtCryo':
                    self._set_damage_by_type(template, 'cbDamage', value)
                elif type == 'dtRadiationExposure':
                    self._set_damage_by_type(template, 'rbDamage', value)
        return damages
