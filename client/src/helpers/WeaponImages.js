import React from 'react';
import Image from 'react-bootstrap/Image';
const images = require.context('../resources/weapon_icons', true, /\.webp$/);
const imageList = images.keys().map(image => images(image));


export function getImageElement(name, maxHeight='1.5rem', className="") {
    for (let i = 0; i < imageList.length; i++) {
        const firstIndex = imageList[i].lastIndexOf("/") + 1;
        const lastIndex = imageList[i].indexOf(".");
        const wName = imageList[i].substring(firstIndex, lastIndex);
        if (wName === name) {
            return (<Image className={"p-0 m-0 " + className} style={{ maxHeight: maxHeight }} src={imageList[i]} fluid />)
        }
    }
    return (
        <></>
    );
}