import React from "react"
import { Row } from "reactstrap"


const Dashboard = () => {

  return (
    <React.Fragment>
      <div className="page-content">
  
        <Row>
          <div className="col-12">
            <div className="page-title-box d-flex align-items-center justify-content-between">
              <h4 className="page-title mb-0 font-size-18">Dashboard</h4>

              <div className="page-title-right">
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item active">Welcome to Qovex Dashboard</li>
                </ol>
              </div>

            </div>
          </div>
        </Row>
      </div>
    </React.Fragment>
  )
}

export default Dashboard