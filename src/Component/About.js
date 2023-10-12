import React from "react";


const propTypes = {};
const defaultProps = {Theme:"Light"};

const About = (props) => {
  let CardTheme = props.Theme==="Light" ? "primary" : "success";
  return (
      <>
    <div className="d-flex justify-content-center align-item align-items-center">
      <div class={`card w-25 m-5 text-center border border-5 border-${CardTheme}`}>
        <img src="./a.jpg" class="card-img-top w-75 m-auto p-2" alt="Unable to Load Img" />
        <div class="card-body">
          <h5 class="card-title">Abhishek Goyal</h5>
          <h3 class="font-weight-bold">
            Co-Founder  
          </h3>
        </div>
      </div>
      <div class={`card w-25 m-5 text-center border border-5 border-${CardTheme}`}>
        <img src="./b.jpg" class="card-img-top w-75 m-auto p-2" alt="Unable to Load Img" />
        <div class="card-body">
          <h5 class="card-title">Parveen Kumar Goyal</h5>
          <h3 class="font-weight-bold">
            Founder  
          </h3>
        </div>
      </div>
    </div>
      </>
  );
};

About.propTypes = propTypes;
About.defaultProps = defaultProps;
export default About;
