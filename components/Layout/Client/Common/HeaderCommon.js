import {
  BoxArrowInRight,
  GeoAlt,
  Heart,
  Person,
  PersonPlus,
  Repeat,
  Telephone,
} from "@styled-icons/bootstrap";
import axios from 'axios'
import { useRouter } from 'next/router'
import { signOut } from "next-auth/react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { memo, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import ImageLoader from "~/components/Image";
import SearchBar from "~/components/Layout/Client/searchbar";
import Image from 'next/image'
import HeaderDropDown from "./headerDropDown";



const CartView = dynamic(() => import("~/components/Layout/Client/cartView"), { ssr: false });
const CategoryMenu = dynamic(() => import("~/components/Layout/Client/categoryMenu"), { ssr: false });
const CategoryMenuCollection = dynamic(() => import("~/components/Layout/Client/categoryMenuCollection"), { ssr: false });


const NavBar = ({ data }) => {

    const[isNav, setNav]=useState(null) 

useEffect(()=>{
  CheckoutNav()
},[])
  

function CheckoutNav(){
  !isNav? setNav(true):setNav(null)
}

  const [hideTopBar, setHideTopBar] = useState(false);
  // Selecting session from global state
  const { session } = useSelector((state) => state.localSession);
  // Selecting settings from global state
    
    // Selecting settings from global state
    const settings = useSelector((state) => state.settings);

  const { settingsData } = useSelector((state) => state.settings);
  const { wishlist, compare } = useSelector((state) => state.cart);
  const [std, setStd] = useState(settingsData);
  const [navData, setNavData] = useState(null);


  const [cat, setCat] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showCategory, setShowCategory] = useState(false);



  // get Nvbar DAta 
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

  let [mobScreen, setMobScreen] = useState('');
  useEffect(() => {
    setMobScreen(window.innerWidth)
    getNavData();
    
  }, [])




  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setStd(settingsData);
  }, [settingsData]);

  const router = useRouter();

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 110) {
      setHideTopBar(true);
    } else {
      setHideTopBar(false);
    }
  };
  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setShowCategory(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const goToWishList = () => {
    // if (session) {
    router.push("/wishlist");
    //  } else {
    //     toast.warning("You need to login to create a Wishlist");
    //  }
  };

  const navItem = [
    {
      id: 1,
      name: "Home",
      to: "/",
    },
    {
      id: 2,
      name: "Gifts",
      to: "javascript:void(0)",
    },
    {
      id: 3,
      name: "New Watches",
      to: "/watches/new-watch-collections",
    },
    {
      id: 4,
      name: "Men",
      to: "/watches/men-watches",
    },
    {
      id: 5,
      name: "Women",
      to: "/watches/women-watches",
    },
  ];


  return (
    <>


      <header>
    

        <div className="container">
          <div className="row">
            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-2 d-flex align-items-center icon-nav">
             
             {/*
              <button className="menu-button" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample"></button>
  */}
  <button className="menu-button" onClick={()=>{CheckoutNav()}}></button>
    
            
            </div>
            <div className="col-lg-2 col-md-2 col-sm-2 col-4">
              <div className="logo">
                <Link href="/"><Image src="/images/wow-logo.svg" width={130} height={67} alt='User' /></Link>
              </div>
            </div>
            <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-8">
              <div className="top-nav">
                <ul>
                {mobScreen >= 994 ?
                  navItem.map((x)=><li className="mob-hide"><Link href={x.to}>{x.name}</Link></li>)   
                  
                  :null}
                  <HeaderDropDown />

                  <li className="mob-hide"><Link href=""><img src="/images/icon-mail.svg" width={20} /></Link></li>
                 

                  {mobScreen >= 994 ?
                    <>
                      <li><SearchBar /></li>
                      <li className="dropdown">
                        <Link href="/wishlist">
                          <Image src="/images/heart-svgrepo-com.svg" width={27} height={27} alt='wishlist' />
                          <span>{wishlist.length || 0}</span>
                        </Link>
                      </li>
                      <li className="dropdown">
                        {!session && (
                          <Link href="/signin">
                            <Image src="/images/icon-profile.svg" width={27} height={27} alt='User' />
                          </Link>
                        )}
                        {session && (
                          <CategoryMenu />
                        )}
                      </li>

                    </>

                    : null
                  }


                  <CartView />


                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>

{/* OffConvas Start*/}

{/* <div className="offcanvas offcanvas-start menu-wrap" id="offcanvasExample"> */}
{!isNav?
<div className="offcanvas offcanvas-start menu-wrap show">


        <button type="button" className="btn-close" onClick={()=>{CheckoutNav()}}></button>
        <nav className="menu">
          <div className="icon-list">
            <Link href="/watch-care/"><span>Contact Us</span></Link>
            <a href={`mailto:${settings.settingsData.email}`}>
              <span className="me-1"><Image src="/images/email.png" width={16} height={12} alt="wow" /> &nbsp;  &nbsp;{settings.settingsData.email} </span>
            </a>
            <a href={`tel:${settings.settingsData.phoneFooter}`}>
              <span className="me-1"> <Image src="/images/call.png" width={16} height={12} alt="wow" /> &nbsp;  &nbsp;{settings.settingsData.phoneFooter} </span>
            </a>
            <hr />
            <Link className="pointer" href="/watch-care/"><span data-bs-dismiss="offcanvas">Watch Care</span></Link>
            <Link className="pointer" href="/order-track/"><span data-bs-dismiss="offcanvas">Track Your Order</span></Link>
            <Link className="pointer" href="/compare/"><span data-bs-dismiss="offcanvas">compare</span></Link>

            <hr />
            <Link className="pointer" href="/about/"><span data-bs-dismiss="offcanvas">About Us</span></Link>
            <Link className="pointer" href="/terms/"><span data-bs-dismiss="offcanvas">Terms & Conditions</span></Link>
            <Link className="pointer" href="/privacy/"><span data-bs-dismiss="offcanvas">Privacy Policy</span></Link>
            <Link className="pointer" href="/return/"><span data-bs-dismiss="offcanvas">Cancellation & Return Policy</span></Link>
            <Link className="pointer" href="/faq/"><span data-bs-dismiss="offcanvas">FAQ's</span></Link>

            <hr />
            <Link href="#" class="dropdown-toggle dropDown" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
              Our Stores
            </Link>
            <ul className="dropdown-menu dropdown-menu-lg-end bg-transparent">
              <li><Link className="pointer" href="https://worldofwatchesindia.com/watch-store-worldmark-gurgaon" target="_blank"><span data-bs-dismiss="offcanvas">WOW WORLDMARK SEC-65, Gurugram, Haryana</span></Link></li>
              <li><Link className="pointer" href="https://worldofwatchesindia.com/casio-exclusive-store-gurgaon/" target="_blank"><span data-bs-dismiss="offcanvas">CASIO EXCLUSIVE STORE Ambience Mall, Gurugram,<br />Haryana</span></Link></li>
              <li><Link className="pointer" href="https://worldofwatchesindia.com/watch-store-mgf-ground-floor-gurgaon" target="_blank"><span data-bs-dismiss="offcanvas">WOW- MGF GROUND FLOOR, Gurugram, Haryana</span></Link></li>
              <li><Link className="pointer" href="https://worldofwatchesindia.com/watch-store-mgf-first-floor-gurgaon" target="_blank"><span data-bs-dismiss="offcanvas">WOW- MGF FIRST FLOOR, Gurugram, Haryana</span></Link></li>
            </ul>
          </div>
        </nav>
      </div>
      : null

}

{/*end off Convas*/}




    </>
  );
};

export default memo(NavBar);

