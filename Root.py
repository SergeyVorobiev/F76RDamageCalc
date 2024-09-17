import os

ROOT_DIR = os.path.dirname(os.path.abspath(__file__))
CLIENT_DIR = ROOT_DIR + os.sep + "client"
SERVER_DIR = ROOT_DIR + os.sep + "server"


def build_path_from_root(names):
    return build_path(ROOT_DIR, names)


def build_path_from_client(names):
    return build_path(CLIENT_DIR, names)


def build_path_from_server(names):
    return build_path(SERVER_DIR, names)


def build_path(root, names):
    if type(names).__name__ == 'tuple' or type(names).__name__ == 'list':
        for r in names:
            root = os.path.join(root, str(r))
        return root
    else:
        return os.path.join(root, names)
