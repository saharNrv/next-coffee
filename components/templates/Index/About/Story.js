import React from 'react';
import story from '@/components/templates/Index/About/Story.module.css'

export default function Story() {
    return (
        <div className={story.aboutIndex}>
            <div >
                <div className='aboutName'>
                    <h3>ABOUT US</h3>
                    <h2>Serving Since 1950</h2>
                </div>
            </div>

            <div className={story.aboutWrapp}>
                <div className={story.aboutCol}>
                    <div className={story.colBg}>
                        <h2>Our Story</h2>
                        <h3>Eos kasd eos dolor vero vero, lorem stet diam rebum. Ipsum amet sed vero dolor sea</h3>
                        <p>Takimata sed vero vero no sit sed, justo clita duo no duo amet et, nonumy kasd sed dolor eos diam lorem eirmod. Amet sit amet amet no. Est nonumy sed labore eirmod sit magna. Erat at est justo sit ut. Labor diam sed ipsum et eirmod</p>
                        <button className={story.btn1}>Learn More</button>
                    </div>
                    <div className={story.colBg}>
                        <img src="/images/about.png" alt="coffee img"  className={story.img}/>
                    </div>
                    <div className={story.colBg}>
                        <div className={story.colBg}>
                            <h2>Our Vision</h2>
                            <p>Takimata sed vero vero no sit sed, justo clita duo no duo amet et, nonumy kasd sed dolor eos diam lorem eirmod. Amet sit amet amet no. Est nonumy sed labore eirmod sit magna.</p>
                            <div className={story.spanWrap}>
                                <span>Lorem ipsum dolor sit amet.</span>
                                <span>Lorem ipsum dolor sit amet.</span>
                                <span>Lorem ipsum dolor sit amet.</span>

                            </div>
                            <button className={story.btn2}>Learn More</button>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
}
