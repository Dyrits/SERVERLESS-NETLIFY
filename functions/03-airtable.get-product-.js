// domain/.netlify/functions/02-basic-api
require("dotenv").config();


exports.handler = async (event) => {
  const { id } = event.queryStringParameters;
  try {
    const url = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_ID}/${id}`;
    const headers = {
      "Authorization": `Bearer ${process.env.AIRTABLE_PERSONAL_TOKEN}`
    }
    const response = await fetch(url, { headers });
    if (response.ok) {
      const { id, fields } = await response.json();
      const product = { id, ...fields };
      return {
        headers: {
          "Access-Control-Allow-Origin": "*"
        },
        statusCode: 200,
        body: JSON.stringify(product)
      }
    } else {
      const { error } = await response.json();
      throw new Error(error.message);
    }
  } catch (error) {
    console.error(error);
    return {
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      statusCode: 500,
      body: error.message
    }
  }
}