import axios from "../configs";

export const getData = (url, params, token) => {
  return axios.get(`${url}`, {
    params,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const postData = (url, payload, token) => {
  return axios.post(`${url}`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const putData = (url, payload, token) => {
  return axios.put(`${url}`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
