import React, { Component } from 'react';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import api from '../../../../service/api';
import { getUser_type } from '../../../../service/auth';
import WithoutPermission from '../../../withoutPermission/withoutPermission';

class RemoveCourseToSemester extends Component {

   state = {
      course_id: "",
      id: ""
   }

   handleSubmit = async (e) => {
      e.preventDefault();

      const body = {
         course_id: this.state.course_id,
         id: this.state.id,
      }


      await api.post("/api/course/semester/remove", body).then( response => {
         this.props.history.push("/semesters");
         window.location.reload();
         alert("Successfully add course to semester");
      }).catch( Error => {
         alert("Error add course to semester");
      });
   }

   handleChange = (e) => {
      if(e.target.name === 'course_id') {
         this.setState({ course_id: e.target.value })
      }
      if(e.target.name === 'id') {
         this.setState({ id: e.target.value })
      }
   }

   render() {

      if(getUser_type() === "3"){
            return (
               <React.Fragment>
                  <Row>
                     <Col>
                        <Card>
                           <Form onSubmit={(e) => this.handleSubmit(e)}>
                              <Form.Group controlId="formBasicName">
                                 <Form.Label>Course id</Form.Label>
                                 <Form.Control type="number" placeholder="Course id"  name="course_id" onChange={(e) => this.handleChange(e)} required/>
                              </Form.Group>
                              <Form.Group controlId="formBasicName">
                                 <Form.Label>Semester id</Form.Label>
                                 <Form.Control type="number" placeholder="Semester id"  name="id" onChange={(e) => this.handleChange(e)} required/>
                              </Form.Group>
                              <Button variant="primary" type="submit">
                                 Submit
                              </Button>
                           </Form>
                        </Card>
                     </Col>
                  </Row>
               </React.Fragment>
            );
         }

         if(getUser_type() === "2"){
            return <WithoutPermission />
         }

         if(getUser_type() === "0" || getUser_type() === "1"){
            return <WithoutPermission />
         }
      }
}

export default RemoveCourseToSemester;
