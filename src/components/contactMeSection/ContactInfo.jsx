import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="dm8751036@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+92 3350393389" Image={FiPhone} />
      <SingleInfo text="Pakistan,Karachi" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
