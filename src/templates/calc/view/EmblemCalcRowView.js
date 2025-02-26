import Card from 'react-bootstrap/Card';
import Image from "next/image";
import Row from 'react-bootstrap/Row';


export function getMark(key, imagePath, className, iconSize, imageSize, borderRadius) {
    return (
        <Card key={key} className={"m-1 d-flex justify-content-center " + className} style={{height: iconSize, width: iconSize}}>
            <div className="d-flex justify-content-center">
                <Image priority="true" alt="Weapon emblem" style={{borderRadius: borderRadius, height: imageSize, width: imageSize}} src={imagePath} />
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
            const imagePath = props.imageProvider(imName);
            views.push(getMark(imName, imagePath, className, props.iconSize, props.imageSize, props.borderRadius));
        }
    }
    return (
        <Row className="d-flex justify-content-center" style={props.style}>
            {views}
        </Row>
    );
}