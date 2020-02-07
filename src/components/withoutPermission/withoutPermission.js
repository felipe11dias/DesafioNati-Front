
import React, { Component } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getUser_type } from '../../service/auth';

class WithoutPermission extends Component  {

   render(){
      return(
         <React.Fragment>
            <Row>
               <Col>
                  <Card>
                     <Card.Body>
                        <div >
                           <div className="d-flex">
                              <label className="m-auto">Without Permission</label>
                           </div>
                           <div className="d-flex">
                           {getUser_type() === "2" ?
                              <React.Fragment>
                                 <Link to="/course">Página inicial</Link>
                              </React.Fragment>
                           : ""}
                           {getUser_type() === "1" ?
                              <React.Fragment>
                                 <Link to="/users">Página inicial</Link>
                              </React.Fragment>
                           : ""}
                           </div>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
         </React.Fragment>
      )
   }
}

export default WithoutPermission;