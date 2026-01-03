import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';


const ScrollRestoration = () => {
  const {pathname} = useLocation();

  useLayoutEffect(() => {
    console.log(pathname)
    const element =document.getElementById("main")
    element?.scrollTo({top: 0, left: 0, behavior: "instant"})

  }, [pathname]);

  return null;
}

export default ScrollRestoration;