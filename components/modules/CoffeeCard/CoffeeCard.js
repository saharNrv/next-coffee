import React from 'react';
import coffeeCard from '@/components/modules/CoffeeCard/CoffeeCard.module.css'
import Link from 'next/link';

export default function CoffeeCard({img,title,price,id}) {
    return (
        <div className={coffeeCard.CoffeeCard}>
            <div className={coffeeCard.imgWrap}>
                <img src={img} alt="coffee img" className={coffeeCard.img} />
                <span className={coffeeCard.price}>{price}$</span>
            </div>
            <div className={coffeeCard.info}>
                <Link href={`/product/${id}`}>
                <h3>{title}</h3>
                </Link>
                <p>
                Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor
                </p>

            </div>

        </div>
    );
}
