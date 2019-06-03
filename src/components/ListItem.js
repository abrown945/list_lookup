import React from 'react';

const ListItem = props => {
    return (
        <div className={`box ${props.selected ? 'highlight' : '' }`}  onClick={props.click}>
            {props.name}
        </div>
    )
}

export default ListItem;