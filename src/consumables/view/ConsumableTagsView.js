import { Tag, Divider } from 'antd';
import ConsumableTools from '../ConsumableTools';


function getTagView(tag, color) {
    const tagName = ConsumableTools.getTagName(tag);
    return (
        <Tag key={tagName} className="mt-1 m-auto d-flex" bordered={true} color={color}>
            <b><small>{ConsumableTools.removePrefixSuffix(tagName)}</small></b>
        </Tag>
    );
}

export default function ConsumableTagsView(props) {
    if (props.tags && props.tags.length > 0) {
        const result = [];
        for (let i = 0; i < props.tags.length; i++) {
            result.push(getTagView(props.tags[i], props.color));
        }
        return (
            <div className={props.className}>
                 <Divider className="p-0 m-0"><small>{props.title}</small></Divider>
                 <div style={{flexWrap: "wrap"}} className="d-flex justify-content-center">
                    {result}
                </div>
            </div>
        );
    }
    return (<></>);
}