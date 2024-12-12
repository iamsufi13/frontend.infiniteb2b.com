import React from "react";
import { useNavigate } from "react-router-dom";

const buttonData = [

  {
    id: 1,
    name: "Anaerobic Digestion",
    style:{
      height: "45px",
      width: "220px",
      backgroundColor: "transparent",
      color: "#fff",
      // border: '2px solid #fff',
      borderRadius: "5px",
      position: "absolute",
      top: "20%",
      left: "31%",
      // left: '49%',
      marginTop: "25px",
      transform: "translate(-50%, -50%)",
      // marginLeft:"5px",
      marginBottom: "8px",
    },
    
  },
  {
    id: 2,
    name: "Anaerobic Digestion",
    style:{
      height: "45px",
      width: "170px",
      backgroundColor: "transparent",
      color: "#fff",
      // border: '2px solid #fff',
      borderRadius: "5px",
      position: "absolute",
      top: "75%",
      left: "13%",
      marginTop: "25px",
      transform: "translate(-50%, -50%)",
      // marginLeft:"40px",
      marginBottom: "8px",
    },
    
  },
  {
    id: 3,
    name: "CUSTOMER EXPERIENCE",
    style:{
      height: "45px",
      width: "170px",
      backgroundColor: "transparent",
      color: "#fff",
      // border: '2px solid #fff',
      borderRadius: "5px",
      position: "absolute",
      top: "75%",
      left: "49%",
      marginTop: "25px",
      transform: "translate(-50%, -50%)",
      // marginLeft:"5px",
      marginBottom: "8px",
    },
  },
  {
    id: 4,
    name: "ROBOTIC PROCESS AUTOMATION",
     style:{
    height: "45px",
    width: "170px",
    backgroundColor: "transparent",
    color: "#fff",
    // border: '2px solid #fff',
    borderRadius: "5px",
    position: "absolute",
    top: "39%",
    left: "13%",
    marginTop: "25px",
    transform: "translate(-50%, -50%)",
    // marginLeft:"40px",
    marginBottom: "8px",
  },
  },
  {
    id: 5,
    name: "AR & VR",
    style:{
      height: "45px",
      width: "170px",
      backgroundColor: "transparent",
      color: "#fff",
      // border: '2px solid #fff',
      borderRadius: "5px",
      position: "absolute",
      top: "44%",
      left: "48%",
      marginTop: "25px",
      transform: "translate(-50%, -50%)",
      marginLeft: "8px",
    }
  },
  {
    id: 6,
    name: "SERVER VIRTUALIZATION",
    style:{
      height: "45px",
      width: "170px",
      backgroundColor: "transparent",
      color: "#fff",
      // border: '2px solid #fff',
      borderRadius: "5px",
      position: "absolute",
      top: "62%",
      left: "13%",
      marginTop: "25px",
      transform: "translate(-50%, -50%)",
      // marginLeft:"40px",
      marginBottom: "8px",
    },
  },
  {
    id: 7,
    name: "HEALTHCARE",
    style:{
      height: "45px",
      width: "170px",
      backgroundColor: "transparent",
      color: "#fff",
      // border: '2px solid #fff',
      borderRadius: "5px",
      position: "absolute",
      top: "22%",
      left: "47%",
      marginTop: "25px",
      transform: "translate(-50%, -50%)",
      marginLeft: "8px",
    },
  },
  {
    id: 8,
    name: "DEVOPS",
    style:{
      height: "45px",
      width: "220px",
      backgroundColor: "transparent",
      color: "#fff",
      // border: '2px solid #fff',
      borderRadius: "5px",
      position: "absolute",
      top: "53%",
      left: "30%",
      // left: '49%',
      marginTop: "25px",
      transform: "translate(-50%, -50%)",
      // marginLeft:"5px",
      marginBottom: "8px",
    },
  },
  {
    id: 9,
    name: "CLOUD SECURITY",
    style:{
      height: "45px",
      width: "220px",
      backgroundColor: "transparent",
      color: "#fff",
      // border: '2px solid #fff',
      borderRadius: "5px",
      position: "absolute",
      top: "75%",
      left: "31%",
      // left: '49%',
      marginTop: "25px",
      transform: "translate(-50%, -50%)",
      // marginLeft:"5px",
      marginBottom: "8px",
    },
  },
  {
    id: 1,
    label: "Anaerobic Digestion",
    style: {
      height: "45px",
      width: "220px",
      backgroundColor: "transparent",
      color: "#fff",
      borderRadius: "5px",
      position: "absolute",
      top: "20%",
      left: "31%",
      marginTop: "25px",
      transform: "translate(-50%, -50%)",
      marginBottom: "8px",
    },
   
    // onClick: (navigate) =>  navigate(`/category/${buttonData.label}`),
 
  },
  {
    id: 2,
    label: "Marketing Automation",
    style: {
      height: "45px",
      width: "170px",
      backgroundColor: "transparent",
      color: "#fff",
      borderRadius: "5px",
      position: "absolute",
      top: "75%",
      left: "13%",
      marginTop: "25px",
      transform: "translate(-50%, -50%)",
      marginBottom: "8px",
    },
    
  },
  // Add more buttons as needed
  // {
  //   id: 10,
  //   name: "Explore More",
  //   style: {
  //     height: "45px",
  //     width: "170px",
  //     backgroundColor: "transparent",
  //     color: "#fff",
  //     borderRadius: "5px",
  //     position: "absolute",
  //     top: "70%",
  //     left: "69%",
  //     marginTop: "25px",
  //     transform: "translate(-50%, -50%)",
  //     marginLeft: "8px",
  //   },
  //   // onclick()=>"/whitepapers-set"
   
  // },
];

const Curated = () => {
  const navigate = useNavigate();

  return (
    <>

    <div className="relative w-full h-full">
      {/* Background Image */}
      <img
        src={require("../assets/assetsFromyash/Curated.jpg")}
        alt="Hero Background"
        className="w-full h-full object-cover"
      />
        <button
    style={{
      height: "45px",
      width: "170px",
      backgroundColor: "transparent",
      color: "#fff",
      // border: '2px solid #fff',
      borderRadius: "5px",
      position: "absolute",
      top: "70%",
      left: "69%",
      marginTop: "25px",
      transform: "translate(-50%, -50%)",
      marginLeft: "8px",
    }}
    onClick={() => navigate("/whitepapers-set")}
  >
    Explore More
  </button>
   
      {buttonData.map((button) => (
  <button
    key={button.id}
    style={button.style}
    // onClick={() => button.onClick(navigate)}
    onClick={() =>
      navigate(`/category/${button.name.toLowerCase()}`, { state: button })
    }
   
    
  >
    {button.name}
  </button>
))}

    </div>
    </>

  );
};

export default Curated;
