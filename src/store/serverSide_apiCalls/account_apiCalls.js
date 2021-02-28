import axios from "axios";
import { base_api_domain } from "./base_domain";

const { base_domain_route } = base_api_domain;

const user_login = async (payload) => {
  const response = await axios.post(
    `${base_domain_route}/account/login/`,
    payload
  );
  return response;
};

// register api call to the server
const user_register = (payload) => {
  const response = axios.post(
    `${base_domain_route}/account/register/`,
    payload
  );
  return response;
};

export { user_login, user_register };
