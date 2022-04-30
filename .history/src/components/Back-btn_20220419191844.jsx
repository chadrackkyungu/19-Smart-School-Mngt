import React from 'react';
import {Row,Col,Card} from "reactstrap";
import {Link} from "react-router-dom";

function BackBtn({url_Link}) {
  return (
    <Row className="d-flex justify-content-start">
                <Col xl={1} md={6}>
                    <Card className="btn-back text-center p-1">
                        <Link to={`/${url_Link}`} className="clr-gray-500 d-flex m-2 mt-2"> <h4> Back</h4>  </Link>   
                    </Card>
                </Col>
        </Row>
  )
}

export default BackBtn