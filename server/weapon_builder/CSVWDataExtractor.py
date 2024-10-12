from server.weapon_builder.Curv import Curv
from server.weapon_builder.DamageParser import DamageParser
from server.weapon_builder.LegendaryData import LegendaryData
from server.weapon_builder.NameResolver import NameResolver


class CSVWDataExtractor:
    # List of test or debug mods to hide
    hide_mods = ["004e251a", "004e2518", "004e2519", "00176df8", "00178eaf", "0047187e", "00780410",
                 "003986ee", "00205bd2", "0049722e", "00312ad4", "00312ad6", "00312ad5", "001879d4", "001879d3",
                 "0028ebc7", "00439d05", "0030863f", "0027ac2d", "00497236", "00497250", "003f2e3b",
                 "004677aa", "003f2e3a", "003f2e4a", "00497254", "005a1c8a", "005a7be5", "00439a64",
                 "003f2e27", "005b6dad", "0045fc87", "005b6db4", "0049723e", "00497249", "005db32f"]

    not_apply = ['003fbba1', '0029cc0f', '004e42a1', '00052213', '00045884', '00450366', '001138e0',
                 '00729bfe', '0042b0cd', '000d1eb0', '00424b66', '0010faa7', '001025ac', '000ddb7c',
                 '0041a39c', '005532b4', '0045ff61', '003879a3', '000042f2']

    def __init__(self, w_header, weapon_rows):
        self.w_types = ["Pistol", "HeavyGun", "Rifle", "Bow", "Shotgun", "MeleeGeneral", "Unarmed", "Thrown"]
        self.w_header = w_header
        self.i_id = w_header.index('ID')
        self.i_cname = w_header.index('NAME')
        self.i_proj = w_header.index('PROJ_TYPE')
        self.i_reload = w_header.index('ANIM_RELOAD')
        self.i_projectiles_num = w_header.index('PROJECTILES')
        self.i_spell = w_header.index('WEAP_EFFECT')
        self.i_ammo = w_header.index('AMMO')
        self.i_manual_rate = w_header.index('ATTACK_DELAY')
        self.i_attack_speed = w_header.index("ATTACK_SPEED")
        self.i_speed = w_header.index("SPEED")
        self.i_capacity = w_header.index("CAPACITY")
        self.i_weight = w_header.index("WEIGHT")
        self.i_ap = w_header.index("AP")
        self.i_name = w_header.index("LOCALIZED_NAME")
        self.i_tags = w_header.index("TAGS")
        self.i_levels = w_header.index("LEVELS")
        self.i_at_points = w_header.index("AT_POINTS")
        self.i_damage = w_header.index("DAMAGE")
        self.i_def_mods = w_header.index("DEF_MODS")
        self.i_ma = w_header.index("MA")
        self.i_crit = w_header.index("CRIT")
        self.damage_parser = DamageParser(self.i_ammo, self.i_proj, self.i_spell, self.i_damage, self.i_crit,
                                          weapon_rows)

    def get_cname(self, csv_weapon):
        return csv_weapon[self.i_cname]

    def set_cname(self, template, csv_weapon):
        template["cName"] = self.get_cname(csv_weapon)

    def get_id(self, csv_weapon):
        return csv_weapon[self.i_id]

    def set_id(self, template, csv_weapon):
        template["id"] = self.get_id(csv_weapon)

    def get_name(self, csv_weapon):
        return csv_weapon[self.i_name]

    def get_speed(self, csv_weapon):

        return float(csv_weapon[self.i_speed])

    def set_speed(self, template, csv_weapon):
        speed = self.get_speed(csv_weapon)
        template["speed"] = [speed, speed]

    def get_charge(self, csv_weapon):
        if self.get_id(csv_weapon) == '0055c150':
            return 2
        return 0

    def set_charge(self, template, csv_weapon):
        charge = self.get_charge(csv_weapon)
        template["chargeTime"] = [charge, charge]

    def set_apply(self, template, csv_weapon, w_type):
        idd = self.get_id(csv_weapon)
        if w_type == "Thrown":
            template['apply'] = False
        if CSVWDataExtractor.not_apply.__contains__(idd):
            template['apply'] = False

    def set_name(self, template, csv_weapon):
        name = self.get_name(csv_weapon)
        if name == 'Right Leg Actuated Frame':
            idd = self.get_id(csv_weapon)
            if idd == '005d79c7':
                name = 'War Glaive'
        elif name == 'Covert Scout Armor Left Leg':
            idd = self.get_id(csv_weapon)
            if idd == '00033fe0':
                name = "Machete"
        elif name == 'Default':
            idd = self.get_id(csv_weapon)
            if idd == '000311de':
                name = 'Bowie Knife'
        elif name == "Resistance Field":
            idd = self.get_id(csv_weapon)
            if idd == '005e47ee':
                name = 'Hellstorm'
        elif name == "Yukon Five Power Armor T-60 Paint":
            idd = self.get_id(csv_weapon)
            if idd == '0054a165':
                name = "Gauss Pistol"
        elif name == "kwell":
            idd = self.get_id(csv_weapon)
            if idd == '0000dc55':
                name = "Death Tambo"
        elif name == '':
            name = NameResolver.weapon_names[csv_weapon[0]]
        template["name"] = name
        return name

    def set_icon_name(self, template, w_name, w_type):
        icon_name = w_name.casefold().replace(" ", "_").replace("\'", "").replace(".", "")
        result = {w_type: icon_name}
        ids = ['00024f55', '0014831a', '0009983b', '00186171', '002fd97a', '00100ae9', '005ea441', '005a366e']
        if ids.__contains__(template['id']):
            result["Rifle"] = icon_name + "_rifle"
        template["iconName"] = result

    def get_max_level(self, csv_weapon):
        levels = csv_weapon[self.i_levels].split(" / ")
        return levels[levels.__len__() - 1]

    def set_level(self, template, csv_weapon):
        template["level"] = self.get_max_level(csv_weapon)

    def set_spell(self, template, csv_weapon, spell_extractor, proj_extractor, perk_extractor):
        spell = self.get_spell(csv_weapon)
        if spell:
            spell_extractor.parse_and_update(spell, proj_extractor, perk_extractor)
            template["spellId"] = spell["id"]
            return spell['id']
        return ''

    def get_spell(self, csv_weapon):
        try:
            return eval(csv_weapon[self.i_spell])
        except:
            return None

    def get_levels(self, csv_weapon):
        return csv_weapon[self.i_levels]

    def set_levels(self, template, csv_weapon):
        template['levels'] = self.get_levels(csv_weapon)

    def get_weight(self, csv_weapon):
        return float(csv_weapon[self.i_weight])

    def set_weight(self, template, csv_weapon):
        weight = self.get_weight(csv_weapon)
        template['weight'] = [weight, weight]

    def get_ap(self, csv_weapon):
        return float(csv_weapon[self.i_ap])

    def set_ap(self, template, csv_weapon):
        ap = self.get_ap(csv_weapon)
        template['ap'] = [ap, ap]

    def get_crit(self, csv_weapon):
        crit = csv_weapon[self.i_crit]
        return eval(crit)

    def set_crit(self, template, csv_weapon, spell_extractor, proj_extractor, perk_extractor):
        crit = self.get_crit(csv_weapon)
        template["crMult"] = crit["mult"]
        template["crChar"] = crit["charge"]
        try:
            spell_id = crit["spell"]["id"]
        except:
            spell_id = '00000000'
        if spell_id != '00000000' and spell_id != '':
            spell_extractor.parse_and_update(crit['spell'], proj_extractor, perk_extractor)
            template["crSpellId"] = [[spell_id], [spell_id]]

    def get_tags(self, csv_weapon):
        tags = csv_weapon[self.i_tags].split(" / ")
        new_tags = []
        for item in tags:
            if item.startswith("ma_"):
                continue
            new_tags.append(item)
        return new_tags

    def set_tags(self, template, csv_weapon):
        tags = self.get_tags(csv_weapon)
        template["tags"] = tags
        return tags

    def get_w_type(self, tags):
        for type in self.w_types:
            if tags.__contains__("Grenade") or tags.__contains__("Mine"):
                return "Thrown"
            if tags.__contains__("Unarmed"):
                return "Unarmed"
            elif tags.__contains__(type):
                if type == 'HeavyGun':
                    type = 'Heavy'
                elif type == 'MeleeGeneral':
                    type = "Melee"
                return type
        print(f"Can't find weapon type in '{tags}', (Is it a Rifle/Pistol gun?) Pistol is assigned")
        return "Pistol"

    def set_w_type(self, template, tags):
        w_type = self.get_w_type(tags)
        template["type"] = [w_type, w_type]
        return w_type

    def get_reload(self, csv_weapon):
        return csv_weapon[self.i_reload]

    def set_reload(self, template, csv_weapon):
        reload = self.get_reload(csv_weapon)
        if reload == '':  # Melee weapon
            reload = 0
        reload = round(float(reload), 5)
        template["reloadTime"] = [reload, reload]

    def get_is_auto(self, tags):
        for tag in tags:
            if tag == "Automatic" or tag == "AutomaticMelee":
                return 1
        return 0

    def set_is_auto(self, template, tags):
        auto = self.get_is_auto(tags)
        template["isAuto"] = [auto, auto]

    def get_projectile(self, csv_weapon):
        return csv_weapon[self.i_proj]

    def _set_explosive_damage(self, expl, result, type):
        try:
            exp_curv = Curv.get_value(expl['exp_curv'])
            id = '00060a87'
            name = 'dtPhysical'
            full = 'Physical Damage'
            result.append((type, id, name, full, exp_curv))
        except:
            ...

        try:
            d_curv = Curv.get_value(expl['d_curv'])
            d_type = expl['d_type']
            if d_type != '':
                id = d_type['id']
                name = d_type['name']
                full = d_type['full']
            else:
                id = '00060a87'
                name = 'dtPhysical'
                full = 'Physical Damage'
            result.append((type, id, name, full, d_curv))
        except:
            ...

    def _look_for_ammo_damage(self, csv_weapon, result):
        try:
            ammo = eval(csv_weapon[self.i_ammo])
            expl = ammo['projectile']['expl']
            self._set_explosive_damage(expl, result, "ammoExp")
        except:
            ...

        try:
            proj = eval(csv_weapon[self.i_proj])
            expl = proj['expl']
            self._set_explosive_damage(expl, result, "projExp")
        except:
            ...

    # Base damage + Base spell
    def set_base_damage(self, template, csv_weapon):
        damages = self.damage_parser.build_base_damage(csv_weapon)
        template['damageData'] = damages

    def get_num_projectiles(self, csv_weapon):
        return csv_weapon[self.i_projectiles_num]

    def set_num_projectiles(self, template, csv_weapon):
        num = self.get_num_projectiles(csv_weapon)
        if num == '':  # Should be Melee, but hit considered as 1 projectile anyway in our calculations
            num = 1
        template["shotSize"] = [int(num), int(num)]

    repeatableFireIds = ["0014831c", "006477ec", "005e47ee", "0003f6f8", "005dd5b2"]
    autoManualIds = ["00182634", "00011bf6", "0042b0cc"]

    def get_auto_rate(self, csv_weapon):
        return self.get_def_rate(csv_weapon) * self.get_speed(csv_weapon)

    def get_def_rate(self, csv_weapon):
        idd = self.get_id(csv_weapon)

        #  These weapons have special tag - HasRepeatableSingleFire
        if CSVWDataExtractor.repeatableFireIds.__contains__(idd):
            return 10 / float(csv_weapon[self.i_manual_rate])
        elif CSVWDataExtractor.autoManualIds.__contains__(idd):
            return 20
        return 91

    def set_auto_rate(self, template, csv_weapon):
        auto_rate = self.get_auto_rate(csv_weapon)
        template["autoRate"] = [auto_rate, auto_rate]

    def set_def_rate(self, template, csv_weapon):
        template['defRate'] = self.get_def_rate(csv_weapon)

    def get_manual_rate(self, csv_weapon, w_type):
        if w_type == "Thrown" or w_type == "Melee" or w_type == "Unarmed":
            return csv_weapon[self.i_attack_speed]
        else:
            return csv_weapon[self.i_manual_rate]

    def set_manual_rate(self, template, csv_weapon, w_type):
        m_rate = round(float(self.get_manual_rate(csv_weapon, w_type)), 5)
        if m_rate == 0:
            m_rate = 10 / self.get_auto_rate(csv_weapon)
        template["manualRate"] = [m_rate, m_rate]

    def get_capacity(self, csv_weapon):
        return csv_weapon[self.i_capacity]

    def set_capacity(self, template, csv_weapon):
        capacity = int(self.get_capacity(csv_weapon))
        template["capacity"] = [capacity, capacity]

    def get_hands(self, tags):
        for tag in tags:
            if tag == "Melee2H":
                return 2
        return 1

    def set_hands(self, template, tags):
        hands = self.get_hands(tags)
        template["hand"] = [hands, hands]

    def get_strength_boost(self, w_type):
        if w_type == "Unarmed":
            return 10
        elif w_type == "Melee":
            return 5
        return 0

    def set_strength_boost(self, template, w_type):
        strength = self.get_strength_boost(w_type)
        template["strengthBoost"] = [strength, strength]

    # returns first default combination of mods, and all possible unique
    def get_def_mods(self, csv_weapon):
        def_mods = []
        all_mods = set()
        try:
            mods = eval(csv_weapon[self.i_def_mods])
            for mod in mods[0]:
                def_mods.append(mod)
            for mod_cat in mods:
                for mod in mod_cat:
                    all_mods.add(mod)
        except:
            ...
        return def_mods, all_mods

    def set_def_mods(self, template, csv_weapon):
        def_mods, all_mods = self.get_def_mods(csv_weapon)
        template["defMods"] = def_mods
        return def_mods, all_mods

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
        elif attach_name == "Description":
            attach_name = "Base"
        return attach_id, attach_name

    exclude_mods_if_not_default = ["Reroll", "Legendary1", "Legendary2", "Legendary3", "Legendary4",
                                   "Legendary5"]
    fully_exclude_mods = ["Appearance", "00000000"]
    not_deselected_mods = ["Legendary1", "Legendary2", "Legendary3", "Legendary4", "Legendary5"]

    def get_ma_weapon_ids(self, csv_weapon):
        ma_weapon_ids = []
        weapon_ma_items = csv_weapon[self.i_ma].split(" / ")
        for ma_item in weapon_ma_items:
            ma_item_split = ma_item.split("_")
            ma_item_id = ma_item_split[0]
            # ma_item_name = ma_item_split[ma_item_split.__len__() - 1]
            ma_weapon_ids.append(ma_item_id)
        return ma_weapon_ids

    @staticmethod
    def get_ma_mod_ids_and_row(mod_item):
        ma_mod_ids = []
        mod_row = mod_item[1][0]
        ma_mod_items = mod_row[5].split(" / ")
        for ma_mod_item in ma_mod_items:
            ma_mod_item_split = ma_mod_item.split("_")
            ma_mod_id = ma_mod_item_split[0]
            # ma_mod_name = ma_mod_item_split[ma_mod_item_split.__len__() - 1]
            ma_mod_ids.append(ma_mod_id)
        return ma_mod_ids, mod_row

    @staticmethod
    def __add_mod(mod_row, result):
        _, category_name = CSVWDataExtractor.__get_mod_type(mod_row[4])

        # If the category name exists then append the mod into, it not, create the category with the mod
        mod_ids = result.get(category_name)
        if mod_ids is None:
            result[category_name] = [mod_row[0]]
        else:
            mod_ids.append(mod_row[0])

    def get_mods(self, csv_weapon, mod_rows, def_mods):
        result = {}
        ma_weapon_ids = self.get_ma_weapon_ids(csv_weapon)
        for mod_item in mod_rows.items():
            ma_mod_ids, mod_row = self.get_ma_mod_ids_and_row(mod_item)
            if CSVWDataExtractor.__is_intersects(ma_weapon_ids, ma_mod_ids):
                self.__add_mod(mod_row, result)
            # So it happens that mods are not presented in AM but can be installed by default
            # as general mods like some legendary
            elif def_mods.__contains__(mod_row[0]):
                self.__add_mod(mod_row, result)
        return result

    def _get_mod_ids_by_categories(self, csv_weapon, mod_rows, def_mods):
        mods = self.get_mods(csv_weapon, mod_rows, def_mods)
        result = {}
        for mod_item in mods.items():
            name = mod_item[0]
            if CSVWDataExtractor.fully_exclude_mods.__contains__(name):
                continue
            if CSVWDataExtractor.exclude_mods_if_not_default.__contains__(name):
                new_items = []
                for mod in mod_item[1]:
                    if def_mods.__contains__(mod):
                        new_items.append(mod)
                if new_items.__len__() > 0:
                    result[name] = new_items
            else:
                result[name] = mod_item[1]
        return result

    def _parse_mod(self, mod, mod_type, ammo_extractor, proj_extractor, spell_extractor, perk_extractor):
        k = 0
        result = {"type": mod_type, "modifiers": [], "useful": False, "hide": False}
        for mod_field in mod:
            if k == 0:
                mod_id = mod_field[0]
                result["id"] = mod_id
                result["codeName"] = mod_field[1]
                result["ap"] = mod_field[4]
                mod_name = mod_field[2]
                if mod_id == '006e2242':
                    mod_name = "Poison"
                elif mod_id == "005d7f2a":
                    mod_name = "Fire Blade"
                elif mod_id == "005d7f29":
                    mod_name = "Cryo Blade"
                elif mod_id == "005d7f2c":
                    mod_name = "No Blade"
                elif mod_id == "006e2245":
                    mod_name = "Custom Bear Arm"
                elif mod_id == "00630c79":
                    mod_name = "Energy Electro Enforcer"
                elif mod_id == "0032cedc":
                    mod_name = "Standard Frame"
                elif mod_id == "0018c438":
                    mod_name = "Standard Grip"
                elif mod_id == "00312a79":
                    mod_name = "True Long Barrel"
                elif mod_id == "002deda6":
                    mod_name = "Fierce Receiver"
                elif mod_id == "00313924":
                    mod_name = "Standard Stock"
                if mod_name == '':
                    try:
                        mod_name = NameResolver.mod_names[mod_field[0]]
                    except:
                        print(f"NAME_WARNING!!!: Can't find name for {mod_field[0]} {mod_field[1]}")
                result["name"] = mod_name
                if mod_name == "Invalid Item" or self.hide_mods.__contains__(mod_id):
                    result["hide"] = True
            else:
                modifier = {}
                if mod_field[7] == "Enchantments":
                    spell = eval(mod_field[10])
                    spell_extractor.parse_and_update(spell, proj_extractor, perk_extractor)
                elif mod_field[7] == 'Ammo':
                    ammo = eval(mod_field[10])
                    ammo_extractor.parse_and_update(ammo, proj_extractor, spell_extractor, perk_extractor)
                elif mod_field[7] == "OverrideProjectile":
                    proj = eval(mod_field[10])
                    proj_extractor.parse_and_update(proj, spell_extractor, perk_extractor)
                modifier['op'] = mod_field[6]
                modifier['prop'] = mod_field[7]
                modifier['val1'] = mod_field[8]
                modifier['val2'] = mod_field[9]

                if mod_field[11] != '':
                    modifier['curv'] = self.__extract_curv_value(mod_field[11])
                else:
                    modifier['curv'] = 0
                if not result['useful']:
                    result['useful'] = self.__check_useful(mod_field)
                result["modifiers"].append(modifier)
            k += 1
        return result

    def _update_legendary_mods(self, mod_rows, mod_extractor, ammo_extractor, proj_extractor, spell_extractor, perk_extractor):
        for idd in LegendaryData.legendary_map.keys():
            mod = mod_rows[idd]
            result = self._parse_mod(mod, "", ammo_extractor, proj_extractor, spell_extractor, perk_extractor)
            part = result["ap"].split("_")[-1]
            if not part.startswith("Legendary"):
                if result["name"] == "Kneecapper":
                    part = "Legendary4"
                else:
                    raise Exception("Not Legendary")
            result["mod_type"] = part
            mod_extractor.update(result)

    def __update_mods(self, mod_extractor, ammo_extractor, proj_extractor, spell_extractor, perk_extractor, mod_ids,
                      mod_rows, appropriate):
        for item in mod_ids.items():
            mod_type = item[0]
            for mod_array in item[1]:
                mod_id = mod_array[0]
                selected = mod_array[1]
                mod_array.append(True)  # Can be selected
                mod = mod_rows[mod_id]
                result = self._parse_mod(mod, mod_type, ammo_extractor, proj_extractor, spell_extractor, perk_extractor)

                # For example grenades is not appropriate for modding but can have default mods, so we make them
                # active but not selectable
                if not appropriate or (CSVWDataExtractor.not_deselected_mods.__contains__(mod_type) and selected):
                    mod_array[2] = False
                mod_extractor.update(result)

    not_selectable_categories = ["APCost", "Weight", "WeightReduction", "Value", "Durability", "Keywords", "MaxRange",
                                 "MinRange",
                                 "ConIronSights", "RecoilMaxDegree", "RecoilMinDegree", "MaxConDegree", "MinConDegree",
                                 "SightedTransition", "AimModel", "SightedTransition", "HasAlternateRumble",
                                 "ZoomFOVMult", "ZoomDataCameraOffsetZ", "HasScope", "ZoomData", "BaseStability",
                                 "RecoilArcDeg", "RecoilArcRotateDeg", "SoundLevel", "RecoilShotsForRunaway",
                                 "SecondaryDamage", "NPCAmmoList", "ModelSwap", "Rank", "EquipSlot", "AttackSound",
                                 "IdleSound", "EquipSound", "ImpactDataSet", "MaterialSwaps", "UnEquipSound",
                                 "ZoomDataCameraOffsetX", "ZoomDataCameraOffsetY", "AimAssist", "CriticalChargeBonus",
                                 "HoldInputToPower"]
    selectable_categories = ["Enchantments", "DamageBonusMult", "AmmoCapacity", "OverrideProjectile", "ReloadSpeed",
                             "IsAutomatic", "Speed", "ActorValues", "Ammo", "AttackDelay", "CriticalDamageMult",
                             "AttackDamage", "DamageTypeValues", "HasRepeatableSingleFire", "CritEffect", "FullPower",
                             "NumProjectiles", "MinPower"]

    def __extract_curv_value(self, curv):
        return Curv.get_value(curv)

    def __check_useful(self, mod_field):
        if CSVWDataExtractor.not_selectable_categories.__contains__(mod_field[7]):
            return False
        elif CSVWDataExtractor.selectable_categories.__contains__(mod_field[7]):
            return True
        print("New field found " + mod_field[7])
        return False

    def set_mods(self, template, csv_weapon, mod_extractor, ammo_extractor, proj_extractor, spell_extractor,
                 perk_extractor, mod_rows, def_mods, all_mods):
        result = self._get_mod_ids_by_categories(csv_weapon, mod_rows, all_mods)
        appropriate_for_mods = self.appropriate_for_mods(csv_weapon)
        result = self.__set_mods_usage(def_mods, result, appropriate_for_mods)
        self._update_legendary_mods(mod_rows, mod_extractor, ammo_extractor, proj_extractor, spell_extractor, perk_extractor)
        self.__update_mods(mod_extractor, ammo_extractor, proj_extractor, spell_extractor, perk_extractor, result,
                           mod_rows, appropriate_for_mods)
        template["allMods"] = result

    def appropriate_for_mods(self, csv_weapon):
        tags = self.get_tags(csv_weapon)
        if tags.__contains__("Grenade") or tags.__contains__("Mine"):
            return False
        return True

    def __set_mods_usage(self, def_mods, mod_cats, appropriate_for_mods):
        remove = []
        for item in mod_cats.items():
            mod_type = item[0]
            mod_ids = item[1]
            result = []
            for mod_id in mod_ids:
                con = def_mods.__contains__(mod_id)
                if not con and not appropriate_for_mods:
                    continue
                if self.hide_mods.__contains__(mod_id):
                    continue
                result.append([mod_id, con])
            if result.__len__() == 0:
                remove.append(mod_type)
            else:
                mod_cats[mod_type] = result
        for r in remove:
            mod_cats.pop(r)
        self._check_mod_selection(mod_cats)
        return mod_cats

    def _check_mod_selection(self, mod_cats):
        for mod_item in mod_cats.items():
            mods = mod_item[1]
            selected = False
            for mod in mods:
                if mod[1] and selected:
                    print("MODS!!! Several selected mods are detected in a group")
                if mod[1]:
                    selected = True

    def get_ammo(self, csv_weapon):
        ammo_data = csv_weapon[self.i_ammo]
        if ammo_data == "None":
            return None
        return eval(ammo_data)

    def set_ammo(self, template, csv_weapon, ammo_extractor, proj_extractor, spell_extractor, perk_extractor):
        ammo = self.get_ammo(csv_weapon)
        if ammo is None:
            template['ammoId'] = ['', '']
            return ''
        else:
            template["ammoId"] = [ammo['id'], ammo['id']]
            template["ammoType"] = {"codeName": ammo['name'], "type": ammo['ammo_type'], "name": ammo['full']}
            ammo_extractor.parse_and_update(ammo, proj_extractor, spell_extractor, perk_extractor)
            return ammo['id']

    def get_proj(self, csv_weapon):
        proj_data = csv_weapon[self.i_proj]
        if proj_data == "" or proj_data == "00000000":
            return None
        return eval(proj_data)

    def set_proj(self, template, csv_weapon, proj_extractor, spell_extractor, perk_extractor):
        proj = self.get_proj(csv_weapon)
        if proj is None:
            template['projId'] = [[], []]
            return []
        else:
            template["projId"] = [[proj['id']], [proj['id']]]
            proj_extractor.parse_and_update(proj, spell_extractor, perk_extractor)
        return [proj['id']]
