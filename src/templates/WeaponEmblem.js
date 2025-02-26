import { getImageElement } from '../helpers/WeaponImages';
import TemplateTools from './TemplateTools';
import Card from 'react-bootstrap/Card';


export default function WeaponEmblem(props) {
    let iconName = props.iconName;
    let className = "shadow-outline-gold";
    if (props.className) {
        className = props.className;
    }
    if (props.template) {
        iconName = TemplateTools.getImage(props.template);
    }
    return (
        <Card className={"p-0 m-0 " + className} style={{maxHeight: props.emblemSize, width: props.emblemSize}}>
            <Card.Body className="p-1 m-0">
                {getImageElement(iconName, props.imageSize)}
            </Card.Body>
        </Card>
    );
}