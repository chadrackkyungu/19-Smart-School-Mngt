import React, {useEffect, useState} from 'react'
import {
    Row,
    Col,
    Card,
    CardBody,
  } from "reactstrap"
  import MetaTags from "react-meta-tags";
  import Breadcrumb from '../../components/Common/Breadcrumb';
  import { useParams } from "react-router-dom";

function StudentsDetails() {

    const { id } = useParams();

    const [studentDetial, setStudentDetail] = useState();

    const handleClick =(params) =>{};

    const dat = [
        {
        id:0,
        assists_per_game: "0.7",
        blocks_per_game: "0.0",
        defensive_rebounds_per_game: "0.3",
        field_goal_percentage: "43.1",
        field_goals_attempted_per_game: "2.2",
        field_goals_made_per_game: "1.0",
        free_throw_percentage: "75.0",
        games_played: "23",
        minutes_per_game: "6:38",
        name: "Aaron Brooks",
        offensive_rebounds_per_game: "0.2",
        player_efficiency_rating: "0.8",
        points_per_game: "2.3",
        rebounds_per_game: "0.6",
        steals_per_game: "0.2",
        team_acronym: "min",
        team_name: "Minnesota Timberwolves",
        three_point_attempted_per_game: "0.9",
        three_point_made_per_game: "0.3",
        three_point_percentage: "33.3",
        turnovers_per_game: "0.3",
        clickEvent: () => handleClick(id)
      },
        {
        id:1,
        assists_per_game: "0.7",
        blocks_per_game: "0.0",
        defensive_rebounds_per_game: "0.3",
        field_goal_percentage: "43.1",
        field_goals_attempted_per_game: "2.2",
        field_goals_made_per_game: "1.0",
        free_throw_percentage: "75.0",
        games_played: "23",
        minutes_per_game: "6:38",
        name: "Aaron Brooks",
        offensive_rebounds_per_game: "0.2",
        player_efficiency_rating: "0.8",
        points_per_game: "2.3",
        rebounds_per_game: "0.6",
        steals_per_game: "0.2",
        team_acronym: "min",
        team_name: "Minnesota Timberwolves",
        three_point_attempted_per_game: "0.9",
        three_point_made_per_game: "0.3",
        three_point_percentage: "33.3",
        turnovers_per_game: "0.3",
        clickEvent: () => handleClick(id)
      }
    ]
    
    function studentDetails() {
      const rslt = dat.find((stId) => stId.id === parseInt(id) );
      setStudentDetail(rslt)
    }
    studentDetails();

  


  return (
    <React.Fragment>
    <div className="page-content">
      <MetaTags>
        <title>Smart School Management System</title>
      </MetaTags>
      <Row>
        <Breadcrumb breadcrumbItem="Home" title="Add Students" />
      </Row>

    </div>

    <Row className="d-flex justify-content-around align-items-center  mobile-form-padding">
          <Col xl={11} md={6}>
            <Card className="mini-stat bg-white text-black ">
              <CardBody>

                  <h3> {studentDetial.name}</h3>

              </CardBody>
              </Card>
            </Col>
        </Row>

    </React.Fragment>
  )
}

export default StudentsDetails