import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { deleteSlide, getListSlide } from "../../../actions";
import Layout from "../../../components/Layout";
import SlideItem from "../SlideItem";



ListSlide.propTypes = {};

function ListSlide(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getListSlide());
  }, []);

  const listSlide = useSelector((state) => state.slide.listSlide);

  const handleEditClick = (item) => {
    console.log("Edit: ", item);
    const editUrl = `/slides/edit/${item.id}`;
    history.push(editUrl);
  };

  const handleViewClick = (item) => {
    console.log("View: ", item);
    const viewUrl = `/slides/${item.id}`;
    history.push(viewUrl);
  };

  const handleDeleteClick =  (item) => {
    console.log("delete: ", item);
     dispatch(deleteSlide(item));
  };

  return (
    <>
      <Layout>
        <div className="content-wrapper">
          <div className="row">
            <div className="col-2"></div>
            <div className="col-md-7">
              <div className="card">
                <div className="card-body ">
                  <h1 className="card-title text-center">Quản lí Slide</h1>
                  <Link to={"/slides/add"} className="btn btn-info">
                    Thêm Slide
                  </Link>
                  <div className="table-responsive pt-3">
                    <table className="table table-striped project-orders-table">
                      <thead className="thead-dark">
                        <tr>
                          <th className="ml-5 col-1">ID</th>
                          <th className="col-1">Ảnh</th>
                          <th className="text-center">Tên</th>
                          {/* <th className="">Link liên kết</th> */}
                          <th className="col-2">Kích hoạt</th>
                          <th className="col-2 text-center">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {listSlide?.map((item) => (
                          <SlideItem
                            slide={item}
                            onEditClick={handleEditClick}
                            onDeleteClick={handleDeleteClick}
                            onViewClick={handleViewClick}
                          />
                        ))}
                      </tbody>
                    </table>
                    {/*  */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default ListSlide;
