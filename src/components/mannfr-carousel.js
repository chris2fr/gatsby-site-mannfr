import React from "react";
import Carousel from 'react-elastic-carousel'
import { Link } from "gatsby";

import "./mannfr-carousel.css"

// import "../css/basics.css";
// import "../pages/index.css";
import "../css/tag.css";
// import "../css/utilities.css";
// import "../css/header.css";
// import "../css/burger.css";
// import "../css/widget.css";

class MannfrCarousel extends React.Component  {

  constructor(props) {
    // super({ children, ...props });
    super(props);
    this.breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
      { width: 850, itemsToShow: 3 },
      { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
      { width: 1450, itemsToShow: 5 },
      { width: 1750, itemsToShow: 6 },
    ]
  }


  render() {
    return (
      <>
<Carousel 
  breakPoints={[
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
      { width: 850, itemsToShow: 3 },
      { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
      { width: 1450, itemsToShow: 5 },
      { width: 1750, itemsToShow: 6 },
    ]} className="mann-carousel">
  <div key="slide-digital" className={"mann-carousel-item"}>
    <div className={"tag"}>
      <img
        className={"tag-img mann-carousel-img"}
        src="/images/peter-tablet.png"
        alt="Digital"
      />
      <div>
        <h2> Digital</h2>
        <div>
          You work in the heart of the cyber infrastructure. You peddle
          the bicycle that powers your company and the work of your
          clients. MANN.FR can help!
        </div>
      </div>
      <Link className={"u-permalink"} to="/tag/digital/"></Link>
    </div>
  </div>
  <div key="slide-human" className={"mann-carousel-item"}>
    <div>
      <img
        className={"tag-img mann-carousel-img"}
        src="/images/dancing-king.jpg"
        alt="Human"
      />
      <div>
        <h2> Human</h2>
        <div>
          You work and live in a structure. You cooperate, collaborate
          and create. MANN.FR can help you do so with sereine power.
        </div>
      </div>
      <Link className={"u-permalink"} to="/tag/human/"></Link>
    </div>
  </div>
  {/*/}
  <div className={"mann-homegrid-item mann-background-mann-fr"}>
    <div>
      <img
        
        data-src="/content/images/2020/11/boule-1.png"
        src="./mann-fr_files/boule-1.png"
        alt=" MANN.FR"
      />
      <div>
        <h2> MANN.FR</h2>
        <div>
          MANN.FR is a business, my business as Chris Mann. You may
          learn more about this business and associated products and
          services useful to you.
        </div>
      </div>
      <a
        className={"u-permalink"}
        href="https://en.mann.fr/tag/mann-fr/"
      ></a>
    </div>
  </div>
{/*/}
  <div key="slide-orgs" className={"mann-carousel-item"}>
    <div>
      <img
        className={"tag-img mann-carousel-img"}
        src="/images/bees-465x550.jpeg"
        alt="Organization"
      />
      <div>
        <h2> Organization</h2>
        <div>
          Your are an organization striving for inclusion because it
          makes you more robust. MANN.FR will innovate with you, invent
          and create, making those stalled projects move forward kindly.
        </div>
      </div>
      <Link className={"u-permalink"} to="/tag/orgs/"></Link>
    </div>
  </div>
  {/*/}
  <div className={"mann-homegrid-item "}>
    <div>
      <img
        
        data-src="/content/images/2020/11/tnoc-7432.jpg"
        src="./mann-fr_files/tnoc-7432.jpg"
        alt="Human / Adult-ADHD"
      />
      <div>
        <h2>Human / Adult-ADHD</h2>
        <div>
          You have Adult ADHD and with to thrive fully as you
          compensating for this difference that can be handicap. MANN.FR
          can address the specifics and move beyond this part of you.
        </div>
      </div>
      <a
        className={"u-permalink"}
        href="https://en.mann.fr/tag/human-adult-adhd/"
      ></a>
    </div>
  </div>

  <div className={"mann-homegrid-item"}>
    <div>
      <img
        
        data-src="/content/images/2020/11/Chris_Mann_Photo-65-e1567510883586-1.jpg"
        src="./mann-fr_files/Chris_Mann_Photo-65-e1567510883586-1.jpg"
        alt="Photo"
      />
      <div>
        <h2>Photo</h2>
        <div>
          You are a photographer or a consumer of photography. MANN.FR
          federates photographers, sets up common photographic events
          and shares resources.
        </div>
      </div>
      <a
        className={"u-permalink"}
        href="https://en.mann.fr/tag/photo/"
      ></a>
    </div>
  </div>
  {/*/}
</Carousel>

<Carousel itemsToShow={2}>
      <div key="i1">1</div>
      <div key="i2">2</div>
      <div key="i3">3</div>
      <div key="i4">4</div>
      <div key="i5">5</div>
      <div key="i6">6</div>
    </Carousel>



</>
    )
  }

}

export default MannfrCarousel