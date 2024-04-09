import { environment } from "../../environments/environment";

export const API_URL = environment.apiUrl;

export const USERS_URL = `${API_URL}/users`;
export const USERS_ME_URL = `${USERS_URL}/me`;
export const USER_TOKEN_URL = `${USERS_URL}/token`