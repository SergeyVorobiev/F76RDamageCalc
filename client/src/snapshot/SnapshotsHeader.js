import {UploadIcon, DownloadIcon} from '../icons/Icons';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import BSRadio from '../helpers/views/BSRadio';
import { memo } from 'react';


const sortNames = {Average: 0, SBQ: 1, Earle: 2, 'U-Titan': 3};
const SnapshotsHeader = memo(function SnapshotsHeader({items, setModalDownloadSnapshots, setModalUploadSnapshots, sortId, setSortId}) {
    console.log("SnapshotsHeader");
    function downloadButton() {
        return (
            <Button onClick={()=>setModalDownloadSnapshots(true)}>
                <UploadIcon />
            </Button>
        );
    }

    function uploadButton(className) {
        return (
            <Button className={className} onClick={()=>setModalUploadSnapshots(true)}>
                <DownloadIcon />
            </Button>
        );
    }

    if (items.map.size === 0) {
        return (
            <Row>
                <Col>
                    <div className='d-flex justify-content-end'>
                        {uploadButton("ms-3")}
                    </div>
                </Col>
            </Row>
        );
    } else if (items.map.size === 1) {
        return (
            <Row>
                <Col>
                    <div className='d-flex justify-content-end'>
                        {downloadButton()}
                        {uploadButton("ms-3")}
                    </div>
                </Col>
            </Row>
        );
    }

    return (
        <>
            <div className="row d-flex justify-content-center mb-3">
                <Col className="col">
                    <span>
                        {downloadButton()}
                        {uploadButton("ms-3")}
                    </span>
                </Col>
            </div>
            <div className="row d-flex justify-content-center pt-1 mb-1">
                <Col className="col">
                    <div>
                        <BSRadio pairs={sortNames} selectedValue={sortId} setSelectedValue={setSortId} parseValueInt={true} />
                    </div>
                </Col>
            </div>
        </>
    );
});

export default SnapshotsHeader;