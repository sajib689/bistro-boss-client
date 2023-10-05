import { useQuery } from '@tanstack/react-query'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { Helmet } from 'react-helmet-async';
import AllUsersCard from '../AllUsersCard/AllUsersCard';

const AllUsers = () => {
  const token = localStorage.getItem('token')
   const {data: users = [], refetch} = useQuery(['users'], async () => {
    const res = await fetch('http://localhost:3000/users',{
      headers: {
        authorization: `Bearer ${token}`
      }
    })
    return res.json()
   })
    return (
        <div className=" w-full p-10">
        <Helmet>
          <title>Bistro Boss | All Users</title>
        </Helmet>
        <SectionTitle subHeading={'How many??'} heading={'MANAGE ALL USERS'}></SectionTitle>
        <div className="uppercase font-semi-bold h-[40px] ">
          <h3 className="text-3xl">Total Users: {users.length}</h3>
          
        </div>
        <div className="overflow-x-auto mt-7">
          <table className="table">
            {/* head */}
            <thead className="bg-[#D1A054] text-white ">
              <tr className="uppercase">
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users.map((user, index) => (
                <AllUsersCard
                  // handleDelete={handleDelete}
                  key={user._id}
                  index={index}
                  user={user}
                  refetch={refetch}
                ></AllUsersCard>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default AllUsers;