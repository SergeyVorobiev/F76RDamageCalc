// import Image from "next/image"; Requires width in advance so just use img or bootstrap version to not mess with it
import Image from 'react-bootstrap/Image';
import { memo } from 'react';


// <Image {...props} />
const ImageMemory = memo(function ImageMemory(props) {
    let style = props.style;
    if (style) {
        style.width = props.width;
        style.height = props.height;
        style.borderRadius = props.borderRadius;
        style.maxHeight = props.maxHeight;
    } else {
        style = {width: props.width, height: props.height, borderRadius: props.borderRadius, maxHeight: props.maxHeight};
    }

    const src = props.url;
    if (!src) {
        return null;
    }
    return (
        <Image priority={props.priority} className={props.className} alt={props.alt} style={style} src={src} />
    );
});

export default ImageMemory;