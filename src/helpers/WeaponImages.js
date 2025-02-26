import React from 'react';
import Image from "next/image";
const images = require.context('../resources/weapon_icons', true, /\.webp$/);
const imageNames = images.keys();
const imageList = imageNames.map(image => images(image));


export function getImageElement(name, maxHeight='1.5rem', className="") {
    for (let i = 0; i < imageList.length; i++) {
        let wName = imageNames[i];
        const firstIndex = wName.lastIndexOf("/") + 1;
        const lastIndex = wName.lastIndexOf(".");
        wName = wName.substring(firstIndex, lastIndex);
        if (wName === name) {
            return (<Image alt={wName} className={"p-0 m-0 " + className} style={{ width: 'auto', maxHeight: maxHeight }} src={imageList[i]} />)
        }
    }
    return (
        <></>
    );
}