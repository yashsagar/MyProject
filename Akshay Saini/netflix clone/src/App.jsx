import { linkList } from "./utils/linkList";

// component import
import Accordion from "./component/Accordion";
import Header from "./component/Header";
import SectionSeparetor from "./component/SectionSeparetor";
import Footer from "./component/Footer";
import Input from "./component/input/Input";

function App() {
  return (
    <div className="font-netflix text-col-text">
      <section className=" background-img bg-gradient-to-b from-black/80 from-10% via-transparent/40 to-black/95 to-100%  w-full">
        <div className="main-wrapper pb-6">
          <Header />
          <div className="text-center pb-10 sm:pb-20 mt-24 sm:mt-32">
            <h1 className="text-4xl font-bold mt-12 sm:mt-28 lg:text-5xl xl:mt-[170px] 2xl:mt-[35vh]">
              Unlimited movies, TV shows and more
            </h1>
            <p className="my-6 text-xl">Watch anywhere. Cancel anytime.</p>
            <p className="text-xl mb-7 mx-6">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-x-3 gap-y-4 m-auto relative sm:max-w-[550px] sm:gap-x-0 lg:gap-x-4">
              <div className="w-full h-14 bg-black/40 border border-[#646363] rounded font-medium focus-within:outline-2 focus-within:outline-offset-4 sm:w-4/6 mx-8 sm:mx-4 lg:mx-0 relative focus-within:outline  ">
                <Input
                  id="email"
                  inputStyle={{ color: "#fff3f3" }}
                  attribute={{ type: "email", name: "email" }}
                >
                  Email address
                </Input>
              </div>

              <button className="bg-col-bg-accent text-col-text text-xl font-medium h-14 hover:bg-col-bg-accent-hover rounded-md flex gap-2 items-center justify-center tracking-wide mx-auto px-5 sm:w-2/6 sm:px-2">
                Get Started
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  role="img"
                  data-icon="ChevronRightStandard"
                  aria-hidden="true"
                >
                  <path
                    d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      <SectionSeparetor />
      <section className="bg-black pb-16">
        <div className="main-wrapper text-center lg:flex lg:items-center lg:py-16">
          <div className="lg:basis-1/2 lg:text-left">
            <p className="text-4xl font-bold pt-16 pb-6 lg:pt-0">
              Enjoy on your TV
            </p>
            <p className="text-xl">
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </p>
          </div>
          <div className=" mt-4 relative sm:mt-0 lg:basis-1/2">
            <img
              className="block w-full h-auto relative z-50 sm:w-3/4 m-auto lg:w-full "
              src="./frame/tv.png"
              alt="tv frame for video"
            ></img>
            <div className=" absolute left-[9%] top-[21%] right-[10%] bottom-[24.5%] sm:w-3/4 sm:left-[12%] lg:w-full lg:left-0">
              <video className=" w-full h-full" autoPlay playsInline muted loop>
                <source src="./gif-video/video-tv-in.m4v" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>
      <SectionSeparetor />
      <section className="bg-black">
        <div className="main-wrapper text-center lg:flex lg:items-center lg:py-16">
          <div className="lg:order-2 lg:text-left lg:w-1/2">
            <p className="text-4xl font-bold pt-16 pb-6 lg:pt-0 lg:text-5xl">
              Download your shows to watch offline
            </p>
            <p className="text-xl">
              Save your favourites easily and always have something to watch.
            </p>
          </div>
          <div className="relative pt-6 pb-24 lg:w-1/2">
            <img
              className="block m-auto"
              src="./images/mobile.jpg"
              alt="stranger things phone image"
            ></img>
            <div className=" absolute w-[65%] left-1/2 -translate-x-1/2 border-[3px] rounded-2xl  bottom-[100px] bg-black border-[#646363] flex gap-5 py-2 px-4 items-center max-w-[400px] sm:bottom-[120px] lg:w-[70%] ">
              <img
                src="./images/boxshot.png"
                alt="stranger things show image"
                className="w-10 aspect-auto sm:w-14 lg:w-10"
              ></img>
              <div className="text-left pt-1.5">
                <p className=" leading-4 font-medium">Stranger Things</p>
                <p className=" text-sm text-[#006fc5]">Downloading...</p>
              </div>
              <img
                className="ml-auto w-12 h-12"
                src="./gif-video/download.gif"
                alt="download gif"
              ></img>
            </div>
          </div>
        </div>
      </section>
      <SectionSeparetor />
      <section className="bg-black">
        <div className="main-wrapper text-center lg:flex lg:items-center lg:py-16">
          <div className="lg:w-1/2 lg:text-left">
            <p className="text-4xl font-bold pt-14 pb-6 lg:text-5xl lg:pt-0">
              Watch everywhere
            </p>
            <p className="text-xl">
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </p>
          </div>
          <div className=" relative mt-5 pb-16 lg:w-1/2">
            <img
              className="relative z-50 w-full h-full sm:w-[75%] m-auto lg:w-full"
              src="./frame/pc.png"
            />
            <div className=" absolute left-[19%] -top-[2%] right-[20%] bottom-[40.5%] sm:w-[40%] sm:left-[29%] lg:w-[60%] lg:left-[19%] ">
              <video
                className=" w-full h-full "
                autoPlay
                playsInline
                muted
                loop
              >
                <source src="./gif-video/video-pc-in.m4v" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>
      <SectionSeparetor />
      <section className="bg-black">
        <div className="main-wrapper text-center lg:flex items-center lg:py-16">
          <div className="lg:w-1/2 lg:text-left lg:order-2">
            <p className="text-4xl font-bold pt-14 pb-6 lg:pt-0 lg:text-5xl">
              Create profiles for kids
            </p>
            <p className="text-xl">
              Send children on adventures with their favourite characters in a
              space made just for them—free with your membership.
            </p>
          </div>
          <div className="mt-5 pb-16 lg:w-1/2 ">
            <img
              className="mx-auto"
              src="./images/children.png"
              alt="children picture"
            />
          </div>
        </div>
      </section>
      <SectionSeparetor />
      <section className="bg-black">
        <p className="text-center text-4xl font-bold pt-16">
          Frequently Asked Questions
        </p>
        <div className="mt-8 xl:max-w-[1000px] m-auto">
          <Accordion />
        </div>
        <p className="text-center text-xl pt-16 pb-5 px-14">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-x-3 gap-y-4 max-w-[750px] m-auto relative px-8 sm:px-10 pb-16 ">
          <div className="w-full h-14 bg-black/40 border border-[#646363] rounded font-medium focus-within:outline-2 focus-within:outline-offset-4 sm:w-4/6 mx-8 sm:mx-4 lg:mx-0 relative focus-within:outline  ">
            <Input
              id="email2"
              inputStyle={{ color: "#fff3f3" }}
              attribute={{ type: "email2", name: "email" }}
            >
              Email address
            </Input>
          </div>

          <button className="bg-col-bg-accent text-col-text text-xl font-medium h-14 hover:bg-col-bg-accent-hover rounded-md flex gap-2 items-center justify-center tracking-wide mx-auto px-5 sm:w-2/6 sm:px-0">
            Get Started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              role="img"
              data-icon="ChevronRightStandard"
              aria-hidden="true"
            >
              <path
                d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </div>
      </section>
      <SectionSeparetor />
      <Footer linkList={linkList} />
    </div>
  );
}

export default App;
