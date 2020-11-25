"use strict";

require("dotenv").config();

// Required environment variables
const ENV_VARS = [
    "PAGE_ID",
    "APP_ID",
    "PAGE_ACCESS_TOKEN",
    "APP_SECRET",
    "VERIFY_TOKEN",
    "APP_URL",
    "SHOP_URL"
  ];

  module.exports = {
    port: process.env.PORT || 3000,

    pageId: process.env.PAGE_ID,

    appUrl: process.env.APP_URL,

    verifyToken: process.env.VERIFY_TOKEN
  };