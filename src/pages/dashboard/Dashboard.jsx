import { Download, Search, Sort } from "../../assets/appsIcon/AppIcons";
import DashboardCard from "../../components/dashboardCard/DashboardCard";
import DBTable from "../../components/dbTable/DBTable";

const Dashboard = () => {
  const cardList = [
    {
      id: 1,
      cardTitle: "next payout",
      cardAmt: 2312.23,
      cardOrder: 23,
      isActive: true,
      timeDate: new Date(),
      typeUpdate: " ",
    },
    {
      id: 2,
      cardTitle: "amount pending",
      cardAmt: 92312.2,
      cardOrder: 13,
      isActive: false,
      timeDate: "",
      typeUpdate: " ",
    },
    {
      id: 3,
      cardTitle: "amount processed",
      cardAmt: 2392312.19,
      cardOrder: 23,
      isActive: false,
      timeDate: "",
      typeUpdate: " ",
    },
  ];
  return (
    <div className="dashbaord-main-container p-8 flex flex-col gap-y-8">
      <section className="overview-section-main-container flex flex-col gap-y-6 ">
        <div className="overview-title flex justify-between items-center  ">
          <div className="overview-text text-octa text-xl font-medium">
            Overview
          </div>
          <div className="overview-console bg-transparent border placeholder:text-[4D4D4D] border-[#D9D9D9] rounded-md flex px-[14px] py-[6px]">
            <select className="bg-transparent outline-none border-none">
              <option>This Month</option>
              <option>This Week</option>
              <option>This Day</option>
              <option>This Year</option>
            </select>
          </div>
        </div>
        <div className="overview card-contianer grid grid-flow-col gap-x-5 w-full">
          {cardList?.map((card, index) => {
            return (
              <DashboardCard
                key={`card-${index}`}
                id={card?.id}
                title={card?.cardTitle}
                order={card?.cardOrder}
                amount={card?.cardAmt}
                isActive={card?.isActive}
                timeDate={card?.timeDate}
                typeUpdate={card?.typeUpdateUpdate}
              />
            );
          })}
        </div>
      </section>

      <section className="transaction-this-section-month-section-main-container flex flex-col gap-y-6">
        <div className="transaction-title text-octa text-xl font-medium">
          Transaction | This Month
        </div>
        <div className="transaction-pill-container flex gap-x-3">
          <div
            className={`pill w-fit h-8 rounded-full px-4 py-[6px] box-border ${
              2 === 3 ? "bg-primary text-white" : "bg-[#e6e6e6] text-quarterly"
            } flex justify-center items-center  text-gamma font-medium`}
          >
            Payout (6)
          </div>
          <div
            className={`pill w-fit h-8 rounded-full px-4 py-[6px] box-border ${
              2 === 2 ? "bg-primary text-white" : "bg-[#e6e6e6] text-quarterly"
            } flex justify-center items-center  text-gamma  font-medium`}
          >
            Refund (6)
          </div>
        </div>
        <div className="transaction-table-container"></div>
        <div className="transaction-table-toolbar-container flex justify-between items-center">
          <div className="table-toolbar-search flex items-center border rounded-md border-[D9D9D9] w-[248px] ">
            <div className="search-icon bg-transparent h-12 rounded-xl p-4 pr-2 rounded-r-none rounded-rb-none  box-border flex justify-center items-center">
              <Search />
            </div>
            <input
              type="text"
              placeholder="Order ID or transaction ID"
              className="title-search-bar w-[200px] rounded-xl rounded-l-none rounded-b-0 pl-1 h-12 bg-transparent px-4 py-[9px] text-[#808080] border-none outline-none placeholder:text-[15px] placeholder:text-[#808080]"
            />
          </div>
          <div className="table-tool-console flex gap-x-4">
            <div className="sort-btn w-[79px] h-[36px] border  border-[D9D9D9] rounded-[4px] py-[6px] px-3 flex justify-center items-center gap-x-1 cursor-pointer">
              Sort <Sort />
            </div>
            <div className="download-btn w-[36px] h-[36px] border  border-[D9D9D9] rounded-[4px] p-2 flex justify-center items-center gap-x-1 cursor-pointer">
              <Download />
            </div>
          </div>
        </div>
        <div className="table-container">
          <DBTable />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
