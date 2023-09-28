import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../../Hooks/useMenu";
import OrderTabCard from "../OrderTabCard/OrderTabCard";
const Order = () => {
    const [tabIndex, setTabIndex] = useState(0)
    const [menu] = useMenu()
    const desserts = menu.filter((item) => item.category === "dessert");
    const soup = menu.filter((item) => item.category === "soup");
    const salad = menu.filter((item) => item.category === "salad");
    const pizza = menu.filter((item) => item.category === "pizza");
    const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Cover
        title={"OUR SHOP"}
        description={"Would you like to try a dish?"}
        img={"https://i.ibb.co/Xj6n2bD/banner2.jpg"}
      ></Cover>
      <Tabs className='mt-24 mb-10' defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className=' tabs flex items-center font-bold text-yellow-700 justify-center'>
          <Tab className="tab border-b-yellow-500 tab-bordered">SALAD</Tab>
          <Tab className="tab border-b-yellow-500 tab-bordered">PIZZA</Tab>
          <Tab className="tab border-b-yellow-500 tab-bordered">SOUPS</Tab>
          <Tab className="tab border-b-yellow-500 tab-bordered">DESSERTS</Tab>
          <Tab className="tab border-b-yellow-500 tab-bordered">DRINKS</Tab>
        </TabList>
        <TabPanel>
            <OrderTabCard items={salad}></OrderTabCard>
        </TabPanel>
        <TabPanel>
        <OrderTabCard items={pizza}></OrderTabCard>
        </TabPanel>
        <TabPanel>
        <OrderTabCard items={soup}></OrderTabCard>
        </TabPanel>
        <TabPanel>
        <OrderTabCard items={desserts}></OrderTabCard>
        </TabPanel>
        <TabPanel>
        <OrderTabCard items={drinks}></OrderTabCard>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
