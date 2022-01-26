import React from 'react';
import './Banner.scss';

const Banner = () => {
    return (
        <div className="row banner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 banner-text">
                        <p className="main-title">In-demand talent on demand.TM</p>
                        <p className="secondary-title">Upwork is how.TM</p>
                        <p className="description">
                            Upwork expertly connects professionals and agencies to businesses seeking specialized talent.
                        </p>
                        <button className="btn--c get-started">Get Started</button>
                        <button className="btn--c demo">Demo</button>
                    </div>
                    <div className="col-lg-6">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;