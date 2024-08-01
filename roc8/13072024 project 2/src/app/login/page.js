import Link from "next/link";
const Login = () => {
  return (
    <div className="mx-auto mt-8 w-full max-w-[575px] rounded-[20px] border border-[#cfcece]">
      <div className="mb-6 mt-10 text-center text-3xl font-bold">Login</div>
      <div className="px-12">
        <div className="mb-5 flex flex-col text-center">
          <p className="text-2xl font-medium">Welcome back to ECOMMERCE</p>
          <p>The next gen business marketplace</p>
        </div>
        <div className="mb-5 flex flex-col">
          <label htmlFor="email" className="font-semibold">
            Email
          </label>
          <input
            className="mt-1 rounded-md border border-[#cfcece] px-4 py-2"
            id="email"
            placeholder="Enter"
            name="email"
          />
        </div>
        <div className="mb-5 flex flex-col">
          <label htmlFor="password" className="font-semibold">
            Password
          </label>
          <div className="relative mt-1">
            <input
              type="password"
              className="w-full rounded-md border border-[#cfcece] bg-transparent px-4 py-2"
              id="password"
              placeholder="Enter"
              name="password"
            />
            <p className="absolute right-0 top-0 cursor-pointer px-3 pt-2 underline">
              Show
            </p>
          </div>
        </div>
        <button className="my-4 w-full rounded-md bg-black py-3 text-xl text-white">
          LOGIN
        </button>
        <div className="m-3 border-b-2 border-[#cfcece]"></div>
        <p className="mb-[45px] mt-6 text-center">
          Don{"'"}t have an Account?
          <Link href="./">
            <span className="pl-2 text-[16px] font-medium">SIGN UP</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
