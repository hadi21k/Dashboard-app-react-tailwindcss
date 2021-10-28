import Header from "./Header/Header";
import MoneyContent from "./MoneySection/MoneyContent";
import DetailMainSection from "./DetailSection/DetailMainSection";
import Table from "./TableSection/Table";
import OrderReviewSection from "./OrderReview/OrderReviewSection";
const Dashboard = () => {
  return (
    <div
      className={`w-screen px-10 py-4 relative min-h-screen lg:ml-[243px] transition-all duration-500 bg-gray-100`}
    >
      <Header sectionName="Dashboard" />
      <MoneyContent />
      <DetailMainSection />
      <div className="flex flex-wrap lg:space-x-[2%] lg:space-y-0 space-y-[2%] mt-4">
        <Table />
        <OrderReviewSection />
      </div>
    </div>
  );
};

export default Dashboard;
