const templates = require.context('../resources/weaponTemplates', true, /\.json$/);
const templateList = templates.keys().map(template => templates(template)[0]);


export default function getTemplates() {
    return templateList;
}

// Returns a copy of a template with specified id.
export function getTemplateCopyById(id) {

    // The amount of templates will never exceed several hundreds, so it is ok.
    for (let i = 0; i < templateList.length; i++) {
        const template = templateList[i];
        if (template.id === id) {
            return JSON.parse(JSON.stringify(template));
        }
    }
    return null;
}

// Only for reading purposes
export function getTemplateById(id) {
    for (let i = 0; i < templateList.length; i++) {
        const template = templateList[i];
        if (template.id === id) {
            return template;
        }
    }
    return null;
}