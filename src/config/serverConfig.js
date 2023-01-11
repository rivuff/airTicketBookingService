const dotenv = require('dotenv')

dotenv.config();

module.exports={
    PORT : process.env.PORT,
    Flight_Service_Path: process.env.Flight_Service_Path,
    EXCHANGE_NAME:process.env.EXCHANGE_NAME,
    REMINDER_BINDING_KEY:process.env.REMINDER_BINDING_KEY,
    MESSAGE_BROKER_URL: process.env.MESSAGE_BROKER_URL
}