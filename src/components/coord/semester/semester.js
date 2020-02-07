import React, { Component } from 'react';

import { Row, Col, Card } from 'react-bootstrap';
import api from '../../../service/api';
import { Link } from 'react-router-dom';
import TableSemester from './tableSemester/tableSemester';
import { getUser_type } from '../../../service/auth';
import WithoutPermission from '../../withoutPermission/withoutPermission';

// Courses visão de coordenador
export class SemesterCoord extends Component {
   constructor(){
      super();

      this.handleListSemester = this.handleListSemester.bind(this)
      this.handleRemove = this.handleRemove.bind(this)
   }

   state = {
      semesters: []
   }

   handleListSemester = async () => {
      await api.get(`/api/semesters`).then( response => {
         this.setState({ semesters: response.data })
      }).catch( error => {
         alert("There was an error in semester");
      });
   }

   handleRemove = async (id) => {
      await api.delete(`/api/semester/${id}`).then( response => {
         window.location.reload();
         alert("Successfully remove semester");
      }).catch( Error => {
         alert("Error remove semester");
      });
   }

   componentDidMount() {
      this.handleListSemester();
   }

   render() {
      if(getUser_type() === "0" || getUser_type() === "1" || getUser_type() === "3"){
         // Todos os semestres disponiveis
         return (
            <React.Fragment>
               <Row>
                  <Col>
                     <Card>
                     {getUser_type() === "3" ?
                        <React.Fragment>
                           <Link style={{color: "green" }} to="/newSemester">New Semester</Link>
                           <Link to="/addCourseToSemester">Add Course to Semester</Link>
                           <Link style={{color:"red"}} to="/removeCourseToSemester">Remove Course to Semester</Link>
                        </React.Fragment> : ""}
                        <Card.Title>
                           Semester(s)
                        </Card.Title>
                        <Card.Body>
                           <TableSemester handleRemove={this.handleRemove} semesters={this.state.semesters} />
                        </Card.Body>
                     </Card>
                  </Col>
               </Row>
            </React.Fragment>
         );
      }
      if(getUser_type() === "2"){
         return <WithoutPermission />
      }
   }
}

export default SemesterCoord;
