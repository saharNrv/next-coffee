import React from 'react';
import headerPage from '@/components/modules/HeaderPage/HeaderPage.module.css';
import Link from 'next/link';

export default function HeaderPage({ route }) {
    return (
        <div className={headerPage.headerPage}>

            <div >
                <h1>{route}</h1>
                <span>
                    <Link href='/' className={headerPage.link}>Home</Link> /
                    {route}

                </span>
            </div>

        </div>
    );
}
