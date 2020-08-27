import React, { Component } from 'react';
import { connect } from 'react-redux'
import { postEvent } from "../actions"
import { Field,reduxForm, values } from 'redux-form'
import { Link } from 'react-router-dom'

class EventsNew extends Component {
    constructor(props){
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
    }
    renderField(field){
        const { input, label, type, meta:{ touched,error } } = field

        return (
            <div>
                <input {...input} placeholder={label} type={type}/>
                { touched && error && <span>{error}</span> }
            </div>
        )
    }

    async onSubmit(values){
        await this.props.postEvent(values)
        this.props.history.push('/')
    }

    render() {
        const { handleSubmit } = this.props
        return (
            <form onSubmit={ handleSubmit(this.onSubmit) }>
                <div>
                    <Field type="text" label="Title" name="title" component={this.renderField}/>
                </div>
                <div>
                    <Field type="text" label="Body" name="body" component={this.renderField}/>
                </div>
                <div>
                    <input type="submit" value="Submit" disabled={false}/>
                    <Link to="/">Cancel</Link>
                </div>
            </form>
        )
    }
}

const validate = values => {
    const errors = {}

    if (!values.title) errors.title = "Enter a title, please."
    if (!values.body) errors.body = "Enter a title, please."

    return errors
}

const mapDispatchToProps = ({ postEvent })

export default connect(null, mapDispatchToProps)(
    reduxForm({ validate,form: 'eventNewForm' })(EventsNew)
);