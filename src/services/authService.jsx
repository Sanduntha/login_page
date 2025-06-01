import api from './api';

export const loginUser = async () => {

  const token = '2903|Um1jsOnfx0c18WETvMWwGx7OAUGRVj59hYSXlx0e3d857168';

  const response = await api.get('/auth/me', {

    headers: {
      Authorization: `Bearer ${token}`,
    },

    withCredentials: true,
    
  });

  return response.data;
};
