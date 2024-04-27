import { CardText, ChatLeftDots, StarHalf } from "@styled-icons/bootstrap";
import Link from 'next/link'

import customId from "custom-id-new";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Error404 from "~/components/error/404";
import Error500 from "~/components/error/500";
import HeadData from "~/components/Head";
import ImageLoader from "~/components/Image";
import CallAction from "~/components/CallAction";

import CustomSCript from "~/components/Layout/Client/Common/CustomSCript";
import {
  appUrl,
  fetchData,
  postData,
  setSettingsData,
} from "~/lib/clientFunctions";
import blogDetailsData from "~/lib/dataLoader/blogDetail";
import { wrapper } from "~/redux/store";


function BlogDetailsPage({ data, error }) {

  const { session } = useSelector((state) => state.localSession);
  const settings = useSelector((state) => state.settings);
  const router = useRouter();

  const refreshData = () => router.replace(router.asPath);

  if (error) return <Error500 />;
  if (!data.blog) return <Error404 />;


  return (
    <>
      <HeadData
        title={data.blog.name}
        seo={data.blog.seo}
        url={`blog/${data.blog.slug}`}
      />
   <section className="topBannerSectipn">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-8 col-md-12 col-sm-12">
             <div className="blog-col">
          <div className="bog-img bog-dtlsImg">
            <ImageLoader src={data.blog.image[0].url} width={397.49} height={287.44} alt='Blog User' />
          </div>
          <div className="blogdtls">
            <h2 className="h2 text-left underline pt-4 pb-2 mb-4">{data.blog.name}</h2>
            <div className="normText" dangerouslySetInnerHTML={{ __html: data.blog.description, }} />
          </div>
           
        </div>
            </div>
            <div className='col-xl-3 col-lg-4'>
             
             <div class="artHeading">Latest Post</div>
             
               <div className="row g-3 my-2">
                <div className="col-md-4">
                  <a href="https://worldofwatchesindia.com/blog/do-you-have-these-watches-in-your-collection-time-to-upgrade"><img src="https://worldofwatchesindia.com/_next/image?url=https%3A%2F%2Fwww.worldofwatchesindia.com%2F464372c46bf0eb57ca5486f0a.png&w=640&q=75" className="img-fluid" alt="..." /></a>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h6 className="card-title pb-2">
                      <a href="https://worldofwatchesindia.com/blog/do-you-have-these-watches-in-your-collection-time-to-upgrade" className="text-secondary-emphasis">  Do You Have These Watches in Your Collection? Time to Upgrade</a>
                    </h6>
                    <div class="moredetails  pt-0 mt-0"><a target="_blank" href="https://worldofwatchesindia.com/blog/do-you-have-these-watches-in-your-collection-time-to-upgrade"><span>View Details</span></a></div>
                  </div>
                </div>
              </div>
              
              
               <div className="row g-3 my-2">
                <div className="col-md-4">
                  <a href="https://worldofwatchesindia.com/blog/a-stylish-affair-newly-launched-watches-in-2024-under-1-lakh-in-india-1441celm1225afhy"><img src="https://worldofwatchesindia.com/_next/image?url=https%3A%2F%2Fwww.worldofwatchesindia.com%2Fa10f5a83c17059e6736d91f00.png&w=640&q=75" className="img-fluid" alt="..." /></a>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h6 className="card-title pb-2">
                      <a href="https://worldofwatchesindia.com/blog/a-stylish-affair-newly-launched-watches-in-2024-under-1-lakh-in-india-1441celm1225afhy" className="text-secondary-emphasis">A Stylish Affair: Newly Launched Watches in 2024 Under 1 Lakh in India</a>
                    </h6>
                    <div class="moredetails  pt-0 mt-0"><a href="https://worldofwatchesindia.com/blog/a-stylish-affair-newly-launched-watches-in-2024-under-1-lakh-in-india-1441celm1225afhy" target="_blank" href="/blog/a-stylish-affair-newly-launched-watches-in-2024-under-1-lakh-in-india-1441celm1225afhy"><span>View Details</span></a></div>
                  </div>
                </div>
              </div>
              
              
               <div className="row g-3 my-2">
                <div className="col-md-4">
                  <a href="https://worldofwatchesindia.com/blog/how-to-take-care-of-your-time-peice-0631isfm7360pvhe"><img src="https://worldofwatchesindia.com/_next/image?url=https%3A%2F%2Fworldofwatchesindia.com%2Fe3cfedec72767acd251b21700.png&w=640&q=75" className="img-fluid" alt="..." /></a>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h6 className="card-title pb-2">
                      <a href="https://worldofwatchesindia.com/blog/how-to-take-care-of-your-time-peice-0631isfm7360pvhe" className="text-secondary-emphasis">How to take care of your time peice</a>
                    </h6>
                    <div class="moredetails  pt-0 mt-0"><a href="https://worldofwatchesindia.com/blog/a-stylish-affair-newly-launched-watches-in-2024-under-1-lakh-in-india-1441celm1225afhy" target="_blank" href="https://worldofwatchesindia.com/blog/how-to-take-care-of-your-time-peice-0631isfm7360pvhe"><span>View Details</span></a></div>
                  </div>
                </div>
              </div>
              
              
              
             
             
            </div>
            </div>
            
</div>
</section>
      



      <CustomSCript />
    </>
  );
}

function EmptyContent({ icon, text }) {
  return (
    <div className={classes.empty_content}>
      <div className={classes.empty_icon}>{icon}</div>
      <div className={classes.empty_text}>{text}</div>
    </div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res, query }) => {
      if (res) {
        res.setHeader(
          "Cache-Control",
          "public, s-maxage=10800, stale-while-revalidate=59"
        );
      }
      const _data = await blogDetailsData(query.name);
      const data = JSON.parse(JSON.stringify(_data));
      if (data.success) {
        setSettingsData(store, data);
      }
      return {
        props: {
          data,
          error: !data.success,
        },
      };
    }
);
export default BlogDetailsPage;
