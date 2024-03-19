import React from 'react';
import product from '@/components/templates/Product/Product.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
config.autoAddCss = false;

export default function Product({ data }) {
    return (
        <div className={product.product}>
            <div className={product.productWrap}>
                <div className={product.productImgWrap}>
                    <img src={data.img} alt="coffee img" />
                </div>
                <div className={product.info}>
                    <h4>{data.title}</h4>
                    <div>
                        {
                            new Array(Math.trunc(data.score)).fill(0).map(() => (

                                <FontAwesomeIcon icon={faStar} className={product.star} />
                            ))
                        }
                        {new Array(5 - Math.trunc(data.score)).fill().map(() => (
                            <FontAwesomeIcon icon={faStar} className={product.empty} />
                        ))}


                    </div>
                    <span>{data.price}$</span>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, ullam.</p>
                </div>
            </div>

        </div>
    );
}
