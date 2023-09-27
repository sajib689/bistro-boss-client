import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import { Link } from "react-router-dom";
import useMenu from "../../../Hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu()
          const popularItems = menu.filter((item) => item.category === "popular");

  return (
    <div className="mt-24 mb-12">
      <SectionTitle
        heading={"FROM OUR MENU"}
        subHeading={"Check it out"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-10">
        {popularItems.map((item) => (
          <MenuItem key={item.name} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center mt-20">
            <Link className="font-[500] text-[17px] uppercase border-b-4 border-cyan-900 color-[#1F2937] rounded-lg">View Full  Menu</Link>
        </div>
    </div>
  );
};

export default PopularMenu;
