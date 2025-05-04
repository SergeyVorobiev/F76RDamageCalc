import { memo } from 'react';
import CalcResultItem from "./CalcResultItem";


function compareItems(item1, item2) {
    if (item1 === null && item2 === null) {
        return 0;
    } else if (item1 === null) {
        return 1;
    } else if (item2 === null) {
        return -1;
    }
    const time1 = item1.bestTimeCount;
    const time2 = item2.bestTimeCount;
    if (time1 < time2) {
        return -1;
    } else if (time2 < time1) {
        return 1;
    }
    return 0;
}

const CalcResultItems = memo(function CalcResultItems(props) {
    let result = [];
    const resultView = [];
    for (let i = 0; i < props.calcItems.length; i++) {
        const item = props.calcItems[i];
        result.push(item);
    }
    result = result.sort(compareItems);
    for (let i = 0; i < result.length; i++) {
        const item = result[i];
        resultView.push(<CalcResultItem key={item.wName} title={item.wName} finishedRef={props.finishedRef} setWNameToApply={props.setWNameToApply} config={item.config} wName={item.wName} bestTime={item.bestTime} iconName={item.iconName}></CalcResultItem>);
    }
    return (
        <>
            {resultView}
        </>
    );
});

export default CalcResultItems;