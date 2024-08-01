import Link from "next/link";

const SignUp = () => {
  return (
    <div className="mx-auto mt-8 w-full max-w-[575px] rounded-[20px] border border-[#cfcece]">
      <div className="mb-6 mt-10 text-center text-3xl font-bold">
        Create your account
      </div>
      <div className="px-12">
        <div className="mb-5 flex flex-col">
          <label htmlFor="name" className="font-semibold">
            Name
          </label>
          <input
            className="mt-1 rounded-md border border-[#cfcece] px-4 py-2"
            id="name"
            placeholder="Enter"
            name="name"
          />
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
          <input
            className="mt-1 rounded-md border border-[#cfcece] px-4 py-2"
            id="password"
            placeholder="Enter"
            name="password"
          />
        </div>
        <button className="my-4 w-full rounded-md bg-black py-3 text-xl text-white">
          CREATE ACCOUNT
        </button>
        <p className="mb-[70px] mt-5 text-center">
          Have an Account?
          <Link href="/login">
            <span className="pl-2 text-[16px] font-medium">LOGIN</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
