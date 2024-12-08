import { Radio } from 'antd';


function getButtons(pairs) {
    const result = [];
    for(const name in pairs) {
        result.push(<Radio.Button key={name} value={pairs[name]}>{name}</Radio.Button>)
    }
    return result;
}

export default function AntRadio(props) {

    const onChange = (e) => {
        props.setValue(e.target.value);
    };

    return (
        <div className={props.className}>
            <Radio.Group value={props.value} onChange={onChange}>
                {getButtons(props.pairs)}
            </Radio.Group>
        </div>
    );
}