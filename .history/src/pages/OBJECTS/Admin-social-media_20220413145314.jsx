
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa';

const AdminJSON = [
    {
      id:1,
      size:80,
      icon: FaFacebookSquare,
      title: "Like us on facebook",
      color: "bg-blue-600",
      number: 30000
    },
    {
      id:2,
      size:80,
      icon: FaTwitterSquare,
      title: "Follow us on twitter",
      color: "bg-sky-600",
      number: 111000
    },
    {
      id:3,
      size:80,
      icon: FaInstagramSquare,
      title: "Follow us on Instagram",
      color: "bg-pink-600",
      number: 600000
    },
];


export function admin_social_json_Obj() {
    return AdminJSON;
}