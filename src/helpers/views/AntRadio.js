import { Radio } from 'antd';


function getButtons(pairs) {
    const result = [];
    for(const name in pairs) {
        result.push(<Radio.Button key={name} value={pairs[name]}>{name}</Radio.Button>);
    }
    return result;
}

/**
    pairs={{Name1: value1, Name2: value2, ...}}
    selectedValue={currentValue}
    setSelectedValue={setSelectedValue}
*/
export default function AntRadio(props) {

    const onChange = (e) => {
        props.setSelectedValue(e.target.value);
    };

    return (
        <div className={props.className}>
            <Radio.Group value={props.selectedValue} onChange={onChange}>
                {getButtons(props.pairs)}
            </Radio.Group>
        </div>
    );
}