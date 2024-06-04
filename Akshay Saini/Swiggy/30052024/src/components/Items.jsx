import { useEffect, useState } from "react";
import downArrow from "../images/downArrow.svg";
import upArrow from "../images/upArrow.svg";
import Item from "./Item";

const Items = ({ restData }) => {
  const hideData = {};

  function filterData() {
    const data = {};
    restData.cards[4].groupedCard.cardGroupMap.REGULAR.cards.map((card) => {
      if (card.card.card.itemCards) {
        const items = [];
        card.card.card.itemCards.map((card) => {
          items.push(card.card.info);
        });
        const title = card.card.card.title;
        data[title] = items;
      }
    });

    return data;
  }

  const itemsData = filterData();

  function hideItemList(id) {
    const itemListEl = document.getElementById(`itemList-${id}`);
    hideData[id] = !hideData[id];

    if (hideData[id]) {
      itemListEl.classList.add("hidden");
    }

    if (!hideData[id]) {
      itemListEl.classList.remove("hidden");
    }
  }

  return (
    <div>
      <div>
        {Object.keys(itemsData).map((items, index) => {
          hideData[index] = true;
          return (
            <div key={index} className="border shadow-lg px-8 py-6 rounded-lg">
              <div
                className="cursor-pointer flex justify-between"
                onClick={() => {
                  hideItemList(index);
                }}
              >
                <span className="font-bold">{`${items} (${items.length})`}</span>
                <span className="w-8 h-8">
                  {hideData[index] ? (
                    <img src={downArrow} alt="down arrow" />
                  ) : (
                    <img src={upArrow} alt="down arrow" />
                  )}
                </span>
              </div>
              <div id={`itemList-${index}`} className="hidden ">
                {itemsData[items].map((item) => (
                  <Item key={item.id} item={item} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Items;
