import React from 'react';
import Slider from 'react-slick';

const PageBanner = (props) => {
    const { imageBanner = true, carouselBanner = false, image, carouselSettings, children } = props;

    return (
        <div className={`page-banner ${carouselBanner ? "carousel" : ''}`}>
            {imageBanner && (
                <img src={image} alt="" />
            )}

            {carouselBanner && (
                <Slider {...carouselSettings}>
                    {children}
                </Slider>
            )}
        </div>
    )
}

export default PageBanner
