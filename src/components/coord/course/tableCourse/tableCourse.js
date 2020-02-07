import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { getUser_type } from '../../../../service/auth';
import { Link } from 'react-router-dom';

const TableCourse = props => {

      return (
         <React.Fragment>
            <Table responsive>
               <tbody>
                  {props.courses.length > 0 ? props.courses.map( course => {
                     return (
                           <tr key={course.id}>
                              <td>
                                 <label>Id</label><br/>
                                 <h6>{course.id}</h6>
                              </td>
                              <td>
                                 <label>Name</label><br/>
                                 <h6>{course.name}</h6>
                              </td>
                              <td>
                                 <label>Shift</label><br/>
                                 <h6>{course.shift}</h6>
                              </td>
                              <td>
                                 <label>Total semester</label><br/>
                                 <h6>{course.totalSemester}</h6>
                              </td>
                              <td>
                                 <label>Necessary credits</label><br/>
                                 <h6>{course.necessaryCredits}</h6>
                              </td>
                              { getUser_type() === "3" ?
                              <React.Fragment>
                              {/* <td>
                                 <Link to={`/edit/user/${course.id}`}>Edit</Link>
                              </td> */}
                              <td>
                                 <Button variant="danger" onClick={(id) => props.handleRemove(course.id)}>Remove</Button>
                              </td>
                              </React.Fragment> : "" }
                           </tr>
                        );
                     })  : <tr><td><h5 className="text-center" >No have course</h5></td></tr> }
               </tbody>
            </Table>
         </React.Fragment>
      );

}

export default TableCourse;
