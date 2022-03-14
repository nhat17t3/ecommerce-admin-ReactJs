import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import {
  deleteCategory,
  getListCategory
} from "../../../actions/category.actions";
import Layout from "../../../components/Layout";
import CategoryItem from "../CategoryItem";


ListSubCategory.propTypes = {};

function ListSubCategory(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getListCategory());
  }, []);

  const listCate = useSelector((state) => state.category.listCategory);
  
  const listSubCategory = listCate.filter((p) => p.parentId !== 0)
  const listParentCategory = listCate.filter((p) => p.parentId == 0)


  const handleEditClick = (item) => {
    console.log("Edit: ", item);
    const editUrl = `/categories/edit-sub-cate/${item.id}`;
    history.push(editUrl);
  };

  const handleViewClick = (item) => {
    // console.log("View: ", item);
    // const viewUrl = `/categories/${item.id}/add-sub-cate`;
    // history.push(viewUrl);
  };

  const handleDeleteClick =  (item) => {
    console.log("delete: ", item);
     dispatch(deleteCategory(item));
  };

  return (
    <>
      <Layout>
        <div className="content-wrapper">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body ">
                  <h1 className="card-title text-center">Quản lí danh mục con</h1>
                  <Link to={"/categories/add-sub-cate"} className="btn btn-info">
                    Thêm danh mục con
                  </Link>
                  <div className="table-responsive pt-3">
                    <table className="table table-striped project-orders-table">
                    <thead className="thead-dark">
                        <tr>
                          <th className="ml-5">ID</th>
                          <th>Tên</th>
                          <th>Danh mục cha</th>
                          <th className="col-2">Kích hoạt</th>
                          <th className="text-center col-1">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {listSubCategory?.map((item) => (
                          <CategoryItem
                            category={item}
                            onEditClick={handleEditClick}
                            onDeleteClick={handleDeleteClick}
                            onViewClick={handleViewClick}
                            listCategory = {listParentCategory}
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

export default ListSubCategory;
