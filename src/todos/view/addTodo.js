import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../action';

export class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({
            text: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.addTodo(this.state.text);

        this.setState({
            text: ''
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input value={this.state.text} onChange={this.onChange} />    
                    <button type="submit">添加</button>
                </form>            
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => ({
    addTodo: (text) => dispatch(actions.addTodo(text))
})

export default connect(null, mapDispatchToProps)(AddTodo)
