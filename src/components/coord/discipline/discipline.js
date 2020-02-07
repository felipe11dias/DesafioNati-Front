import React, { Component } from 'react';

import { Row, Col, Card } from 'react-bootstrap';
import api from '../../../service/api';
import { Link } from 'react-router-dom';
import TableDiscipline from './tableDiscipline/tableDiscipline';
import { getUser_type } from '../../../service/auth';
import WithoutPermission from '../../withoutPermission/withoutPermission';

// Courses visão de coordenador
class DisciplineCoord extends Component {
   constructor(){
      super();

      this.handleListDiscipline = this.handleListDiscipline.bind(this)
      this.handleRemove = this.handleRemove.bind(this)
   }

   state = {
      disciplines: []
   }

   handleListDiscipline = async () => {
      await api.get(`/api/disciplines`).then( response => {
         this.setState({ disciplines: response.data })
      }).catch( error => {
         alert("There was an error in discipline");
      });
   }

   handleRemove = async (id) => {
      await api.delete(`/api/discipline/${id}`).then( response => {
         window.location.reload();
         alert("Successfully remove discipline");
      }).catch( Error => {
         alert("Error remove discipline");
      });
   }

   componentDidMount() {
      this.handleListDiscipline();
   }

   render() {
      if(getUser_type() === "0" || getUser_type() === "1" || getUser_type() === "3"){
      // Todas as disciplinas disponiveis
         return (
            <React.Fragment>
               <Row>
                  <Col>
                     <Card>
                        {getUser_type() === "3" ?
                        <React.Fragment>
                           <Link style={{color:"green"}} to="/newDiscipline">New Discipline</Link>
                           <Link to="/addCourseToDiscipline">Add Course to Discipline</Link>
                           <Link style={{color:"red"}} to="/removeCourseToDiscipline">Remove Course to Discipline</Link>
                        </React.Fragment> : ""}
                        <Card.Title>
                           Discipline(s)
                        </Card.Title>
                        <Card.Body>
                           <TableDiscipline handleRemove={this.handleRemove} disciplines={this.state.disciplines}  />
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

export default DisciplineCoord;
