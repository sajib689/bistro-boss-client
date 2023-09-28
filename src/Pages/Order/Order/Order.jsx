import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
const Order = () => {
    const [tabIndex, setTabIndex] = useState(0)
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
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
