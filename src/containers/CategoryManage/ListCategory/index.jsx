import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import {
  deleteCategory,
  getListCategory,
} from "../../../actions/category.actions";
import Layout from "../../../components/Layout";
import CategoryItem from "../CategoryItem";

ListCategory.propTypes = {};

function ListCategory(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getListCategory());
  }, []);

  const listCate = useSelector((state) => state.category.listCategory);

  const handleEditClick = (item) => {
    console.log("Edit: ", item);
    const editUrl = `/categories/edit/${item.id}`;
    history.push(editUrl);
  };

  const handleDeleteClick = (item) => {
    console.log("delete: ", item);
    dispatch(deleteCategory(item));
  };

  return (
    <>
      <Layout>
        <div className="row">
          <div className="col-md-3"></div>

          <div className="col-md-6">
            <div className="box">
              <div className="box-header with-border">
                <h3 className="box-title">Danh mục sản phẩm</h3>
              </div>
              <div className="box-header with-border">
                <Link to={"/categories/add"} className="btn btn-info">
                  Thêm danh mục
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
                      <CategoryItem
                        category={item}
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

export default ListCategory;
