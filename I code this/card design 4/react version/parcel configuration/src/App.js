import { useState, useRef } from "react";
import UserCard from "./components/UserCard";
import { users, additionalUsers } from "./utils/usersList";

const App = () => {
  const [usersData, setUserData] = useState(users);
  const additionUsersData = useRef(additionalUsers);
  const btnDisplay = useRef(true);

  function updateUser() {
    if (additionUsersData.current.length) {
      setUserData((prev) => [...prev, additionUsersData.current.shift()]);
    }

    if (additionUsersData.current.length == 1) {
      btnDisplay.current = false;
    }
  }
  return (
    <div className="bg-color-primary min-h-screen flex justify-center items-center py-12">
      <div className="bg-white p-6  rounded-md w-6/12 max-w-[360px]">
        <p className="text-2xl font-bold mb-8 "> 24 birthdays today</p>
        <ul id="usersList">
          {usersData.map((user, index) => (
            <UserCard user={user} key={index} />
          ))}
        </ul>
        {btnDisplay.current && (
          <button
            className="bg-gradient-to-r from-color-secondary to-color-primary w-full py-3 rounded-lg text-white mt-4 hover:from-color-secondary/90 hover:to-color-primary/90 active:from-color-primary active:to-color-secondary"
            onClick={updateUser}
          >
            View all
          </button>
        )}
      </div>
    </div>
  );
};

export default App;
