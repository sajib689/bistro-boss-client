import { Link } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featured from "../../../assets/home/featured.jpg";
import "./Featured.css";
const Featured = () => {
  return (
    <div className="mb-24 bg-fixed featured text-white pt-8 my-20">
      <SectionTitle
        subHeading={"FROM OUR MENU"}
        heading={"Check it out"}
      ></SectionTitle>
      <div className=" md:flex justify-center items-center pb-20 pt-12 px-36 bg-slate-500 bg-opacity-60 ">
        <div>
          <img src={featured} alt="" />
        </div>
        <div className="md:ml-10">
          <p>March 20, 2023</p>
          <p>WHERE CAN I GET SOME?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <div className="mt-10">
            <Link className="font-[500] hover:bg-black  text-[#FFF] uppercase border-b-4 border-white color-[#1F2937] rounded-lg p-3">
              read more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
