import React, { Component } from 'react';
import axios from 'axios';

import Banner from '../../components/Banner/Banner';
import TalentCard from '../../components/TalentCard/TalentCard';
import WorkCard from '../../components/WorkCard/WorkCard';
import OfferCard from '../../components/OfferCard/OfferCard';
import './Home.scss';

class Home extends Component {
    state = {
        work: {},
        talent: {},
        offer: {}
    };

    componentDidMount(){
        axios({
            method: 'GET',
            url: 'http://localhost:8000/api/home',
            params: {
                age: 1000,
                posts: 2000,
                money: 500
            },
            data: {
                
            }
        })
            .then((data) => {
                this.setState({
                    work: data.data.WORK,
                    talent: data.data.TALENT,
                    offer: data.data.OFFER
                })
            })
            .catch((error) => {
                console.log(error);
            })
    };


    render() {
        return (
            <div className="row">
                <div className="col-lg-12">
                    <Banner/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 pt-5">
                            <p className="title-secondary">{this.state.talent?.title}</p>
                        </div>
                        <div className="col-lg-12">
                            <div className="row">
                                {
                                    this.state.talent.talents?.map((el, index) => {
                                        return(
                                            <div className="col-lg-3 p-3" key={index}>
                                                <TalentCard 
                                                    image={el.image}
                                                    title={el.title}
                                                />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5 mb-5">
                        <div className="col-lg-12 pt-3">
                            <p className="title-primary text-center">{this.state.work?.title}</p>
                        </div>
                        {
                            this.state.work.works?.map((el, index) => {
                                return (
                                    <div className="col-lg-3" key={index}>
                                        <WorkCard 
                                            image={el.image}
                                            title={el.title}
                                            description={el.description}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="row mt-5 mb-5">
                        <div className="col-lg-12 pt-3 pb-3">
                            <p className="title-primary text-center">{this.state.offer?.title}</p>
                            <p className="description-secondary text-center">{this.state.offer?.description}</p>
                        </div>
                        {
                            this.state.offer.list?.map((el, index) => {
                                return (
                                    <div className="col-lg-3" key={index}>
                                        <OfferCard
                                            title={el.title}
                                            button={el.button}
                                            fee={el.fee}
                                            services={el.services}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
