import React from 'react'

export default function video(props) {
    console.log(props)
    const url = props.url
    
    var videoId = url.split('v=')[1];    

    
    const videoUrl = 'https://www.youtube.com/embed/' + videoId
    return (
        <div>
            <br/>
            <div className="card-image">
    <figure className="image is-2by2">
    <iframe style={{width:'500px', height:'300px'}} src={videoUrl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
    </figure>
    </div>
        </div>
    )
}
