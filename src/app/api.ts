import axios from "axios";
// import { discogsRequestToken } from "./personalToken";
import { v4 as uuidv4 } from "uuid";

const resultsPerPage = 30;

export const username = "bartlomiejwilczek";

export const api = axios.create({
  baseURL: `https://api.discogs.com/`,
  timeout: 10000,
  params: {
    // token: discogsRequestToken,
    per_page: resultsPerPage,
  },
});

const axiosHeaders = {
  "Content-Type": "application/x-www-form-urlencoded",
  Authorization: `OAuth oauth_consumer_key="rqkndXRSvOcLZbpsaZPY", oauth_nonce="${uuidv4()}", oauth_signature="PDupbNiwXzRyQHeqZWLtghppaSFfgsON&", oauth_signature_method="PLAINTEXT", oauth_timestamp="${Math.floor(
    Date.now() / 1000
  ).toString()}", oauth_callback="http://localhost:3000"`,
};

export const authRequestApi = axios.create({
  baseURL: `https://api.discogs.com/`,
  timeout: 10000,
  headers: { ...axiosHeaders },
});

export const API_ROUTES = {
  getRequestToken: () => authRequestApi.get("oauth/request_token"),

  getProfile: (username: string) => api.get(`users/${username}`),

  updateProfile: (username: string, data: {}) =>
    api.post(`users/${username}`, data),

  getCollection: (username: string, folderId?: number) =>
    api.get(`users/${username}/collection/folders/${folderId || 0}/releases`),
};
