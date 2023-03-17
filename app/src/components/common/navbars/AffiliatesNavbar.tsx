import React from "react";
import Link from "next/link";
import NotificationDropDown from "../../Dropdowns/NotificationDropdown";
import UserDropdown from "../../Dropdowns/UserDropdown";
import LanguageDropdown from "../../Dropdowns/LanguageDropdown";
import type { Dispatch, SetStateAction } from "react";

interface Props {
  collapseShow: boolean;
  setCollapseShow: Dispatch<SetStateAction<boolean>>;
}

const AffiliatesNavbar = ({ collapseShow, setCollapseShow }: Props) => {
  // const [collapseShow, setCollapseShow] = React.useState(false);
  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-10 flex-row flex-nowrap justify-start flex items-center p-4 bg-[#F5F8FA] border-b-2 border-[#E7E7E7]">
        <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap ">
          <div className="flex-col items-center justify-center ">
            <div className="items-center flex">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  setCollapseShow(!collapseShow);
                }}
              >
                <span
                  className={
                    (collapseShow ? "-rotate-90 " : "rotate-0 ") +
                    "w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center duration-300"
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="18"
                    viewBox="0 0 14 18"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13 -4.37114e-08C13.5523 -1.95703e-08 14 0.447715 14 1L14 17C14 17.5523 13.5523 18 13 18C12.4477 18 12 17.5523 12 17L12 1C12 0.447715 12.4477 -6.78525e-08 13 -4.37114e-08ZM7 -3.0598e-07C7.55228 -2.81839e-07 8 0.447715 8 1L8 17C8 17.5523 7.55228 18 7 18C6.44771 18 6 17.5523 6 17L6 1C6 0.447715 6.44772 -3.30121e-07 7 -3.0598e-07ZM1 -5.68248e-07C1.55229 -5.44107e-07 2 0.447715 2 0.999999L2 8C2 8.55228 1.55228 9 1 9C0.447714 9 -3.73832e-07 8.55228 -3.49691e-07 8L-4.37114e-08 0.999999C-1.95703e-08 0.447715 0.447715 -5.92389e-07 1 -5.68248e-07Z"
                      fill="#404040"
                    />
                  </svg>
                </span>
              </a>

              <Link href="/">
                <span className="w-32 h-12 pl-5 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center">
                  <img src="/img/logo.png" />
                </span>
              </Link>

              <div className="pl-16 hidden md:block">
                <span className="w-10 h-8 pr-2.5 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="31"
                    height="30"
                    viewBox="0 0 31 30"
                    fill="none"
                  >
                    <path
                      d="M14.0641 0H15.9366C16.2935 0.0438377 16.6513 0.0782814 17.0074 0.13073C20.2272 0.587111 23.0539 1.8952 25.3679 4.1818C29.271 8.03951 30.7451 12.7215 29.6562 18.0924C28.7246 22.6821 26.049 26.0607 21.9392 28.2988C21.0626 28.7714 20.135 29.1425 19.1743 29.4049V18.3147H22.3783C22.5404 17.0622 22.7001 15.8317 22.8645 14.5572H19.1751C19.1751 13.5584 19.1336 12.5908 19.1891 11.6295C19.2299 10.9164 19.6213 10.5242 20.3297 10.4208C20.8667 10.3426 21.4186 10.3653 21.9642 10.3512C22.293 10.3426 22.6226 10.3512 22.9545 10.3512V6.97488C22.25 6.93653 21.5611 6.86529 20.8714 6.86999C20.1528 6.87468 19.4154 6.86372 18.7195 7.01481C16.6935 7.4524 15.4074 9.03134 15.3017 11.152C15.2508 12.1649 15.2751 13.1818 15.2657 14.1971C15.2657 14.3114 15.2657 14.4249 15.2657 14.5729H12.0694V18.3351H15.2438V29.981C15.2079 29.989 15.1715 29.9947 15.135 29.9983C15.0567 29.9983 14.9784 30.0022 14.9001 29.9983C12.7333 29.9756 10.651 29.5505 8.69943 28.6017C4.06098 26.3477 1.23946 22.6857 0.234845 17.6157C0.126033 17.0622 0.0782815 16.4978 0 15.9389V14.0617C0.0234845 13.8699 0.0501003 13.6781 0.0704535 13.4856C0.424286 10.2439 1.66583 7.38899 3.85458 4.97009C6.17015 2.41107 9.03604 0.816476 12.4452 0.224668C12.9822 0.133861 13.5247 0.0751503 14.0641 0Z"
                      fill="#2262C6"
                    />
                  </svg>
                </span>
                <span className="w-10 h-8 pr-2.5 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                  >
                    <path
                      d="M15.9235 30H14.0486C13.9746 29.9789 13.8993 29.9628 13.8232 29.9519C10.5476 29.6854 7.63837 28.5084 5.18054 26.3288C1.33324 22.9171 -0.377317 18.6072 0.069401 13.4902C0.348233 10.2939 1.60386 7.47213 3.74529 5.08063C6.67039 1.81389 10.3474 0.110963 14.7336 0.00471296C17.5718 -0.0645548 20.234 0.629296 22.6583 2.11386C26.5373 4.49127 28.9212 7.92531 29.7571 12.4124C29.8586 12.9572 29.9121 13.5108 29.9878 14.0608V15.9357C29.9637 16.1283 29.9367 16.3202 29.9156 16.5127C29.5951 19.4801 28.5197 22.1416 26.6283 24.4498C24.2691 27.3197 21.2571 29.1019 17.5977 29.7705C17.0441 29.8685 16.4823 29.9237 15.9235 30ZM6.32698 15.0065C6.38099 16.4317 6.38568 17.8693 6.50308 19.2975C6.68506 21.4807 8.20543 23.1173 10.3674 23.4248C11.454 23.5792 12.5658 23.601 13.6658 23.601C15.5296 23.601 17.3987 23.6092 19.2554 23.4777C20.9777 23.3562 22.2879 22.4733 23.0458 20.8749C23.3664 20.1808 23.5336 19.4258 23.5359 18.6612C23.5668 16.6399 23.5833 14.6186 23.5852 12.5974C23.5818 11.9627 23.5457 11.3287 23.4772 10.6978C23.2536 8.50939 21.7749 6.88688 19.6029 6.57282C18.5269 6.41726 17.4239 6.39672 16.3338 6.39672C14.4601 6.39672 12.5822 6.38791 10.7149 6.51412C8.38623 6.67438 6.69269 8.39257 6.49897 10.7213C6.38157 12.1424 6.38099 13.5689 6.32698 15.0065Z"
                      fill="#2262C6"
                    />
                    <path
                      d="M14.9771 7.90942C16.2838 7.94641 17.5929 7.9511 18.8972 8.02683C20.7029 8.13425 21.8951 9.27189 21.9432 11.0711C22.0125 13.6747 22.0125 16.2797 21.9432 18.886C21.8939 20.7251 20.7105 21.9068 18.8696 21.9573C16.2766 22.0277 13.682 22.0277 11.0858 21.9573C9.26135 21.908 8.07382 20.7245 8.0251 18.9048C7.95583 16.3012 7.95583 13.6962 8.0251 11.0899C8.07382 9.27013 9.26252 8.15127 11.0823 8.02154C11.7339 7.97517 12.3884 7.95932 13.0417 7.94699C13.6874 7.93467 14.3332 7.94699 14.9742 7.94699L14.9771 7.90942ZM19.405 14.9959C19.4044 14.1224 19.145 13.2687 18.6595 12.5425C18.1741 11.8164 17.4844 11.2504 16.6775 10.9159C15.8705 10.5815 14.9826 10.4937 14.1258 10.6636C13.269 10.8334 12.4818 11.2534 11.8635 11.8704C11.2452 12.4873 10.8236 13.2737 10.6519 14.1301C10.4802 14.9866 10.5662 15.8747 10.8989 16.6823C11.2316 17.4899 11.7961 18.1808 12.5213 18.6678C13.2464 19.1548 14.0995 19.416 14.973 19.4184C15.555 19.4211 16.1317 19.3085 16.67 19.0873C17.2083 18.8661 17.6975 18.5406 18.1094 18.1295C18.5214 17.7185 18.8479 17.23 19.0703 16.6921C19.2926 16.1543 19.4064 15.5778 19.405 14.9959ZM20.6125 10.4271C20.6184 10.2243 20.5642 10.0241 20.4568 9.85197C20.3493 9.67981 20.1933 9.54327 20.0084 9.45954C19.8235 9.37581 19.618 9.34862 19.4177 9.3814C19.2174 9.41418 19.0312 9.50547 18.8827 9.64377C18.7341 9.78207 18.6298 9.96122 18.5828 10.1587C18.5358 10.3561 18.5482 10.5631 18.6186 10.7535C18.6889 10.9438 18.8139 11.1092 18.978 11.2287C19.142 11.3482 19.3378 11.4165 19.5406 11.4251C19.6768 11.4312 19.8128 11.4101 19.9408 11.3631C20.0688 11.316 20.1861 11.2439 20.2859 11.151C20.3857 11.0581 20.466 10.9462 20.522 10.8219C20.5781 10.6977 20.6088 10.5634 20.6125 10.4271Z"
                      fill="#2262C6"
                    />
                    <path
                      d="M14.9791 17.8686C14.4108 17.8676 13.8557 17.6979 13.3839 17.3812C12.9121 17.0644 12.545 16.6148 12.3289 16.0892C12.1129 15.5636 12.0576 14.9858 12.1702 14.4288C12.2828 13.8718 12.5581 13.3607 12.9613 12.9603C13.3645 12.5599 13.8774 12.2882 14.4352 12.1795C14.993 12.0708 15.5704 12.13 16.0945 12.3498C16.6185 12.5695 17.0656 12.9398 17.3791 13.4137C17.6925 13.8877 17.8583 14.444 17.8554 15.0122C17.8502 15.7716 17.5448 16.4981 17.0059 17.0332C16.4671 17.5684 15.7385 17.8687 14.9791 17.8686Z"
                      fill="#2262C6"
                    />
                  </svg>
                </span>
                <span className="w-10 h-8 pr-2.5 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                  >
                    <path
                      d="M14.0656 0H15.9402C16.4881 0.0743588 17.0415 0.13228 17.5839 0.22699C25.4017 1.58736 30.8268 8.8487 29.886 16.737C29.3686 21.0741 27.303 24.5509 23.7909 27.1269C20.588 29.475 16.9687 30.3642 13.0331 29.8664C10.0204 29.4837 7.36465 28.2587 5.0924 26.2416C2.48593 23.9279 0.857866 21.0498 0.234817 17.6152C0.133846 17.0603 0.0782724 16.4975 0 15.9386V14.0616C0.0446153 13.6953 0.0829672 13.3274 0.13541 12.9658C0.605044 9.69639 1.98656 6.86762 4.30107 4.5124C6.54671 2.22607 9.25414 0.792117 12.4156 0.2356C12.965 0.134629 13.5169 0.0759242 14.0656 0ZM7.27151 13.041C7.26879 13.8097 7.53081 14.556 8.01353 15.1543C8.4996 15.7758 9.14457 16.1633 9.90459 16.3785L9.88659 16.4623H8.47769C8.69605 17.1366 9.11628 17.7276 9.68152 18.1553C10.2506 18.5897 10.9057 18.7995 11.6806 18.8676C10.1582 20.0056 8.51838 20.4495 6.63358 20.2984C6.78074 20.3947 6.85666 20.4502 6.93806 20.4972C8.08397 21.173 9.35876 21.6012 10.6803 21.7543C12.983 22.0126 15.1755 21.6462 17.1244 20.3618C20.1653 18.358 21.6384 15.4713 21.6877 11.845C21.6851 11.7609 21.7019 11.6773 21.7368 11.6008C21.7717 11.5242 21.8237 11.4567 21.8889 11.4035C22.3413 10.9761 22.7679 10.5214 23.1999 10.0729C23.2507 10.0083 23.2945 9.93848 23.3307 9.86467L21.5672 10.3343L21.5374 10.2599C22.184 9.80832 22.6653 9.23458 22.9025 8.51839C22.2701 8.74381 21.6392 8.96689 21.0099 9.1931C20.8353 9.2565 20.7164 9.20562 20.5731 9.0796C19.5321 8.16381 18.3361 7.89769 17.036 8.38532C15.7359 8.87296 14.9923 9.84589 14.8178 11.225C14.77 11.6031 14.8107 11.9921 14.8107 12.3952C11.96 12.1917 9.62203 10.9863 7.75523 8.80017C7.31913 9.55054 7.18427 10.4385 7.37795 11.2845C7.56503 12.1455 8.05031 12.8202 8.74694 13.3572L8.70076 13.4355L7.27151 13.041Z"
                      fill="#2262C6"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          {/* User */}
          <ul className="flex-row list-none items-center flex">
            <LanguageDropdown />
            <NotificationDropDown />
            <UserDropdown />
          </ul>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
};

export default AffiliatesNavbar;
