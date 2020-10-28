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
      const iNatResponse = d.results[0];

      console.log(iNatResponse);

      // hold all the iNatData in one json
      let iNatData = {};

      // TODO: Create checks for these
      iNatData.placeGuess = iNatResponse.place_guess;
      iNatData.dateTaken = iNatResponse.observed_on_details.date;
      iNatData.iNatDescription = iNatResponse.description;
      iNatData.commonName = iNatResponse.species_guess;
      iNatData.latinName = iNatResponse.taxon.name;

      // waht is a taxon
      iNatData.taxonName = iNatResponse.taxon.iconic_taxon_name;
      // aves = birds filter?
      // how to get taxonomy relationship?
      // make a taxa call to iNat
      // https://api.inaturalist.org/v1/taxa/${iNatResponse.taxon.id}

      iNatData.endemic = iNatResponse.taxon.endemic;
      iNatData.threatened = iNatResponse.taxon.threatened;
      iNatData.introduced = iNatResponse.taxon.introduced;
      iNatData.native = iNatResponse.taxon.native;

      input.iNatData = iNatData;
      console.log(input.iNatData);
    },
  },
};
