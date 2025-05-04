import rotatedL from '../resources/logos/bublik.webp';
import numberL from '../resources/logos/numberLogo.webp';


export default class ImageURLPool {

    static pool = new Map();

    static clear() {
        ImageURLPool.pool = new Map();
    }

    static getURL(src) {
        const obj = ImageURLPool.pool.get(src);
        if (!obj || obj.loading) {
            return null;
        }
        return obj.url;
    }

    static getSrc(image) {
        if (typeof image === typeof '') {
            return image;
        }
        try {
            return image.default.src;
        } catch {
            try {
                return image.src;
            } catch {
                return image;
            }
        }
    }

    // If url is not loaded the method will start to load it automatically.
    static buildURL(image) {
        const src = ImageURLPool.getSrc(image);
        const object = ImageURLPool.pool.get(src);
        if (object && object.url && !object.loading) {
            return object.url;
        }
        if (!object || (!object.url && !object.loading)) {
            ImageURLPool.loadURL(src);
        }
        return src;
    }

    static loadURL(src) {
        const object = {url: null, loading: true};
        ImageURLPool.pool.set(src, object);
        fetch(src).then((response) => response.blob()).then((blob) => {
            const url = URL.createObjectURL(blob);
            object.url = url;
            object.loading = false;
        }).catch((error) => {
            console.error(error);
            object.url = null;
            object.loading = false;
        });
    }

    static async loadDefaultAsync() {
        let url1 = await ImageURLPool.loadImageAsync(rotatedL);
        ImageURLPool.pool.set("gear", {url: url1, loading: false});
        let url2 = await ImageURLPool.loadImageAsync(numberL);
        ImageURLPool.pool.set("number", {url: url2, loading: false});
    }

    static async loadImageAsync(image) {
        const src = ImageURLPool.getSrc(image);
        if (ImageURLPool.pool.get(src)) {
            return;
        }
        const fetchData = async () => {
            const response = await fetch(src);
            const result = await response.blob();
            return URL.createObjectURL(result);
        }
        return fetchData();
    }
}