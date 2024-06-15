/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState, useRef } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Level from "../component/Level";
import ProgressBar from "../component/ProgressBar";
import { useSelector } from "../store";

const Home: React.FC = () => {

  const tokenState = useSelector((state) => state.wallet.user?.balance);
  const [imgStatus, setImgStatus] = useState(false);
  const [token, setToken] = useState<number>(tokenState);
  const [remainedEnergy, setRemainedEnergy] = useState<number>(100);

  function formatNumberWithCommas(number: number, locale = "en-US") {
    return new Intl.NumberFormat(locale).format(number);
  }

  const bodyRef = useRef<HTMLDivElement>(null);
  const [score, setScore] = useState<string>("+1");

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    const rect = event.currentTarget.getBoundingClientRect();
    const x = Math.random() * (event.clientX - rect.left);
    const y = Math.random() * (event.clientY - rect.top);

    const styleElement = document.createElement("style");
    document.head.appendChild(styleElement);

    styleElement.sheet &&
      styleElement.sheet.insertRule(
        "@keyframes fade-out-top-right {0% {opacity: 1; transform: translateY(0); } 100% {opacity: 0;transform: translateY(-100%);}}",
        0
      );

    const newDiv = document.createElement("div");
    newDiv.textContent = `${score}`;
    newDiv.style.backgroundImage = "url('image/dollar.png')";
    newDiv.style.backgroundRepeat = "no-repeat";
    newDiv.style.backgroundPosition = "center";
    newDiv.style.fontSize = "30px";
    newDiv.style.paddingLeft = "30px";
    newDiv.style.display = "flex";
    newDiv.style.justifyContent = "center";
    newDiv.style.alignItems = "center";
    newDiv.style.backgroundSize = "cover";
    newDiv.style.width = "40px";
    newDiv.style.height = "40px";
    newDiv.style.position = "absolute";
    newDiv.style.left = `${x + 50}px`;
    newDiv.style.top = `${y}px`;
    newDiv.style.color = score == "+1" ? "#fff" : "#fff";
    newDiv.className =
      "dynamic-div animate-fadeouttopright transform max-sm:text-3xl text-5xl font-bold transition not-selectable";

    bodyRef.current && bodyRef.current.appendChild(newDiv);
    const interval = setTimeout(() => newDiv && newDiv.remove(), 100);

    return () => clearTimeout(interval);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainedEnergy((pre) =>
        pre == 99 ? 100 : pre < 100 ? pre + 1 : 100
      );
    }, 21600);
    return () => clearInterval(interval);
  }, []);

  const handleTap = (event: React.MouseEvent<HTMLDivElement>) => {
    if (remainedEnergy > 0) {
      if (remainedEnergy < 500) {
        setScore("+2");
        setToken(token + 2);
        //dispatch(updateWallet(address, token + 2, remainedEnergy - 1));
      } else {
        setScore("+1");
        setToken(token + 1);
        //dispatch(updateWallet(address, token + 1, remainedEnergy - 1));
      }
      setRemainedEnergy(remainedEnergy - 1);
      handleClick(event);
    }
  };

  const handleMouseDown = () => {
    setImgStatus(true);
  };

  const handleMouseLeave = () => {
    setImgStatus(false);
  };

  return (
    <div className="h-full flex flex-col text-center items-center justify-around">
      <Level level={3} />
      <div className="flex flex-row justify-center items-center text-center gap-2">
        <h1 className="text-5xl text-white">{formatNumberWithCommas(token)}</h1>
        <h3 className="text-center items-center justify-center text-[24px]">POINTS</h3>
      </div>
      <div>
        <div
          className={`relative bg-[url('/image/coin.jpg')] rounded-full bg-cover w-[400px] h-[400px] max-sm:w-[280px] max-sm:h-[280px] z-10 ${remainedEnergy > 0
            ? "cursor-pointer"
            : "cursor-not-allowed opacity-50"
            } ${imgStatus && "scale-110"} transition-all duration-300`}
          ref={bodyRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseLeave}
          onClick={handleTap}
        />
      </div>
      <div>
        <div className="flex flex-col items-center not-selectable w-full">
          <div className="flex justify-between items-center w-full mb-2">
            <span className="text-[#9E9E9E] text-xl font-bold">
              Today’s Energy Limit
            </span>
            <h3 className="text-500 text-xl font-bold">{remainedEnergy}</h3>
          </div>
          <ProgressBar value={remainedEnergy} />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Home;
