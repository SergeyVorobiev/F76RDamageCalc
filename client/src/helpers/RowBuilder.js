import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Tag } from 'antd';


export function keyValueRow(name, value, colorName="purple", colorValue="red", m=1) {
    const rowProps = "flex-nowrap ps-0 pe-0 m-" + m;
    return (
       <Row className={rowProps}>
          <Col className="text-start text-nowrap ps-0 ms-0 pe-0 me-0">
            <strong>
                 <Tag bordered={false} color={colorName}>{name}</Tag>
            </strong>
          </Col>

          <Col className="text-end text-nowrap pb-0 pe-0 me-0 ps-0 pe-0">
              <strong >
                <Tag className="me-0" color={colorValue}>{value}</Tag>
              </strong>
          </Col>
       </Row>
    );
}

export function keyValueTag(leftContent, rightContent, color="default", style={}, bordered=true) {
    return (
        <Tag className="ps-1 pe-1 m-1" bordered={bordered} color={color} style={style}>
            <Row className="flex-nowrap ps-0 pe-0 ms-0 me-0">
                <Col className="text-start text-nowrap ps-0 ms-0 pe-0 me-0 mt-auto mb-auto">
                    <strong>{leftContent}</strong>
                </Col>
                <Col className="text-end text-nowrap pe-0 me-0 ps-0 pe-0 mt-auto mb-auto">
                    <strong>{rightContent}</strong>
                </Col>
            </Row>
        </Tag>
    );
}

export function keyValueBadge(clazz, width, leftContent, rightContent) {
    return (
        <span style={{ width: width }} class={clazz}>
            <Row className="flex-nowrap ps-0 pe-0 ms-0 me-0">
                <Col className="text-start text-nowrap ps-0 ms-0 mt-auto mb-auto">
                    {leftContent}
                </Col>
                <Col className="text-end text-nowrap pe-0 me-0 mt-auto mb-auto">
                    {rightContent}
                </Col>
            </Row>
        </span>
    );
}