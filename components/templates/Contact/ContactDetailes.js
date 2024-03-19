import React, { useState } from 'react';
import contact from '@/components/templates/Contact/ContactDetailes.module.css'

export default function ContactDetailes() {

    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [text, setText] = useState('')

    const addMessage = async (e) => {
        e.preventDefault()

        let newMessage = {
            name,
            username,
            email,
            text,
            
        }

        const res = await fetch('http://localhost:4000/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newMessage)
        })
        if (res.status === 201) {
            setUsername("");
            setEmail("");
            setText("");
            alert("Message sent successfully :))");
        }

    }


    return (
        <div className={contact.contact}>

            <div className={contact.contactWrap}>

                <div className={contact.imgWrap}>
                    <h2>30% OFF</h2>
                    <h3>For Online Reservation</h3>
                    <p>Lorem justo clita erat lorem labore ea, justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam.  </p>
                    <ul>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                    </ul>
                </div>
                <div className={contact.formWrap}>
                    <h3>Book Your Table</h3>
                    <form >
                        <div className={contact.inputWrap}>
                            <input
                                type="text"
                                placeholder='Name'
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </div>
                        <div className={contact.inputWrap}>
                            <input
                                type="text"
                                placeholder='Username'
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                            />
                        </div>
                        <div className={contact.inputWrap}>
                            <input
                                type="text"
                                placeholder='Email'
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        
                        <div className={contact.textareaWrap}>
                            <textarea
                                placeholder='Message'
                                value={text}
                                onChange={e => setText(e.target.value)}
                            ></textarea>
                        </div>
                        <button className={contact.btn} onClick={addMessage}>Book Now</button>
                    </form>
                </div>

            </div>



        </div>
    );
}
