import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://byeongkim.ca:8000/api',
  timeout: 4000,
});

export const getTaskList = async () => {
  try {
    const response = await instance.get('/tasks');
    const { status, data } = response;

    if (status === 200 || status === 201) {
      console.log({status, data});
      return { status, data };
    }
  } catch (error) {
    return error;
  }
};
