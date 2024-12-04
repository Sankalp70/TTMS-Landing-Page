import cglogo from "../../assests/CGLogo.png";
import img1 from "../../assests/Home/img1.jpeg";
import img2 from "../../assests/Home/img2.jpeg";
import img3 from "../../assests/Home/img3.jpeg";
import img4 from "../../assests/Home/img4.avif";
import modules from "../../assests/Home/modules.png";
import masterainer from "../../assests/Home/masterTrainer.png";
import trainingProgram from "../../assests/Home/trainingProgram.png";
import institutionProgram from "../../assests/Home/institution.png";
import gmail from "../../assests/Home/gmail.png";
import location from "../../assests/Home/location.png";
import phone from "../../assests/Home/phone.png";
import {
  FaChalkboardTeacher,
  FaBookOpen,
  FaVideo,
  FaChartLine,
  FaCertificate,
  FaUsers,
} from "react-icons/fa";

export const content = {
  cgLogo: cglogo,
  heading: "Teachers Training Management System",
  menuItems: ["HOME", "ABOUT", "CONTACT"],
  sliderSettings: {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
  },
  ttmsDetails: {
    description: `Teacher Training Management System (TTMS) is being designed and developed by National Informatics Centre, Chhattisgarh. TTMS is developed for the Training of the Teacher's whether Online or Offline. The website has roles such as Training Provider, Coordinator, Master Trainer, and Teacher. Training Providers like SCERT and SSMA conduct training for teachers by creating Coordinators under them. Coordinators create Modules, Training, Venues, etc., on the portal. The Master Trainer is the authority person who takes class session-wise according to the Training. Along with this, Training Material, Course Material, and Assignments can be uploaded on the website for the Training.`,
  },
  cardData: [
    {
      title: "Total Modules",
      value: "223",
      image: modules,
    },
    {
      title: "Total Master Trainers",
      value: "666",
      image: masterainer,
    },
    {
      title: "Total Training Institutes",
      value: "48",
      image: trainingProgram,
    },
    {
      title: "Total Training Programs",
      value: "835",
      image: institutionProgram,
    },
  ],
  cardDatas: [
    {
      icon: "FaClipboardCheck",
      title: "Training Programs",
      listItems: [
        { label: "Previous", value: "835" },
        { label: "Ongoing", value: "0" },
        { label: "Future", value: "0" },
        { label: "Total", value: "835" },
      ],
      className: "card-training",
    },
    {
      icon: "FaUsers",
      title: "Participants",
      listItems: [
        { label: "Selected", value: "22,443" },
        { label: "Present", value: "269" },
        { label: "Test Given", value: "0" },
        { label: "Trained", value: "0" },
      ],
      className: "card-participants",
    },
  ],
  disclaimerContent: {
    title: "Disclaimer",
    copyright:
      "© 2024 - 25 CG School Education Department | Government of Chhattisgarh RTE. All Rights Reserved. Powered by: NIC.",
    responsibility:
      "All efforts have been made to make the information as accurate as possible. The Department of School Education, Govt. of Chhattisgarh, or NIC will not be responsible for any damage caused by inaccuracy in the information available on this website.",
    hosting:
      "Designed, developed & hosted by National Informatics Center (NIC), Chhattisgarh State Centre, Raipur. The contents are owned by the School Education Department, Govt. of Chhattisgarh.",
    contact:
      "Please contact the Web Team with your queries, comments, and suggestions about this website at",
    contactUrl: "https://shiksha.cg.nic.in/ttms",
  },
  footerContent: {
    copyright:
      "© Developed and hosted by IIT Indian Institute of Technology Bhilai (Education Department of Chhattisgarh)",
    rights:
      "All rights reserved, Education Department, Government of Chhattisgarh 2024",
    lastUpdated: "Last Updated: Sep 1, 2024",
  },
  carousel: {
    images: [img1, img2, img4],
    overlayText: `Teacher Training Management System (TTMS) is being designed and developed by National Informatics Centre, Chhattisgarh. TTMS is developed for the Training of the Teacher's whether Online or Offline. Website having roles i.e Training Provider, Coordinator, Master Trainer, Teacher. Training Provider like SCERT, SSMA conducts training for the teacher by creating Coordinator under it. Coordinator's create Modules, Training, Venues etc. on the portal. Master Trainer is the authority person who takes class session-wise according to the Training. Along with this, Training Material, Course Material, and Assignments can be uploaded on the website for the Training.`,
  },
  contactInfo: {
    title: "Contact Us",
    address: {
      text: "BTI Ground Shankar Nagar, Raipur",
      postalCode: "492007",
      image: location,
    },
    email: {
      text: "scertcg@gmail.com",
      image: gmail,
    },
    phone: {
      text: "0771-2443596, 0771-2443496",
      image: phone,
    },
  },
  whatWeOffer: {
    title: "What We Offer",
    description:
      "Our Teachers Training Management System is a complete solution that brings all essential training components into one platform. Here’s a look at the key features:",
    offerings: [
      {
        title: "Customized Training Programs",
        text: "Our platform offers a wide variety of training modules tailored to meet the specific needs of educators across different subject areas, grade levels, and specialties. From introductory courses to advanced professional development, we provide content that empowers teachers at every stage of their careers.",
        icon: <FaChalkboardTeacher />,
      },
      {
        title: "Resource Libraries",
        text: "Access an extensive library of resources, including lesson plans, teaching guides, and multimedia content, designed to enhance classroom teaching and support instructional goals. Our library is continuously updated to ensure that educators have the latest tools to inspire their students.",
        icon: <FaBookOpen />,
      },
      {
        title: "Interactive Workshops and Webinars",
        text: "Engage in live and recorded webinars led by industry experts, thought leaders, and experienced educators. Our interactive workshops allow teachers to discuss challenges, share insights, and learn from each other in a supportive, collaborative environment.",
        icon: <FaVideo />,
      },
      {
        title: "Performance Tracking and Analytics",
        text: "Our system provides robust analytics and tracking tools to monitor training progress, assess competency, and ensure that educators are meeting their professional development goals. Administrators and teachers alike can access these insights to make data-driven decisions and personalize the learning experience.",
        icon: <FaChartLine />,
      },
      {
        title: "Certification and Accreditation",
        text: "Gain certifications that recognize your achievements and contributions to the field. Our platform offers courses that align with accreditation standards, providing teachers with credentials that enhance their qualifications and career opportunities.",
        icon: <FaCertificate />,
      },
      {
        title: "Peer Collaboration and Networking",
        text: "Connect with fellow educators from around the world. Our platform encourages teachers to build networks, share best practices, and collaborate on projects. We provide forums, discussion boards, and group activities to facilitate meaningful exchanges among educators.",
        icon: <FaUsers />,
      },
    ],
  },
  aboutUs: {
    mission:
      "Our mission is to provide a comprehensive, user-friendly platform that offers tailored training programs, interactive resources, and collaborative tools to support teachers at every stage of their career. Whether it's through customized training, access to a rich library of teaching resources, or opportunities for peer collaboration, we are committed to empowering educators to meet the evolving challenges of modern education Welcome to the Teachers Training Management System (TTMS) – a cutting-edge platform meticulously crafted to support educators and revolutionize the professional development process. At TTMS, we firmly believe that teachers are the driving force behind quality education. They shape the minds of future leaders, innovators, and changemakers, making their role indispensable in building a better society. Recognizing the pivotal role educators play, we are committed to providing them with a robust and accessible platform that fosters growth, learning, and excellence in their craft. Our mission is to equip teachers with the tools, resources, and training they need to thrive in an ever-evolving educational landscape. From advanced instructional techniques and innovative methodologies to resources that address the diverse needs of learners, TTMS ensures that educators are empowered to meet the challenges of modern teaching.",
  },
  companyInfo: {
    vision: {
      text: "Our vision is to create a world where every educator has access to the resources and professional development opportunities they need to thrive in their careers and make a positive impact on their students. We aim to build a platform that fosters a community of continuous learning and collaboration among educators from all backgrounds and disciplines.",
      image: require("../../assests/vision.png"),
    },
    mission: {
      text: "Our mission is to provide a comprehensive, user-friendly platform that offers tailored training programs, interactive resources, and collaborative tools to support teachers at every stage of their career. Whether it's through customized training, access to a rich library of teaching resources, or opportunities for peer collaboration, we are committed to empowering educators to meet the evolving challenges of modern education.",
      image: require("../../assests/mission.png"),
    },
  },
  services: [
    {
      title: "Training Program Management",
      description:
        "Organize and manage training programs effortlessly. Our system provides tools for:",
      points: [
        "Scheduling and Planning: Plan training sessions with an intuitive calendar and scheduling tools.",
        "Content Delivery: Upload and share training materials, videos, and resources.",
        "Attendance Tracking: Monitor participation with automated attendance records.",
      ],
    },
    {
      title: "Performance Tracking and Evaluation",
      description:
        "Measure the effectiveness of training programs and individual progress with:",
      points: [
        "Skill Assessments: Evaluate teachers’ skills through quizzes and assignments.",
        "Feedback Collection: Collect and analyze feedback to improve training sessions.",
        "Certification Generation: Automatically generate and issue certificates upon completion.",
      ],
    },
    {
      title: "Customized Training Solutions",
      description:
        "Cater to the diverse needs of educators with personalized solutions:",
      points: [
        "Tailored Training Modules: Design courses based on specific subjects, grades, or educational needs.",
        "Language and Regional Customization: Offer training in multiple languages and align with regional education standards.",
      ],
    },
    {
      title: "Data-Driven Insights",
      description: "Leverage analytics to enhance decision-making:",
      points: [
        "Training Impact Reports: Gain insights into program success rates and areas for improvement.",
        "Teacher Performance Metrics: Track and analyze individual and group performance over time.",
        "District and School-Wide Comparisons: Compare progress across districts and schools to identify trends.",
      ],
    },
    {
      title: "Collaboration Tools",
      description: "Foster collaboration among educators and administrators:",
      points: [
        "Discussion Forums: Create a space for teachers to share ideas and best practices.",
        "Mentorship Programs: Pair experienced educators with new teachers for guidance and support.",
        "Real-Time Communication: Facilitate instant messaging and updates.",
      ],
    },
    {
      title: "Easy Integration with Existing Systems",
      description:
        "Integrate TTMS seamlessly into your current infrastructure:",
      points: [
        "API Support: Connect with student information systems, HR platforms, and more.",
        "Data Import/Export: Simplify migration with user-friendly data transfer tools.",
      ],
    },
    {
      title: "Comprehensive Support and Training",
      description: "Get the help you need, when you need it:",
      points: [
        "Onboarding Assistance: Step-by-step guidance to set up the platform.",
        "User Training: Interactive tutorials and workshops for administrators and educators.",
        "24/7 Support: Dedicated support team to resolve issues quickly.",
      ],
    },
    {
      title: "Why Choose TTMS?",
      description: "Our system is built with educators in mind, offering:",
      points: [
        "User-Friendly Interface: Simplified navigation for all users.",
        "Secure and Scalable Solutions: Ensure data privacy and support growth.",
        "Affordable Pricing: Cost-effective plans tailored to your needs.",
      ],
    },
  ],
  whatSetsUsApart: [
    {
      title: "Customizable Training Paths",
      description:
        "Personalized learning experiences tailored to individual teacher needs.",
    },
    {
      title: "Seamless Integration",
      description:
        "Our system integrates with existing educational frameworks for effortless adoption.",
    },
    {
      title: "Community Engagement",
      description:
        "We connect educators across regions, fostering collaboration and shared learning.",
    },
    {
      title: "Sustainability in Education",
      description:
        "Helping teachers stay ahead of trends and technologies to meet the ever-changing needs of learners.",
    },
  ],
};

export default content;
