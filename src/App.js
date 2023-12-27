import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { getInformation } from "./actions";
import SunEditor from "./components/SunEditor";
import AddArticle from "./containers/ArticleManage/AddArticle";
import EditArticle from "./containers/ArticleManage/EditArticle";
import ListArticle from "./containers/ArticleManage/ListArticle";
import AddCategoryArticle from "./containers/CategoryArticleManage/AddCategoryArticle";
import EditCategoryArticle from "./containers/CategoryArticleManage/EditCategoryArticle";
import ListCategoryArticle from "./containers/CategoryArticleManage/ListCategoryArticle";
import AddCategory from "./containers/CategoryManage/AddCategory";
import EditCategory from "./containers/CategoryManage/EditCategory";
import ListCategory from "./containers/CategoryManage/ListCategory";
import Main from "./containers/Main";
import AddPayment from "./containers/PaymentManage/AddPayment";
import EditPayment from "./containers/PaymentManage/EditPayment";
import ListPayment from "./containers/PaymentManage/ListPayment";
import AddProduct from "./containers/ProductManage/AddProduct";
import EditProduct from "./containers/ProductManage/EditProduct";
import ListProduct from "./containers/ProductManage/ListProduct";
import SignIn from "./containers/SignIn";
import ListUser from "./containers/UserManage/ListUser";

import ChangePass from "./containers/ChangePass";
import EditOrder from "./containers/OrderManage/EditOrder";
import ListOrder from "./containers/OrderManage/ListOrder";
import ViewUser from "./containers/UserManage/ViewUser";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  //componentDidMount or componentDidUpdate
  useEffect(() => {
    if (!auth.authenticate) {
      const accessToken = localStorage.getItem("accessToken");
      dispatch(getInformation({ accessToken: accessToken }));
    }
  }, [auth.authenticate]);

  return (
    <>
      <Switch>
        {/* <PrivateRoute path="/home" exact component={Main} /> */}
        <Route path="/" exact component={Main} />

        <Route path="/signin" component={SignIn} />
        <Route path="/suneditor" component={SunEditor} />

        <Route path="/payments/list" component={ListPayment} />
        <Route path="/payments/edit/:paymentId" component={EditPayment} />
        <Route path="/payments/add" component={AddPayment} />

        <Route path="/categories/list" component={ListCategory} />
        <Route path="/categories/edit/:categoryId" component={EditCategory} />
        <Route path="/categories/add" component={AddCategory} />

        <Route path="/products/list" component={ListProduct} />
        <Route path="/products/edit/:productId" component={EditProduct} />
        <Route path="/products/add" component={AddProduct} />

        <Route path="/categoty-articles/list" component={ListCategoryArticle} />
        <Route
          path="/categoty-articles/edit/:categoryArticleId"
          component={EditCategoryArticle}
        />
        <Route path="/categoty-articles/add" component={AddCategoryArticle} />

        <Route path="/articles/list" component={ListArticle} />
        <Route path="/articles/edit/:articleId" component={EditArticle} />
        <Route path="/articles/add" component={AddArticle} />

        <Route path="/users/list" component={ListUser} />
        <Route path="/users/view/:userId" component={ViewUser} />

        <Route path="/orders/list" component={ListOrder} />
        <Route path="/orders/edit/:orderId" component={EditOrder} />

        <Route path="/change-pass" component={ChangePass} />
      </Switch>
    </>
  );
}

export default App;
