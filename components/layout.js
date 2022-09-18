import Navbar from "./Navbar.js/Navbar";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className=" font-Roboto">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
