import axiosInstance from '../Instance/index';

export const fetchCollection = async () => {
  const response = await axiosInstance.get('/getCollection');
  return response.data;
};

