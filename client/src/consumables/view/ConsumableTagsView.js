import { Tag, Divider } from 'antd';
import ConsumableTools from '../ConsumableTools';


function getTagView(tag, color) {
    return (
        <Tag key={tag} className="mt-1" bordered={true} color={color}>
            <b><small>{ConsumableTools.removePrefixSuffix(tag)}</small></b>
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
                {result}
            </div>
        );
    }
    return (<></>);
}