// import React from 'react'
// import './UserEventsForm.scss';
// // import axios from 'axios';

// class UserEventsForm extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = this.initialState();
//         this.handlePlaceSelect = this.handlePlaceSelect.bind(this)
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.autocomplete = null;
//     }

//     componentDidMount() {
//         this.autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'), {})

//         this.autocomplete.addListener("place_changed", this.handlePlaceSelect)
//     }

//     initialState() {
//         return {
//             eventName: '',
//             eventDate: '',
//             description: '',
//             address: {
//                 street: '',
//                 city: '',
//                 state: '',
//                 zip: ''
//             },
//             rsvpCount: 0,
//             category: '',
//             googleMapLink: ''
//         } 
//     }


//     handleChange(e) {
//         this.setState({
//             [e.target.name]: e.target.value
//         });
//     }
//     handleSubmit(e) {
//         e.preventDefault()
//             const data = { 
//                 eventName: this.state.eventName, 
//                 eventDate: this.state.eventDate, 
//                 description: this.state.description, 
//                 address: this.state.address, 
//                 rsvpCount: this.state.rsvpCount, 
//                 category: this.state.category 
//             }
//             this.setState({ eventName: '', 
//                             eventDate: '', 
//                             description: '', 
//                             address: {
//                                 street: '', 
//                                 city: '', 
//                                 state: '', 
//                                 zip: ''
//                             }, 
//                             rsvpCount: '',
//                             category: '' });
//             this.props.onSubmit(data);
//             this.clearForm();
//         }

//     handlePlaceSelect() {
//         let address_components = this.autocomplete.getPlace()
//         this.setState({
//             address: {
//                 street: `${address[0].long_name} ${address[1].long_name}`,
//                 city: address[4].long_name,
//                 state: address[6].short_name,
//                 zip_code: address[8].short_name,
//                 googleMapLink: address.url
//             }
//         })
//     }

//     render() {
//         return (
//             <div className="event-card-form">
//                 <section id="Create Event">
//                     <div className="container event-container">
//                         <div className="row">
//                             <div className="col-md-6 event-form">
//                                 <div className="logo">
//                                     <i className="fas fa-paper-plane"></i>
//                                 </div>
//                                 <h3>Create Event</h3>
//                                 <div className="form-group">
//                                     <input type="text" className="form-control" placeholder="Event Name" onChange={(e) => this.handleChange('eventName', e.target.value)} value={this.state.eventName} />
//                                 </div>
//                                 <div className="form-group">
//                                     <input type="text" className="form-control" placeholder="Event Date" onChange={(e) => this.handleChange('eventDate', e.target.value)} value={this.state.eventDate} />
//                                 </div>
//                                 <div className="form-group">
//                                     <input type="text" className="form-control" placeholder="Description" onChange={(e) => this.handleChange('description', e.target.value)} value={this.state.description} />
//                                 </div>
//                                 <div className="form-group">
//                                 <h6>Search Address:</h6>
//                                     <input id="Autocomplete" className="form-control" ref="input" type="text" />
//                                     <input
//                                         name={"Street"}
//                                         value={this.state.address.street}
//                                         placeholder={"Street"}
//                                         onChange={this.handleChange}
//                                     />
//                                     <input
//                                         name={"City"}
//                                         value={this.state.address.city}
//                                         placeholder={"City"}
//                                         onChange={this.handleChange}
//                                     />
//                                     <input
//                                         name={"State"}
//                                         value={this.state.address.state}
//                                         placeholder={"State"}
//                                         onChange={this.handleChange}
//                                     />
//                                     <input
//                                         name={"Zip-Code"}
//                                         value={this.state.address.zip}
//                                         placeholder={"Zip-Code"}
//                                         onChange={this.handleChange}
//                                     />
//                                 </div>
//                                 <div className="form-group">
//                                     <input type="number" className="form-control" placeholder="0" onChange={(e) => this.universalChangeHandler('rsvpCount', e.target.value)} value={this.state.rsvpCount} />
//                                 </div>
//                                 <div className="form-group">
//                                     <input type="text" className="form-control" placeholder="Select Category" onChange={(e) => this.universalChangeHandler('category', e.target.value)} value={this.state.category} />
//                                 </div>
//                                 <div className="form-group">
//                                     <input type="submit" className="btnSubmit" onClick={() => this.createEvent()} value="Submit" />
//                                 </div>
//                             </div>
//                         </div >
//                     </div >
//                 </section >
//             </div >
//         );
//     }
// }

// export default UserEventsForm;