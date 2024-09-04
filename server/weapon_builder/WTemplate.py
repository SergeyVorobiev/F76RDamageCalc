class WTemplate:

    @staticmethod
    def get_empty_template():
        result = {}
        result["name"] = ""
        result["cName"] = ""
        result["type"] = [""]
        result["tags"] = ""
        result["level"] = 0
        result["id"] = ""
        result["damageData"] = ""
        result["spellId"] = ""
        result["ammoId"] = ['', '']
        result["expProjId"] = [[], []]
        result["ammoProjId"] = [[], []]
        result["bbDamage"] = [0, 0]
        result["bmDamage"] = [0, 0]
        result["btDamage"] = [0, 0]

        result["ebDamage"] = [0, 0]
        result["emDamage"] = [0, 0]
        result["etDamage"] = [0, 0]

        result["fbDamage"] = [0, 0]
        result["fmDamage"] = [0, 0]
        result["ftDamage"] = [0, 0]

        result["pbDamage"] = [0, 0]
        result["pmDamage"] = [0, 0]
        result["ptDamage"] = [0, 0]

        result["cbDamage"] = [0, 0]
        result["cmDamage"] = [0, 0]
        result["ctDamage"] = [0, 0]

        result["rbDamage"] = [0, 0]
        result["rmDamage"] = [0, 0]
        result["rtDamage"] = [0, 0]

        result["projExp"] = [0, 0]
        result["ammoExp"] = [0, 0]

        result["shotSize"] = [1, 1]
        result["reloadTime"] = [0, 0]
        result["reloadSpeed"] = [1, 1]
        result["autoRate"] = [0, 0]
        result["manualRate"] = [0, 0]
        result["isAuto"] = [0, 0]
        result["capacity"] = [1, 1]
        result["antiArmor"] = [0, 0]
        result["hand"] = [1, 1]
        result["strengthBoost"] = [0, 0]
        result["crit"] = [0, 0]
        result["sneak"] = [0, 0]
        result["bleed"] = [0, 0]
        result["exp"] = [0, 0]
        result["cd"] = [0, 0]
        result["creatureType"] = ["Any", "Any"]
        result["bash"] = [0, 0]
        result["accuracy"] = [100, 100]
        result["ap"] = [0, 0]
        result["weight"] = [0, 0]
        result["mods"] = []
        result["allMods"] = {}
        result["apply"] = True
        result["levels"] = ""
        result["crMult"] = 2
        result["crChar"] = 1
        result["crSpellId"] = [[], []]
        result["loadDefMods"] = False
        return result