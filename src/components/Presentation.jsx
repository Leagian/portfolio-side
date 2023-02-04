// import Spline from "@splinetool/react-spline";

import "./Presentation.css";

const Presentation = () => {
  return (
    <>
      <div id="presentation">
        <div className="presGlobal">
          <div>
            <h1 className="pres-h1">
              Hey! <br />
              my name is <br />
              <span className="pres-bold"> Léa.</span>
            </h1>
            <h3 className="typing-demo">I am a Web Developer</h3>
            <span className="cursor">&nbsp;</span>
          </div>

          {/* <div className="pres-img">
            <Spline
              className="calculette"
              scene="https://prod.spline.design/k6eNFOSjAbXc8Tvr/scene.splinecode"
            />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Presentation;
