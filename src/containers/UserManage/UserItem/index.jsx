import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function UserItem(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { user, onEditClick, onDeleteClick, onViewClick } = props;

  // const [isActive, setIsActive] = useState(user.isActive);
  // useEffect(() => {
  //   setIsActive(user.isActive)
  // }, [user.isActive])

  const handleEditClick = () => {
    if (onEditClick) onEditClick(user);
  };

  const handleDeleteClick = () => {
    if (onDeleteClick) onDeleteClick(user);
  };

  const handleViewClick = () => {
    if (onViewClick) onViewClick(user);
  };

  // const handleActiveClick = async () => {
  //   const formData = new FormData();
  //   formData.append("name", user.name);
  //   await dispatch(updateUser(Number(user.id), formData));
  // };
  // // const handleActiveClick = () => {
  // //   const form = {
  // //     id: Number(user.id),
  // //     name : user.name,
  // //     description : user.description,
  // //     isActive : !isActive
  // //     };
  // //   console.log(form);
  // //   // alert(JSON.stringify(k));

  // //   dispatch(updateUser(form));
  // //   // history.push("/users/list");
  // // };

  return (
    <>
      <tr key={user.id}>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.phone}</td>
        <td>{user.email}</td>
        <td>{user.status} </td>

        {/* <td>
          <label class="toggle-switch toggle-switch-success" >
            <input
              type="checkbox"
              name="isActive"
              value={isActive}
              onChange={() => {
                setIsActive(!isActive);
                handleActiveClick();
              }}
              checked={isActive}
            />
            <span class="toggle-slider round"></span>
          </label>
        </td> */}

        <td>
          <div className="d-flex align-items-center ">
            <button
              type="button"
              className="btn btn-success btn-sm btn-icon-text"
              style={{ marginRight: "8px" }}
              onClick={handleViewClick}
            >
              View
              <i className="typcn typcn-edit btn-icon-append" />
            </button>
            <button
              type="button"
              className="btn btn-danger btn-sm btn-icon-text"
              onClick={handleDeleteClick}
            >
              Delete
              <i className="typcn typcn-delete-outline btn-icon-append" />
            </button>
          </div>
        </td>
      </tr>
    </>
  );
}

export default UserItem;
