import axios from "axios";
import envConfig from "../../env-config";
import { generateHmacSignature } from "./misc";

const axiosClient = axios.create({
  //   baseURL:envConfig().,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use(async (config) => {
  if (
    config.method === "post" ||
    config.method === "put" ||
    config.method === "patch"
  ) {
    const timestamp = Date.now().toString();

    const body = JSON.stringify(config.data || {});
    const signature = generateHmacSignature(
      body + timestamp,
      envConfig().hmacSecretKey
    );

    config.headers["x-signature"] = signature;
    config.headers["x-timestamp"] = timestamp;
  }

  return config;
});

export default axiosClient;
