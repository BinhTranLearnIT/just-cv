import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Templates } from "./templateMap.jsx";
import { useReactToPrint } from "react-to-print";
export default function PreviewTemplateLT({
  template,

  onCloseModal,
  onOpenModal,
  isModalOpen,

  ...props
}) {
  const userTemplate = useSelector((state) => state.user.userTemplate);
  const Template = Templates[userTemplate];

  // --- scale template ---
  const containerRef = useRef();
  const containerModal = useRef();
  const contentModal = useRef();
  const contentRef = useRef();

  const [scale, setScale] = useState(1);
  const [scaleForModal, setScaleForModal] = useState(1);

  const [containerHeight, setContainerHeight] = useState(1);
  const [containerWidth, setContainerWidth] = useState(1);
  const [contentHeight, setContentHeight] = useState(1);
  const [contentWidth, setContentWidth] = useState(816);
  const [contentModalWidth, setContentModalWidth] = useState(1);
  const [contentModalHeight, setContentModalHeight] = useState(1);
  const [modalWidth, setModalWidth] = useState(1);
  const [modalHeight, setModalHeight] = useState(undefined);

  useEffect(() => {
    setContainerHeight(containerRef.current.offsetHeight);
    setContainerWidth(containerRef.current.offsetWidth);
    setContentHeight(contentRef.current.offsetHeight);
    // setContentWidth(containerRef.current.offsetWidth);

    const handleResize = () => {
      if (containerRef.current) {
        const newHeight = containerRef.current.offsetHeight;
        if (newHeight !== containerHeight) {
          console.log("container Height change");

          setContainerHeight(newHeight);
        }
        const newWidth = containerRef.current.offsetWidth;
        if (newWidth !== containerWidth) {
          console.log("container Width change");

          setContainerWidth(newWidth);
        }
      }
      // if (containerModal.current) {
      //   const newModalWidth = containerModal.current.offsetWidth;
      //   //console.log(newModalWidth);

      //   if (newModalWidth !== modalWidth) {
      //     console.log("container Modal Width change");

      //     setModalWidth(newModalWidth);
      //   }
      // }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // --- Watching when template size change---
  useEffect(() => {
    if (!contentRef.current) return;
    const observer = new ResizeObserver(() => {
      const height = contentRef.current.offsetHeight;
      const width = contentRef.current.offsetWidth;

      setContentHeight(height);
      setContentWidth(width);
      console.log("Chieu cao cua template la: ", height);
      console.log("Chieu rong cua template la: ", width);
    });
    observer.observe(contentRef.current);
    return () => observer.disconnect();
  }, []);
  // --- Watching when modal open ---
  useEffect(() => {
    if (isModalOpen) {
      setModalWidth(containerModal.current.offsetWidth);
      setModalHeight(containerModal.current.offsetHeight);
      setContentModalWidth(contentModal.current.offsetWidth);
      setContentModalHeight(contentModal.current?.offsetHeight);
    }
  }, [isModalOpen]);
  // --- scale when size change ---
  useEffect(() => {
    const scaleByWidth = containerWidth / contentWidth;
    const scaleByHeight = containerHeight / contentHeight;
    if (scaleByHeight > scaleByWidth) {
      console.log("Width ne");

      console.log("containerHeight :", containerHeight);
      console.log("containerWidth :", containerWidth);
      console.log("contentHeight :", contentHeight);
      console.log("contentWidth :", contentWidth);

      setScale(scaleByWidth);
    } else {
      console.log("Height ne");
      console.log("containerHeight :", containerHeight);
      console.log("containerWidth :", containerWidth);
      console.log("contentHeight :", contentHeight);
      console.log("contentWidth :", contentWidth);
      setScale(scaleByHeight);
    }
    if (isModalOpen) {
      const scaleModalByWidth = modalWidth / contentModalWidth;
      setScaleForModal(scaleModalByWidth);
      if (modalHeight > contentModalHeight * scaleModalByWidth) {
        setModalHeight(contentModalHeight * scaleModalByWidth);
      }
    }
  }, [
    containerHeight,
    contentHeight,
    containerWidth,
    contentWidth,
    modalWidth,
    contentModalWidth,
  ]);
  // useEffect(() => {
  //   if (contentHeight > containerHeight) {
  //     if (containerWidth < containerWidth * (containerHeight / contentHeight)) {
  //       setScale(containerWidth / contentWidth);
  //     } else {
  //       console.log("scale ne");

  //       setScale(containerHeight / contentHeight);
  //     }

  //     //console.log(containerHeight / contentHeight);
  //     //console.log(containerWidth / contentWidth);
  //   } else {
  //     setScale(1);
  //   }
  //   if (contentWidth > modalWidth) {
  //     console.log("Scale cho modal ne: ", modalWidth / contentWidth);

  //     setScaleForModal(modalWidth / contentWidth);
  //   } else {
  //     setScaleForModal(1);
  //   }
  // }, [containerHeight, contentHeight, containerWidth, modalWidth]);
  useEffect(
    () => {
      if (contentHeight > containerHeight) {
        const scaleHeight = containerHeight / contentHeight;
        const scaleWidth = containerWidth / contentWidth;

        if (containerWidth < containerWidth * scaleHeight) {
          console.log("Scaling based on width");
          setScale(scaleWidth);
        } else {
          console.log("Scaling based on height");
          setScale(scaleHeight);
        }
      } else {
        setScale(1);
      }
      // if (isModalOpen) {
      //   setModalWidth(containerModal?.current.offsetWidth);
      //   setContentModalWidth(contentModal?.current.offsetWidth);
      //   setContentHeight(contentModal.current?.offsetHeight);
      //   if (contentModalWidth > modalWidth) {
      //     const modalScale = modalWidth / contentModalWidth;

      //     console.log("Scale for modal: ", modalScale);

      //     setScaleForModal(modalScale);
      //     setModalHeight(contentHeight * modalScale);
      //   } else {
      //     console.log("Modal scale reset to 1");
      //     setModalHeight(undefined);
      //     setScaleForModal(1);
      //   }
      // }
      //console.log(contentModalWidth);
      // console.log(modalWidth);
      // console.log("modal Height:", modalHeight);
      // console.log("content Height :", contentHeight);
    },
    [
      // containerHeight,
      // contentHeight,
      // containerWidth,
      // contentWidth,
      // modalWidth,
      // contentModalWidth,
    ]
  );

  // --- React To Print ---

  const handlePrint = useReactToPrint({
    content: () => {
      if (!contentRef.current) {
        console.error("Resume is null");
        return null;
      }
      return contentRef.current;
    },
    documentTitle: "JustRS-BuildYourResume", // Optional
    contentRef: contentRef,
    onAfterPrint: () => console.log("Printed successfully!"), // Optional
  });

  //  ---- Modal ---

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Clean up in case modal is closed or unmounted
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  const closeModal = () => {
    onCloseModal();
  };
  const openModal = () => {
    onOpenModal();
  };
  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 w-full max-h-full  bg-[#302c42] z-30 ">
          <div className="modal max-w-[900px] w-full md:my-[20px]  md:h-[calc(100vh-40px)] lg:my-[50px] xl:my-[60px] bg-white h-screen lg:h-[calc(100vh-100px)]  xl:h-[calc(100vh-120px)] mx-auto flex flex-col md:rounded-[8px] lg:rounded-[16px]">
            <div className="modal__header shrink-0 flex justify-between border-b-2 place-items-start   p-[20px]">
              <div className="header__name text-[32px] font-[600] jc-text-linear">
                JustRs
              </div>
              <button
                className="header__close-btn p-[12px] text-[#cccccc] hover:text-black"
                onClick={closeModal}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.0966 12L18.7666 6.32999C18.894 6.1812 18.9606 5.98981 18.953 5.79406C18.9455 5.59832 18.8643 5.41263 18.7258 5.27411C18.5873 5.13559 18.4016 5.05445 18.2059 5.04689C18.0101 5.03932 17.8187 5.10591 17.6699 5.23333L11.9999 10.9033L6.32993 5.22555C6.18114 5.09813 5.98974 5.03155 5.79399 5.03911C5.59825 5.04667 5.41256 5.12782 5.27404 5.26633C5.13552 5.40485 5.05438 5.59054 5.04682 5.78629C5.03926 5.98203 5.10584 6.17343 5.23326 6.32222L10.9033 12L5.22548 17.67C5.14406 17.7397 5.07793 17.8255 5.03125 17.922C4.98457 18.0185 4.95833 18.1236 4.95419 18.2307C4.95006 18.3378 4.9681 18.4447 5.00721 18.5445C5.04631 18.6443 5.10562 18.7349 5.18142 18.8107C5.25722 18.8865 5.34787 18.9458 5.44767 18.9849C5.54748 19.024 5.6543 19.0421 5.76141 19.0379C5.86853 19.0338 5.97363 19.0076 6.07012 18.9609C6.16662 18.9142 6.25242 18.8481 6.32215 18.7667L11.9999 13.0967L17.6699 18.7667C17.8187 18.8941 18.0101 18.9607 18.2059 18.9531C18.4016 18.9455 18.5873 18.8644 18.7258 18.7259C18.8643 18.5874 18.9455 18.4017 18.953 18.2059C18.9606 18.0102 18.894 17.8188 18.7666 17.67L13.0966 12Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
            <div className="modal__content flex-1 border overflow-y-scroll overflow-x-hidden">
              <div
                className="w-full"
                ref={containerModal}
                style={modalHeight ? { height: `${modalHeight}px` } : undefined}
              >
                <div
                  className=""
                  style={{
                    transform: `scale(${scaleForModal})`,
                    transformOrigin: "top left",
                  }}
                >
                  <Template ref={contentModal} />
                </div>
              </div>
            </div>
            <div className="modal__footer p-[20px] shrink-0 border-t-2 flex justify-end self-end pt-[20px] w-full">
              <button
                onClick={closeModal}
                className="transition-all duration-100 ease-in-out px-[11px] py-[16px] text-[#888888] text-[15px] font-[600] mr-[8px] hover:bg-[#3899cf] hover:text-white rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handlePrint}
                className="transition-all duration-100 ease-in-out text-[15px] text-white bg-[#1f81b9] hover:bg-[#3899cf] py-[11px] px-[18px] rounded-lg font-[600]"
              >
                Print PDF
              </button>
            </div>
          </div>
          {/* <div className="print__btn w-full h-[60px]  text-center">
            <button
              onClick={handlePrint}
              className=" absolute z-50 top-[20px] left-1/2 -translate-x-1/2 rounded px-[12px] py-[4px] bg-[#1a91f0] hover:bg-[#1170cd] transition-all duration-150 ease-in-out text-white text-[16px] font-[600]"
            >
              Print PDF
            </button>
          </div> */}

          {/* <div className="modal__preview-screen w-fit mx-auto h-[calc(100vh-80px)] bg-red-400 overflow-y-scroll">
            <div className="modal__close-btn bg-inherit text-end sticky top-0 z-30 ">
              <div className="relative w-full  bg-black z">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-0 text-white  right-[20px] rounded px-[12px] py-[4px] bg-red-400 hover:bg-red-600 transition-all duration-150 ease-in-out text-white text-[16px] font-[600]"
                >
                  <svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Menu / Close_LG">
                      <path
                        id="Vector"
                        d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001"
                        stroke="#000000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                  </svg>
                </button>
              </div>
            </div>
            <div className="w-fit mx-auto z-0">
              <Template />
            </div>
          </div> */}
          {/* <div className="print__preview w-full overflow-scroll ">
            <div className="w-[816px] h-[2000px] bg-blue-500 mx-auto">
              <div className="button sticky top-0">Close</div>
              <div className="w-[816px] h-[2000px]"></div>
            </div>
          </div> */}
        </div>
      )}
      <div className="hidden lg:block sticky top-0 right-0 w-full lg:col-span-5 xl:col-span-6 h-full   z-0 overflow-hidden pt-[60px] pb-[80px]">
        <button
          onClick={handlePrint}
          className=" absolute bottom-[20px] right-1/2 translate-x-1/2 rounded px-[18px] py-[11px] bg-[#1f81b9] hover:bg-[#3899cf] transition-all duration-100 ease-in-out text-white text-[16px] font-[600]"
        >
          Print PDF
        </button>

        <div
          ref={containerRef}
          className=" h-full  overflow-hidden relative mx-[20px]"
        >
          <div
            style={{ width: `${816 * scale}px` }}
            className={`absolute opacity-0 hover:opacity-100   transition-all duration-100 ease-in-out top-0 left-1/2 -translate-x-1/2 h-full  flex justify-center items-center z-30`}
          >
            <button
              onClick={openModal}
              className="px-[20px] py-[8px] font-[600] text-white rounded 
            transition-all duration-100 ease-in-out text-[16px]
            hover:text-[18px]
            bg-[#1f81b9] hover:bg-[#3899cf] hover:shadow-2xl
            "
            >
              Preview
            </button>
          </div>

          <div className=" absolute top-0 -translate-x-1/2 left-1/2 ">
            <div
              className=""
              style={{
                transform: `scale(${scale})`,
                transformOrigin: "top center",
              }}
            >
              <Template ref={contentRef} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
