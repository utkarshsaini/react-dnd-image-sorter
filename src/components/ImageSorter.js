import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import update from 'immutability-helper';

import Card from './Card';

import img1 from '../img/1.png';
import img2 from '../img/2.png';
import img3 from '../img/3.png';
import img4 from '../img/4.png';
import img5 from '../img/5.png';
import img6 from '../img/6.png';
import img7 from '../img/7.png';
import img8 from '../img/8.png';

const ImageSorter = () => {
    let imagesURLS = [
        img1, img2, img3, img4, img5, img6, img7, img8
    ];

    let imagesOrder = [
        1, 2, 3, 4, 5, 6, 7, 8
    ];

    let [images, setImages] = useState(imagesURLS.map((url, index) => ({
        url: url,
        order: imagesOrder[index]
    })));

    const handleSave = () => {
        setImages(images.map((image, index) => ({ ...image, order: index + 1 })));
    };

    const moveImage = (dragIndex, hoverIndex) => {
        const dragImage = images[dragIndex];
        setImages(
            update(images, {
                $splice: [
                    [dragIndex, 1],
                    [hoverIndex, 0, dragImage]
                ],
            })
        );
    };

    console.log(images);
    console.log(images.map(image => image.order).join(', '));

    return (
        <div>
            <h1>Image Sorter</h1>
            <button onClick={handleSave}>Save</button>
            <p>Current order: {images.map(image => image.order).join(', ')}</p>
            <DndProvider backend={HTML5Backend}>
                <div style={{ height: '300px', overflow: 'auto' }}>
                    {images.map((image, index) => (
                        <Card key={index} id={index} url={image.url} order={image.order} moveImage={moveImage} />
                    ))}
                </div>
            </DndProvider>
        </div>
    );
};

export default ImageSorter;
