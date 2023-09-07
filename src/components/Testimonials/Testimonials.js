import Slider from "react-slick";
import "./Testimonials.scss";
import { useRef } from "react";
import { image } from "../../constant";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BsArrowLeft, BsArrowRight, BsStarFill} from 'react-icons/bs';

let data = [
   {
    name: "Daniel C.",
    rating: "5",
    feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
   },
   {
    name: "Walker B.",
    rating: "5",
    feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
   },
   {
    name: "Jonh F.",
    rating: "4",
    feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
   },
   {
    name: "Daniel C.",
    rating: "5",
    feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
   }
];

var settings = {
  className: "center",
  centerMode: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
  ],
};

const Testimonials = () => {
  const arrowRef = useRef(null);
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<div className="rating-box" key={i}><span className="rating"><BsStarFill/></span></div>);
    }
    return stars;
  };

  const renderNoStars = (rating) => {
    const noStars = [];
    for (let i = 0; i < rating; i++) {
      noStars.push(<div className="no-rating-box" key={i}><span className="no-rating"><BsStarFill/></span></div>);
    }
    return noStars;
  };



  return (
    <section className="app__test" id="testimonials">
      <h1 className="app__test-h1">Clients Thinks</h1>
      <div className="app__test-p">
        <p className="text-center">
          These are some of the reviews that our customers have left us.
        </p>
      </div>

      <div className="container-sm">
      <Slider ref={arrowRef} {...settings}>
        {data.map((item, i) => (
          <div key={i} className="test">
          <div className="test-top">
          <img src={image.user} alt="user" className="mx-auto user"/>
          <h5 className="text-white">{item.name}</h5>
          <img src={image.mountains} alt="mountains" className="test-mountains"/>
          </div>
          <div className="test-bottom">
            {renderStars(item.rating)}
            {renderNoStars(5-item.rating)}
            <p className="mt-4">{item.feedback}</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="d-flex justify-content-center align-items-center gap-4">
      <div className="back" onClick={() => arrowRef.current.slickPrev()}>
        <BsArrowLeft/>
      </div>
      <div className="next" onClick={() => arrowRef.current.slickNext()}>
        <BsArrowRight/>
      </div>
      </div>
      </div>
    </section>
  );
};

export default Testimonials;
