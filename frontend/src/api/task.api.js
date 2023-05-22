import axios from 'axios';

const createTaskRequest = async (taskData) => {
  try {
    const response = await axios.post('http://localhost:4000/tasks', taskData);
    if (response.status === 201) {
      return response.data;
    } else {
      throw new Error("Error creating task");
    }
  } catch (error) {
    console.error(error);
    throw new Error("Internal server error");
  }
};

export default createTaskRequest;