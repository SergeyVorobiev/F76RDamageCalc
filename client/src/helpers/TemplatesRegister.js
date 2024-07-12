const templates = require.context('../resources/weaponTemplates', true, /\.json$/);
const templateList = templates.keys().map(template => templates(template)[0]);


export default function getTemplates() {
    return templateList;
}