import { Component } from "react";

export default class Sauce extends Component {
  constructor(props) {
    super(props);
    this.state = {
      /* imageSrc: "", */
      sizeIds: [],
      sizeNames: [],
    };
  }

  componentDidMount = () => {
    this.getSizeNames();
  };

  getSizeNames = () => {
    let sizeNames = [];
    this.setState(
      {
        sizeIds:
          this.props.sizes && this.props.sizes.includes("-")
            ? this.props.sizes.split("-")
            : this.props.sizes,
      },
      () => {
        this.props.sizes &&
          this.props.sizes.includes("-") &&
          this.state.sizeIds.forEach((id) => {
            sizeNames.push(
              this.props.sizesList[0].pizza.find((item) => item.id == id).name
            );
          });
        this.setState({ sizeNames });
      }
    );
  };

  render() {
    return (
      <div className="menuContainer">
        <div
          className="flexRow"
          style={{
            height: "100%",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <div
            className="menuHeader"
            style={{
              boxSizing: "border-box",
              paddingBottom: "1%",
            }}
          >
            <span>{this.props.name}</span>
          </div>
          <div
            className="priceLabel-S"
            style={{
              color: "white",
              wordBreak: "break-word",
              overflow: "clip",
              paddingBottom: "1%",
            }}
          >
            <span>{this.props.price + "₺"}</span>
          </div>
        </div>
      </div>
    );
  }
}
