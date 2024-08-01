const EmailVerify = () => {
  function codeInputGeneratore() {
    let codeList = [];
    for (let i = 0; i < 8; i++) {
      codeList.push(
        <input
          className="border border-[#cfcece] aspect-square rounded-md w-full h-full text-2xl text-center"
          type="text"
          maxLength={1}
        />
      );
    }
    return codeList;
  }

  return (
    <div className="border border-[#cfcece] max-w-[600px] w-full mx-auto my-8 rounded-[20px] ">
      <div className="text-center text-3xl font-bold mt-10 mb-6 ">
        Verify your email
      </div>
      <div className="px-12 ">
        <div className=" mt-5 text-center font-medium mb-8">
          <p>Enter the 8 digit code you have received on </p>
          <p>swa***@gmail.com</p>
        </div>
        <div className="flex flex-col mb-5 ">
          <p className="font-semibold mb-2">Code</p>
          <div className="flex gap-2 ">{codeInputGeneratore()}</div>
        </div>

        <button className="bg-black text-white text-xl w-full py-3 rounded-md mt-10 mb-14">
          VERIFY
        </button>
      </div>
    </div>
  );
};

export default EmailVerify;
