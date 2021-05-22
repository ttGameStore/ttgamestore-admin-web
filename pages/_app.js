import "../styles/globals.css";
import "../styles/custom.css";
import Head from "next/head";
import { useRouter } from "next/router";
import UIKit from "../helps/UIKit.help";
import { Header, Navbar } from "../components";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/uikit@3.6.22/dist/css/uikit.min.css"
        />
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/uikit@3.6.22/dist/js/uikit.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/uikit@3.6.22/dist/js/uikit-icons.min.js"></script>
      </Head>
      <UIKit>
        {router.pathname !== "/" && <Header />}
        {router.pathname !== "/" ? (
          <Navbar>
            <Component {...pageProps} />
          </Navbar>
        ) : (
          <Component {...pageProps} />
        )}
      </UIKit>
    </div>
  );
}

export default MyApp;
