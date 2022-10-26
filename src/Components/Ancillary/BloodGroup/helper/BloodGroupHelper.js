import axios from "axios";

export const getBloodGroups = async () => {
    let res = []
    await axios.get('http://localhost:6969/api/bloodGroups')
        .then(function (response) {
            console.log("response?.data?.data: ", response?.data?.data);
            res = response?.data?.data
        })
        .catch(function (error) {
            res = error
        })
    return res
}

export const addBloodGroup = (params) => {
    let res = []
    axios.post('http://localhost:6969/api/bloodGroup', {
        name: params?.name
    })
        .then(function (response) {
            console.log('response after adding: ', response);
            res = response?.data?.data
        })
        .catch(function (error) {
            res = error
        })
    return res
}

// export const deleteBloodGroup = (params) => {
//     let res = []
//     axios.delete(`http://localhost:6969/api/bloodGroup/${params?.id}`)
//         .then(function (response) {
//             res = response?.data?.data
//         })
//         .catch(function (error) {
//             res = error
//         })
//     return res
// }