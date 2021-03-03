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

// invite a user through email
const post_user_invite = async (payload) => {
  const response = await axios.post(
    `${base_domain_route}/account/send-invite/`,
    {
      email: payload,
    }
  );
  return response;
};

const password_change = async (payload, config) => {
  console.log(payload, "from api call", config);
  const { old_password, password, password2, id } = payload;
  const response = await axios.post(
    `${base_domain_route}/account/password-change/${id}/`,
    {
      old_password,
      password,
      password2,
    },
    config
  );
  return response;
};

export { user_login, user_register, post_user_invite, password_change };
