import React, { useState, useRef } from "react";
import {
  CustomImage,
  CircularProgress,
  DownloadButton,
  TextAnimation,
} from "../components";
import {
  profile,
  homeIcon,
  aboutIcon,
  serviceIcon,
  skillIcon,
  portfolioIcon,
  blogIcon,
  ContactIcon,
  resumeIcon,
  testimonailIcon,
} from "../assets";
import AboutPage from "./aboutPage";
import ServicePage from "./servicePage";
import IntroducePage from "./introducePage";
import SkillPage from "./skillPage";
import PortfolioPage from "./portfolioPage";
import BlogPage from "./blogPage";
import TestimonailPage from "./testimonailPage";
import ContactPage from "./contactPage";
import ResumePage from "./resumePage";
import htmllogo from "../assets/logo/html.svg";
import "swiper/css/pagination";
import "swiper/css";
import PortfolioDetailPage from "../components/Card/portfolioDetailCard";
import BlogDetailPage from "../components/Card/blogCardDetail";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const HomePage = () => {
  // const [showDetailPage, setShowDetailPage] = useState(false);
  const [showDetailPage, setShowDetailPage] = useState(false);
  // const [showDetailBlogPage, setShowDetailBlogPage] = useState(false);
  const [detailType, setDetailType] = useState(null);

  const [menuOpen, setMenuOpen] = useState(false);
  const introduceRef = useRef(null);
  const aboutRef = useRef(null);
  const serviceRef = useRef(null);
  const skillRef = useRef(null);
  const featuresRef = useRef(null);
  const blogRef = useRef(null);
  const testimonailRef = useRef(null);
  const contactRef = useRef(null);
  const resumeRef = useRef(null);
  const [currentPage, setCurrentPage] = useState("portfolio");
  const [currentPages, setCurrentPages] = useState("blog");

  const handleMenuClick = (ref) => {
    if (showDetailPage) {
      setShowDetailPage(false); // Reset to normal view
      setTimeout(() => {
        ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    } else {
      ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <div className="w-screen min-h-screen bg-black flex flex-col lg:flex-row px-2 lg:px-8 gap-8 lg:gap-14">
      {/* profile */}
      <div className="lg:sticky  lg:top-0 top-32  w-full  lg:w-[25%] h-auto lg:h-screen bg-gray-900 flex flex-col rounded-lg px-2 gap-3 py lg:py-0 py-20">
        <div className="w-full h-auto lg:h-[40%] flex flex-col items-center rounded-lg">
          <CustomImage src={profile} alt="image" width={150} height={150} />
          <h2 className="text-2xl font-bold">FIRST GEN NET</h2>
          <h2 className="text-orange-500">
            <TextAnimation />
          </h2>
        </div>

        <div className="w-full h-auto lg:h-[20%] flex flex-row border-t-2 border-t-white px-3 py-4 lg:py-0">
          <div className="w-[50%] h-full grid justify-items-start">
            <h2 className="text-xl font-bold">Residence: </h2>
            <h2 className="text-xl font-bold"> City: </h2>
            <h2 className="text-xl font-bold">age: </h2>
          </div>
          <div className="w-[50%] h-full grid justify-items-end">
            <h2>Cambodia</h2>
            <h2>Phnom Penh</h2>
            <h2>23</h2>
          </div>
        </div>
        <div className="w-full h-auto lg:h-[40%] bg-gray-800 flex flex-col  rounded-lg px-4  py-4 lg:py-2 gap-2">
          <h3>Skills</h3>
          <div className="w-auto h-auto lg:h-[50%] flex flex-row items-center justify-center lg:gap-2 gap-14">
            <CircularProgress value={90} text="HTML"></CircularProgress>
            <CircularProgress value={80} text="CSS"></CircularProgress>
            <CircularProgress value={90} text="JS"></CircularProgress>
            <CircularProgress value={90} text="Tailwind"></CircularProgress>
          </div>
          <div className="flex justify-center items-center w-full">
            <DownloadButton width="300px" height="40px" fontSize="base" />
          </div>
        </div>
      </div>

      {/*slide section */}
      <div className="w-full lg:w-[60%] h-auto flex flex-col py-8 px-6 lg:py-16 gap-4">
        {showDetailPage ? (
          detailType === "portfolio" ? (
            <PortfolioDetailPage
              onBack={() => {
                setShowDetailPage(false);
                setDetailType(null);
              }}
            />
          ) : detailType === "blog" ? (
            <BlogDetailPage
              onBack={() => {
                setShowDetailPage(false);
                setDetailType(null);
              }}
            />
          ) : null
        ) : (
          <>
            <div ref={introduceRef}>
              <IntroducePage />
            </div>
            <div ref={aboutRef}>
              <AboutPage />
            </div>
            <div ref={serviceRef}>
              <ServicePage />
            </div>
            <div ref={skillRef}>
              <SkillPage />
            </div>
            <div ref={resumeRef}>
              <ResumePage />
            </div>
            <div ref={featuresRef}>
              {currentPage === "portfolio" ? (
                <PortfolioPage
                  onCardClick={() => {
                    setShowDetailPage(true);
                    setDetailType("portfolio");
                  }}
                />
              ) : (
                <PortfolioDetailPage
                  onBack={() => setCurrentPage("portfolio")}
                />
              )}
            </div>
            <div ref={blogRef}>
              {currentPages === "blog" ? (
                <BlogPage
                  onCardClick={() => {
                    setShowDetailPage(true);
                    setDetailType("blog");
                  }}
                />
              ) : (
                <setShowDetailPage onBack={() => setCurrentPages("blog")} />
              )}
            </div>
            <div ref={testimonailRef}>
              <TestimonailPage />
            </div>
            <div ref={contactRef}>
              <ContactPage />
            </div>
          </>
        )}

        <footer className="w-full h-auto bg-red-500 flex flex-row items-center justify-center">
          <h3> Copyright by@domain.com</h3>
        </footer>
      </div>

      {/* menu */}
      <div className="lg:sticky  lg:top-0 lg:w-[6%] w-full h-full lg:h-screen border-2 border-orange-500 flex flex-row lg:flex-col items-center justify-center gap-2 rounded-full  py-4 lg:py-6 hidden md:flex">
        <CustomImage
          onClick={() => handleMenuClick(introduceRef)}
          src={profile}
          alt="image"
          width={100}
          height={100}
        />
        <button
          onClick={() => handleMenuClick(introduceRef)}
          className="rounded-full bg-orange-500 p-2"
          title="Home"
        >
          <img src={homeIcon} alt="Home" width={20} height={20} />
        </button>
        <button onClick={() => handleMenuClick(aboutRef)} title="About">
          <img src={aboutIcon} alt="About" width={20} height={20} />
        </button>
        <button onClick={() => handleMenuClick(serviceRef)} title="Service">
          <img src={serviceIcon} alt="Service" width={20} height={20} />
        </button>
        <button onClick={() => handleMenuClick(skillRef)} title="Skill">
          <img src={skillIcon} alt="skill" width={20} height={20} />
        </button>
        <button onClick={() => handleMenuClick(resumeRef)} title="Resume">
          <img src={resumeIcon} alt="resume" width={20} height={20} />
        </button>
        <button onClick={() => handleMenuClick(featuresRef)} title="Portfolio">
          <img src={portfolioIcon} alt="portfolio" width={20} height={20} />
        </button>
        <button onClick={() => handleMenuClick(blogRef)} title="Blog">
          <img src={blogIcon} alt="blog" width={20} height={20} />
        </button>
        <button
          onClick={() => handleMenuClick(testimonailRef)}
          title="Testimonail"
        >
          <img src={testimonailIcon} alt="Testimonail" width={20} height={20} />
        </button>
        <button onClick={() => handleMenuClick(contactRef)} title="Contact">
          <img src={ContactIcon} alt="contactRef" width={20} height={20} />
        </button>
        <button onClick={() => handleMenuClick(contactRef)}>
          <img src={aboutIcon} alt="Setting" width={20} height={20} />
        </button>
        {/* <ShareButton /> */}
      </div>
      {/* buger menu */}
      <div className="fixed top-0 left-0 lg:hidden w-full h-auto flex flex-row bg-gray-800 justify-between items-center px-4 py-2">
        <img src={profile} alt="Company Logo" className="w-12 h-12" />
        <button
          className="right-4 z-[999] lg:hidden bg-orange-500 dark:bg-orange-500 p-2 rounded-full !important"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <AiOutlineClose size={30} />
          ) : (
            <AiOutlineMenu size={30} />
          )}
        </button>
      </div>
      <div
        className={`fixed top-16 right-0 h-full w-60 bg-gray-900 shadow-lg transform transition-transform duration-300 rounded-xl ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden z-40 overflow-y-auto scroll-smooth`}
      >
        <div className="flex flex-col gap-2 p-4">
          <button
            onClick={() => handleMenuClick(introduceRef)}
            className="flex flex-row items-center gap-2"
          >
            <img src={homeIcon} alt="Home" width={25} height={25} />
            <h2>Home</h2>
          </button>
          <button
            onClick={() => handleMenuClick(aboutRef)}
            className="flex flex-row items-center gap-2"
          >
            <img src={aboutIcon} alt="About" width={25} height={25} />
            <h2>About</h2>
          </button>
          <button
            onClick={() => handleMenuClick(serviceRef)}
            className="flex flex-row items-center gap-2"
          >
            <img src={serviceIcon} alt="Service" width={20} height={20} />
            <h2>Service</h2>
          </button>
          <button
            onClick={() => handleMenuClick(skillRef)}
            className="flex flex-row items-center gap-2"
          >
            <img src={skillIcon} alt="skill" width={20} height={20} />
            <h2>Skill</h2>
          </button>
          <button
            onClick={() => handleMenuClick(resumeRef)}
            className="flex flex-row items-center gap-2"
          >
            <img src={resumeIcon} alt="resume" width={20} height={20} />
            <h2>Resume</h2>
          </button>
          <button
            onClick={() => handleMenuClick(featuresRef)}
            className="flex flex-row items-center gap-2"
          >
            <img src={portfolioIcon} alt="portfolio" width={20} height={20} />
            <h2>Portfolio</h2>
          </button>
          <button
            onClick={() => handleMenuClick(blogRef)}
            className="flex flex-row items-center gap-2"
          >
            <img src={blogIcon} alt="blog" width={20} height={20} />
            <h2>Blog</h2>
          </button>
          <button
            onClick={() => handleMenuClick(testimonailRef)}
            className="flex flex-row items-center gap-2"
          >
            <img
              src={testimonailIcon}
              alt="Testimonail"
              width={20}
              height={20}
            />
            <h2>Testimonail</h2>
          </button>
          <button
            onClick={() => handleMenuClick(contactRef)}
            className="flex flex-row items-center gap-2"
          >
            <img src={ContactIcon} alt="contactRef" width={20} height={20} />
            <h2>Contact</h2>
          </button>
          <div className="w-full h-auto flex flex-col px-6 gap-2">
            <h2>Get In Touch</h2>
            <div className="w-full flex flex-row gap-4">
              <img src={htmllogo} alt="fecbook" width={20} height={20} />
              <img src={htmllogo} alt="fecbook" width={20} height={20} />
              <img src={htmllogo} alt="fecbook" width={20} height={20} />
              <img src={htmllogo} alt="fecbook" width={20} height={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
