import React, {useState, useEffect } from "react";
import { Row, Col, Card, CardBody } from "reactstrap";

import Breadcrumb from '../../components/Common/Breadcrumb';

import { useAuth } from "../../Contexts/AuthContext"
import { Db } from "../../Database/init-firebase";
import { collection, getDocs} from "firebase/firestore"
import avatar2 from "../../assets/images/users/avatar-smart-school.png";


const UserProfile = () => {

  const { currentUser } = useAuth()
  const { uid } = currentUser;
  const [profile, setProfile] = useState();

   useEffect(() =>{
    const fetchData = async() =>{
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(Db, "TEACHERS"));
            querySnapshot.forEach((doc) => {
            list.push({id: doc.id, ...doc.data().allfield}); 
        })
        const result = list.find((stId) => stId.id === uid)
        setProfile(result);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [uid])

  console.log(profile);


  return (
    <React.Fragment>
      <div className="page-content">
        <Row>
          <Breadcrumb breadcrumbItem="Home" title="User Profile" />
        </Row>
        
        <Row>
            <Card>
              <CardBody> 
                <Col  lg={6} md={6}>
                  <img src={profile?.img ? profile.img : avatar2}  alt="smart-school" style={{"border-radius": "100%"}}/>
                </Col>

                <Col  lg={6} md={6}>
                 <h5> { profile?.TeacherName} ." ". { profile?.TeacherLastName}  </h5>
                </Col>

          </CardBody>
            </Card>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default UserProfile;
