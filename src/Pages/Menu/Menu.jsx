import { Helmet } from "react-helmet";
import Cover from "../Shared/Cover/Cover";

const Menu = () => {
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
     
    </div>
  );
};

export default Menu;
