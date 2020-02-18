import React, { Component } from 'react';
import './VideoPlayer.css';

class VideoPlayer extends Component {
    constructor(props) {
        super(props);
    }

    reposition() {
        const player = document.querySelector("#player");
        player.addEventListener("seeked", function(event) {
            console.log(player.currentTime);
        })
    }

    render() {
        const moviename = this.props.moviename;
        const url = `http://localhost:5000/video/${moviename}`

        return (
            <div className="video-player-container">
                <video id="player" className="video-player" controls preload="metadata" >
                    <source src={url} type="video/mp4" />
                </video>
            </div>
        )
    }
}

export default VideoPlayer;