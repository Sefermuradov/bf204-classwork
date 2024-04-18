import { BASE_URL } from "./base.js";

let endpoint = "suppliers";
export async function deleteDataById(id) {
  try {
    const response = await axios.delete(`${BASE_URL}/${endpoint}/${id}`);
    return response;
  } catch (error) {
    console.log(error.message);
  }
}

export async function addNewData(obj) {
    try {
      const response = await axios.post(`${BASE_URL}/${enspoints}`, obj);
    } catch (error) {
      console.log(error);
    }
  }
  