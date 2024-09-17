import Root
from server.weapon_builder.BaseExtractor import BaseExtractor


class AmmoExtractor(BaseExtractor):

    def __init__(self, weapons_header):
        super().__init__(Root.build_path_from_root(["client", "src", "resources", "ammo.json"]))
        self.i_ammo = weapons_header.index("AMMO")

    def parse_and_update(self, ammo, proj_extractor, spell_extractor, perk_extractor):
        try:
            proj = ammo['projectile']
            ammo['projectile'] = proj['id']
            proj_extractor.parse_and_update(proj, spell_extractor, perk_extractor)
        except:
            ...
        self.update(ammo)
