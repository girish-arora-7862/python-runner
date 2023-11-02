import "../styles/global.css";
import Script from "next/script";
import { useState } from "react";
import { PYODIDE_SCRIPT } from "../constants/data";

export default function MyApp({ Component, pageProps }) {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  return (
    <>
      {isScriptLoaded && <Component {...pageProps} />}
      <Script src={PYODIDE_SCRIPT} onLoad={() => setIsScriptLoaded(true)} />
    </>
  );
}
