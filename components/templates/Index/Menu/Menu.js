import React from 'react';
import menu from '@/components/templates/Index/Menu/Menu.module.css'
import CoffeeCard from '@/components/modules/CoffeeCard/CoffeeCard';

export default function Menu({ menuData }) {
    console.log(menuData.type);
    return (
        <div className={menu.menu}>
            <div >
                <div className='aboutName'>
                    <h3>MENU & PRICING</h3>
                    <h2>Competitive Pricing</h2>
                </div>
            </div>
            <div className={menu.menuWrap}>
                <div>
                    <h2>Hot Coffee</h2>
                    <div className={menu.menuBox}>
                        {
                            menuData.filter(menu => menu.type === 'hot').map(menu => (
                                <CoffeeCard {...menu} />
                            ))
                        }


                    </div>
                </div>
                <div>
                    <h2>Cold Coffee</h2>
                    <div className={menu.menuBox}>
                        {
                            menuData.filter(menu => menu.type === 'cold').map(menu => (
                                <CoffeeCard {...menu} />
                            ))
                        }

                    </div>
                </div>
            </div>

        </div>
    );
}
