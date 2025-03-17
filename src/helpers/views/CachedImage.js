import ImageMemory from "./ImageMemory";
import { memo } from 'react';
import ImagesUrlPool from '../ImagesUrlPool';


const CachedImage = memo(function CachedImage(props) {
    const url = ImagesUrlPool.getUrl(props.src);
    return (
        <ImageMemory {...props} url={url} />
    );
});

export default CachedImage;