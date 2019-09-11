// const Event = require('../../server/collections/events');
// // const mongoose = require('mongoose');

// const Geocodio = require('geocodio');
// const { GEOCODIO_API_KEY } = process.env;

// const geoConfig = {
//     api_key: GEOCODIO_API_KEY
// }
// const geocodio = new Geocodio(geoConfig);

// module.exports = {
//     //unit test functions (only 1 should be used in one unit test)


//     // unit test example
//     // myFunction1(str, letter){
//     //     let foundIndex = str.findIndex(word => {
//     //         return letter == word.letter
//     //     })
//     //     return foundIndex
//     // }

//     // integration tests functions (1+ should be used in one integration test)
    
//         // geocodio test functions
//     getGeocodioResponse(formatted_address) {
//         geocodio.get('geocode', {q: formatted_address}, function(err, response){
//             if (err) throw err;
        
//             const resStrToJSON = JSON.parse(response);
//             return resStrToJSON
//         })
//     },

//     pullLatLngFromGeocodio(geocodioResponse) {
//         const location = geocodioResponse.results[0].location
//         return location
//     },

//         //
//     deleteEvent(event_id) {
//         Event.findByIdAndDelete({_id: event_id})
//             .then(response => {
//                 return response._id
//             })
//     },

    
// }