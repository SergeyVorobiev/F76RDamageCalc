import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Tag} from 'antd';


export function keyValueRow(name, value, colorName="purple", colorValue="red") {
    return (
       <Row className="flex-nowrap ps-0 pe-0 ms-0 me-0">
          <Col className="text-start text-nowrap ps-0 ms-0">
            <strong>
                 <Tag bordered={false} color={colorName}>{name}</Tag>
            </strong>
          </Col>

          <Col className="text-end text-nowrap pb-1 pe-0 me-0">
              <strong >
                <Tag className="me-0" color={colorValue}>{value}</Tag>
              </strong>
          </Col>
       </Row>
    );
}