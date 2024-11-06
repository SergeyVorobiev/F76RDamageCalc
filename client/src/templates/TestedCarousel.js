import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


function TestedCarousel({data}) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            <p className="d-flex justify-content-center">
                <h6>{data.version}</h6>
            </p>
            <Carousel activeIndex={index} onSelect={handleSelect} interval={null} data-bs-theme="dark">
                {getImages(data.img, data.alt)}
            </Carousel>
        </>
    );
}

function getImages(img, alt) {
    let result = [];
    for(let i = 0; i < img.length; i++) {
        result.push(
            <Carousel.Item style={{padding: '0% 15% 10% 15%'}}>
                <img className="d-block w-100" src={img[i]} alt={alt} />
            </Carousel.Item>
        );
    }
    return result;
}

export default TestedCarousel;