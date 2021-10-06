import React, { Component } from 'react';
import forward from '../../../images/forward50.png';
import back from '../../../images/back50.png';
import './style.css';

let reviews = [
    {
        review: '"Transblue went above and beyond expectations. They responded to our snow removal request promptly after a record level of snow fall in Gig harbor. JP Sipla and his crew took the extra time to make sure every home owner on the street was able to get to work. Outstanding service."',
        name: 'Mark C',
        location: 'Lynnwood, WA'
    },
    {
        review: '"I highly recommend Transblue to everyone. Hands down, they are the best in terms of quality, price, communication. They go to extreme limits to ensure their customer is happy."',
        name: 'Sumit G',
        location: 'Cypress, TX'
    },
    {
        review: '"Transblue is one of a kind. When professionalism meets dedication and a passion for what they do. That is what you will find with Transblue and their employees. I give them my highest recommendation."',
        name: 'Craig P',
        location: 'Seattle, WA'
    },
    {
        review: `" August and his team are customer service professionals! My experience with Transblue Sudbury has been great--I would recommend having them out for a quote and see for yourself what you think. Chances are you'll be back here writing something like this when the project is done!"`,
        name: 'Matthew',
        location: 'Sudbury, MA'
    },
    {
        review: '"They completely transformed our backyard , installed pavers , outdoor kitchens and a new spa. Everything was done on time and within budget"',
        name: 'Sam A',
        location: 'Laguna Beach, CA'
    },
    {
        review: '"Wow! When my wife and I decided to put a pool in, we had a vision and Transblue brought that vision to life! They were professional and kept us in the loop every step of the way. I would highly recommend working with Transblue on your backyard project."',
        name: 'Anmore',
        location: 'Laguna Niguel, CA'
    },
    {
        review: "The crew was polite and hard working - special shout out to Junior who persevered by himself one day when a colleague was out sick. Couldn't have been happier with the communications, quality and final outcome, would highly recommend Transblue to anyone.",
        name: 'Aaron G.',
        location: 'Herndon, VA'
    },
    {
        review: " The deck came out incredible. Very high quality. Transblue has done a great job finding a bunch of great people to working for them. You can tell every step of the way. Highly recommend.",
        name: 'Joshua D.',
        location: 'Alexandria, VA'
    }
]

class NewReviews extends Component {
    state={
        activeReview: 0,
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            //console.log('interval')
            this.nextSlide()
        }, 25000)
    }

    nextSlide() {
        if(this.state.activeReview < reviews.length-1) {
            this.setState({activeReview: this.state.activeReview + 1})
        }
        else this.setState({activeReview: 0})
    }

    changeReview = (operation) => {
        clearInterval(this.interval)

        if(operation === 'decrement') {
            if(this.state.activeReview > 0) {
                this.setState({activeReview: this.state.activeReview - 1})
            }
            else this.setState({activeReview: reviews.length-1})
        }
        if(operation === 'increment') {
            if(this.state.activeReview < reviews.length-1) {
                this.setState({activeReview: this.state.activeReview + 1})
            }
            else this.setState({activeReview: 0})
        }
        this.interval = setInterval(() => {
           // console.log('new interval')
            this.nextSlide()
        }, 25000)
    }

    render() {
        return(
            <div className='new-reviews bg-light container-fluid w-100'>
                <div className='row reviews-title'>
                    <div className='col-lg-2 col-2'></div>
                    <div className='col-lg-4 col-xl-3 pr-0 col-8 my-auto'>
                        <div className='row'>
                            <span><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star mr-2"></i>
                            Testimonials</span>
                        </div>
                    </div>
                    <div className='col-lg-4 d-none d-lg-block pl-0 col-xl-5'><div className='h-50'></div></div>
                    <div className='col-lg-2 col-2 col-md-2'></div>
                </div>
                <div className='row'>
                    <div className='col-lg-1 d-none d-sm-block'></div>
                    <div className='col-lg-1 col-2 my-auto text-center'>
                        <div className='decrement'>
                            <button onClick={() => this.changeReview('decrement')}><img src={back} alt='previous review' /></button>
                        </div>
                    </div>
                    <div className='col-lg-8 col-8 px-0 my-auto'>
                        <blockquote className='blockquote'>
                            <p className='mb-2 text-secondary'>{reviews[this.state.activeReview].review}</p>
                            <footer className="blockquote-footer">{reviews[this.state.activeReview].name}, <cite title="Source Title">{reviews[this.state.activeReview].location}</cite></footer>
                        </blockquote>
                    </div>
                    <div className='col-lg-1 col-2 my-auto text-center'>
                        <div className='increment'>
                            <button onClick={() => this.changeReview('increment')}><img src={forward} alt='next review' /> </button>
                        </div>
                    </div>
                    <div className='col-lg-1'></div>
                </div>
            </div>
        )
    }
}

export default NewReviews;