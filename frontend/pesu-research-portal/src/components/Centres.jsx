import Navbar from "../components/Navbar"
const Centres = () => {
    return ( 
        <div>
            <div>
                <Navbar/>
            </div>
            <div>
                <h2 className="text-center text-black font-bold text-3xl font-serif p-2">
                    CENTRES
                </h2>

                <div className="font-serif bold p-10 md:text-lg gap-6 grid lg:grid-cols-2">
                    
                    <a href="https://cie.pes.edu/" className="p-10 flex text-center gap-10 font-semibold hover:text-blue-800 hover:shadow-xl">
                        <img className="object-fill h-20 w-20 " src="https://media.licdn.com/dms/image/C4E0BAQE2ql7KssrFYw/company-logo_200_200/0/1655792284877?e=2147483647&v=beta&t=AN0r1Wl2r7p46tmtTYGV6_NFbKV6Y5LDJX9lQR0eSH0" alt="CIE" />
    
                        CIE - CENTRE FOR INNOVATION AND ENTREPRENEURSHIP
                    </a>
                    <a href="https://www.pesuventurelabs.com/" className="p-10 flex text-center gap-10 font-bold  hover:text-blue-800 hover:shadow-xl ">
                        <img className="object-fill h-20 w-20 " src="https://www.pesuventurelabs.com/PVL_Monogram.png" alt="PVL" />
                        PVL - PESU VENTURE LABS
                    </a>
                    
                    <a href="https://research.pes.edu/centre-of-data-modelling-analytics-and-visualization-codmav/" className="p-10  flex text-center gap-10 font-bold  hover:text-blue-800 hover:shadow-xl ">
                        <img  className="object-fill h-20 w-20" src="https://media.licdn.com/dms/image/D5603AQFcdCsKi7bo3w/profile-displayphoto-shrink_200_200/0/1711896888074?e=2147483647&v=beta&t=XMlWaIcio4Wcj5FxoELZqmgxLuUvu5pduAhNGCLdWps" alt="CoDMAV" />
                        CoDMAV - CENTRE FOR DATA MODELLING ANALYTICS AND VISUALISATION
                    </a>

                    <a href="https://research.pes.edu/centre-of-cognitive-computing-and-computational-intelligence-c3i/" className="p-10 flex text-center gap-10 font-bold hover:text-blue-800 hover:shadow-xl ">
                        <img className="object-fill h-20 w-20  " src="https://research.pes.edu/wp-content/uploads/2023/11/Picture111.png" alt="C3I" />
                        C3I - CENTRE OF COGNITIVE COMPUTING AND COMPUTATIONAL INTELLIGENCE
                    </a> 
                    
                    <a href="https://research.pes.edu/center-for-computer-networks-and-cyber-security-ccncs/" className="p-10 flex text-center gap-10 font-bold  hover:text-blue-800 hover:shadow-xl ">
                        <img  className="object-fill h-20 w-20 " src="https://www.vidyavision.com/CollegeUploads/Logos/2023-03-2-15-54-32_pes%20logo.jpeg" alt="CCNCS" />
                        CCNCS - CENTRE FOR COMPUTER NETWORKS AND CYBER SECURITY</a>               
                    
                </div>

            </div>
        </div>
     );
}
 
export default Centres;