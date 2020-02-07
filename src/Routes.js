import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from './components/user/login'
import { isAuthenticated } from "./service/auth";
import { Container } from "react-bootstrap";
import UserAdmin from "./components/admin/user/user";
import NewUser from "./components/admin/user/newUser/newUser";
import CourseCoord from "./components/coord/course/course";
import NewCourse from "./components/coord/course/newCourse/newCouse";
import SemesterCoord from "./components/coord/semester/semester";
import NewSemester from "./components/coord/semester/newSemester/newSemester";
import DisciplineCoord from "./components/coord/discipline/discipline";
import NewDiscipline from "./components/coord/discipline/newDiscipline/newDiscipline";
import Header from "./components/layouts/header/header";
import WithoutPermission from "./components/withoutPermission/withoutPermission";
import CourseToUser from "./components/coord/course/userCourse/userCourse";
import RemoveCourseToUser from "./components/coord/course/removeCourse/removeCourse";
import CourseToDiscipline from "./components/coord/discipline/courseDiscipline/courseDiscipline";
import RemoveCourseToDiscipline from "./components/coord/discipline/removeCourseDiscipline/removeCourseDiscipline";
import CourseToSemester from "./components/coord/semester/semesterCourse/semesterCourse";
import RemoveCourseToSemester from "./components/coord/semester/removeSemesterCourse/removeSemesterCourse";


const PrivateRoute = ({ component: Component, ...rest }) => (
   <Route
     {...rest}
     render={props =>
        isAuthenticated() ? (
         <Component {...props} />
       ) : (
         <Redirect to={{ pathname: "/", state: { from: props.location } }} />
       )
     }
   />
 );

const Routes = () => (
   <BrowserRouter>

      { isAuthenticated() && window.location.pathname !== "/" ? <Header /> : ""}
      <Container>
        <Switch>
            {/* Rotas livres para acesso.*/}
            <Route exact path="/" component={Login} />
            <Route path="/withoutPermission" component={WithoutPermission} />
            {/* Rotas privadas para acesso.*/}

            <PrivateRoute path="/users" component={UserAdmin} />
            <PrivateRoute path="/newUser" component={NewUser} />
            <PrivateRoute path="/editUser/:user_id" component={NewUser} />

            <PrivateRoute path="/courses" component={CourseCoord}/>
            <PrivateRoute path="/newCourse" component={NewCourse}/>
            <PrivateRoute path="/addCourseToUser" component={CourseToUser}/>
            <PrivateRoute path="/removeCourseToUser" component={RemoveCourseToUser}/>

            <PrivateRoute path="/semesters" component={SemesterCoord}/>
            <PrivateRoute path="/newSemester" component={NewSemester}/>
            <PrivateRoute path="/addCourseToSemester" component={CourseToSemester}/>
            <PrivateRoute path="/removeCourseToSemester" component={RemoveCourseToSemester}/>

            <PrivateRoute path="/disciplines" component={DisciplineCoord}/>
            <PrivateRoute path="/newDiscipline" component={NewDiscipline}/>
            <PrivateRoute path="/addCourseToDiscipline" component={CourseToDiscipline}/>
            <PrivateRoute path="/removeCourseToDiscipline" component={RemoveCourseToDiscipline}/>

        </Switch>
      </Container>
  </BrowserRouter>
);

export default Routes;