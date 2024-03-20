import './category.css';

const CategoryTable = (props)=>(
    <table>
    <thead>
      <tr>
        <th>Function type</th>
        <th>Number</th>
        {/* <th>Actions</th> */}
      </tr>
    </thead>
    <tbody>
        {props.users.length>0?(
            props.users.map((user)=>(
                <tr key={user.id|| index}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        {/* <td>
                        <button onClick={()=>{
                            props.editRow(user)
                        }} className="button muted-button">Edit</button>
                        <button onClick={()=>props.deleteUser(user.id)} className="button muted-button">Delete</button>
                        <select className="browser-default custom-select">
                         <option>Status</option>
                         <option value="1">Done</option>
                         <option value="2">On process</option>
                         <option value="3">Rejected</option>
                        </select>
                        </td> */}
                    </tr>

            ))
            ):(
                <tr>
                    <td colSpan={3}>No users</td>
                </tr>
            )
        }

    </tbody>
  </table>
);

export default CategoryTable;

