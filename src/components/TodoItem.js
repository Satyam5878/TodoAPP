import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default class TodoItem extends Component {
    
    render() {
        const {itemValue,handleDelete,handleEdit} = this.props;
        return (
            <li className="list-group-item text-capitalize d-flex justify-content-between mx-2 my-2">
                <h6 className="text-capitalize"> {itemValue}</h6>
                <div>
                    <span className="mx-2 text-success">
                        <FontAwesomeIcon icon={faPen}
                                         onClick={handleEdit}
                        > </FontAwesomeIcon>
                    </span>
                    <span className="mx-2 text-danger">
                        <FontAwesomeIcon icon={faTrash}
                                         onClick={handleDelete}
                        > </FontAwesomeIcon>
                    </span>
                </div>
            </li>
        )
    }
}
