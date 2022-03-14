import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { updateUser } from "../../../actions";


function UserItem(props) {
  const dispatch = useDispatch();
  const history = useHistory()
  const { user, onEditClick, onDeleteClick, onViewClick } = props;
  
  const [isActive, setIsActive] = useState(user.isActive);

  useEffect(() => {
    setIsActive(user.isActive)
  }, [user.isActive])
  

  const handleEditClick = () => {
    if (onEditClick) onEditClick(user);
  };

  const handleDeleteClick = () => {
    if (onDeleteClick) onDeleteClick(user);
  };

  const handleViewClick = () => {
    if (onViewClick) onViewClick(user);
  };

  const handleActiveClick = () => {
    const a = [];
    user.roles?.forEach(element => {
      a.push(element.name)
    });
    const form = {
      username : user.usename,
      email : user.email,
      password : user.password,
      firstName : user.firstName,
      lastName : user.lastName,
      phone : user.phone,
      roles : a,
      isActive : !isActive
      };
    console.log(form,"edit");
    // alert(JSON.stringify(k));

    dispatch(updateUser(+user.id,form));
  };

  return (
    <>
      <tr key={user.id}>
        <td>{user.id}</td>
        <td>{user.firstName} </td>
        <td>{user.lastName} </td>
        <td>{user.email} </td>
        <td>{user.phone} </td>
        <td>
        <label className="switch switch-default switch-pill switch-success mr-2">
            <input
              type="checkbox"
              className="switch-input"
              name="isActive"
              value={isActive}
              onChange={() => {
                setIsActive(!isActive);
                handleActiveClick();
              }}
              checked={isActive}
            />
            <span className="switch-label" />
            <span className="switch-handle" />
          </label>
        </td>

        <td>
          <div className="d-flex align-items-center">
            <button
              type="button"
              className="btn btn-success btn-sm btn-icon-text mr-1"
              onClick={handleEditClick}
            >
              View
              <i className="typcn typcn-edit btn-icon-append" />
            </button>
            {user.roles[0].id ==1 ? null :
            <button
              type="button"
              className="btn btn-danger btn-sm btn-icon-text"
              onClick={handleDeleteClick}
            >
              Delete
              <i className="typcn typcn-delete-outline btn-icon-append" />
            </button>
            }
          </div>
        </td>
      </tr>
    </>
  );
}

export default UserItem;
