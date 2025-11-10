export const metadata = {
  title: "Veer Bharat Oils",
  description: "Pure • Classical • Premium"
};

import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import SplashProvider from "../components/SplashProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <SplashProvider> */}
          <Navbar />
          {children}
          <Footer />
        {/* </SplashProvider> */}
      </body>
    </html>
  );
}
