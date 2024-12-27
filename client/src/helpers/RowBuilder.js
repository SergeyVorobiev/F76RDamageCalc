import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Tag } from 'antd';


let k = 0;
export function keyValueRow(name, value, colorName="purple", colorValue="red", m=1) {
    const rowProps = "flex-nowrap ps-0 pe-0 m-" + m;
    return (
        <Row key={k++} className={rowProps}>
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

export function leftRight(left, right, xsLeft=6, xsRight=6, rowClass=null) {
    return (

        <Row key={k++} className={rowClass}>
            <Col xs={xsLeft} className="d-flex justify-content-start pe-0">
                {left}
            </Col>
            <Col xs={xsRight} className="d-flex justify-content-end ps-0">
                {right}
            </Col>
        </Row>

    );
}

export function getTagFlexView(tag, tagClassName, color, bordered, align) {
    return (
        <div className={"d-flex justify-content-" + align}>
            <Tag key={tag} className={tagClassName} bordered={bordered} color={color}>
                {tag}
            </Tag>
        </div>
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

export function keyValueBadge(clazz, width, leftContent, rightContent, key=-1) {
    const row = (
        <Row className="flex-nowrap ps-0 pe-0 ms-0 me-0">
            <Col className="text-start text-nowrap pe-0 ps-0 ms-0 mt-auto mb-auto">
                {leftContent}
            </Col>
            <Col className="text-end text-nowrap ps-0 pe-0 me-0 mt-auto mb-auto">
                {rightContent}
            </Col>
        </Row>
    );
    if (key > -1) {
        return (
            <div key={key} style={{ width: width }} className={clazz}>
                {row}
            </div>
        );
    } else {
        return (
            <div style={{ width: width}} className={clazz}>
                {row}
            </div>
        );
    }
}