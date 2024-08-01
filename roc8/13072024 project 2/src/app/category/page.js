const Category = () => {
  return (
    <div className="border border-[#cfcece] max-w-[600px] w-full mx-auto my-8 rounded-[20px] ">
      <p className="text-center text-3xl font-bold mt-10 mb-4 ">
        Please mark your interests!
      </p>
      <p className="text-center">We will keep you notified.</p>
      <div className="px-12 ">
        <div className=" mt-8 text-center font-medium mb-8">
          <p className="text-left mb-4 font-bold">My saved interests!</p>
          <div className="flex items-center gap-2 ">
            <input
              type="checkbox"
              id="cat-1"
              className="w-5 h-5 cursor-pointer"
            />
            <label htmlFor="cat-1" className="cursor-pointer">
              Shoes
            </label>
          </div>
          <div className="flex mt-12 gap-2 mb-12">
            <button>{"<<"}</button>
            <button>{"<"}</button>
            <div>1 2 3 4 ...</div>
            <button>{">"}</button>
            <button>{">>"}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
