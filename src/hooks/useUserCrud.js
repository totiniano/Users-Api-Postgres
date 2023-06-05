import axios from "axios";
import { useState } from "react";

const useUserCrud = () => {
    const [users, setUsers] = useState();

    // const url = "http://localhost:8080/api/v1/users";

    const url = "https://crud-entregable-ii-users.onrender.com/api/v1/users";

    //GET
    const getAllUsers = () => {
        axios
            .get(url)
            .then((res) => setUsers(res.data))
            .catch((err) => console.log(err));
    };

    //POST
    const createNewUser = (data) => {
        axios
            .post(url, data)
            .then(() => getAllUsers())
            .catch((err) => console.log(err));
    };

    //DELETE
    const deleteUserById = (id) => {
        const urlDelete = `${url}/${id}`;
        axios
            .delete(urlDelete)
            .then(() => getAllUsers())
            .catch((err) => console.log(err));
    };

    //UPDATE
    const updateUserById = (id, data) => {
        const urlUpdate = `${url}/${id}`;
        console.log(urlUpdate);
        axios
            .put(urlUpdate, data)
            .then(() => getAllUsers())
            .catch((err) => console.log(err));
    };

    return {
        users,
        getAllUsers,
        createNewUser,
        deleteUserById,
        updateUserById,
    };
};

export default useUserCrud;
