import WeaponTemplate from './WeaponTemplate';
import { memo, useState, useEffect } from 'react';
import { Pagination } from 'antd';
import { Skeleton } from 'antd';
import Accordion from 'react-bootstrap/Accordion';
import WeaponToastTechnicals from '../damage/WeaponToastTechnicals';
import { useRef } from 'react';


function getSkeletons(size) {
    let result = [];
    for (let i = 0; i < size; i++) {
        result.push(
            <div key={i} className="p-1">
                <Accordion.Item className="p-1 m-0 out-accordion">
                    <div className="p-1" style={{height: '3rem'}}>
                        <Skeleton avatar paragraph={{ rows: 0, }} />
                    </div>
                </Accordion.Item>
            </div>
        );
    }
    return result;
}

const TemplateItems = memo(function TemplateItems(props) {
    console.log("TemplateItems");
    const [wData, setWData] = useState({paginated: [], total: 0, loaded: false});
    const [showTechnicalToast, setShowTechnicalToast] = useState(false);
    const [technicalToastTemplate, setTechnicalToastTemplate] = useState(null);
    const [toastRerender, setToastRerender] = useState({});
    const showTechnicalToastRef = useRef(null);
    const setShowTechnicalToastRef = useRef(null);
    const setTechnicalToastTemplateRef = useRef(null);
    const technicalToastTemplateRef = useRef(null);
    const setToastRerenderRef = useRef(null);
    showTechnicalToastRef.current = showTechnicalToast;
    setShowTechnicalToastRef.current = setShowTechnicalToast;
    setTechnicalToastTemplateRef.current = setTechnicalToastTemplate;
    technicalToastTemplateRef.current = technicalToastTemplate;
    setToastRerenderRef.current = setToastRerender;
    const filterByName = (item) => {
        if (props.filterName === "" || props.filterName === null) {
            return true;
        }
        if (item.id.startsWith(props.filterName.trim())) {
            return true;
        }
        return item.name.toLowerCase().includes(props.filterName.toLowerCase().trim());
    };

    const filterByType = (item) => {
        if (props.weaponType === "All") {
            return true;
        }
        return item.type.includes(props.weaponType);
    }

    // TODO: Not correct as it re-renders trice instead of twice.
    useEffect(() => {
        setWData({paginated: [], current: wData.paginated.length, total: wData.total, loaded: false});

        // Pray with might for those who called this 'setTimeout', 'setInterval' to be burning in hell as long as possible.
        setTimeout(() => {
                const [paginated, total] = prepareTemplates(props, filterByName, filterByType, showTechnicalToastRef, setShowTechnicalToastRef, technicalToastTemplateRef, setTechnicalToastTemplateRef, setToastRerenderRef);
                setWData({paginated: paginated, current: paginated.length, total: total, loaded: true});
            }, 200
        );
    }, [props.page, props.weaponType, props.filterName, props.pageSize, props.templates]);
    function showData() {
        if (!wData.loaded) {
            return (
                <>
                    {getSkeletons(wData.total)}
                    <div className="mb-2" />
                    <Pagination align="center" disabled current={props.page} onChange={null} defaultPageSize={props.pageSize} total={wData.total} />
                </>
            );
        } else {
            return (
                <>
                    <WeaponToastTechnicals show={showTechnicalToast} setShow={setShowTechnicalToast} template={technicalToastTemplate} toastRerender={toastRerender} />
                    {wData.paginated}
                    <div className="mb-1" />
                    <Pagination className="mb-2" align="center" current={props.page} defaultPageSize={props.pageSize} onChange={props.onPageChanged} total={wData.total} />
                </>
            );
        }
    }
    return (
       <>{showData()}</>
    );
});

export default TemplateItems;

function prepareTemplates(props, filterByName, filterByType, showTechnicalToastRef, setShowTechnicalToastRef, technicalToastTemplateRef, setTechnicalToastTemplateRef, setToastRerenderRef) {
    const items = props.templates.filter(filterByType).filter(filterByName).map((template) => <WeaponTemplate setToastRerenderRef={setToastRerenderRef} showTechnicalToastRef={showTechnicalToastRef} setTechnicalToastTemplateRef={setTechnicalToastTemplateRef} technicalToastTemplateRef={technicalToastTemplateRef} setShowTechnicalToastRef={setShowTechnicalToastRef} key={template.index} onTestClick={props.onTestClick} modsSetter={props.modsSetter} template={template} setModalTemplate={props.setModalTemplate} setModalCalculate={props.setModalCalculate}></WeaponTemplate>);
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