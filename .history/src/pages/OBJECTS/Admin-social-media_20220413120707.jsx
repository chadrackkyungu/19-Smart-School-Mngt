
import { FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';


const AdminJSON = [
    {
      id:1,
      size:80,
      icon: FaFacebookSquare,
      title: "Like us on facebook",
      color: "bg-blue",
      number: 30000
    },
    {
      id:2,
      size:80,
      icon: FaTwitterSquare,
      title: "Follow us on twitter",
      color: "bg-sky",
      number: 111000
    },
    {
      id:3,
      size:80,
      icon: AiFillInstagram,
      title: "Instagram",
      color: "bg-pink",
      number: 600000
    },
];


export function admin_social_json_Obj() {
    return AdminJSON;
}