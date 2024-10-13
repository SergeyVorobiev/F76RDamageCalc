import glob
import os

import cv2


class WEBPConverter:

    def __init__(self, folder_path, ext='png'):
        self.ext_len = ext.__len__()
        self.paths = glob.glob(folder_path + os.sep + "*." + ext)

    def convert(self, quality=95, resize=None):
        for path in self.paths:
            img = cv2.imread(path, cv2.IMREAD_UNCHANGED)
            if resize is not None:
                img = cv2.resize(img, resize, interpolation=cv2.INTER_LINEAR)
            path = path[:-self.ext_len] + "webp"
            cv2.imwrite(path, img, [cv2.IMWRITE_WEBP_QUALITY, quality])
            print("Saved: " + path)
