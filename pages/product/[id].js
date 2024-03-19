import HeaderPage from '@/components/modules/HeaderPage/HeaderPage';
import Product from '@/components/templates/Product/Product';
import React from 'react';

export default function ProductDetail({data}) {
    return (
        <>
            
            <Product data={data}/>
        </>
    );
}

export async function getStaticPaths(context) {
    const res = await fetch(`http://localhost:4000/menu`);
    const data = await res.json()
    const paths =data.map(pro=>({
        params:{id:String(pro.id)}
    }))
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const { params } = context
    const res = await fetch(`http://localhost:4000/menu/${params.id}`);
    const data = await res.json()
    return {
        props: {
            data
        },
    }
}