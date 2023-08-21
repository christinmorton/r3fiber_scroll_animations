
const API_URL = 'http://localhost:8000';
const API_URL_GET_ALL_NOTES_BY_USER = '/api/v1/notes';
const API_URL_CREATE_NOTE = '/api/v1/notes/create';

// const getUserNotes = async (token) => {
//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };

//   const response = await axios.get(
//     API_URL + API_URL_GET_ALL_NOTES_BY_USER,
//     config
//   );

//   return response.data;
// };

// const createNote = async (noteData, token) => {
//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };

//   const response = await axios.post(
//     API_URL + API_URL_CREATE_NOTE,
//     noteData,
//     config
//   );

//   return response.data;
// };

const playService = {};

export default playService;
