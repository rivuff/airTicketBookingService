const {StatusCodes} = require('http-status-codes')

const {Booking} = require('../models/index')
const {AppError, ValidationError} = require('../utils/error/index')

class BookingRepository{
    async create(data){
        try {
            const booking = await Booking.create(data);
            return booking;
        } catch (error) {
            if(error== 'sequelizeValidationError'){
                throw new ValidationError(error)
            }
            throw new AppError(
                'RepositoryError',
                'Cannot create booking',
                'There was some issue createing the booking, please try after some time',
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    }
}

module.exports = BookingRepository