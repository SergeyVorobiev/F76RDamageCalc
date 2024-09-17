from server.weapon_builder.CSVWeapon import CSVWeapon


class MutationsExtractor:

    def __init__(self):
        _, self.perks = CSVWeapon.load_perks()
        _, self.spells = CSVWeapon.load_spells()

    def get_adrenal_reaction_values(self):
        val1 = self._get_adrenal('003d0129')
        val2 = self._get_adrenal('004e1f1a')
        return val1, val2

    def get_herd_mentality_values(self):
        return self._gather_spell_info(self._get_spell('004e1f1e'))

    def get_speed_demon_values(self):
        return self._gather_spell_info(self._get_spell('004df1e0'))

    def get_talons1_values(self):
        return self._gather_spell_info(self._get_spell('0028d3bc'))

    def get_talons2_values(self):
        return self._gather_spell_info(self._get_spell('00386acd'))

    def get_twisted_muscles1_values(self):
        return self._gather_spell_info(self._get_spell('0047a267'))

    def get_twisted_muscles2_values(self):
        return self._gather_spell_info(self._get_spell('003c402f'))

    def _get_spell(self, idd):
        spell = self.spells[idd]
        return eval(spell[10])

    def get_eagle_eyes_values(self):
        return self._gather_spell_info(self._get_spell('003c4037'))

    def _gather_spell_info(self, spell):
        result = []
        for effect in spell:
            m_effect = effect['m_effect']
            name = ''
            if m_effect['actor_value1'] != '00000000':
                name = m_effect['actor_value1']['name']
            result.append([m_effect['name'], str(m_effect['keywords']), str(effect['magnitude']), str(effect['duration']), name])
        return result

    def _get_adrenal(self, idd):
        reaction = self.perks[idd]
        result = []
        reaction = eval(reaction[3])
        for value in reaction:
            result.append(value['value'])
        return result
