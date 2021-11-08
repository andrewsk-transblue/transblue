import React, {Fragment, useState, useEffect} from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Header from '../../components/header';
import givesback from '../../images/givesback.jpg';
import './style.css';

import ReactGA from 'react-ga';
const TRACKING_ID = process.env.REACT_APP_GOOGLE_ANALYTICS_ID // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

const charities = [
    {
        name: 'MBRIDGE',
        description: [
            'The partners at mBridge bring a deep understanding of both the for-profit businesses and the nonprofit sectors together with extensive experience working with missions organizations around the world. We work closely with both missions workers and those interested in missional causes that will have the greatest impact.',
            'mBridge is dedicated to helping people maximize their potential through earnest giving to deserving organizations. We curate noble causes we believe in—those causes that put the most effort toward those most in need—and connect you with them so you can do the most good.',
            'mBridge builds connections between people that believe and are willing to live out the Great Commission (Matthew 28:20). Our sole purpose is to see the people come into a transformative relationship with Jesus Christ. We believe that the Great Commission is something that every follower of Jesus should take seriously, stewarding the time, talents, and treasures that God has graciously provided each of us.',
            'All of us want to make make a difference in this world. Many of us have been abundantly blessed through great opportunities and hard work. The desire to “give back” and make a difference in the lives of others is one of the driving forces behind mBridge. We believe in changing the world with the gospel both in word and in deeds.'
        ]
    },
    {
        name: "DEE'S HOPE",
        description: [
            'Dee was a house girl and understands how girls are abused and trapped in domestic servitude. Domestic servitude is soft slavery. House girls are most often abused physically and sexually. Dee is personally motivated to rescue girls. Last year, they went grew from 7 to 17 girls that were rescued and provided an education.',
            ''
        ]
    },
    {
        name: 'SOLID ROCK MISSION',
        description: [
            'Solid Rock Mission reaches into rural and war torn regions of southern and eastern Ukraine. These are communities where the Russian Orthodox Church is firmly established but has been ineffective in ministering to the younger generation. Alcoholism and the break down of the family is rampant. Children and youth are often victims of abuse or politically radicalized. Solid Rock Mission has built a mission school and discipleship center that is expanding throughout the region through camps and retreats reaching this young generation for Christ.',
            'Last year, over 4000 children and youth attended Solid Rock summer camps with over 1000 committing their lives to Christ. These are then introduced to missions camps to learn more about walking with Christ and serving their communities and families.'
        ]
    },
    {
        name: 'HOPE UNLIMITED',
        description: [
            'Hope unlimited provides critical support to both our first responders and the families of Snohomish County that are in crisis. They provide comfort, support and training during crisis events in our county.',
            'They serve13 different first responder agencies and 1 hospital each of the following counties: i Snohomish, Island, and South Skagit Counties. They had 363 calls for service in 2020 – this means that a chaplain was requested by the fire, police or hospital for assistance in a critical incident. They are adding a new resiliency training programs for first responders to help them cope with challenges of their jobs. team members.'
        ]
    },
    {
        name: 'MARKED',
        description: [
            'Mexico also leads the world in child prostitution distributing over 60% of the worlds child pornography. 63% of those under the age of 15 claim to have encountered sexual violence through organized crime at least once throughout their short lives',
            'The streets of these towns are ripe for gang violence with many of the young boys getting involved at just 11 years of age. By joining these gangs, they start the clock on the last years of their young lives with a life expectancy of only 3 years',
            'Marked provides options for orphaned children to have a safe alternatives to gangs and abuse though creative programs and orphan support services.',
            'Marked has seen those statistics begin to change for good among the communities they serve. Reduced crime rates and increased job opportunities for families allowing thousands of children to come out of the workforce and putting them back into school, now with over a 95% enrollment rate.'
        ]
    },
    {
        name: 'HLC CHURCH NEPAL',
        description: [
            'Founder led: Pastor Jit Lama understands how to stand in a culture that is anti-christian. Nepal persecutes Christians though many cultural laws that inhibit the freedom of worship. HLC church is a strong relational reproducing church in the heart of Katmandu. They serve the poor, help those who are in need and proclaim the gospel of Jesus.',
            'Last year, they reached out and served 200+ families in crisis due to natural disasters and the pandemic. They are always serving those around them, whether they are believers or not. They were evicted from their long term lease, but managed to purchase property and are now building a new church. They are flourishing in the midst of a very difficult culture.'
        ]
    },
    {
        name: 'HEED UGANDA',
        description: [
            'HEED has been instrumental in transforming a community. What started as a rural village without any infrastructure has blossomed into a functioning community with clean water, strong schools and pathways to transformation.',
            'HEED has gathered a team that understands what is needed for a community development in Africa.',
            'HEED serves a 5- village area with over 6000 people. Primary projects: High school, primary school, community clinic, village church, and demonstration farm. Pre-covid over 600 kids in school. Before HEED, few children attended school but now 87% of children aged 6-12 attend school'
        ]
    },
    {
        name: 'MISSION GREEN',
        description: [
            'Mission Green plants Eucalyptus trees for Education. 1 acre of trees planted provides 20 student tuitions for school. 1 acre of trees will produce multiple harvests for secondary income. 1 acre of trees can be planted for only $500.00 yet it will produce over $9000.00 after harvest in 6 years.'
        ]
    }
]

function GivesBack(props) {

    const [activeButton, setActiveButton] = useState(0)
    
    //charities.filter(charity => props.section === charity.name)

    useEffect(() => {
        ReactGA.event({
            category: 'User',
            action: 'Visited Gives Back Page'
          });
    }, [])

    function setDisplayCharity(index) {
        if(index === activeButton) {
            setActiveButton(-1)
        }
        else setActiveButton(index)

        //setActiveButton(index)
    }

    return( 
        <Fragment>
            <Navbar />
            <Header name='givesback' img={givesback} title='TRANSBLUE GIVES BACK' />
            <div className='container givesback-wrapper sm-screen-hide'>
                <div className='row'>
                    <div className='col-md-4 col-lg-3 d-none d-md-block'>
                        {charities.map((charity, index) => {
                            return(
                                <Fragment>
                                    <button className={activeButton === index ? 'active lg-screen-menu' : 'lg-screen-menu'} onClick={() => setActiveButton(index)}>{charity.name}</button><br />
                                </Fragment>
                            )
                        })}
                    </div>
                    {/* SMALL SCREEN MENU CHANGES INDEX TO -1 SO WE MUST ACCOUNT FOR THAT */}
                    {activeButton > -1 && <div className='col-12 col-md-8 col-lg-9'>
                        <div className='body'>
                            <h3 className='section-header'></h3>
                            {charities[activeButton].description.map(p => {
                                return(
                                    <p className='section-p'>{p}</p>
                                )
                            })}
                        </div>
                    </div>}
                </div>
            </div>

            <div className='container givesback-wrapper lg-screen-hide'>
                {charities.map((charity, index) => {
                    return(
                        <Fragment>
                            <button className='sm-screen-menu' onClick={() => setDisplayCharity(index)}>{charity.name}</button><br />

                            {activeButton == index &&                                 
                                charity.description.map(p => {
                                    console.log(index)
                                    return(
                                        <p className='section-p'>
                                            {charity.description[0]}
                                        </p>
                                    )
                                })        
                            }
                            
                        </Fragment>
                    )
                })}
            </div>

            <Footer />
        </Fragment>
    )
}

export default GivesBack;