import React, { Component } from 'react'
import TodoItem from './TodoItem';


export default class TodoList extends Component {
    
    render() {
        const {items,handleClear,handleDelete,handleEdit} = this.props;
        return (
            <div>
                <ul className="list-group my-5">
                    <h3 className="text-capitalize text-center">
                        Todo List
                    </h3>
                    {
                        items.map((item)=> {
                            return (
                                <TodoItem key={item.id} itemValue={item.item}
                                          handleDelete={() => {
                                            console.log(item.id);
                                            handleDelete(item.id)}}
                                          handleEdit={() => handleEdit(item)}
                                ></TodoItem>
                            ) 
                        })
                    }
                    <button type="button" className="text-capitalize text-center btn btn-danger btn-block mt-5"
                            onClick={handleClear}
                    >Clear List</button>
                </ul>
                
            </div>
        )
    }
}
