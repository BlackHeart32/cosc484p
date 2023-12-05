import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class Home extends Component {
    render() {
        return (
            <Carousel dynamicHeight>
                <div>
                    <img src="https://cdn.shopify.com/s/files/1/0578/1097/files/Shy_girl_workout.png?v=1667298066" alt='Hi' />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                <img src="https://www.nourishmovelove.com/wp-content/uploads/2021/04/best-home-workout-for-women.jpg" alt='Hi' />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                <img src="https://www.dmoose.com/cdn/shop/articles/1_d56cdd25-15b8-411b-8741-0ef28b9bfd06.jpg?v=1649935774" alt='Hi' />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
}

export default Home
