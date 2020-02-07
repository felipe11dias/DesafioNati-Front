import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import './login.css';
import api from "../../service/api";
import { Col, Row, Form, Button, Card } from "react-bootstrap";
import { login, getUser_type, logout } from "../../service/auth";

class Login extends Component {

   constructor(){
      super();

      this.handleSignIn = this.handleSignIn.bind()
      this.handleChange = this.handleChange.bind()
   }

   state = {
       email: "",
   };

   handleSignIn = async e => {
      e.preventDefault();
      const body = {
         emailLogin: this.state.email
      }
      await api.post("/api/login", body).then( response => {
         if(response.data !== ""){
            login(response.data['name'], response.data['email'], response.data['gender'], response.data['id'], response.data['type'], response.data['course']);

            if(getUser_type() === "0" || getUser_type() === "1" || getUser_type() === "3"){
               this.props.history.push("/courses");
            }else{
               if(getUser_type() === "2"){
                  this.props.history.push("/users");
               }else {
                  logout();
               }
            }
            window.location.reload();
         }else{
            alert("User not found!");
         }
      });

   };

   handleChange = e => {
      this.setState({ email: e.target.value })
   }

   render() {
       return (
           <React.Fragment>
              <Row>
                  <Col>
                     <Card>
                        <Card.Title>
                           Access your account by email
                        </Card.Title>
                        <Card.Body>
                           <Form onSubmit={(e) => this.handleSignIn(e)}>
                              <Form.Group controlId="formEmail">
                                 <Form.Label>Email address</Form.Label>
                                 <Form.Control type="email" placeholder="Enter email" onChange={(e) => this.handleChange(e)} />
                                 <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                 </Form.Text>
                              </Form.Group>
                              <Button variant="primary" type="submit">
                                 Submit
                              </Button>
                           </Form>
                        </Card.Body>
                     </Card>
                  </Col>
              </Row>
           </React.Fragment>
       );
   }
}

export default withRouter(Login);