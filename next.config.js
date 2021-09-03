const nextTranslate = require("next-translate");

//module.exports = nextTranslate();
module.exports = {
  ...nextTranslate(),
  images: {
    domains: ["i.pravatar.cc", "fakestoreapi.com"],
  },
};
