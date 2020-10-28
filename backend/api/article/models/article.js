"use strict";
const fetch = require("cross-fetch");
/**
 * Lifecycle callbacks for the `article` model.
 */

module.exports = {
  // lifecycles: {
  //   async beforeCreate(input) {
  //     const res = await fetch(
  //       `https://api.inaturalist.org/v1/observations/${input.iNatID}`
  //     );
  //     if (res.status >= 400) {
  //       throw new Error("Bad response from iNaturalist server");
  //     }
  //     const d = await res.json();
  //     const iNatData = d.results[0];
  //     console.log(input.placeGuess);
  //     input.placeGuess = iNatData.place_guess;
  //     console.log(input.placeGuess);
  //   },
  // },
};
