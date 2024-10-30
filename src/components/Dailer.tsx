import Buttons from "./Buttons";
import { useSelector } from "react-redux";
import { RootState } from "../context/store";
import Footer from "./Footer";
const Dailer = () => {
  const { phoneNumber } = useSelector((state: RootState) => state.Dail);

  return (
    <div className=" flex flex-col gap-9 ">
      <div className=" max-w-lg mx-auto text-center">
        <p
          className={`text-2xl font-bold my-3 ${
            !phoneNumber ? "text-gray-600" : "text-3xl"
          }`}
        >
          {phoneNumber || "11 digit number"}
        </p>
        <p className=" text-blue-600 capitalize ">add number</p>
      </div>
      <Buttons />
      <div className=" flex items-center w-full justify-between">
        <Footer />
      </div>
    </div>
  );
};

export default Dailer;
