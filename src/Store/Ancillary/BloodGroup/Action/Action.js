import { CREATE_BLOOD_GROUP, RETRIEVE_BLOOD_GROUPS, UPDATE_BLOOD_GROUP, DELETE_BLOOD_GROUP } from "./ActionTypes"
import axios from "axios";

// export const createBloodGroup = (params) => async (dispatch) => {
//   try {
//     const res = await addBloodGroup(params);
//     console.log(' after addiing blood res: ', res);

//     dispatch({
//       type: CREATE_BLOOD_GROUP,
//       payload: res,
//     });

//     return Promise.resolve(res);
//   } catch (err) {
//     return Promise.reject(err);
//   }
// };

export const createBloodGroup = (params) => async (dispatch) => {
  axios.post('http://localhost:6969/api/bloodGroup',
    {
      name: params?.name
    }
  )
    .then(function (response) {
      dispatch(retrieveBloodGroups());
      return Promise.resolve(response?.data?.data);
    })
    .catch(function (error) {
      return Promise.reject(error);
    })
};

export const retrieveBloodGroups = () => async (dispatch) => {
  await axios.get('http://localhost:6969/api/bloodGroups')
    .then(function (response) {
      dispatch({
        type: RETRIEVE_BLOOD_GROUPS,
        payload: response?.data?.data,
      });
      return Promise.resolve(response?.data?.data);
    })
    .catch(function (error) {
      return Promise.reject(error);
    });
};

//   export const updateBloodGroup = (id, data) => async (dispatch) => {
//     try {
//       const res = await TutorialDataService.update(id, data);

//       dispatch({
//         type: UPDATE_BLOOD_GROUP,
//         payload: data,
//       });

//       return Promise.resolve(res.data);
//     } catch (err) {
//       return Promise.reject(err);
//     }
//   };

export const updateBloodGroup = (params) => async (dispatch) => {
  console.log("updating Blood Group");
  axios.put(`http://localhost:6969/api/bloodGroup/${params?.id}`,
    {
      name: params?.name
    }
  )
    .then(function (response) {
      dispatch(retrieveBloodGroups());
      return Promise.resolve(response?.data?.data);
    })
    .catch(function (error) {
      return Promise.reject(error);
    })
};
export const deleteBloodGroup = (params) => async (dispatch) => {
  console.log("Deleting Blood Group");
  axios.delete(`http://localhost:6969/api/bloodGroup/${params?.id}`)
    .then(function (response) {
      dispatch(retrieveBloodGroups());
      return Promise.resolve(response?.data?.data);
    })
    .catch(function (error) {
      return Promise.reject(error);
    })
};