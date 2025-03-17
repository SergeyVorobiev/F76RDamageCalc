export default class ImageUrlPool {

    static pool = new Map();

    static clear() {
        ImageUrlPool.pool = new Map();
    }

    // If url is not loaded the method will start to load it automatically.
    static getUrl(image) {
        const src = image.default.src;
        let object = ImageUrlPool.pool.get(src);
        if (object && object.url) {
            return object.url;
        } else if (!object || !object.loading) {
            if (!object) {
                object = {url: null, loading: true};
                ImageUrlPool.pool.set(src, object);
            } else {
                object.loading = true;
            }
            ImageUrlPool.loadUrl(src, object);
        }
        return null;
    }

    static loadUrl(src, object) {
        fetch(src).then((response) => response.blob()).then((blob) => {
            const url = URL.createObjectURL(blob);
            object.url = url;
            object.loading = false;
        }).catch((error) => {
            console.error(error);
            object.loading = false;
        });
    }
}