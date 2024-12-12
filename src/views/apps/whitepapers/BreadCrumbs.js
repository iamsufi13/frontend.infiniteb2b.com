import React from 'react'

const BreadCrumbs = () => {
  return (
    <div>BreadCrumbs</div>
  )
}

export default BreadCrumbs// // ** React Imports
// import { Link, useHistory } from "react-router-dom";
// import { useState } from "react";
// // ** Third Party Components
// import Proptypes from "prop-types";
// import { Printer } from "react-feather";

// const BreadCrumbs = ({ 
//   breadCrumbTitle,
//   breadCrumbParent,
//   breadCrumbParent2,
//   breadCrumbParent2id,
//   breadCrumbParent3,
//   breadCrumbActive,
//   breadcrumbUserid,
//   state 
// }) => {
//   const history = useHistory();

//   return (
//     <>
//       <div className="content-header flex flex-col md:flex-row">
//         <div className="flex-1 mb-4 md:mb-0">
//           <nav className="breadcrumb flex flex-wrap items-center text-blue-600 space-x-2">
//             <Link to="/users" className="hover:underline">{breadCrumbParent}</Link>
//             {breadCrumbParent2 && breadCrumbParent2id && (
//               <span className="flex items-center space-x-2">
//                 <span>/</span>
//                 <Link to={`/users/view/${breadCrumbParent2id}`} className="hover:underline">
//                   {breadCrumbParent2}
//                 </Link>
//               </span>
//             )}
//             {breadCrumbParent3 && (
//               <span className="flex items-center space-x-2">
//                 <span>/</span>
//                 <span>{breadCrumbParent3}</span>
//               </span>
//             )}
//             <span className="flex items-center space-x-2">
//               <span>/</span>
//               <span className="text-gray-500">{breadCrumbActive}</span>
//             </span>
//           </nav>
//         </div>
//       </div>

//       <div className="mt-4">
//         <div className="bg-white shadow-md rounded-lg">
//           <div className="p-6">
//             <div className="flex flex-wrap items-center justify-between">
//               <div className="flex-1">
//                 {breadCrumbTitle && (
//                   <h2 className="text-xl font-semibold">{breadCrumbTitle}</h2>
//                 )}
//               </div>
//               {state === 2 && (
//                 <div className="flex space-x-2">
//                   <button
//                     onClick={() => history.push(`/users/edit/${breadcrumbUserid}`)}
//                     className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => window.print()}
//                     className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition flex items-center space-x-1"
//                   >
//                     <Printer size={14} />
//                     <span>Print</span>
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default BreadCrumbs;

// // ** PropTypes
// BreadCrumbs.propTypes = {
//   breadCrumbTitle: Proptypes.string.isRequired,
//   breadCrumbActive: Proptypes.string.isRequired,
// };
