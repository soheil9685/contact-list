import "@/styles/globals.css";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {

  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {

    async function loginStatus() {
      const res = await fetch("/api/auth/status")
      if (res.status == 200) {
        setIsAuth(true)
      } else {
        setIsAuth(false)
      }
    }
    loginStatus();

  }, [])

  return <Component {...pageProps} isAuth={isAuth} setIsAuth={setIsAuth} />;
}
