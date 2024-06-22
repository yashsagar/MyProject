// <div class="flex gap-2 items-center">
// <img src="./images/pic-1.jpeg" class="w-12 h-12 rounded-full" />
// <div>
//     <h4 class="leading-4">Bertie Yates</h4>
//     <p class="text-sm text-gray-500">29 years</p>
// </div>
// </div>

const users = [
  {
    name: "Bertie Yates",
    age: "29 years",
    "image-url": "./images/pic-1.jpeg",
  },
  {
    name: "Hester Hogan",
    age: "32 years",
    "image-url": "./images/pic-2.jpeg",
  },
  {
    name: "Larry Little",
    age: "34 years",
    "image-url": "./images/pic-3.jpeg",
  },
  {
    name: "Sean Walsh",
    age: "34 years",
    "image-url": "./images/pic-4.jpeg",
  },
  {
    name: "Lala Gardner",
    age: "30 years",
    "image-url": "./images/pic-5.jpeg",
  },
];

const additionalUsers = [
  {
    name: "Bertie Yates",
    age: "29 years",
    "image-url": "./images/pic-1.jpeg",
  },
  {
    name: "Hester Hogan",
    age: "32 years",
    "image-url": "./images/pic-2.jpeg",
  },
  {
    name: "Larry Little",
    age: "34 years",
    "image-url": "./images/pic-3.jpeg",
  },
  {
    name: "Sean Walsh",
    age: "34 years",
    "image-url": "./images/pic-4.jpeg",
  },
  {
    name: "Lala Gardner",
    age: "30 years",
    "image-url": "./images/pic-5.jpeg",
  },
];

const ulEl = document.getElementById("usersList");
const btnEl = document.getElementById("btn");

function addUser(userList) {
  const fragment = document.createDocumentFragment();
  userList.forEach((user) => {
    const liEl = document.createElement("li");
    liEl.classList.add("mb-4");

    const divElWrapper = document.createElement("div");
    divElWrapper.classList.add("flex", "gap-4", "items-center");

    const imgEl = document.createElement("img");
    imgEl.src = user["image-url"];
    imgEl.alt = "user image";
    imgEl.classList.add("w-12", "h-12", "rounded-full");

    const divInfoWrapper = document.createElement("div");
    const h4El = document.createElement("h4");
    h4El.innerText = user.name;
    h4El.classList.add("leading-4");

    const pEl = document.createElement("p");
    pEl.innerText = user.age;
    pEl.classList.add("text-sm", "text-gray-500");

    divInfoWrapper.appendChild(h4El);
    divInfoWrapper.appendChild(pEl);
    divElWrapper.appendChild(imgEl);
    divElWrapper.appendChild(divInfoWrapper);
    liEl.appendChild(divElWrapper);
    fragment.appendChild(liEl);
  });

  return fragment;
}

btnEl.addEventListener("click", () => {
  if (additionalUsers.length) {
    const user = additionalUsers.shift();
    ulEl.appendChild(addUser([user]));
  }
});

ulEl.appendChild(addUser(users));
