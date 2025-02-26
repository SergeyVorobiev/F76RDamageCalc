import Row from 'react-bootstrap/Row';


export default function ModView(props) {
    const mods = props.mods;
    const fontSize = (props.fontSize) ? props.fontSize : '0.7rem';
    const fontWeight = (props.fontWeight) ? props.fontWeight : 'bold';
    const modView = [];
    for (let i = 0; i < mods.length; i++) {
        const mod = mods[i];
        modView.push(
            <div key={mod.name} style={{width: 'auto'}} className="mod-item-shadow m-1 ps-1 pe-1"><div style={{width: 'auto', textWrap: false, fontWeight: fontWeight, textAlign: 'center', color: '#555555', fontSize: fontSize, overflow: 'hidden', textOverflow: 'ellipsis'}}>{mod.name}</div></div>
        );
    }
    return (
        <Row className="d-flex justify-content-center m-1">
            {modView}
        </Row>
    );
}