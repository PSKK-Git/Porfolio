import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { AiFillLinkedin,AiFillGithub } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <BsTwitter />
    </div>
    <div>
      <FaFacebookF />
    </div>
    <div>
      <AiFillLinkedin />
    </div>
    <div>
      <AiFillGithub />
    </div>
    <div>
      <BsInstagram />
    </div>
  </div>
);

export default SocialMedia;