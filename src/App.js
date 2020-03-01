import React from 'react';
import './App.css';
import { Button } from "./components/Button/Button";

class App extends React.PureComponent {
    state = {
        selectedImage: 0,
        data: [],
    };
    
    componentDidMount() {
        fetch('data.json')
        .then((data) => data.json())
        .then((data) => this.setState({data}));
        
        window.addEventListener("keydown", this.handleKeyDown);
    }
    
    handleKeyDown = (event) => {
        if (event.key === 'ArrowLeft') {
            let selectedImage = this.state.selectedImage - 1;
            if (selectedImage < 0) {
                selectedImage = this.state.data.length - 1;
            }
            this.setState({selectedImage});
        } else if (event.key === 'ArrowRight') {
            let selectedImage = this.state.selectedImage + 1;
            if (selectedImage > this.state.data.length - 1) {
                selectedImage = 0;
            }
            this.setState({selectedImage});
        }
    };
    
    handleLeftButtonClick = () => {
        let selectedImage = this.state.selectedImage - 1;
        if (selectedImage < 0) {
            // selectedImage = 0;
            selectedImage = this.state.data.length - 1;
        }
        this.setState({selectedImage});
    };
    
    handleRightButtonClick = () => {
        let selectedImage = this.state.selectedImage + 1;
        if (selectedImage > this.state.data.length - 1) {
            // selectedImage = this.state.data.length - 1;
            selectedImage = 0;
        }
        this.setState({selectedImage});
    };
    
    render() {
        if (this.state.data.length === 0) {
            return null;
        }
        return (
            <div className="App">
                <h1>Thumbnail gallery</h1>
                <div className="gallery">
                    <div className="preview-block">
                        {/* eslint-disable jsx-a11y/img-redundant-alt */}
                        <img className="preview-image" src={this.state.data[this.state.selectedImage].image}
                             alt={`Photo by ${this.state.data[this.state.selectedImage].author}`}/>
                        <div className="thumbnails-block">
                            {this.state.data.map((entry, index) => {
                                return (
                                    <img
                                        className="thumbnail-item"
                                        key={`thumbnail-${entry.author}`}
                                        src={entry.image}
                                        alt={`Photo by ${entry.author}`}
                                        onClick={() => this.setState({
                                            selectedImage: index
                                        })}
                                    />
                                );
                            })}
                        </div>
                        <div className="buttons-block">
                            <Button onClick={this.handleLeftButtonClick}>Left</Button>
                            <Button onClick={this.handleRightButtonClick}>Right</Button>
                        </div>
                    </div>
                    <div className="description-block">
                        <div className="author">{this.state.data[this.state.selectedImage].author}</div>
                        <div className="description">{this.state.data[this.state.selectedImage].description}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
