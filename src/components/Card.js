import React from 'react';
import { useDrag, useDrop } from 'react-dnd';
import '../css/Card.css';

const type = 'Image';

const Card = ({ id, url, moveImage }) => {
    const [{ isDragging }, drag] = useDrag({
        type: type,
        item: { id, type },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const [, drop] = useDrop({
        accept: type,
        drop(item) {
            if (item.id !== id) {
                moveImage(item.id, id);
            }
        },
    });

    return (
        <div ref={drop} style={{ opacity: isDragging ? 0 : 1 }}>
            <div ref={drag}>
                <img className="image-small" src={url} alt={`img${id}`} />
            </div>
        </div>
    );
};

export default Card;
