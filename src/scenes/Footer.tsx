import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <div className="h-64 bg-slate-900 pt-10">
      <div className="w-5/6 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center">
          <p className=" font-playfair font-semibold text-2xl text-yellow">
            MATIJA BILIĆ
          </p>
          <p className=" font-playfair text-md text-yellow">
            ©2024 BILIĆ. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
