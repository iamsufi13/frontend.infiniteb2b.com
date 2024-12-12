

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Bookmark, ChevronRight, Download, Home, Search, Share2 } from 'react-feather';
import axios from 'axios';
import PdfPreview from '../../../components/pdfPreview';

const CountryDetails = () => {
    const { countryName } = useParams();
    const [country, setCountry] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showMore, setShowMore] = useState(false);

    useEffect(() => {
        const fetchCountryDetails = async () => {
            try {
                const response = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`);
                setCountry(response.data[0]);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching country details:', error);
                setLoading(false);
            }
        };

        fetchCountryDetails();
    }, [countryName]);

    if (loading) {
        return <p className="text-center text-gray-500">Loading...</p>;
    }

    if (!country) {
        return <p className="text-center text-red-500">Country not found.</p>;
    }

    const officialName = country.name.official;

    return (
        <>
            <header className="w-full bg-white shadow-lg flex items-center p-4">
                <div className="flex items-center gap-2">
                    <Home className="text-gray-700" size={20} />
                    <ChevronRight className="text-gray-700" size={20} />
                    <span className="text-sm">WHITEPAPERS</span>
                    <ChevronRight className="text-sm font-bold" size={20} />
                    {country.name.common}
                </div>
            </header>

            <div className="flex px-6">
            
                <div className="lg:w-1/2 max-w-md rounded-lg overflow-hidden mx-4 mb-6">
                    <img
                        src={country.flags.png}
                        alt={`${country.name.common} flag`}
                        className="w-full h-48 object-cover m-4"
                    />
                    <div className="p-4">
                        <h1 className="text-2xl font-bold text-center mb-2">
                            {country.name.common}
                        </h1>
                        <div className="flex justify-center space-x-4 mt-4">
                            <Bookmark className="text-gray-700 hover:text-teal-500 cursor-pointer" size={30} />
                            <Share2 className="text-gray-700 hover:text-teal-500 cursor-pointer" size={30} />
                        </div>
                    </div>
                </div>

                <div className="lg:w-1/2 max-w-md p-6 rounded-lg">
                    <div>
                        <p className="text-gray-800 text-lg font-Poppins mb-4">
                        {officialName}{officialName}{officialName}{officialName}{officialName}{officialName}...
                        </p>
                        {!showMore ? (
                            <button
                                onClick={() => setShowMore(true)}
                                className="text-teal-600 font-bold cursor-pointer"
                            >
                                Read More...
                            </button>
                        ) : (
                            <div className="mt-2 space-y-2">
                                <p className="text-gray-800 text-lg font-serif">
                                    {Array(10).fill(officialName).join(' ')}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {/* <div className="bg-teal-500 w-full p-10 mb-20 mx-2">

            </div> */}
            <div className="bg-teal-700 w-full p-4 mx-2 flex justify-between items-center rounded-md">
    {/* Left Side Text */}
    <div className="text-white text-xl font-semibold">
        113 SOLUTIONS
    </div>
    
    {/* Right Side Search Box */}
    <div className="flex items-center bg-white rounded-full px-4 py-2 w-full max-w-xs">
        <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-gray-700 flex-grow"
        />
        <Search className="text-gray-500" size={20} />
    </div>
</div>
{/* <h2 className="P-4 PY-2 color-pu">SPOTLIGHT SOLUTION</h2> */}
{/* <div>
<h2 className="p-4 py-2 ml-6 text-purple-600 font-semibold mb-4">
    SPOTLIGHT SOLUTION
</h2>
<div className="bg-gray-50">
    <span>pdf</span>
<p>After Implementing ABM With Engagio, Versionone Achieved 88% Engagement With Target Accounts, 66% Increase In Value Of Target Accounts And A Significa
Case Study VersionOne
Case Study
Update “My ah-ha moment was the first demo of Engagio that provided roll-up reporting on account activity and lead-to-account matching. Visibility and reporting that would require an unmanageable manual effort for a small marketing team clearly were now possible.” Peter Herbert, VP of Marketing After implementing ABM with Engagio, VersionOne achieved 88% engagement with target accounts, 66% increase in</p>

</div>
<div>
<Bookmark className="ml-2 text-gray-700" size={20} />
<Download className="ml-2 text-gray-700" size={20} />
   

</div>
</div> */}
<PdfPreview/>


        </>
    );
};

export default CountryDetails;

// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { Bookmark, ChevronRight, Home, Share2 } from 'react-feather';
// import axios from 'axios';

// const CountryDetails = () => {
//     const { countryName } = useParams();
//     const [country, setCountry] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [showMore, setShowMore] = useState(false);

//     useEffect(() => {
//         const fetchCountryDetails = async () => {
//             try {
//                 const response = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`);
//                 setCountry(response.data[0]);
//                 setLoading(false);
//             } catch (error) {
//                 console.error('Error fetching country details:', error);
//                 setLoading(false);
//             }
//         };

//         fetchCountryDetails();
//     }, [countryName]);

//     if (loading) {
//         return <p className="text-center text-gray-500">Loading...</p>;
//     }

//     if (!country) {
//         return <p className="text-center text-red-500">Country not found.</p>;
//     }

//     const officialName = country.name.official;

//     return (
//         <>
//             <header className="w-full bg-white shadow-lg flex items-center p-4">
//                 <div className="flex items-center gap-2">
//                     <Home className="text-gray-700" size={20} />
//                     <ChevronRight className="text-gray-700" size={20} />
//                     <span className="text-sm">SOLUTION SETS</span>
//                     <ChevronRight className="text-sm font-bold" size={20} />
//                     {country.name.common}
//                 </div>
//             </header>

//             <div className="bg-grey-50 flex flex-wrap justify-center mx-6">
//                 <div className="w-full md:w-1/2 max-w-md rounded-lg shadow-md overflow-hidden mx-4 mb-6">
//                     <img
//                         src={country.flags.png}
//                         alt={`${country.name.common} flag`}
//                         className="w-full h-48 object-cover m-4"
//                     />
//                     <div className="p-4">
//                         <h1 className="text-2xl font-bold text-center mb-2">
//                             {country.name.common}
//                         </h1>
//                         <div className="flex justify-center space-x-4 mt-4">
//                             <Bookmark className="text-gray-700 hover:text-teal-500 cursor-pointer" size={24} />
//                             <Share2 className="text-gray-700 hover:text-teal-500 cursor-pointer" size={24} />
//                         </div>
//                     </div>
//                 </div>

//                 <div className="w-full md:w-1/2 lg:w-1/3 max-w-md p-6 rounded-lg">
//                     <div>
//                         <p className="text-gray-800 text-lg font-serif mb-4">
//                         {officialName}{officialName}{officialName}{officialName}{officialName}{officialName}...
//                         </p>
//                         {!showMore ? (
//                             <button
//                                 onClick={() => setShowMore(true)}
//                                 className="text-teal-600 font-bold cursor-pointer"
//                             >
//                                 Read More...
//                             </button>
//                         ) : (
//                             <div className="mt-2 space-y-2">
//                                 <p className="text-gray-800 text-lg font-serif">
//                                     {Array(10).fill(officialName).join(' ')}
//                                 </p>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default CountryDetails;
