import React, { Component } from 'react'

class UpdatePhoto extends Component {
    constructor() {
        super()
        this.handleSave = this.handleSave.bind(this)
    }
    handleSave(event){
        event.preventDefault();
        const imageLink = event.target.elements.link.value
        const description = event.target.elements.description.value
        const post = {
            id: Number(new Date()),
            description: description,
            imageLink: imageLink
        }
        if(description && imageLink){
            this.props.onUpdatePhoto(post)
        }
    }
    render() {
        return (
            <div>
                <h1>This is Update Photo Page</h1>
                <div className="form">
                    <form onSubmit={this.handleSave}>
                        <input type="text" name="link" defalutValue={this.imageLink} />
                        <input type="text"  name="description" defalutValue={this.description} />
                        <button>Save</button>
                        {this.imageLink}
                    </form>
                </div>
            </div>
        );
    }
}

export default UpdatePhoto