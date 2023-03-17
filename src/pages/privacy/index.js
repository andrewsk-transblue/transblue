import React, {Fragment} from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import './style.css';

function Privacy() {
    return(
        <Fragment>
            <Navbar theme='dark' />
            <div className='privacy-wrapper'>
                <h4>PRIVACY POLICY</h4>
                <p> This Privacy Policy describes how your personal information is collected, used, and shared when you visit transblue.org (the “Site”).</p>
                <h5>&mdash; PERSONAL INFORMATION WE COLLECT</h5>
                <p>When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as “Device Information.”</p>

                <p>When we talk about “Personal Information” in this Privacy Policy, we are talking both about Device Information and Order Information.</p>

                <h5>&mdash; HOW DO WE USE YOUR PERSONAL INFORMATION?</h5>
                <p>We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations).  Additionally, we use this Order Information to:</p>
                <ul>
                    <li>Communicate with you</li>
                    <li>Screen our orders for potential risk or fraud; and</li>
                    <li>When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services</li>
                </ul>
                <p>We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics about how our customers browse and interact with the Site, and to assess the success of our marketing and advertising campaigns).</p>
                <h5>&mdash; SHARING YOUR PERSONAL INFORMATION</h5>
                <p>We share your Personal Information with third parties to help us use your Personal Information, as described above.  We also use Google Analytics to help us understand how our customers use the Site–you can read more about how Google uses your Personal Information.  You can also opt-out of Google Analytics.</p>
                <p>Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.</p>
                <h5>&mdash; BEHAVIORAL ADVERTISING</h5>
                <p>As described above, we use your Personal Information to provide you with targeted advertisements or marketing communications we believe may be of interest to you.  For more information about how targeted advertising works, you can visit the Network Advertising Initiative’s (“NAI”) educational page</p>
                <p>You can opt out of targeted advertising from:</p>
                <ul>
                    <li>FACEBOOK</li>
                    <li>GOOGLE</li>
                    <li>BING</li>
                </ul>
                <p>Additionally, you can opt out of some of these services by visiting the Digital Advertising Alliance’s opt-out portal.</p>
                <h5>&mdash; DO NOT TRACK</h5>
                <p>Please note that we do not alter our Site’s data collection and use practices when we see a Do Not Track signal from your browser.</p>
                <h5>&mdash; CHANGES</h5>
                <p>For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at info@transblue.org or by mail using the details provided below:</p>
                <p>11916 Old Owen Rd #252<br />
                    Monroe, WA 98272<br />
                    United States
                </p>
            </div>
            <Footer />
        </Fragment>
    )
}

export default Privacy;