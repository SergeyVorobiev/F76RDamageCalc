import Root
from server.weapon_builder.AmmoExtractor import AmmoExtractor
from server.weapon_builder.CSVWDataExtractor import CSVWDataExtractor
from server.weapon_builder.CSVWeapon import CSVWeapon
from server.weapon_builder.ModExtractor import ModExtractor
from server.weapon_builder.MutationsInfo import MutationsInfo
from server.weapon_builder.PerkExtractor import PerkExtractor
from server.weapon_builder.ProjExtractor import ProjExtractor
from server.weapon_builder.SpellExtractor import SpellExtractor
from server.weapon_builder.WTemplate import WTemplate
from server.weapon_builder.WeaponHandler import WeaponHandler


def debug_print(what, is_print=True):
    if is_print:
        print(what)


def fill_and_save(index, template, csv_weapon, w_extractor, ammo_extractor, proj_extractor, spell_extractor,
                  mod_extractor, perk_extractor, mod_rows, path, save=True, is_print=True):
    debug_print("\n", is_print)
    debug_print(str(index) + " " + path, is_print)
    w_name = w_extractor.set_name(template, csv_weapon)
    tags = w_extractor.set_tags(template, csv_weapon)
    w_type = w_extractor.set_w_type(template, tags)
    w_extractor.set_apply(template, csv_weapon, w_type)
    w_extractor.set_icon_name(template, w_name, w_type)
    w_extractor.set_cname(template, csv_weapon)
    w_extractor.set_level(template, csv_weapon)
    w_extractor.set_speed(template, csv_weapon)
    w_extractor.set_crit(template, csv_weapon, spell_extractor, proj_extractor, perk_extractor)
    w_extractor.set_spell(template, csv_weapon, spell_extractor, proj_extractor, perk_extractor)
    w_extractor.set_ammo(template, csv_weapon, ammo_extractor, proj_extractor, spell_extractor, perk_extractor)
    w_extractor.set_proj(template, csv_weapon, proj_extractor, spell_extractor, perk_extractor)
    w_extractor.set_base_damage(template, csv_weapon)
    w_extractor.set_levels(template, csv_weapon)
    w_extractor.set_weight(template, csv_weapon)
    w_extractor.set_ap(template, csv_weapon)
    w_extractor.set_num_projectiles(template, csv_weapon)
    w_extractor.set_reload(template, csv_weapon)
    w_extractor.set_auto_rate(template, csv_weapon)
    w_extractor.set_def_rate(template, csv_weapon)
    w_extractor.set_manual_rate(template, csv_weapon, w_type)
    w_extractor.set_is_auto(template, tags)
    w_extractor.set_capacity(template, csv_weapon)
    w_extractor.set_hands(template, tags)
    w_extractor.set_strength_boost(template, w_type)
    def_mods, all_mods = w_extractor.set_def_mods(template, csv_weapon)
    w_extractor.set_mods(template, csv_weapon, mod_extractor, ammo_extractor, proj_extractor, spell_extractor,
                         perk_extractor, mod_rows, def_mods, all_mods)
    debug_print(template, is_print)
    path = path[:path.rindex("\\") + 1] + template['name'].replace(" ", "").replace("\'", "").replace(".", "") + ".json"
    if save:
        WeaponHandler.save(path, template)


# [id, file_name]
def add_new(w_data, update_existed=True, save=True, is_print=True):
    weapons_header, weapon_rows = CSVWeapon.load_weapons()
    mods_header, mod_rows = CSVWeapon.load_weapon_mods()
    perk_header, perk_rows = CSVWeapon.load_perks()
    w_extractor = CSVWDataExtractor(weapons_header, weapon_rows)
    ammo_extractor = AmmoExtractor(weapons_header)
    proj_extractor = ProjExtractor(weapons_header, weapon_rows)
    spell_extractor = SpellExtractor()
    mod_extractor = ModExtractor(mods_header)
    perk_extractor = PerkExtractor(perk_header, perk_rows)
    if update_existed:
        ammo_extractor.load()
        proj_extractor.load()
        spell_extractor.load()
        mod_extractor.load()
        perk_extractor.load()
    k = 0
    for w in w_data:
        idd = w[0]
        file_name = w[1]
        template = WTemplate.get_empty_template()
        template["id"] = idd
        csv_weapon = weapon_rows[idd]
        path = Root.build_path_from_root(["client", "src", "resources", "weaponTemplates", file_name + ".json"])
        fill_and_save(k, template, csv_weapon, w_extractor, ammo_extractor, proj_extractor,
                      spell_extractor, mod_extractor, perk_extractor, mod_rows, path, save, is_print)
        k += 1
    if save:
        ammo_extractor.save()
        proj_extractor.save()
        spell_extractor.save()
        mod_extractor.save()
        perk_extractor.save()
k = 0


# Specific = [weapon code name,]
def update_existed(load_mods, save=True, specific=None, is_print=True):
    k = 0
    weapons_header, weapon_rows = CSVWeapon.load_weapons()
    mods_header, mod_rows = CSVWeapon.load_weapon_mods()
    perk_header, perk_rows = CSVWeapon.load_perks()
    w_extractor = CSVWDataExtractor(weapons_header, weapon_rows)
    ammo_extractor = AmmoExtractor(weapons_header)
    proj_extractor = ProjExtractor(weapons_header, weapon_rows)
    spell_extractor = SpellExtractor()
    mod_extractor = ModExtractor(mods_header)
    perk_extractor = PerkExtractor(perk_header, perk_rows)
    if load_mods:
        proj_extractor.load()
        ammo_extractor.load()
        spell_extractor.load()
        mod_extractor.load()
        perk_extractor.load()

    def handler(path, weapon):
        global k
        if specific and not specific.__contains__(weapon['cName']):
            return
        template = WTemplate.get_empty_template()
        template["id"] = weapon["id"]
        csv_weapon = weapon_rows[weapon["id"]]
        fill_and_save(k, template, csv_weapon, w_extractor, ammo_extractor, proj_extractor, spell_extractor,
                      mod_extractor, perk_extractor, mod_rows, path, save, is_print)
        k += 1

    WeaponHandler.handle_weapons_from_client(handler)
    if save:
        ammo_extractor.save()
        proj_extractor.save()
        spell_extractor.save()
        mod_extractor.save()
        perk_extractor.save()


if __name__ == '__main__':
    update_existed(False, True, is_print=True)
    # MissedWeaponChecker.print_all()
    # WatsonMod.print_mod_operations()
    # WatsonMod.print_actor_values()
    # MutationsInfo().print_mutations_info()
