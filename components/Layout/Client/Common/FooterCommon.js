'use client'

import {
  Facebook,
  Instagram,
  PinterestAlt,
  Twitter,
  Youtube,
} from "@styled-icons/boxicons-logos";
import { DeliveryDining, Security, SupportAgent } from "@styled-icons/material";
import Link from "next/link";
import { React, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SearchBar from "~/components/Layout/Client/searchbar";
import "react-toastify/dist/ReactToastify.css";
import Image from 'next/image'
import Script from 'next/script';
import Newsletter from "~/components/Layout/Client/newsletter";
import { Headset, ShieldCheck, Truck } from "@styled-icons/bootstrap";

const Footer = (props) => {

  // Selecting session from global state
  const { session } = useSelector((state) => state.localSession);
  // Selecting settings from global state

  // Selecting settings from global state
  const settings = useSelector((state) => state.settings);

  let [formToggleClass, setCarclass] = useState('hideForm')



  function getMobCloseValue(x) {
    setCarclass(x)

  }

  function formHideShow() {
    if (formToggleClass === 'hideForm') {
      setCarclass('showForm')
    }
    else if (formToggleClass === 'showForm') {
      setCarclass('hideForm')
    }
  }

  useEffect(() => {


    setCarclass('hideForm')
    //   $(document).ready(function() {
    //      $('#bottom-search').on('click', function() {
    //         $('.search-form').slideToggle();
    //      })
    //   });

  }, [])
  return (
    <>
<footer>
<div className="container">
  <div className="d-md-flex justify-content-around">
    {/* first Col */}
    <div>
    <div className="footer-logo">
                <img src="/images/footer-logo.webp" width={150} alt='wow' />
                <p className="normText text-white pt-3 mb-0">Subscribe to Our Newsletter</p>
                <Newsletter />
              </div>
              <div className="footermail pt-0 pb-0">
                <a href={`mailto:${settings.settingsData.email}`}>
                  <Image src="/images/footer-mail.svg" width={20} height={20} alt="wow" className="me-2" /> {settings.settingsData.email}
                </a>
              </div>
              <div className="footercoll pt-2">
                <a href={`tel:${settings.settingsData.phoneFooter}`}>
                  <Image src="/images/footer-call.svg" width={20} height={20} alt="wow" className="me-2" />  {settings.settingsData.phoneFooter}
                </a>
              </div>
    </div>

     {/* second Col */}
    <div>
    <div className="footer-links">
                    <div className="link-col">
                      <h3>Other Links</h3>
                      <ul>
                        <li><a href="/faq">Help</a></li>
                        <li><a href="/privacy">Privacy Policy</a></li>
                        <li><a href="/terms">Terms &amp; Conditions</a></li>
                        <li><a href="/return">Cancellation & Return Policy</a></li>
                        <li><Link href='/order-track'>Track Order</Link></li>
                      </ul>
                    </div>
                  </div>
    </div>

  {/* Third Col */}
    <div>
    <div className="footer-links">
                    <div className="link-col">
                      <h3>Other Links</h3>
                      <ul>
                        <li><a href="/faq">Help</a></li>
                        <li><a href="/privacy">Privacy Policy</a></li>
                        <li><a href="/terms">Terms &amp; Conditions</a></li>
                        <li><a href="/return">Cancellation & Return Policy</a></li>
                        <li><Link href='/order-track'>Track Order</Link></li>
                      </ul>
                    </div>
                  </div>
    </div>

      {/* Forth Col */}
    <div>
    <div className="footer-links">
                    <div className="link-col">
                      <h3>Socials</h3>
                      <ul>
                        <li>
                          <Link href={settings.settingsData.social.instagram} target="_blank">
                            <Image src="/images/footer-instagram.svg" width={20} height={20} alt="wow" className="me-2" /> Instagram</Link>
                        </li>
                        <li>
                          <Link href={settings.settingsData.social.facebook} target="_blank"><Image src="/images/footer-facebook.svg" width={20} height={20} alt="wow" className="me-2" /> Facebook</Link>
                        </li>
                        <li>
                          <Link href={settings.settingsData.social.youtube} target="_blank">
                            <Image src="/images/footer-youtube.svg" width={20} height={20} alt="wow" className="me-2" /> Youtube</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
    </div>

          {/* Fifth Col */}
    <div>
    <div className="news-letter">
                    <h3>Store Locations</h3>
                    <ul className="footerLocation">

                      <li><Link href='https://worldofwatchesindia.com/watch-store-worldmark-gurgaon' target="_blank">
                        <Image src="/images/footer-location.svg" width={20} height={20} alt="wow" className="me-2" />
                        World of Watches Worldmark</Link></li>
                      <li>
                        <Link href='https://worldofwatchesindia.com/casio-exclusive-store-gurgaon/' target="_blank">
                          <Image src="/images/footer-location.svg" width={20} height={20} alt="wow" className="me-2" />
                          Casio Exclusive Store, (Ambience Mall)
                        </Link>
                      </li>

                      <li>
                        <Link href='https://worldofwatchesindia.com/watch-store-mgf-ground-floor-gurgaon' target="_blank">
                          <Image src="/images/footer-location.svg" width={20} height={20} alt="wow" className="me-2" />
                          MGF Metropolitan Mall, (Ground Floor)
                        </Link>
                      </li>
                      <li>
                        <Link href='https://worldofwatchesindia.com/watch-store-mgf-first-floor-gurgaon' target="_blank">
                          <Image src="/images/footer-location.svg" width={20} height={20} alt="wow" className="me-2" />
                          MGF Metropolitan Mall, (First Floor)
                        </Link>
                      </li>
                    </ul>


                  </div>
    </div>
  </div>
</div>
<div className="footer-bottom"> {/*{settings.settingsData.copyright}*/} © 2024 <Link href="">World Of Watches</Link>
        </div>
</footer>




      <div className="menu-wrap">
        <nav className="menu">
          <div className="icon-list">
            <Link href="https://worldofwatchesindia.com/worldmark" target="_blank">WoW Worldmark</Link>
            <Link href="https://worldofwatchesindia.com/casio-exclusive-store-gurgaon/" target="_blank">Casio Exclusive store Gurgaon</Link>
            <Link href="https://worldofwatchesindia.com/mgf-ground-floor" target="_blank">WoW Mgf Ground Floor</Link>
            <Link href="https://worldofwatchesindia.com/mgf-first-floor" target="_blank">WoW Mgf First FLOOR</Link>

            <hr />
            <Link href="/watch-care/">Watch Care</Link>
            <hr />
            <Link href="/about/">About Us</Link>
            <Link href="/terms/">Terms & Conditions</Link>
            <Link href="/privacy/">Privacy Policy</Link>
            <Link href="/return/">Cancellation & Return Policy</Link>
            <Link href="/faq/">Faq's</Link>
          </div>
        </nav>
        <button className="close-button" id="close-button">Close Menu</button>
        <div className="morph-shape" id="morph-shape" data-morph-open="M-1,0h101c0,0,0-1,0,395c0,404,0,405,0,405H-1V0z">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 800" preserveAspectRatio="none">
            <path d="M-1,0h101c0,0-97.833,153.603-97.833,396.167C2.167,627.579,100,800,100,800H-1V0z" />
          </svg>
        </div>
      </div>




{/*      <div className="offcanvas offcanvas-start menu-wrap" id="offcanvasExample">
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
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
  */}

      <section className="mobile-footer">
        <div className={`search-modal bottom-search-modal ${formToggleClass}`}>
          <form className="search-form desktop-search">
            <div className="footerSearchInput">
              <SearchBar mb={getMobCloseValue} />
            </div>
            <button className="search-button" title="Go">
              <Image src="/images/search-icon.png" width={25} height={25} alt='wow' />
            </button>
            <input type="hidden" name="type" value="product" />
          </form>
        </div>
        <div className="container-fluid">
          <div className="col-lg-12">
            <ul className="mfl">
              <li>
                <Link href="/">
                  <span>
                    <Image className="width-25" id="Layer_1" src="/images/home-icon.svg" width={25} height={25} alt='wow' />
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/watch-care">
                  <Image className="width-25" id="Layer_1" src="/images/watch-icon.svg" width={25} height={25} alt='wow' />
                </Link>
              </li>
              <li>
                <div id="bottom-search" onClick={formHideShow}>
                  <Image className="width-25" id="Layer_1" src="/images/footer-search-icon.svg" width={25} height={25} alt='wow' />

                </div>
              </li>
              {/*
        <li>
          <Link href="/cart">  
          <i className="fa fa-cart-plus"></i>
          </Link>
        </li>
        */}
              {/*
        <li>
          <Link href="/signin">
          <Image  className="width-25" id="Layer_1" src="/images/footerUser.svg"   width={25} height={25} alt='wow'  />
          </Link>
        </li>
        */}

              <li>

                {!session && (
                  <Link href="/signin">
                    <Image className="width-25" id="Layer_1" src="/images/footerUser.svg" width={25} height={25} alt='wow' />
                  </Link>
                )}
                {session && (
                  <Link href="/profile">
                    <Image className="width-25" id="Layer_1" src="/images/footerUser.svg" width={25} height={25} alt='wow' />
                  </Link>

                )}
              </li>
            </ul>
          </div>
        </div>
      </section>









      <div className="modal fade" id="world-of-watches-worldmark" aria-labelledby="world-of-watches-worldmarkLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="world-of-watches-worldmarkLabel">World Of Watches – Worldmark</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.7108345204083!2d77.06953637528001!3d28.39780057579377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d2374024bfcc7%3A0x8e7bd4c6024a21d4!2sWORLD%20OF%20WATCHES%20-%20WORLDMARK%20SECTOR%2065!5e0!3m2!1sen!2sin!4v1702977101452!5m2!1sen!2sin" width="100%" height="450"
                style={{ "border": 0 }} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            </div>
          </div>
        </div>
      </div>


      <div className="modal fade" id="casio-exclusive-store" aria-labelledby="casio-exclusive-storekLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="casio-exclusive-storekLabel">Casio Exclusive Store, (Ambience Mall)</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.1674808854073!2d77.097071!3d28.5046084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d194473c41cb5%3A0x8a187bec17ebf36d!2sCasio%20Exclusive%20Store!5e0!3m2!1sen!2sin!4v1684934008439!5m2!1sen!2sin" width="100%" height="450"
                style={{ "border": 0 }} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            </div>
          </div>
        </div>
      </div>




      <div className="modal fade" id="mgf-metropolitan-mall-grfloar" aria-labelledby="mgf-metropolitan-mall-grfloarLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="casio-exclusive-storekLabel">MGF Metropolitan Mall, (Ground Floor)</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.954778235565!2d77.0755161967896!3d28.4809085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1965688fb3a7%3A0xde7b8912f5c4b09e!2sWorld%20of%20Watches%20-%20Ground%20Floor!5e0!3m2!1sen!2sin!4v1702977501645!5m2!1sen!2sin" width="100%" height="450"
                style={{ "border": 0 }} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            </div>
          </div>
        </div>
      </div>


      <div className="modal fade" id="mgf-metropolitan-mall-fstfloar" aria-labelledby="mgf-metropolitan-mall-fstfloarLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="casio-exclusive-storekLabel">MGF Metropolitan Mall (First Floor)</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56133.34294977105!2d77.03499577801333!3d28.439348347025746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d2374024bfcc7%3A0x8e7bd4c6024a21d4!2sWORLD%20OF%20WATCHES%20-%20WORLDMARK%20SECTOR%2065!5e0!3m2!1sen!2sin!4v1702977957961!5m2!1sen!2sin" width="100%" height="450"
                style={{ "border": 0 }} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            </div>
          </div>
        </div>
      </div>



    </>
  );

  return null;
};

export default Footer;