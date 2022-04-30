
import { FaPeopleCarry, FaRegMoneyBillAlt } from 'react-icons/fa';
import { GiTeacher } from 'react-icons/gi';
import { RiParentFill } from 'react-icons/ri';


const AdminJSON = [
    {
      id:1,
      size:80,
      icon: FaPeopleCarry,
      title: "Like us on facebook",
      number: 30000
    },
    {
      id:2,
      size:80,
      icon: GiTeacher,
      title: "Follow us on twitter",
      number: 111000
    },
    {
      id:3,
      size:80,
      icon: RiParentFill,
      title: "Instagram",
      number: 60000
    },
   
];


export function admin_social_json_Obj() {
    return AdminJSON;
}