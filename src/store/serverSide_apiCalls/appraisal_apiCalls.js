import axios from "axios";
import { base_api_domain } from "./base_domain";

const { base_domain_route } = base_api_domain;

const get_subteams = async () => {
  const response = await axios.get(
    `${base_domain_route}/account/get-all-subteams/`
  );
  return response;
};

// // register api call to the server
// const user_register = (payload) => {
//   const response = axios.post(`${base_domain_route}/register/`, payload);
//   return response;
// };

export { get_subteams };
