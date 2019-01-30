import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {spans: 0 };

        this.imageRef = React.createRef();
        
    }

    componentDidMount(){
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        console.log('here')
        console.log(this.imageRef)
        const height = this.imageRef.current.clientHeight;
        //Math.ceil will cap its value
        const spans  = Math.ceil(height / 10);
        this.setState({ spans });
    }

    render () {
        const { description, urls } = this.props.image;
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img ref={this.imageRef} alt={description} src={require(`../../assets/img/portfolio/thumbnails/${urls.regular}.gif`)} />
            </div>
        );
    }
}

export default ImageCard;
