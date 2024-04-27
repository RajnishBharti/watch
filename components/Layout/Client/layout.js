import { useEffect, useState } from "react";
import ScrollToTop from "~/components/ScrollToTop";
import data from "~/data.json";
import useWindowDimensions from "~/lib/useWindowDimensions";
import HeadCommon from "~/components/Layout/Client/Common/HeadCommon";
import Footer from "~/components/Layout/Client/Common/FooterCommon";
import ScriptCommon from "~/components/Layout/Client/Common/ScriptCommon";
import { useRouter } from "next/router";

import HeaderCommon from "~/components/Layout/Client/Common/HeaderCommon.js";

const ClientLayout = (props) => {
  const footerVisibility =
    typeof props.footer == "undefined" ? true : props.footer;
  const [mobileNav, setMobileNav] = useState(false);
  const dimension = useWindowDimensions();
  useEffect(() => {
    if (dimension.width !== 0 && dimension.width <= 991) {
      return setMobileNav(true);
    }
  }, []);

  const router = useRouter();
  if (router.pathname == "/casio-exclusive-store-gurgaon" || router.pathname == "/watch-store-worldmark-gurgaon" || router.pathname == "/watch-store-mgf-ground-floor-gurgaon" || router.pathname == "/watch-store-mgf-first-floor-gurgaon") {
    return (
      <>
        <main>{props.children}</main>

      </>
    );

  } else {
    return (
      <>

        <HeadCommon />       
        <HeaderCommon />
        <main>{props.children}</main>
        <Footer footer={data.footer} visibility={footerVisibility} />
        <ScrollToTop />
        <ScriptCommon />
     

      </>
    );
  }
};

export default ClientLayout;
