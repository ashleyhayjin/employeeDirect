import React from 'react';

function TableRow (props){
    return (
        <tr>
            <td><img src={props.image} alt="" /></td>
            <td>{props.name}</td>
            <td>{props.phone}</td>
            <td>{props.dob}</td>
         </tr>
    )
}

export default TableRow;