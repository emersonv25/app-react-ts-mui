import axios from "axios";

export default axios.create({
  baseURL: import.meta.env.VITE_API
});


export async function loginUser(username: string, password: string)
{
  const response = await axios.post(import.meta.env.VITE_API + '/auth/login', {
    username: username, password: password
  })
  return response.data
}
export async function registerUser(username: string, fullName: string, email: string ,password: string)
{
  const response = await axios.post(import.meta.env.VITE_API + '/auth/register', {
    username: username, fullName: fullName, email: email ,password: password
  })
  return response.data
}