import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from "next/image";


function TestedCarousel({data}) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    const titles = getTitles(data.images);
    return (
        <>
            <p className="d-flex justify-content-center">
                {titles[index]}
            </p>
            <Carousel activeIndex={index} onSelect={handleSelect} interval={null} data-bs-theme="dark">
                {getImages(data.images)}
            </Carousel>
            <p className="pt-2 pb-0">
                <small>{data.version.version}</small>
            </p>
        </>

    );
}

function getImages(images) {
    let result = [];
    for(let i = 0; i < images.length; i++) {
        const imageData = images[i];
        result.push(
            <Carousel.Item style={{padding: '0% 15% 10% 15%'}}>
                <Image className="d-block w-100" style={{height: 'auto'}} src={imageData.image} alt={imageData.name} />
            </Carousel.Item>
        );
    }
    return result;
}

function getTitles(images) {
    let result = [];
    for (let i = 0; i < images.length; i++) {
        result.push(images[i].name);
    }
    return result;
}

export default TestedCarousel;