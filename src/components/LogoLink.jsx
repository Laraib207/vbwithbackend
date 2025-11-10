// // src/app/components/LogoLink.jsx
// "use client";
// import { useRouter } from "next/navigation";
// import { useSplash } from "./SplashProvider";

// export default function LogoLink({ href, children, className, onClick, delay = 700, ...props }) {
//   const router = useRouter();
//   const { show } = useSplash();

//   const handleClick = (e) => {
//     // allow ctrl/meta/new-tab
//     if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
//     e.preventDefault();
//     if (typeof onClick === "function") onClick(e); // run caller onClick immediately
//     show(delay); // show splash (non-blocking)
//     setTimeout(() => router.push(href), delay);
//   };

//   return (
//     <a href={href} onClick={handleClick} className={className} {...props}>
//       {children}
//     </a>
//   );
// }



"use client";

import { useRouter } from "next/navigation";
// import { useSplash } from "./SplashProvider";

export default function LogoLink({ href, children, className, onClick, delay = null, ...props }) {
  const router = useRouter();
  // const { show } = useSplash();

  const handleClick = async (e) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
    e.preventDefault();

    if (typeof onClick === "function") {
      try {
        onClick(e);
      } catch (err) {
        // ignore
      }
    }

    // try {
    //   await show(delay);
    // } catch (err) {
    //   // ignore
    // }

    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
}
