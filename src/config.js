import dotenv from "dotenv";
dotenv.config();

let config = {};

config.api_url = "https://iasuat.fisglobal.com/cardholderservice/";
// config.api_url = "http://164.52.208.209:9094/cardholderservice/";
config.graphql = process.env.REACT_APP_GQL_ENDPOINT;
config.socket = process.env.REACT_APP_SOCKET;

export default config;
