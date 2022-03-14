import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getListCustomer, getListPostCompleted } from "../../actions";
import Layout from "../../components/Layout";

const Main = (props) => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getListCustomer());
  // }, []);

  // useEffect(() => {
  //   dispatch(getListPostCompleted());
  // }, []);

  // const customers = useSelector((state) => state.customers.listCustomer);
  // const students = customers?.filter((customer) => {
  //   return customer.roles[0] === "ROLE_STUDENT";
  // });
  // const tutors = customers?.filter((customer) => {
  //   return customer.roles[0] === "ROLE_TUTOR";
  // });
  // const posts = useSelector((state) => state.posts.listPostCompleted);


  return (
    <>
     <Layout>
       
    <div className="content mt-3">
      <div className="animated fadeIn">
    
        <div className="row">
        <div className="col-md-2">
  <div className="card">
    <div className="card-header">
      <strong className="card-title">Basic Table</strong>
    </div>
    <div className="card-body">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

          </div>
          
      </div>{/* .animated */}
    </div>{/* .content */}
     </Layout>

    </>
  );
};

export default Main;
