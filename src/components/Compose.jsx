import { useContext } from "react";
import { ValueContext } from "./ContextProvider.jsx";

function Compose() {
  const { msg, setMsg } = useContext(ValueContext);

  return (
    <>
      {/*compose email*/}
      <div className="w-full  flex flex-col border-none  p-5 rounded-xl bg-[rgba(255,255,255,0.11)] md:max-w-[500px]">
        <p className="text-2xl self-start pb-2 font-bold ">Compose Email</p>
        <textarea
          onChange={(e) => {
            setMsg(e.target.value);
            
          }}
          className="border text-black border-[#C9F7DD]  p-2 rounded-md"
          rows="5"
          placeholder="Write your email!....."
        ></textarea>
      </div>
    </>
  );
}

export default Compose;
