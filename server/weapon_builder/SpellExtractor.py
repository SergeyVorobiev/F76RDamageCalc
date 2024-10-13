import Root
from server.weapon_builder.BaseExtractor import BaseExtractor
from server.weapon_builder.Curv import Curv


class SpellExtractor(BaseExtractor):

    def __init__(self):
        super().__init__(Root.build_path_from_root(["client", "src", "resources", "spel.json"]))

    def parse_and_update(self, spell, proj_extractor, perk_extractor):
        SpellExtractor.resolve_d_curv(spell['mag_effects'])
        self.extract_perks(spell, proj_extractor, perk_extractor)
        self.parse_effects(spell, proj_extractor, perk_extractor)
        self.update(spell)

    def parse_effects(self, spell, proj_extractor, perk_extractor):
        for mag_effect in spell['mag_effects']:
            projectile = mag_effect['m_effect']['projectile']
            if projectile != '' and projectile != '00000000':
                raise Exception("Mag effect contains projectile")
            explosion = mag_effect['m_effect']['explosion']
            if explosion != '' and explosion != '00000000':
                proj_extractor.parse_and_update_explosion(explosion, self, perk_extractor)

    def extract_perks(self, spell, proj_extractor, perk_extractor):
        try:
            p_id = spell['perk']
        except:
            p_id = '00000000'
        if p_id != '00000000':
            perk_extractor.parse_and_update(p_id, self, proj_extractor)
        for effect in spell['mag_effects']:
            p_id = effect['m_effect']['perk']
            if p_id != '00000000':
                perk_extractor.parse_and_update(p_id, self, proj_extractor)

    @staticmethod
    def resolve_d_curv(mag_effects):
        for mag in mag_effects:
            mag['d_curv'] = Curv.get_value(mag['d_curv'])
