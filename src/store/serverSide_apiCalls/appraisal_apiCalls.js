import axios from "axios";
import { base_api_domain } from "./base_domain";

const { base_domain_route } = base_api_domain;

const get_subteams = async () => {
  const response = await axios.get(
    `${base_domain_route}/account/get-all-subteams/`
  );
  return response;
};

const team_members_in_a_subteam = async (query) => {
  const response = await axios.get(`${base_domain_route}/account/get-subteam-members/?subteam_name__name=` + query)
  return response
};

const get_appraisals_api = async () => {
  const response = await axios.get(`${base_domain_route}/appraisal/appraisal/`)
  console.log(response.data, "from api call")
  return response
}


const get_user_appraisal_form = async (query) => {
  const {id, quarter} = query
  const response = await axios.get(`${base_domain_route}/appraisal/question/`, {id, quarter})
  return response
}

export { get_subteams, team_members_in_a_subteam, get_appraisals_api, get_user_appraisal_form };
