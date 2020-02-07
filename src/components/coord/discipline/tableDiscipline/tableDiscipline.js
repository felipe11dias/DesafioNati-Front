import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { getUser_type } from '../../../../service/auth';

const TableDiscipline = props => {

      return (
         <React.Fragment>
            <Table responsive>
               <tbody>
                  {props.disciplines.length > 0 ? props.disciplines.map( discipline => {
                     return (
                           <tr key={discipline.id}>
                              <td>
                                 <label>Id</label><br/>
                                 <h6>{discipline.id}</h6>
                              </td>
                              <td>
                                 <label>Name</label><br/>
                                 <h6>{discipline.name}</h6>
                              </td>
                              <td>
                                 <label>Credits</label><br/>
                                 <h6>{discipline.credits}</h6>
                              </td>
                              { getUser_type() === "3" ?
                              <React.Fragment>
                              {/* <td>
                                 <Link to={`/edit/user/${course.id}`}>Edit</Link>
                              </td> */}
                              <td>
                                 <Button variant="danger" onClick={(id) => props.handleRemove(discipline.id)}>Remove</Button>
                              </td>
                              </React.Fragment> : "" }
                           </tr>
                        );
                     })  : <tr><td><h5 className="text-center" >No have discipline</h5></td></tr> }
               </tbody>
            </Table>
         </React.Fragment>
      );

}

export default TableDiscipline;
