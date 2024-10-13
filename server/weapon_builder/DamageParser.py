from server.weapon_builder.Curv import Curv


class DamageParser:
    damage_types = {
        "electrical": {
            "id": "00060a80",
            "name": "dtElectrical",
            "full": "Electrical Damage"
        },
        "energy": {
            "id": "00060a81",
            "name": "dtEnergy",
            "full": "Energy Damage"
        },
        "radiation": {
            "id": "00060a85",
            "name": "dtRadiationExposure",
            "full": "Radiation Damage"
        },
        "fire": {
            "id": "00060a82",
            "name": "dtFire",
            "full": "Fire Damage"
        },
        "cryo": {
            "id": "00060a83",
            "name": "dtCryo",
            "full": "Cryo Damage"
        },
        "poison": {
            "id": "00060a84",
            "name": "dtPoison",
            "full": "Poison Damage"
        },
        "physical": {
            "id": "00060a87",
            "name": "dtPhysical",
            "full": "Physical Damage"
        },
        "pure": {
            "id": "00060a8d",
            "name": "dtPureDamage",
            "full": "Pure Damage"
        },
    }

    # Based on resistance
    res_types = {
        '000002ea': damage_types['radiation'],
        '000002eb': damage_types['energy'],
        '000002e7': damage_types['cryo'],
        '000002e4': damage_types['poison'],
        '000002e5': damage_types['fire'],
        '000002e6': damage_types['electrical'],  # Electrical
        '000002e3': 'DamageResistance',
    }

    def __init__(self, i_ammo, i_proj, i_spell, i_damage, i_crit, weapon_rows):
        self.i_ammo = i_ammo
        self.i_proj = i_proj
        self.i_spell = i_spell
        self.i_damage = i_damage
        self.i_crit = i_crit
        self.weapon_rows = weapon_rows

    def parse(self, csv_weapon, parent=None):
        result = {}
        self.base_damage(csv_weapon, result, parent)
        self.ammo_damage(csv_weapon, result, parent)
        self.additional_projectile(csv_weapon, result, parent)
        self.spell(csv_weapon, result, parent)
        return result

    def add_damage_node(self, result, source, destructible, view_name, type_name, type_id, type_full_name, curv, value,
                        magnitude, time, interval, parent="Base", only_player="No"):
        if curv == 0 and magnitude == 0 and value == 0:
            return
        obj = {
            "destructible": destructible,
            "source": source,
            "view_name": view_name,
            "type_name": type_name,
            "type_id": type_id,
            "type_full_name": type_full_name,
            "curv": curv,
            "value": value,
            "magnitude": magnitude,
            "time": time,
            "interval": interval,
            "parent": parent,
            "only_player": only_player
        }
        entries = result.get(source)
        if not entries:
            result[source] = [obj]
        else:
            entries.append(obj)

    def build_base_damage(self, csv_weapon):
        result = {}
        self.base_damage(csv_weapon, result)
        self.spell(csv_weapon, result, parent=None)
        return result

    def base_damage(self, csv_weapon, result, parent=None):
        damage = csv_weapon[self.i_damage]
        try:
            damages = eval(damage)
        except:
            damages = None
        if damages:
            for damage in damages:
                value = damage["value"]
                curv = Curv.get_value(damage['curv'])
                type = damage['type']
                if not parent:
                    parent = "Base"
                self.add_damage_node(result, "Base", False, "Base Damage", type['name'], type['id'], type['full'], curv,
                                     value, 0, 0, 0, parent)

    def crit_damage(self):
        ...

    def spell_damage(self):
        ...

    def ammo_damage(self, csv_weapon, result, parent):
        try:
            ammo = eval(csv_weapon[self.i_ammo])
            ammo_damage = ammo['damage']
            ammo_id = ammo["id"]
            if not parent:
                parent = ammo_id
            if ammo_damage > 0:
                if ammo['ammo_type'] != 'Ballistic':
                    raise Exception("Ammo type is not 'Ballistic'")
                d_types = self.damage_types["physical"]
                type_id = d_types["id"]
                type_name = d_types["name"]
                full_name = d_types["full"]
                self.add_damage_node(result, "Ammo", False, "Ammo Damage", type_name, type_id, full_name, 0,
                                     ammo_damage, 0, 0, 0, parent)
        except:
            return
        proj = ammo['projectile']
        if proj and proj != '' and proj != '00000000':
            self.projectile(proj, result, csv_weapon[0], parent, False)

    def additional_projectile(self, csv_weapon, result, parent):
        str_proj = csv_weapon[self.i_proj]
        self.resolve_projectile(str_proj, result, False, True, csv_weapon[0], parent)

    def resolve_projectile(self, proj, result, destructible, additional, cur_weap_id, parent):
        if not proj or proj == '00000000' or proj == '':
            return
        if destructible:
            raise Exception("Destructible detected")
        if type(proj) == type(''):
            expl_proj = eval(proj)
        else:
            expl_proj = proj
        if not parent:
            parent = expl_proj["id"]
        self.projectile(expl_proj, result, cur_weap_id, parent, additional)

    def projectile(self, proj, result, cur_weap_id, parent, additional=False):
        self.explosives(proj['destructible'], result, True, additional, cur_weap_id, parent)
        self.explosives(proj['expl'], result, False, additional, cur_weap_id, parent)

    def explosives(self, explosive, result, destructible, additional, cur_weap_id, parent):
        if not explosive or explosive == '' or explosive == '00000000':
            return
        ench = explosive['enchantment']
        if ench != '' and ench != '00000000':
            self.enchantment(ench, result, destructible, parent)
        self.resolve_projectile(explosive['projectile'], result, destructible, additional, cur_weap_id, parent)
        self.explosive_object(explosive['object'], result, destructible, additional, cur_weap_id, parent)
        self.d_damage(explosive, result, destructible, additional, parent)
        damage_type = DamageParser.damage_types['physical']
        type_id = damage_type["id"]
        type_name = damage_type["name"]
        full_name = damage_type["full"]
        damage = explosive['damage']
        curv = Curv.get_value(explosive['exp_curv'])
        if destructible:
            name = "Destructible Explosive Damage"
        else:
            name = "Explosive Damage"
        if additional:
            source = "Additional Projectile"
        else:
            source = "Ammo Projectile"
        self.add_damage_node(result, source, destructible, name, type_name, type_id, full_name, curv, damage, 0,
                             0, 0)

    def d_damage(self, explosive, result, destructible, additional, parent):
        value = explosive['d_value']
        if abs(value) < 0.01:
            value = 0
        curv = explosive['d_curv']
        if value > 0 or (curv != '' and curv != '00000000'):
            curv = Curv.get_value(curv)
            d_type = explosive['d_type']
            if d_type == '' or d_type == '00000000':
                damage_type = DamageParser.damage_types['physical']
                type_id = damage_type["id"]
                type_name = damage_type["name"]
                full_name = damage_type["full"]
            else:
                type_id = d_type['id']
                type_name = d_type['name']
                full_name = d_type['full']
            if destructible:
                name = "Destructible Damage"
            else:
                name = "Damage"
            if additional:
                source = "Additional Projectile"
            else:
                source = "Ammo Projectile"
            self.add_damage_node(result, source, destructible, name, type_name, type_id, full_name, curv, value,
                                 0, 0, 0, parent)

    def spell(self, csv_weapon, result, parent):
        ench = csv_weapon[self.i_spell]
        if ench == '' or ench == '00000000':
            return
        ench = eval(ench)
        base_spell = True
        if not parent:
            parent = ench['id']
        else:
            base_spell = False
        self.enchantment(ench, result, False, parent, base_spell=base_spell)

    def enchantment(self, enchantment, result, destructible, parent, time=0, interval=0, base_spell=False):
        p = ''
        try:
            p = enchantment['perk']
        except:
            ...
        self.perk(p, result, destructible, parent)
        duration = 0
        try:
            duration = enchantment['duration']
        except:
            ...
        if duration > 0:
            raise Exception("Enchantment has duration")
        self.mag_effects(enchantment['mag_effects'], result, destructible, time, interval, parent, base_spell)

    def mag_effects(self, mag_effects, result, destructible, time, interval, parent, base_spell=False):
        for mag_effect in mag_effects:
            m_effect = mag_effect['m_effect']
            proj = m_effect['projectile']
            expl = m_effect['explosion']
            p = m_effect['perk']
            self.perk(p, result, destructible, parent)
            if proj != '00000000' or expl != '00000000' or p != '00000000':
                raise Exception("Proj / Expl / Perk found in mag effects")
            magnitude = mag_effect['magnitude']
            curv = mag_effect['d_curv']
            glob_magnitude = mag_effect['glob_magnitude']
            try:
                only_player = mag_effect['only_player']
            except:
                only_player = 'No'
            if magnitude != 0 or curv != '' or glob_magnitude != '':
                duration = mag_effect['duration']
                glob_duration = mag_effect['glob_duration']
                if glob_duration != '':
                    glob_duration = glob_duration['value']
                else:
                    glob_duration = 0
                if glob_duration > 0 and duration > 0:
                    print("Glob duration and duration > 0")
                if glob_duration > 0:
                    duration = glob_duration
                if time > 0 and duration > 0:
                    print("TIME WARNING! Duration and time > 0")
                if duration > 0:
                    time = duration
                if glob_magnitude != '':
                    glob_magnitude = glob_magnitude['value']
                else:
                    glob_magnitude = 0
                if glob_magnitude > 0:  # Override magnitude by glob
                    magnitude = glob_magnitude
                curv = Curv.get_value(curv)
                if curv == 0 and magnitude == 0:
                    return
                d_type = self.find_effect_damage_type(m_effect)
                if d_type and only_player == 'No':
                    if destructible:
                        name = "Destructible Spell"
                    else:
                        name = "Spell"
                    if base_spell:
                        source = "Base Spell"
                        name = "Base Spell"
                    else:
                        source = "Spell"
                    self.add_damage_node(result, source, destructible, name, d_type['name'], d_type['id'],
                                         d_type['full'], curv, 0, magnitude, time, interval, parent, only_player)

    def find_effect_damage_type(self, m_effect):
        if m_effect['id'] == '00239552':  # Radiation healing damage
            return None
        try:
            _ = m_effect['d_type']['id']
            return m_effect['d_type']
        except:
            ...
        try:

            res_id = m_effect['resist']['id']
            return DamageParser.res_types[res_id]
        except:
            ...
        try:
            actor1 = m_effect['actor_value1']['id']
            if actor1 == '000002e3':
                return m_effect['actor_value1']  # Damage resistance
            ...
        except:
            ...
        actor2 = None
        try:
            actor2 = m_effect['actor_value2']['name']
        except:
            ...
        if actor2:
            raise Exception("Actor2 Exists")
        return None

    def explosive_object(self, obj, result, destructible, additional, cur_weap_id, parent):
        if obj == '000042f2' or obj == '003879a3':  # This is a weapon inside of weapon
            if cur_weap_id != obj:  # cur_weap_id - to prevent infinite recursion
                for damage in self.parse(self.weapon_rows[obj], parent).items():
                    datas = damage[1]
                    for data in datas:
                        self.add_damage_node(result, data['source'], data['destructible'], data['view_name'],
                                             data['type_name'],
                                             data['type_id'], data['type_full_name'], data['curv'], data['value'],
                                             data['magnitude'], data['time'], data['interval'], parent)
        elif obj and obj != '' and obj != '00000000' and obj != '0017a580':
            if obj['type'] == 'HAZD':
                self.hazd(obj['value'], result, destructible, parent)
            elif obj['type'] == 'MSTT':
                value = obj['value']
                spell = value['spell']
                if spell != '':
                    raise Exception("Spell in explosive object")
                self.explosives(value['expl'], result, destructible, additional, cur_weap_id, parent)
                self.hazd(value['hazd'], result, destructible, parent)
            elif obj['type'] == 'EXPL':
                self.explosives(obj['value'], result, destructible, additional, cur_weap_id, parent)
            else:
                raise Exception("Unknown object type")

    def hazd(self, hazd, result, destructible, parent):
        self.enchantment(hazd['effect']['value'], result, destructible, parent, hazd['lifeTime'], hazd['interval'])

    def perk(self, p, result, destructible, parent):
        if p and p != '' and p != '00000000':
            raise Exception("Perk is found")
