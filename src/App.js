import React from 'react';
import './App.css';
import { Button } from "./components/Button/Button";

const data = [
    {
        "author": "Cosmic Timetraveler\n@cosmictimetraveler\nAvatar of user Cosmic Timetraveler",
        "image": "/images/cosmic-timetraveler-LgrGHYZzBSk-unsplash.jpg",
        "description": "Costa Rica"
    },
    {
        "author": "veeterzy\n@veeterzy",
        "image": "/images/veeterzy-sMQiL_2v4vs-unsplash.jpg",
        "description": "Tree in forest of plants"
    },
    {
        "author": "Prometey Sánchez Noskov\n@soyprome",
        "image": "/images/prometey-sanchez-noskov-c6M7AoevSXE-unsplash.jpg",
        "description": "I had to record a wedding in Tomatlán, Jalisco. I was waiting for the bride to arrive. Then, there was this beautiful sunset with a perfect gradient, I seized the opportunity and took the photograph in an Instagram style."
    },
    {
        "author": "Edgar Chaparro\n@echaparro",
        "image": "/images/edgar-chaparro-nUHItnUVMds-unsplash.jpg",
        "description": "Tropical landscape. Bali island, Indonesia. Aero shot of beach."
    },
    {
        "author": "Artem Beliaikin\n@belart84",
        "image": "/images/artem-beliaikin-sVhRMCyo1_Y-unsplash.jpg",
    },
    {
        "author": "Henk van de Goor\n@hgoor",
        "image": "/images/henk-van-de-goor-b8nnppKBy4w-unsplash.jpg",
        "description": "The Dragons Eye, Southwest Upper Antelope Canyon"
    },
    {
        "author": "Harley-Davidson\nExplore the world of H-D",
        "image": "/images/harley-davidson-56R8TzG7Lzc-unsplash.jpg",
        "description": "no description"
    },
    {
        "author": "Jonas Denil\n@jonasdenil",
        "image": "/images/jonas-denil-_PKzBUfuhgg-unsplash.jpg",
        "description": "Every year we plan a trip to outskirts of Belgium with a close group of friends. We rent a cottage in the woods, cook yummy food and hike through forests to cure our hangover. This was shot on one of our hikes."
    },
];

class App extends React.PureComponent {
    state = {
        selectedImage: 0,
    };
    
    componentDidMount() {
        window.addEventListener("keydown", this.handleKeyDown);
    }
    
    handleKeyDown = (event) => {
        if (event.key === 'ArrowLeft') {
            let selectedImage = this.state.selectedImage - 1;
            if (selectedImage < 0) {
                selectedImage = data.length - 1;
            }
            this.setState({selectedImage});
        } else if (event.key === 'ArrowRight') {
            let selectedImage = this.state.selectedImage + 1;
            if (selectedImage > data.length - 1) {
                selectedImage = 0;
            }
            this.setState({selectedImage});
        }
    };
    
    handleLeftButtonClick = () => {
        let selectedImage = this.state.selectedImage - 1;
        if (selectedImage < 0) {
            // selectedImage = 0;
            selectedImage = data.length - 1;
        }
        this.setState({selectedImage});
    };
    
    handleRightButtonClick = () => {
        let selectedImage = this.state.selectedImage + 1;
        if (selectedImage > data.length - 1) {
            // selectedImage = data.length - 1;
            selectedImage = 0;
        }
        this.setState({selectedImage});
    };
    
    render() {
        return (
            <div className="App">
                <h1>Thumbnail gallery</h1>
                <div className="gallery">
                    <div className="preview-block">
                        {/* eslint-disable jsx-a11y/img-redundant-alt */}
                        <img className="preview-image" src={data[this.state.selectedImage].image}
                             alt={`Photo by ${data[this.state.selectedImage].author}`}/>
                        <div className="thumbnails-block">
                            {data.map((entry, index) => {
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
                        <div className="author">{data[this.state.selectedImage].author}</div>
                        <div className="description">{data[this.state.selectedImage].description}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
