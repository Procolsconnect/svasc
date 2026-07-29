import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

export const fetchAdminData = async (endpoint) => {
  const res = await axios.get(`${BASE_URL}${endpoint}`);
  return res.data.data;
};

export const saveAdminData = async (endpoint, id, formData, fileKey) => {
  // page-heros uses PUT /:pageKey (id is the pageKey string here)
  const isPageHero = endpoint.includes('page-heros');
  const method = (id && !isPageHero) ? 'put' : (isPageHero ? 'put' : 'post');
  const url = isPageHero
    ? `${BASE_URL}${endpoint}/${id}`
    : (id ? `${BASE_URL}${endpoint}/${id}` : `${BASE_URL}${endpoint}`);

  const data = new FormData();
  Object.keys(formData).forEach(key => {
    if (key === fileKey && formData[key] instanceof File) {
      data.append(key, formData[key]);
    } else if (key !== fileKey && key !== '_id' && key !== 'createdAt' && key !== 'updatedAt' && key !== '__v') {
      if (Array.isArray(formData[key])) {
        data.append(key, JSON.stringify(formData[key]));
      } else if (formData[key] !== null && formData[key] !== undefined) {
        data.append(key, formData[key]);
      }
    }
  });

  const res = await axios({ method, url, data, headers: { 'Content-Type': 'multipart/form-data' } });
  return res.data;
};

export const deleteAdminData = async (endpoint, id) => {
  const res = await axios.delete(`${BASE_URL}${endpoint}/${id}`);
  return res.data;
};

