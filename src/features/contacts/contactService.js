import axios from "axios";
import { base_url } from "../../utils/axiosConfig";

const postQuery = async (contactData) => {
  const response = await axios.post(`${base_url}contact`, {contactData});
  if (response.data) {
    return response.data;
  }
};

export const contactService = { postQuery };
