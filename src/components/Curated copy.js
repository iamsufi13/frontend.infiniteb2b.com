import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
const Curated = ({ featureCard }) => {
  console.log("featureCardfeatureCardfeatureCard", featureCard)
  const { category } = useParams();
  const navigate = useNavigate();
  const { state } = useLocation();

  console.log("statemymymy", state, category);
  return (
    <div className="relative w-full h-full"
    onClick={() =>
      navigate(`/category/${featureCard.title}`, { state: featureCard })
    }>
      {/* Image */}
   
      <img
        src={require("../assets/assetsFromyash/Curated.jpg")}
        alt="Hero Background"
        className="w-full h-full object-cover"
      />

      {/* Transparent Button */}
      <button
        style={{
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
        }}
        // onClick={()=>navigate("/category/ABM-Account-Based-Marketing")}
      >
        Anaerobic Digestion
      </button>
      <button
        style={{
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
        }}
        // onClick={()=>navigate("/category/ABM-Account-Based-Marketing")}
      >
        Marketing Automation
      </button>
      <button
        style={{
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
        }}
        // onClick={()=>navigate("/category/ABM-Account-Based-Marketing")}
      >
        Marketing Automation
      </button>
      <button
        style={{
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
        }}
        // onClick={()=>navigate("/category/ABM-Account-Based-Marketing")}
      >
        Marketing Automation
      </button>
      <button
        style={{
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
        }}
      >
        Marketing Automation
      </button>
      <button
        style={{
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
        }}
        onClick={() => navigate("/whitepapers-set")}
      >
        B2B Demand Generation
      </button>
      <button
        style={{
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
        }}
      >
        Account Based Marketing
      </button>
      <button
        style={{
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
        }}
      >
        Anaerobic Digestion
      </button>
      <button
        style={{
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
        }}
      >
        Anaerobic Digestion
      </button>
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
    </div>
  );
};

export default Curated;
