import Root
from server.weapon_builder.BaseExtractor import BaseExtractor
from server.weapon_builder.SpellExtractor import SpellExtractor


class PerkExtractor(BaseExtractor):

    def __init__(self, perk_header, perk_rows):
        super().__init__(Root.build_path_from_root(["client", "src", "resources", "perk.json"]))
        self.i_id = perk_header.index("Id")
        self.i_name = perk_header.index("Name")
        self.i_full = perk_header.index("Full Name")
        self.i_effects = perk_header.index("Effects")
        self.perk_rows = perk_rows

    def parse_and_update(self, id):
        perk_row = self.perk_rows[id]
        obj = {}
        obj['id'] = perk_row[self.i_id]
        obj['name'] = perk_row[self.i_name]
        obj['full'] = perk_row[self.i_full]
        effects = eval(perk_row[self.i_effects])
        for effect in effects:
            try:
                mags = effect['value']['mag_effects']
                SpellExtractor.resolve_d_curv(mags)
            except:
                ...
        obj['effects'] = effects
        self.update(obj)
