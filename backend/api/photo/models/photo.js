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
        throw new Error("Bad response from iNaturalist observations server");
      }
      const d = await res.json();
      const iNatResponse = d.results[0];

      // hold all the iNatData in one json
      let iNatData = {};

      // TODO: Create checks for these
      iNatData.commonName = iNatResponse.species_guess; //required
      iNatData.placeGuess = iNatResponse.place_guess; // required
      iNatData.dateTaken = iNatResponse.observed_on_details.date; // required
      iNatData.latinName = iNatResponse.taxon.name; //required

      iNatData.qualityGrade = iNatResponse.quality_grade;
      iNatData.iNatDescription = iNatResponse.description;
      iNatData.endemic = iNatResponse.taxon.endemic;
      iNatData.threatened = iNatResponse.taxon.threatened;
      iNatData.introduced = iNatResponse.taxon.introduced;
      iNatData.native = iNatResponse.taxon.native;

      // make a second call to iNat API to get taxon info
      const taxonRes = await fetch(
        `https://api.inaturalist.org/v1/taxa/${iNatResponse.taxon.id}`
      );
      if (taxonRes.status >= 400) {
        throw new Error("Bad response from iNaturalist taxon server");
      }
      const x = await taxonRes.json();
      const iNatTaxonResponse = x.results[0];

      iNatData.taxonAncestors = iNatTaxonResponse.ancestors.map((ancestor) => {
        return {
          rank: ancestor.rank,
          name: ancestor.name,
          preferredCommonName: ancestor.preferred_common_name
            ? ancestor.preferred_common_name
            : null,
        };
      });

      // TODO: an object check for expected types?

      // send it to strapi
      input.iNatData = iNatData;
      console.log("*************************");
      console.log("input.iNatData");
      console.log("*************************");
      console.log(input.iNatData);
    },
  },
};
