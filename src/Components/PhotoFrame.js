import React from 'react'
import Photo from './Photo'
import {Link} from 'react-router-dom'

function PhotoFrame(props) {
    return (
        <div>
            <Link className="addIcon" to="/AddPhoto"></Link>
            <div className="photoGrid">
                {props.posts
                    .sort(function(x,y){
                        return y.id - x.id
                    })
                    .map((post, index) => <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto} />)}
            </div>
        </div>
    )
}

export default PhotoFrame