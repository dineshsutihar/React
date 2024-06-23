import { FaArrowUpLong } from "react-icons/fa6";

export default function LandingPage() {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-52 px-20 ">
        {["We Create", "Eye-Opening", "Presentations"].map((item, index) => (
          <div className="masker " key={index}>
            <div className="w-fit flex items-end overflow-hidden">
              {index === 1 && (
                <div className="mr-5 w-[8vw] rounded-md h-[5.7vw] relative -700 -top-[0.6vw] bg-green-600"></div>
              )}
              <h1 className="uppercase leading-[7.8vw] text-[9vw] font-FounderGrotesk  ">
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-44 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to the IPO",
        ].map((item, index) => (
          <p
            key={index}
            className="text-md font-light tracking-tight leading-none"
          >
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="px-5 py2 border-[1px] border-zinc-600 font-light text-md uppercase rounded-full">
            Start the project
          </div>
          <div className="w-10 h-10 rounded-full flex items-center justify-center border-[1px] border-zinc-600">
            <span className=" rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
