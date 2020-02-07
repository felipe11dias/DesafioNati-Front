import React, { Component } from 'react';

import { Row, Col, Card } from 'react-bootstrap';
import api from '../../../service/api';

import TableCourse from './tableCourse/tableCourse';
import { Link } from 'react-router-dom';
import { getUser_type } from '../../../service/auth';
import WithoutPermission from '../../withoutPermission/withoutPermission';

// Courses visão de coordenador
class CourseCoord extends Component {
   constructor(){
      super();

      this.handleListCourse = this.handleListCourse.bind(this)
      this.handleRemove = this.handleRemove.bind(this)
   }

   state = {
      courses: []
   }

   handleListCourse = async () => {
      await api.get(`/api/courses`).then( response => {
         this.setState({ courses: response.data })
      }).catch( error => {
         
      });
   }

   handleRemove = async (id) => {
      await api.delete(`/api/course/${id}`).then( response => {
         window.location.reload();
         alert("Successfully remove course");
      }).catch( Error => {
         alert("Error remove course");
      });
   }

   componentDidMount() {
      this.handleListCourse();
   }

   render() {

      if(getUser_type() === "0" || getUser_type() === "1" || getUser_type() === "3"){
      // Todos os cursos disponiveis
      return (
         <React.Fragment>
            <Row>
               <Col>
                  <Card>
                     {getUser_type() === "3" ?
                     <React.Fragment>
                        <Link style={{color:"green"}} to="/newCourse">New Course</Link>
                        <Link to="/addCourseToUser">Add Course to User</Link>
                        <Link style={{color:"red"}} to="/removeCourseToUser">Remove Course to User</Link>
                     </React.Fragment> : ""}
                     <Card.Title>
                        Course(s)
                     </Card.Title>
                     <Card.Body>
                        <TableCourse handleRemove={this.handleRemove} courses={this.state.courses}  />
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

export default CourseCoord;
