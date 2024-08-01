// eslint-disable-next-line react/prop-types
const Footer = ({ type = "main", linkList }) => {
  return (
    <div className="bg-black">
      <div className="main-wrapper pt-8 text-[#b3b3b3] lg:max-w-[1000px] lg:m-auto">
        <p className="text-xl">
          Questions? Call{" "}
          <span className={type === "main" ? "underline" : " "}>
            000-800-919-1694{" "}
          </span>
        </p>
        <div className="grid grid-cols-2 pt-8 underline gap-y-4 lg:grid-cols-4 place-content-center">
          {linkList.map((list, index) => (
            <div key={index}>{list}</div>
          ))}
        </div>
        <div className="flex mt-6 border-[1px] border-[#5e5e5e] text-white  rounded-md gap-2 items-center py-1.5 px-4 w-fit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="20"
            height="20"
            viewBox="0 0 16 16"
            role="img"
            data-icon="LanguagesSmall"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z"
              fill="currentColor"
            ></path>
          </svg>
          <p> English</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            role="img"
            data-icon="CaretDownSmall"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.5976 6.5C11.7461 6.5 11.8204 6.67956 11.7154 6.78457L8.23574 10.2643C8.10555 10.3945 7.89445 10.3945 7.76425 10.2643L4.28457 6.78457C4.17956 6.67956 4.25393 6.5 4.40244 6.5H11.5976Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        {type === "main" && <p className="pt-6">Netflix India</p>}
        <div className="pb-3 pt-6"></div>
      </div>
    </div>
  );
};

export default Footer;
