import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { countElement, getListCustomer, getListOrderByPage, getListPostCompleted } from "../../actions";
import Layout from "../../components/Layout";
import { Link, useHistory, useLocation } from "react-router-dom";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import OrderItem from "../OrderManage/OrderItem";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' ,
    },
    title: {
      display: true,
      text: 'Biểu đồ doanh số năm 2022',
    },
  },
};


const Main = (props) => {
  const dispatch = useDispatch(); 
  const history = useHistory();

  useEffect(() => {
    dispatch(countElement());
  }, []);

  const statistics = useSelector((state) => state.statistics.statistics);
  console.log(statistics);

  const labels = ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7' ,'Tháng 8' , 'Tháng 9','Tháng 10', 'Tháng 11','Tháng 12'];
  const data = {
  labels,
  datasets: [
    {
      label: 'Doanh số',
      data: statistics.revenueByMonthly,
      backgroundColor: '#be9b0f',
    },
    // {
    //   label: 'Dataset 2',
    //   data: labels.map(() => 50),
    //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
    // },
  ],
};

useEffect(() => {
 
    dispatch(getListOrderByPage(5, 0));
}, []);

const orders = useSelector((state) => state.order.listOrder);

const handleEditClick = (item) => {
  console.log("Edit: ", item);
  const editUrl = `/orders/edit/${item.id}`;
  // const editUrl = `/orders/add`;

  history.push(editUrl);
};

const handleViewClick = (item) => {
  console.log("View: ", item);
  const viewUrl = `/orders/${item.id}`;
  history.push(viewUrl);
};

  return (
    <>
      <Layout>
        <div className="content-wrapper">
          {/* card */}
          <div className="row">
          <div className="col-lg-3 col-md-6">
  <div className="card">
    <div className="card-body">
      <div className="stat-widget-one">
        <div className="stat-icon dib"><i className="ti-user text-danger border-primary" /></div>
        <div className="stat-content dib">
          <div className="stat-text">Số User</div>
          <div className="stat-digit">{statistics.totalUser}</div>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="col-lg-3 col-md-6">
  <div className="card">
    <div className="card-body">
      <div className="stat-widget-one">
        <div className="stat-icon dib"><i className="ti-notepad text-danger border-primary" /></div>
        <div className="stat-content dib">
          <div className="stat-text">Số đơn hàng</div>
          <div className="stat-digit">{statistics.totalOrder}</div>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="col-lg-3 col-md-6">
  <div className="card">
    <div className="card-body">
      <div className="stat-widget-one">
        <div className="stat-icon dib"><i className="ti-agenda text-danger border-primary" /></div>
        <div className="stat-content dib">
          <div className="stat-text">Số sản phẩm</div>
          <div className="stat-digit">{statistics.totalProduct}</div>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="col-lg-3 col-md-6">
  <div className="card">
    <div className="card-body">
      <div className="stat-widget-one">
        <div className="stat-icon dib"><i className="ti-credit-card text-danger border-primary" /></div>
        <div className="stat-content dib">
          <div className="stat-text">Tổng doanh thu</div>
          <div className="stat-digit">{statistics.totalRevenue}</div>
        </div>
      </div>
    </div>
  </div>
</div>

          </div>

{/* bieu do */}
<div className="row " style={{maxWidth: "1000px", margin: "auto"}}>
<Bar options={options} data={data} />;
</div>

          {/* last order */}
          <div className="card">
  <div className="card-header border-transparent">
    <h3 className="card-title">Đơn hàng gần đây</h3>
    
  </div>
  <div className="card-body p-0">
    
  <div className="table-responsive pt-3">
                    <table className="table table-striped project-orders-table table-bordered">
                      <thead className="thead-dark">
                        <tr>
                          <th className="col-1">ID</th>
                          <th className="">Người đặt hàng</th>
                          <th className="">Số điện thoại</th>
                          <th className="col-1">Tổng tiền</th>
                          <th className="col-1">Trạng thái</th>
                          <th className="">Ngày đặt</th>
                          <th className="text-center col-1">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {orders?.map((item) => (
                          <OrderItem
                            order={item}
                            onEditClick={handleEditClick}
                            // onDeleteClick={handleDeleteClick}
                            onViewClick={handleViewClick}
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
};

export default Main;
