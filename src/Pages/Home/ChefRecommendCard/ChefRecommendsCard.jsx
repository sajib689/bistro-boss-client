import { Link } from "react-router-dom";

const ChefRecommendsCard = ({ item }) => {
  const { name, image, description } = item;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="card-actions">
            <Link className="font-[500] text-[17px] uppercase border-b-4 border-yellow-900 text-yellow-800 rounded-lg p-2 hover:bg-black">
              add to cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefRecommendsCard;
