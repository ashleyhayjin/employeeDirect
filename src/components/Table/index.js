import React from "react";
import TableRow from "../TableRow";

function Table (props){


  return(
    <table className="table">
    <tr>
      <th scope="col">Image</th>
      <th onClick={props.sortName} scope="col">Name</th>
      <th scope="col">Phone</th>
      <th scope="col">DOB</th>
    </tr>
  {props.results && props.results.map((user) => <TableRow image={user.picture.thumbnail} dob={user.dob.date} phone={user.cell} name={`${user.name.first} ${user.name.last}`}></TableRow>)}
    </table>
  )
}

export default Table;