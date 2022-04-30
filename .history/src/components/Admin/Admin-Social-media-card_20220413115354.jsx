import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import CountUp from "react-countup";

import { admin_social_json_Obj  } from '../../pages/OBJECTS/Admin-social-media';

function AdminSocialMediaCard() {
    let AdminJSON = admin_social_json_Obj();
  return (
    <Row>
                {
              AdminJSON.map((cardNumber, i) => {
                return(
                <Col xl={4} md={6} key={i}>
                  <Card className="mini-stat bg-white text-black">
                    <CardBody className="d-flex justify-content-around align-items-center">
                    <div className="red-200">
                      <cardNumber.icon size={cardNumber.size} className="icon-mobile-size" />
                    </div>

                    <div className="item-content">
                      <h4 className="gray-500">{cardNumber.title}</h4>
                      <h2 className="item-number">
                        <CountUp
                          start={0}
                          end={cardNumber.number}
                          duration={2.75}
                          useEasing={true}
                          useGrouping={true}
                          separator=" "
                          decimal=","
                        />
                      </h2>
                    </div>
                </CardBody>
              </Card>
            </Col>
                )
              })
            }
          </Row>
  )
}

export default AdminSocialMediaCard