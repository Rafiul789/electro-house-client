import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({user,refetch}) => {
    const{email,role}=user;

    const makeAdmin=()=>{
fetch(`http://localhost:5000/user/admin/${email}`)
.then(res=> res.json())
.then(data=>{
    refetch()
    console.log(data)

toast.success(`Successfully make an admin`)
})
    }
    return (
        <div>
            <tr>
        <th>1</th>
        <td>{email}</td>
        <td>{role!=='admin' && <button onClick={makeAdmin}  class="btn btn-active">Make Admin</button>} </td>
        <td><button class="btn btn-error">Remove User</button>  </td>
      </tr>
        </div>
    );
};

export default UserRow;