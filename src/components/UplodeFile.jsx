import { useContext } from "react";
import { ValueContext } from "./ContextProvider.jsx";
import * as XLSX from "xlsx";

function Uplodefile() {
  const { emailList, setemailList } = useContext(ValueContext);
  function handleFile(event) {
    const file = event.target.files[0]; // Step 1: Get the file

    const reader = new FileReader(); // Step 2: Create reader
    reader.onload = function (event) {
      // Step 4: When ready
      const arrayBuffer = event.target.result; // Step 5: Read result

      const data = new Uint8Array(arrayBuffer);
      const workbook = XLSX.read(data, { type: "array" });
      console.log(workbook);

      const sheetNames = workbook.SheetNames[0];
      console.log(workbook.Sheets);
      const worksheets = workbook.Sheets[sheetNames];
      console.log(worksheets);
      const emailList = XLSX.utils.sheet_to_json(worksheets, { header: "A" });
      const totalEmail = emailList.map(function (item) {
        return item.A;
      });
      console.log(totalEmail);
      setemailList(totalEmail);
    };
    reader.readAsArrayBuffer(file); // Step 3: Start reading
  }
  return (
    <>
      {/*Uplodefile box*/}
      <div className="w-full border-none  p-10  rounded-xl bg-[rgba(255,255,255,0.11)] flex flex-col justify-center items-center md:max-w-[500px]">
        <p className="text-2xl  pb-2 font-bold ">Upload File</p>

        <div className="border-2 border-dashed border-black bg-[#C9F7DD] rounded-lg  flex justify-center items-center ">
          <input
            type="file"
            onChange={handleFile}
            className="text-center text-[#1B323A] pl-5 p-5 w-[80%] bg-[#C9F7DD]"
          />
        </div>

        <p className="text-base font-light text-center pt-2">
          Total Emails in File: {emailList.length}
        </p>
      </div>
    </>
  );
}

export default Uplodefile;
