import React, { Component } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { getUser_type } from '../../../service/auth';
import api from '../../../service/api';
import TableUser from './tableUser/tableUser';
import { Link } from 'react-router-dom';

export class User extends Component {

   constructor(){
      super();

      this.handleListUser = this.handleListUser.bind(this)
      this.handleRemove = this.handleRemove.bind(this)
   }

   state = {
      users: []
   }

   handleListUser = async () => {
      await api.get(`/api/users/`).then( response => {
         this.setState({ users: response.data })
      }).catch( error => {
         alert("There was an error in user");
      });
   }

   handleRemove = async (id) => {
      await api.delete(`/api/user/${id}`).then( response => {
         window.location.reload();
         alert("Successfully remove user");
      }).catch( Error => {
         alert("Error remove user");
      });
   }

   componentDidMount() {
      this.handleListUser();
   }

   render() {
      return (
         <React.Fragment>
            <Row>
               <Col>
                  <Card>
                     {getUser_type() === "2" ? <React.Fragment> <Link to="/newUser">New User</Link> </React.Fragment> : ""}
                     <Card.Title>
                        User(s)
                     </Card.Title>
                     <Card.Body>
                        <TableUser handleRemove={this.handleRemove} users={this.state.users}  />
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
         </React.Fragment>
      );
   }
}

export default User;
