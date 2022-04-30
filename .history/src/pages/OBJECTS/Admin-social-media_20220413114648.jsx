
import { FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';


const AdminJSON = [
    {
      id:1,
      size:80,
      icon: FaFacebookSquare,
      title: "Like us on facebook",
      number: 30000
    },
    {
      id:2,
      size:80,
      icon: FaTwitterSquare,
      title: "Follow us on twitter",
      number: 111000
    },
    {
      id:3,
      size:80,
      icon: AiFillInstagram,
      title: "Instagram",
      number: 600000
    },
];


export function admin_social_json_Obj() {
    return AdminJSON;
}