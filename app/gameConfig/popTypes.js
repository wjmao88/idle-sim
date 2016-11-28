export default {
  P_BASE: {
    priority: 1,
    consumption: {
      R_GRAIN: 30, //same consumption as P_LOW, but all in grains
      R_LUMBER: 150 //half of P_LOW
    }
  },
  P_LOW: {
    priority: 10,
    consumption: {
      //using P_LOW as a baseline
      //assuming it is for 4 people, couple + kids/elderly
      //number for ~30 days
      // a 1 is ~1 kg or ~1/1000 cubic meters, which ever is greater
      //raw food
      R_GRAIN: 20, // 1/4 kg/day/person, this is using half that + usage loss
      R_MEAT: 5, // 1/4 pound per person every 3 days
      R_FISH: 2, // ~half of meat
      R_SALT: 1, // nominal consumption + other uses

      //prepared food
      R_BEER: 15, // 1/4 liter per day for 2 people
      R_BREAD: 15, // the other half from R_GRAIN

      //cloth
      R_CLOTH: 1, // 1kg/person for set of clothes
      R_LEATHER: 1, // clothes and tools

      //living
      R_LUMBER: 300 // 1 bundle/day, which is ~20kg.
    }
  },
  P_MIDDLE: {
    priority: 100,
    consumption: {
      //raw food
      R_GRAIN: 25, // same as P_LOW, higher usage margin
      R_MEAT: 25, // more meat everyday, ~5 times of P_LOW
      R_FISH: 10,
      R_SALT: 2, // more usage with meat
      R_FRUIT: 36, // 100g, 3/day/person
      R_HONEY: 2, // cooking and dipping, nominal

      //prepared food
      R_BREAD: 20, // same as P_LOW, added usage margin
      R_BEER: 10, // less than P_LOW
      R_WINE: 5, // rest of R_BEER in R_WINE
      R_SWEETS: 3, // dessert 1/5 of the time, 1/2 kg for 4 people

      //cloth
      R_CLOTH: 3, // triple P_LOW
      R_LEATHER: 2, // double P_LOW

      //living
      R_LUMBER: 600, // doubling of P_LOW for bigger house
      R_OIL: 5 //TODO
    }
  },
  P_HIGH: {
    priority: 1000,
    consumption: {
      //food
      R_GRAIN: 25, // same as P_MIDDLE
      R_MEAT: 35, // extra meat compared to P_MIDDLE
      R_FISH: 15,
      R_SALT: 5, // ball park greater increase
      R_FRUIT: 48, // 150% P_MIDDLE
      R_HONEY: 5, // ball park greater increase

      //prepared food
      R_BREAD: 30, // more usage loss
      R_SWEETS: 15, // dessert everyday, 1/2 kg for 4 people
      R_WINE: 15, // all in wine

      //cloth
      R_CLOTH: 10, // ~triple P_MIDDLE
      R_LEATHER: 5,
      R_VELVET: 3, // ball park

      //living
      R_LUMBER: 1200, // doubling P_MIDDLE for even bigger house
      R_OIL: 20
    }
  }
};