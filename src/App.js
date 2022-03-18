
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { getInformation } from "./actions";
import "./App.css";
import PrivateRoute from "./components/HOC/PrivateRoute";
import AddArticle from "./containers/ArticleManage/AddArticle";
import EditArticle from "./containers/ArticleManage/EditArticle";
import ListArticle from "./containers/ArticleManage/ListArticle";
import AddBrand from "./containers/BrandManage/AddBrand";
import EditBrand from "./containers/BrandManage/EditBrand";
import ListBrand from "./containers/BrandManage/ListBrand";
import AddCategoryArticle from "./containers/CategoryArticleManage/AddCategoryArticle";
import EditCategoryArticle from "./containers/CategoryArticleManage/EditCategoryArticle";
import ListCategoryArticle from "./containers/CategoryArticleManage/ListCategoryArticle";
import AddCategory from "./containers/CategoryManage/AddCategory";
import EditCategory from "./containers/CategoryManage/EditCategory";
import ListCategory from "./containers/CategoryManage/ListCategory";
import AddFeedback from "./containers/FeedbackManage/AddFeedBack";
import EditFeedback from "./containers/FeedbackManage/EditFeedback";
import ListFeedback from "./containers/FeedbackManage/ListFeedback";
import Main from "./containers/Main";
import AddPayment from "./containers/PaymentManage/AddPayment";
import EditPayment from "./containers/PaymentManage/EditPayment";
import ListPayment from "./containers/PaymentManage/ListPayment";
import AddProduct from "./containers/ProductManage/AddProduct";
import EditProduct from "./containers/ProductManage/EditProduct";
import ListProduct from "./containers/ProductManage/ListProduct";
import SignIn from "./containers/SignIn";
import AddSlide from "./containers/SlideManage/AddSlide";
import EditSlide from "./containers/SlideManage/EditSlide";
import ListSlide from "./containers/SlideManage/ListSlide";
import AddSubCategory from "./containers/SubCategoryManage/AddSubCategory";
import EditSubCategory from "./containers/SubCategoryManage/EditSubCategory";
import ListSubCategory from "./containers/SubCategoryManage/ListSubCategory";
import AddTransporter from "./containers/TransporterManage/AddTransporter";
import EditTransporter from "./containers/TransporterManage/EditTransporter";
import ListTransporter from "./containers/TransporterManage/ListTransporter";
import ListUser from "./containers/UserManage/ListUser";
import AddVoucher from "./containers/VoucherManage/AddVoucher";
import EditVoucher from "./containers/VoucherManage/EditVoucher";
import ListVoucher from "./containers/VoucherManage/ListVoucher";
import SunEditor from "./components/SunEditor";

import ListOrder from "./containers/OrderManage/ListOrder";
import EditOrder from "./containers/OrderManage/EditOrder";
import ViewUser from "./containers/UserManage/ViewUser";
import ChangePass from "./containers/ChangePass";



function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  //componentDidMount or componentDidUpdate
  useEffect(() => {
    if (!auth.authenticate) {
      const token = localStorage.getItem("token");
      dispatch(getInformation({token : token}));
    }
  }, [auth.authenticate]);

  return (
    <>
      <Switch>
        {/* <PrivateRoute path="/home" exact component={Main} /> */}
        <PrivateRoute path="/" exact component={Main} />

        <Route path="/signin" component={SignIn} />
        <Route path="/suneditor" component={SunEditor} />



        <PrivateRoute path="/payments/list" component={ListPayment} />
        <PrivateRoute path="/payments/edit/:paymentId" component={EditPayment} />
         <PrivateRoute path="/payments/add" component={AddPayment} />

        <PrivateRoute path="/brands/list" component={ListBrand} />
        <PrivateRoute path="/brands/edit/:brandId" component={EditBrand} />
         <PrivateRoute path="/brands/add" component={AddBrand} />

         <Route path="/categories/list" component={ListCategory} />
        <Route path="/categories/edit/:categoryId" component={EditCategory} />
         <Route path="/categories/add" component={AddCategory} />

         <Route path="/categories/add-sub-cate" component={AddSubCategory} />
        <Route path="/categories/list-sub-cate" component={ListSubCategory} />
        <Route path="/categories/edit-sub-cate/:categoryId" component={EditSubCategory} />


        <Route path="/products/list" component={ListProduct} />
        <Route path="/products/edit/:productId" component={EditProduct} />
        <Route path="/products/add" component={AddProduct} />

        <Route path="/slides/list" component={ListSlide} />
        <Route path="/slides/edit/:slideId" component={EditSlide} />
        <Route path="/slides/add" component={AddSlide} />

        <Route path="/feedbacks/list" component={ListFeedback} />
        <Route path="/feedbacks/view/:feedbackId" component={EditFeedback} />
        <Route path="/feedbacks/add" component={AddFeedback} />

        <Route path="/transporters/list" component={ListTransporter} />
        <Route path="/transporters/edit/:transporterId" component={EditTransporter} />
        <Route path="/transporters/add" component={AddTransporter} />

        <Route path="/categoryArticles/list" component={ListCategoryArticle} />
        <Route path="/categoryArticles/edit/:categoryArticleId" component={EditCategoryArticle} />
        <Route path="/categoryArticles/add" component={AddCategoryArticle} />

        <Route path="/vouchers/list" component={ListVoucher} />
        <Route path="/vouchers/edit/:voucherId" component={EditVoucher} />
        <Route path="/vouchers/add" component={AddVoucher} />

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



