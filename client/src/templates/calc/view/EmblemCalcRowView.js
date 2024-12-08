import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';


const imagePathMap = new Map();

export function getMark(key, imagePath, className, iconSize, imageSize, borderRadius) {
    return (
        <Card key={key} className={"m-1 d-flex justify-content-center " + className} style={{height: iconSize, width: iconSize}}>
            <div className="d-flex justify-content-center">
                <Image style={{borderRadius: borderRadius, height: imageSize, width: imageSize}} src={imagePath} />
            </div>
        </Card>
    );
}

export default function EmblemCalcRowView(props) {
    let className = "shadow-outline-gold2";
    if (props.className) {
        className = props.className;
    }
    const views = [];
    for (let i = 0; i < props.imNames.length; i++) {
        const imName = props.imNames[i];
        if (imName) {
            let imagePath = imagePathMap.get(imName);
            if (!imagePath) {
                imagePath = props.imageProvider(imName);
                imagePathMap.set(imName, imagePath);
            }
            views.push(getMark(imName, imagePath, className, props.iconSize, props.imageSize, props.borderRadius));
        }
    }
    return (
        <Row className="d-flex justify-content-center" style={props.style}>
            {views}
        </Row>
    );
}