import csv
import json

import Root


class CSVWeapon:
    weapon_path = Root.build_path_from_root(["server", "resources", "weapons.csv"])
    weapon_mod_path = Root.build_path_from_root(["server", "resources", "weapon_mods_full.csv"])
    info_mod_path = Root.build_path_from_root(["server", "resources", "info_mods.csv"])
    perk_path = Root.build_path_from_root(["server", "resources", "perks.csv"])
    spell_path = Root.build_path_from_root(["server", "resources", "spells.csv"])

    @staticmethod
    def load_perks(delimiter=","):
        return CSVWeapon.load_weapon_mods(delimiter=delimiter, path=CSVWeapon.perk_path, row_in_array=False)

    @staticmethod
    def load_spells(delimiter=","):
        return CSVWeapon.load_weapon_mods(delimiter=delimiter, path=CSVWeapon.spell_path, row_in_array=False)

    @staticmethod
    def load_weapon_mods(delimiter=',', path=None, row_in_array=True):
        if path is None:
            path = CSVWeapon.weapon_mod_path
        header_row = []
        rows = {}
        mod = None
        with open(path, newline='') as file:
            reader = csv.reader(file, delimiter=delimiter, quotechar='"')
            header = True
            for row in reader:
                if header:
                    header = False
                    header_row = row
                    continue
                if row.__len__() == 0:
                    continue
                m_id = row[0]
                if m_id != '':
                    if row_in_array:
                        mod = [row]
                    else:
                        mod = row
                    rows[m_id] = mod
                else:
                    mod.append(row)
            return header_row, rows

    @staticmethod
    def load_weapons(delimiter=','):
        return CSVWeapon.__load_rows_with_header(CSVWeapon.weapon_path, delimiter)

    @staticmethod
    def __load_rows_with_header(path, delimiter=','):
        header_row = []
        rows = {}
        with open(path, newline='') as file:
            reader = csv.reader(file, delimiter=delimiter, quotechar='"')
            header = True
            for row in reader:
                if header:
                    header = False
                    header_row = row
                    continue
                if row.__len__() == 0:
                    continue
                rows[row[0]] = row
            return header_row, rows

    @staticmethod
    def get_ammo(rows, weapon_id):
        return rows[weapon_id][5]

    @staticmethod
    def get_localized_name(rows, weapon_id):
        return rows[weapon_id][13]

    @staticmethod
    def get_weight(rows, weapon_id):
        return rows[weapon_id][10]

    @staticmethod
    def get_ap(rows, weapon_id):
        return rows[weapon_id][12]

    @staticmethod
    def get_def_mod_ids(rows, weapon_id):
        return rows[weapon_id][15].split(" / ")

    @staticmethod
    def get_mods(weapon_rows, mod_rows, weapon_id):
        weapon_ma_items = weapon_rows[weapon_id][18].split(" / ")
        ma_weapon_ids = []
        result = {}

        for ma_item in weapon_ma_items:
            ma_item_split = ma_item.split("_")
            ma_item_id = ma_item_split[0]
            ma_item_name = ma_item_split[ma_item_split.__len__() - 1]
            ma_weapon_ids.append(ma_item_id)

        for mod_item in mod_rows.items():
            mod_row = mod_item[1][0]
            ma_mod_items = mod_row[5].split(" / ")
            ma_mod_ids = []
            for ma_mod_item in ma_mod_items:
                ma_mod_item_split = ma_mod_item.split("_")
                ma_mod_id = ma_mod_item_split[0]
                ma_mod_name = ma_mod_item_split[ma_mod_item_split.__len__() - 1]
                ma_mod_ids.append(ma_mod_id)
            if CSVWeapon.__is_intersects(ma_weapon_ids, ma_mod_ids):
                _, attach_name = CSVWeapon.__get_mod_type(mod_row[4])
                mod_ids = result.get(attach_name)
                if mod_ids is None:
                    result[attach_name] = [mod_row[0]]
                else:
                    mod_ids.append(mod_row[0])
        return result

    exclude_mod_categories = ["Appearance", "Reroll", "Legendary1", "Legendary2", "Legendary3", "Legendary4",
                              "Legendary5"]

    @staticmethod
    def build_mods(mods, mods_to_add, mods_container):
        for mod_item in mods_to_add.items():
            name = mod_item[0]
            if CSVWeapon.exclude_mod_categories.__contains__(name):
                continue
            mod_ids = mod_item[1]
            for mod_id in mod_ids:
                existent = mods_container.get(mod_id)
                if existent is None:
                    data = mods[mod_id]
                    first_row = data[0]
                    json_mod = {}
                    mods_container[mod_id] = json_mod
                    json_mod["id"] = first_row[0]
                    json_mod["code_name"] = first_row[1]
                    json_mod["name"] = first_row[2]
                    json_mod["attach_point"] = first_row[4]
                    json_mod["target"] = first_row[5]
                    props = []
                    json_mod["properties"] = props
                    for i in range(1, data.__len__()):
                        row = data[i]
                        props.append([row[7], row[6], row[8], row[9], row[10], row[11]])
                    mods_container[mod_id] = json_mod

    @staticmethod
    def __is_intersects(array1, array2):
        for item in array1:
            if array2.__contains__(item):
                return True
        return False

    @staticmethod
    def __get_mod_type(ap_point_string):
        strings = ap_point_string.split("_")
        attach_id = strings[0]
        attach_name = strings[strings.__len__() - 1]
        attach_name = attach_name.capitalize()
        if attach_name == "Mag":
            attach_name = "Magazine"
        return attach_id, attach_name

    @staticmethod
    def get_attach_points(rows, weapon_id):
        return rows[weapon_id][17].split(" / ")

    @staticmethod
    def save_info_mods(json_mods):
        with open(CSVWeapon.info_mod_path, 'w') as f:
            json.dump([json_mods], f)
