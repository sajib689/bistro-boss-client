import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import ChefRecommendsCard from "../ChefRecommendCard/ChefRecommendsCard";

const ChefRecommends = () => {
  const [chefRecommends, setChefRecommends] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const items = data.filter((item) => item.category === "salad");
        setChefRecommends(items);
      });
  }, []);
  return (
    <div className="mb-24">
      <SectionTitle
        subHeading={"Should Try"}
        heading={"CHEF RECOMMENDS"}
      ></SectionTitle>
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4">
        {chefRecommends.slice(0, 6).map((item) => (
          <ChefRecommendsCard key={item.id} item={item}></ChefRecommendsCard>
        ))}
      </div>
    </div>
  );
};

export default ChefRecommends;
