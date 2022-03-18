import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import {
  deleteFeedback,
  getListFeedbackByPage,
} from "../../../actions/feedback.actions";
import Layout from "../../../components/Layout";
import FeedbackItem from "../FeedbackItem";

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

ListFeedback.propTypes = {};

function ListFeedback(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  let query = useQuery();

  const [reRender, setReRender] = useState(true);
  const [currentPage, setCurrentPage] = useState(
    Number(query.get("page")) || 1
  );
  const limit = 7;

  useEffect(() => {
    dispatch(getListFeedbackByPage(limit, currentPage - 1));
  }, [currentPage]);

  const handlePageChange = (event, pageNumber) => {
    console.log(pageNumber, "page");
    setCurrentPage(pageNumber);
    history.push(`?page=${pageNumber}`);
  };

  const listFeedback = useSelector((state) => state.feedback.listFeedback);
  const count = useSelector((state) => state.feedback.count);
  var countPage = Math.ceil(count / limit);

  const handleEditClick = (item) => {
    console.log("Edit: ", item);
    const editUrl = `/feedbacks/view/${item.id}`;
    // const editUrl = `/feedbacks/add`;

    history.push(editUrl);
  };

  const handleViewClick = (item) => {
    console.log("View: ", item);
    const viewUrl = `/feedbacks/${item.id}`;
    history.push(viewUrl);
  };

  const handleDeleteClick = async (item) => {
    console.log("delete: ", item);
    await dispatch(deleteFeedback(item));
    await dispatch(getListFeedbackByPage(limit, currentPage - 1));
    setReRender(!reRender);
  };

  return (
    <>
      <Layout>
        <div className="content-wrapper">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-md-10">
              <div className="card">
                <div className="card-body ">
                  <h1 className="card-title text-center">
                    Quản lí phản hồi feedback
                  </h1>
                  {/* <Link to={"/feedbacks/add"} className="btn btn-info">
                    Thêm phản hồi
                  </Link> */}
                  <div className="table-responsive pt-3 ">
                    <table className="table table-striped project-orders-table table-borderd">
                      <thead className="thead-dark">
                        <tr>
                          <th className="col-1">ID</th>
                          <th className="col-2">Tên</th>
                          <th className="col-2">Email</th>
                          <th className="col-2">Điện thoại</th>

                          <th className="text-center">Tiêu đề</th>
                          <th className="col-1">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {listFeedback?.map((item) => (
                          <FeedbackItem
                            feedback={item}
                            onEditClick={handleEditClick}
                            onDeleteClick={handleDeleteClick}
                            onViewClick={handleViewClick}
                          />
                        ))}
                      </tbody>
                    </table>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "end",
                        marginTop: "16px",
                      }}
                    >
                      <Stack spacing={2}>
                        <Pagination
                          count={countPage}
                          color="primary"
                          page={currentPage}
                          onChange={handlePageChange}
                          // renderItem={(item) => (
                          //   <PaginationItem
                          //     component={Link}
                          //     to={`/products/list${item.page === 1 ? '' : `?page=${item.page}`}`}
                          //     {...item}
                          //   />
                          // )}
                        />
                      </Stack>
                    </div>
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

export default ListFeedback;
