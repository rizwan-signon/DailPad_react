import { useDispatch, useSelector } from "react-redux";
import { deleteCallLog } from "../context/features/DailSlice";
import { RootState } from "../context/store";
import moment from "moment";
const CallLog = () => {
  const { log } = useSelector((state: RootState) => state.Dail);
  const dispatch = useDispatch();
  const handledelete = (logId: number | string) => {
    dispatch(deleteCallLog(logId));
  };
  return (
    <div>
      {log.length > 0 ? (
        <>
          {log?.map((log) => (
            <li className="flex items-center  gap-8 m-2 bg-gray-700 rounded-lg p-2">
              <div className="flex flex-col gap-2">
                <h1> call to {log.phoneNumber}</h1>
                <h1 className=" text-gray-400">
                  {moment(log.id).format("MMMM Do YYYY, h:mm:ss a")}
                </h1>
              </div>
              <button
                onClick={() => handledelete(log.id)}
                className="bg-red-700 hover:opacity-85 p-2 capitalize"
              >
                del log
              </button>
            </li>
          ))}{" "}
        </>
      ) : (
        <h1 className="text-4xl capitalize font-bold">no logs found</h1>
      )}
    </div>
  );
};

export default CallLog;
