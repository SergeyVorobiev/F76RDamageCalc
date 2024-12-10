function getButtons(pairs, selectedValue, onClick) {
    const result = [];
    let style = null;
    for(const name in pairs) {
        const value = pairs[name];
        if (selectedValue === value) {
            style = {color: '#0068ae', borderColor: '#0098ff', marginRight: '1px'};
        } else {
            style = {marginRight: '1px'};
        }
        result.push(<button key={name} type="button" value={value} style={style} onClick={onClick} className="btn btn-blue-white">{name}</button>);
    }
    return result;
}

/**
    pairs={{Name1: value1, Name2: value2, ...}}
    selectedValue={currentValue}
    setSelectedValue={setSelectedValue} can be null if onClick is set
    onClick, if null then setSelectedValue is used
*/
export default function BSRadio(props) {
    let onClick = null;
    if (!props.onClick) {
        onClick = onClick = (e) => {
            if (props.setSelectedValue) {
                if (props.parseValueInt) {
                    props.setSelectedValue(parseInt(e.target.value));
                } else {
                    props.setSelectedValue(e.target.value);
                }
            }
        };
    } else {
        onClick = props.onClick;
    }
    return (
        <div className={props.className}>
            <div className="btn-group" role="group">
                {getButtons(props.pairs, props.selectedValue, onClick)}
            </div>
        </div>
    );
}