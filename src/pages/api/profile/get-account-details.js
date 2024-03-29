import getAPI from "@/components/utilities/helpers/getApi";

export default async function getAccountDetailsHandler(req, res) {
  const endpoint =
    process.env.NODE_ENVIRONMENT === "production"
      ? "https://65.2.166.175"
      : "http://localhost:3001";
  const userId = JSON.parse(req.cookies.user).id;
  const response = await getAPI(
    `${endpoint}/api/accounts?get-account-details=${userId}`
  );
  res.status(200).json({ response });
}
