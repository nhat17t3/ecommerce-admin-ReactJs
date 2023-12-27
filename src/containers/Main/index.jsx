import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useHistory } from "react-router-dom";
import { countElement, getRevenueByMonths } from "../../actions";
import Layout from "../../components/Layout";

import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

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
      position: "top",
    },
    title: {
      display: true,
      text: "Biểu đồ doanh số năm 2023",
    },
  },
};

const Main = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(countElement());
    dispatch(getRevenueByMonths(2023));
  }, []);

  const statistics = useSelector((state) => state.statistics);

  const labels = [
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12",
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "Doanh số",
        data: statistics.revenueByMonths,
        backgroundColor: "#be9b0f",
      },
      // {
      //   label: 'Dataset 2',
      //   data: labels.map(() => 50),
      //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
      // },
    ],
  };

  return (
    <>
      <Layout>
        <div className="row">
          <div className="col-md-12">
              <div className="row pt-3">
                <div className="col-md-3 col-sm-6 col-xs-12">
                  <div className="info-box">
                    <span className="info-box-icon bg-aqua">
                    <i className="ion ion-ios-people-outline" />
                    </span>
                    <div className="info-box-content">
                      <span className="info-box-text">Số người dùng</span>
                      <span className="info-box-number">
                        {statistics.statistics.amountOfUser}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                  <div className="info-box">
                    <span className="info-box-icon bg-red">
                      <i className="fa  fa-archive" />
                    </span>
                    <div className="info-box-content">
                      <span className="info-box-text">Số sản phẩm</span>
                      <span className="info-box-number">
                        {statistics.statistics.amountOfProduct}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="clearfix visible-sm-block" />
                <div className="col-md-3 col-sm-6 col-xs-12">
                  <div className="info-box">
                    <span className="info-box-icon bg-green">
                      <i className="ion ion-ios-cart-outline" />
                    </span>
                    <div className="info-box-content">
                      <span className="info-box-text">Số đơn hàng</span>
                      <span className="info-box-number">
                        {statistics.statistics.amountOfOrder}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                  <div className="info-box">
                    <span className="info-box-icon bg-yellow">
                      <i className="fa  fa-money" />
                    </span>
                    <div className="info-box-content">
                      <span className="info-box-text">Tổng doanh thu</span>
                      <span className="info-box-number">
                        {statistics.statistics.totalRevenue}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            <div className="box">
              {/* Biểu đồ */}
              <div
                className="row "
                style={{ maxWidth: "1000px", margin: "auto" }}
              >
                <Bar options={options} data={data} />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Main;
