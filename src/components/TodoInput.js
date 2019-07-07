import React, { Component } from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from '@fortawesome/free-solid-svg-icons'

export default class TodoInput extends Component {

    render() {
        const { item, handleChange, handleSubmit,editItems} = this.props;
        return (
            <div>
                <h3 className="text-capitalize text-center"> Todo List</h3>
                <div className="card card-body my-3">
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text bg-primary text-white">
                                    <FontAwesomeIcon icon={faBook} />
                                </div>
                                <div>
                                    <input type="text" className="form-control text-capitalize"
                                        placeholder="add a todo item"
                                        value={item}
                                        onChange={handleChange}
                                    />
                                </div>

                            </div>
                        </div>
                        {editItems===false?
                        <button type="submit" className="btn btn-block btn-primary mt-3"> Add Item</button>
                        :<button type="submit" className="btn btn-block btn-success mt-3"> Edit Item</button>
                        }
                    </form>
                </div>
            </div>
        )
    }
}
