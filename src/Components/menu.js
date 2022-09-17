import { Component } from "react";

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      /* imageSrc: "", */
      contentIds: [],
      contentNames: [],
      sizeIds: [],
      sizeNames: [],
    };
  }

  componentDidMount = () => {
    this.props.content && this.getContentNames();
    this.getPizzaSizeNames();
  };

  getContentNames = () => {
    let contentNames = [];
    this.setState({ contentIds: this.props.content.split("-") }, () => {
      this.state.contentIds.forEach((element) => {
        contentNames.push(
          this.props.contentList.find((item) => item.id == element).name
        );
      });
      this.setState({ contentNames });
    });
  };

  getPizzaSizeNames = () => {
    let sizeNames = [];
    this.setState(
      {
        sizeIds: this.props.sizes.includes("-")
          ? this.props.sizes.split("-")
          : this.props.sizes,
      },
      () => {
        console.log(this.state.sizeIds);
        this.props.sizes.includes("-") &&
          this.state.sizeIds.forEach((id) => {
            console.log(this.props.sizesList[0].pizza);
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
        {/* <div
          className="flexColumn"
          style={{
            height: "100%",
            width: "40%",
            boxSizing: "border-box",
            paddingRight: "5%",
          }}
        >
          <img
            alt="menu1"
            src={require("../Assets/" + this.props.image)}
            className="menuImage"
          />
        </div> */}
        <div
          className={this.props.content ? "flexColumn" : "flexRow"}
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
          {this.props.content && (
            <div
              style={{
                color: "white",
                wordBreak: "break-word",
                overflow: "clip",
                paddingBottom: "1%",
              }}
            >
              <span style={{ fontWeight: "bold" }}>{"İçerik: "}</span>
              <span>
                {this.state.contentNames.map(
                  (name, index) =>
                    name +
                    (index !== this.state.contentNames.length - 1 ? ", " : "")
                )}
              </span>
            </div>
          )}
          <div
            className="flexRow alignFE"
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
                  <span>{name + " Boy: "}</span>

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
