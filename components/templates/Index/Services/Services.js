import React from 'react';
import services from '@/components/templates/Index/Services/Service.module.css'
import Card from '@/components/modules/Card/Card';

export default function Services({ serviceData }) {
  return (
    <div className={services.serviceWrap}>
      <div >
        <div className='aboutName'>
          <h3>OUR SERVICES</h3>
          <h2>Fresh & Organic Beans</h2>
        </div>
      </div>

      <div className={services.boxWrap}>

        {
          serviceData.map(service => (
            <Card {...service} />
          ))
        }



      </div>

    </div>
  );
}


