import API_BASE_URL from "../base.js";
// import { endpoints } from "../base.js";

//get All
export async function getAll(endpoint) {
  let obj = {
    data: null,
    error: null,
  };
  await axios
    .get(API_BASE_URL + endpoint)
    .then((result) => {
      obj.data = result.data;
    })
    .catch((err) => {
      obj.error = err;
    });
  return obj;
}

//get One
export async function getOne(endpoint, id) {
  let obj = {
    data: null,
    error: null,
  };
  await axios
    .get(API_BASE_URL + endpoint + `?id=${id}`)
    .then((result) => {
      obj.data = result.data;
    })
    .catch((err) => {
      obj.error = err;
    });
  return obj;
}

//post
export async function post(endpoint, payload) {
  const response = null;
  await axios
    .post(API_BASE_URL + endpoint, payload)
    .then((result) => {
      response = result;
    })
    .catch((err) => {
      response = err;
    });
  return response;
}

//delete
export async function deleteOne(endpoint, id) {
  const response = null;
  await axios
    .delete(API_BASE_URL + endpoint + `/${id}`)
    .then((result) => {
      response = result;
    })
    .catch((err) => {
      response = err;
    });
  return response;
}

//put
export async function update(endpoint, id, payload) {
  let response = null;
  await axios
    .put(API_BASE_URL + endpoint + `/${id}`, payload)
    .then((result) => {
      response = result;
    })
    .catch((err) => {
      response = err;
    });
  return response;
}
