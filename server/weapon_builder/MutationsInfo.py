from server.weapon_builder.MutationsExtractor import MutationsExtractor


class MutationsInfo:

    def __init__(self):
        self.extractor = MutationsExtractor()

    def _print_values(self, values, header):
        print(f"=========={header}==========\n")
        for value in values:
            print(value)
        print("\n==============================\n")

    def print_mutations_info(self):
        self._print_values(self.extractor.get_eagle_eyes_values(), "EAGLE EYES")
        self._print_values(self.extractor.get_herd_mentality_values(), "HERD MENTALITY")
        self._print_values(self.extractor.get_speed_demon_values(), "SPEED DEMON")
        self._print_values(self.extractor.get_talons1_values(), "TALONS1")
        self._print_values(self.extractor.get_talons2_values(), "TALONS2")
        self._print_values(self.extractor.get_twisted_muscles1_values(), "TWISTED MUSCLES1")
        self._print_values(self.extractor.get_twisted_muscles2_values(), "TWISTED MUSCLES2")
        print("=======ADRENAL REACTION=======\n")
        val1, val2 = self.extractor.get_adrenal_reaction_values()
        print(val1)
        print(val2)
        print("\n==============================\n")
