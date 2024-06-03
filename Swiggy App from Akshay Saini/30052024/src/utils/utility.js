const URL =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.29890&lng=76.63940&is-seo-homepage-enabled=false";

const IMAGE_BASE_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

const REST_BASE_URL_1 =
  "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.2958104&lng=76.6393805&restaurantId=";

const REST_BASE_URL_2 = "&catalog_qa=undefined&submitAction=ENTER";

const SWIGGY_CYCLE_ICON =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/v1648635511/Delivery_fee_new_cjxumu";

export {
  URL,
  IMAGE_BASE_URL,
  REST_BASE_URL_2,
  REST_BASE_URL_1,
  SWIGGY_CYCLE_ICON,
};

// data path = {responseDtata}.data.[cards][4].{card}.card.gridElements.infoWithStyle.[restaurants]

// data.cards[4].card.card.gridElements.infoWithStyle.restaurants

// individual restaurants data -> [restaurants][x].info./properties -> cloudinaryImageId,name,id,avgRating,[cuisines],{sla}.slaString,areaName

//image URL -> base: https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${individual image id}

// individual restaurant page path
// base url 1: https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.2958104&lng=76.6393805&restaurantId=
//394839 <DIFFETENT ID>
//base url 2: &catalog_qa=undefined&submitAction=ENTER

//individual restaurant page data structure REST INFO = data.cards[2].card.card.info:{avgRating, name, costForTwoMessage ,cuisines,areaName,sla: {slaString }, feeDetails:{message}, totalRatings}

//individual restaurant page data structure ITEM INFO = data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[]
//card[2] -> Recommended
//card[5] -> "veg"
//card[6] -> "non veg"

//structure = cards[1].card.card.[itemCards]  **list of items**
//itemCards[0].card.info;{id,name,description, imageId, isVeg, defaultPrice, [offerTags][0].{title,subTitle,textColor}, ratings.aggregatedRating{rating,ratingCountV2} }

//note image base url + w_300,h_300,c_fit + imageId
