// Custom checkbox
export function UCheckbox(props) {
    let className = "form-check-input";
    if (props.className) {
        className = props.className;
    }
    let bgColor = null;
    if (props.checkBgColor && props.checked) {
        bgColor = props.checkBgColor;
    }
    return (
        <div>
            <input id={props.id} title={props.title} style={{cursor: 'pointer', backgroundColor: bgColor}} className={className} type="checkbox" disabled={props.disabled} checked={props.checked} onChange={props.onChange} />
            <label className="form-check-label">
                {props.children}
            </label>
        </div>
    );
}