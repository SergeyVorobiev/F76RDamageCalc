import getTemplates from '../helpers/TemplatesRegister';
import WeaponTemplate from './WeaponTemplate';
import { memo, useState } from 'react';


function buildTemplates() {
    const templates = getTemplates();
    for (let i = 0; i < templates.length; i++) {
        templates[i].index = i;
    }
    return templates;
}

const TemplateItems = memo(function TemplateItems(props) {
    const [templates] = useState(buildTemplates());

    const filterByName = (item) => {
        if (props.filterName === "" || props.filterName === null) {
            return true;
        }
        return item.name.includes(props.filterName);
    };

    const filterByType = (item) => {
        if (props.weaponType === "All") {
            return true;
        }
        return item.type.includes(props.weaponType);
    }

    const items = templates.filter(filterByType).filter(filterByName).map((template) => <WeaponTemplate key={template.index} template={template} setModalTemplate={props.setModalTemplate}></WeaponTemplate>)
    return (
        <>{items}</>
    );
});

export default TemplateItems;