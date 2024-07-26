import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Tag } from 'antd';
import { millisToTime } from '../helpers/Calc';
import { TrashIcon, UpdateIcon, PlayIcon, RenameIcon, UploadIcon } from '../icons/Icons';
import '../css/style.css';
import Badge from 'react-bootstrap/Badge';
import { getImage } from '../helpers/WTypeDropdown'
import { ammo, fireRate, addText } from '../helpers/Emoji';
import { getImageElement } from '../helpers/WeaponImages'


//<Badge style={{color: '#2a3262', fontWeight: 'bold'}} color="pink" text={value1}  />
function row(name1, value1, colorName="default", tagColor="default", tagName=true) {
    const line = (tagName) ? <Tag bordered={false} color={colorName}>{name1}</Tag> : name1;
    return (
       <Row className="flex-nowrap">
          <Col className="text-start text-nowrap">
            <strong>
                 {line}
            </strong>
          </Col>

          <Col className="text-end text-nowrap pb-1">
              <strong >
                <Tag color={tagColor}>{value1}</Tag>
              </strong>
          </Col>
       </Row>
    );
}

function bodyContent(isOpen, index, size, item, setModalDownloadSnapshot, setModalUpdateItem, setModalRenameItem, setModalDeleteItem, setModalApplyItem) {
    if (isOpen) {
        const critUsed = (item.extraDamage.useCrit) ? "(Yes 1/" + item.extraDamage.critFreq + ")" : "(No)";
        const sneakUsed = (item.extraDamage.useSneak) ? "(Yes)" : "(No)";
        const headUsed = (item.extraDamage.useHead) ? "(Yes 1/" + item.extraDamage.headFreq + ")" : "(No)";
        const leg1 = item.legendary[item.legendary.current[0]];
        const leg2 = item.legendary[item.legendary.current[1]];
        const leg1Name = leg1.name + " (" + leg1.value + "%)";
        const leg2Name = leg2.name + " (" + leg2.value + "%)";
        let strength = (item.wSpec.strength_boost > 0) ? item.playerStats.strength.value : "-";
        return (
            <>
            <Card.Body className="p-1 mt-1">
                <Row>
                    <Col className="d-flex justify-content-center mb-1">
                        <Toast style={{ width: '32rem'}} show={true} className="bg-snapshot">
                            <Toast.Body className="m-0 p-2">
                            <Row>
                                <Col>
                                    {row("💥 Damage:", item.resultDamage.tDamage.toFixed(1) + " x " + item.resultDamage.shotSize)}
                                    {row("☠️ Crit:", critUsed + " " + item.resultDamage.displayedCrit.toFixed(1))}
                                    {row("🐍 Sneak:", sneakUsed + " +" + item.resultDamage.displayedSneak.toFixed(1))}
                                    {row("💣 Explosive:", item.resultDamage.explosive.toFixed(1) + "%")}
                                    {row("❤️ Health:", item.player.health.value.toFixed(0) + "%")}
                                    {row("⭐", leg1Name, "gold")}
                                </Col>
                                <Col>
                                    {row(addText(ammo, '0.7rem', '0.25rem', "Ammo (🎯 Accuracy):"), item.resultDamage.ammoCapacity + " (" + item.wSpec.accuracy +"%)")}
                                    {row(addText(fireRate, '0.7rem', '0.25rem', "Fire Rate:"), item.resultDamage.fireRate.toFixed(1))}
                                    {row("⌛ Reload:", item.resultDamage.reloadTime.toFixed(2) + " s")}
                                    {row("🤕 Head Shot:", headUsed)}
                                    {row("👨‍👩‍👧‍👦 Team:", (item.player.team) ? "Yes" : "No")}
                                    {row("⭐ ⭐", leg2Name, "gold")}
                                </Col>
                            </Row>
                            </Toast.Body>
                        </Toast>
                    </Col>
                    <Col className="d-flex justify-content-center mb-1">
                        <Toast className="bg-snapshot" style={{ width: '32rem' }} show={true}>
                            <Toast.Body className="m-0 p-2">
                            <Row>
                                <Col>
                                    {row("💪 Strength:", strength, "default", "default")}
                                    {row("🛡️ Anti Armor:", (item.resultDamage.bAA * 100.0).toFixed(1) + "%", "default", "default")}
                                    {row("Scorchbeast Queen:", millisToTime(item.creatures.sbq.lifeTime), "red", "red")}
                                    {row("Earle:", millisToTime(item.creatures.earle.lifeTime), "purple", "purple")}
                                    {row("Ultracite Titan:", millisToTime(item.creatures.titan.lifeTime), "pink", "pink")}
                                    {row("Average:", millisToTime(item.averageTime), "blue", "blue")}
                                </Col>
                            </Row>
                            </Toast.Body>
                        </Toast>
                    </Col>
                 </Row>
            </Card.Body>
            <div class='card-footer'>
                <Row>
                    <div className="col d-flex justify-content-start">
                        <Badge className="mt-auto mb-auto" pill='true' text='white' bg="secondary">{index} / {size}</Badge>
                        <Button variant="white" className="m-auto ms-2 p-auto" size='sm'>{getImage(item.wSpec.type)}</Button>
                    </div>
                    <div className="col d-flex justify-content-end">
                        <Button onClick={(e) => setModalDownloadSnapshot({id: item.id, name: item.name, show: true})} variant="outline-primary" className="ms-1 me-2 pb-auto" size="sm">
                            <UploadIcon />
                        </Button>
                        <Button onClick={(e) => setModalUpdateItem({id: item.id, name: item.name, show: true})} variant="outline-primary" className="ms-1 me-2 pb-auto" size="sm">
                            <UpdateIcon />
                        </Button>
                        <Button className="ms-1 me-2 pb-auto" size="sm" id={item.id} name={item.name} variant="outline-primary" onClick={(e) => setModalApplyItem({id: e.currentTarget.id, name: e.currentTarget.name, show: true})}>
                            <PlayIcon />
                        </Button>
                        <Button className="ms-1 pb-auto" size="sm" id={item.id} name={item.name} variant="outline-danger" onClick={(e) => setModalDeleteItem({id: e.currentTarget.id, name: e.currentTarget.name, show: true})}>
                            <TrashIcon />
                        </Button>
                    </div>
                </Row>
            </div>
            </>
        );
    } else {
        return (<></>);
    }
}

function headerBody(item, setModalRenameItem) {
    let wName = item.wSpec.defaultName;
    if (!wName) {
        wName = "Weapon";
    }
    return (
        <Container className='ps-1 pe-1'>
            <div class="row-12 d-flex">
                <div class='col-2 p-2 d-flex justify-content-start'>
                    <div className="m-auto ms-1">
                        {getImageElement(wName.toLowerCase().replaceAll(" ", "_"), '2rem')}
                    </div>
                </div>
                <div class="col-9 pt-1 pb-1 pe-3 d-flex justify-content-center">
                    <h6 className='m-auto pe-3'>{item.name}</h6>
                </div>
                <div class="col-1 d-flex p-2 justify-content-end">
                    <div className="m-auto me-1">
                        <Button className="pb-1" id={item.id} variant="outline-dark" onClick={(e) => setModalRenameItem({id: item.id, show: true})} size="sm">
                            <RenameIcon />
                        </Button>
                    </div>
                </div>
            </div>
        </Container>
    );
}

function header(item, setModalRenameItem, isOpen) {
    if (isOpen) {
        return (
            <div class='m-0 p-0 card-header'>
                {headerBody(item, setModalRenameItem)}
            </div>
        );
    } else {
        return (
            headerBody(item, setModalRenameItem)
        );
    }
}

export default function SnapshotItem({index, isOpen, size, item, setModalDownloadSnapshot, setModalUpdateItem, setModalRenameItem, setModalDeleteItem, setModalApplyItem}) {

    return (
        <Card className="mb-2">
            {header(item, setModalRenameItem, isOpen)}
            {bodyContent(isOpen, index, size, item, setModalDownloadSnapshot, setModalUpdateItem, setModalRenameItem, setModalDeleteItem, setModalApplyItem)}
        </Card>
    );
}