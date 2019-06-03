import React from 'react';

const ListOutput = props => {
    return (
        <div>            
            <article className="message is-primary">
                <div className="message-header">
                    {props.name}
                </div>
                <div className="message-body">
                    <p> Birthday: {props.birthday} </p>
                    <p> Occupation: {props.occupation} </p>
                </div>
            </article>
        </div>
    );
}

export default ListOutput;