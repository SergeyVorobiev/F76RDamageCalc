import json

import Root
from server.weapon_builder.CSVWeapon import CSVWeapon
from server.weapon_builder.LegendaryData import LegendaryData


class WatsonMod:
    legendary_path = Root.build_path_from_root(["client", "src", "resources", "legendary.json"])
    categories = ["Enchantments", "DamageBonusMult", "AmmoCapacity", "OverrideProjectile", "ReloadSpeed",
                  "IsAutomatic", "Speed", "ActorValues", "Ammo", "AttackDelay", "CriticalDamageMult",
                  "AttackDamage", "DamageTypeValues", "HasRepeatableSingleFire", "CritEffect", "FullPower",
                  "NumProjectiles", "MinPower", "APCost", "Weight"]
    mods_path = Root.build_path_from_root(["client", "src", "resources", "mods.json"])

    @staticmethod
    def print_mod_operations():
        with open(WatsonMod.mods_path) as f:
            file_data = json.load(f)
        result = {}
        for category in WatsonMod.categories:
            result[category] = set()
        for data in file_data:
            for mod in data['modifiers']:
                prop = mod['prop']
                if WatsonMod.categories.__contains__(prop):
                    result[prop].add(mod['op'])
        for item in result.items():
            print(item[0], item[1])

    @staticmethod
    def get_all_legendary_names():
        mods_header, mod_rows = CSVWeapon.load_weapon_mods()
        stars = ["1", "2", "3", "4", "5"]
        result = {}
        for star in stars:
            result[star] = []
        for item in mod_rows.items():
            idd = item[0]
            data = item[1]
            c_name = data[0][1]
            name = data[0][2]
            ap = data[0][4]
            if ap.casefold().__contains__("legendary"):
                number = str(ap[ap.__len__() - 1])
                if name.__len__() > 0 and not name.__contains__("Random") and not name.__contains__("Invalid Item") \
                        and not name.__contains__("¬") and not name.__contains__("DLC"):
                    result[number].append([idd, name, "Ok"])
                else:
                    try:
                        result[number].append([idd, c_name, "Invalid"])
                    except:
                        ...

        return result

    @staticmethod
    def print_actor_values():
        result = set()
        with open(WatsonMod.mods_path) as f:
            file_data = json.load(f)
        for data in file_data:
            for mod in data['modifiers']:
                if mod['prop'] == 'ActorValues':
                    result.add(mod['val1'])
        for value in result:
            print(value)

    @staticmethod
    def get_legendary_template(idd, star):
        legendary = LegendaryData.legendary_map.get(idd)
        # min, max, step, value, adjustable, creature, type, description, name
        if legendary:
            return {
                "min": legendary[0],
                "max": legendary[1],
                "step": legendary[2],
                "adjustable": legendary[4],
                "creature": legendary[5],
                "type": legendary[6],
                "description": legendary[7],
                "name": legendary[8],
                "id": idd,
                "star": star
            }
        return None

    @staticmethod
    def build_legendary_json(path=None):
        if path is None:
            path = WatsonMod.legendary_path
        result = []
        names = WatsonMod.get_all_legendary_names()
        for name in names.items():
            star = int(name[0])
            data = name[1]
            for string in data:
                idd = string[0]
                if LegendaryData.exclude_legendary.__contains__(string[0]):
                    continue
                template = WatsonMod.get_legendary_template(idd, star)
                if template is None:
                    print("New template with id '" + idd + "' is found")
                result.append(template)
                print(idd, template['name'])
        with open(path, 'w') as f:
            json.dump(result, f)
