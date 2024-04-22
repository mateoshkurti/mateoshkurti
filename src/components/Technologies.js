import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Technologies = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="technologies" id="technologies">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Technologies</h2>
                        <p>In this segment, I've compiled a catalog of technologies that I've actively utilized throughout my professional endeavors and personal ventures, fostering continuous growth and exploration. Each technology is accompanied by the number of years I've dedicated to honing my expertise in its application. Let's embark on a journey through the tools and platforms that have shaped my career trajectory and fueled my passion for innovation and learning.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>ASP.NET</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>JAVA Spring Framework</h5>
                            </div>                            
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>AWS</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Azure Cloud</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Google Cloud</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Angular</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Swift Vapor</h5>
                            </div>
                        </Carousel><br/>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Microsoft SQL</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Microsoft Azure SQL</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Oracle SQL</h5>
                            </div>
                        </Carousel><br></br>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Adobe</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Microsoft Office</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Google Products</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
