// domain/.netlify/functions/02-basic-api
require("dotenv").config();


exports.handler = async () => {
  try {
    const url = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_ID}`;
    const headers = {
      "Authorization": `Bearer ${process.env.AIRTABLE_PERSONAL_TOKEN}`
    }
    const response = await fetch(url, { headers });
    if (response.ok) {
      const {  records  } = await response.json();
      const products = records.map(product=> {
        const { id, fields } = product;
        return { id, ...fields }
      });
      return {
        headers: {
          "Access-Control-Allow-Origin": "*"
        },
        statusCode: 200,
        body: JSON.stringify(products)
      }
    } else {
      const { error } = await response.json();
      throw new Error(error.message);
    }
  } catch (error) {
    return error.message;
  }

}