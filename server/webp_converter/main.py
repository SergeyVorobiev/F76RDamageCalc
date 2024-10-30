import Root
from server.webp_converter.WEBPConverter import WEBPConverter


if __name__ == "__main__":
    #  icons = Root.build_path_from_client(["src", "resources", "icons"])
    #  WEBPConverter(icons).convert(quality=80, resize=(256, 256))

    #  weapons = Root.build_path_from_client(["src", "resources", "weapon_icons"])
    #  WEBPConverter(weapons).convert(quality=80)

    # names = ["bobbleHeads", "drink", "food", "magazines", "others", "psycho", "serums"]
    # for name in names:
    #     stuff = Root.build_path_from_client(["src", "resources", "boostStuff", name])
    #     WEBPConverter(stuff).convert(quality=80)

    # readme = Root.build_path_from_client(["src", "resources", "forReadme"])
    cal50 = Root.build_path_from_client(["src", "resources", "forReadme", "Tests", "50Cal"])
    WEBPConverter(cal50).convert(quality=80)

