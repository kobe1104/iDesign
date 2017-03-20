import React from 'react';
import {Link} from 'react-router';

class Designer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="designer-comp">
        here are the designers

        <ul className="designers">
          <li>
            <img src="./pics/designer1.jpg"></img>
            <p>
              The plus-size fashion community has come a long way. Gone are the days
               when you either had to search far and wide for representation of curvier
                bodies or grew frustrated at not seeing plus-size women of color being
                represented on a broad scale. These days, thanks to social media and
                YouTube, there’s a wide variety of successful plus-size fashion and beauty
                 influencers who have pushed forward the image of diversity.
            </p>
          </li>
          <li>
            <img src='./pics/designer2.jpeg'></img>
            <p>
              Every time fashion month rolls around, one of the most exciting dispatches, in
               our humble opinion, is the street style. Runway fashion will always have our
               hearts and attention, but there’s nothing like seeing the latest trends and
               coveted pieces in the wild outside the tents.
            </p>
          </li>
          <li>
            <img src="./pics/designer3.jpg"></img>
            <p>
              Our international fashion month tour has come to a close. Trend-wise, we kind
               of knew what to expect. Fall brings with it deeper palettes, luxurious fabrics,
                new and improved takes on outerwear.
            </p>
          </li>

        </ul>
      </div>
    );
  }
}

export default Designer;
