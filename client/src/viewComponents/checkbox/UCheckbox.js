// Custom checkbox
export function UCheckbox(props) {
    let className = "form-check-input ";
    if (props.className) {
        className += props.className;
    }
    let bgColor = null;
    let bColor = null;
    if (props.checkBgColor && props.checked) {
        bgColor = props.checkBgColor;
    }
    if (props.checkBorderColor && props.checked) {
        bColor = props.checkBorderColor;
    }
    const ms = (props.children) ? "ms-1" : "ms-0";
    return (
        <div>
            <input id={props.id} title={props.title} style={{cursor: 'pointer', borderColor: bColor, backgroundColor: bgColor}} className={className} type="checkbox" disabled={props.disabled} checked={props.checked} onChange={props.onChange} />
            <label className={"form-check-label " + ms}>
                {props.children}
            </label>
        </div>
    );
}