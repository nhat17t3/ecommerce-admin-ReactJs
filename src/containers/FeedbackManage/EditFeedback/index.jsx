import React, { useEffect, useState } from "react";
// import MultiSelect from "react-multi-select-component";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import {
  getFeedbackById,updateFeedback
} from "../../../actions/feedback.actions";
import Layout from "../../../components/Layout";

EditFeedback.propTypes = {};

EditFeedback.defaultProps = {};

function EditFeedback(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { feedbackId } = useParams();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isRead, setIsRead] = useState(false);

  useEffect(() => {
    dispatch(getFeedbackById(+feedbackId));
  }, []);

  const findItem = useSelector((state) => state.feedback.feedback);

  useEffect(() => {
    if (findItem) {
      setTitle(findItem.title);
      setContent(findItem.content);
      setName(findItem.name);
      setEmail(findItem.email);
      setPhone(findItem.phone);
      setIsRead(findItem.isRead);
    }
  }, [findItem]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = {
      title,
      content,
      name,
      email,
      phone,
      isRead,
    };

    await dispatch(updateFeedback(+feedbackId,form));

    history.goBack();
  };

  return (
    <>
    <Layout>
      <div className="content-wrapper">
        <div className="row">
          <div className="col-md-6 grid-margin stretch-card offset-md-3">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Xem feedback</h4>
                {/* <p className="card-description">Basic form layout</p> */}
                <form className="forms-sample" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Họ và tên</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder=""
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      disabled
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="name">Email</label>
                    <input
                      type="text"
                      name="email"
                      className="form-control"
                      id="email"
                      placeholder=""
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Số điện thoại</label>
                    <input
                      type="text"
                      name="phone"
                      className="form-control"
                      id="phone"
                      placeholder=""
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      disabled
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="name">Tiêu đề</label>
                    <input
                      type="text"
                      name="title"
                      className="form-control"
                      id="title"
                      placeholder=""
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      disabled
                    />
                  </div>

                  <div class="form-group">
                    <label for="description">Mô tả nội dung</label>
                    <textarea
                      class="form-control"
                      id="content"
                      rows="4"
                      name="content"
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      required
                      disabled
                    >
                      {content}
                    </textarea>
                  </div>

                  {/* <div class="form-group">
                    <p class="">Đã đọc</p>
                    <label class="toggle-switch toggle-switch-success">
                      <input
                        type="checkbox"
                        name="isRead"
                        value={isRead}
                        onChange={() => setIsRead(!isRead)}
                        checked={isRead}
                      />
                      <span class="toggle-slider round"></span>
                    </label>
                  </div> */}

                  {/* <button type="submit" className="btn btn-primary mr-2">
                    cập nhật
                  </button> */}
                  {/* <button className="btn btn-light">Hủy</button> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  </>
  );
}

export default EditFeedback;
