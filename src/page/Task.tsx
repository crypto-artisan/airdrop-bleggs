
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProgressBar from "../component/ProgressBar";

const data = [
  {
    "id": "twitter",
    "title": "Follow X",
    "img": "image/twitter.svg",
    "points": 100,
    "link": "https://x.com/FydeTreasury"
  },
  ,
  {
    "id": "telegram",
    "title": "Join TG Channel",
    "img": "image/telegram.png",
    "points": 100,
    "link": "https://t.me/fydetreasuryprotocolofficial"
  },
  {
    "id": "discord",
    "title": "Join Discord",
    "img": "image/discord.svg",
    "points": 100,
    "link": "https://discord.gg/fyde-treasury-protocol-1173642434379526144"
  },
  // {
  //   "id": "fyde",
  //   "title": "View Website",
  //   "img": "image/fyde-single.png",
  //   "points": 100,
  //   "link": "https://www.fyde.fi/"
  // },
  {
    "id": "linkedin",
    "title": "Follow Linkedin",
    "img": "image/linkedin.svg",
    "points": 100,
    "link": "https://www.linkedin.com/company/80446952/admin/feed/posts/"
  },
  {
    "id": "medium",
    "title": "Follow Medium",
    "img": "image/medium.png",
    "points": 100,
    "link": "https://medium.com/@fydetreasury"
  }
];

const Task: React.FC = () => {

  const handleFollow = (link: any, id: any) => {
    console.log(link, id);
    toast.success("handleFollow!!!")
  }

  const handleClaim = () => {
    toast.success("handleClaim!!!")
  }

  return (
    <div className="h-full flex flex-col text-center items-center justify-around">
      <div className="flex flex-col w-full text-white justify-between items-center">
        <section className="flex flex-row gap-4 items-center">
          <p className="text-[16px] text-left">
            COMPLETE THE TASKS TO EARN MORE POINTS AND INVITATIONS
          </p>
          <img src="image/HowToFees.svg" alt="crown" className="h-[100px] w-[100px] rounded-full scale-150" />
        </section>
        <section className="flex flex-row border-[1px] border-dashed rounded-[10px] w-full items-center justify-between" style={{ borderColor: "#2e2448", padding: "0 0" }} >
          <div className='flex flex-col p-2 justify-around'>
            <div className="flex flex-row gap-2">
              <h2 className="text-[14px]">Complete</h2>
              <h2 className="text-[14px] text-gray opacity-70">7/7</h2>
            </div>
            <ProgressBar value={100} />
          </div>
          <button onClick={handleClaim} className='customBtn text-white p-2 rounded-[10px] text-[20px] text-center'>+200 <span className="text-[16px] justify-center items-center">points</span></button>
        </section>
      </div>
      <div className="flex flex-col w-full gap-2">
        <h1 className="font-bold text-[24px] text-white text-left">Tasks</h1>
        <div className="flex flex-col w-full items-center justify-between gap-2 overflow-auto h-[30vh]" style={{ padding: "10px" }}>
          {
            data?.map((item: any, index) => (
              <div key={index} className="item flex flex-row w-full justify-between gap-2 py-2 items-center">
                <section className="flex flex-row gap-2 justify-between items-center">
                  <img src={item?.img} alt="x-icon" className="h-[40px] w-[40px]" />
                  <div className="flex flex-col text-left">
                    <h1 className="title text-[16px] text-white">{item?.title}</h1>
                    <h2 className="title text-[12px] opacity-80">
                      +{item?.points} Points
                    </h2>
                  </div>
                </section>
                <button onClick={() => handleFollow(item?.link, item?.id)} className="customBtn startBtn text-white px-4 py-2">Start</button>
              </div>
            ))
          }
          {/* <div className="item flex flex-row w-full justify-between gap-2 py-2 items-center">
            <section className="flex flex-row gap-2 justify-between items-center">
              <img src="image/fyde-single.png" alt="x-icon" className="h-[40px] w-[40px]" />
              <div className="flex flex-col text-left">
                <h1 className="title text-[16px] text-white">Deposit</h1>
                <h2 className="title text-[12px] opacity-80">
                  +1000 Points
                </h2>
              </div>
            </section>
            <button onClick={handleDeposit} className="customBtn text-white px-4 py-2">
              Start
            </button>
          </div> */}
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Task;