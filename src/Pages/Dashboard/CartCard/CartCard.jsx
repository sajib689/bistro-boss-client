import { FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const CartCard = ({ item, index }) => {
  const { image, name, price } = item;
  return (
    <tr>
      <th>{index + 1}</th>
      <th className="w-8 ">
        <img className="rounded-[50%]" src={image} alt="" />
      </th>
      <td>{name}</td>
      <td>${price}</td>
      <td>
        <Link className="">
          <FaRegTrashAlt className="text-red-600 w-8 h-7 rounded-lg"></FaRegTrashAlt>
        </Link>
      </td>
    </tr>
  );
};

export default CartCard;
