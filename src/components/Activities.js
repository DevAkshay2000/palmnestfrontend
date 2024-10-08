import React, { useEffect, useState } from "react";
import "./Activities.css";
import axios from "axios";
import ImageLayout from "./Resources/ImageLayout";
import activityBanner from "../images/New Images/activitiesCover.jpg";
import Slider from "react-slick";
import act1 from "../images/New Images/Activity Slider/act1.jpg";
import act2 from "../images/New Images/Activity Slider/act2.jpg";
import act3 from "../images/New Images/Activity Slider/act3.jpg";
import act4 from "../images/New Images/Activity Slider/act4.jpg";
import act5 from "../images/New Images/Activity Slider/act5.jpg";
import act6 from "../images/New Images/Activity Slider/act6.jpg";
import act7 from "../images/New Images/Activity Slider/act7.jpg";
import act9 from "../images/New Images/Activity Slider/act9.jpg";
import act10 from "../images/New Images/Activity Slider/act10.jpg";
import { BASE_URL } from "../constant/constant";

const Activities = () => {
  const [activityData, setActivityData] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/activity/getactivity`)
      .then((res) => {
        setActivityData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {/* <div className="container-fluid p-0">
        <ImageLayout
          imageUrl={activityBanner}
        />
      </div> */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-sm-12 col-xs-12">
            <video autoPlay loop muted playsInline width="100%">
              <source src="https://res.cloudinary.com/dluslcltw/video/upload/v1690106394/Activities_czapoz.mp4" />
            </video>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <h1
            style={{
              marginTop: "30px",
              textAlign: "center",
              fontFamily: "tentFont",
            }}
            className="text-uppercase"
          >
            Activities At Palmnest Resort
          </h1>
        </div>
      </div>
      <div className="container mb-4" style={{ marginTop: "60px" }}>
        <div className="row">
          <Slider {...settings}>
            <div>
              <img src={act1} alt="Image1" className="img-fluid" />
            </div>
            <div>
              <img src={act2} alt="Image2" className="img-fluid" />
            </div>
            <div>
              <img src={act3} alt="Image3" className="img-fluid" />
            </div>
            <div>
              <img src={act4} alt="Image4" className="img-fluid" />
            </div>
            <div>
              <img src={act5} alt="Image5" className="img-fluid" />
            </div>
            <div>
              <img src={act6} alt="Image6" className="img-fluid" />
            </div>
            <div>
              <img src={act7} alt="Image9" className="img-fluid" />
            </div>
            <div>
              <img src={act9} alt="Image11" className="img-fluid" />
            </div>
            <div>
              <img src={act10} alt="Image12" className="img-fluid" />
            </div>
          </Slider>
        </div>
      </div>
      <div className="container-fluid mt-4">
        <div className="row d-flex justify-content-center">
          {activityData?.map((val, id) => {
            return (
              <div className="col-lg-3 col-sm-6 mt-5">
                <img className="img-fluid" src={val?.image?.url} alt="" />
                <h4 className="text-center mt-3">{val?.title}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Activities;
