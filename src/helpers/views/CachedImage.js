import ImageMemory from "./ImageMemory";
import { memo } from 'react';
import ImageURLPool from '../../loading/ImageURLPool';


const CachedImage = memo(function CachedImage(props) {
    let url = null;
    if (props.noLoad) {
        url = ImageURLPool.getURL(props.src);
    } else {
        url = ImageURLPool.buildURL(props.src);
    }
    return (
        <ImageMemory {...props} url={url} />
    );
});

export default CachedImage;