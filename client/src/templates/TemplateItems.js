import getTemplates from '../helpers/TemplatesRegister';
import WeaponTemplate from './WeaponTemplate';
import { memo, useState, useEffect } from 'react';
import { ModParser } from '../helpers/mods/ModParser';
import getMods from '../helpers/Mods';
import { Pagination } from 'antd';


const modParser = new ModParser();

function buildTemplates() {
    console.log("BuildTemplates")
    const templates = JSON.parse(JSON.stringify(getTemplates()));
    for (let i = 0; i < templates.length; i++) {
        const template = templates[i];
        template.index = i;
        if (!template.loadDefMods) {
            const defMods = template.defMods;
            for (let j = 0; j < defMods.length; j++) {
                const modData = getMods().get(defMods[j]);
                if (!modData) { // Appearance and some others are cut
                    continue;
                }
                modParser.applyOrRevoke(modData, template, true);
            }
            template.loadDefMods = true;
        }
    }
    return templates;
}

const TemplateItems = memo(function TemplateItems(props) {
    const [templates, setTemplates] = useState([]);
    useEffect(() => {
        setTemplates(buildTemplates());
    }, []);

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
    const items = templates.filter(filterByType).filter(filterByName).map((template) => <WeaponTemplate key={template.index} modParser={modParser} template={template} setModalTemplate={props.setModalTemplate}></WeaponTemplate>)
    let paginated = [];
    for (let i = props.startIndex; i < props.startIndex + props.pageSize; i++) {
        paginated.push(items[i]);
    }
    return (
        <>
            {paginated}
            <div className="mb-2" />
            <Pagination align="center" current={props.page} defaultPageSize={props.pageSize} onChange={props.onPageChanged} total={items.length} />
        </>
    );
});

export default TemplateItems;