import http from "../http/index2"


export const getTasks = () => {
return http.get('api/users?page=2');
}

//export default getTasks;
