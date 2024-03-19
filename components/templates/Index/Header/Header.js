import React from 'react';
import styles from '@/components/templates/Index/Header/Header.module.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

export default function Header() {
    return (
        <div className={styles.swiper_wrapper}>
            <Swiper
                // rewind={true}
                loop={true}
                navigation={true}
                modules={[Navigation]}
                className={styles.swiper}
            >
                <SwiperSlide
                    className={styles.swiper_slide}

                >

                    <div className={styles.sliderInfo}>
                        <h2 >We Have Been Serving</h2>
                        <h1 >COFFEE</h1>
                        <h3>* SINCE 1950 *</h3>
                    </div>

                </SwiperSlide>

                <SwiperSlide
                    className={styles.swiper_slide}
                    style={{ backgroundImage: 'url("/images/carousel-1.jpg")' }}
                >
                    <div
                        className={styles.sliderInfo}
                    >
                        <h2 >
                            We Have Been Serving
                        </h2>
                        <h1 >COFFEE</h1>
                        <h2 >* SINCE 1950 *</h2>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
