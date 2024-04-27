import React from 'react'
import Link from 'next/link'
import st from './cat.module.css'
let catdata = [
    {id:1, imgs:"/images/mens-cat.webp", 
    titles:"Men's Watches", 
    dtls:"An expensive selection of new launches and classic timepieces.", 
    to:'/watches/men-watches'
},
{  id:1, 
    imgs:"/images/womens-cat.webp", 
    titles:"Women's Watches", 
    dtls: "A collection of luxury watches and beautifully designed.",
    to:'/watches/women-watches'},
]

export default function HomeCatCard() {
  return (
  <section className={st.homecatSection}>
    <div className='container'>
        <div className='row gx-5'>
            {
catdata.map((x)=>{
  return(
    <>
      <div className='col-lg-6 mb-md-0 mb-2'>
        <div className={`${st.height} catbox position-relative`}>
            <img src={x.imgs} className='img-fluid' />
            <div className={`catDesc w-100  position-absolute bottom-0`}>
                <div className={`${st.maxWidth} bg-white p-md-4 pt-2 pb-4 px-4 d-table mx-auto`}>
                <div className= {`${st.heading} text-center pb-md-2 pb-0`}>{x.titles}</div>
                <p className='text-center pb-md-1 pb-0'>{x.dtls}</p>
                <Link className='blackBtn d-table mx-auto' href={x.to}>Explore Collection</Link>
                </div>
            </div>
        </div>

    </div>
    
    </>
  )
})

            }
          
        </div>
    </div>
  </section>
  )
}
