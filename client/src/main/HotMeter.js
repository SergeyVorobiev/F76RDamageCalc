import { Progress } from 'antd';
import { getHotPercentage } from '../helpers/Item';
import InputGroup from 'react-bootstrap/InputGroup';


export default function HotMeter({creatures, steps, colors}) {
    const percent = getHotPercentage(creatures);
    return (
        <div class='input-group d-flex justify-content-center p-0'>
            <InputGroup.Text>
                &#128293;
            </InputGroup.Text>
            <InputGroup.Text>
                <Progress showInfo={false} percent={percent} steps={steps} size="small" strokeColor={colors} />
            </InputGroup.Text>
        </div>
    );
}