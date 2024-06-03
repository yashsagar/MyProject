import { useState, useEffect } from "react";
import serchIcon from "../images/search-icon.svg";
import chancelIcon from "../images/chancel.svg";
import Card from "../components/Card";
import { URL } from "../utils/utility";

const Body = () => {
  const inputDataObj = {
    searchText: "",
  };

  const [inputData, setInputData] = useState(inputDataObj);
  const [cardData, setCardData] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [reset, setReset] = useState(true);

  const updateInput = (event) => {
    setInputData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) =>
        setCardData(
          data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
        )
      );
  }, []);

  return (
    <div className="main-wrapper pb-8">
      <div className="w-8/12 mx-auto mt-6 flex py-1 px-4 rounded-full focus-within:bg-[#ff5203]/20 hover:bg-[#ff5203]/20 shadow-md">
        {inputData.searchText && (
          <div className="w-4 h-4 self-center cursor-pointer mr-2 ">
            <img
              src={chancelIcon}
              alt="search icon"
              onClick={() => {
                setReset((prev) => !prev);
                setInputData((prev) => ({
                  ...prev,
                  searchText: "",
                }));
              }}
            />
          </div>
        )}
        <input
          className="grow outline-none  bg-transparent text-[#332f30]"
          type="text"
          name="searchText"
          autoComplete="off"
          value={inputData.searchText}
          onChange={(e) => {
            updateInput(e);
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              inputData.searchText && setSearchData(inputData.searchText);
            }
          }}
        />
        <div className="w-5 h-5 self-center cursor-pointer ml-2 ">
          <img
            src={serchIcon}
            alt="search icon"
            onClick={() => {
              inputData.searchText && setSearchData(inputData.searchText);
            }}
          />
        </div>
      </div>
      <div className="my-8 flex gap-x-4 gap-y-6 flex-wrap">
        <Card
          cardData={cardData}
          searchData={searchData}
          setSearchData={setSearchData}
          reset={reset}
        />
      </div>
    </div>
  );
};
export default Body;
