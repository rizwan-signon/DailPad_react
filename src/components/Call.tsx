import { useSelector } from "react-redux";
import { RootState } from "../context/store";
import { useEffect } from "react";
import ring from "../assets/audios/ringtone.m4a";
const Call = () => {
  const { currentCall } = useSelector((state: RootState) => state.Dail);
  useEffect(() => {
    const ringtone = new Audio(ring);
    ringtone.loop = true;

    ringtone.play().catch((error) => console.log(error));

    // Clean up to stop the sound when component unmounts or status changes
    return () => {
      ringtone.pause();
      ringtone.currentTime = 0;
    };
  }, []);
  return (
    <div className="flex items-center flex-col gap-3">
      <h1 className="text-3xl">{currentCall.phoneNumber}</h1>
      <i className="text-xl">calling...</i>
      <div className="w-20 h-20 rounded-full bg-gray-500">
        <img
          className="rounded-full w-full h-full"
          src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
      </div>
    </div>
  );
};

export default Call;
