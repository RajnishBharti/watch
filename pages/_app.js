import { SessionProvider } from "next-auth/react";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { Flip, ToastContainer } from "react-toastify";
import Appearance from "~/components/Appearance";
import CheckAuth from "~/components/Auth/authCheck";
import CookieContest from "~/components/cookieContest";
import GlobalLayout from "~/components/Layout/GlobalLayout";
import { wrapper } from "~/redux/store";
import { Roboto } from "@next/font/google";
import "~/public/css/bootstrap.min.css";
import "~/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import TagManager from "react-gtm-module";
const roboto = Roboto({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const NextNProgress = dynamic(() => import("nextjs-progressbar"), {
  ssr: false,
});

const ThirdPartyScript = dynamic(() => import("~/components/ThirdParty"));
const tagManagerArgs = {
  gtmId: "GTM-M9487XPF",
};

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
    import("../public/js/jquery.min.js");
    import("../public/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <SessionProvider session={pageProps.session} refetchInterval={10 * 60}>
      <style jsx global>{`
        html,
        body {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style>
      <ThirdPartyScript />
      <NextNProgress color="var(--primary)" options={{ showSpinner: false }} />
      <Appearance />
      <CookieContest />
      <CheckAuth
        auth={Component.requireAuth}
        authAdmin={Component.requireAuthAdmin}
      >
        <GlobalLayout
          dashboard={Component.dashboard}
          footer={Component.footer}
          error={Component.hasError}
        >
          <Component {...pageProps} />
        </GlobalLayout>
      </CheckAuth>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop={true}
        closeOnClick
        draggable
        pauseOnHover
        theme="colored"
        transition={Flip}
      />
    </SessionProvider>
  );
}

export default wrapper.withRedux(MyApp);
