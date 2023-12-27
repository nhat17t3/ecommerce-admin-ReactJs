import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import {
  deleteCategoryArticle,
  getListCategoryArticle,
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

  const listCate = useSelector(
    (state) => state.categoryArticle.listCategoryArticle
  );

  const handleEditClick = (item) => {
    console.log("Edit: ", item);
    const editUrl = `/categoty-articles/edit/${item.id}`;
    history.push(editUrl);
  };

  const handleDeleteClick = (item) => {
    console.log("delete: ", item);
    dispatch(deleteCategoryArticle(item));
  };

  return (
    <>
      <Layout>
        <div className="row">
          <div className="col-md-3"></div>

          <div className="col-md-6">
            <div className="box">
              <div className="box-header with-border">
                <h3 className="box-title">Danh mục bài viết</h3>
              </div>
              <div className="box-header with-border">
                <Link to={"/categoty-articles/add"} className="btn btn-info">
                  Thêm danh mục bài viết
                </Link>
              </div>
              {/* /.box-header */}
              <div className="box-body">
                <table className="table table-bordered table-striped dataTable">
                  <tbody>
                    <tr>
                      <th style={{ width: 10 }}>#</th>
                      <th>Tên danh mục</th>
                      <th style={{ width: 140 }}></th>
                    </tr>
                    {listCate?.map((item) => (
                      <CategoryArticleItem
                        categoryArticle={item}
                        onEditClick={handleEditClick}
                        onDeleteClick={handleDeleteClick}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default ListCategoryArticle;
