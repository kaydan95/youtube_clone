import { createContext, useContext } from "react";
import Api from "../api/api";
import ApiClient from "../api/apiClient";

export const YoutubeApiContext = createContext();

const client = new ApiClient();
const api = new Api(client);

export function YoutubeApiProvider({ children }) {
  return (
    <YoutubeApiContext.Provider value={{ api }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
