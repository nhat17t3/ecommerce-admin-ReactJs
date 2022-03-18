import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import {
  deleteCategoryArticle,
  getListCategoryArticle
} from "../../../actions/categoryArticle.actions";
import Layout from "../../../components/Layout";
import CategoryArticleItem from "../CategoryArticleItem";


ListCategoryArticle.propTypes = {};

function ListCategoryArticle(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getListCategoryArticle());
  }, []);

  const listCategoryArticle = useSelector((state) => state.categoryArticle.listCategoryArticle);

  const handleEditClick = (item) => {
    console.log("Edit: ", item);
    const editUrl = `/categoryArticles/edit/${item.id}`;
    history.push(editUrl);
  };

  const handleViewClick = (item) => {
    console.log("View: ", item);
    const viewUrl = `/categoryArticles/${item.id}`;
    history.push(viewUrl);
  };

  const handleDeleteClick =  (item) => {
    console.log("delete: ", item);
     dispatch(deleteCategoryArticle(item));
  };

  return (
    <>
      <Layout>
        <div className="content-wrapper">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <div className="card">
                <div className="card-body ">
                  <h1 className="card-title text-center">Quản lí danh mục bài viết</h1>
                  <Link to={"/categoryArticles/add"} className="btn btn-info">
                    Thêm danh mục
                  </Link>
                  <div className="table-responsive pt-3">
                    <table className="table table-striped project-orders-table">
                      <thead className="thead-dark">
                        <tr>
                          <th className="ml-5">ID</th>
                          <th>Tên</th>
                          {/* <th className="col-3">Kích hoạt</th> */}
                          <th className="col-3">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {listCategoryArticle?.map((item) => (
                          <CategoryArticleItem
                            categoryArticle={item}
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

export default ListCategoryArticle;
