import React, { useEffect } from 'react';
import Error500 from "~/components/error/500";
import HeadData from "~/components/Head";

const Thankyou = ({ data, error }) => {
  return (
    <>
      {error ? (
        <Error500 />
      ) : (
        <>
          <HeadData title="Thank you" />

          <main className="aboutPage">
            <section className="aboutSec">
              <div className="container">
                <div className="row justify-content-center flex-row-reverse">
                  <div className="text-center col-lg-4 col-md-4 col-sm-4 mt-5">
                    <img className="mt-5 align-center" src="/images/success.svg" height="100" />
                    <h2><span>THANK YOU FOR SUBMITING</span></h2>
                    <p className="normText">Your submission has been received we will contact you soon</p>

                    <br /> <br />
                    <div class="viewallbtn pt-xl-2 pt-lg-3 md-xl-3 md-lg-1 md-sm-0">
                      <a class="animated-border" href="https://worldofwatchesindia.com/">
                        <span>Continue <b>Shopping</b></span></a></div>
                  </div>

                </div>

              </div>

            </section>
          </main>

        </>
      )}
    </>
  );
};


export default Thankyou;
