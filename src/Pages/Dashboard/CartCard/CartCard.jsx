import { FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CartCard = ({ item, index, refetch }) => {
  const { image, name, price } = item;

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/carts/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged === true) {
              refetch();
              Swal.fire(
                "Deleted!",
                "Your product has been deleted.",
                "success"
              );
            }
          });
      }
    });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <th className="w-8 ">
        <img className="rounded-[50%]" src={image} alt="" />
      </th>
      <td>{name}</td>
      <td>${price}</td>
      <td>
        <Link onClick={() => handleDelete(item)}>
          <FaRegTrashAlt className="text-red-600 w-8 h-7 rounded-lg"></FaRegTrashAlt>
        </Link>
      </td>
    </tr>
  );
};

export default CartCard;
