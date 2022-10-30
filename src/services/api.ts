import axios from "axios";

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
    username: username, fullName: fullName, email: email, password: password
  })
  return response.data
}
export async function getProfile(token: string)
{
  const response = await axios.get(import.meta.env.VITE_API + '/auth/profile', {headers: {'Authorization': `Bearer ${token}`}})
  return response.data
}
export async function updateProfile(username: string, fullName: string, email: string ,password: string)
{
  const response = await axios.put(import.meta.env.VITE_API + '/auth/update', {
    username: username, fullName: fullName, email: email, password: password
  })
  return response.data
}