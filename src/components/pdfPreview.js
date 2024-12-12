import { Viewer } from '@react-pdf-viewer/core';
import React from 'react';
import { Bookmark, Share2 } from 'react-feather';
import { useNavigate } from 'react-router-dom';

const PdfPreview = ({ pdfUrl, description }) => {
  const navigate = useNavigate()
  return (
    <>
        <h2 className="p-4 py-2 ml-6 text-purple-600 font-semibold mb-4">
    SPOTLIGHT SOLUTION
</h2>
    <div className="flex flex-col md:flex-row items-start bg-gray-100 p-4 rounded-md shadow-md relative">
        
      {/* PDF Preview (like an image) */}
      <div className="w-52 h-72 bg-gray-200 flex items-center justify-center text-gray-500 rounded-md overflow-hidden mr-4 cursor-pointer" onClick={()=>navigate("/casestudy/id")}>
        {/* PDF Thumbnail */}
        {/* <embed src={pdfUrl} type="application/pdf" width="100%" height="100%" className="rounded-md" /> */}
        <Viewer fileUrl={"https://cdn.filestackcontent.com/wcrjf9qPTCKXV3hMXDwK"} initialPage={1} defaultScale={0.4} />
      </div>
      
      {/* Description Text */}
      <p className="flex-1 text-xl font-serif text-gray-700 mr-4 m-4">  
        {/* //Poppins */}
        {/* {description} */}
       <strong className="text-teal-900 cursor-pointer" onClick={()=>navigate("/casestudy/id")}> After Implementing ABM With Engagio, Versionone Achieved 88% Engagement With Target Accounts, 66% Increase In Value Of Target Accounts And A Significa
Case Study VersionOne
Case Study  </strong>
Update “My ah-ha moment was the first demo of Engagio that provided roll-up reporting on account activity and lead-to-account matching. Visibility and reporting that would require an unmanageable manual effort for a small marketing team clearly were now possible.” Peter Herbert, VP of Marketing After implementing ABM with Engagio, VersionOne achieved 88% engagement with target accounts, 66% increase in
      </p>
      
      {/* Icons in the Top Right Corner */}
      <div className="flex-col absolute top-2 right-2 flex">
        <Bookmark className="hover:text-teal-500 cursor-pointer mx-4" size={30} />
        <Share2 className="hover:text-teal-500 cursor-pointer mx-4 mt-2" size={30} />
      </div>
    </div>
    </>

  );
};

export default PdfPreview;
