import Modal from 'react-bootstrap/Modal';
import ImageURLPool from './ImageURLPool';
import { useEffect, useState } from 'react';

export default function LoadingModal(props) {
    return (
        <Modal
            show = {props.show}
            onHide = {props.onHide}
            backdrop="static"
            keyboard={false}
            animation={false}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Body className="modal-scroll-80-60">
                <div className="row">
                    <div className="col">
                        <div className="d-flex justify-content-start" style={{position: "relative"}}>
                            <img className="zoom-infinite" style={{width: '3rem', height: '3rem'}} src={ImageURLPool.getURL("number")} />
                            <img className="spin-infinite" style={{width: '3rem', height: '3rem', position: "absolute"}} src={ImageURLPool.getURL("gear")} />
                        </div>
                    </div>
                    <div className="col center-text">
                        <b>Loading...</b>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}