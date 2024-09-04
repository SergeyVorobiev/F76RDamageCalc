import json


class BaseExtractor:

    def __init__(self, path):
        self.path = path
        self.data = {}

    def save(self):
        with open(self.path, 'w') as f:
            json.dump(list(self.data.values()), f)

    def update(self, obj):
        if obj is None:
            return
        self.data[obj['id']] = obj

    def load(self):
        try:
            with open(self.path) as f:
                file_data = json.load(f)
                if file_data is not None:
                    for row in file_data:
                        self.data[row['id']] = row
        except:
            ...
