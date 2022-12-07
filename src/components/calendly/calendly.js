import React from 'react';

function Calendly() {

    return (
        <div className='fixed-bottom' style={{textAlign: 'right'}}>
            <iframe
                id="xxx"
                title="xxx"
                width="xxx"
                height="xxx"
                frameBorder="value"
                allowTransparency
                srcDoc={`
                    <!doctype html>
                    <html>
                    <head>
                        <title>Chat bot</title>
                        <meta charset="utf-8">
                        <meta name="viewport" content="width=device-width">
                    </head>
                    <body style="width:100%">
                    <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
                    <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
                    <script type="text/javascript">window.onload = function() { Calendly.initBadgeWidget({ url: 'https://calendly.com/carters-6/60min', text: 'Book an Appointment', color: '#ed6a22', textColor: '#ffffff', branding: true }) }</script>
                    </body>
                    </html>
                    `}
            />
        </div>
    )
}
export default Calendly;