import { manageUser } from "../../backend";
import { useState, useEffect } from "react";

const Test = () => {
  const [serverResponse, setServerResponse] = useState({
    type: "",
    message: null,
  });

  useEffect(() => {
    console.log(serverResponse);
  }, [serverResponse]);

  return (
    <div className="flex justify-center items-center mt-40 gap-2">
      <button
        className="bg-pink-300 p-4"
        onClick={() => {
          // handleLogin("login");
        }}
      >
        Click me
      </button>
      <button
        className="bg-pink-300 p-4"
        onClick={() => {
          manageUser({
            type: "add",
            load: {
              name: "add",
              password: "add",
              email: "add",
            },
          })
            .then((message) => {
              setServerResponse({
                type: "success",
                message,
              });
            })
            .catch((error) => {
              setServerResponse({
                type: "success",
                error,
              });
            });
        }}
      >
        log off
      </button>
      {serverResponse.type === "success" && <p>{serverResponse.message}</p>}
    </div>
  );
};

export default Test;
