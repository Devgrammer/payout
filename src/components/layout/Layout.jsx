//Building the UI of Dukaan  Plan

//[H]= Horizontal expansion tree
//[V]= Vertical expansion tree

//Skeleton
//Layout=SideBar + DisplayScreen => [H]
//DisplayScreen = TopTitleBar + Dashboard => [V]
//Dashboard = OverViewSection + TransactionThisMonth => [V]
//OverViewSection= Title + PayoutCardSection=> [V]
//PayoutCardSection= PayoutCard{3} => [H]
//TransactionThisMonth= Title + PillsSection + TableSection =>[V]
//PillsSection = Pills{2} =>[H]
//TableSection => ToolsRow + Table => [V]


//Colors
//PrimaryColor: #146EB4;
//SecondaryColor:#1E2640
//TertiaryColor:rgba(255, 255, 255, 0.10);
//QuarterlyColor:#808080
//PentColor: #999999
//HexaColor:#17B31B
//SeptaColor: #4D4D4D

//Font
//PrimaryFont: Galano Grotesque;
//SecondaryFont:
//TertiaryFont:

//FontSize
//alpha: 32px;
//beta: 16px;
//gamma: 14px;
//delta: 12px;


//Padding
//alpha: 32px;
//beta: 24px;
//gamma: 20px;
//delta: 14px;
//epsilon: 16px;
//zeta: 12px;
//eta: 10px


import Sidebar from '../sideBar/Sidebar'
import TitleBar from '../titleBar/TitleBar';

const Layout = ({children}) => {
  return (
    <div className="layout-main-container flex">
      <Sidebar />
      <div className="right-side-display-main-container bg-[#fafafa] w-[calc(100vw-224px)] h-screen flex flex-col">
        <TitleBar />
        <div className="display-region h-[calc(100vh-64px)] overflow-x-hidden overflow-y-scroll scroll-smooth">{children}</div>
      </div>
    </div>
  );
}

export default Layout

