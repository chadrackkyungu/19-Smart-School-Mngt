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
        
        <Card>
        <Row className="d-flex justify-content-around align-items-center">
              <Col  lg={2} md={6}>
                <CardBody> 
                    <img src={profile?.img ? profile.img : avatar2}  alt="smart-school" style={{"border-radius": "100%"}}/>
                </CardBody>
              </Col>

              <Col  lg={6} md={6}>
              <CardBody> 
                 <h5> Name : { profile?.TeacherName}   { profile?.TeacherLastName}  </h5>
                 <p> Date of birth : { profile?.date_of_birth}   </p>
                 <p> Email : { profile?.email}   </p>
                 <p> Gender : { profile?.gender}   </p>
                 <h5> Number : { profile?.number}   </h5>
                 <p> Religion : { profile?.religion}   </p>
                 <p> Address : { profile?.address}   </p>
                 <small> { profile?.bio}   </small>
                 </CardBody>
              </Col>
        </Row>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default UserProfile;
