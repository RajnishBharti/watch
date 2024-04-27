import { CaretLeft, CaretRight } from "@styled-icons/bootstrap";
import { use, useEffect, useRef, useState } from "react";
import { A11y, Autoplay, Navigation,Pagination } from "swiper";
import Image from 'next/image'
import "swiper/css";
import { Swiper, SwiperSlide} from "swiper/react";
import Product from "../Shop/Product/product";
import c from "./productList.module.css";
import useOnScreen from "~/utils/useOnScreen";
import { toast } from "react-toastify";
import { fetchData } from "~/lib/clientFunctions";
import Spinner from "../Ui/Spinner";
import Link from 'next/link'




const breakpointNewArrival = {

      1100: {
        slidesPerView:5,
        spaceBetween:30,
       // pagination:true,
      },
        880: {
        slidesPerView: 3,
        pagination:false,
      },
       675: {
        slidesPerView: 2,
       pagination:false,
      },
       300: {
        slidesPerView: 2,
        pagination:false,
      }
};

function ProductList(props) {

  const [prevEl, setPrevEl] = useState(true);
  const [nextEl, setNextEl] = useState(true);
  const [loaded, setLoaded] = useState(false);
  let [ftitlse, setFtitle]= useState(false)
  const [productList, setProductList] = useState([]);
  const current = useRef();
  const onViewPort = useOnScreen(current);

  

  async function loadData() {
    try {
      const url = `/api/home/products?type=${props.type}`;
      const resp = await fetchData(url);
      resp.success
        ? setProductList(resp.products || [])
        : toast.error("Something Went Wrong");
    } catch (err) {
      console.log(err);
      toast.error("Something Went Wrong");
    }
    setLoaded(true);
  }

  useEffect(() => {
    if (onViewPort && !loaded) {
      loadData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onViewPort]);

  return (
      <>
      
<section className="hotproduct">
  <div className="container" ref={current}>
    <h2 className="h2 text-center pb-3">{props.title}</h2>
        {productList.length > 0 && (
          <>
            <Swiper
                modules={[Navigation, A11y, Autoplay, Pagination]}
                        
                        navigation={{ prevEl, nextEl }}
                        breakpoints={breakpointNewArrival}
                        pagination={{
                          clickable: true,
                        }}
                        autoplay={{
                            delay: 6000,
                            disableOnInteraction: true,
                            pauseOnMouseEnter: true,
                            waitForTransition: true,
                        }}
                        loop={false} 
                        centeredSlides={false} 
                        centerInsufficientSlides={false} 
                        speed={900}>
                                  
                        {productList.map((item) => (                               
                           <SwiperSlide key={item._id}>                                    
                              <Product tranding={props.title} product={item}  button link={`/?slug=${item.slug}`} layout={"text-start"} border />
                            </SwiperSlide>
                                  ))}         
                    <div className="swiperNavigations">                         
                        <div  className="swiper-button-prev arrow arrow--left"  ref={(node) => setPrevEl(node)}><CaretLeft width={17} height={17} /></div>
                        <div className="swiper-button-next arrow arrow--right"  ref={(node) => setNextEl(node)}> <CaretRight width={17} height={17} /></div>
                    </div>               
            </Swiper>
           </>
        )}

  </div>
</section>

    </>
  );
}

export default ProductList;
