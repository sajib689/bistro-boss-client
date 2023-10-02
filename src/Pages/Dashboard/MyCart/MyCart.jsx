import { Helmet } from "react-helmet-async";
import useCart from "../../../Hooks/useCart/useCart";
import CartCard from "../CartCard/CartCard";

const MyCart = () => {
  const [cart, refetch] = useCart();
  const total = cart?.reduce((sum, item) => item.price + sum, 0);

  return (
    <div className=" w-full p-10">
      <Helmet>
        <title>Bistro Boss | My Cart</title>
      </Helmet>
      <div className="uppercase font-semi-bold h-[40px] flex items-center justify-evenly">
        <h3 className="text-3xl">Total Items: {cart.length}</h3>
        <h3 className="text-3xl">Total Price: ${total}</h3>
        <button className="btn btn-warning btn-sm">Pay</button>
      </div>
      <div className="overflow-x-auto mt-7">
        <table className="table">
          {/* head */}
          <thead className="bg-[#D1A054] text-white ">
            <tr className="uppercase">
              <th>S</th>
              <th>Item Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {cart.map((item, index) => (
              <CartCard
                // handleDelete={handleDelete}
                key={item._id}
                index={index}
                item={item}
                refetch={refetch}
              ></CartCard>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
