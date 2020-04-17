import React from 'react';
import { Link } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';

const LINE_COLOR = '#EC932F';
const BAR_COLOR = '#71B37C';

const LecturerCourseChart = props => {
  const { courseLecturerList } = props;
  const invoices = courseLecturerList.map(course => course.invoices).flat();

  const dataLearner = [];
  const dataSales = [];
  const labels = [];

  const dates = invoices.map(invoice => new Date(invoice.createdAt).getTime());
  dates.sort((a, b) => a - b);
  const monthYear = dates.map(date => {
    const time = new Date(date);
    return {
      month: time.getMonth(),
      year: time.getFullYear(),
    };
  });
  const uniqueMonthYear = monthYear.filter((value, index, self) => index === self.findIndex(val => val.month === value.month && val.year === value.year));
  uniqueMonthYear.forEach(value => {
    const filterInvoice = invoices.filter(invoice => {
      const time = new Date(invoice.createdAt);
      return time.getMonth() === value.month && time.getFullYear() === value.year;
    });

    dataSales.push(filterInvoice.reduce((initVal, val) => initVal + val.totalPrice, 0));
    dataLearner.push(filterInvoice.length);
    labels.push(`${value.month + 1}/${value.year}`);
  });

  const data = {
    datasets: [
      {
        label: 'Learner',
        type: 'line',
        data: [...dataLearner],
        fill: false,
        borderColor: LINE_COLOR,
        backgroundColor: LINE_COLOR,
        pointBorderColor: LINE_COLOR,
        pointBackgroundColor: LINE_COLOR,
        pointHoverBackgroundColor: LINE_COLOR,
        pointHoverBorderColor: LINE_COLOR,
        yAxisID: 'y-axis-2',
      }, 
      {
        label: 'Sales ($)',
        type: 'bar',
        data: [...dataSales],
        fill: false,
        backgroundColor: BAR_COLOR,
        borderColor: BAR_COLOR,
        hoverBackgroundColor: BAR_COLOR,
        hoverBorderColor: BAR_COLOR,
        yAxisID: 'y-axis-1',
      }],
  };
    
  const options = {
    responsive: true,
    tooltips: {
      mode: 'label',
    },
    elements: {
      line: {
        fill: false,
      },
    },
    scales: {
      xAxes: [
        {
          display: true,
          gridLines: {
            display: false,
          },
          labels: [...labels],
        },
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
          type: 'linear',
          display: true,
          position: 'left',
          id: 'y-axis-1',
          gridLines: {
            display: false,
          },
          labels: {
            show: true,
          },
        },
        {
          ticks: {
            beginAtZero: true,
            precision: 0,
          },
          type: 'linear',
          display: true,
          position: 'right',
          id: 'y-axis-2',
          gridLines: {
            display: false,
          },
          labels: {
            show: true,
          },
        },
      ],
    },
  };
  

  return (
    <div className="col-xl-12 col-lg-12 order-lg-1 order-xl-1">
      <div className="kt-portlet kt-portlet--height-fluid">
        <div className="kt-portlet__head">
          <div className="kt-portlet__head-label">
            <h3 className="kt-portlet__head-title">Statistics</h3>
          </div>
          <div className="kt-portlet__head-toolbar">
            <ul
              className="nav nav-pills nav-pills-sm nav-pills-label nav-pills-bold"
              role="tablist">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  data-toggle="tab"
                  href="#kt_widget5_tab1_content"
                  role="tab">
                  Latest
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  data-toggle="tab"
                  href="#kt_widget5_tab2_content"
                  role="tab">
                  Month
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  data-toggle="tab"
                  href="#kt_widget5_tab3_content"
                  role="tab">
                  All time
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="kt-portlet__body">
          <Bar
            options={options}
            data={data} />
        </div>
      </div>
    </div>
  );
};

export default LecturerCourseChart;
