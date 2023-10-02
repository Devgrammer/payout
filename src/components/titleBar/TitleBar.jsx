
import {
  DownArrow,
  Notify,
  Question,
  Search,
} from "../../assets/appsIcon/AppIcons";

const TitleBar = () => {
  return (
    <div className="titlebar-main-container h-16 flex justify-between w-full bg-white border-b  border-[#D9D9D9] py-3 px-8  ">
      <div className="title-bar-left flex gap-x-6 items-center">
        <div className="page-title text-octa text-xl font-medium">Payouts</div>
        <div className="page-title-quest text-septa text-delta flex items-center gap-x-1">
          <Question /> How it works
        </div>
      </div>
      <div className="title-bar-center flex items-center   ">
        <div className="search-icon bg-[#F2F2F2] h-12 rounded-md p-4 pr-2 rounded-r-none rounded-rb-none  box-border flex justify-center items-center">
          <Search />
        </div>
        <input
          type="text"
          placeholder="Search features, tutorials, etc."
          className="title-search-bar w-[400px] rounded-md rounded-l-none rounded-b-0 pl-1 h-12 bg-[#F2F2F2] px-4 py-[9px] text-[#808080] border-none outline-none placeholder:text-[15px] placeholder:text-[#808080]"
        />
      </div>

      <div className="title-bar-right flex justify-end items-center">
        <div className="title-console flex gap-x-4">
          <div className="notification w-10 h-10 box-border flex justify-center items-center rounded-full bg-[#E6E6E6]">
            <Notify />
          </div>
          <div className="menu-option">
            <DownArrow />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleBar;
