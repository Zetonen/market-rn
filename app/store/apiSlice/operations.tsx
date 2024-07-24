import axios from 'axios';

export const addPost = async post => {
  console.log('addPost', post);

  try {
    const res = await axios.post('/posts/', post, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};
