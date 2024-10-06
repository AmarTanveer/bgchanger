import { useState } from "react";

function App({ colors }) {
  const [bgcolor, setBgcolor] = useState("#687689");

  return (
    <>
      <div className="w-full h-screen duration-500" style={{ backgroundColor: bgcolor }}>
        <div className="h-[70%] flex justify-center text-white items-center text-5xl font-bold tracking-wider"><h1>BG Color Changer</h1></div>
        <div className="h-[30%] fixed flex justify-center bottom-10 px-10 gap-7 flex-wrap items-center inset-x-0">
          {colors.map((color) => (
            <button onClick={() => setBgcolor(color)} className="px-7 py-3 text-xl font-normal rounded-full shadow-xl border-white border-2" style={{ backgroundColor: color }}>
              {color}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
