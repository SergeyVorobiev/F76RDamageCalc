import { mainView, detailsView } from '../../consumables/view/ConsumableToast';
import { Divider, Tag } from 'antd';


export default function AlchemyCompactView(props) {
    const alchemy = props.alchemy;
    return (
        <>
            <div className="d-flex justify-content-center mb-3">
                <Tag bordered={false} color="volcano"><b>{alchemy.full}</b></Tag>
            </div>
            {mainView(alchemy)}
            <Divider><small>Details</small></Divider>
            {detailsView(alchemy)}
        </>
    );
}