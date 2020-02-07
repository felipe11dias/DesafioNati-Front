import React, { Component } from 'react';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import api from '../../../../service/api';
import { getUser_type } from '../../../../service/auth';
import WithoutPermission from '../../../withoutPermission/withoutPermission';

class NewSemester extends Component {

   state = {
      totalCredits: 0,
      numberSemester: 0
   }

   handleSubmit = async (e) => {
      e.preventDefault();

      const body = {
         totalCredits: this.state.totalCredits,
         numberSemester: this.state.numberSemester,
      }

      await api.post("/api/semester", body).then( response => {
         this.props.history.push("/semesters");
         window.location.reload();
         alert("Successfully created semester");
       }).catch( Error => {
          alert("Error creating semester");
       });
   }

   handleChange = (e) => {
      if(e.target.name === 'totalCredits') {
         this.setState({ totalCredits: e.target.value })
      }
      if(e.target.name === 'numberSemester') {
         this.setState({ numberSemester: e.target.value })
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
                                 <Form.Label>Total credits</Form.Label>
                                 <Form.Control type="number" name="totalCredits" placeholder="Total credits" onChange={(e) => this.handleChange(e)} required/>
                              </Form.Group>

                              <Form.Group controlId="formBasicGender">
                                 <Form.Label>Number semester</Form.Label>
                                 <Form.Control type="number" name="numberSemester" placeholder="Number semester" onChange={(e) => this.handleChange(e)} required />
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

export default NewSemester;
