export default function LegendaryCalcRowView(props) {
    function getLeg(stars, index) {
        return getRow(stars, props.legendary[index], props.width, false, props.fontSize, props.starSize);
    }
    const leg1 = getLeg("⭐", 0);
    const leg2 = getLeg("⭐⭐", 1);
    const leg3 = getLeg("⭐⭐⭐", 2);
    const leg4 = getLeg("⭐⭐⭐⭐", 3);
    const leg5 = getLeg("⭐⭐⭐⭐⭐", 4);
    return (
        <>
            <div className="mb-0 d-flex justify-content-center">
                {leg1}
                {leg2}
                {leg3}
            </div>
            <div className="mb-0 d-flex justify-content-center">
                {leg4}
                {leg5}
            </div>
        </>
    );
}

function getRow(stars, text, width, wrap, fontSize, starSize) {
    return (
        <div className="bg-yellow m-1 shadow-gold ps-1 pe-1" style={{width: width}}>
            <div className="d-flex justify-content-center" style={{fontSize: starSize}}>
                {stars}
            </div>
            <div style={{textWrap: wrap, fontWeight: 'bold', textAlign: 'center', fontSize: fontSize, overflow: 'hidden', textOverflow: 'ellipsis'}}>
                {text}
            </div>
        </div>
    );
}