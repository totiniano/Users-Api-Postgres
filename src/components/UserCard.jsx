import { useState } from "react";
import "./styles/userCard.css";

const UserCard = ({ user, deleteUserById, setUpdateInfo, setFormClose }) => {
    const [showConfirm, setShowConfirm] = useState(false);

    const handleShowConfirm = () => {
        setShowConfirm(true);
    };

    const handleCloseModal = () => {
        setShowConfirm(false);
    };

    const handleDelete = () => {
        deleteUserById(user.id);
        setShowConfirm(false);
    };

    const handleUpdate = () => {
        setUpdateInfo(user);
        setFormClose(false);
    };

    return (
        <article className="user">
            <h2 className="user__name">
                {user.first_name} {user.last_name}
            </h2>
            <ul className="user__list">
                <li className="user__item">
                    <span className="user__label">Email:</span>
                    <span className="user__value">{user.email}</span>
                </li>
                <li className="user__item">
                    <span className="user__label">Birthday:</span>

                    <span className="user__value">
                        <span className="user__icon--happy">
                            <i class="bx bxs-cake"></i>
                        </span>
                        {user.birthday}
                    </span>
                </li>
            </ul>
            <footer className="user__footer">
                <button
                    className="user__btn user__delete"
                    onClick={handleShowConfirm}
                >
                    <i className="bx bx-trash user__icon"></i>
                </button>

                <button
                    className="user__btn user__update"
                    onClick={handleUpdate}
                >
                    <i className="bx bx-edit-alt user__icon"></i>
                </button>
            </footer>

            {showConfirm && (
                <div className="modal_eliminar">
                    <div className="modal__content">
                        <h2 className="modal__title">Confirm Delete</h2>
                        <p>Are you sure you want to delete this user?</p>
                        <div className="modal__buttons">
                            <button
                                className="modal__button modal__button--delete app__btn"
                                onClick={handleDelete}
                            >
                                Delete
                            </button>

                            <button
                                className="modal__button modal__button--cancel app__btn"
                                onClick={handleCloseModal}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </article>
    );
};

export default UserCard;
