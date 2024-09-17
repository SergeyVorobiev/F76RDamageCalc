import glob

import Root
from server.weapon_builder.CSVWDataExtractor import CSVWDataExtractor
from server.weapon_builder.CSVWeapon import CSVWeapon
from server.weapon_builder.WeaponHandler import WeaponHandler


class MissedWeaponChecker:

    def __init__(self):
        pass

    @staticmethod
    def contains(tags, skip):
        if skip is None:
            return False
        for s in skip:
            if tags.__contains__(s):
                return True
        return False

    # returns [id, file_name]
    @staticmethod
    def print_missed_weapons(must_have=None, skip=None, skip_ids=None, n_print=True):
        result = []
        folder = Root.build_path_from_root(["client", "src", "resources", "weaponTemplates"])
        paths = glob.glob(Root.build_path(folder, ["*.json"]))
        weapons_header, weapon_rows = CSVWeapon.load_weapons()
        w_extractor = CSVWDataExtractor(weapons_header, weapon_rows)
        existed_weapon_ids = set()

        def handler(path, weapon):
            idd = weapon['id']
            existed_weapon_ids.add(idd)

        WeaponHandler.handle_weapons(handler, paths)
        k = 0
        for weapon_row in weapon_rows.items():
            w_id = weapon_row[0]
            if skip_ids is not None and skip_ids.__contains__(w_id):
                continue
            csv_row = weapon_row[1]
            name = w_extractor.get_name(csv_row)
            c_name = w_extractor.get_cname(csv_row)
            tags = w_extractor.get_tags(csv_row)
            if not existed_weapon_ids.__contains__(w_id):
                if tags.__contains__("Snares"):
                    continue
                if MissedWeaponChecker.contains(tags, skip):
                    continue
                if not MissedWeaponChecker.contains(tags, must_have):
                    continue
                if ((c_name.startswith("cr") or c_name.__contains__("NONPLAYABLE") or c_name.__contains__("NonPlayable") \
                     or c_name.__contains__("Camera") or c_name.__contains__("NoName")
                     or c_name.__contains__("Workshop")) or c_name.__contains__("_cr")
                    or c_name.__contains__("Trap") or c_name.__contains__("Vertibird") or c_name.__contains__(
                            "XPD_AC_Race_FireworkWeapon")
                    or c_name.__contains__("DELETE")) or c_name.__contains__("DONOTUSE") or c_name.__contains__("NPC") \
                        or c_name.__contains__("Spray") or c_name.__contains__("Syringer") \
                        or c_name.__contains__("Turret") or c_name.__contains__("ToyFirework") or c_name.__contains__(
                    "TEMPLATE"):
                    continue
                k += 1
                file_name = name.replace(" ", "").replace("_", "").replace("\'", "")
                result.append([w_id, file_name])
                if n_print:
                    print(k, w_id, c_name, "|", name + " Fallout 76")

        return result

    # return a list of not added weapons data that can be used as first parameter of add_new() method in main.py
    @staticmethod
    def print_unused_thrown_and_grenades(n_print=True):
        skip_ids = ["004e42a1", '001117de', '001117b0', '0055c158', '0045d772', '0004e5f5', '00692a0c', '00692a0d',
                    '005cf0a0', '0029cc0f', '00052213', '001138e0',
                    '0055c15b', '00113d0e', '0063daaa', '006539ae', '0063d68a', '006c4f2f', '006e4ac4', '006e83e6',
                    '006e1c28', '00592f7a', '005428ca', '005439ab', '005439ac', '0073553c', '0072bc2f', "006f53fa",
                    "0062eeed", '0055c157', '000e98e5', '00554605', '00699ab0', '00554607', '00554606', '00467fc6']
        return MissedWeaponChecker.print_missed_weapons(must_have=["Thrown", "Grenade"], skip=["Mine"],
                                                        skip_ids=skip_ids, n_print=n_print)

    # return a list of not added weapons data that can be used as first parameter of add_new() method in main.py
    @staticmethod
    def print_unused_mines(n_print=True):
        skip_ids = ["00554447", "0055c52b", "005566d5", "00554590", "005566d6", "005566dc", "005566dd", "005566de",
                    "005439ad", "005439ae", "005439af", "00098b4f", "0010771f", "00098b5a"]
        return MissedWeaponChecker.print_missed_weapons(must_have=["Mine"], skip=None, skip_ids=skip_ids,
                                                        n_print=n_print)

    @staticmethod
    def print_unused_explosives(n_print=True):
        """
            Shows all not added explosives weapons

            :param n_print: by default 'True', prints not added weapons data in a console
            :return: a list of not added weapons data that can be used as first parameter of add_new() method in main.py

        """

        skip_ids = ["00677671", "004277db", "00554607", "000073f8", "004ecc0e", "00496560", "00662760", "0040345c",
                    "0074d578", "0072a8c2"]
        return MissedWeaponChecker.print_missed_weapons(must_have=["Explosive"], skip=["Thrown", "Mine"],
                                                        skip_ids=skip_ids, n_print=n_print)

    # return a list of not added weapons data that can be used as first parameter of add_new() method in main.py
    @staticmethod
    def print_unused_bows(n_print=True):
        skip_ids = ["00591253", "00591255", "00591254", "00591257", "00014015", "00591258", "00591256", "00013ced",
                    "00661dd9", "005a25fd"]
        return MissedWeaponChecker.print_missed_weapons(must_have=["Bow"], skip=[],
                                                        skip_ids=skip_ids, n_print=n_print)

    # return a list of not added weapons data that can be used as first parameter of add_new() method in main.py
    @staticmethod
    def print_unused_unarmed(n_print=True):
        skip_ids = ["00573f01", "0059b550", "005a205c", "0042b0ce", "000c2c27", "000c2c32", "0059656b", "006e359e"]
        return MissedWeaponChecker.print_missed_weapons(must_have=["Unarmed"], skip=[],
                                                        skip_ids=skip_ids, n_print=n_print)

    # return a list of not added weapons data that can be used as first parameter of add_new() method in main.py
    @staticmethod
    def print_unused_melee(n_print=True):
        skip_ids = ["00498710", "004716ba", '005a5316', '005ef6f9', '005576ca', '0059b54f', '0059656d', '0059656c',
                    '006ea336', '006d1bc8', '004749c9', '005527bb', '005527bd', '005527bc', '00559d47', '003fec30',
                    '003fee52', '0055c155', '003fee53', '0040e345', '007551de', '005253fe', '002d4837', '002d481e',
                    '002d4864', '002d4865', '002d4866', '002d4867', '002d4960', '002d4a7f', '002d4aa0', '002d4857',
                    ]
        return MissedWeaponChecker.print_missed_weapons(must_have=["MeleeGeneral"], skip=["Unarmed"],
                                                        skip_ids=skip_ids, n_print=n_print)

    # return a list of not added weapons data that can be used as first parameter of add_new() method in main.py
    @staticmethod
    def print_unused_pistols(n_print=True):
        skip_ids = ['00684974', '004428eb', '006353d0', '00403022', '00597629', '005299f1', '004fd573', '004e89a7',
                    '0037d174', '004f5783', '004428ea', '0058c427', '001025ac', '0039c6c9', '0077b58e']
        return MissedWeaponChecker.print_missed_weapons(must_have=["Pistol"], skip=["Bow"],
                                                        skip_ids=skip_ids, n_print=n_print)

    # return a list of not added weapons data that can be used as first parameter of add_new() method in main.py
    @staticmethod
    def print_unused_rifles(n_print=True):
        skip_ids = ["006e58b3", "006fba5e", "004fd64b", "003aab76", "0042b0d2", "00403023", '006ea337', '006ccc2e',
                    '00442901', '006f5790', "005d0638", "0059d52d", "0059656e"]
        return MissedWeaponChecker.print_missed_weapons(must_have=["Rifle"], skip=["Bow"],
                                                        skip_ids=skip_ids, n_print=n_print)

    # return a list of not added weapons data that can be used as first parameter of add_new() method in main.py
    @staticmethod
    def print_unused_shotguns(n_print=True):
        skip_ids = ["0054a77c", "00482c76", "0069255d", "00596569", "0034cbd7"]
        return MissedWeaponChecker.print_missed_weapons(must_have=["Shotgun"], skip=[],
                                                        skip_ids=skip_ids, n_print=n_print)

    # return a list of not added weapons data that can be used as first parameter of add_new() method in main.py
    @staticmethod
    def print_unused_heavy(n_print=True):
        skip_ids = ["0062eeed", "004e42a1", "0040345f", "0040345e", "00773f9d", "0040345b", "000e942b", "0040345b",
                    "005a2a52", "0040345d", "006ddfee", "0049655f"]
        return MissedWeaponChecker.print_missed_weapons(must_have=["HeavyGun"], skip=["Explosive"],
                                                        skip_ids=skip_ids, n_print=n_print)

    @staticmethod
    def print_unused_plasma(n_print=True):
        skip_ids = ["0040345f", "00773f9d"]
        return MissedWeaponChecker.print_missed_weapons(must_have=["Plasma"], skip=[],
                                                        skip_ids=skip_ids, n_print=n_print)

    @staticmethod
    def print_all():
        print("THROWN AND GRENADES")
        MissedWeaponChecker.print_unused_thrown_and_grenades()
        print("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\n")
        print("MINES")
        MissedWeaponChecker.print_unused_mines()
        print("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\n")
        print("EXPLOSIVES")
        MissedWeaponChecker.print_unused_explosives()
        print("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\n")
        print("BOWS")
        MissedWeaponChecker.print_unused_bows()
        print("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\n")
        print("UNARMED")
        MissedWeaponChecker.print_unused_unarmed()
        print("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\n")
        print("MELEE")
        MissedWeaponChecker.print_unused_melee()
        print("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\n")
        print("PISTOLS")
        MissedWeaponChecker.print_unused_pistols()
        print("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\n")
        print("RIFLES")
        MissedWeaponChecker.print_unused_rifles()
        print("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\n")
        print("SHOTGUNS")
        MissedWeaponChecker.print_unused_shotguns()
        print("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\n")
        print("HEAVY")
        MissedWeaponChecker.print_unused_heavy()
        print("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\n")
        print("PLASMAGUN")
        MissedWeaponChecker.print_unused_plasma()