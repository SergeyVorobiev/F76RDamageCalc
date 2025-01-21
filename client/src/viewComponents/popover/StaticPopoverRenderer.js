import ReactDOM from 'react-dom/client';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';


export default class StaticPopoverRenderer {

    // Workaround as propagation is suppressed (onHide will no be invoked)
    // This measure is intended to prevent of opening of several popovers if a propagation is suppressed and on
    // hide can't be invoked
    static lastOpened = null;

    constructor(header, body, placeId, placement='top') {
        this.header = header;
        this.body = body;
        this.placeId = placeId;
        this.show = false;
        this.root = null;
        this.placement = placement;
    }

    renderToggle(target) {
        this.show = !this.show;
        if (StaticPopoverRenderer.lastOpened && StaticPopoverRenderer.lastOpened !== this) {
            StaticPopoverRenderer.lastOpened.onHide();
        }
        if (this.show) {
            StaticPopoverRenderer.lastOpened = this;
        }
        if (!this.root) {
            this.root = ReactDOM.createRoot(document.getElementById(this.placeId))
        }
        this.root.render(this.buildLayout(this.header, this.body, this.show, target, this.placement));
    }

    onHide(e) {
        this.show = false;
        if (this.root) {
            this.root.render((<></>));
        }
    }

    buildLayout(header, body, show, target, placement) {
        return (
            <Overlay
                obj = {this}
                show={show}
                target={target}
                rootClose='true'
                onHide={e => (this.onHide(e))}
                placement={placement}>
                <Popover className="popover-adjustable">
                    <Popover.Header>
                        {header}
                    </Popover.Header>
                    <Popover.Body>
                        {body}
                    </Popover.Body>
                </Popover>
            </Overlay>
        );
    }
}
