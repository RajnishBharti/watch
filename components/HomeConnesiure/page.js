


import { useState } from "react";
import Link from "next/link";

import Image from "next/image";
import { A11y, Grid, Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/grid';
import st from './connesiure.module.css'

export default function Connesiure(props) {
    if (!props.banner) return null;




    return (
        <>
            <section className={`${st.connesiurey}`}>
                <div className="container">
                    <div className="position-relative w-100">
                        <div className="row g-5">
                          
                            <div className={`leftBullet col-lg-6`}>

                                <Swiper
                                    modules={[Grid, Navigation, A11y, Autoplay, Pagination]}
                                    // navigation={{ prevEl, nextEl }}

                                    slidesPerView={1}
                                    grid={{
                                        rows: 1,
                                    }}
                                    
                                    spaceBetween={0}
                                    pagination={{
                                        clickable: true,
                                    }}

                                    className="swiperGrid">
                                    <SwiperSlide>
                                        <Image src="/images/watch-connoisseur.webp"  width={624} height={325}  alt={props.banner.title} align="right"  />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Image src="/images/versace.webp" width={624} height={325} alt={props.banner.title} align="right"/>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            <div className="col-lg-6">
                                <h2 class="h2 text-left underline pb-3">Watch Connoisseur</h2>
                                <p class="normText pb-4 mb-2">{props.banner.description}</p>
                                <Link class="blackBtn d-table ms-md-0 mx-auto" href='/product'><span>View All Products</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
}



