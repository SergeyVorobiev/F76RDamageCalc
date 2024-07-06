export function getSymbolText(symbol, text) {
    switch (symbol) {
        case "B":
            return <>&#128165; {text}</>
        case "E":
            return <>&#9889; {text}</>
        case "F":
            return <>&#128293; {text}</>;
        case "P":
            return <>☣️ {text}</>;
        case "C":
            return <>❄️ {text}</>;
        case "R":
            return <>☢️ {text}</>;
        default:
            return <>☢️ {text}</>
    }
}