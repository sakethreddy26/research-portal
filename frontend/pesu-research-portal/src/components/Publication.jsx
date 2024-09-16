import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import PublicationNavbar from "./PublicationNavbar";

const Publication = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div
        className="font-serif grid grid-cols-5 gap-2"
        style={{
          backgroundImage: "url(/img/pixelcut-export.jpg)",
          backgroundAttachment: "fixed",
          backgroundSize: "cover", // Ensures the image covers the entire div
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100vw", // Full viewport width
          height: "100vh", // Full viewport height
        }}
      ></div>
    </div>
  );
};

export default Publication;
