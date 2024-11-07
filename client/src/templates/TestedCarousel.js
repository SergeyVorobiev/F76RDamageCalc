import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


function TestedCarousel({data}) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    const titles = getTitles(data.img);
    return (
        <>
            <p className="d-flex justify-content-center">
                {titles[index]}
            </p>
            <Carousel activeIndex={index} onSelect={handleSelect} interval={null} data-bs-theme="dark">
                {getImages(data.img, data.alt)}
            </Carousel>
            <p className="pt-2 pb-0">
                <small>{data.version}</small>
            </p>
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

function getTitles(images) {
    let result = [];
    for (let i = 0; i < images.length; i++) {
        const img = images[i];
        const firstIndex = img.indexOf("_") + 1;
        const lastIndex = img.indexOf("_", firstIndex);
        result.push(img.substring(firstIndex, lastIndex));
    }
    return result;
}

export default TestedCarousel;