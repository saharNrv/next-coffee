import React from 'react';
import testimonial from '@/components/templates/Index/Testimonial/Testimonial.module.css'
import TestimonialItem from '@/components/modules/TestimonialItem/TestimonialItem';

export default function Testimonial({commentData}) {
    return (
        <div className={testimonial.testimonial}>
            <div >
                <div className='aboutName'>
                    <h3>TESTIMONIAL</h3>
                    <h2>Our Clients Say</h2>
                </div>
            </div>
            <div className={testimonial.testimonialBox}>
                {
                    commentData.slice(0,4).map(comment=>(

                        <TestimonialItem  {...comment}/>
                    ))
                }

            </div>

        </div>
    );
}
