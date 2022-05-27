import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../components/Loading';
import UserRow from './UserRow';

const Allusers = () => {
    const{data:users,isLoading,refetch}=useQuery('users',()=>fetch('http://localhost:5000/user').then(res=>res.json()));

    if(isLoading){
        return <Loading></Loading>
    }
    return (
        
          <div>   
            <div className="overflow-x-auto">
  <table className="table   w-full">
    
    <thead>
      <tr> <td>user email</td>
      
       </tr>
    </thead>
    <tbody>
     {users.map(user=><UserRow key={user._id}  user={user} refetch={refetch} ></UserRow>)}  
     
    </tbody>
  </table>
</div>

</div>
       
    );
};

export default Allusers;