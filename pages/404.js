import Error404 from "~/components/error/404";
import HeadCommon from "~/components/Layout/Client/Common/HeadCommon";
import HeadData from "~/components/Head";
import data from "~/data.json";
import { wrapper } from "~/redux/store";
import { useRouter } from "next/router";
import Footer from "~/components/Layout/Client/Common/FooterCommon";
import HeaderCommon from "~/components/Layout/Client/Common/HeaderCommon.js";


export default function Custom404(props) {
  const router = useRouter();
  const footerVisibility =
    typeof props.footer == "undefined" ? true : props.footer;
  return (
    <>
      <HeadCommon />

      {/*mobileNav ? <MobileNav /> : <NavBar />*/}

      <HeaderCommon />
      <HeadData title="404" />
      <main className="aboutPage">
        <Error404 />;
      </main>
      <Footer footer={data.footer} visibility={footerVisibility} />
    </>
  )
}

Custom404.hasError = true;
