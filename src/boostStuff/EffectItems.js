import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import EffectItem from '../boostStuff/EffectItem';
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
import { memo } from 'react';


function couple(key, categoryName, foodPref, setFoodPref, player, first, second, items, setItems, colorName, colorValue, cardHeight, picHeight, imPadding, getPicture, useHeader, stuffBoost, setStuffBoost, maxRows, setConsumableTouched) {
    if (first === null && second === null) {
        return(<></>);
    } else if (second === null) {
        return (
            <Col key={key} className='p-0 ms-1 me-1 m-0 d-flex justify-content-center'>
                <Stack className='pb-2 m-auto' direction="horizontal" gap={2}>
                    <EffectItem key={first.id} categoryName={categoryName} foodPref={foodPref} setFoodPref={setFoodPref} player={player} item={first} height={cardHeight} picHeight={picHeight} imPadding={imPadding} items={items} setItems={setItems} colorName={colorName} colorValue={colorValue} getPicture={getPicture} useHeader={useHeader} stuffBoost={stuffBoost} setStuffBoost={setStuffBoost} maxRows={maxRows} setConsumableTouched={setConsumableTouched} />
                </Stack>
            </Col>
        );
    }
    return (
        <Col key={key} className='p-0 ms-1 me-1 m-0 d-flex justify-content-center'>
            <Stack className='pb-2 m-auto' direction="horizontal" gap={2}>
                <EffectItem key={first.id} categoryName={categoryName} foodPref={foodPref} setFoodPref={setFoodPref} player={player} item={first} height={cardHeight} picHeight={picHeight} imPadding={imPadding} items={items} setItems={setItems} colorName={colorName} colorValue={colorValue} getPicture={getPicture} useHeader={useHeader} stuffBoost={stuffBoost} setStuffBoost={setStuffBoost} maxRows={maxRows} setConsumableTouched={setConsumableTouched} />
                <EffectItem key={second.id} categoryName={categoryName} foodPref={foodPref} setFoodPref={setFoodPref} player={player} item={second} height={cardHeight} picHeight={picHeight} imPadding={imPadding} items={items} setItems={setItems} colorName={colorName} colorValue={colorValue} getPicture={getPicture} useHeader={useHeader} stuffBoost={stuffBoost} setStuffBoost={setStuffBoost} maxRows={maxRows} setConsumableTouched={setConsumableTouched} />
            </Stack>
        </Col>
    );
}

const EffectItems = memo(function EffectItems({categoryName, foodPref, setFoodPref, player, items, setItems, colorName, colorValue, cardHeight, picHeight, imPadding, getPicture, useHeader, stuffBoost, setStuffBoost, maxRows, setConsumableTouched}) {
    console.log("EffectItems " + categoryName);
    const size = items.length;
    let k = 0;
    let rItems = [];
    let key = 0;
    while (size > 0 && true) {
        const item1 = items[k++];
        let item2 = null;
        if (k < size) {
            item2 = items[k++];
        }
        rItems.push(couple(key++, categoryName, foodPref, setFoodPref, player, item1, item2, items, setItems, colorName, colorValue, cardHeight, picHeight, imPadding, getPicture, useHeader, stuffBoost, setStuffBoost, maxRows, setConsumableTouched));
        if (k >= size) {
            break;
        }
    }
    return (
        <Container fluid>
            <Row className="pb-0 mb-0">
                {rItems}
            </Row>
        </Container>
    );
});

export default EffectItems;