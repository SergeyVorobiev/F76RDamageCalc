import { Divider } from 'antd';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';


export default function AmmoInfoView({wSpec}) {
    const name = wSpec.ammoType.name;
    const type = wSpec.ammoType.type;
    const codeName = wSpec.ammoType.codeName;
    if (name && name !== "") {
        return (
            <>
                <Divider className="p-0 mt-3 mb-0">Ammo</Divider>
                <Row className="mt-2 mb-3">
                     <Col>
                         <InputGroup className="mb-1 mt-1 d-flex justify-content-center">
                             <InputGroup.Text className="p-1 justify-content-center shadow-outline-ammo" style={{ minWidth: '18rem' }}><small>{type}</small></InputGroup.Text>
                         </InputGroup>
                     </Col>
                     <Col>
                         <InputGroup className="mb-1 mt-1 d-flex justify-content-center">
                             <InputGroup.Text className="p-1 justify-content-center shadow-outline-ammo" style={{ minWidth: '18rem' }}><small>{name}</small></InputGroup.Text>
                         </InputGroup>
                     </Col>
                     <Col>
                         <InputGroup className="mb-1 mt-1 d-flex justify-content-center">
                             <InputGroup.Text className="p-1 justify-content-center shadow-outline-ammo" style={{ minWidth: '18rem' }}><small>{codeName}</small></InputGroup.Text>
                         </InputGroup>
                     </Col>
                </Row>
            </>
        );
    }
    return (<></>);
}