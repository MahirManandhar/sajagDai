import React from "react";
import img1 from "./images/bkt.jpg";
import img2 from "./images/lum.jpg";
import img3 from "./images/boud.jpg";
import img4 from "./images/chit.webp";
import img5 from "./images/pkh.webp";
import imga from "./images/boud.jpg";
import imgb from "./images/chit.webp";
import imgc from "./images/pkh.webp";
import Footer from "./footer";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home(props) {
  // const [modal2,setmodal2] = useState(false)
  props.setmodal(true);

  return (
    <>
      <div className="center">
        <div className="bg">
          <div className="align">
            <br />
            <br />
            WELCOME TO
            <br />
            THE
            <br />
            <div style={{ color: "#FFFFFF" }}>
              "LAND OF THE MOUNTAINS" <br />
              <br />
              <br /> <br />
            </div>
          </div>
          <div className="bg1">
            <div className="align1">
              <div className="align2">
                <br />
              </div>
              LET'S GO
              <br />
              <div className="align2">
                From the soaring peaks of the Himalayas to the serene beauty of
                its many lakes and rivers, Nepal is a land of astonishing
                natural wonders. Explore the natural beauty and discover the
                warmth and hospitality of Nepalese people.
                <br />
                <br />
              </div>
            </div>
          
            {/* <div className="card" style={{ width: "25rem" }}>
              <img
                src={img1}
                className=" card-img-top"
                alt="Logo"
                width="500"
                height="300"
              />
              <div className="card-body">
                <div className="align3">
                  <p className="card-text">
                    Some quick example text to build on the card title and
                    make up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div> 
              </div>
      </div>*/}
            <div className="row">
              <div className="col-lg-6 mb-4">
                <div
                  className="card"
                  style={{
                    borderTopLeftRadius: "50px",
                    borderTopRightRadius: "50px",
                    borderBottomLeftRadius: "50px",
                    borderBottomRightRadius: "50px",
                  }}
                >
                  <img
                    src={img1}
                    className=" card-img-top"
                    alt="Logo"
                    width="500"
                    height="300"
                    style={{
                      borderTopLeftRadius: "50px",
                      borderTopRightRadius: "50px",
                    }}
                  />
                  <div className="align4">
                    <div
                      className="card-body"
                      style={{
                        borderBottomLeftRadius: "50px",
                        borderBottomRightRadius: "50px",
                      }}
                    >
                      <p className="card-text">BHAKTAPUR</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="card">
                  <div className="card-body">
                    <div className="accordion" id="accordionExample1">
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne1"
                            aria-expanded="true"
                            aria-controls="collapseOne1"
                          >
                            ROYAL
                          </button>
                        </h2>
                        <div
                          id="collapseOne1"
                          className="accordion-collapse collapse show"
                          data-bs-parent="#accordionExample1"
                        >
                          <div className="accordion-body">
                            Nepal is a landlocked country located in South Asia.
                            It is bordered by China to the north and India to
                            the south, east, and west. Nepal is known for its
                            breathtaking Himalayan mountain range, including
                            Mount Everest, the tallest peak in the world. Nepal
                            has a diverse landscape, with lush forests, rivers,
                            and rolling hills in the south, and high altitude
                            deserts in the north. The country is home to
                            numerous ethnic groups, each with its own unique
                            culture, language, and traditions. Nepali is the
                            official language of the country, and Hinduism and
                            Buddhism are the two major religions.Nepal is a
                            landlocked country located in South Asia. It is
                            bordered by China to the north and India to the
                            south, east, and west. Nepal is known for its
                            breathtaking Himalayan mountain range, including
                            Mount Everest, the tallest peak in the world. Nepal
                            has a diverse landscape, with lush forests, rivers,
                            and rolling hills in the south, and high altitude
                            deserts in the north. The country is home to
                            numerous ethnic groups, each with its own unique
                            culture, language, and traditions. Nepali is the
                            official language of the country, and Hinduism and
                            Buddhism are the two major religions.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo1"
                            aria-expanded="false"
                            aria-controls="collapseTwo1"
                          >
                            HISTORICAL
                          </button>
                        </h2>
                        <div
                          id="collapseTwo1"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample1"
                        >
                          <div className="accordion-body">
                            Nepal is a landlocked country located in South Asia.
                            It is bordered by China to the north and India to
                            the south, east, and west. Nepal is known for its
                            breathtaking Himalayan mountain range, including
                            Mount Everest, the tallest peak in the world. Nepal
                            has a diverse landscape, with lush forests, rivers,
                            and rolling hills in the south, and high altitude
                            deserts in the north. The country is home to
                            numerous ethnic groups, each with its own unique
                            culture, language, and traditions. Nepali is the
                            official language of the country, and Hinduism and
                            Buddhism are the two major religions.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree1"
                            aria-expanded="false"
                            aria-controls="collapseThree1"
                          >
                            CULTURAL
                          </button>
                        </h2>
                        <div
                          id="collapseThree1"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample1"
                        >
                          <div className="accordion-body">
                            Nepal is a landlocked country located in South Asia.
                            It is bordered by China to the north and India to
                            the south, east, and west. Nepal is known for its
                            breathtaking Himalayan mountain range, including
                            Mount Everest, the tallest peak in the world. Nepal
                            has a diverse landscape, with lush forests, rivers,
                            and rolling hills in the south, and high altitude
                            deserts in the north. The country is home to
                            numerous ethnic groups, each with its own unique
                            culture, language, and traditions. Nepali is the
                            official language of the country, and Hinduism and
                            Buddhism are the two major religions.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="line" />
            <br />
            <div className="row">
              <div className="col-lg-6 mb-4">
                <div
                  className="card"
                  style={{
                    borderTopLeftRadius: "50px",
                    borderTopRightRadius: "50px",
                    borderBottomLeftRadius: "50px",
                    borderBottomRightRadius: "50px",
                  }}
                >
                  <img
                    src={img4}
                    className=" card-img-top"
                    alt="Logo"
                    width="500"
                    height="300"
                    style={{
                      borderTopLeftRadius: "50px",
                      borderTopRightRadius: "50px",
                    }}
                  />
                  <div className="align4">
                    <div className="card-body">
                      <p className="card-text">CHITWAN</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="card">
                  <div className="card-body">
                    <div className="accordion" id="accordionExample2">
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne2"
                            aria-expanded="true"
                            aria-controls="collapseOne2"
                          >
                            DIVERSE WILDLIFE
                          </button>
                        </h2>
                        <div
                          id="collapseOne2"
                          className="accordion-collapse collapse show"
                          data-bs-parent="#accordionExample2"
                        >
                          <div className="accordion-body">
                            Nepal is a landlocked country located in South Asia.
                            It is bordered by China to the north and India to
                            the south, east, and west. Nepal is known for its
                            breathtaking Himalayan mountain range, including
                            Mount Everest, the tallest peak in the world. Nepal
                            has a diverse landscape, with lush forests, rivers,
                            and rolling hills in the south, and high altitude
                            deserts in the north. The country is home to
                            numerous ethnic groups, each with its own unique
                            culture, language, and traditions. Nepali is the
                            official language of the country, and Hinduism and
                            Buddhism are the two major religions.Nepal is a
                            landlocked country located in South Asia. It is
                            bordered by China to the north and India to the
                            south, east, and west. Nepal is known for its
                            breathtaking Himalayan mountain range, including
                            Mount Everest, the tallest peak in the world. Nepal
                            has a diverse landscape, with lush forests, rivers,
                            and rolling hills in the south, and high altitude
                            deserts in the north. The country is home to
                            numerous ethnic groups, each with its own unique
                            culture, language, and traditions. Nepali is the
                            official language of the country, and Hinduism and
                            Buddhism are the two major religions.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo2"
                            aria-expanded="false"
                            aria-controls="collapseTwo2"
                          >
                            NATURE
                          </button>
                        </h2>
                        <div
                          id="collapseTwo2"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample2"
                        >
                          <div className="accordion-body">
                            Nepal is a landlocked country located in South Asia.
                            It is bordered by China to the north and India to
                            the south, east, and west. Nepal is known for its
                            breathtaking Himalayan mountain range, including
                            Mount Everest, the tallest peak in the world. Nepal
                            has a diverse landscape, with lush forests, rivers,
                            and rolling hills in the south, and high altitude
                            deserts in the north. The country is home to
                            numerous ethnic groups, each with its own unique
                            culture, language, and traditions. Nepali is the
                            official language of the country, and Hinduism and
                            Buddhism are the two major religions.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree2"
                            aria-expanded="false"
                            aria-controls="collapseThree2"
                          >
                            PEACEFUL
                          </button>
                        </h2>
                        <div
                          id="collapseThree2"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample2"
                        >
                          <div className="accordion-body">
                            Nepal is a landlocked country located in South Asia.
                            It is bordered by China to the north and India to
                            the south, east, and west. Nepal is known for its
                            breathtaking Himalayan mountain range, including
                            Mount Everest, the tallest peak in the world. Nepal
                            has a diverse landscape, with lush forests, rivers,
                            and rolling hills in the south, and high altitude
                            deserts in the north. The country is home to
                            numerous ethnic groups, each with its own unique
                            culture, language, and traditions. Nepali is the
                            official language of the country, and Hinduism and
                            Buddhism are the two major religions.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="line" />
            <br />
            <div className="row">
              <div className="col-lg-6 mb-4">
                <div
                  className="card"
                  style={{
                    borderTopLeftRadius: "50px",
                    borderTopRightRadius: "50px",
                    borderBottomLeftRadius: "50px",
                    borderBottomRightRadius: "50px",
                  }}
                >
                  <img
                    src={img3}
                    className=" card-img-top"
                    alt="Logo"
                    width="500"
                    height="300"
                    style={{
                      borderTopLeftRadius: "50px",
                      borderTopRightRadius: "50px",
                    }}
                  />
                  <div className="align4">
                    <div className="card-body">
                      <p className="card-text">BOUDDHA</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="card">
                  <div className="card-body">
                    <div className="accordion" id="accordionExample3">
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne3"
                            aria-expanded="true"
                            aria-controls="collapseOne3"
                          >
                            SACRED
                          </button>
                        </h2>
                        <div
                          id="collapseOne3"
                          className="accordion-collapse collapse show"
                          data-bs-parent="#accordionExample3"
                        >
                          <div className="accordion-body">
                            Nepal is a landlocked country located in South Asia.
                            It is bordered by China to the north and India to
                            the south, east, and west. Nepal is known for its
                            breathtaking Himalayan mountain range, including
                            Mount Everest, the tallest peak in the world. Nepal
                            has a diverse landscape, with lush forests, rivers,
                            and rolling hills in the south, and high altitude
                            deserts in the north. The country is home to
                            numerous ethnic groups, each with its own unique
                            culture, language, and traditions. Nepali is the
                            official language of the country, and Hinduism and
                            Buddhism are the two major religions.Nepal is a
                            landlocked country located in South Asia. It is
                            bordered by China to the north and India to the
                            south, east, and west. Nepal is known for its
                            breathtaking Himalayan mountain range, including
                            Mount Everest, the tallest peak in the world. Nepal
                            has a diverse landscape, with lush forests, rivers,
                            and rolling hills in the south, and high altitude
                            deserts in the north. The country is home to
                            numerous ethnic groups, each with its own unique
                            culture, language, and traditions. Nepali is the
                            official language of the country, and Hinduism and
                            Buddhism are the two major religions.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo3"
                            aria-expanded="false"
                            aria-controls="collapseTwo3"
                          >
                            PEACEFUL
                          </button>
                        </h2>
                        <div
                          id="collapseTwo3"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample3"
                        >
                          <div className="accordion-body">
                            Nepal is a landlocked country located in South Asia.
                            It is bordered by China to the north and India to
                            the south, east, and west. Nepal is known for its
                            breathtaking Himalayan mountain range, including
                            Mount Everest, the tallest peak in the world. Nepal
                            has a diverse landscape, with lush forests, rivers,
                            and rolling hills in the south, and high altitude
                            deserts in the north. The country is home to
                            numerous ethnic groups, each with its own unique
                            culture, language, and traditions. Nepali is the
                            official language of the country, and Hinduism and
                            Buddhism are the two major religions.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree3"
                            aria-expanded="false"
                            aria-controls="collapseThree3"
                          >
                            VIBRANT ENERGY
                          </button>
                        </h2>
                        <div
                          id="collapseThree3"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample3"
                        >
                          <div className="accordion-body">
                            Nepal is a landlocked country located in South Asia.
                            It is bordered by China to the north and India to
                            the south, east, and west. Nepal is known for its
                            breathtaking Himalayan mountain range, including
                            Mount Everest, the tallest peak in the world. Nepal
                            has a diverse landscape, with lush forests, rivers,
                            and rolling hills in the south, and high altitude
                            deserts in the north. The country is home to
                            numerous ethnic groups, each with its own unique
                            culture, language, and traditions. Nepali is the
                            official language of the country, and Hinduism and
                            Buddhism are the two major religions.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <hr className="line" />
            <br />
            {/*Newwwwwwww */}
            <div id="carouselExampleCaptions" className="carousel slide">
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active ">
                  <img
                    src={imga}
                    className="d-block w-100"
                    alt="..."
                    height="700"
                    style={{
                      borderRadius: 50,
                    }}
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>
                      Some representative placeholder content for the first
                      slide.
                    </p>
                  </div>
                </div>
                <div className="carousel-item  ">
                  <img
                    src={imgb}
                    className="d-block w-100"
                    alt="..."
                    height="700"
                    style={{
                      borderRadius: 50,
                    }}
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>
                      Some representative placeholder content for the first
                      slide.
                    </p>
                  </div>
                </div>
                <div className="carousel-item ">
                  <img
                    src={imgc}
                    className="d-block w-100"
                    alt="..."
                    height="700"
                    style={{
                      borderRadius: 50,
                    }}
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>
                      Some representative placeholder content for the first
                      slide.
                    </p>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <br />
            <hr className="line" />
            <br />
            <div className="bg3">
              <br />
              <br />
              <div className="align6">
                <br />
                EXPLORE
              </div>
              <div className="align7"> NEPAL</div>
            </div>
            <br />
            <div className="align8">
              Discover your next favorite destination
            </div>
            <br />
            <div className="alignLeft1">
              <img
                src={img5}
                alt="Logo"
                style={{
                  height:600,
                  width:600,
                  borderRadius: 300,
                }}
              />
              BREATHTAKING VIEWS
            </div>
            <br />
            <br />
            <div className="alignRight1">
              MAJESTICS TEMPLES
              <img
                src={img2}
                alt="Logo"
                style={{
                  alignItems:'right',
                  height:600,
                  width:600,
                  borderRadius: 300,
                }}
              />
              <br />
            </div>
            <br />
            <br />
            <hr className="line" />
            <div className="foot">
              <div className="aligncenter"></div>
              "Once a year, go somewhere you have never been before"
              <br />- Dalai Lama
            </div>
            <hr className="line" />
            <br />
            <div className="align9">
              GUIDED TRAVELS
              <div className="align10">
                {" "}
                From the snow-capped peaks of the Himalayas to the lush jungles
                of the Terai.Visit majestic temples, take in the breathtaking
                scenery and taste the delicious cuisine of this vibrant nation.
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
