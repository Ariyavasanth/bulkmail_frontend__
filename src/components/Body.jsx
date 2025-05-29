import Compose from "./Compose.jsx";
import Uplodefile from "./UplodeFile.jsx";

function Body() {
  return (
    <>
      {/*body*/}
      <section className="flex flex-col justify-center items-center gap-5 mt-10 px-5 md:flex-row ">
        <Compose />
        <Uplodefile />
      </section>
    </>
  );
}

export default Body;
