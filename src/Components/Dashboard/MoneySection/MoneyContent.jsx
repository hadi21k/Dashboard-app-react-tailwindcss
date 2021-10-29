import MoneySection from "./MoneySection";
import {
  CashIcon,
  GlobeIcon,
  UsersIcon,
  ShoppingCartIcon,
} from "@heroicons/react/solid";
const MoneyContent = () => {
  return (
    <div className="grid grid-cols-1 gap-6 py-6 sm:grid-cols-2 xl:grid-cols-4">
      <MoneySection
        state="Today's Money"
        value={53000}
        percent={55}
        icon={<CashIcon className="w-7 h-7" />}
      />
      <MoneySection
        state="Today's Users"
        value={2300}
        percent={3}
        icon={<GlobeIcon className="w-7 h-7" />}
      />
      <MoneySection
        state="New Clients"
        value={3462}
        percent={-2}
        icon={<UsersIcon className="w-7 h-7" />}
      />
      <MoneySection
        state="Sales"
        value={103430}
        percent={5}
        icon={<ShoppingCartIcon className="w-7 h-7" />}
      />
    </div>
  );
};

export default MoneyContent;
