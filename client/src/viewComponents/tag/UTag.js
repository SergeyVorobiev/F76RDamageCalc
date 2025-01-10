const darkBlue = {
    backgroundColor: '#e6f7ff',
    borderColor: '#0085c6',
    color: '#003e5d',
}

const blue = {
    backgroundColor: '#f7fbff',
    borderColor: '#0072a3',
    color: '#1d6db8',
}

const indigo = {
    backgroundColor: '#fdfaff',
    borderColor: '#5a008a',
    color: '#430067',
}

const red = {
    backgroundColor: '#fff4f4',
    borderColor: '#890000',
    color: '#c90000',
}

const orange = {
    backgroundColor: '#fffaf0',
    borderColor: '#ffa800',
    color: '#b56b1d',
}

const magenta = {
    backgroundColor: '#fff1fa',
    borderColor: '#ca007c',
    color: '#ab1672',
}

const grey = {
    backgroundColor: '#f4f4f4',
    borderColor: '#9f9f9f',
    color: '#3f3f3f',
}

const colors = {
    blue: blue,
    darkBlue: darkBlue,
    orange: orange,
    magenta: magenta,
    grey: grey,
    indigo: indigo,
    red: red,
};

export default function UTag(props) {
    const colorScheme = colors[props.color];
    const borderRadius = props.bRadius ? props.bRadius : "2px";
    const bWidth = props.bWidth ? props.bWidth : "1px";
    let bgColor = grey.backgroundColor;
    let borderColor = grey.borderColor;
    let color = grey.color;
    if (colorScheme) {
        bgColor = colorScheme.backgroundColor;
        color = colorScheme.color;
        borderColor = colorScheme.borderColor;
    }
    if (!props.border) {
        borderColor = bgColor;
    }
    const style = {
        width: "auto",
        fontSize: "0.7rem",
        fontWeight: "bold",
        backgroundColor: bgColor,
        borderRadius: borderRadius,
        borderStyle: "solid",
        borderWidth: bWidth,
        borderColor: borderColor,
        color: color,
        whiteSpace: "nowrap",
    }
    let result;
    if (props.onClick) {
       result = getButton(props, style);
    } else {
        result = getTag(props, style);
    }
    return result;
}

function getButton(props, style) {
    const className = (props.className) ? "button-3 " + props.className : "button-3";
    return (<button className={className} title={props.title} style={style} onClick={props.onClick}>{props.children}</button>);
}

function getTag(props, style) {
    return (<div title={props.title} className={props.className} style={style} onClick={props.onClick}>{props.children}</div>);
}