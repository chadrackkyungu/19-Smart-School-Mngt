import React, {useEffect} from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import MetaTags from "react-meta-tags";
import { Link } from "react-router-dom";
import { FaPeopleCarry } from 'react-icons/fa';

import Breadcrumb from '../../components/Common/Breadcrumb';



const AdminJSON = [
  {
    id:1,
    size:80,
    icon: 'St',
    title: "Students",
    number: 15000
  },
  {
    id:2,
    size:80,
    icon: 'Tch',
    title: "Teachers",
    number: 15000
  },
  {
    id:3,
    size:80,
    icon: 'Pr',
    title: "Parents",
    number: 15000
  },
  {
    id:4,
    size:80,
    icon: 'Earn',
    title: "Earnings",
    number: 15000
  },
];





const Dashboard = () => {



  useEffect(() => {
    // function name() {
      var number = document.querySelector('.numbers'),
      numberTop = number.getBoundingClientRect().top,
      start = 0,
      end = number.dataset.num;
    
    window.addEventListener('scroll', function onScroll() {
      if (window.pageYOffset > numberTop - window.innerHeight / 0) {
        this.removeEventListener('scroll', onScroll);
        var interval = setInterval(function() {
          number.innerHTML = ++start;
          if (start == end) {
            clearInterval(interval);
          }
        }, 5);
      }
    });
    // var number = document.querySelector('.numbers');
    // console.log(number);
    // }
    
    // name();
  }, [])



  return (
    <React.Fragment>
      <div className="page-content">
      <MetaTags>
          <title>Smart School Management System</title>
        </MetaTags>
        <Row>
          <Breadcrumb breadcrumbItem="Home" title="Admin" />
        </Row>

      
      
      <Row>
            <Col xl={3} md={6}>
              <Card className="mini-stat bg-white text-black">
                <CardBody className="d-flex justify-content-around align-items-center">
                    <div className="green-200">
                      <FaPeopleCarry size={80}  />
                    </div>

                    <div class="item-content">
                      <h4 className="gray-400">Students</h4>
                      <div className="item-number">
                        <h2 class="numbers" data-num="500">0</h2>
                      </div>
                    </div>
                </CardBody>
              </Card>
            </Col>

            </Row>
            </div>
    </React.Fragment>
  );
};




export default Dashboard;