import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getUser_type } from '../../../../service/auth';

const TableUser = props => {

      return (
         <React.Fragment>
            <Table responsive>
               <tbody>
                  {props.users.length > 0 ? props.users.map( user => {
                     return (
                           <tr key={user.id}>
                              <td>
                                 <label>Id</label><br/>
                                 <h6>{user.id}</h6>
                              </td>
                              <td>
                                 <label>Email</label><br/>
                                 <h6>{user.email}</h6>
                              </td>
                              <td>
                                 <label>Name</label><br/>
                                 <h6>{user.name}</h6>
                              </td>
                              <td>
                                 <label>Gender</label><br/>
                                 <h6>{user.gender}</h6>
                              </td>
                              <td>
                                 <label>Semester</label><br/>
                                 <h6>{user.semester}</h6>
                              </td>
                              <td>
                                 <label>Type</label><br/>
                                 <h6>{user.type}</h6>
                              </td>
                              <td>
                                 <label>User Course(s)</label><br/>
                                 <h6>{user.course.length > 0 ? user.course.map( course => {
                                   return <h6>{course.name}</h6>
                                 }) : ""}</h6>
                              </td>
                              { getUser_type() === "2" ?
                              <React.Fragment>
                              <td>
                                 <Link variant="warning" to={`/edit/user/${user.id}`}>Edit</Link>
                              </td>
                              <td>
                                 <Button variant="danger" onClick={(id) => props.handleRemove(user.id)}>Remove</Button>
                              </td>
                              </React.Fragment> : "" }
                           </tr>
                        );
                     })  : <tr><td><h5 className="text-center">No have user</h5></td></tr> }
               </tbody>
            </Table>
         </React.Fragment>
      );

}

export default TableUser;
