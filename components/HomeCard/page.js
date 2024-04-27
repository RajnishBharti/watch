import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import st from './card.module.css'
let carddtls =[
    {id:1, imgs:'/images/card-1.webp', to:'/watches/new-watch-collections' , dtls:[{rating:null, title:null, desc:null}]},
    {id:2, imgs:'/images/card-2.webp', to:'javascript:void(0)' ,  dtls:[{rating:null, title:'20+', desc:'Years of legacy'}]},
    {id:3, imgs:'/images/card-3.webp', to:'/#testimonials' ,  dtls:[{rating:'★ ★ ★ ★ ★', title:'200+', desc:'Happy Customers'}]},
    {id:4, imgs:'/images/card-4.webp', to:'/#brandList' ,  dtls:[{rating:null, title:'30+', desc:'International Brands'}]},
    {id:5, imgs:'/images/card-5.webp', to:'/watches/men-watches' , dtls:[{rating:null, title:null, desc:null}]},
    {id:6, imgs:'/images/card-6.webp', to:'/watches/women-watches' , dtls:[{rating:null, title:null, desc:null}]}
]

export default function HomeCard() {
  return (
   <section className={st.HomePageCard}>
    <div className='container'>
            <div className={st.gridContainer}>
                {
                  carddtls.map((x)=>{
                    return(
                        <>                        
                        <div className={st.gridBox} key={Math.random()}>
                          <Link href={x.to}>
                             <img src={x.imgs} width="100%"  /> 
                            {/* <Image  src={x.imgs}  priority  />  */}
                            
                                    {
                                x.dtls?
                                        <div className={st.dtlsContent}>
                                            <div>
                                                {x.dtls[0].rating?<div className={st.rt}>{x.dtls[0].rating}</div>:null} 
                                                {x.dtls[0].title?<div className={st.tt}>{x.dtls[0].title}</div>:null} 
                                                {x.dtls[0].desc?<div className={st.dsc}>{x.dtls[0].desc}</div>:null} 
                                            </div>
                                        </div>
                                :null
                                    }
                                    </Link>
                            
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
