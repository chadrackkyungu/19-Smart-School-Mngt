import React from 'react'

function BackBtn() {
  return (
    <Row className="d-flex justify-content-start">
                <Col xl={1} md={6}>
                    <Card className="btn-back text-center p-1">
                        <Link to="/all-students" className="clr-gray-500"> Back </Link>   
                    </Card>
                </Col>
        </Row>
  )
}

export default BackBtn