function getWidths(size, columns) {
    let rest = size - columns;
    const rows = [columns];
    while (rest > 0) {
        if (rest < columns) {
            rows.push(rest);
        } else {
            rows.push(columns);
        }
        rest -= columns;
    }
    const widths = [];
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        for (let j = 0; j < row; j++) {
            widths.push((100 / row).toFixed(2) + "%");
        }

    }
    return widths;
}

export default function ModsCalcRowView(props) {
    const modViews = [];
    let columns = 0;
    let modView = [];
    const wrap = (props.wrapText) ? 'wrap' : 'nowrap';
    if (props.mods.length < 2) {
        columns = 1;
    } else if (props.mods.length < 5) {
        columns = 2;
    } else if (props.mods.length < 7) {
        columns = 3;
    } else {
        columns = 4;
    }
    const widths = getWidths(props.mods.length, columns);
    for (let i = 0; i < props.mods.length; i++) {
        const mod = props.mods[i];
        const width = widths[i];
        modView.push(
            <div key={mod.name} className="mod-item-shadow m-1 ps-1 pe-1" style={{width: width, display: 'flex', alignItems: 'center', justifyContent: 'center'}}><div style={{textWrap: wrap, fontWeight: 'bold', textAlign: 'center', color: '#555555', fontSize: props.fontSize, overflow: 'hidden', textOverflow: 'ellipsis'}}>{mod.name}</div></div>
        );
        if (((i + 1) % columns) === 0) {
            modViews.push(<div key={i} className="mb-0 d-flex justify-content-center">{modView}</div>);
            modView = [];
        }
    }
    if (modView.length > 0) {
        modViews.push(<div key={props.mods.length} className="mb-0 d-flex justify-content-center">{modView}</div>);
    }
    return (
        <div className="m-0 p-0" style={{minHeight: props.minHeight}}>
            {modViews}
        </div>
    );
}