import React, { Component } from 'react';

import { Row, Col, Card } from 'react-bootstrap';
import api from '../../../service/api';

import TableCourse from './tableCourse/tableCourse';
import { Link } from 'react-router-dom';
import { getUser_type, getUser_id } from '../../../service/auth';
import WithoutPermission from '../../withoutPermission/withoutPermission';

// Courses visão de coordenador
class CourseProfUser extends Component {
   constructor(){
      super();

      this.handleListCourse = this.handleListCourse.bind(this)
      this.handleRemove = this.handleRemove.bind(this)
   }

   state = {
      courses: []
   }

   handleListCourse = async () => {
      await api.get(`/api/courses/user/${getUser_id()}`).then( response => {
         this.setState({ courses: response.data })
      }).catch( error => {
         
      });
   }

   componentDidMount() {
      this.handleListCourse();
   }

   render() {

      if(getUser_type() === "0" || getUser_type() === "1"){
      // Todos os cursos disponiveis
      return (
         <React.Fragment>
            <Row>
               <Col>
                  <Card>
                     <Card.Title>
                       Your Course(s)
                     </Card.Title>
                     <Card.Body>
                        <TableCourse courses={this.state.courses}  />
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
         </React.Fragment>
      );
      }
      if(getUser_type() === "2" || getUser_type() === "3"){
         return <WithoutPermission />
      }
   }
}

export default CourseProfUser;
