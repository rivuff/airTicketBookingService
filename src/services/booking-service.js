const axios = require('axios');

const { BookingRepository } = require('../repository/index');
const { Flight_Service_Path } = require('../config/serverConfig');
const { ServiceError } = require('../utils/error/index');


class BookingService{
    constructor() {
        this.bookingRepository = new BookingRepository();
    }

    async createBooking(data){
        try {
            const flightId = data.flightId
            console.log(Flight_Service_Path);
            let getFlighRequestURL = `${Flight_Service_Path}/api/v1/flight/${flightId}`;
            console.log(getFlighRequestURL);
            console.log(typeof(getFlighRequestURL));
            const flight = axios.get(getFlighRequestURL);
            return flight

        } catch (error) {
            console.log(error);
            throw new ServiceError();
        }
    }
}

module.exports = BookingService