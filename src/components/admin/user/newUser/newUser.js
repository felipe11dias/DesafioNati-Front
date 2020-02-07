import React, { Component } from 'react';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import api from '../../../../service/api';
import { getUser_type } from '../../../../service/auth';
import WithoutPermission from '../../../withoutPermission/withoutPermission';

export class NewUser extends Component {

   state = {
      name: "",
      email: "",
      type: 1, //user default type
      gender: "",
      semester: 0
   }

   handleSubmit = async (e) => {
      e.preventDefault();

      const body = {
         name: this.state.name,
         email: this.state.email,
         gender: this.state.gender,
         type: this.state.type,
         semester: this.state.semester,
      }

      await api.post("/api/user", body).then( response => {
         this.props.history.push("/users");
         window.location.reload();
         alert("Successfully created user");
       }).catch( Error => {
          alert("Error creating user");
       });
   }


   handleChange = (e) => {
      if(e.target.name === 'name') {
         this.setState({ name: e.target.value })
      }
      if(e.target.name === 'email') {
         this.setState({ email: e.target.value })
      }
      if(e.target.name === 'semester') {
         this.setState({ semester: e.target.value })
      }
      if(e.target.name === 'gender') {
         this.setState({ gender: e.target.value })
      }
      if(e.target.name === 'type') {
         this.setState({ type: e.target.value })
      }
   }


   render() {

      if(getUser_type() === "2"){
            return (
               <React.Fragment>
                  <Row>
                     <Col>
                        <Card>
                           <Form onSubmit={(e) => this.handleSubmit(e)}>
                              <Form.Group controlId="formBasicEmail">
                                 <Form.Label>Email </Form.Label>
                                 <Form.Control type="email" name="email" placeholder="Email" onChange={(e) => this.handleChange(e)} required />
                              </Form.Group>

                              <Form.Group controlId="formBasicName">
                                 <Form.Label>Name</Form.Label>
                                 <Form.Control type="text" name="name" placeholder="Name" onChange={(e) => this.handleChange(e)} required />
                              </Form.Group>

                              <Form.Group controlId="formBasicGender">
                                 <Form.Label>Gender</Form.Label>
                                 <Form.Control type="text" name="gender" placeholder="Gender" onChange={(e) => this.handleChange(e)} required />
                              </Form.Group>

                              <Form.Group controlId="formBasicSemester">
                                 <Form.Label>Semester</Form.Label>
                                 <Form.Control type="number" name="semester" placeholder="Semester" onChange={(e) => this.handleChange(e)} required/>
                              </Form.Group>

                              <Form.Group controlId="formBasicType">
                                 <Form.Label>Type</Form.Label>
                                 <Form.Control type="number" name="type" placeholder="Type" onChange={(e) => this.handleChange(e)} required />
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
         if(getUser_type() === "3"){
            return <WithoutPermission />
         }

         if(getUser_type() === "0" || getUser_type() === "1"){
            return <WithoutPermission />
         }
      }
}

export default NewUser;
