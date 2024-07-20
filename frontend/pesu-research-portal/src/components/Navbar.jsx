import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
    return ( 
        <div className="">
            <div className="bg-sky-800 text-white flex justify-between items-center cursor-pointer font-bold text-xl">
                <div className="bg-white border-sky-800 rounded-r-full p-10">
                    <img className="" src="https://research.pes.edu/wp-content/uploads/2023/03/PESU-new-logo.png" alt="" />
                </div>
                <div>
                    <a href="/centres">Centres</a>
                </div>
                <div>
                    <a href="/professors">Faculty</a>
                </div>
                <div>
                    <a>PHD program</a>
                </div>
                <div>
                    <a href="patent-process">Patents</a>
                </div>
                <div>
                    <a>Research-Grant</a>
                </div>
                <div>
                <Link to={"/conference"}>Conference</Link>
                </div>
                <div>
                <a href="journals">Journals</a>
                </div>
                <div>
                    <a>Community</a>
                </div>
                <div>
                    <a href="research-support">Research Support</a>
                </div>
                <div>
                    <a href="research-support">Contact Us</a>
                </div>
                <div className="p-4">
                    <a href="/login">Login</a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
