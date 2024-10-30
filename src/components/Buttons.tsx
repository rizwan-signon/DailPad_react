import { FaPhone } from "react-icons/fa6";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../context/store";
import {
  handleCancel,
  handleNumbers,
  handleLog,
} from "../context/features/DailSlice";
import { Link, useNavigate } from "react-router-dom";
import { useCallback } from "react";
const Buttons = () => {
  const { phoneNumber } = useSelector((state: RootState) => state.Dail);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = (num: string | number) => {
    dispatch(handleNumbers(num));
  };
  const handledelete = () => {
    dispatch(handleCancel());
  };

  const handleCall = useCallback(() => {
    dispatch(handleLog());
    console.log("after 3 minutes");
    setTimeout(() => {
      navigate("/call-log");
    }, 9000);
  }, []);

  return (
    <div className=" grid grid-cols-1 gap-4">
      <div className="flex justify-between items-center gap-4 col-span-1">
        <button onClick={() => handleClick(1)} className="btn">
          1
        </button>
        <button onClick={() => handleClick(2)} className="btn">
          2
        </button>
        <button onClick={() => handleClick(3)} className="btn">
          3
        </button>
      </div>
      <div className="flex justify-between items-center gap-4 col-span-1">
        <button onClick={() => handleClick(4)} className="btn">
          4
        </button>
        <button onClick={() => handleClick(5)} className="btn">
          5
        </button>
        <button onClick={() => handleClick(6)} className="btn">
          6
        </button>
      </div>
      <div className="flex justify-between items-center gap-4 col-span-1">
        <button onClick={() => handleClick(7)} className="btn">
          7
        </button>
        <button onClick={() => handleClick(8)} className="btn">
          8
        </button>
        <button onClick={() => handleClick(9)} className="btn">
          9
        </button>
      </div>
      <div className="flex justify-between items-center gap-4 col-span-1">
        <button onClick={() => handleClick("*")} className="btn">
          *
        </button>
        <button onClick={() => handleClick(0)} className="btn">
          0
        </button>
        <button onClick={() => handleClick("#")} className="btn">
          #
        </button>
      </div>
      <div className="flex items-center justify-end gap-4">
        <Link onClick={() => handleCall()} to="/call">
          <button
            disabled={phoneNumber.toString().length == 0}
            className="w-16 h-16 flex items-center justify-center text-3xl bg-green-700 text-white hover:bg-green-600 rounded-full"
          >
            <FaPhone className="text-xl" />
          </button>
        </Link>
        <div className="w-16 h-16 flex items-center justify-center">
          <RiDeleteBack2Fill onClick={handledelete} className="text-xl" />
        </div>
      </div>
    </div>
  );
};

export default Buttons;
