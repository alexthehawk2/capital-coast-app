import getAPI from "@/components/utilities/helpers/getApi";

export default async function getAccountDetailsHandler(req, res) {
  const userId = JSON.parse(req.cookies.user).id;
  const response = await getAPI(
    `https://capital-coast-server.onrender.com/api/accounts?get-account-details=${userId}`
  );
  res.status(200).json({ response });
}
