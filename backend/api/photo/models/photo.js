"use strict";
const fetch = require("cross-fetch");
/**
 * Lifecycle callbacks for the `photo` model.
 */

module.exports = {
  lifecycles: {
    async beforeCreate(input) {
      const res = await fetch(
        `https://api.inaturalist.org/v1/observations/${input.iNatID}`
      );
      if (res.status >= 400) {
        throw new Error("Bad response from iNaturalist server");
      }
      const d = await res.json();
      const iNatData = d.results[0];

      console.log(iNatData);

      console.log(input.placeGuess);
      // TODO: Create these in content type
      // Maybe just make a json object type for all iNatData?
      // TODO: Create checks for these
      input.placeGuess = iNatData.place_guess;
      input.dateTaken = iNatData.observed_on_details.date;
      input.iNatDescription = iNatData.description;
      input.commonName = iNatData.species_guess;
      input.latinName = iNatData.taxon.name;

      // waht is a taxon
      input.taxon = iNatData.taxon.iconic_taxon_name;
      // how to get taxonomy relationship?

      input.endemic = iNatData.endemic;
      input.threatened = iNatData.threatened;
      input.introduced = iNatData.introduced;
      input.native = iNatData.native;

      console.log(input.placeGuess);
    },
  },
};
