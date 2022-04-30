import React from 'react';
import {Row,Col,Card} from "reactstrap";
import {Link} from "react-router-dom";

function BackBtn({url_Link}) {
  return (
    <Row className="d-flex justify-content-start">
                <Col xl={1} md={6}>
                    {/* <Card className="btn-back text-center p-1"> */}
                        <Link to={`/${url_Link}`} className="clr-gray-500  m-2 red-500 shadow-sm  bg-white rounded"> <button type="button" className="btn btn-danger waves-effect waves-light text-center m-2 d-flex">  Back </button>  </Link>   
                    {/* </Card> */}
                </Col>
        </Row>
  )
}

export default BackBtn