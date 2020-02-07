export const USER_NAME = "@user_name";
export const USER_ID = "@user_id";
export const USER_GENDER = "@user_gender";
export const USER_EMAIL = "@user_email";
export const USER_TYPE = "@user_type";
export const USER_COURSE = "@user_course";
export const USER_SEMESTER = "@user_semester";

export const isAuthenticated = () => sessionStorage.getItem(USER_EMAIL) !== null;

export const login = (user_name, user_email, user_gender, user_id, user_type, user_course, user_semester) => {

   sessionStorage.setItem(USER_ID, user_id);
   sessionStorage.setItem(USER_NAME, user_name);
   sessionStorage.setItem(USER_EMAIL, user_email);
   sessionStorage.setItem(USER_GENDER, user_gender);
   sessionStorage.setItem(USER_TYPE, user_type);
   sessionStorage.setItem(USER_COURSE, JSON.stringify(user_course));
   sessionStorage.setItem(USER_SEMESTER, user_semester);
 };

// Dados de usuários
export const getUser_name = () => sessionStorage.getItem(USER_NAME);
export const getUser_gender = () => sessionStorage.getItem(USER_GENDER);
export const getUser_email = () => sessionStorage.getItem(USER_EMAIL);
export const getUser_id = () => sessionStorage.getItem(USER_ID);
export const getUser_type = () => sessionStorage.getItem(USER_TYPE);
export const getUser_course = () => JSON.parse(sessionStorage.getItem(USER_COURSE) || [] );
export const getUser_semester = () => sessionStorage.getItem(USER_SEMESTER);

export const logout = () => {
   sessionStorage.clear();
   window.location.reload();
   alert("Logout success!");
};