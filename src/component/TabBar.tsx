import React from "react";

interface TabProps {
    tab: string;
    setTab: (status: string) => void;
}

const TabBar: React.FC<TabProps> = ({ tab, setTab }) => {
    return (
        <div className="flex flex-row justify-between absolute md:w-[40%] w-full h-[60px] bottom-0 bg-black-100 items-center border-t-[1px] border-gray px-4">
            <img src="/image/home.png" onClick={() => setTab("Home")} className={`${tab == 'Home' && 'scale-125 border-white border-b-2'} cursor-pointer w-10 h-10 hover:scale-125 transition-all duration-300`} />
            <img src="/image/task.png" onClick={() => setTab("Task")} className={`${tab == 'Task' && 'scale-125 border-white border-b-2'} cursor-pointer w-10 h-10 hover:scale-125 transition-all duration-300`} />
            <img src="/image/ranking.png" onClick={() => setTab("Ranking")} className={`${tab == 'Ranking' && 'scale-125 border-white border-b-2'} cursor-pointer w-10 h-10 hover:scale-125 transition-all duration-300`} />
        </div>
    )
}
export default TabBar;