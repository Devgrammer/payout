import { useState } from "react";
import {
  Analytic,
  Audience,
  Appearance,
  Delivery,
  Discounts,
  Home,
  Marketing,
  Orders,
  Payouts,
  Plugins,
  Products,
  ArrowDown,
  Wallet,
} from "../../assets/appsIcon/AppIcons";
import UserImage from '../../assets/img/nish.png'

const Sidebar = () => {
  let initialSideMenuItemList = [
    { id: 1, itemName: "home", icon: <Home />, isSelected: false },
    { id: 2, itemName: "order", icon: <Orders />, isSelected: false },
    { id: 3, itemName: "products", icon: <Products />, isSelected: false },
    { id: 4, itemName: "delivery", icon: <Delivery />, isSelected: false },
    { id: 5, itemName: "marketing", icon: <Marketing />, isSelected: false },
    { id: 6, itemName: "analytics", icon: <Analytic />, isSelected: false },
    { id: 7, itemName: "payouts", icon: <Payouts />, isSelected: true },
    { id: 8, itemName: "discounts", icon: <Discounts />, isSelected: false },
    { id: 9, itemName: "audience", icon: <Audience />, isSelected: false },
    { id: 10, itemName: "appearance", icon: <Appearance />, isSelected: false },
    { id: 11, itemName: "plugins", icon: <Plugins />, isSelected: false },
  ];

  let initialSideMenuItemsArray = Object.values(initialSideMenuItemList);
  const [menuItem, setMenuItem] = useState(initialSideMenuItemsArray);

  return (
    <div className="flex flex-col justify-between  w-[224px] h-screen bg-secondary py-epsilon px-eta box-border gap-y-6">
      <div className="menu-inner-wrapper">
        <div className="user-info-container flex justify-between items-center px-[8.5px] pb-[24px]">
          <div className="user-wrapper flex gap-x-3 items-center">
            <div className="avatar-img w-[39px] h-[39px] rounded-lg bg-cover bg-no-repeat bg-center" style={{backgroundImage:`url(${UserImage})`}}></div>
            <div className="avatar-content flex flex-col">
              <div className="avatar-name text-[15px] font-medium float-left text-white">
                Nishyan
              </div>
              <div className="avatar-name text-[13px] underline text-slate-400 float-left">
                Visit store
              </div>
            </div>
          </div>
          <div className="avatar-menu-drop">
            <ArrowDown />
          </div>
        </div>
        <div className="menu-item-contianer">
          {menuItem?.map((item, index) => {
            return (
              <SideBarItem
                id={item?.id}
                key={`item-${index}`}
                itemIndex={index}
                name={item?.itemName}
                icon={item?.icon}
                isSelected={item?.isSelected}
              />
            );
          })}
        </div>
      </div>

      <div className="wallet-info-container px-3 py-[6px] rounded-[4px] bg-tertiary flex items-center gap-2">
        <div className="wallet-icon rounded-md p-[6px]">
          <Wallet />
        </div>
        <div className="wallet-amt  flex flex-col items-start">
          <div className="available-amt text-slate-300 text=[13px]">
            Available credits
          </div>
          <div className="amt font-medium  text-white text-beta">221.13</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

const SideBarItem = (props) => {
  const { itemIndex, id, name, icon, isSelected } = props;
  return (
    <div
      className={`sidebar-item-container w-full h-9 py-2 px-epsilon box-borde flex items-center box-border rounded-sm gap-3 hover: cursor-pointer ${
        isSelected ? "bg-tertiary" : "bg-transparent"
      }`}
      title={name}
    >
      {icon && <div className="icon-container">{icon}</div>}
      {name && (
        <div className="item-name-container text-gamma text-white font-medium capitalize">
          {name}
        </div>
      )}
    </div>
  );
};
