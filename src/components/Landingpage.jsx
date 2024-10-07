import React from "react";

function Landingpage() {
  return (
    <div className="w-full h-screen pt-1">
      <div className="textstructure mt-40 px-20">
        {["we create", "eye opening", "presentation"].map((item, index) => {
          return (
            <div className="masker">
              <h1 className="uppercase text-9xl ] tracking-tighter leading-[6.5vw] font-semibold">
                {item}
              </h1>
            </div>
          );
        })}
      </div>
      <div className=" border-zinc-800 border-t-[1px] mt-32 flex justify-between items-center py-5 px-10">
        {[
          "For Public and private companies",
          "From the first pitch to IPO ",
        ].map((item, index) => (
          <p className={`text-md font-light tracking-tight leading-none ${index===1&& "mr-96"}`}>{item}</p>
        ))}
      </div>
    </div>
  );
}

export default Landingpage;
