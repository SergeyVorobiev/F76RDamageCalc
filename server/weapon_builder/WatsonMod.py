import json

import Root


class WatsonMod:
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