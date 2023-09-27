import { Parallax } from "react-parallax";
const Cover = ({ img, title, description }) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div>
        <div className="hero h-[500px]">
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className=" text-white p-14 w-[500px] h-[250px]">
              <h1 className="mb-5 text-[40px] font-[400] uppercase">{title}</h1>
              <p className="mb-5 font-[400] text-center">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
