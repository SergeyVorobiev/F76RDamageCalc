import Root
from server.weapon_builder.BaseExtractor import BaseExtractor


class ProjExtractor(BaseExtractor):
    exclusive_object_id = ['0003320a', '0017a580']
    weap_object_id = ['000042f2', '003879a3']

    def __init__(self, weapons_header, weapon_rows):
        super().__init__(Root.build_path_from_root(["client", "src", "resources", "proj.json"]))
        self.weapon_rows = weapon_rows
        self.i_proj = weapons_header.index("PROJ_TYPE")
        self.i_cname = weapons_header.index("NAME")

    # evaluated proj or None
    def parse_and_update(self, proj, spell_extractor, perk_extractor):
        if proj is None:
            return
        self.__check_projectiles(proj, spell_extractor, perk_extractor)
        ProjExtractor.__set_expl_spell(proj['destructible'], spell_extractor, perk_extractor)
        ProjExtractor.__set_expl_spell(proj['expl'], spell_extractor, perk_extractor)
        self.__set_expl_object(proj['expl'], spell_extractor, perk_extractor)
        self.__set_expl_object(proj['destructible'], spell_extractor, perk_extractor)
        ProjExtractor.__update_expl_curvs(proj['expl'])
        ProjExtractor.__update_expl_curvs(proj['destructible'])
        self.update(proj)

    @staticmethod
    def __update_expl_curvs(expl):
        try:
            curv = expl["exp_curv"]
            expl["exp_curv"] = ProjExtractor.__get_curv_value(curv)
        except:
            ...
        try:
            curv = expl["d_curv"]
            expl["d_curv"] = ProjExtractor.__get_curv_value(curv)
        except:
            ...

    def __check_projectiles(self, proj, spell_extractor, perk_extractor):
        self.__check_expl_projectile(proj['destructible'], spell_extractor, perk_extractor)
        self.__check_expl_projectile(proj['expl'], spell_extractor, perk_extractor)

    def __check_expl_projectile(self, expl, spell_extractor, perk_extractor):
        try:
            proj_id = expl['projectile']
        except:
            return
        if proj_id != '' and proj_id != '00000000':
            if expl == proj_id['id']:
                expl['projectile'] = 'Same'
            else:
                expl['projectile'] = proj_id['id']
                self.parse_and_update(proj_id, spell_extractor, perk_extractor)

    @staticmethod
    def __get_curv_value(curv):
        if curv != '' and curv != '00000000':
            curv = eval(curv.split("\n")[1])['curve']
            return curv[curv.__len__() - 1]['y']
        else:
            return ''

    @staticmethod
    def __set_expl_spell(expl, spell_extractor, perk_extractor):
        try:
            spell = expl['enchantment']
            if spell != '' and spell != '00000000':
                expl['enchantment'] = spell['id']
                spell_extractor.parse_and_update(spell, perk_extractor)
        except:
            ...

    def __set_expl_object(self, expl, spell_extractor, perk_extractor):
        try:
            if expl != '00000000' and expl != '':
                obj = expl['object']
                if obj != '':
                    if type(obj) == type(''):
                        if ProjExtractor.exclusive_object_id.__contains__(obj):
                            expl['object'] = ''
                            return
                        elif ProjExtractor.weap_object_id.__contains__(obj):
                            expl['object'] = {'type': 'WEAP',
                                              'value': {'name': self.weapon_rows[obj][self.i_cname], 'id': obj}}
                        else:
                            print("WEAP!!! Unexpected id has been found in an 'Explosive Object': " + obj)
                    if obj['type'] == 'EXPL':
                        obj_expl = obj['value']
                        ProjExtractor.__set_expl_spell(obj_expl, spell_extractor, perk_extractor)
                        ProjExtractor.__update_expl_curvs(obj_expl)
                        self.__check_expl_projectile(obj_expl, spell_extractor, perk_extractor)
                    elif obj['type'] == 'HAZD':
                        if obj['value']['id'] == '0033d107':
                            print()
                    elif obj['type'] == 'MSTT':
                        if obj['value']['spell'] != '':
                            print("MSTT OBJECT contains spell!!!")
                        obj_expl = obj['value']['expl']
                        ProjExtractor.__set_expl_spell(obj_expl, spell_extractor, perk_extractor)
                        ProjExtractor.__update_expl_curvs(obj_expl)
                        self.__check_expl_projectile(obj_expl, spell_extractor, perk_extractor)
                        obj_hazd = obj['value']['hazd']
                        hazd_spell = obj_hazd['effect']['value']
                        obj_hazd['effect'] = hazd_spell['id']
                        spell_extractor.parse_and_update(hazd_spell, perk_extractor)
                    spell = obj['value']['effect']['value']
                    obj['value']['effect'] = spell['id']
                    spell_extractor.parse_and_update(spell, perk_extractor)
        except:
            ...
