const dotenv = require('dotenv')

dotenv.config();

module.exports={
    PORT : process.env.PORT,
    Flight_Service_Path: process.env.Flight_Service_Path
}