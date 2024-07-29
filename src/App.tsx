import "./App.css";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer/Footer";
import bgImage from "./img/bg-pattern-intro-right-desktop.svg";
import bgImage2 from "./img/bg-pattern-intro-left-desktop.svg";
import bgWork from "./img/bg-pattern-how-we-work-desktop.svg";
import snapy from "./img/icon-snappy-process.svg";
import affordable from "./img/icon-affordable-prices.svg";
import people from "./img/icon-people-first.svg";
import CardDiferencial from "./componentes/Home/CardDiferenciais";
import imgIntro from "./img/image-intro-desktop.jpg";

function App() {
  const arrayDiferenciais = [
    {
      img: `${snapy}`,
      title: "Snappy Process",
      description:
        "Our application process can be completed in minutes, not hours. Don't get stuck filling in tedious forms.",
    },
    {
      img: `${affordable}`,
      title: "Affordable Prices",
      description:
        "We don't want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.",
    },
    {
      img: `${people}`,
      title: "People First",
      description:
        "Our plans aren't full of conditions and clauses to prevent payouts. We make sure you're covered when you need it.",
    },
  ];
  return (
    <div className=" flex flex-col font-karla font-normal w-full">
      <Header />
      <main className=" relative overflow-hidden bg-no-repeat bg-left inset-0">
        <div className="bg-dark_violet ">
          <div
            className="absolute inset-0 bg-no-repeat bg-right"
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundPositionY: "-70px",
              zIndex: "100",
            }}
          />
          <div
            className="absolute inset-0 bg-no-repeat bg-left"
            style={{
              backgroundImage: `url(${bgImage2})`,
              backgroundPositionY: "400px",
              backgroundSize: "180px",
              
            }}
          />

          <div className="grid grid-cols-2 w-[1200px] mx-auto pt-24  ">
            <div className="flex flex-col gap-6 items-start pt-16">
              <h1
                className="text-gray_light font-dmserif text-7xl w-[15ch] before:relative before:h-[1px]
              before:w-40 before:block before:bg-blue before:bottom-14"
              >
                Humanizing your insurance.
              </h1>
              <p className="text-gray_light w-[57ch]">
                Get your life insurance coverage easier and faster. We blend our
                expertise and technology to help you find the plan that's right
                for you. Ensure you and your loved ones are protected.
              </p>
              <button className="uppercase border border-black  pt-2 pb-2 text-sm text-gray_light hover:bg-gray_light hover:text-very_violet hover:font-bold z-[1000] w-[140px]">
                view plans
              </button>
            </div>
            <div>
              <div className="mb-[-200px] ">
                <img className="w-full" src={imgIntro} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="pt-80 bg-white">
          <section className="w-[1200px] mx-auto bg-white">
            <h2
              className="font-dmserif text-7xl text-dark_violet before:relative before:h-[1px]
            before:w-40 before:block before:bg-blue before:bottom-12 pb-20"
            >
              We're different
            </h2>
            <CardDiferencial diferencial={arrayDiferenciais} />
          </section>
        </div>
        <section className="w-[1200px] mx-auto mt-24 pb-14">
          <div
            className="bg-dark_violet flex items-center justify-between h-48 pl-12 pr-14 bg-no-repeat bg-right "
            style={{
              backgroundImage: `url(${bgWork})`,
              backgroundPositionY: "-50px",
            }}
          >
            <h1 className="text-5xl font-dmserif text-gray_light whitespace-pre-line">
              Find out more
              <br />
              about how we work
            </h1>
            <button className="uppercase border border-black pt-2 pb-2 text-sm text-gray_light z-[1000] hover:bg-gray_light hover:text-very_violet hover:font-bold w-[140px]">
              how we work
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
