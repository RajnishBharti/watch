


import { useState } from "react";
import Link from "next/link";

import Image from "next/image";
import { A11y, Grid, Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/grid';
import st from './connesiure.module.css'

export default function HomeTestimonials() {
  let testimonials = [
    {   id:1, 
        desc: `Great collection of watches. We'd been looking for a reputed watch repair shop since last month to tighten my watch strap and found this (Newly Opened In Worldmark) shop very near to us Mr. Vikash at the store was very warm, kind and assuring of the whole process. He made sure we had a lovely experience. Thank You `,  
        clName: `Hiren Kanet`
    },
    {id:2, 
        desc: `Great collection of watches. We'd been looking for a reputed watch repair shop since last month to tighten my watch strap and found this (Newly Opened In Worldmark) shop very near to us Mr. Vikash at the store was very warm, kind and assuring of the whole process. He made sure we had a lovely experience. Thank You `,  
          clName: "Ajay Rana"
    },
    {id:3, 
        desc: `Great collection of watches. We'd been looking for a reputed watch repair shop since last month to tighten my watch strap and found this (Newly Opened In Worldmark) shop very near to us Mr. Vikash at the store was very warm, kind and assuring of the whole process. He made sure we had a lovely experience. Thank You `,  
        clName: `Pankaj Pal`
    },
    {
        id:4, 
        desc: `Great collection of watches. We'd been looking for a reputed watch repair shop since last month to tighten my watch strap and found this (Newly Opened In Worldmark) shop very near to us Mr. Vikash at the store was very warm, kind and assuring of the whole process. He made sure we had a lovely experience. Thank You `,  
  
        clName: `Asawari Salwan`
    },

    {
        id:5, 
        desc: `Great collection of watches. We'd been looking for a reputed watch repair shop since last month to tighten my watch strap and found this (Newly Opened In Worldmark) shop very near to us Mr. Vikash at the store was very warm, kind and assuring of the whole process. He made sure we had a lovely experience. Thank You `,  
   
        clName: `RK Gaur`
    },
    {
        id:5, 
        desc: `Great collection of watches. We'd been looking for a reputed watch repair shop since last month to tighten my watch strap and found this (Newly Opened In Worldmark) shop very near to us Mr. Vikash at the store was very warm, kind and assuring of the whole process. He made sure we had a lovely experience. Thank You `,  
        clName: `shashank sinha`
    },
   
]




    return (
        <>
            <section id="testimonials" className={`${st.connesiurey} pt-0`}>
                <div className="container">
                    <h2 class="h2 text-center underline pb-3">Customer Testimonials</h2>
                    <div className="position-relative w-100">
                        <div className="row g-5">
                            <div className={`col-lg-12 centerBullet`}>

                                <Swiper
                                    modules={[Grid, Navigation, A11y, Autoplay, Pagination]}
                                    // navigation={{ prevEl, nextEl }}

                              
                                    grid={{
                                        rows: 1,
                                    }}
                                    spaceBetween={30}
                                    pagination={{
                                        clickable: true,
                                    }}

                                    breakpoints={{
                                        640: {
                                          slidesPerView: 1,
                                        },
                                        768: {
                                          slidesPerView: 2,
                                        },
                                        1024: {
                                          slidesPerView: 3,
                                        },
                                      }}

                                    className="swiperGrid">
                                  {

                                    testimonials.map((x)=>{
                                        return(<>
                                        <SwiperSlide key={Math.random()}>
                                            <div className={`${st.cards} p-4`}>
                                                <Image src={'/images/collon.svg'} className="d-table ms-0 me-auto mb-3" width={20} height={20} />
                                                <p className="normText">{x.desc}</p>
                                                <h4>{x.clName}</h4>
                                            </div>
                                        </SwiperSlide>
                                        </>)
                                    })
                                  }
                                    
                                </Swiper>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
}



