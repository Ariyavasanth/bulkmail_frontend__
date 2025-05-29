import { createContext, useState } from "react";

const ValueContext = createContext();
function ContextProvider({ children }) {
  const [msg, setMsg] = useState("");
  const [emailList, setemailList] = useState([]);
  return (
    <ValueContext.Provider value={{ msg, setMsg, emailList, setemailList}}>
      {children}
    </ValueContext.Provider>
  );
}

export default ContextProvider;
export { ValueContext };
