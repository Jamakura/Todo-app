import React from 'react'

class TodoForm extends React.Component {
    constructor() {
        super()
        this.state = {
            todo: "",
        }
    }
 
    const handleClick = (e) => {
        e.preventDefault();
        console.log('sv: Todo.js, handleClick: button was clicked')
    }
    // will need a handleChange
    //will need a handleSubmit
    render() {
        return (
            //will need a form
            //will need a button
            <form>
                <label>
                    <input type="text" name="todo" placeholder="Enter new Todo Here" />
                </label>
                <input type="submit" value="Submit" onClick={handleClick} />
            </form>
        )
    }

}

export default TodoForm