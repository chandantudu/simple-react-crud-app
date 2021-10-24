import { useState } from "react";

export const Actions = () => {
  let [users, setUsers] = useState([]);


  // Inserting a new user into the database.
  const insertUser = (newUser) => {
    setUsers([
        {
            id:Date.now().toString(36) + Math.random().toString(36).substr(2),
          ...newUser,
        },
        ...users,
      ]);
  };

  // Enabling the edit mode for a listed user.
  const editMode = (id) => {
    users = users.map((user) => {
      if (user.id === id) {
        user.isEditing = true;
        return user;
      }
      user.isEditing = false;
      return user;
    });
    setUsers(users);
  };

  // Cance the edit mode.
  const cancelEdit = (id) => {
    users = users.map((user) => {
      if (user.id === id) {
        user.isEditing = false;
        return user;
      }
      return user;
    });
    setUsers(users);
  };

  // Updating a user.
  const updateUser = (userData) => {
    users = users.map((user) => {
        if (user.id === userData.id) {
          user.isEditing = false;
          user.user_name = userData.user_name;
          user.user_email = userData.user_email;
          return user;
        }
        return user;
      });
    setUsers(users);
  };

  // Deleting a user.
  const deleteUser = (theID) => {
      // filter outing the user.
    let userDeleted = users.filter((user) => {
      return user.id !== theID;
    });

    setUsers(userDeleted);
  };

  return {
    users,
    editMode,
    cancelEdit,
    updateUser,
    insertUser,
    deleteUser,
  };
};