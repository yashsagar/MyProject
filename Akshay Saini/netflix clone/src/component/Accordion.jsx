import { useState } from "react";
import { faq } from "../utils/faq";

const Accordion = () => {
  const initialState = () => {
    const state = {};
    faq.forEach((list, index) => {
      state[index] = false;
    });
    return state;
  };
  const [accordianState, setAccordianState] = useState(initialState);

  function handelAccorianState(index) {
    accordianState[index]
      ? setAccordianState(initialState())
      : setAccordianState({ ...initialState(), [index]: true });
  }

  return faq.map((list, index) => {
    return (
      <div key={index}>
        <div
          className="main-wrapper mt-2 hover:bg-[#414141] bg-[#2d2d2d] p-6 tracking-wide text-xl flex justify-between items-center cursor-pointer"
          onClick={() => {
            handelAccorianState(index);
          }}
        >
          {list.question}
          <svg
            className={accordianState[index] ? "-rotate-45" : ""}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            role="img"
            data-icon="PlusStandard"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11 11V2H13V11H22V13H13V22H11V13H2V11H11Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        {accordianState[index] && (
          <div className="main-wrapper mt-[1px] bg-[#2d2d2d] p-6 space-y-4 tracking-wide">
            {list.answer.map((data, index) => (
              <div key={index} className="text-lg ">
                {data.toString()}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  });
};

export default Accordion;
