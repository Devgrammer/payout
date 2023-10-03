import {ArrowRight,ArrowRightDark,Question,QuestionsDark,QuestionsLite} from '../../assets/appsIcon/AppIcons'

const DashboardCard = ({id,
       title,
       amount,
       order,
       isActive,
       timeDate,
       typeUpdate}) => {
  const formatNumberWithCommas = (number) => {
    const numString = number.toString();
    const formattedString = numString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return formattedString;
  };
   
  return (
    <div
      className={`Dashboard-card-contianer box-border w-auto ${
        id === 1 ? "h-[154px] pt-4 p-0" : "h-[118px] p-4"
      } rounded-lg flex flex-col  gap-y-4 shadow-sm ${
        isActive ? "bg-primary text-white" : "bg-white text-septa "
      }`}
    >
      <div className="dashboard-card-title capitalize text-beta flex items-center gap-2 px-4">
        {title} {isActive ? <QuestionsLite /> : <QuestionsDark />}{" "}
      </div>
      <div className="dashboard-card-amt flex justify-between items-center px-4">
        <div className="card-amt text-alpha font-medium">
          {"₹"} {formatNumberWithCommas(amount)}
        </div>
        <div className="card-order  flex items-center">
          <div className="order-text text-beta underline">
            {order + " " + "orders"}
          </div>
          <div className="order-goto-icon">
            {isActive ? <ArrowRight /> : <ArrowRightDark />}
          </div>
        </div>
      </div>
      {title === "next payout" && (
        <div className="dashboard-card-time h-9 box-border flex justify-between items-center bg-[#0E4F82] rounded-lg px-6 py-2">
          <div className="time-title text-gamma font-normal">
            Next Payout date
          </div>
          <div className="time-text text-gamma font-medium">Today, 04:00PM</div>
        </div>
      )}
    </div>
  );
}

export default DashboardCard