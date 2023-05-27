
const { default: axios } = require("axios");

export default axios.create({
  baseURL:
    // "http://rentforhouse-env.eba-sypmxta3.ap-southeast-1.elasticbeanstalk.com",
    "http://localhost:5000",
});
export const baseURL =
  // "http://rentforhouse-env.eba-sypmxta3.ap-southeast-1.elasticbeanstalk.com";
  "http://localhost:5000";


