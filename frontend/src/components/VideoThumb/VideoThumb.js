import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import './VideoThumb.css';
import Container from '../Container/Container';

class VideoThumb extends Component {
    constructor(props) {
        super(props);
    }

    onClickHandler(event) {
        const moviename = event.target.getAttribute("data-moviename");

        ReactDOM.render(
            <Container>
                <VideoPlayer moviename={moviename} />
            </Container>,
            document.getElementById("root")
        )
    }

    renderThumbs() {
        let result = [];

        for (let index = 0; index < 12; index++) {
            result.push(
                <div
                    key={index}
                    className="item"
                >
                    <div className="cursor-pointer item-wrapper-column" onClick={this.onClickHandler}>
                        <img src="https://vignette.wikia.nocookie.net/southparkarchives/images/f/f6/Tumblr_inline_mv5qf7XvIx1qfo293.png/revision/latest/scale-to-width-down/300?cb=20140316194422&path-prefix=pt-br" data-moviename="sample.mp4" />
                        <span className="video-thumb-span" data-moviename="sample.mp4">{`Texto ${index + 1}`}</span>
                    </div>
                </div>
            );
        }

        return result;
    }

    render() {
        return (
            <div className="video-thumb-container">
                {this.renderThumbs()}
            </div>
        )
    }
}

export default VideoThumb;