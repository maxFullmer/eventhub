import React, { Component } from 'react';
const google = window.google;

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = this.initialState();
        this.handlePlaceSelect = this.handlePlaceSelect.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.autocomplete = null;
    }

    initialState() {
        return {
            formatted_address: '',
            city: '',
            description: '',
            event_name: ''
        }
    }

    componentDidMount() {
        this.autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'), {})
        this.autocomplete.setFields(['address_components']);
        this.autocomplete.addListener("place_changed", this.handlePlaceSelect)
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handlePlaceSelect() {
        let addressObject = this.autocomplete.getPlace()
        
        let address = addressObject.address_components;
        let locality = address.filter(element => {
            return element.types.includes("locality")
        })[0].long_name;

        console.log("autocomplete after selecting address: ", this.autocomplete);
        let selectedAddress = this.autocomplete.gm_accessors_.place.Rc.i;


        this.setState({
            formatted_address: selectedAddress,
            city: locality
        })
    }

    render() {
        console.log('city: ', this.state.city);
        console.log('formatted_address: ', this.state.formatted_address);

        return (
            <div className="form-group">
                <h6>Search Address:</h6>
                <form onSubmit={this.handleSubmit}>
                    <input id="autocomplete" className="form-control" ref="input" type="text" />
                </form>
            </div>
        );
    }
}
export default Search;