import axios from "axios";
import { discogsRequestToken } from "./personalToken";

const resultsPerPage = 30;

export const username = "bartlomiejwilczek";

export const api = axios.create({
  baseURL: `https://api.discogs.com/`,
  timeout: 10000,
  params: {
    token: discogsRequestToken,
    per_page: resultsPerPage,
  },
});

export const API_ROUTES = {
  getProfile: (username: string) => api.get(`users/${username}`),

  getCollection: (username: string, folderId?: number) =>
    api.get(`users/${username}/collection/folders/${folderId || 0}/releases`),
};
