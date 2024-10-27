import getTemplates from '../helpers/TemplatesRegister';
import WeaponTemplate from './WeaponTemplate';
import { memo, useState, useEffect } from 'react';
import { ModParser } from '../helpers/mods/ModParser';
import DamageExtractor from '../helpers/mods/DamageExtractor';
import DamageSetter from '../helpers/mods/DamageSetter';
import LegendarySetter from '../helpers/mods/LegendarySetter';
import ModsSetter from '../helpers/mods/ModsSetter';
import { Pagination } from 'antd';
import { Skeleton } from 'antd';
import Accordion from 'react-bootstrap/Accordion';


export const modsSetter = new ModsSetter(new LegendarySetter(), new ModParser(), new DamageExtractor(),
    new DamageSetter());

function buildTemplates() {
    console.log("BuildTemplates")
    const templates = JSON.parse(JSON.stringify(getTemplates()));
    for (let i = 0; i < templates.length; i++) {
        templates[i].index = i;
    }
    modsSetter.setTemplatesMods(templates);
    return templates;
}

function getSkeletons(size) {
    let result = [];
    for (let i = 0; i < size; i++) {
        result.push(
            <div className="p-1">
                <Accordion.Item className="p-1 m-0 out-accordion">
                    <div className="p-1" style={{height: '3rem'}}>
                        <Skeleton avatar animate paragraph={{ rows: 0, }} />
                    </div>
                </Accordion.Item>
            </div>
        );
    }
    return result;
}

const TemplateItems = memo(function TemplateItems(props) {
    const [templates, setTemplates] = useState([]);
    const [wData, setWData] = useState({paginated: [], total: 0, loaded: false});
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
    useEffect(() => {
        setWData({paginated: [], total: wData.paginated.length, loaded: false});
        fetch("").then(response => {
            const [paginated, total] = prepareTemplates(props, templates, filterByName, filterByType);
            setWData({paginated: paginated, total: total, loaded: true});
        });
    }, [props.page, props.weaponType, props.filterName, props.pageSize, templates]);
    function showData() {
        if (!wData.loaded) {
            return (
                <>
                    {getSkeletons(wData.total)}
                    <div className="mb-2" />
                    <Pagination align="center" current={props.page} defaultPageSize={props.pageSize} total={0} />
                </>
            );
        } else {
            return (
                <>
                    {wData.paginated}
                    <div className="mb-2" />
                    <Pagination align="center" current={props.page} defaultPageSize={props.pageSize} onChange={props.onPageChanged} total={wData.total} />
                </>
            );
        }
    }
    return (
       <>{showData()}</>
    );
});

export default TemplateItems;


function prepareTemplates(props, templates, filterByName, filterByType) {
    const items = templates.filter(filterByType).filter(filterByName).map((template) => <WeaponTemplate key={template.index} modsSetter={modsSetter} template={template} setModalTemplate={props.setModalTemplate}></WeaponTemplate>);
    const lastIndex = items.length - 1;
    let paginated = [];
    for (let i = props.startIndex; i < props.startIndex + props.pageSize; i++) {
        if (i > lastIndex) {
            break;
        }
        paginated.push(items[i]);
    }
    return [paginated, items.length];
}