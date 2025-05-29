import { useContext, useState } from "react";
import { ValueContext } from "./ContextProvider.jsx";
import axios from "axios";

function Button() {
  const { msg, setMsg, emailList, setemailList } = useContext(ValueContext);
  const [status, setStatus] = useState(false);

  function send() {
    setStatus(true);

    axios
      .post(`${import.meta.env.VITE_API_URL}/sendmail`, {
        msg: msg,
        email: emailList,
      })
      .then((data) => {
        console.log(data);
        if (data.data === true) {
          alert("Email Sent sucessullay");
          setStatus(false);
        } else {
          alert("Failed");
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Error sending email");
        setStatus(false);
      });
  }
  return (
    <>
      {/*send button*/}
      <section className="flex items-center justify-center mt-12 mb-16">
        <button
          onClick={send}
          disabled={status}
          className="pl-10 pt-3 pb-3 pr-10 border-none w-[fit-content] self-center mt-7 bg-gradient-to-r from-[#00c66f] to-[#00e3ae] text-black font-bold py-2 px-4 rounded-full shadow-lg hover:shadow-inner transition duration-1 ease-in-out"
        >
          {status ? "Sending...." : "Send Email"}
        </button>
      </section>
    </>
  );
}

export default Button;
