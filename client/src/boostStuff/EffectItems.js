import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import EffectItem from '../boostStuff/EffectItem';
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
import { memo } from 'react';


function couple(foodPref, setFoodPref, player, one, second, items, setItems, colorName, colorValue, cardHeight, picHeight, getPicture, useHeader, stuffBoost, setStuffBoost) {
    if (one === null && second === null) {
        return(<></>);
    } else if (second === null) {
        return (
            <Col className='p-0 m-0 d-flex justify-content-center'>
                <Stack className='pb-1 m-auto' direction="horizontal" gap={2}>
                    <EffectItem foodPref={foodPref} setFoodPref={setFoodPref} player={player} item={one} height={cardHeight} picHeight={picHeight} items={items} setItems={setItems} colorName={colorName} colorValue={colorValue} getPicture={getPicture} useHeader={useHeader} stuffBoost={stuffBoost} setStuffBoost={setStuffBoost} />
                </Stack>
            </Col>
        );
    }
    return (
        <Col className='p-0 m-0 d-flex justify-content-center'>
            <Stack className='pb-2 m-auto' direction="horizontal" gap={2}>
                <EffectItem foodPref={foodPref} setFoodPref={setFoodPref} player={player} item={one} height={cardHeight} picHeight={picHeight} items={items} setItems={setItems} colorName={colorName} colorValue={colorValue} getPicture={getPicture} useHeader={useHeader} stuffBoost={stuffBoost} setStuffBoost={setStuffBoost} />
                <EffectItem foodPref={foodPref} setFoodPref={setFoodPref} player={player} item={second} height={cardHeight} picHeight={picHeight} items={items} setItems={setItems} colorName={colorName} colorValue={colorValue} getPicture={getPicture} useHeader={useHeader} stuffBoost={stuffBoost} setStuffBoost={setStuffBoost} />
            </Stack>
        </Col>
    );
}

const EffectItems = memo(function EffectItems({foodPref, setFoodPref, player, items, setItems, colorName, colorValue, cardHeight, picHeight, getPicture, useHeader, stuffBoost, setStuffBoost}) {
    console.log("EffectItems")
    const size = items.length;
    let k = 0;
    let rItems = [];
    while (size > 0 && true) {
        const item1 = items[k++];
        let item2 = null;
        if (k < size) {
            item2 = items[k++];
        }
        rItems.push(couple(foodPref, setFoodPref, player, item1, item2, items, setItems, colorName, colorValue, cardHeight, picHeight, getPicture, useHeader, stuffBoost, setStuffBoost));
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