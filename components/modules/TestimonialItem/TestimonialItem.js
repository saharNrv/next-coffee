import React from 'react';
import testimonialItem from '@/components/modules/TestimonialItem/TestimonialItem.module.css';

export default function TestimonialItem({ profile, username, body }) {
    return (
        <div className={testimonialItem.testimonialItem}>

            <div>
                <img src={profile} alt="testimonal img" />
            </div>
            <div>
                <h3>{username}</h3>
                <p>{body}</p>
            </div>

        </div>
    );
}
