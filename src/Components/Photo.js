import React from 'react'
import {Link} from 'react-router-dom'

function Photo(props) {
    const post = props.post
    return (
            
        <figure className="figure">
            <img className="photo" src={post.imageLink} alt={post.description} />
            <figcaption><p>{post.description}</p></figcaption>
            <div className="button-container">
                <button style={{marginRight:'10px'}} onClick={()=>{
                    props.onRemovePhoto(post)
                }}>Remove</button>
                <Link className="" to="/UpdatePhoto"><button style={{paddingLeft:'25px', paddingRight:'25px'}}>Update</button></Link>
                {/* <button onClick={() => {
                    props.onUpdatePhoto(post)
                }}>Update</button> */}
            </div>
        </figure>
    
)
}

export default Photo