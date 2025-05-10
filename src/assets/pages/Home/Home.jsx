import React from "react";
import Header from "../../components/Header/Header";
import "./Home.css";
export default function Home() {
  return (
    <div className="">
      <div className=" w-full relative bg-[#302c42] pt-[25px] lg:pt-[50px]">
        <Header />

        <section className="hero  relative ">
          <div className="jc-grid  jc-container items-stretch place-content-center h-[calc(100vh-80px)]">
            <div className="col-span-7 z-10 flex flex-col justify-center items-start ">
              <h1 className="hero__title xl:text-[48px] lg:text-[40px] text-[32px] text-white font-bold">
                <span className="jc-text-linear"> Your </span>Dream Job
                <br />
                Start{" "}
                <span className="jc-text-linear">With The Right Resume</span>
              </h1>

              <button className="hero__cta-btn relative mt-[30px] jc-btn jc-bg-linear font-bold hover:text-white jc-text-black text-base">
                Get Started for Free
              </button>
            </div>
            <div className="col-span-5 col-end-13 z-10  ">
              <div className="hero__img float-right ">
                <img src="imgs/hero-img.png" className=" " alt="" />
              </div>
            </div>
          </div>
          <div className="hero__bg"></div>
        </section>
        <section className="about   relative">
          <div className="jc-container my-[111px] z-10 relative">
            <div className="jc-grid pb-[100px]">
              <div className="col-span-5">
                <h1 className="jc-section__heading mb-[10px]">INTRODUCTION</h1>
                <h2 className="jc-section__sub-heading jc-arrow-long">
                  TO JustRS
                </h2>
              </div>

              <div className="col-span-7">
                <p className="jc-section__caption float-end pl-5">
                  The smarter way to create your resume. In a world where first
                  impressions matter, your resume is your personal brand. JustRS
                  empowers you with clean, professional designs and effortless
                  editing tools to help you land your next opportunity with
                  confidence.
                </p>
              </div>
            </div>
            <div className="jc-grid items-stretch place-content-center">
              <div className="col-span-5">
                <img src="./imgs/about-img.png" className="w-full" alt="" />
              </div>
              <div className="col-span-6 col-start-7 flex flex-col justify-center items-start">
                <h1 className="jc-section__heading mb-[10px]">ABOUT</h1>
                <h2 className="jc-section__sub-heading  ">JustRS</h2>
                <p className="jc-section__caption mt-[42px] mb-[24px]">
                  JustRS is a modern Resume builder that helps you craft
                  professional, eye-catching resumes in minutes. Whether you're
                  a student, a seasoned professional, or making a career switch,
                  JustRS provides beautiful templates and smart tools tailored
                  to your needs.
                </p>
                <button className="jc-btn jc-bg-linear">
                  LET'S GET IN TOUCH
                </button>
              </div>
            </div>
          </div>
          <div className="about__bg"></div>
        </section>
        <section className="service   relative">
          <div className="jc-container my-[111px] z-10 relative">
            <div className="jc-grid pb-[100px]">
              <div className="col-span-5">
                <h1 className="jc-section__heading mb-[10px]">WHY CHOOSE</h1>
                <h2 className="jc-section__sub-heading jc-arrow-long">
                  JustRS
                </h2>
              </div>

              <div className="col-span-7">
                <p className="jc-section__caption float-end pl-5">
                  We believe your resume should reflect more than just your
                  experience — it should showcase your personality and
                  potential. JustRS makes it easy to stand out from the crowd
                  with stylish designs, guided layouts, and instant downloads —
                  all free and ready to use.
                </p>
              </div>
            </div>
            <div className="jc-grid gap-[24px] lg:gap-[12px]">
              <div className="service__card self-stretch col-span-6 lg:col-span-3 pt-[23px] pb-[100px] px-[35px]  w-full flex flex-col items-center  bg-white rounded-[40px]">
                <div className=" service__card--img bg-[#0e0e0e]/30 p-[14px] rounded-full w-40 h-40 lg:w-42 lg:h-42  overflow-hidden">
                  <img
                    src="./imgs/service-1.jpg"
                    alt="service-1"
                    className="w-full  rounded-full"
                  />
                </div>
                <h1 className="uppercase font-bold text-[20px] lg:text-[24px] text-white mt-[21px] mb-[39px]">
                  TEMPLATES
                </h1>
                <p className="text-[12px]  text-white text-left ">
                  A curated collection of modern and professional RS templates
                  designed to suit every career stage and industry. Each
                  template is crafted to be visually appealing and
                  recruiter-friendly — helping your application stand out
                  instantly.
                </p>
                <button className="w-fit jc-btn jc-bg-linear text-[12px]">
                  Try now
                </button>
              </div>

              <div className="service__card  col-span-6 lg:col-span-3 pt-[23px] pb-[100px] px-[35px]  w-full flex flex-col items-center self-stretch  bg-white rounded-[40px]">
                <div className="service__card--img bg-[#0e0e0e]/30 p-[14px] rounded-full w-40 h-40 lg:w-42 lg:h-42 overflow-hidden">
                  <img
                    src="./imgs/service-1.jpg"
                    alt="service-1"
                    className="w-full  rounded-full"
                  />
                </div>
                <h1 className="uppercase font-bold text-[20px] lg:text-[24px] text-white mt-[21px] mb-[39px]">
                  Simplicity
                </h1>
                <p className="text-[12px]  text-white text-left ">
                  With JustRS, you don’t need to be a designer or tech-savvy.
                  Our intuitive, user-friendly interface lets you build and edit
                  your RS effortlessly — so you can focus on your story, not on
                  formatting.
                </p>
                <button className="w-fit jc-btn jc-bg-linear text-[12px]">
                  Try now
                </button>
              </div>

              <div className="service__card col-span-6 lg:col-span-3 pt-[23px] pb-[100px] px-[35px]  w-full flex flex-col items-center self-stretch  bg-white rounded-[40px]">
                <div className="service__card--img bg-[#0e0e0e]/30 p-[14px] rounded-full w-40 h-40 lg:w-42 lg:h-42 overflow-hidden">
                  <img
                    src="./imgs/service-1.jpg"
                    alt="service-1"
                    className="w-full  rounded-full"
                  />
                </div>
                <h1 className="uppercase font-bold text-[20px] lg:text-[24px] text-white mt-[21px] mb-[39px]">
                  download
                </h1>
                <p className="text-[12px]  text-white text-left ">
                  Once you’re happy with your RS, download it instantly — no
                  fees, no sign-up required. JustRS offers free, high-quality
                  exports so you’re ready to apply at any time with confidence.
                </p>
                <button className="w-fit jc-btn jc-bg-linear text-[12px]">
                  Try now
                </button>
              </div>

              <div className="service__card  col-span-6 lg:col-span-3 pt-[23px] pb-[82px] px-[35px]  w-full flex flex-col items-center self-stretch  bg-white rounded-[40px]">
                <div className="service__card--img bg-[#0e0e0e]/30 p-[14px] rounded-full w-40 h-40 lg:w-42 lg:h-42 overflow-hidden">
                  <img
                    src="./imgs/service-1.jpg"
                    alt="service-1"
                    className="w-full  rounded-full"
                  />
                </div>
                <h1 className="uppercase font-bold text-[20px] lg:text-[24px] text-white mt-[21px] mb-[39px]">
                  Structure
                </h1>
                <p className="text-[12px]  text-white text-left ">
                  Built with guidance from industry standards and Harvard-style
                  formatting, JustRS ensures your resume is not only
                  well-designed but also well-organized. That means clear
                  headings, smart layouts, and a strong first impression.
                </p>
                <button className="w-fit jc-btn jc-bg-linear text-[12px]">
                  Try now
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="tech   ">
          <div className="jc-container overflow-x-hidden jc-grid my-[111px]">
            <div className="tech__heading mb-[60px] col-span-12 flex flex-col justify-center items-center py-[60px]">
              <h1 className="uppercase jc-section__heading mb-[10px]">
                FRAMEWORKS & LIBRARIES
              </h1>
              <h2 className="jc-section__sub-heading ">Used By JustRS</h2>
            </div>
            <div className="tech__list col-span-12 flex flex-nowrap justify-center items-center  space-x-5">
              <figure className="tech__icon flex flex-col items-center   ">
                <img
                  src="./imgs/react.svg"
                  alt="react-logo"
                  className="w-[80px] mb-3 opacity-70 scale-[0.9]"
                />
                <figcaption className="text-[15px] text-white font-normal ">
                  REACT
                </figcaption>
              </figure>
              <figure className="tech__icon flex flex-col items-center   ">
                <img
                  src="./imgs/html.svg"
                  alt="react-logo"
                  className="md:w-[70px] w-[50px] lg:w-[80px] mb-3 opacity-70"
                />
                <figcaption className="text-[15px] text-white font-normal">
                  HTML5
                </figcaption>
              </figure>
              <figure className="tech__icon flex flex-col items-center   ">
                <img
                  src="./imgs/css.svg"
                  alt="react-logo"
                  className="md:w-[70px] w-[50px] lg:w-[80px] mb-3 opacity-70"
                />
                <figcaption className="text-[15px] text-white font-normal">
                  CSS3
                </figcaption>
              </figure>
              <figure className="tech__icon flex flex-col items-center   ">
                <img
                  src="./imgs/tailwind.svg"
                  alt="react-logo"
                  className="md:w-[70px] w-[50px] lg:w-[80px] mb-3 opacity-70"
                />
                <figcaption className="text-[15px] text-white font-normal">
                  TAILWIND
                </figcaption>
              </figure>

              <figure className="tech__icon flex flex-col items-center  ">
                <img
                  src="./imgs/firebase.svg"
                  alt="react-logo"
                  className="md:w-[70px] w-[50px] lg:w-[80px] mb-3 opacity-70"
                />
                <figcaption className="text-[15px] text-white font-normal">
                  FIREBASE
                </figcaption>
              </figure>
              <figure className="tech__icon flex flex-col items-center   ">
                <img
                  src="./imgs/typescript.svg"
                  alt="react-logo"
                  className="md:w-[70px] w-[50px] lg:w-[80px] mb-3 opacity-70"
                />
                <figcaption className="text-[15px] text-white font-normal">
                  TYPESCRIPT
                </figcaption>
              </figure>
              <figure className="tech__icon flex flex-col items-center w-fit ">
                <img
                  src="./imgs/react-print.png"
                  alt="react-logo"
                  className="md:w-[70px] w-[50px] lg:w-[80px] mb-3 opacity-70"
                />
                <figcaption className="text-[15px] text-white font-normal text-center">
                  REACT TO PRINT
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
        <section className="process w-full ">
          <div className="jc-container  my-[111px]">
            <div className="jc-grid pb-[100px]">
              <div className="col-span-5">
                <h1 className="jc-section__heading mb-[10px]">HOW YOU BUILD</h1>
                <h2 className="jc-section__sub-heading jc-arrow-long">
                  WITH JustRS
                </h2>
              </div>

              <div className="col-span-7">
                <p className="jc-section__caption float-end pl-5">
                  The smarter way to create your resume. In a world where first
                  impressions matter, your resume is your personal brand. JustRS
                  empowers you with clean, professional designs and effortless
                  editing tools to help you land your next opportunity with
                  confidence.
                </p>
              </div>
            </div>
            <div className="jc-grid process__bg relative ">
              <div className="col-span-3 px-5 z-10 flex flex-col items-center pt-[10px]">
                <div className="sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] lg:w-[180px] lg:h-[180px] xl:w-[198px] xl:h-[198px] bg-[#0d0d0d]/30 p-[20px] rounded-full">
                  <div className="w-full rounded-full h-full bg-white flex justify-center items-center">
                    <h1 className="jc-text-2xl font-extrabold jc-text-black">
                      01
                    </h1>
                  </div>
                </div>
                <div className="w-full relative mt-[25px] pl-[30%] ">
                  <p className="    jc-text-base text-white font-semibold">
                    Choose Your Resume Template
                  </p>
                  <span className="process__arrow left-[cal(30%-67px)]"></span>
                </div>
              </div>

              <div className="col-span-3 px-5 z-10 flex flex-col items-center pt-[10px]">
                <div className="sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] lg:w-[180px] lg:h-[180px] xl:w-[198px] xl:h-[198px] bg-[#0d0d0d]/30 p-[20px] rounded-full ">
                  <div className="w-full rounded-full h-full bg-white flex justify-center items-center">
                    <h1 className="jc-text-2xl font-extrabold jc-text-black">
                      02
                    </h1>
                  </div>
                </div>
                <div className="w-full relative mt-[25px] pl-[30%] ">
                  <p className="    jc-text-base text-white font-semibold">
                    Enter Your Personal Information
                  </p>
                  <span className="process__arrow left-[cal(30%-67px)]"></span>
                </div>
              </div>

              <div className="col-span-3 px-5 z-10 flex flex-col items-center pt-[10px]">
                <div className="sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] lg:w-[180px] lg:h-[180px] xl:w-[198px] xl:h-[198px] bg-[#0d0d0d]/30 p-[20px] rounded-full ">
                  <div className="w-full rounded-full h-full bg-white flex justify-center items-center">
                    <h1 className="jc-text-2xl font-extrabold jc-text-black">
                      03
                    </h1>
                  </div>
                </div>
                <div className="w-full relative mt-[25px] pl-[30%] ">
                  <p className="    jc-text-base text-white font-semibold">
                    Customize the Look & Layout
                  </p>
                  <span className="process__arrow left-[cal(30%-67px)]"></span>
                </div>
              </div>

              <div className="col-span-3 px-5 z-10 flex flex-col items-center pt-[10px]">
                <div className="sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] lg:w-[180px] lg:h-[180px] xl:w-[198px] xl:h-[198px] bg-[#0d0d0d]/30 p-[20px] rounded-full ">
                  <div className="w-full rounded-full h-full bg-white flex justify-center items-center">
                    <h1 className="jc-text-2xl font-extrabold jc-text-black">
                      04
                    </h1>
                  </div>
                </div>
                <div className="w-full relative mt-[25px] pl-[30%] ">
                  <p className="    jc-text-base text-white font-semibold">
                    Download & Apply
                  </p>
                  <span className="process__arrow left-[cal(30%-67px)]"></span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="bg-black/30 py-[50px]">
          <div className="jc-container jc-grid">
            <div className="footer__logo footer__line col-span-2 items-stretch ">
              <div className=" text-white font-bold text-xl md:text-2xl lg:text-4xl">
                JustRS
              </div>
            </div>
            <div className="footer__links footer__line  place-items-center col-span-5 jc-text-base space-y-1  text-white">
              <div>
                <p className="jc-hover w-fit  py-2">RS TEMPLATE</p>
              </div>
              <p className="jc-hover w-fit  py-2">ABOUT</p>
              <p className="jc-hover w-fit  py-2">SERVICE</p>
              <p className="jc-hover w-fit  py-2">TECHNOLOGY</p>
              <p className="jc-hover w-fit  py-2"> PROCESS</p>
            </div>
            <div className="footer__social col-span-5 place-items-center">
              <h1 className="footer__social-title text-base text-white">
                SOCIALIZE WITH US
              </h1>
              <div className="footer__social-list mt-[40px] flex space-x-[20px]">
                <a href="" className="jc-hover">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16ZM16 8C20.4 8 24 11.6 24 16C24 20 21.1 23.4 17.1 24V18.3H19L19.4 16H17.2V14.5C17.2 13.9 17.5 13.3 18.5 13.3H19.5V11.3C19.5 11.3 18.6 11.1 17.7 11.1C15.9 11.1 14.7 12.2 14.7 14.2V16H12.7V18.3H14.7V23.9C10.9 23.3 8 20 8 16C8 11.6 11.6 8 16 8Z"
                      fill="#C0B7E8"
                    />
                  </svg>
                </a>

                <a href="" className="jc-hover">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16ZM8.2 13.3V24H11.6V13.3H8.2ZM8 9.9C8 11 8.8 11.8 9.9 11.8C11 11.8 11.8 11 11.8 9.9C11.8 8.8 11 8 9.9 8C8.9 8 8 8.8 8 9.9ZM20.6 24H23.8V17.4C23.8 14.1 21.8 13 19.9 13C18.2 13 17 14.1 16.7 14.8V13.3H13.5V24H16.9V18.3C16.9 16.8 17.9 16 18.9 16C19.9 16 20.6 16.5 20.6 18.2V24Z"
                      fill="#C0B7E8"
                    />
                  </svg>
                </a>
                <a href="" className="jc-hover">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 18.8C14.5 18.8 13.2 17.6 13.2 16C13.2 14.5 14.4 13.2 16 13.2C17.5 13.2 18.8 14.4 18.8 16C18.8 17.5 17.5 18.8 16 18.8Z"
                      fill="#C0B7E8"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M19.4 9.2H12.6C11.8 9.3 11.4 9.4 11.1 9.5C10.7 9.6 10.4 9.8 10.1 10.1C9.86261 10.3374 9.75045 10.5748 9.61489 10.8617C9.57916 10.9373 9.5417 11.0166 9.5 11.1C9.48453 11.1464 9.46667 11.1952 9.44752 11.2475C9.34291 11.5333 9.2 11.9238 9.2 12.6V19.4C9.3 20.2 9.4 20.6 9.5 20.9C9.6 21.3 9.8 21.6 10.1 21.9C10.3374 22.1374 10.5748 22.2495 10.8617 22.3851C10.9374 22.4209 11.0165 22.4583 11.1 22.5C11.1464 22.5155 11.1952 22.5333 11.2475 22.5525C11.5333 22.6571 11.9238 22.8 12.6 22.8H19.4C20.2 22.7 20.6 22.6 20.9 22.5C21.3 22.4 21.6 22.2 21.9 21.9C22.1374 21.6626 22.2495 21.4252 22.3851 21.1383C22.4209 21.0626 22.4583 20.9835 22.5 20.9C22.5155 20.8536 22.5333 20.8048 22.5525 20.7525C22.6571 20.4667 22.8 20.0762 22.8 19.4V12.6C22.7 11.8 22.6 11.4 22.5 11.1C22.4 10.7 22.2 10.4 21.9 10.1C21.6626 9.86261 21.4252 9.75045 21.1383 9.61488C21.0627 9.57918 20.9833 9.54167 20.9 9.5C20.8536 9.48453 20.8048 9.46666 20.7525 9.44752C20.4667 9.3429 20.0762 9.2 19.4 9.2ZM16 11.7C13.6 11.7 11.7 13.6 11.7 16C11.7 18.4 13.6 20.3 16 20.3C18.4 20.3 20.3 18.4 20.3 16C20.3 13.6 18.4 11.7 16 11.7ZM21.4 11.6C21.4 12.1523 20.9523 12.6 20.4 12.6C19.8477 12.6 19.4 12.1523 19.4 11.6C19.4 11.0477 19.8477 10.6 20.4 10.6C20.9523 10.6 21.4 11.0477 21.4 11.6Z"
                      fill="#C0B7E8"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16ZM12.6 7.7H19.4C20.3 7.8 20.9 7.9 21.4 8.1C22 8.4 22.4 8.6 22.9 9.1C23.4 9.6 23.7 10.1 23.9 10.6C24.1 11.1 24.3 11.7 24.3 12.6V19.4C24.2 20.3 24.1 20.9 23.9 21.4C23.6 22 23.4 22.4 22.9 22.9C22.4 23.4 21.9 23.7 21.4 23.9C20.9 24.1 20.3 24.3 19.4 24.3H12.6C11.7 24.2 11.1 24.1 10.6 23.9C10 23.6 9.6 23.4 9.1 22.9C8.6 22.4 8.3 21.9 8.1 21.4C7.9 20.9 7.7 20.3 7.7 19.4V12.6C7.8 11.7 7.9 11.1 8.1 10.6C8.4 10 8.6 9.6 9.1 9.1C9.6 8.6 10.1 8.3 10.6 8.1C11.1 7.9 11.7 7.7 12.6 7.7Z"
                      fill="#C0B7E8"
                    />
                  </svg>
                </a>
                <a href="" className="jc-hover">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18.6 16L14.4 13.6V18.4L18.6 16Z" fill="#C0B7E8" />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16ZM22.2 10.7C22.9 10.9 23.4 11.4 23.6 12.1C24 13.4 24 16 24 16C24 16 24 18.6 23.7 19.9C23.5 20.6 23 21.1 22.3 21.3C21 21.6 16 21.6 16 21.6C16 21.6 10.9 21.6 9.7 21.3C9 21.1 8.5 20.6 8.3 19.9C8 18.6 8 16 8 16C8 16 8 13.4 8.2 12.1C8.4 11.4 8.90001 10.9 9.60001 10.7C10.9 10.4 15.9 10.4 15.9 10.4C15.9 10.4 21 10.4 22.2 10.7Z"
                      fill="#C0B7E8"
                    />
                  </svg>
                </a>
              </div>
              <button className="jc-btn jc-bg-linear mt-[50px] jc-text-sm">
                BUILD YOUR RESUME
              </button>
            </div>
            <div className="col-span-full footer__line-w mt-[20px] "></div>
            <div className="col-span-full footer__copyright text-white/80 jc-text-sm text-center">
              <p>2025 © JustRS - Binh Tran - All rights reserved</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
