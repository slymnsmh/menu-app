import { Component } from "react";

export default class EkstraIngredients extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {};

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
              width: "100%",
            }}
          >
            <span>{this.props.name}</span>
          </div>
          <div
            className="flexRow priceLabel-S"
            style={{
              color: "white",
              wordBreak: "break-word",
              overflow: "clip",
              paddingBottom: "1%",
              justifyContent: "flex-end",
            }}
          >
            <span>{this.props.price + "₺"}</span>
          </div>
        </div>
      </div>
    );
  }
}
