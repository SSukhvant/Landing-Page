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
      title: "Fast and Accurate",
      description:
        "Enjoy speedy processing and precise reviewing through our advanced tech.",
    },
    {
      imgUrl: `${image.kb3}`,
      title: "Efficient Data Handling",
      description:
        "Move data in and out effortlessly with our unique features.",
    },
    {
      imgUrl: `${image.kb4}`,
      title: "Tailored To Your Needs",
      description:
        "Questa molds to fit your organization's specific requirements.",
    },
    {
      imgUrl: `${image.kb5}`,
      title: "Stay Updated",
      description:
        "With our mobile app, you're always informed, anytime, anywhere.",
    },
    {
      imgUrl: `${image.kb6}`,
      title: "Smart Data Insights",
      description:
        "Let our AI help you uncover the significant insights in your data.",
    },
    {
      imgUrl: `${image.kb7}`,
      title: "Affordable Excellence",
      description:
        "Get top-quality eDiscovery features without the premium price.",
    },
    {
      imgUrl: `${image.kb8}`,
      title: "Professional support",
      description: "Get professional support whenever you need it.",
    },
    {
      imgUrl: `${image.kb9}`,
      title: "Quick Start",
      description: "Get to work quickly. Easy and fast onboarding.",
    },
  ];
  return (
    <section className="app__kb" id="kb">
      <div className="container-sm">
        <h1 className="text-center app__kb-heading">Key Benefits</h1>
        <div className="mt-4 mt-lg-5 py-4 text-center">
          <div className="row">
            {benefits.map((index, key) => {
              return (
                <div className="col-12 col-lg-4" key={key}>
                  <div
                    className={`card border-0 py-5 px-2 ${
                      key % 2 === 1 ? "app__card-even" : "app__card-odd"
                    }`}
                  >
                    <img
                      src={index.imgUrl}
                      className="card-img-top app__kb-img"
                      alt="Key Benefits"
                    />
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
