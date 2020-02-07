import React, {Component} from 'react';
import { logout, getUser_type } from '../../../service/auth';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './header.css'

class Header extends Component {

    constructor() {
        super();


        this.state = {
            error : ""
        }
    }

    handleSignOut = async e => {
        e.preventDefault();
        logout();
        window.location.reload();
    };

   render (){

    // USER ALUNO 0> 0, PROFESSOR -> 1 , USER ADMIN -> 2 e USER COORDENADOR -> 3

    if(getUser_type() === "3"){
        return (
            <React.Fragment>
                <Row className="rowHeader">
                    <Col className="colHeader">
                        <div className="headerLinks">
                            <Link to="/users">Users</Link>
                            <Link to="/courses">Courses</Link>
                            <Link to="/semesters">Semesters</Link>
                            <Link to="/disciplines">Disciplines</Link>

                            <Button variant="danger" onClick={(e) => logout(e)}>Logout</Button>
                        </div>
                    </Col>
                </Row>
            </React.Fragment>
            );
    }else {

        if(getUser_type() === "2"){
            return (
                <React.Fragment>
                  <Row className="rowHeader">
                      <Col className="colHeader">
                          <div className="headerLinks">
                                  <Link to="/users">Users</Link>
                                  <Button variant="danger" onClick={(e) => logout(e)}>Logout</Button>
                          </div>
                      </Col>
                  </Row>
              </React.Fragment>
                  );
        }else{

            if(getUser_type() === "0" || getUser_type() === "1"){
                return (
                    <React.Fragment>
                        <Row className="rowHeader">
                        <Col className="colHeader">
                                <div className="headerLinks">
                                    <Link to="/courses">Courses</Link>
                                    <Link to="/semesters">Semesters</Link>
                                    <Link to="/disciplines">Disciplines</Link>
                                    <Button variant="danger" onClick={(e) => logout(e)}>Logout</Button>
                                </div>
                        </Col>
                        </Row>
                    </React.Fragment>
                );
            }else {
                logout()
                return <h1>Not Found</h1>
            }
        }
    
    }

   }

} export default Header;