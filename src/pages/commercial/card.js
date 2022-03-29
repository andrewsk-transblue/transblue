import React from 'react';

function Card(props) {
    let { title, body, icon } = props;
    return(
        <div className="pb-4" style={{width: '100%'}}>
            <div className="card-body">
                <i className={`${icon} fa-3x`} />
                <h4 className="card-title section-header">{title}</h4>
                {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                <p className="card-text section-p">{body}</p>
                {/* <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a> */}
            </div>
        </div>
    )
}

export default Card;