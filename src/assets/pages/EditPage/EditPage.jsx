import React, { Suspense, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Templates } from "../../template/templateMap.jsx";

import "./EditPage.css";

import {
  FormPersonalDetails,
  FormSkills,
  FormSummary,
  FormLanguages,
} from "../../components/Forms";
import FormExperience from "../../components/Forms/FormExperience";
import FormEducation from "../../components/Forms/FormEducation";
import FormProjects from "../../components/Forms/FormProjects";
import { useNavigate } from "react-router-dom";

import PreviewTemplateLT from "../../template/PreviewTemplateLT.jsx";

export default function EditPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userTemplate = useSelector((state) => state.user.userTemplate);
  // const PreviewTemplate = Templates[userTemplate];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const PersonalRef = useRef();
  const SkillsRef = useRef();
  const SummaryRef = useRef();
  const LanguagesRef = useRef();
  const ExperienceRef = useRef();
  const EducationRef = useRef();
  const ProjectRef = useRef();

  const scrollToView = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <div className="">
        <div className="jc-grid bg-[#302c42]">
          <div className="jc-form col-span-12 lg:col-span-7 xl:col-span-6   flex space-y-[4px] relative  flex-col">
            <div className="jc-breadcrumb shadow-lg flex justify-between sticky z-10 top-0 px-[32px] py-[20px] text-[#19a1f0]  bg-white rounded-b-[4px]">
              <button
                className="jc-link"
                onClick={() => navigate("/templates")}
              >{`< Back`}</button>
              <button
                className="jc-link"
                onClick={openModal}
              >{`Preview >`}</button>
            </div>
            {/* sm:grid sm:grid-cols-12 sm:gap-[4px] */}
            <div className=" flex flex-nowrap relative">
              {/* sm:col-span-1 */}
              <div className=" hidden sm:block sticky top-0   w-fit z-40 ">
                <div className="  bg-white rounded-r-[4px]   absolute top-0 w-full z-50 transition-all duration-100 ease-in-out ">
                  <div
                    className="flex flex-col overflow-hidden bg-white rounded-r-[4px]  transition-all duration-100 ease-in-out  
                  w-[45px] hover:w-[200px] 
                  hover:border-r-2 hover:border-b-2 items-start 
                  py-[20px]  pl-[10px]  space-y-[2px]  "
                  >
                    <button
                      onClick={() => scrollToView(PersonalRef)}
                      className="flex items-center  py-[12px]  jc-text-gray hover:jc-text-black bg-white transition-all duration-100 ease-in-out"
                    >
                      <div className="sidebar-icon">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 48 48"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>user-data</title>
                          <g id="Layer_2" data-name="Layer 2">
                            <g id="invisible_box" data-name="invisible box">
                              <rect width="48" height="48" fill="none" />
                            </g>
                            <g id="Q3_icons" data-name="Q3 icons">
                              <g>
                                <circle cx="14" cy="31" r="2" />
                                <path d="M34,29H22a2,2,0,0,0,0,4H34a2,2,0,0,0,0-4Z" />
                                <circle cx="14" cy="37" r="2" />
                                <path d="M34,35H22a2,2,0,0,0,0,4H34a2,2,0,0,0,0-4Z" />
                                <path d="M24,14a6,6,0,1,0-6-6A6,6,0,0,0,24,14Zm0-8a2,2,0,1,1-2,2A2,2,0,0,1,24,6Z" />
                                <path d="M13,20v4a2,2,0,0,0,2,2H33a2,2,0,0,0,2-2V20a18,18,0,0,0-11-4A18,18,0,0,0,13,20Zm4.1,2A13.5,13.5,0,0,1,24,20a13.5,13.5,0,0,1,6.9,2Z" />
                                <path d="M41,2H36a2,2,0,0,0,0,4h4V42H8V6h4a2,2,0,0,0,0-4H7A2.9,2.9,0,0,0,4,5V43a2.9,2.9,0,0,0,3,3H41a2.9,2.9,0,0,0,3-3V5A2.9,2.9,0,0,0,41,2Z" />
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div className="sidebar__tag text-[15px] font-[600] ml-[10px] text-nowrap">
                        Personal Details
                      </div>
                    </button>
                    <button
                      onClick={() => scrollToView(SummaryRef)}
                      className="flex items-center  py-[12px]  jc-text-gray hover:jc-text-black bg-white transition-all duration-100 ease-in-out"
                    >
                      <div className="sidebar-icon">
                        <svg
                          fill="currentColor"
                          width="24px"
                          height="24px"
                          viewBox="0 0 32 32"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect x="19" y="10" width="7" height="2" />
                          <rect x="19" y="15" width="7" height="2" />
                          <rect x="19" y="20" width="7" height="2" />
                          <rect x="6" y="10" width="7" height="2" />
                          <rect x="6" y="15" width="7" height="2" />
                          <rect x="6" y="20" width="7" height="2" />
                          <path d="M28,5H4A2.002,2.002,0,0,0,2,7V25a2.002,2.002,0,0,0,2,2H28a2.002,2.002,0,0,0,2-2V7A2.002,2.002,0,0,0,28,5ZM4,7H15V25H4ZM17,25V7H28V25Z" />
                          <rect width="32" height="32" fill="none" />
                        </svg>
                      </div>
                      <div className="sidebar__tag text-[15px] font-[600] ml-[10px] text-nowrap">
                        Summary
                      </div>
                    </button>
                    <button
                      onClick={() => scrollToView(SkillsRef)}
                      className="flex items-center  py-[12px]  jc-text-gray hover:jc-text-black bg-white transition-all duration-100 ease-in-out"
                    >
                      <div className="sidebar-icon">
                        <svg
                          fill="currentColor"
                          height="24px"
                          width="24px"
                          version="1.1"
                          id="Layer_1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          viewBox="0 0 512 512"
                          xml:space="preserve"
                        >
                          <g>
                            <g>
                              <g>
                                <path
                                  d="M268.18,162.303l-2.993,21.876c-0.55,4.023,1.157,8.023,4.441,10.41c1.918,1.393,4.191,2.105,6.479,2.105
				c1.631,0,3.272-0.363,4.794-1.098l19.88-9.605l19.88,9.605c3.656,1.767,7.985,1.38,11.272-1.007
				c3.284-2.387,4.991-6.386,4.441-10.408l-2.992-21.876l15.278-15.94c2.81-2.931,3.781-7.17,2.526-11.031
				c-1.255-3.861-4.531-6.72-8.527-7.44l-21.729-3.914l-10.439-19.457c-1.919-3.578-5.65-5.81-9.711-5.81
				c-4.061,0-7.791,2.233-9.711,5.81l-10.439,19.457l-21.729,3.914c-3.995,0.72-7.272,3.579-8.526,7.44
				c-1.255,3.861-0.284,8.101,2.526,11.031L268.18,162.303z M289.779,144.725c3.31-0.597,6.168-2.672,7.757-5.636l3.244-6.047
				l3.244,6.047c1.589,2.963,4.447,5.039,7.757,5.636l6.753,1.217l-4.749,4.954c-2.327,2.429-3.419,5.787-2.963,9.119l0.93,6.798
				l-6.178-2.985c-1.514-0.732-3.154-1.098-4.795-1.098s-3.281,0.366-4.795,1.098l-6.178,2.984l0.931-6.797
				c0.455-3.333-0.636-6.691-2.963-9.119l-4.749-4.955L289.779,144.725z"
                                />
                                <path
                                  d="M171.294,136.681h51.244c6.085,0,11.02-4.934,11.02-11.02s-4.935-11.02-11.02-11.02h-51.244
				c-6.085,0-11.02,4.934-11.02,11.02S165.209,136.681,171.294,136.681z"
                                />
                                <path
                                  d="M171.294,180.762h51.244c6.085,0,11.02-4.934,11.02-11.02c0-6.086-4.935-11.02-11.02-11.02h-51.244
				c-6.085,0-11.02,4.934-11.02,11.02C160.274,175.828,165.209,180.762,171.294,180.762z"
                                />
                                <path
                                  d="M268.18,276.814l-2.993,21.876c-0.55,4.022,1.157,8.023,4.441,10.409c3.285,2.388,7.615,2.774,11.273,1.007l19.88-9.605
				l19.88,9.605c1.523,0.735,3.161,1.098,4.794,1.098c2.288,0,4.562-0.712,6.479-2.105c3.284-2.387,4.991-6.386,4.441-10.409
				l-2.992-21.876l15.278-15.94c2.81-2.931,3.781-7.17,2.526-11.031c-1.255-3.861-4.531-6.72-8.527-7.44l-21.729-3.914
				l-10.439-19.457c-1.919-3.578-5.65-5.81-9.711-5.81c-4.061,0-7.791,2.233-9.711,5.81l-10.439,19.457l-21.729,3.914
				c-3.995,0.72-7.272,3.579-8.526,7.44c-1.255,3.861-0.284,8.101,2.526,11.031L268.18,276.814z M289.779,259.237
				c3.31-0.597,6.168-2.672,7.757-5.636l3.244-6.047l3.244,6.047c1.589,2.963,4.447,5.04,7.757,5.636l6.753,1.217l-4.749,4.954
				c-2.327,2.429-3.419,5.787-2.963,9.119l0.93,6.799l-6.178-2.985c-1.514-0.732-3.154-1.098-4.795-1.098s-3.281,0.366-4.795,1.098
				l-6.178,2.984l0.931-6.798c0.455-3.332-0.636-6.691-2.963-9.119l-4.749-4.955L289.779,259.237z"
                                />
                                <path
                                  d="M171.294,251.194h51.244c6.085,0,11.02-4.934,11.02-11.02s-4.935-11.02-11.02-11.02h-51.244
				c-6.085,0-11.02,4.934-11.02,11.02S165.209,251.194,171.294,251.194z"
                                />
                                <path
                                  d="M171.294,295.274h51.244c6.085,0,11.02-4.934,11.02-11.02s-4.935-11.02-11.02-11.02h-51.244
				c-6.085,0-11.02,4.934-11.02,11.02C160.274,290.34,165.209,295.274,171.294,295.274z"
                                />
                                <path
                                  d="M268.18,391.328l-2.993,21.875c-0.55,4.022,1.157,8.023,4.441,10.409c1.918,1.394,4.191,2.105,6.479,2.105
				c1.631,0,3.272-0.363,4.794-1.098l19.88-9.605l19.88,9.605c3.656,1.767,7.987,1.379,11.272-1.007s4.991-6.386,4.441-10.409
				l-2.992-21.876l15.278-15.939c2.81-2.931,3.781-7.17,2.526-11.031c-1.255-3.861-4.53-6.721-8.526-7.44l-21.731-3.915
				l-10.439-19.457c-1.919-3.578-5.65-5.81-9.711-5.81c-4.061,0-7.791,2.233-9.711,5.81l-10.439,19.457l-21.729,3.915
				c-3.996,0.72-7.272,3.578-8.526,7.44c-1.255,3.861-0.284,8.1,2.526,11.031L268.18,391.328z M289.781,373.748
				c3.31-0.596,6.167-2.671,7.756-5.636l3.244-6.047l3.244,6.047c1.589,2.963,4.445,5.039,7.756,5.636l6.754,1.217l-4.749,4.953
				c-2.327,2.428-3.419,5.786-2.963,9.119l0.93,6.799l-6.178-2.985c-1.514-0.732-3.154-1.098-4.795-1.098s-3.281,0.366-4.795,1.098
				l-6.178,2.985l0.931-6.798c0.455-3.332-0.636-6.691-2.963-9.119l-4.749-4.954L289.781,373.748z"
                                />
                                <path
                                  d="M171.294,365.706h51.244c6.085,0,11.02-4.934,11.02-11.02s-4.935-11.02-11.02-11.02h-51.244
				c-6.085,0-11.02,4.934-11.02,11.02S165.209,365.706,171.294,365.706z"
                                />
                                <path
                                  d="M171.294,409.786h51.244c6.085,0,11.02-4.934,11.02-11.02s-4.935-11.02-11.02-11.02h-51.244
				c-6.085,0-11.02,4.934-11.02,11.02S165.209,409.786,171.294,409.786z"
                                />
                                <path
                                  d="M424.509,16.53h-77.593v-5.51c0-6.086-4.935-11.02-11.02-11.02H176.105c-6.085,0-11.02,4.934-11.02,11.02v5.51H87.491
				c-6.085,0-11.02,4.934-11.02,11.02v473.43c0,6.086,4.935,11.02,11.02,11.02h337.018c6.085,0,11.02-4.934,11.02-11.02V27.55
				C435.529,21.464,430.596,16.53,424.509,16.53z M187.125,22.04h137.751v38.57H187.125V22.04z M369.409,82.651v363.228H142.591
				V82.651H369.409z M413.489,489.96H98.511V38.57h66.574v22.04h-33.513c-6.085,0-11.02,4.934-11.02,11.02v385.269
				c0,6.086,4.935,11.02,11.02,11.02h248.857c6.085,0,11.02-4.934,11.02-11.02V71.631c0-6.086-4.935-11.02-11.02-11.02h-33.512
				V38.57h66.573V489.96z"
                                />
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div className="sidebar__tag text-[15px] font-[600] ml-[10px] text-nowrap">
                        Skills
                      </div>
                    </button>
                    <button
                      onClick={() => scrollToView(LanguagesRef)}
                      className="flex items-center  py-[12px]  jc-text-gray hover:jc-text-black bg-white transition-all duration-100 ease-in-out"
                    >
                      <div className="sidebar-icon">
                        <svg
                          fill="currentColor"
                          width="24px"
                          height="24px"
                          viewBox="0 0 36 36"
                          version="1.1"
                          preserveAspectRatio="xMidYMid meet"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                        >
                          <title>language-line</title>
                          <path
                            d="M30,3H14v5h2V5h14c0.6,0,1,0.4,1,1v11c0,0.6-0.4,1-1,1H17v7h-5.3L8,27.9V25H5c-0.6,0-1-0.4-1-1V13c0-0.6,0.4-1,1-1h13v-2H5
		c-1.7,0-3,1.3-3,3v11c0,1.7,1.3,3,3,3h1v5.1l6.3-5.1H19v-7h11c1.7,0,3-1.3,3-3V6C33,4.3,31.7,3,30,3z"
                            class="clr-i-outline clr-i-outline-path-1"
                          ></path>
                          <path
                            d="M6.2,22.9h2.4l0.6-1.6h3.1l0.6,1.6h2.4L11.9,14H9.5L6.2,22.9z M10.7,16.5l1,3.1h-2L10.7,16.5z"
                            class="clr-i-outline clr-i-outline-path-2"
                          ></path>
                          <path
                            d="M20,17c1.1,0,2.6-0.3,4-1c1.4,0.7,3,1,4,1v-2c0,0-1,0-2.1-0.4c1.2-1.2,2.1-3,2.1-5.6V8h-3V6h-2v2h-3v2h5.9
		c-0.2,1.8-1,2.9-1.9,3.6c-0.6-0.5-1.2-1.2-1.6-2.1h-2.1c0.4,1.3,1,2.3,1.8,3.1C21.1,15,20.2,15,20,15V17z"
                            class="clr-i-outline clr-i-outline-path-3"
                          ></path>
                          <rect
                            x="0"
                            y="0"
                            width="36"
                            height="36"
                            fill-opacity="0"
                          />
                        </svg>
                      </div>
                      <div className="sidebar__tag text-[15px] font-[600] ml-[10px] text-nowrap">
                        Languages
                      </div>
                    </button>
                    <button
                      onClick={() => scrollToView(ExperienceRef)}
                      className="flex items-center  py-[12px]  jc-text-gray hover:jc-text-black bg-white transition-all duration-100 ease-in-out"
                    >
                      <div className="sidebar-icon">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 7H7M6 10H7M11 10H12M11 13H12M6 13H7M11 7H12M7 21V18C7 16.8954 7.89543 16 9 16C10.1046 16 11 16.8954 11 18V21H7ZM7 21H3V4.6C3 4.03995 3 3.75992 3.10899 3.54601C3.20487 3.35785 3.35785 3.20487 3.54601 3.10899C3.75992 3 4.03995 3 4.6 3H13.4C13.9601 3 14.2401 3 14.454 3.10899C14.6422 3.20487 14.7951 3.35785 14.891 3.54601C15 3.75992 15 4.03995 15 4.6V9M19.7 13.5C19.7 14.3284 19.0284 15 18.2 15C17.3716 15 16.7 14.3284 16.7 13.5C16.7 12.6716 17.3716 12 18.2 12C19.0284 12 19.7 12.6716 19.7 13.5ZM21.5 21V20.5C21.5 19.1193 20.3807 18 19 18H17.5C16.1193 18 15 19.1193 15 20.5V21H21.5Z"
                            stroke="#c1c1c1"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="sidebar__tag text-[15px] font-[600] ml-[10px] text-nowrap">
                        Experience
                      </div>
                    </button>
                    <button
                      onClick={() => scrollToView(EducationRef)}
                      className="flex items-center  py-[12px]  jc-text-gray hover:jc-text-black bg-white transition-all duration-100 ease-in-out"
                    >
                      <div className="sidebar-icon">
                        <svg
                          fill="currentColor"
                          width="24px"
                          height="24px"
                          viewBox="0 0 14 14"
                          role="img"
                          focusable="false"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="m 12.499079,12.25525 c 0.0968,0 0.188377,-0.0436 0.249339,-0.11884 0.06096,-0.0752 0.08473,-0.17385 0.06473,-0.26853 l -0.202146,-0.95662 c 0.115125,-0.11137 0.187491,-0.26686 0.187491,-0.43975 0,-0.182 -0.08106,-0.34343 -0.206876,-0.45558 l 0,-3.32202 -0.810333,0.50146 0,2.82056 c -0.125815,0.11215 -0.2069,0.27358 -0.2069,0.45558 0,0.17291 0.07239,0.32841 0.187515,0.43975 l -0.20217,0.95662 c -0.02,0.0947 0.0038,0.19335 0.06473,0.26853 0.06096,0.0752 0.152539,0.11884 0.249339,0.11884 l 0.625281,0 z M 12.773741,4.75539 7.5021019,1.49209 C 7.3477151,1.39699 7.1736728,1.34925 6.9996305,1.34925 c -0.1740423,0 -0.3482077,0.0477 -0.5016586,0.14284 l -5.271713,3.2633 C 1.0854931,4.84249 0.99999905,4.99633 0.99999905,5.1619 c 0,0.1656 0.085494,0.31949 0.22625985,0.40673 l 5.2716883,3.26333 c 0.153451,0.0952 0.3276163,0.14284 0.5016586,0.14284 0.1740423,0 0.3481092,-0.0477 0.5024714,-0.14284 L 12.773741,5.56863 c 0.140766,-0.0872 0.22626,-0.24113 0.22626,-0.40673 0,-0.16557 -0.08549,-0.31946 -0.22626,-0.40651 z M 6.9996059,9.78508 c -0.3283798,0 -0.6488777,-0.0912 -0.928242,-0.26411 l -3.0750017,-1.90368 0,3.27796 c 0,0.97016 1.7931578,1.7555 4.0032436,1.7555 2.2108742,0 4.0038842,-0.78536 4.0038842,-1.7555 l 0,-3.27796 -3.0748786,1.90368 C 7.6492472,9.69388 7.3279857,9.78508 6.9996059,9.78508 Z" />
                        </svg>
                      </div>
                      <div className="sidebar__tag text-[15px] font-[600] ml-[10px] text-nowrap">
                        Education
                      </div>
                    </button>
                    <button
                      onClick={() => scrollToView(ProjectRef)}
                      className="flex items-center  py-[12px]  jc-text-gray hover:jc-text-black bg-white transition-all duration-100 ease-in-out"
                    >
                      <div className="sidebar-icon">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 1024 1024"
                          fill="currentColor"
                          class="icon"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1015.848 687.82H8.156a7.992 7.992 0 0 1-7.998-7.996 7.994 7.994 0 0 1 7.998-7.998h1007.692a7.992 7.992 0 0 1 7.996 7.998 7.992 7.992 0 0 1-7.996 7.996zM512 767.766c-17.636 0-31.99-14.34-31.99-31.99s14.354-31.99 31.99-31.99 31.992 14.34 31.992 31.99-14.356 31.99-31.992 31.99z m0-47.984c-8.826 0-15.996 7.184-15.996 15.994s7.17 15.994 15.996 15.994c8.824 0 15.996-7.184 15.996-15.994s-7.172-15.994-15.996-15.994zM376.136 975.732a8.01 8.01 0 0 1-7.81-9.73l31.99-143.956c0.954-4.296 5.202-6.984 9.544-6.078a8.014 8.014 0 0 1 6.078 9.544l-31.99 143.956a8.004 8.004 0 0 1-7.812 6.264zM647.864 975.732a8 8 0 0 1-7.808-6.264l-31.988-143.956a8.01 8.01 0 0 1 6.074-9.544c4.376-0.906 8.59 1.782 9.542 6.078l31.992 143.956a8.008 8.008 0 0 1-7.812 9.73z"
                            fill=""
                          />
                          <path
                            d="M671.954 975.732H352.05a7.992 7.992 0 0 1-7.998-7.998 7.992 7.992 0 0 1 7.998-7.996h319.904a7.992 7.992 0 0 1 7.996 7.996 7.992 7.992 0 0 1-7.996 7.998zM967.86 640.086H56.14a7.994 7.994 0 0 1-7.998-7.998V104.25a7.994 7.994 0 0 1 7.998-7.998h911.72c4.422 0 8 3.578 8 7.998v527.838a7.994 7.994 0 0 1-8 7.998z m-903.722-15.996h895.726V112.248H64.138v511.842z"
                            fill=""
                          />
                          <path
                            d="M967.86 800.038H56.14c-30.866 0-55.982-25.118-55.982-55.982V104.25c0-30.866 25.118-55.982 55.982-55.982h911.72c30.868 0 55.984 25.118 55.984 55.982v639.804c0 30.866-25.118 55.984-55.984 55.984zM56.14 64.262c-22.056 0-39.988 17.94-39.988 39.988v639.804c0 22.054 17.932 39.986 39.988 39.986h911.72c22.058 0 39.988-17.932 39.988-39.986V104.25c0-22.048-17.93-39.988-39.988-39.988H56.14z"
                            fill=""
                          />
                          <path
                            d="M967.86 831.778H56.14c-31.396 0-55.982-24.586-55.982-55.982v-31.99a7.994 7.994 0 0 1 7.998-7.998 7.994 7.994 0 0 1 7.998 7.998v31.99c0 22.43 17.558 39.986 39.988 39.986h911.72c22.434 0 39.988-17.556 39.988-39.986v-31.74a7.994 7.994 0 0 1 8-7.998 7.992 7.992 0 0 1 7.996 7.998v31.74c-0.002 31.396-24.588 55.982-55.986 55.982zM88.13 640.086a7.994 7.994 0 0 1-7.998-7.998V104.25a7.994 7.994 0 0 1 7.998-7.998 7.994 7.994 0 0 1 7.998 7.998v527.838a7.994 7.994 0 0 1-7.998 7.998z"
                            fill=""
                          />
                          <path
                            d="M72.136 160.232H56.14c-4.42 0-7.998-3.576-7.998-7.998s3.578-7.998 7.998-7.998h15.996c4.42 0 7.998 3.576 7.998 7.998s-3.578 7.998-7.998 7.998zM72.136 208.218H56.14c-4.42 0-7.998-3.578-7.998-7.998s3.578-7.998 7.998-7.998h15.996c4.42 0 7.998 3.578 7.998 7.998s-3.578 7.998-7.998 7.998zM72.136 256.204H56.14c-4.42 0-7.998-3.576-7.998-7.998s3.578-7.998 7.998-7.998h15.996c4.42 0 7.998 3.576 7.998 7.998s-3.578 7.998-7.998 7.998zM72.136 304.19H56.14c-4.42 0-7.998-3.578-7.998-7.998s3.578-7.998 7.998-7.998h15.996c4.42 0 7.998 3.578 7.998 7.998s-3.578 7.998-7.998 7.998zM72.136 352.174H56.14c-4.42 0-7.998-3.576-7.998-7.998s3.578-7.998 7.998-7.998h15.996c4.42 0 7.998 3.576 7.998 7.998s-3.578 7.998-7.998 7.998zM72.136 400.16H56.14a7.994 7.994 0 0 1-7.998-7.998 7.994 7.994 0 0 1 7.998-7.998h15.996a7.994 7.994 0 0 1 7.998 7.998 7.996 7.996 0 0 1-7.998 7.998zM72.136 448.144H56.14a7.994 7.994 0 0 1-7.998-7.998 7.994 7.994 0 0 1 7.998-7.998h15.996a7.994 7.994 0 0 1 7.998 7.998 7.994 7.994 0 0 1-7.998 7.998zM72.136 496.13H56.14a7.994 7.994 0 0 1-7.998-7.998 7.994 7.994 0 0 1 7.998-7.998h15.996a7.994 7.994 0 0 1 7.998 7.998 7.996 7.996 0 0 1-7.998 7.998zM72.136 544.116H56.14a7.994 7.994 0 0 1-7.998-7.998 7.992 7.992 0 0 1 7.998-7.996h15.996a7.992 7.992 0 0 1 7.998 7.996 7.994 7.994 0 0 1-7.998 7.998zM72.136 592.102H56.14c-4.42 0-7.998-3.578-7.998-7.998s3.578-7.998 7.998-7.998h15.996c4.42 0 7.998 3.578 7.998 7.998s-3.578 7.998-7.998 7.998zM200.096 160.232h-63.98c-4.42 0-7.998-3.576-7.998-7.998s3.576-7.998 7.998-7.998h63.98c4.42 0 7.998 3.576 7.998 7.998s-3.578 7.998-7.998 7.998zM456.016 208.218h-191.94c-4.42 0-7.998-3.578-7.998-7.998s3.576-7.998 7.998-7.998h191.94c4.422 0 7.998 3.578 7.998 7.998s-3.576 7.998-7.998 7.998zM232.086 208.218H152.11c-4.42 0-7.998-3.578-7.998-7.998s3.578-7.998 7.998-7.998h79.976c4.42 0 7.998 3.578 7.998 7.998s-3.578 7.998-7.998 7.998zM456.016 256.204h-15.994c-4.42 0-7.998-3.576-7.998-7.998s3.578-7.998 7.998-7.998h15.994c4.422 0 7.998 3.576 7.998 7.998s-3.576 7.998-7.998 7.998zM408.032 256.204H168.106c-4.42 0-7.998-3.576-7.998-7.998s3.576-7.998 7.998-7.998h239.926c4.42 0 7.998 3.576 7.998 7.998s-3.578 7.998-7.998 7.998zM216.09 352.174H168.106c-4.42 0-7.998-3.576-7.998-7.998s3.576-7.998 7.998-7.998h47.986c4.42 0 7.998 3.576 7.998 7.998s-3.58 7.998-8 7.998zM456.016 352.174H248.082c-4.42 0-7.998-3.576-7.998-7.998s3.578-7.998 7.998-7.998h207.936c4.422 0 7.998 3.576 7.998 7.998s-3.578 7.998-8 7.998zM456.016 304.19H184.1c-4.42 0-7.998-3.578-7.998-7.998s3.578-7.998 7.998-7.998h271.916c4.422 0 7.998 3.578 7.998 7.998s-3.576 7.998-7.998 7.998zM456.016 400.16h-63.98a7.994 7.994 0 0 1-7.998-7.998 7.994 7.994 0 0 1 7.998-7.998h63.98a7.994 7.994 0 0 1 7.998 7.998 7.994 7.994 0 0 1-7.998 7.998zM408.032 448.144H152.11a7.994 7.994 0 0 1-7.998-7.998 7.994 7.994 0 0 1 7.998-7.998h255.922a7.994 7.994 0 0 1 7.998 7.998 7.994 7.994 0 0 1-7.998 7.998zM280.072 544.116h-127.96a7.994 7.994 0 0 1-7.998-7.998 7.992 7.992 0 0 1 7.998-7.996h127.96a7.992 7.992 0 0 1 7.998 7.996 7.994 7.994 0 0 1-7.998 7.998zM456.016 496.13h-79.974a7.994 7.994 0 0 1-7.998-7.998 7.994 7.994 0 0 1 7.998-7.998h79.974a7.994 7.994 0 0 1 7.998 7.998 7.994 7.994 0 0 1-7.998 7.998zM344.052 496.13H168.106a7.994 7.994 0 0 1-7.998-7.998 7.994 7.994 0 0 1 7.998-7.998h175.946a7.994 7.994 0 0 1 7.998 7.998 7.994 7.994 0 0 1-7.998 7.998zM200.096 592.102h-63.98c-4.42 0-7.998-3.578-7.998-7.998s3.576-7.998 7.998-7.998h63.98c4.42 0 7.998 3.578 7.998 7.998s-3.578 7.998-7.998 7.998zM456.016 448.144h-15.994a7.994 7.994 0 0 1-7.998-7.998 7.994 7.994 0 0 1 7.998-7.998h15.994a7.994 7.994 0 0 1 7.998 7.998 7.992 7.992 0 0 1-7.998 7.998zM360.046 400.16h-191.94a7.994 7.994 0 0 1-7.998-7.998 7.994 7.994 0 0 1 7.998-7.998h191.942a7.994 7.994 0 0 1 7.998 7.998 7.996 7.996 0 0 1-8 7.998z"
                            fill=""
                          />
                          <path
                            d="M512 640.086a7.994 7.994 0 0 1-7.998-7.998V104.25A7.994 7.994 0 0 1 512 96.252a7.992 7.992 0 0 1 7.996 7.998v527.838a7.992 7.992 0 0 1-7.996 7.998z"
                            fill=""
                          />
                          <path
                            d="M903.878 544.116a7.984 7.984 0 0 1-6.7-3.638l-97.27-149.634-97.266 149.634c-2.39 3.732-7.372 4.748-11.058 2.358a8.012 8.012 0 0 1-2.344-11.074l103.968-159.952c2.938-4.544 10.464-4.544 13.402 0l103.968 159.952a8.012 8.012 0 0 1-2.344 11.074c-1.34 0.872-2.856 1.28-4.356 1.28z"
                            fill=""
                          />
                          <path
                            d="M631.964 544.116a7.998 7.998 0 0 1-6.656-12.434l63.98-95.876a8 8 0 0 1 13.308 0l31.524 47.25a8 8 0 0 1-2.218 11.09c-3.672 2.42-8.636 1.468-11.09-2.218l-24.868-37.278-57.328 85.904a7.99 7.99 0 0 1-6.652 3.562zM631.964 432.15c-22.058 0-39.988-17.94-39.988-39.988s17.93-39.988 39.988-39.988c22.054 0 39.988 17.94 39.988 39.988 0.002 22.048-17.932 39.988-39.988 39.988z m0-63.98c-13.23 0-23.992 10.762-23.992 23.992s10.762 23.992 23.992 23.992 23.992-10.762 23.992-23.992-10.76-23.992-23.992-23.992z"
                            fill=""
                          />
                          <path
                            d="M919.876 544.116H567.984c-4.422 0-8-3.576-8-7.998V328.182a7.994 7.994 0 0 1 8-7.998h351.89a7.992 7.992 0 0 1 7.996 7.998v207.936a7.988 7.988 0 0 1-7.994 7.998z m-343.896-15.994h335.898V336.18H575.98v191.942z"
                            fill=""
                          />
                          <path
                            d="M919.876 160.232H567.984c-4.422 0-8-3.576-8-7.998s3.578-7.998 8-7.998h351.89c4.422 0 7.996 3.576 7.996 7.998s-3.574 7.998-7.994 7.998z"
                            fill=""
                          />
                          <path
                            d="M919.876 288.194a7.99 7.99 0 0 1-7.996-7.998v-127.96c0-4.42 3.574-7.998 7.996-7.998s7.996 3.576 7.996 7.998v127.96a7.992 7.992 0 0 1-7.996 7.998z"
                            fill=""
                          />
                          <path
                            d="M919.876 288.194H567.984c-4.422 0-8-3.576-8-7.998s3.578-7.998 8-7.998h351.89c4.422 0 7.996 3.576 7.996 7.998s-3.574 7.998-7.994 7.998z"
                            fill=""
                          />
                          <path
                            d="M871.89 224.212H567.984c-4.422 0-8-3.576-8-7.998s3.578-7.998 8-7.998h303.906c4.418 0 7.996 3.576 7.996 7.998s-3.578 7.998-7.996 7.998z"
                            fill=""
                          />
                          <path
                            d="M919.876 592.102H567.984c-4.422 0-8-3.578-8-7.998s3.578-7.998 8-7.998h351.89c4.422 0 7.996 3.578 7.996 7.998s-3.574 7.998-7.994 7.998z"
                            fill=""
                          />
                        </svg>
                      </div>
                      <div className="sidebar__tag text-[15px] font-[600] ml-[10px] text-nowrap">
                        Projects
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              {/* sm:col-span-11 */}
              <div className=" sm:ml-[49px]  flex space-y-[4px] flex-col h-[calc(100vh-68px)] overflow-y-scroll relative z-0">
                <div className="" ref={PersonalRef}>
                  <FormPersonalDetails />
                </div>
                <div className="" ref={SummaryRef}>
                  <FormSummary />
                </div>

                <div className="" ref={SkillsRef}>
                  <FormSkills />
                </div>
                <div className="" ref={LanguagesRef}>
                  <FormLanguages />
                </div>
                <div className="" ref={ExperienceRef}>
                  <FormExperience />
                </div>
                <div className="" ref={EducationRef}>
                  <FormEducation />
                </div>
                <div className="" ref={ProjectRef}>
                  <FormProjects />
                </div>
              </div>
            </div>
          </div>

          <PreviewTemplateLT
            template={userTemplate}
            onCloseModal={closeModal}
            onOpenModal={openModal}
            isModalOpen={isModalOpen}
          />

          {/* <div className="hidden lg:flex fixed top-0 right-0 w-1/2 h-full  justify-center al ">
            <ModalPreviewTemplate />
          </div> */}
        </div>
      </div>
    </div>
  );
}
