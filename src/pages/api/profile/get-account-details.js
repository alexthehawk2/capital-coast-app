import getAPI from "@/components/utilities/helpers/getApi";

export default async function getAccountDetailsHandler(req, res) {
  const userId = JSON.parse(req.cookies.user).id;
  const response = await getAPI(
    `http://localhost:3001/api/accounts?get-account-details=${userId}`
  );
  res.json({ response, status: 1 });
}
