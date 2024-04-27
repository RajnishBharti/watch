import Link from "next/link";
import { use, useEffect, useRef, useState } from "react";
import { CaretLeft, CaretRight } from "@styled-icons/bootstrap";
import ImageLoader from "../Image";
import { A11y,Grid,  Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/grid';
import st from './brandList.module.css'

export default function BrandCardList({ items }) {
  const [prevEl, setPrevEl] = useState(true);
  const [nextEl, setNextEl] = useState(true);


  return (
<section id="brandList" className={`${st.brandLogoCollection} gridsList BrandListSlider`}>
  <div className="container">
  <div className="position-relative w-100"><h2 class="h2 text-center underline pb-3">Our Brands</h2></div>
    <Swiper
      modules={[Grid, Navigation, A11y, Autoplay, Pagination]}
     // navigation={{ prevEl, nextEl }}
      
     //slidesPerView={5}
    //  grid={{row}}
     breakpoints={{
      640: {
        slidesPerView: 1,
        grid:{rows:1}
      },
      768: {
        slidesPerView: 2,
        grid:{rows:1},
        pagination:false
      },
      1024: {
        slidesPerView: 5,
        grid:{rows:2},
        
      },
    }}
   
     spaceBetween={0}
     pagination={{
       clickable: true,
     }}
     navigation={{ prevEl, nextEl }}
   
     className="swiperGrid"
   >

   
     

        { items.map((item, i) => (
           <SwiperSlide>
                 <Link href={`/product?brand=${item.slug}`} key={item._id + i}>
                        <ImageLoader src={item.image[0].url} alt={item.name} width={205} height={182} />
                </Link>
                </SwiperSlide>
                
      ))
      }
                    <div className="swiperNavigations">                         
                        <div  className="swiper-button-prev arrow arrow--left"  ref={(node) => setPrevEl(node)}><CaretLeft width={17} height={17} /></div>
                        <div className="swiper-button-next arrow arrow--right"  ref={(node) => setNextEl(node)}> <CaretRight width={17} height={17} /></div>
                    </div>  
    
    </Swiper>
    </div>
    </section>

  );
}



