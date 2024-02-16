// domain/.netlify/functions/02-basic-api
require("dotenv").config();


exports.handler = async () => {
  try {
    const url = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Products;`
    const headers = {
      "Authorization": `Bearer ${process.env.AIRTABLE_PERSONAL_TOKEN}`
    }
    const response = await fetch(url, { headers });
    if (response.ok) {
      const data = await response.json();
      return {
        headers: {
          "Access-Control-Allow-Origin": "*"
        },
        statusCode: 200,
        body: JSON.stringify(data)
      }
    }
  } catch (error) {
    return "An error occurred while fetching the data."
  }

}