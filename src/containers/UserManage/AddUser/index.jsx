// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
// import { createUser } from "../../../actions/user.actions";
// import Layout from "../../../components/Layout";
// import { getListUser } from "../../../actions/user.actions";
// import userReducers from "../../../reducers/user.reducers";
// import { getListCategoryUser } from "../../../actions";

// AddUser.propTypes = {};

// function AddUser(props) {
//   const dispatch = useDispatch();
//   const history = useHistory();

//   const [username, setUsername] = useState("");
//   const [ email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [firstname, setFirstnam] = useState("");
//   const [ lastname, setLastname] = useState("");
//   const [ phone, setPhone] = useState("");
//   const [ isActive, setIsActive] = useState(true);


//   // useEffect(() => {
//   //   dispatch(getListRole());
//   // }, []);

//   // const listRole = useSelector((state) => state.categoryUser.listCategoryUser);


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const form = {
//       username,
//       email,
//       password,
//       firstname,
//       lastname,
//       phone,
//     };

//     await dispatch(createUser(form));

//     history.goBack();
//   };

//   return (
//     <>
//       <Layout>
//         <div className="content-wrapper">
//           <div className="row">
//             <div className="col-md-6 grid-margin stretch-card offset-md-3">
//               <div className="card">
//                 <div className="card-body">
//                   <h4 className="card-title">Thêm user</h4>
//                   {/* <p className="card-description">Basic form layout</p> */}
//                   <form className="forms-sample" onSubmit={handleSubmit}>
//                     <div className="form-group">
//                       <label htmlFor="name">username</label>
//                       <input
//                         type="text"
//                         name="name"
//                         className="form-control"
//                         id="name"
//                         placeholder=""
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                         required
//                       />
//                     </div>

//                     <div className="form-group">
//                       <label htmlFor="exampleFormControlSelect2">
//                         Danh mục bài viết
//                       </label>
//                       <select
//                         className="form-control"
//                         id="exampleFormControlSelect2"
//                         name="categoryUserId"
//                         onChange={(e) => setCategoryUserId(e.target.value)}
//                         value={categoryUserId}
//                         required
//                       >
//                         <option value={""} hidden>khong có gì</option>
//                         {listCate?.map((item) => (
//                           <option value={item.id}>{item.name}</option>
//                         ))}
//                       </select>
//                     </div>

//                     <div class="form-group">
//                       <label for="shortDesc">Mô tả ngắn</label>
//                       <textarea
//                         class="form-control"
//                         id="shortDesc"
//                         rows="4"
//                         name="shortDesc"
//                         value={shortDesc}
//                         onChange={(e) => setShortDesc(e.target.value)}
//                         required
//                       >
//                         {shortDesc}
//                       </textarea>
//                     </div>



//                     <div class="form-group">
//                       <label for="description">Mô tả</label>
//                       <textarea
//                         class="form-control"
//                         id="description"
//                         rows="4"
//                         name="description"
//                         value={description}
//                         onChange={(e) => setDescription(e.target.value)}
//                         required
//                       >
//                         {description}
//                       </textarea>
//                     </div>

//                     <div class="form-group">
//                       <p class="">bài viết HOT</p>
//                       <label class="toggle-switch toggle-switch-success">
//                         <input
//                           type="checkbox"
//                           name="isHot"
//                           value={isHot}
//                           onChange={() => setIsHot(!isHot)}
//                           checked={isHot}
//                         />
//                         <span class="toggle-slider round"></span>
//                       </label>
//                     </div>

//                     <div class="form-group">
//                       <p class="">kích hoạt</p>
//                       <label class="toggle-switch toggle-switch-success">
//                         <input
//                           type="checkbox"
//                           name="isActive"
//                           value={isActive}
//                           onChange={() => setIsActive(!isActive)}
//                           checked={isActive}
//                         />
//                         <span class="toggle-slider round"></span>
//                       </label>
//                     </div>

//                     <button type="submit" className="btn btn-primary mr-2">
//                       Thêm
//                     </button>
//                     {/* <button className="btn btn-light">Hủy</button> */}
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Layout>
//     </>
//   );
// }

// export default AddUser;
