// import Image from "next/image"; Requires width in advance so just use img or bootstrap version to not mess with it
import Image from 'react-bootstrap/Image';
import { memo } from 'react';


// <Image {...props} />
const ImageMemory = memo(function ImageMemory(props) {
    const style = {width: props.width, height: props.height, borderRadius: props.borderRadius, maxHeight: props.maxHeight};
    let src;
    try {
        src = (props.url) ? props.url : props.src.default.src;
    } catch {
        return (null);
    }
    return (
        <Image priority={props.priority} alt={props.alt} style={style} src={src} />
    )
});

export default ImageMemory;