export function getTextFileRef(content) {
    return URL.createObjectURL(new Blob([content], {type: 'text/plain'}));
}

export function getFileRef(content) {
    return URL.createObjectURL(new Blob([content], {type: 'application/json'}));
}

export function getJsonFileRef(content) {
    return getFileRef(JSON.stringify([...content]));
}
