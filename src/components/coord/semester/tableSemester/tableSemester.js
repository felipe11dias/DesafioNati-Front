import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { getUser_type } from '../../../../service/auth';

const TableSemester = props => {

      return (
         <React.Fragment>
            <Table responsive>
               <tbody>
                  {props.semesters.length > 0 ? props.semesters.map( semester => {
                     return (
                           <tr key={semester.id}>
                              <td>
                                 <label>Id</label><br/>
                                 <h6>{semester.id}</h6>
                              </td>
                              <td>
                                 <label>Total credits</label><br/>
                                 <h6>{semester.totalCredits}</h6>
                              </td>
                              <td>
                                 <label>Number semester</label><br/>
                                 <h6>{semester.numberSemester}</h6>
                              </td>
                              { getUser_type() === "3" ?
                              <React.Fragment>
                              {/* <td>
                                 <Link to={`/edit/user/${course.id}`}>Edit</Link>
                              </td> */}
                              <td>
                                 <Button variant="danger" onClick={(id) => props.handleRemove(semester.id)}>Remove</Button>
                              </td>
                              </React.Fragment> : "" }
                           </tr>
                        );
                     })  : <tr><td><h5 className="text-center" >No have semester</h5></td></tr> }
               </tbody>
            </Table>
         </React.Fragment>
      );

}

export default TableSemester;
