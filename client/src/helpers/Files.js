export function getTextFileRef(content) {
    return URL.createObjectURL(new Blob([content], {type: 'text/plain'}));
}

export function getJsonFileRef(content) {
    return URL.createObjectURL(new Blob([content], {type: 'application/json'}));
}
