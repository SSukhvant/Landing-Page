import "./KeyBenefits.scss";
import { image } from "../../constant";

const KeyBenefits = () => {
  const benefits = [
    {
      imgUrl: `${image.kb1}`,
      title: "Optimal User Experience",
      description: "Dive into a simple yet powerful UI designed for everyone.",
    },
    {
      imgUrl: `${image.kb2}`,
      title: "Optimal User Experience",
      description: "Dive into a simple yet powerful UI designed for everyone.",
    },
    {
      imgUrl: `${image.kb3}`,
      title: "Optimal User Experience",
      description: "Dive into a simple yet powerful UI designed for everyone.",
    },
    {
      imgUrl: `${image.kb4}`,
      title: "Optimal User Experience",
      description: "Dive into a simple yet powerful UI designed for everyone.",
    },
    {
      imgUrl: `${image.kb5}`,
      title: "Optimal User Experience",
      description: "Dive into a simple yet powerful UI designed for everyone.",
    },
    {
      imgUrl: `${image.kb6}`,
      title: "Optimal User Experience",
      description: "Dive into a simple yet powerful UI designed for everyone.",
    },
    {
      imgUrl: `${image.kb7}`,
      title: "Optimal User Experience",
      description: "Dive into a simple yet powerful UI designed for everyone.",
    },
    {
      imgUrl: `${image.kb8}`,
      title: "Optimal User Experience",
      description: "Dive into a simple yet powerful UI designed for everyone.",
    },
    {
      imgUrl: `${image.kb9}`,
      title: "Optimal User Experience",
      description: "Dive into a simple yet powerful UI designed for everyone.",
    },
  ];
  return (
    <section className="app__kb">
      <div className="container-sm">
        <h1 className="text-center app__kb-heading">Key Benefits</h1>
        <div className="mt-4 mt-lg-5 py-4 text-center">
          <div className="row">
            {benefits.map((index, key) => {
              return (
                <div className="col-12 col-lg-4" key={key}>
                  <div className = {`card border-0 py-5 px-2 ${key % 2===1 ? "app__card-even" : "app__card-odd"}`}>
                    <img src={index.imgUrl} className="card-img-top app__kb-img" alt="Key Benefits" />
                    <div className="card-body">
                      <h4 className="card-title">{index.title}</h4>
                      <p className="card-text">{index.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyBenefits;
