import React, { Component } from 'react';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import api from '../../../../service/api';
import { getUser_type } from '../../../../service/auth';
import WithoutPermission from '../../../withoutPermission/withoutPermission';


class RemoveCourseToUser extends Component {

   state = {
      userEmail: "",
      id: 0
   }

   handleSubmit = async (e) => {
      e.preventDefault();

      const body = {
         userEmail: this.state.userEmail,
         id: this.state.id,
      }

      await api.post("/api/course/user/remove", body).then( response => {
         this.props.history.push("/courses");
         window.location.reload();
         alert("Successfully add course to user");
      }).catch( Error => {
         alert("Error add course to user");
      });
   }

   handleChange = (e) => {
      if(e.target.name === 'userEmail') {
         this.setState({ userEmail: e.target.value })
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
                                 <Form.Label>User email</Form.Label>
                                 <Form.Control type="email" placeholder="User Email"  name="userEmail" onChange={(e) => this.handleChange(e)} required/>
                              </Form.Group>
                              <Form.Group controlId="formBasicName">
                                 <Form.Label>Id course</Form.Label>
                                 <Form.Control type="number" placeholder="Id"  name="id" onChange={(e) => this.handleChange(e)} required/>
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

export default RemoveCourseToUser;
