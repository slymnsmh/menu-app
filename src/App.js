import { Component } from "react";
import "./App.css";
import Menu from "./Components/menu";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sizes: [
        {
          pizza: [
            { id: 1, name: "Küçük" },
            { id: 2, name: "Orta" },
            { id: 3, name: "Büyük" },
          ],
          beverage: [
            { id: 1, name: "200 ML" },
            { id: 2, name: "285 ML" },
            { id: 3, name: "330 ML" },
            { id: 4, name: "500 ML" },
            { id: 5, name: "1 LT" },
          ],
          sauce: [{ id: 1, name: "9 GR" }],
          ekstra: [
            { id: 1, name: "100 GR" },
            { id: 2, name: "200 GR" },
            { id: 3, name: "250 GR" },
            { id: 4, name: "300 GR" },
          ],
        },
      ],
      content: [
        { id: 1, name: "Taze Sos" },
        { id: 2, name: "Mozarella" },
        { id: 3, name: "Çeri Domates" },
        { id: 4, name: "Sucuk" },
        { id: 5, name: "Salam" },
        { id: 6, name: "Sosis" },
        { id: 7, name: "Mantar" },
        { id: 8, name: "Kırmızı Biber" },
        { id: 9, name: "Yeşil Biber" },
        { id: 10, name: "Yeşil Zeytin" },
        { id: 11, name: "Siyah Zeytin" },
        { id: 12, name: "Mısır" },
        { id: 13, name: "Ricotta" },
        { id: 14, name: "Parmesan" },
        { id: 15, name: "Cheddar" },
        { id: 16, name: "Tavuk Göğsü" },
        { id: 17, name: "Kırmızı Soğan" },
        { id: 18, name: "Ton Balığı" },
        { id: 19, name: "Soğan" },
        { id: 20, name: "Kabak" },
        { id: 21, name: "Patlıcan" },
        { id: 22, name: "Zeytin" },
        { id: 23, name: "Köz Biber" },
        { id: 24, name: "Jambon" },
        { id: 25, name: "Ananas" },
        { id: 26, name: "Jalapeno" },
        {
          id: 27,
          name: "İç Harç (Dana Kıyma, Kırmızı Biber, Zeytin, Baharatlar, Soğan, Mantar)",
        },
        { id: 28, name: "Domates" },
      ],
      menu: [
        {
          pizza: [
            {
              name: "Margarita Pizza",
              sizes: "2-3",
              content: "1-2-3",
              price: "85-110",
            },
            {
              name: "Mars Pizza",
              sizes: "2-3",
              content: "1-2-4-5-6-7-8-9-10-11-12",
              price: "95-110",
            },
            {
              name: "4 Peynir Pizza",
              sizes: "2-3",
              content: "1-2-13-14-15",
              price: "105-125",
            },
            {
              name: "Chicken Pizza",
              sizes: "2-3",
              content: "1-16-17-12",
              price: "95-110",
            },
            {
              name: "Marston Pizza",
              sizes: "2-3",
              content: "1-18-19-12",
              price: "95-110",
            },
            {
              name: "Vejeteryan Pizza",
              sizes: "2-3",
              content: "1-20-21-12-7-22-23",
              price: "95-110",
            },
            {
              name: "Hawaiian Pizza",
              sizes: "2-3",
              content: "1-24-25",
              price: "90-110",
            },
            {
              name: "Hot Martian Pizza",
              sizes: "2-3",
              content: "1-4-7-22-26",
              price: "85-110",
            },
            {
              name: "Stramboli (Kıymalı)",
              sizes: "2-3",
              content: "2-27",
              price: "65-70",
            },
            {
              name: "Stramboli (Tavuklu)",
              sizes: "2-3",
              content: "2-16-7-28",
              price: "65-70",
            },
          ],
          sauce: [
            { id: 1, name: "Ketçap", sizes: "1", price: 2 },
            { id: 2, name: "Mayonez", sizes: "1", price: 2 },
          ],
          beverage: [
            { id: 1, name: "Coca Cola", size: "3-5", price: "18-23" },
            { id: 1, name: "Coca Cola Zero", size: "3-5", price: "18-23" },
            { id: 1, name: "Fanta", size: "3-5", price: "18-23" },
            { id: 1, name: "Sprite", size: "3-5", price: "18-23" },
            { id: 1, name: "Cappy Vişne", size: "3-5", price: "18-23" },
            { id: 1, name: "Cappy Portakal", size: "3-5", price: "18-23" },
            { id: 1, name: "Cappy Şeftali", size: "3-5", price: "18-23" },
            { id: 1, name: "Cappy Kayısı", size: "3-5", price: "18-23" },
            { id: 1, name: "Cappy Atom", size: "3-5", price: "18-23" },
            { id: 1, name: "Soda (Sade)", size: "1", price: "8" },
            { id: 1, name: "Soda (Karpuzlu)", size: "1", price: "8" },
            { id: 1, name: "Soda (Çilekli)", size: "1", price: "8" },
            { id: 1, name: "Soda (Limonlu)", size: "1", price: "10" },
            { id: 1, name: "Su", size: "3-4", price: "5-7" },
            { id: 1, name: "Ayran", size: "2", price: "9" },
          ],
          ekstra: [
            { id: 1, name: "Patates (Porsiyon)", size: "1", price: "20" },
            { id: 2, name: "Patates (Büyük Porsiyon)", size: "2", price: "30" },
          ],
          sweets: [
            { id: 1, name: "Krater", size: "3", price: "20" },
            { id: 2, name: "Sufle", size: "3", price: "20" },
          ],
          ekstraIngredients: [
            { id: 1, name: "Mısır", price: 6 },
            { id: 2, name: "Domates", price: 4 },
            { id: 3, name: "Biber", price: 3 },
            { id: 4, name: "Mantar", price: 4 },
            { id: 5, name: "Sucuk", price: 5 },
            { id: 6, name: "Şerit Sosis", price: 5 },
            { id: 7, name: "Soğan Parçaları", price: 5 },
            { id: 8, name: "Salam", price: 4 },
            { id: 8, name: "Sosis", price: 4 },
          ],
        },
      ],
    };
  }
  render() {
    return (
      <div className="mainContainer">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            height: "10%",
          }}
        >
          <div
            style={{
              flex: 1,
            }}
          >
            <img
              alt="logo"
              src={require("./Assets/logo.png")}
              className="App-logo"
            />
          </div>
          <div
            style={{
              flex: 2,
              textAlign: "center",
            }}
          >
            <span
              style={{
                width: "100%",
                fontSize: "7vmin",
                fontWeight: "bold",
                color: "white",
              }}
            >
              MENÜ
            </span>
          </div>
          <div
            style={{
              flex: 1,
            }}
          ></div>
        </div>
        <div style={{ height: "2%" }}></div>
        <div className="listContainer" name="pizzas">
          <div
            style={{
              height: "5vh",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              paddingLeft: "2%",
              backgroundColor: "rgb(235, 57, 23)",
            }}
          >
            <span className="categoryHeader" style={{ color: "white" }}>
              {"Pizzalar"}
            </span>
          </div>
          {this.state.menu[0].pizza.map((item, index) => (
            <Menu
              key={index}
              name={item.name}
              price={item.price}
              content={item.content}
              sizes={item.sizes}
              sizesList={this.state.sizes}
              contentList={this.state.content}
            />
          ))}
          {/* <div
            style={{
              height: "5vh",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              paddingLeft: "2%",
              backgroundColor: "rgb(235, 57, 23)",
            }}
          >
            <span className="categoryHeader" style={{ color: "white" }}>
              {"İçecekler"}
            </span>
          </div>
          {this.state.menu[0].sauce.map((item, index) => (
            <Menu
              key={index}
              name={item.name}
              price={item.price}
              content={item.content}
              sizes={item.sizes}
              sizesList={this.state.sizes}
              contentList={this.state.content}
            />
          ))} */}
          <div
            style={{
              height: "5vh",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              paddingLeft: "2%",
              backgroundColor: "rgb(235, 57, 23)",
            }}
          >
            <span className="categoryHeader" style={{ color: "white" }}>
              {"Soslar"}
            </span>
          </div>
          {this.state.menu[0].sauce.map((item, index) => (
            <Menu
              key={index}
              name={item.name}
              price={item.price}
              content={item.content}
              sizes={item.sizes}
              sizesList={this.state.sizes}
              contentList={this.state.content}
            />
          ))}
        </div>
      </div>
    );
  }
}
