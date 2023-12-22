import PropTypes from "prop-types";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./teamCard.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const LodeTeamMember = ({ singleData }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  const { name, image, title, social_media } = singleData;
  const { facebook, instagram, github, whatsapp } = social_media;
  return (
    <div
    data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="2000"
      className="teamCard transition-all duration-1000 p-5 border border-primaryColor rounded-md space-y-4"
    >
      <div className="img h-[285px] w-full overflow-hidden relative ">
        <img
          src={image}
          className="h-full w-full rounded-md overflow-hidden border border-primaryColor"
          alt="Team Member"
        />
        <div className=" teamIcon transition-all duration-500 hidden hover:flex  flex-col gap-5 justify-between items-center bg-primaryColor opacity-80 z-40 absolute top-0 right-0 w-1/3 p-5 h-full rounded-r-md text-2xl">
          <div className="facebook instagram border border-pink-500 text-pink-500 font-bold hover:text-purple-800 bg-white w-10 h-10 rounded-full flex justify-center items-center">
            <Link to={facebook}>
              <BsFacebook></BsFacebook>
            </Link>
          </div>
          <div className="instagram border border-pink-500 text-pink-500 font-bold hover:text-purple-800 bg-white w-10 h-10 rounded-full flex justify-center items-center">
            <Link to={instagram}>
              <BsInstagram></BsInstagram>
            </Link>
          </div>
          <div className="github instagram border border-pink-500 text-pink-500 font-bold hover:text-purple-800 bg-white w-10 h-10 rounded-full flex justify-center items-center">
            <Link to={github}>
              <BsGithub></BsGithub>
            </Link>
          </div>
          <div className="whatsapp instagram border border-pink-500 text-pink-500 font-bold hover:text-purple-800 bg-white w-10 h-10 rounded-full flex justify-center items-center">
            <Link to={whatsapp}>
              <BsWhatsapp></BsWhatsapp>
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center mt-5">
        <h2 className="text-2xl font-bold uppercase text-primaryColor">{name}</h2>
        <h4 className="text-xl font-semibold ">{title}</h4>
      </div>
    </div>
  );
};

LodeTeamMember.propTypes = {
  singleData: PropTypes.object.isRequired,
};

export default LodeTeamMember;
