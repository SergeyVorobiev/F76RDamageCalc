class Curv:

    @staticmethod
    def get_value(curv):
        curv = Curv.get_dicts(curv)
        if curv:
            max_c = curv[-1]['y']
            min_c = curv[0]['y']
            return max(max_c, min_c)  # Bloodied has max value for min 'x'
        return 0

    @staticmethod
    def get_dicts(curv):
        if curv != '' and curv != '00000000':
            if type(curv).__name__ == 'str':
                return eval(curv.split("\n")[1])['curve']
            else:
                return eval(curv[1])['curve']
        return None

    @staticmethod
    def get_all_values(curv):
        result = []
        curv = Curv.get_dicts(curv)
        if curv:
            for pair in curv:
                result.append(pair['y'])
        return result
