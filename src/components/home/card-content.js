// import React from "react";
// import "../../styles/home/content.css";
// import check from "../../assets/add.png"

// class CardMenu extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             id: props.id,
//             name: props.nama_produk,
//             price: props.harga_produk,
//             image: props.gambar_produk,
//             quantity: props.qty,
//             checked: props.checked,
//         };
//         this.updateCard = this.updateCard.bind(this);
//         this.toggleChecked = this.toggleChecked.bind(this);
//     }

//     toggleChecked = () => {
//         this.setState(
//             {
//                 quantity: 0,
//                 checked: !this.state.checked,
//             },
//             this.updateCard
//         );
//     };

//     componentDidUpdate(prevProps) {
//         if (prevProps.checked !== this.props.checked) {
//             this.setState({ checked: this.props.checked });
//         }
//     }

//     updateCard() {
//         this.props.handleCardChange(this.state);
//     }
//     render() {
//         if (this.state.checked) {
//             return (
//               <div
//                 key={this.state.id}
//                 className="content-item"
//                 onClick={this.toggleChecked}
//               >
//                 <div className="content-image">
//                   <img src={this.state.image_path} alt="" />
//                   <div className="checked-item">
//                     <img src={check} alt="" />
//                   </div>
//                 </div>
//                 <div className="content-text">
//                   <h5>{this.state.name}</h5>
//                   <p>{`Rp. ${this.state.price}`}</p>
//                 </div>
//               </div>
//             );
//           } else {
//             return (
//               <div
//                 key={this.state.id}
//                 className="content-item"
//                 onClick={this.toggleChecked}
//               >
//                 <div className="content-image">
//                   <img src={this.state.image_path} alt="" />
//                 </div>
//                 <div className="content-text">
//                   <h5>{this.state.name}</h5>
//                   <p>{`Rp. ${this.state.price}`}</p>
//                 </div>
//               </div>
//             );
//           }
//         }
// }
// export default CardMenu