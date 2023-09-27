import { Helmet } from "react-helmet";
import Cover from "../Shared/Cover/Cover";
import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuItem from "../Shared/MenuItem/MenuItem";
import { Link } from "react-router-dom";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover
        img={"https://i.ibb.co/gJCN0rc/banner3.jpg"}
        title={"OUR MENU"}
        description={"Would you like to try a dish?"}
      ></Cover>
      <div className="mt-24 mb-12">
        <SectionTitle
          heading={"TODAY'S OFFER"}
          subHeading={"Don't miss"}
        ></SectionTitle>
        <div className="grid md:grid-cols-2 gap-10">
          {offered.map((item) => (
            <MenuItem key={item.name} item={item}></MenuItem>
          ))}
        </div>
        <div className="text-center mt-20">
          <Link className="p-2 mb-24 font-[500] text-[17px] uppercase border-b-4 border-cyan-900 color-[#1F2937] rounded-lg">
            ORDER YOUR FAVOURITE FOOD
          </Link>
        </div>
      </div>
      <Cover
        img={"https://i.ibb.co/cFctM1T/chef-service.jpg"}
        title={"DESSERTS"}
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></Cover>
      <div className="mt-24 mb-12">
        <div className="grid md:grid-cols-2 gap-10">
          {desserts.slice(0, 6).map((item) => (
            <MenuItem key={item.name} item={item}></MenuItem>
          ))}
        </div>
        <div className="text-center mt-20">
          <Link className="p-2 mb-24 font-[500] text-[17px] uppercase border-b-4 border-cyan-900 color-[#1F2937] rounded-lg">
            ORDER YOUR FAVOURITE FOOD
          </Link>
        </div>
      </div>
      <Cover
        img={"https://i.ibb.co/cFctM1T/chef-service.jpg"}
        title={"PIZZA"}
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></Cover>
      <div className="mt-24 mb-12">
        <div className="grid md:grid-cols-2 gap-10">
          {pizza.slice(0, 7).map((item) => (
            <MenuItem key={item.name} item={item}></MenuItem>
          ))}
        </div>
        <div className="text-center mt-20">
          <Link className="p-2 mb-24 font-[500] text-[17px] uppercase border-b-4 border-cyan-900 color-[#1F2937] rounded-lg">
            ORDER YOUR FAVOURITE FOOD
          </Link>
        </div>
      </div>
      <Cover
        img={"https://i.ibb.co/cFctM1T/chef-service.jpg"}
        title={"SALADS"}
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></Cover>
      <div className="mt-24 mb-12">
        <div className="grid md:grid-cols-2 gap-10">
          {salad.slice(0, 8).map((item) => (
            <MenuItem key={item.name} item={item}></MenuItem>
          ))}
        </div>
        <div className="text-center mt-20">
          <Link className="p-2 mb-24 font-[500] text-[17px] uppercase border-b-4 border-cyan-900 color-[#1F2937] rounded-lg">
            ORDER YOUR FAVOURITE FOOD
          </Link>
        </div>
      </div>
      <Cover
        img={"https://i.ibb.co/cFctM1T/chef-service.jpg"}
        title={"SOUPS"}
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></Cover>
      <div className="mt-24 mb-12">
        <div className="grid md:grid-cols-2 gap-10">
          {soup.slice(0, 6).map((item) => (
            <MenuItem key={item.name} item={item}></MenuItem>
          ))}
        </div>
        <div className="text-center mt-20 mb-24">
          <Link className="p-2 font-[500] text-[17px] uppercase border-b-4 border-cyan-900 color-[#1F2937] rounded-lg">
            ORDER YOUR FAVOURITE FOOD
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
