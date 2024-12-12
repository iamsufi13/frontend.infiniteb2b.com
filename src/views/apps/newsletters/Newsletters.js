
import React from "react";
import CloudPaaS from '../../../assets/img/AI_img/Big Data.png';
import { useNavigate } from "react-router-dom";

const Newsletters = () => {
    const Navigate = useNavigate();
    const images = [
        { title: "The HR Professional", description: "The HR Professional newsletter is crafted to empower HR professionals at every stage of their career journey. Dive into a rich collection of B2B vendor content spanning essential HR areas, offering valuable resources for learning, comparing, and implementing HR strategies and solutions with precision. From illuminating case studies to comprehensive guides and insightful reports, subscribers unlock a treasure trove of insights into cutting-edge tools, emerging trends, and proven methodologies to optimize HR performance. Explore diverse topics, including talent management, workforce development, employee relations, regulatory compliance, and organizational culture, to stay ahead in the ever-evolving realm of human resources.",  imgSrc: CloudPaaS },
        { title: "The Business, Operations & Technology of Healthcare", description: "The Business, Operations & Technology of Healthcare newsletter covers the industry's most important topics, from safeguarding patient privacy and PHI security to optimizing revenue cycles. Explore how interoperability and HIE solutions are revolutionizing healthcare communication and collaboration. Discover the future of telehealth and its role in expanding access to care while enhancing patient experiences. From efficient pharmacy operations to strategic asset management, uncover innovative solutions driving operational excellence. Harness the power of big data analytics and digital transformation to revolutionize EHR systems and streamline practice management.",  imgSrc: CloudPaaS }, // All through the lens of carefully curated vendor content that ensures you're up to date on all the solutions available in healthcare technology and operations.
        { title: "The IT Professional", description: "Tailored for IT professionals at all businesses, the IT Pro newsletter offers timely and relevant insights on IT solutions. Our newsletter presents a thoughtfully assembled collection of B2B vendor content. It provides valuable assets for learning, comparing, and implementing IT strategies and solutions, from comprehensive case studies to informative resources, reports, and podcasts. Subscribers access information on vital cybersecurity practices, state-of-the-art IT infrastructure, advanced data analytics, and emerging technologies influencing the field.",  imgSrc: CloudPaaS },
        { title: "The Manufacturing Professional", description: "The Manufacturing Pro newsletter empowers professionals within the manufacturing realm to leverage B2B vendor content spanning crucial domains such as Smart Factory, Sustainability, Health & Safety, Regulatory & Compliance, Manufacturing Software, Maintenance & Reliability, and Production Management & Monitoring. From illuminating case studies to comprehensive guides and insightful reports, subscribers gain access to invaluable resources for refining manufacturing strategies and implementing cutting-edge solutions.",  imgSrc: CloudPaaS }, // Stay abreast of the latest trends, best practices, and innovative technologies shaping the manufacturing landscape, and equip yourself with the knowledge needed to drive operational excellence and sustainable growth in your organization.
        { title: "The Finance Professional", description: "The Finance Pro newsletter enables finance professionals of all backgrounds to pursue excellence.  With a wide variety of B2B vendor content spanning essential finance topics,  our newsletter is a valuable resource hub for learning,  comparing, and implementing financial strategies and solutions in real-world scenarios.  From illuminating case studies to comprehensive guides and reports,  subscribers unlock a treasure trove of insights into cutting-edge tools,  technologies,  and methodologies to enhance job performance.",  imgSrc: CloudPaaS}, // Explore a spectrum of topics, including cost management, cash flow, forecasting, budgeting, compliance, accounts receivable and payable, and investor relations, to stay ahead of the curve and drive success in the dynamic world of finance.
        { title: "The Sales Professional", description: "The Sales Professional newsletter is curated to meet the needs of sales professionals at all levels of experience. Our newsletter offers various B2B vendor content covering current and pertinent sales topics. It delivers valuable resources for learning, comparing, and applying effective sales strategies and solutions. From enlightening case studies that provide actionable insights to informative ebooks, reports, and captivating videos, subscribers can access a plethora of knowledge to elevate their sales approaches and achieve tangible outcomes in their sales targets.",  imgSrc: CloudPaaS },
        { title: "The Business, Operations & Technology of Commercial Vehicle Fleets", description: "The Business, Operations & Technology of Commercial Fleet Vehicles newsletter delves into the key topics and trends of commercial fleet management. The newsletter’s content explores how fleets prioritize safety and security with advanced AI-driven solutions, navigate compliance regulations, and maintain sustainable practices, driving eco-friendly fleets forward. Uncover the latest innovations enhancing fleet performance and longevity, from predictive maintenance to fuel-efficient strategies. Each week, we’ll provide case studies, ebooks, reports, and guides to help Fleet professionals do their jobs better.",  imgSrc: CloudPaaS },
        { title: "The Marketing Professional", description: "The Marketing Professional newsletter is meticulously crafted to cater to marketers at every career stage. Whether you're a seasoned professional or just starting, our solutions-based content is designed to help you do your job better. With a diverse range of B2B vendor content spanning the latest and most relevant topics and product categories, our newsletter provides valuable resources for education, comparison, and practical application of marketing solutions. From insightful case studies that offer real-world solutions to informative ebooks, reports, and engaging videos, subscribers can access knowledge to enrich their marketing strategies and drive tangible results in their campaigns.",  imgSrc: CloudPaaS },
      ];

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {images.map((image, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
            <img
              src={image.imgSrc}
              alt={image.title}
              className="w-full h-80 object-cover mb-4 rounded"
            />
            <h3 className="font-bold text-xl mb-2">{image.title}</h3>
            <p className="text-gray-600 text-lg mb-4">{image.description}</p>
            <button onClick={()=>Navigate('/login')} className="w-full py-2 bg-gradient-to-r to-teal-400 from-purple-500 text-white rounded-full">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Newsletters;

