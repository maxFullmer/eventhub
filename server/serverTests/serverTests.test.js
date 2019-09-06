const serverTests = require('./serverTests');

// unit tests
describe('functions', () => {
    describe('function1', () => {
        it('should return some/this value', () => {
            const str = 'blah';
            const num = 2;
            expect(serverTests.function1(str, num)).toBe();
        })
    })
})

// integraton aka E2E tests
describe('Integration aka E2E tests', () => {
    //geocodio API test
    describe('Get Lat Lng From Address', () => {
        describe('get Geocodio response', () => {
            it('should take an address and get a response back from geocodio', () => {
                const formatted_address = '1109 N Highland St, Arlington VA';
                expect(serverTests.getGeocodioResponse(formatted_address)).toEqual({
                    "input": {
                      "address_components": {
                        "number": "1109",
                        "predirectional": "N",
                        "street": "Highland",
                        "suffix": "St",
                        "formatted_street": "N Highland St",
                        "city": "Arlington",
                        "state": "VA",
                        "zip": "22201",
                        "country": "US"
                      },
                      "formatted_address": "1109 N Highland St, Arlington, VA 22201"
                    },
                    "results": [
                      {
                        "address_components": {
                          "number": "1109",
                          "predirectional": "N",
                          "street": "Highland",
                          "suffix": "St",
                          "formatted_street": "N Highland St",
                          "city": "Arlington",
                          "county": "Arlington County",
                          "state": "VA",
                          "zip": "22201",
                          "country": "US"
                        },
                        "formatted_address": "1109 N Highland St, Arlington, VA 22201",
                        "location": {
                          "lat": 38.886665,
                          "lng": -77.094733
                        },
                        "accuracy": 1,
                        "accuracy_type": "rooftop",
                        "source": "Virginia GIS Clearinghouse"
                      }
                    ]
                  })
            })
        })
        
        describe('pull the lat and lng off of Geocodio Response', () => {
            it('should return an object containing lat, lng', () => {
                const geocodioResponse = {
                    "input": {
                      "address_components": {
                        "number": "1109",
                        "predirectional": "N",
                        "street": "Highland",
                        "suffix": "St",
                        "formatted_street": "N Highland St",
                        "city": "Arlington",
                        "state": "VA",
                        "zip": "22201",
                        "country": "US"
                      },
                      "formatted_address": "1109 N Highland St, Arlington, VA 22201"
                    },
                    "results": [
                      {
                        "address_components": {
                          "number": "1109",
                          "predirectional": "N",
                          "street": "Highland",
                          "suffix": "St",
                          "formatted_street": "N Highland St",
                          "city": "Arlington",
                          "county": "Arlington County",
                          "state": "VA",
                          "zip": "22201",
                          "country": "US"
                        },
                        "formatted_address": "1109 N Highland St, Arlington, VA 22201",
                        "location": {
                          "lat": 38.886665,
                          "lng": -77.094733
                        },
                        "accuracy": 1,
                        "accuracy_type": "rooftop",
                        "source": "Virginia GIS Clearinghouse"
                      }
                    ]
                  }

                  expect(serverTests.pullLatLngFromGeocodio(geocodioResponse)).toEqual({
                    "lat": 38.886665,
                    "lng": -77.094733
                  })
            })
        })
    })

    // cancel event MongoDB test
    describe('Cancel Event', () => {
        describe('functionForIntegrationTestA', () => {
            it('should delete', () => {
                const event_id = ""
                expect(serverTests.deleteEvent(event_id)).toEqual(event_id)
            })
        })
    })
})