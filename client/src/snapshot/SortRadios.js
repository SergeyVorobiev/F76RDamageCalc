import { Radio } from 'antd';


export default function SortRadios({algIndex, setSortId}) {

    const onChange = (e) => {
        setSortId(parseInt(e.target.value));
    };

    return (
        <Radio.Group value={algIndex.toFixed(0)} onChange={onChange}>
            <Radio.Button value="0">SBQ</Radio.Button>
            <Radio.Button value="1">Earle</Radio.Button>
            <Radio.Button value="2">U-Titan</Radio.Button>
            <Radio.Button value="3">Average</Radio.Button>
        </Radio.Group>
    );
}