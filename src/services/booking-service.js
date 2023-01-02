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

            const response =await axios.get(getFlighRequestURL);

            const flightData = response.data.data;
            let priceOfFlight = flightData.price;

            if(data.noOfSeats> flightData.totalSeats){
                throw new ServiceError('Something went wrong in the booking process', 'insufficient seats in the flight');
            }

            const totalCost = data.noOfSeats*priceOfFlight;
            const bookingPayload = {...data, totalCost};
            const booking = await this.bookingRepository.create(bookingPayload);
            console.log(booking);
            const updateFlightRequestURL = `${Flight_Service_Path}/api/v1/flight/${booking.flightId}`
            console.log(updateFlightRequestURL);
           
            await axios.patch(updateFlightRequestURL, {totalSeats: flightData.totalSeats - booking.noOfSeats});
            const finalBooking =await this.bookingRepository.update(booking.id, {status: "booked"})
     
            return finalBooking;
        } catch (error) {
            console.log(error);
            if(error.name=='RepositoryError' || error.name=='validationError'){
                throw error;
            }
            throw new ServiceError();
        }
    }
}

module.exports = BookingService