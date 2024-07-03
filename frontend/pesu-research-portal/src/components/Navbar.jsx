import "../App.css"

const Navbar = () => {
    return ( 
        <div className="">
            <div className="bg-sky-800 text-white flex justify-between items-center cursor-pointer font-bold text-xl">
                <div className="bg-white border-sky-800 rounded-r-full p-10">
                    <img className="" src="https://research.pes.edu/wp-content/uploads/2023/03/PESU-new-logo.png" alt="" />
                </div>
                <div>
                    <a>Centres</a>
                </div>
                <div>
                    <a href="/professors">Faculty</a>
                </div>
                <div>
                    <a>Research-Scholar</a>
                </div>
                <div>
                    <a>Patents</a>
                </div>
                <div>
                    <a>Conference and Journal</a>
                </div>
                <div>
                    <a>Monetary Resources</a>
                </div>
                <div>
                    <a>Community</a>
                </div>
                <div>
                    <a>Research Support</a>
                </div>
                <div className="p-4">
                    <a href="/login">login</a>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;