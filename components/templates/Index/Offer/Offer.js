import React, { useState } from 'react';
import offer from '@/components/templates/Index/Offer/Offer.module.css'

export default function Offer() {


    const [email, setEmail] = useState('')

    const addEmail = async (e) => {
        e.preventDefault()


        const res = await fetch('http://localhost:4000/newsletters', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        })

        if (res.status === 201) {
            alert('You Join Successfully :)')
            setEmail('')
        }




    }


    return (
        <div className={offer.offerWrap}>
            <div className={offer.offerBg}>

                <h2>50% OFF</h2>
                <h3>Sunday Special Offer</h3>
                <h4>Only for Sunday from 1st Jan to 30th Jan 2045</h4>
                <div className={offer.inputWrap}>
                    <form>
                        <input type="text" placeholder='Your Email' value={email} className={offer.input} onChange={e => setEmail(e.target.value)} />
                        <button className={offer.btn} onClick={addEmail}>Join</button>

                    </form>

                </div>

            </div>

        </div>
    );
}
