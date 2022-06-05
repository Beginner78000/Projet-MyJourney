import "./about.scss";

// import earthGlass from "../../assets/images/earthGlass.jpg";
// import earthHand from "../../assets/images/earthHand.jpg";
// import earthDark from "../../assets/images/earthDark.jpg";
// import earthMan from "../../assets/images/earthMan.jpg";
// import earthManNoB from "../../assets/images/earthHandNoBackGround.png";

const About = () => {
  const responsive = window.screen.width;

  return (
    <div className="section">
      <div className="container">
        <div className="content-section">
          <div className="title--about">
            <h1 className="name--about"> A propos </h1>
          </div>
          <div className="content">
            <h3>Qu'est ce que My Journey ?</h3>
            <p>
              My Journey est la solution pour toute personne qui ne sait pas où
              partir en voyage, en effet des choix de destinations vous seront
              proposés après avoir répondu à un questionnaire qui a pour but
              d’exprimer vos préférences (période, températures, paysage
              recherchés..).
              <p>
                Après avoir choisi la destination idéale, un descriptif de ce
                lieu vous sera proposé, vous trouverez des informations telles
                que l’histoire et la météo. En plus de vous accompagner dans le
                choix de votre destination, nous vous proposerons des hôtels et
                activités disponibles sur place ainsi que les lieux à visiter.
              </p>
              <p className="bold">
                Nous souhaitons d'avance, de bonnes vacances !
              </p>
            </p>
            {/* <div className="button">
                <a href="/">Contact</a>
              </div> */}
          </div>
          {/* <div className='social'>
              <a href=''>
                <i className='fab fa-facebook-f'></i>
              </a>
              <a href=''>
                <i className='fab fa-twitter'></i>
              </a>
              <a href=''>
                <i className='fab fa-instagram'></i>
              </a>
            </div> */}
        </div>
        <div className="image-section">
          {/* <img src={earthManNoB}></img> */}
          {responsive < 450 ? null : <div className="boxEarth"></div>}
        </div>
      </div>
    </div>
  );
};

export default About;
