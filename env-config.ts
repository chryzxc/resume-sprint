export default function envConfig() {
  return {
    grocApiKey: process.env.GROQ_API_KEY || "",
    hmacSecretKey: process.env.NEXT_PUBLIC_HMAC_SECRET || "",
  };
}
