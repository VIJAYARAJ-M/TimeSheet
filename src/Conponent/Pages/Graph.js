import React from "react";
import ReactApexChart from "react-apexcharts";
import {Row,Col} from "reactstrap"

const series= [{
    name: 'Net Profit',
    data: [12, 10, 8, 9, 8, 10, 11, 8, 9]
  }]
 const options= {
    chart: {
      type: 'bar',
      height: 350,
      toolbar:{
        show:!1
      }
    },
    title:{
        text:"Monthly Night shift",
        style:{
            
        }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['01-03-2023', '01-03-2023', '01-03-2023', '01-03-2023', '01-03-2023',
       '01-03-2023', '01-03-2023', '01-03-2023', '01-03-2023'],
    },
    yaxis: {
      title: {
        text: 'Logged Hours'
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands"
        }
      }
    }
  }

export default function Graph(){

    return(
        <div>
            <Row>
                <Col lg={4}>
                  <Row>
                    <h6>From</h6>
                  </Row>
                  <Row>
                  <input type="date" />
                  </Row>
                  
                </Col>
                <Col lg={4}>
                  <Row>
                    <h6>To</h6>
                  </Row>
                  <Row>
                  <input type="date" />
                  </Row>
                  
                </Col>
                <Col lg={4} className="d-flex align-items-center justify-content-center">
                  <button>Submit</button>
                </Col>
            </Row>
            <Row>
                <Col>
                 <ReactApexChart options={options} series={series} type="bar" height={350} />
                </Col>
            </Row>
             

    
        </div>
    );
}