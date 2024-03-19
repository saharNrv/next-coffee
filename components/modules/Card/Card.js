import React from 'react';
import card from '@/components/modules/Card/Card.module.css'

export default function Card({img,title,desc}) {
    return (
        <div className={card.cardWrap}>
            <img src={img} alt="coffee img" className={card.img} />
            <div>
                <h2>{title}</h2>
                <p>{desc}</p>
            </div>
        </div>
    );
}
