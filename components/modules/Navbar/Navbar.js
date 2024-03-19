import React from 'react';
import navStyle from '@/components/modules/Navbar/Navbar.module.css'
import Link from 'next/link';

export default function Navbar() {
    return (
        <div className={navStyle.navbar}>
            <div className={navStyle.navbarWrap}>
                <div className="navbar-right">
                    <div className={navStyle.logoWrap}>
                        <span className={navStyle.logo}>My-Coffee</span>
                        <div className={navStyle.seaarchBox}>
                            <input type="text" className={navStyle.input} placeholder='search...' />
                        </div>

                    </div>
                </div>
                <div className="navbar-left">
                    <ul className={navStyle.list}>
                        <li className={navStyle.item}>
                            <Link href="/" className={navStyle.link}>Home</Link>
                        </li>
                        <li className={navStyle.item}>
                            <Link href="/about" className={navStyle.link}>About</Link>
                        </li>
                        <li className={navStyle.item}>
                            <Link href="/menu" className={navStyle.link}>Menu</Link>
                        </li>
                        <li className={navStyle.item}>
                            <Link href="/reservation" className={navStyle.link}>Reservation</Link>
                        </li>
                        <li className={navStyle.item}>
                            <Link href="/contact" className={navStyle.link}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    );
}
