import { FaRegTrashAlt, FaUserShield } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AllUsersCard = ({ user, index, refetch }) => {
  const {_id ,name, email } = user;

  const handleDelete = _id => {
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
        fetch(`http://localhost:3000/users/${_id}`, {
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
  const handleAdmin = _id => {
    fetch(`http://localhost:3000/users/admin/${_id}`,{
      method: 'PATCH',
    
    })
    .then( res => res.json())
    .then( data => {
      if(data.modifiedCount) {
        refetch();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `${user.name} is an Admin Now`,
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
  }
  return (
    <tr>
      <th>{index + 1}</th>
      <th>{name}</th>
      <td>{email}</td>
      <td>
        {user.role === "admin" ? (
          "admin"
        ) : (
          <Link onClick={() => handleAdmin(_id)}>
            {" "}
            <FaUserShield className="text-[#D1A054] w-8 h-7 rounded-lg"></FaUserShield>
          </Link>
        )}
      </td>
      <td>
        <Link onClick={() => handleDelete(user)}>
          <FaRegTrashAlt className="text-red-600 w-8 h-7 rounded-lg"></FaRegTrashAlt>
        </Link>
      </td>
    </tr>
  );
};

export default AllUsersCard;
