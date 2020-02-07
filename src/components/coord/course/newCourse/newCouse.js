import React, { Component } from 'react';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import api from '../../../../service/api';
import { getUser_type } from '../../../../service/auth';
import WithoutPermission from '../../../withoutPermission/withoutPermission';

export class NewCourse extends Component {

   state = {
      name: "",
      necessaryCredits: 0,
      shift: "",
      totalSemester: 0
   }

   handleSubmit = async (e) => {
      e.preventDefault();

      const body = {
         name: this.state.name,
         necessaryCredits: this.state.necessaryCredits,
         shift: this.state.shift,
         totalSemester: this.state.totalSemester,
      }

      await api.post("/api/course", body).then( response => {
         this.props.history.push("/courses");
         window.location.reload();
         alert("Successfully created course");
      }).catch( Error => {
         alert("Error creating course");
      });
   }

   handleChange = (e) => {
      if(e.target.name === 'name') {
         this.setState({ name: e.target.value })
      }
      if(e.target.name === 'necessaryCredits') {
         this.setState({ necessaryCredits: e.target.value })
      }
      if(e.target.name === 'shift') {
         this.setState({ shift: e.target.value })
      }
      if(e.target.name === 'totalSemester') {
         this.setState({ totalSemester: e.target.value })
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
                                 <Form.Label>Name</Form.Label>
                                 <Form.Control type="text" placeholder="Name"  name="name" onChange={(e) => this.handleChange(e)} required/>
                              </Form.Group>
      
                              <Form.Group controlId="formBasicGender">
                                 <Form.Label>Shift</Form.Label>
                                 <Form.Control type="text" placeholder="Shift" name="shift" onChange={(e) => this.handleChange(e)} required />
                              </Form.Group>
      
                              <Form.Group controlId="formBasicSemester">
                                 <Form.Label>Total semester</Form.Label>
                                 <Form.Control type="number" placeholder="Total semester" name="totalSemester" onChange={(e) => this.handleChange(e)} required />
                              </Form.Group>
      
                              <Form.Group controlId="formBasicType">
                                 <Form.Label>Necessary credits</Form.Label>
                                 <Form.Control type="number" placeholder="Necessary credits" name="necessaryCredits" onChange={(e) => this.handleChange(e)} required />
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

export default NewCourse;
