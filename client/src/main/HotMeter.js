import { Progress } from 'antd';
import { getHotPercentage } from '../helpers/Item';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState, useEffect } from 'react';


export default function HotMeter({creatures, steps, colors}) {
    const [index, setIndex] = useState(0);
    let copyColors = [...colors];
    let shiftIndex = index + 20;
    shiftIndex = (shiftIndex > 49) ? 49 : shiftIndex;
    copyColors[index] = copyColors[shiftIndex];
    const percent = getHotPercentage(creatures);
    const limit = percent / 2;
    const setCount = () => {
        let newIndex = index + 1;
        if (newIndex > limit) {
            newIndex = 0;
        }
        setIndex(newIndex);
    }
    useEffect(() => {
        const interval = setInterval(() => setCount(), 100);
        return () => clearInterval(interval);
    }, [index, limit]);
    return (
        <div className='input-group d-flex justify-content-center p-0'>
            <InputGroup.Text>
                &#128293;
            </InputGroup.Text>
            <InputGroup.Text>
                <Progress showInfo={false} percent={percent} steps={steps} type="line" size="small" strokeColor={copyColors} />
            </InputGroup.Text>
        </div>
    );
}