import Root
from server.weapon_builder.BaseExtractor import BaseExtractor


class SpellExtractor(BaseExtractor):

    def __init__(self):
        super().__init__(Root.build_path_from_root(["client", "src", "resources", "spel.json"]))

    def parse_and_update(self, spell, perk_extractor):
        SpellExtractor.resolve_d_curv(spell['mag_effects'])
        SpellExtractor.extract_perks(spell, perk_extractor)
        self.update(spell)

    @staticmethod
    def extract_perks(spell, perk_extractor):
        try:
            p_id = spell['perk']
        except:
            p_id = '00000000'
        if p_id != '00000000':
            perk_extractor.parse_and_update(p_id)
        for effect in spell['mag_effects']:
            p_id = effect['m_effect']['perk']
            if p_id != '00000000':
                perk_extractor.parse_and_update(p_id)

    @staticmethod
    def resolve_d_curv(mag_effects):
        for mag in mag_effects:
            dcurv = mag['d_curv']
            if dcurv != '' and dcurv != '00000000':
                dcurv = eval(dcurv.split("\n")[1])['curve']
                mag['d_curv'] = dcurv[dcurv.__len__() - 1]['y']
