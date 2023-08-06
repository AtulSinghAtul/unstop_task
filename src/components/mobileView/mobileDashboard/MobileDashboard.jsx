import React, { useEffect } from "react";
import PortalReactDOM from "react-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const MobileDashboard = ({ open, setOpen }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return PortalReactDOM.createPortal(
    <div>
      {/* clicking anywhere component */}
      <div
        className="fixed top-0 bottom-0 left-0 right-0 h-screen w-screen bg-[#8f8e8e76] z-[500]"
        onClick={() => {
          setOpen(false);
        }}
      ></div>

      <div className="flex justify-center items-center ml-[-59px]">
        {/* above div use for centered to the dashboard div */}
        <div
          className="fixed top-0 flex flex-col items-start w-[315px] h-[1074px] pt-[40px] px-[20px] pb-[10px] bg-[#F2F8FE] z-[1000]"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          {/* menu box */}
          <div className="flex flex-col items-start gap-[6px] self-stretch">
            <div className="flex justify-between items-start h-[36px] self-stretch">
              <p className="text-[#1C4980] text-[14px] font-semibold">Menu</p>

              <svg
                onClick={() => {
                  setOpen(false);
                }}
                className="w-[24px] h-[24px] hover:cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M16.2426 17.6568L12 13.4142L7.75736 17.6568L6.34315 16.2426L10.5858 12L6.34315 7.75732L7.75736 6.3431L12 10.5857L16.2426 6.3431L17.6569 7.75732L13.4142 12L17.6569 16.2426L16.2426 17.6568Z"
                  fill="#1C4980"
                />
              </svg>
            </div>
          </div>

          {/* dashboard box */}
          <div className="flex items-center self-stretch gap-[10px] h-[50px] p-[10px] rounded-[8px] bg-[#F2F8FE]">
            <div className="flex items-start gap-[8px]">
              <svg
                className="w-[20px] h-[20px]"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clip-path="url(#clip0_0_1620)">
                  <path
                    d="M15.8333 4.16667V5.83333H12.5V4.16667H15.8333ZM7.5 4.16667V9.16667H4.16667V4.16667H7.5ZM15.8333 10.8333V15.8333H12.5V10.8333H15.8333ZM7.5 14.1667V15.8333H4.16667V14.1667H7.5ZM17.5 2.5H10.8333V7.5H17.5V2.5ZM9.16667 2.5H2.5V10.8333H9.16667V2.5ZM17.5 9.16667H10.8333V17.5H17.5V9.16667ZM9.16667 12.5H2.5V17.5H9.16667V12.5Z"
                    fill="#1C4980"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_0_1620">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <p className="text-[#1C4980] text-[14px] font-medium">
                Dashboard
              </p>
            </div>
          </div>

          {/* Assessment box */}
          <div className="flex items-center self-stretch gap-[10px] h-[50px] p-[10px] rounded-[8px] border-[1px] border-[#0073E6] bg-[#E5F1FC]">
            <div className="flex items-start gap-[8px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <mask
                  id="mask0_0_1624"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                >
                  <rect width="20" height="20" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_0_1624)">
                  <path
                    d="M6.00494 13.995H7.50494L12.4107 9.08925L10.9107 7.58925L6.00494 12.495V13.995ZM13.1191 8.38092L13.8691 7.63092C13.9802 7.51981 14.0357 7.40175 14.0357 7.27675C14.0357 7.15175 13.9802 7.0337 13.8691 6.92259L13.0774 6.13092C12.9663 6.01981 12.8482 5.96425 12.7232 5.96425C12.5982 5.96425 12.4802 6.01981 12.3691 6.13092L11.6191 6.88092L13.1191 8.38092ZM4.55975 17.1694C4.08423 17.1694 3.67715 17.0001 3.33852 16.6615C2.99989 16.3228 2.83057 15.9158 2.83057 15.4402V4.55981C2.83057 4.08429 2.99989 3.67721 3.33852 3.33858C3.67715 2.99995 4.08423 2.83063 4.55975 2.83063H7.95784C8.0922 2.39343 8.34477 2.03413 8.71555 1.75273C9.08631 1.47133 9.51445 1.33063 9.99996 1.33063C10.4855 1.33063 10.9136 1.47133 11.2844 1.75273C11.6552 2.03413 11.9077 2.39343 12.0421 2.83063H15.4402C15.9157 2.83063 16.3228 2.99995 16.6614 3.33858C17 3.67721 17.1694 4.08429 17.1694 4.55981V15.4402C17.1694 15.9158 17 16.3228 16.6614 16.6615C16.3228 17.0001 15.9157 17.1694 15.4402 17.1694H4.55975ZM4.55975 15.4402H15.4402V4.55981H4.55975V15.4402ZM9.99996 4.03988C10.1559 4.03988 10.2849 3.98889 10.3869 3.88692C10.4888 3.78495 10.5398 3.65598 10.5398 3.50002C10.5398 3.34406 10.4888 3.2151 10.3869 3.11313C10.2849 3.01116 10.1559 2.96017 9.99996 2.96017C9.844 2.96017 9.71504 3.01116 9.61307 3.11313C9.51109 3.2151 9.46011 3.34406 9.46011 3.50002C9.46011 3.65598 9.51109 3.78495 9.61307 3.88692C9.71504 3.98889 9.844 4.03988 9.99996 4.03988Z"
                    fill="#0073E6"
                  />
                </g>
              </svg>
              <p className="text-[#1C4980] text-[14px] font-medium">
                Assessment
              </p>
            </div>
          </div>

          {/* My Library box */}
          <div className="flex items-center self-stretch gap-[10px] h-[50px] p-[10px] rounded-[8px] bg-[#F2F8FE]">
            <div className="flex items-start gap-[8px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <mask
                  id="mask0_0_1631"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                >
                  <rect width="20" height="20" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_0_1631)">
                  <path
                    d="M11.6296 12.3007C11.8657 12.3007 12.0636 12.2209 12.2233 12.0612C12.3831 11.9014 12.4629 11.7035 12.4629 11.4674C12.4629 11.2313 12.3831 11.0334 12.2233 10.8737C12.0636 10.7139 11.8657 10.6341 11.6296 10.6341C11.3935 10.6341 11.1956 10.7139 11.0358 10.8737C10.8761 11.0334 10.7963 11.2313 10.7963 11.4674C10.7963 11.7035 10.8761 11.9014 11.0358 12.0612C11.1956 12.2209 11.3935 12.3007 11.6296 12.3007ZM11.0254 9.84376H12.2338C12.2338 9.48085 12.2675 9.20926 12.335 9.02899C12.4024 8.84874 12.5512 8.65053 12.7813 8.43435C13.0696 8.15989 13.3292 7.88211 13.5601 7.60101C13.7909 7.31992 13.9063 6.96741 13.9063 6.54349C13.9063 5.91185 13.6961 5.40672 13.2756 5.0281C12.8551 4.64947 12.3013 4.46016 11.6141 4.46016C11.0834 4.46016 10.6096 4.60863 10.193 4.90557C9.77631 5.20253 9.48631 5.6105 9.32296 6.12947L10.4063 6.58018C10.5002 6.26737 10.6548 6.0268 10.8701 5.85847C11.0853 5.69015 11.3334 5.60599 11.6142 5.60599C11.9388 5.60599 12.2006 5.69544 12.3995 5.87432C12.5985 6.05323 12.698 6.28519 12.698 6.57022C12.698 6.86348 12.5903 7.11847 12.375 7.33518C12.1598 7.55189 11.9341 7.77244 11.698 7.99685C11.4123 8.26133 11.2288 8.51149 11.1475 8.7473C11.0661 8.98311 11.0254 9.3486 11.0254 9.84376ZM6.67442 15.0548C6.19549 15.0548 5.78756 14.8863 5.45063 14.5494C5.11371 14.2125 4.94525 13.8046 4.94525 13.3256V3.44522C4.94525 2.96629 5.11371 2.55836 5.45063 2.22143C5.78756 1.8845 6.19549 1.71603 6.67442 1.71603H16.5548C17.0338 1.71603 17.4417 1.8845 17.7786 2.22143C18.1156 2.55836 18.284 2.96629 18.284 3.44522V13.3256C18.284 13.8046 18.1156 14.2125 17.7786 14.5494C17.4417 14.8863 17.0338 15.0548 16.5548 15.0548H6.67442ZM6.67442 13.3256H16.5548V3.44522H6.67442V13.3256ZM3.44525 18.284C2.96632 18.284 2.55839 18.1155 2.22146 17.7786C1.88453 17.4417 1.71606 17.0337 1.71606 16.5548V4.94522H3.44525V16.5548H15.0548V18.284H3.44525Z"
                    fill="#1C4980"
                  />
                </g>
              </svg>

              <p className="text-[#1C4980] text-[14px] font-medium">
                My Library
              </p>
            </div>
          </div>

          {/* border line bottom */}
          <div>
            <svg
              className="h-0 self-stretch stroke-[1px] stroke-[#BACBD5]"
              xmlns="http://www.w3.org/2000/svg"
              width="275"
              height="2"
              viewBox="0 0 275 2"
              fill="none"
            >
              <path d="M0 1H275" stroke="#BACBD5" stroke-dasharray="2 2" />
            </svg>
          </div>

          {/* round status box */}
          <div className="flex items-center justify-between self-stretch gap-[10px] h-[50px] p-[10px] rounded-[8px] bg-[#F2F8FE]">
            <div className="flex items-start gap-[8px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <mask
                  id="mask0_0_1661"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                >
                  <rect width="20" height="20" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_0_1661)">
                  <path
                    d="M10.2781 13.6835C9.7316 14.2278 9.06944 14.4965 8.29167 14.4896C7.51389 14.4826 6.85417 14.2071 6.3125 13.6631C5.77083 13.1191 5.5 12.4628 5.5 11.6944C5.5 10.9259 5.77326 10.2695 6.31979 9.72521L9.72188 6.31646C10.2684 5.77215 10.9306 5.50347 11.7083 5.51042C12.4861 5.51736 13.1458 5.79285 13.6875 6.3369C14.2292 6.88094 14.5 7.53719 14.5 8.30565C14.5 9.0741 14.2267 9.73049 13.6802 10.2748L10.2781 13.6835ZM7.375 12.6042C7.73611 12.9653 8.10147 13.0945 8.47108 12.992C8.84069 12.8894 9.09339 12.767 9.22917 12.625L10.3958 11.4583L8.54167 9.625L7.375 10.7917C7.125 11.0417 7 11.3438 7 11.6979C7 12.0521 7.125 12.3542 7.375 12.6042ZM12.625 7.39583C12.2639 7.03472 11.9015 6.90546 11.5377 7.00804C11.174 7.11064 10.9253 7.23296 10.7917 7.375L9.60417 8.54167L11.4583 10.3958L12.625 9.22917C12.875 8.97917 13 8.67361 13 8.3125C13 7.95139 12.875 7.64583 12.625 7.39583ZM4.5 17C4.0875 17 3.73437 16.8531 3.44062 16.5594C3.14687 16.2656 3 15.9125 3 15.5V4.5C3 4.0875 3.14687 3.73438 3.44062 3.44063C3.73437 3.14688 4.0875 3 4.5 3H8.0625C8.17361 2.56944 8.40625 2.21181 8.76042 1.92708C9.11458 1.64236 9.52778 1.5 10 1.5C10.4722 1.5 10.8854 1.64236 11.2396 1.92708C11.5938 2.21181 11.8264 2.56944 11.9375 3H15.5C15.9125 3 16.2656 3.14688 16.5594 3.44063C16.8531 3.73438 17 4.0875 17 4.5V15.5C17 15.9125 16.8531 16.2656 16.5594 16.5594C16.2656 16.8531 15.9125 17 15.5 17H4.5ZM4.5 15.5H15.5V4.5H4.5V15.5ZM10 4C10.1444 4 10.2639 3.95278 10.3583 3.85833C10.4528 3.76389 10.5 3.64444 10.5 3.5C10.5 3.35556 10.4528 3.23611 10.3583 3.14167C10.2639 3.04722 10.1444 3 10 3C9.85556 3 9.73611 3.04722 9.64167 3.14167C9.54722 3.23611 9.5 3.35556 9.5 3.5C9.5 3.64444 9.54722 3.76389 9.64167 3.85833C9.73611 3.95278 9.85556 4 10 4Z"
                    fill="#1C4980"
                  />
                </g>
              </svg>

              <p className="text-[#1C4980] text-[14px] font-medium">
                Round Status
              </p>
            </div>

            <div className="flex items-center  gap-[6px] h-[18px] py-[6px] px-[8px]  rounded-[22px] border-[1px] border-[#D63500] bg-[#FBEBEA]">
              <p className="text-[10px] font-medium text-[#D63500]"> Admin</p>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector(".mobiledashboardportals")
  );
};

export default MobileDashboard;
