import axios from "axios"

export default axios.create({
 baseURL:"http://jsonplaceholder.typicode.com",
 headers:{
     'user-key':'7f79883e5acc935e480f048b718f8f0c'
}
})