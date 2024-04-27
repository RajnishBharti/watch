import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Script from 'next/script'
import { usePathname, redirect } from 'next/navigation'

import HeadCommon from "~/components/Layout/Client/Common/HeadCommon";
import ScriptCommon from "~/components/Layout/Client/Common/ScriptCommon";
import axios from 'axios';

const ContactForm = () => {
  const [isRedirect, setIsRedirect] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    subject: 'Casio store - New Query',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const router = useRouter();
  const pathname = usePathname()
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.name.length == 0) {
      alert('Invalid Form, First Name can not be empty')
      return
    }
    if (formData.phone.length == 0) {
      alert('Invalid Form, Phone can not be empty')
      return
    }
    if (formData.date.length == 0) {
      alert('Invalid Form, Date can not be empty')
      return
    }
    if (formData.time.length == 0) {
      alert('Invalid Form, Time can not be empty')
      return
    }

    try {
      const res = await axios.post('/api/email', formData);
      console.log(res.data);
      setIsRedirect(true);
    } catch (error) {
      console.error(error);
    }
  };

  if (isRedirect) {
    $('#bookappointment').modal('hide');
    router.replace("/thank-you");
  }

  useEffect(() => {

    $('.topSlider').owlCarousel({
      loop: true,
      nav: true,
      pagination: false,
      dots: false,
      autoplay: true,
      margin: 0,
      stagePadding: 0,
      autoplayTimeout: 2000,
      autoplayHoverPause: false,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    })


    $('.brandSlider').owlCarousel({
      loop: true,
      nav: true,
      pagination: false,
      dots: false,
      autoplay: true,
      margin: 15,
      stagePadding: 0,
      autoplayTimeout: 5000,
      autoplayHoverPause: false,
      responsive: {
        0: {
          items: 3
        },
        600: {
          items: 6
        },
        1000: {
          items: 6
        }
      }
    })



    $('.casioSlider').owlCarousel({
      loop: true,
      nav: false,
      pagination: false,
      dots: false,
      autoplay: true,
      margin: 20,
      stagePadding: 100,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 3
        }
      }
    })



    if (router.query.slug) {
      setIsOpen(true);
    }
  }, [router.query.slug, pathname]);
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Casio Exclusive Store</title>
      <link rel="icon" type="image/x-icon" href="https://worldofwatchesindia.com/images/favicon.jpg"/>
      <HeadCommon />

      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
      <link href="https://owlcarousel2.github.io/OwlCarousel2/assets/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
      <link href="https://owlcarousel2.github.io/OwlCarousel2/assets/owlcarousel/assets/owl.theme.default.min.css" rel="stylesheet" />
      <link href="https://bonwic.cloud/wow/assets-landing-page/css/style.css" rel="stylesheet" />
      <section className="topBanner">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="wowDtls">
                <header>
                  <img src="https://bonwic.cloud/wow/assets-landing-page/img/logo.svg" width={170} />
                </header>
                <div className="wowDtlsContent">
                  <h1>Casio Exclusive Store</h1>
                  <div className="subName">Ambience Mall</div>
                  <ul>
                    <li className="location">F109, 1st Floor, Ambience Mall, NH 8, Ambience Island, DLF Phase 3, Sector 24, Gurugram, Haryana 122002</li>
                    <li className="mail"><a href="mailto:casioamb.gur@gmail.com" className="mail-icon">casioamb.gur@gmail.com</a></li>
                    <li className="callWithWatsapp">
                      <div className="whatsapp"><a target="_blank" href="https://wa.link/37osig/">8076063649</a></div>
                      <div className="call"><a href="tel:0124 4239329">0124-4239329</a></div>
                    </li>
                  </ul>
                </div>
                <div className="btnDtls">
                  <a href="#" data-bs-toggle="modal" data-bs-target="#directionmodal" className="wowBtn">Get Direction</a>
                  <a href="tel:8076063649" className="wowBtn">Call Now</a>
                  <a href="#" data-bs-toggle="modal" data-bs-target="#bookappointment" className="wowBtn">Book Appointment</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 pe-lg-0">
              <div className="customOwlnav bottomPosition">
                <div className="owl-carousel topSlider owl-theme">
                  <div className="item">
                    <img src="https://bonwic.cloud/wow/casio-exclusive-store-gurgaon/img/banner.webp" className="w-100" />
                  </div>
                  <div className="item">
                    <img src="https://bonwic.cloud/wow/casio-exclusive-store-gurgaon/img/banner2.webp" className="w-100" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div></section>
      <section className="branding">
        <div className="container">
          <h2>List of Brands</h2>
          <div className="row">

            <div className="col-lg-3">
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="customOwlnav topLessPosition rightPostiont">
                <div className="owl-carousel brandSlider owl-theme">
                  <div className="brandItmes">
                    <img src="https://bonwic.cloud/wow/casio-exclusive-store-gurgaon/img/brand1.webp" />
                  </div>
                  <div className="brandItmes">
                    <img src="https://bonwic.cloud/wow/casio-exclusive-store-gurgaon/img/brand2.webp" />
                  </div>
                  <div className="brandItmes">
                    <img src="https://bonwic.cloud/wow/casio-exclusive-store-gurgaon/img/brand3.webp" />
                  </div>
                  <div className="brandItmes">
                    <img src="https://bonwic.cloud/wow/casio-exclusive-store-gurgaon/img/brand4.webp" />
                  </div>
                  <div className="brandItmes">
                    <img src="https://bonwic.cloud/wow/casio-exclusive-store-gurgaon/img/brand5.webp" />
                  </div>
                  <div className="brandItmes">
                    <img src="https://bonwic.cloud/wow/casio-exclusive-store-gurgaon/img/brand6.webp" />
                  </div>
                  <div className="brandItmes">
                    <img src="https://bonwic.cloud/wow/casio-exclusive-store-gurgaon/img/brand7.webp" />
                  </div>
                  <div className="brandItmes">
                    <img src="https://bonwic.cloud/wow/casio-exclusive-store-gurgaon/img/brand8.webp" />
                  </div>
                </div>
              </div>
            </div>
            <div className="storeTime">
              <div className="storeTimeHead">Store Timing</div>
              <div className="storeOpenDate"><img src="https://bonwic.cloud/wow/assets-landing-page/img/calender.svg" /> Open all 7 days</div>
              <div className="storeOpenDate"><img src="https://bonwic.cloud/wow/assets-landing-page/img/clock.svg" /> 11:00 AM to 9:30 PM</div>
            </div>
          </div>
        </div>
      </section>
      <section className="casioStore">
        <h2 className="text-center mb">Casio Exclusive Store</h2>

        <div className="curveBg">
          <div className="customOwlnav bottomPosition">
            <div className="owl-carousel casioSlider owl-theme">
              <div className="item">
                <img src="https://bonwic.cloud/wow/casio-exclusive-store-gurgaon/img/s1.webp" className="w-100" />
              </div>
              <div className="item">
                <img src="https://bonwic.cloud/wow/casio-exclusive-store-gurgaon/img/s2.webp" className="w-100" />
              </div>
              <div className="item">
                <img src="https://bonwic.cloud/wow/casio-exclusive-store-gurgaon/img/s3.webp" className="w-100" />
              </div>
              <div className="item">
                <img src="https://bonwic.cloud/wow/casio-exclusive-store-gurgaon/img/s4.webp" className="w-100" />
              </div>
              <div className="item">
                <img src="https://bonwic.cloud/wow/casio-exclusive-store-gurgaon/img/s5.webp" className="w-100" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mapSection">
        <div className="container">
          <div className="row flex-row-reverse">
            <div className="col-lg-6">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <a className="nav-link active" id="map1" data-bs-toggle="tab" data-bs-target="#map1-pane" type="button" role="tab" aria-controls="map1-pane" aria-selected="true">
                    <h3><img src="https://bonwic.cloud/wow/assets-landing-page/img/location.svg" />Casio Exclusive Store</h3>
                    <p>F109, 1st Floor, Ambience Mall, NH 8, Ambience Island, DLF Phase 3, Sector 24, Gurugram, Haryana 122002</p>
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a className="nav-link" id="map2" data-bs-toggle="tab" data-bs-target="#worldMarkMap-pane" type="button" role="tab" aria-controls="worldMarkMap-pane" aria-selected="false">
                    <h3><img src="https://bonwic.cloud/wow/assets-landing-page/img/location.svg" />World Of Watches – Worldmark </h3>
                    <p>F109, 1st Floor, Ambience Mall, NH 8, Ambience Island, DLF Phase 3, Sec-65, Gurugram, Haryana 122002</p>
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a className="nav-link" id="mgfGroundFloor-tab" data-bs-toggle="tab" data-bs-target="#mgfGroundFloor-tab-pane" type="button" role="tab" aria-controls="mgfGroundFloor-tab-pane" aria-selected="false">
                    <h3><img src="https://bonwic.cloud/wow/assets-landing-page/img/location.svg" />World Of Watches – Mgf Ground Floor</h3>
                    <p>Shop no. 77 &amp;77A, Ground floor, MGF Metropolitan Mall, M.G. Road, Gurugram, Haryana 122002</p>
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a className="nav-link" id="mgfFirstFloor-tab" data-bs-toggle="tab" data-bs-target="#mgfFirstFloor-tab-pane" type="button" role="tab" aria-controls="mgfFirstFloor-tab-pane" aria-selected="false">
                    <h3><img src="https://bonwic.cloud/wow/assets-landing-page/img/location.svg" />World Of Watches -   Mgf First Floor</h3>
                    <p>Shop 41, First floor, MGF Metropolitan Mall, M.G. Road, Gurugram, Haryana 122002</p>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="map1-pane" role="tabpanel" aria-labelledby="map1" tabIndex={0}>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.1674808854073!2d77.097071!3d28.5046084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d194473c41cb5%3A0x8a187bec17ebf36d!2sCasio%20Exclusive%20Store!5e0!3m2!1sen!2sin!4v1684934008439!5m2!1sen!2sin" width="100%" height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                </div>
                <div className="tab-pane fade" id="worldMarkMap-pane" role="tabpanel" aria-labelledby="map2" tabIndex={0}>
                  <iframe className="map w-100" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14038.84333487499!2d77.0721113!3d28.3978006!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d2374024bfcc7%3A0x8e7bd4c6024a21d4!2sWORLD%20OF%20WATCHES!5e0!3m2!1sen!2sin!4v1685018846464!5m2!1sen!2sin" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                </div>
                <div className="tab-pane fade" id="mgfGroundFloor-tab-pane" role="tabpanel" aria-labelledby="mgfGroundFloor-tab" tabIndex={0}>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d224621.0240880462!2d76.9175939!3d28.398022!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1965688fb3a7%3A0xde7b8912f5c4b09e!2sWorld%20of%20Watches%20-%20Ground%20Floor!5e0!3m2!1sen!2sin!4v1685020290300!5m2!1sen!2sin" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                </div>
                <div className="tab-pane fade" id="mgfFirstFloor-tab-pane" role="tabpanel" aria-labelledby="mgfFirstFloor-tab" tabIndex={0}>
                  <iframe className="map w-100" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14027.81911294226!2d77.0802798!3d28.4809085!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d165555555555%3A0xbaef748392c45f1d!2sWorld%20of%20Watches!5e0!3m2!1sen!2sin!4v1685020833946!5m2!1sen!2sin" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="container text-center">
          © 2022 2023. All Rights Reserved By <a href>World Of Watches</a>
        </div>
      </footer>
      <div className="modal fade" id="bookappointment" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content appointment-model">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">  <i className="fas fa-times" /></button>
            <div className="modal-body">
              <div className="row">
                <div className="col-lg-6 pe-0 img-column">
                  <img src="https://bonwic.cloud/wow/assets-landing-page/img/model-img.webp" className="img-fluid model-img" />
                </div>
                <div className="col-lg-6 model-form">
                  <h5 className="modal-title" id="exampleModalLabel">It is a long established<span> fact that a reader</span></h5>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3 mt-3">
                      <label htmlFor="name" className="form-label">Name</label>
                      <input type="text" className="form-control" id="name" placeholder="Name" name="name" value={formData.name}
                        onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="phone" className="form-label">Phone No</label>
                      <input type="phone" className="form-control" id="phone" placeholder="Phone Number" name="phone" value={formData.phone}
                        onChange={handleChange} />
                    </div>
                    <div className="timing-area">
                      <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Date</label>
                        <input type="date" id="birthday" name="date" value={formData.date}
                          onChange={handleChange} />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Time</label>
                        <input type="time" id="appt" name="time" value={formData.time}
                          onChange={handleChange} />
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary hvr-radial-out">Book an Appointment</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* model end here */}
      {/* direction model start here */}
      <div className="modal fade" id="directionmodal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content appointment-model">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
              <i className="fas fa-times" /></button>
            <div className="modal-body">
              <iframe className="map w-100" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14038.84333487499!2d77.0721113!3d28.3978006!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d2374024bfcc7%3A0x8e7bd4c6024a21d4!2sWORLD%20OF%20WATCHES!5e0!3m2!1sen!2sin!4v1685018846464!5m2!1sen!2sin" width="100%" height={450} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </div>
      </div>
      <ScriptCommon />

    </>
  );
};

export default ContactForm;

