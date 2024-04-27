'use client'
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import axios from "axios";

const CategoryMenuBrand = dynamic(() => import("~/components/Layout/Client/categoryMenuBrand"), { ssr: false });
const CategoryMenuCollection = dynamic(() => import("~/components/Layout/Client/categoryMenuCollection"), { ssr: false });

export default function HeaderDropDown() {

    const [navData, setNavData] = useState(null);

    const[isNav, setNav]=useState(null) 

    function CheckoutNav(){
           !isNav? setNav(true):setNav(null)
       }

       
    // get Nav Data 
    const getNavData = async () => {
        if (navData == null) {
            try {
                const response = await axios.get("/api/navbardata");
                setNavData(response.data);
            } catch (error) {
                setNavData(null);
            }
        }
    }

    useEffect(() => {
        getNavData();
    }, [])

    return (
        <li className="nav-item dropdown dropdown-mega position-static">
            <a className={isNav? 'active' : null} href="javascript:void(0)" onClick={()=>{CheckoutNav()}}>Explore</a>

{isNav?


            <div className="dropdown-menu shadow show  w-100">
                <div className="mega-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12">
                                <div className="row">
                                    <div className="col-xl-5 col-lg-5 col-md-7">
                                        <CategoryMenuBrand data={navData} />
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-5">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6 col-md-5">
                                                <CategoryMenuCollection data={navData} />
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-5">
                                                <h3>Shop By Price</h3>
                                                <ul className="shopByCat">
                                                    <li><a href='#'>Below 10,000</a></li>
                                                    <li><a href='#'>10,000-20,000</a></li>
                                                    <li><a href='#'>20,000-30,000</a></li>
                                                    <li><a href='#'>30,000-50,000</a></li>
                                                    <li><a href='#'>50,000 & above</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-3 col-lg-3 col-md-5 watchCareNav">
                                        <a href='/watch-care' className='px-0'><img src='/images/watch-care-menu.jpg' className='img-fluid' /></a>
                                        <div className='careNm'><a href='/watch-care'>Watch Care Guidelines</a></div>
                                        <div class="moredetails  pt-0"><a href="/watch-care"><span>Discover</span></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            :null
        }
        </li>
    )
}
