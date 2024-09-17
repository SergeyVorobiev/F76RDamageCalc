import glob
import json
import os.path

import Root
from server.weapon_builder.CSVWeapon import CSVWeapon


class WeaponHandler:
    folder = Root.build_path_from_root(["client", "src", "resources", "weaponTemplates"])
    paths = glob.glob(Root.build_path(folder, ["*.json"]))

    @staticmethod
    def load_weapon(path):
        with open(path) as f:
            return path, json.load(f)[0]

    @staticmethod
    def handle_weapons(handler, paths):
        for path in paths:
            path, weapon = WeaponHandler.load_weapon(path)
            handler(path, weapon)

    @staticmethod
    def handle_weapons_from_client(handler):
        WeaponHandler.handle_weapons(handler,  WeaponHandler.paths)

    @staticmethod
    def load_weapon_by_file_name(file_name):
        return WeaponHandler.load_weapon(Root.build_path(WeaponHandler.folder, [file_name + ".json"]))

    @staticmethod
    def save(path, json_data):
        #if not os.path.exists(path):
        #    with open(path, mode='a') as f:
        #        json.dump([json_data], f)
        #else:
        with open(path, 'w') as f:
            json.dump([json_data], f)

    @staticmethod
    def fill_weapon_template(weapon_path, weapon, weapon_rows, mod_rows, mods_container):
        weapon_id = weapon['id']
        tags = ""# CSVWeapon.get_tags(weapon_rows, weapon_id)
        weapon['tags'] = ",".join(tags)
        weapon['ammoName'] = CSVWeapon.get_ammo(weapon_rows, weapon_id)
        weapon['lName'] = CSVWeapon.get_localized_name(weapon_rows, weapon_id)
        weapon['weight'] = CSVWeapon.get_weight(weapon_rows, weapon_id)
        weapon['ap'] = CSVWeapon.get_ap(weapon_rows, weapon_id)
        weapon['def_mod_ids'] = CSVWeapon.get_def_mod_ids(weapon_rows, weapon_id)
        mods = CSVWeapon.get_mods(weapon_rows, mod_rows, weapon_id)
        weapon['all_mods'] = mods
        CSVWeapon.build_mods(mod_rows, mods, mods_container)
        weapon['attach_points'] = CSVWeapon.get_attach_points(weapon_rows, weapon_id)
        WeaponHandler.save(weapon_path, weapon)