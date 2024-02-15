import React from 'react';
import { useDrag, useDrop } from 'react-dnd';
import '../css/Card.css';

const type = 'Image';

const Card = ({ id, url, order, moveImage }) => {
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
        <div ref={drop} className="card" style={{ opacity: isDragging ? 0 : 1 }}>
            <div ref={drag} className="card-drag">
                <img className="image-small" src={url} alt={`img${id}`} />
                <div className="card-text">
                    {/* <p>URL: {url}</p> */}
                    <p>Order: {order}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
