import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { span: 0 };
    this.imageRef = React.createRef();
  }
  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setheight);
  }
  setheight = () => {
    const height = this.imageRef.current.clientHeight;
    const spanheight = Math.ceil(height / 10);
    console.log(spanheight);
    this.setState({ span: spanheight });
  };
  render() {
    const { description, urls } = this.props.images;
    return (
      <div style={{ gridRowEnd: `span ${this.state.span}` }}>
        <img ref={this.imageRef} src={urls.regular} alt={description} />
      </div>
    );
  }
}
export default ImageCard;
