import { Component } from "react";

export default class Beverage extends Component {
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
              this.props.sizesList[0].beverage.find((item) => item.id == id)
                .name
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
          className={this.state.sizeNames.length > 1 ? "flexColumn" : "flexRow"}
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
            }}
          >
            {this.state.sizeNames.length > 1 ? (
              this.state.sizeNames.map((name, index) => (
                <span className="flexRow">
                  <span>{name + ": "}</span>

                  <span>
                    {(this.props.price.includes("-")
                      ? this.props.price.split("-")[index]
                      : this.props.price) + "₺"}
                  </span>
                </span>
              ))
            ) : (
              <span>{this.props.price + "₺"}</span>
            )}
          </div>
        </div>
      </div>
    );
  }
}
