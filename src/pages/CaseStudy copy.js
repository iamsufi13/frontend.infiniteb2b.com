import React from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import { Bell, Bookmark, ChevronRight, Download, Home, Share2 } from 'react-feather';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import FeaturedSolution from '../components/FeaturedSolution';
import { useSelector } from 'react-redux';

const CaseStudy = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const token = useSelector((state) => state.user.token);
  console.log("token..............", token)
  // const downloadPdf = async () => {
   
  //   // const token = 'YOUR_BEARER_TOKEN_HERE';
  //   const config = {
  //     headers: {
  //       'Authorization': `Bearer ${token}`,
  //     },
  //   };
  //   try {
  //     const response = await axios.get("https://infiniteb2b.com:8443/api/user/download-pdf", config);
  //     console.log("PDF Downloaded Data:", response);
  //   } catch (error) {
  //     console.error("Error downloading PDF:", error);
  //   }
  // };

  const fetchPdf = async () => {
    // const token = 'YOUR_BEARER_TOKEN_HERE';
    const config = {
      responseType: 'blob',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    };
    try {
      const data = await axios.get("https://infiniteb2b.com:8443/api/user/view-pdf?id=16", config);
      console.log("Fetched PDF Data:", data);
    } catch (error) {
      console.error("Error fetching PDF:", error);
    }
  };
// const downloadPdf = async () => {
//   const token = 'eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6WyJST0xFX1ZFTkRPUiJdLCJzdWIiOiJjb2RlYmFja3Vwc3VmaXlhbkBnbWFpbC5jb20iLCJpYXQiOjE3MzMwNDAxMDIsImV4cCI6MTczMzQwMDEwMn0.GMJ_miF3-sSYTBtz6dKF843uszA3xCVWoubixB4nqSoPo2Frx1rDYhob1MtSOt_4FaIwy9O4GCRUrA5ITz3Nmg';

//   // Get the ID from the URL params

//   // Create FormData
//   const formData =   formData.append('id', 6);
 

  
//   // Configuration for Axios request
//   const config = {
//     headers: {
//       'Authorization': `Bearer ${token}`,
//       'Content-Type': 'multipart/form-data',
//     },
//   };

//   try {
//     const response = await axios.get(
//       'https://infiniteb2b.com:8443/api/user/download-pdf',
//       formData,
//       config
//     );

//     console.log('responsednpdf.....................', response);
//     console.log("formData..............", formData)
//   } catch (error) {
//     console.error('Error downloading PDF:', error.response || error.message);
//   }
// };


const downloadPdf = async () => {
  const token = 'eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6WyJST0xFX1ZFTkRPUiJdLCJzdWIiOiJjb2RlYmFja3Vwc3VmaXlhbkBnbWFpbC5jb20iLCJpYXQiOjE3MzMwNDAxMDIsImV4cCI6MTczMzQwMDEwMn0.GMJ_miF3-sSYTBtz6dKF843uszA3xCVWoubixB4nqSoPo2Frx1rDYhob1MtSOt_4FaIwy9O4GCRUrA5ITz3Nmg';

  // Define the ID
  const id = 19;

  // Configuration for Axios request
  const config = {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  };

  try {
    // Append the ID as a query parameter
    const response = await axios.get(
      `https://infiniteb2b.com:8443/api/user/download-pdf?id=${id}`,
      config
    );

    console.log('response.data', response.data);
    console.log('response.status', response.status);
    if(response.status===200) {
      alert("PDF Downloaded successfully")
    }
  } catch (error) {
    console.error('Error downloading PDF:', error.response?.data || error.message);
  }
};

  const sharePdf = () => {
    const pdfUrl = "https://cdn.filestackcontent.com/wcrjf9qPTCKXV3hMXDwK";
    const pdfTitle = "Case Study: Predictive Sales Analytics";

    if (navigator.share) {
      navigator.share({
        title: pdfTitle,
        url: pdfUrl,
      })
        .then(() => console.log("PDF shared successfully!"))
        .catch((error) => console.error("Error sharing PDF:", error));
    } else {
      alert("Sharing is not supported on this browser.");
    }
  };

  return (
    <div>
      <header className="w-full bg-white shadow-lg rounded-lg p-3 px-4">
        <div className="flex items-center gap-2 text-[#4702a2]">
          <Link to="/home">
            <Home className="text-[#4702a2]" size={20} />
          </Link>
          <ChevronRight className="text-[#4702a2]" size={20} />
          <Link to="/whitepapers" className="text-gray-700 text-sm no-underline">
            WHITEPAPERS
          </Link>
          <ChevronRight className="text-[#4702a2]" size={20} />
          <Link to={`/casestudy/${id}`} className="text-gray-700 text-sm no-underline">
            CaseStudy
          </Link>
        </div>
      </header>
      <div className="md:w-[90%] items-start flex flex-col-reverse gap-3 lg:flex-row justify-center lg:h-screen bg-[#f0f1f2] m-auto p-4">
        <div onClick={() => { navigate("/view-casetudy/view") }} className="relative cursor-pointer overflow-hidden sm:w-full w-full lg:w-1/3 h-[60vh] lg:h-4/6 rounded-md group order-1 lg:order-3 flex items-center">
          <div className="m-auto w-3/4 lg:w-full h-full mr-3">
            <Viewer
              className="border-2 border-purple-600"
              fileUrl={"https://cdn.filestackcontent.com/wcrjf9qPTCKXV3hMXDwK"}
              initialPage={1}
              defaultScale={0.7}
            />
          </div>
        </div>
        <div className="w-full lg:w-4/6 order-2">
          <div className="w-full flex-wrap flex flex-col">
            <div>
              <h1 className="font-semibold">Heavy-Duty Automotive Parts Distributor Uses Artificial Intelligence and Predictive Sales Analytics to Increase Sales Revenue by 20%</h1>
              <p className="font-bold text-slate-400">Vendor</p>
            </div>
            <div>
              <p className="text-xl leading-8 line-clamp-5 lg:line-clamp-none">
                Heavy-Duty Automotive Parts Distributor Uses Artificial Intelligence and Predictive Sales Analytics to Increase Sales Revenue by 20%. How this leading B2B enterprise increased revenue and profit by using an AI-driven solution to identify and deliver actionable customer opportunities in real-time to its 400+ sales reps.
              </p>
            </div>
          </div>
          <button className="bg-gradient-to-r from-teal-400 to-purple-500 text-white px-6 py-2 rounded">
            Join for Free
          </button>
        </div>
        <div className="flex justify-end lg:flex-col gap-3 order-3 lg:order-1">
          <Download onClick={downloadPdf} className="text-[#4702a2] cursor-pointer" size={30} />
          <Bell onClick={fetchPdf} className="text-[#4702a2] cursor-pointer" size={30} />
          <Share2 onClick={sharePdf} className="text-[#4702a2] cursor-pointer" size={30} />
        </div>
      </div>
      <FeaturedSolution />
    </div>
  );
};

export default CaseStudy;
