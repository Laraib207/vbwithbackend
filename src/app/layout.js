export const metadata = {
  title: "Veer Bharat | Best Soyabean Oil | Kachi Ghani Oil",
  description: "Veer Bharat Premium is the best Soyabean Oil in Ghaziabad. Trusted Indian brand Kachi Ghani Oil quality cooking oil, rice bran oil in Noida. Call 9266328444",
  other: {
    'google-site-verification': 'r98v6O5kAtTe-6BdgRB11PQgQTopFn7x464rMPuWkIQ',
  },
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
