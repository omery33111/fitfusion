import axios from "axios";
import { Callback } from "../../models/Callback";
import { administratorURL } from "../../endpoints/endpoints";



export function getCallbacks()
{
  const myToken = JSON.parse(localStorage.getItem("token") as string)
  const accessToken = myToken ? myToken.access : "";
  let config = {
      headers: { 'Authorization': `Bearer ${accessToken}` }
    }
  return new Promise<{ data: Callback[] }>((resolve) =>
    axios.get(`${administratorURL}/get_callbacks/`, config).then((res) => resolve({ data: res.data })));
}



export function deleteCallback(id: string) {
  const myToken = JSON.parse(localStorage.getItem("token") as string)
  const accessToken = myToken ? myToken.access : "";
  let config = {
      headers: { 'Authorization': `Bearer ${accessToken}` }
    }
  return new Promise<{ data: Callback }>((resolve) =>
    axios.delete(`${administratorURL}/delete_callback/${id}/`, config).then((res) => resolve({ data: res.data }))
  );
}
