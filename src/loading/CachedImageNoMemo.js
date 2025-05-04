import ImageURLPool from './ImageURLPool';
import Image from 'react-bootstrap/Image';


export default function CachedImageNoMemo(props) {
    let url = null;
    if (props.noLoad) {
        url = ImageURLPool.getURL(props.src);
    } else {
        url = ImageURLPool.buildURL(props.src);
    }
    if (!url) {
        return null;
    }
    let style = props.style;
    if (style) {
        style.width = (props.width) ? props.width : style.width;
        style.height = (props.height) ? props.height : style.height;
        style.borderRadius = props.borderRadius;
        style.maxHeight = props.maxHeight;
    } else {
        style = {width: props.width, height: props.height, borderRadius: props.borderRadius, maxHeight: props.maxHeight};
    }
    return (
        <Image className={props.className} priority={props.priority} alt={props.alt} style={style} src={url} />
    );
}