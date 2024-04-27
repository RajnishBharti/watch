import Link from "next/link";
import classes from "./collection.module.css";
import ImageLoader from "../Image";
import Image from 'next/image'
import { ArrowRight } from "@styled-icons/bootstrap";

const Collection = ({ data }) => {
  if (!data || data.banner) return null;

  return (
      
      <>
      
<section className="art-bot">
<div className='container'>
    <div className="row">

      <div className="col-lg-6 col-md-6 col-sm-6 col-12">
      <div className="art-row">
      <div className="artBoxCard">
        <div className="art1">
          <div className="artImgbx">
            <Image src="/images/art-3.webp"  width={213} height={190} alt='wow' />
          </div>
          <div className="artCant">
           <div className="artDesc">
            <div className="artInner">
              {/* <div className="artTag">Seiko</div> */}
              <div className="artHeading">Automatic Watches</div>
                <div className="descart normText">Make a bold statement with a timepiece that speaks precision and elegance.</div>
             {/* <div className="moredetails"><a href=""><span>More Details</span></a></div>*/}
           </div>
          </div>
      </div>
    </div>
  </div>

   <div className="artBoxCard">
        <div className="art1">
          <div className="artImgbx">
            <Image src="/images/art-2.webp" width={213} height={190} alt='wow' />
          </div>
          <div className="artCant">
           <div className="artDesc">
            <div className="artInner">
              {/* <div className="artTag">Seiko</div> */}
              <div className="artHeading">Smart Watches</div>
              <div className="descart normText">Cutting-edge wearable technology to enhance your daily life.</div>
             {/*  <div className="moredetails"><a href=""><span>More Details</span></a></div>*/}
           </div>
          </div>
      </div>
    </div>
  </div>
</div>
  </div>


 <div className="col-lg-6 col-md-6 col-sm-6 col-12">
      <div className="art-row">
        <div className="artBoxCard">
            <div className="art1">
              <div className="artImgbx">
                <img src="/images/art-1.jpg"  width={213} height={190} alt='wow' />
              </div>
              <div className="artCant">
               <div className="artDesc">
                <div className="artInner">
                  {/* <div className="artTag">Seiko</div> */}
                  <div className="artHeading">Classical Watches</div>
                   <div className="descart normText">Timeless elegance captured in exquisite timepieces.</div>
                  {/* <div className="moredetails"><a href=""><span>More Details</span></a></div>*/}
               </div>
              </div>
          </div>
        </div>
       </div>

        <div className="artBoxCard">
            <div className="art1">
              <div className="artImgbx">
                <Image src="/images/art-4.webp"  width={185} height={135} alt='wow' style={{marginRight: "18px"}} />
              </div>
              <div className="artCant">
               <div className="artDesc">
                <div className="artInner">
                  {/* <div className="artTag">Seiko</div> */}
                  <div className="artHeading">Jewellery Watches</div>
                  <div className="descart normText">Stunning timepieces, an epitome of opulence and style.</div>
                {/*  <div className="moredetails"><a href=""><span>More Details</span></a></div>*/}
               </div>
              </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
</section>

    </>
  );
};

export default Collection;
