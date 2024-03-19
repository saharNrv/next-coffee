import Story from '@/components/templates/Index/About/Story';
import Header from '@/components/templates/Index/Header/Header';
import Menu from '@/components/templates/Index/Menu/Menu';
import Offer from '@/components/templates/Index/Offer/Offer';
import Services from '@/components/templates/Index/Services/Services';
import Testimonial from '@/components/templates/Index/Testimonial/Testimonial';
import React from 'react';

export default function index({ data }) {
  // console.log(data.serviceData);
  return (
    <>
      <Header />
      <Story />
      <Services serviceData={data.serviceData} />
      <Offer />
      <Menu menuData={data.menuData}/>
      <Testimonial commentData={data.commentData}/>


    </>
  );
}


export async function getStaticProps() {

  const serviceResponsive = await fetch(`http://localhost:4000/services`)
  const serviceData = await serviceResponsive.json()

  const menuResponsive= await fetch('http://localhost:4000/menu')
  const menuData= await menuResponsive.json()

  const commentsResponsive= await fetch(`http://localhost:4000/comments`)
  const commentData= await commentsResponsive.json()



  return {
    props: {
      data: {
        serviceData,
        menuData,
        commentData

      }
    }
  }
}