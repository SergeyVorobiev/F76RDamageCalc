import Root
from server.weapon_builder.BaseExtractor import BaseExtractor


class ModExtractor(BaseExtractor):

    def __init__(self, mod_header):
        super().__init__(Root.build_path_from_root(["client", "src", "resources", "mods.json"]))



