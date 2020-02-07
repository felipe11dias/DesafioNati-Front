import React, { Component } from 'react';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import api from '../../../../service/api';
import { getUser_type } from '../../../../service/auth';
import WithoutPermission from '../../../withoutPermission/withoutPermission';

export class NewDiscipline extends Component {

   state = {
      name: "",
      credits: 0
   }

   handleSubmit = async (e) => {
      e.preventDefault();

      const body = {
         name: this.state.name,
         credits: this.state.credits,
      }

      await api.post("/api/discipline", body).then( response => {
         this.props.history.push("/disciplines");
         window.location.reload();
         alert("Successfully created discipline");
      }).catch( Error => {
         alert("Error creating discipline");
      });
   }

   handleChange = (e) => {
      if(e.target.name === 'name') {
         this.setState({ name: e.target.value })
      }
      if(e.target.name === 'credits') {
         this.setState({ credits: e.target.value })
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
                                 <Form.Control type="text" name="name" placeholder="Name" onChange={(e) => this.handleChange(e)} required/>
                              </Form.Group>

                              <Form.Group controlId="formBasicGender">
                                 <Form.Label>Credits</Form.Label>
                                 <Form.Control type="number" name="credits" placeholder="Credits" onChange={(e) => this.handleChange(e)} required />
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

export default NewDiscipline;
