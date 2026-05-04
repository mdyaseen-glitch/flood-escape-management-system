// AUTO-GENERATED from OpenStreetMap data via scripts/buildGraph.js
// Real Koramangala road network — 900 intersections, 1136 road segments
// Status: red=flooded/impassable | yellow=waterlogged/passable | green=safe
// Statuses are seeded-random for demonstration purposes.

const nodes = [
  {
    "id": "n0",
    "osmId": 405149609,
    "lat": 12.9408286,
    "lng": 77.6285803,
    "name": "3rd Main Road / 28th Cross Rd"
  },
  {
    "id": "n1",
    "osmId": 61746209,
    "lat": 12.9401677,
    "lng": 77.6286928,
    "name": "3rd Main Road / 2nd Cross Road"
  },
  {
    "id": "n2",
    "osmId": 956271706,
    "lat": 12.9393502,
    "lng": 77.6288736,
    "name": "3rd Main Road / 1st Cross Road"
  },
  {
    "id": "n3",
    "osmId": 17327141,
    "lat": 12.9384931,
    "lng": 77.6291682,
    "name": "3rd Main Road / Inner Ring Road"
  },
  {
    "id": "n4",
    "osmId": 61746206,
    "lat": 12.9404239,
    "lng": 77.62834,
    "name": "3rd Cross Road / 2nd Main Road"
  },
  {
    "id": "n5",
    "osmId": 61746204,
    "lat": 12.9403412,
    "lng": 77.6277745,
    "name": "3rd Cross Road End"
  },
  {
    "id": "n6",
    "osmId": 583466959,
    "lat": 12.9393014,
    "lng": 77.6285506,
    "name": "2nd Main Road / 1st Cross Road"
  },
  {
    "id": "n7",
    "osmId": 61746207,
    "lat": 12.9401189,
    "lng": 77.6283899,
    "name": "2nd Main Road / 2nd Cross Road"
  },
  {
    "id": "n8",
    "osmId": 254920166,
    "lat": 12.9334559,
    "lng": 77.6232731,
    "name": "1st A Cross Road / Mahayogi Vemana Road"
  },
  {
    "id": "n9",
    "osmId": 308918179,
    "lat": 12.9335405,
    "lng": 77.622713,
    "name": "1st A Cross Road / 17th A Main Road"
  },
  {
    "id": "n10",
    "osmId": 304964733,
    "lat": 12.9336872,
    "lng": 77.6196166,
    "name": "1st A Cross Road / 17th C Main Road"
  },
  {
    "id": "n11",
    "osmId": 1419497948,
    "lat": 12.9336043,
    "lng": 77.6185935,
    "name": "1st A Cross Road / 2nd Main Road"
  },
  {
    "id": "n12",
    "osmId": 254920177,
    "lat": 12.9340096,
    "lng": 77.6168659,
    "name": "1st A Cross Road / 17th Main Road"
  },
  {
    "id": "n13",
    "osmId": 306586796,
    "lat": 12.9341284,
    "lng": 77.6166244,
    "name": "1st A Cross Road / Jyoti Nivas College Road"
  },
  {
    "id": "n14",
    "osmId": 254920179,
    "lat": 12.9344379,
    "lng": 77.6162724,
    "name": "1st A Cross Road / 4th B Cross Road"
  },
  {
    "id": "n15",
    "osmId": 568949761,
    "lat": 12.9353174,
    "lng": 77.6156865,
    "name": "1st A Cross Road / 1st Main Road"
  },
  {
    "id": "n16",
    "osmId": 12451306645,
    "lat": 12.9358402,
    "lng": 77.6153192,
    "name": "1st A Cross Road / 80 Feet Road"
  },
  {
    "id": "n17",
    "osmId": 306586738,
    "lat": 12.9346238,
    "lng": 77.612719,
    "name": "80 Feet Road / 1st C Main Road"
  },
  {
    "id": "n18",
    "osmId": 306586716,
    "lat": 12.935738,
    "lng": 77.6149547,
    "name": "80 Feet Road / 1st B Main Road"
  },
  {
    "id": "n19",
    "osmId": 3399067461,
    "lat": 12.9377707,
    "lng": 77.6186529,
    "name": "5th Cross Road / 80 Feet Road"
  },
  {
    "id": "n20",
    "osmId": 309593140,
    "lat": 12.9374499,
    "lng": 77.619167,
    "name": "5th Cross Road / 19th Main Road"
  },
  {
    "id": "n21",
    "osmId": 304955848,
    "lat": 12.9368678,
    "lng": 77.620119,
    "name": "5th Cross Road / 17th E Main Road"
  },
  {
    "id": "n22",
    "osmId": 309593051,
    "lat": 12.9367451,
    "lng": 77.6203267,
    "name": "5th Cross Road / 18th Main Road"
  },
  {
    "id": "n23",
    "osmId": 308921397,
    "lat": 12.9365638,
    "lng": 77.620623,
    "name": "5th Cross Road / 17th D Main Road"
  },
  {
    "id": "n24",
    "osmId": 254920217,
    "lat": 12.9363405,
    "lng": 77.6209764,
    "name": "5th Cross Road / 17th C Main Road"
  },
  {
    "id": "n25",
    "osmId": 308920401,
    "lat": 12.9360656,
    "lng": 77.6214105,
    "name": "5th Cross Road / 17th B Main Road"
  },
  {
    "id": "n26",
    "osmId": 309593039,
    "lat": 12.9357389,
    "lng": 77.6219474,
    "name": "5th Cross Road / 17th E Main Road"
  },
  {
    "id": "n27",
    "osmId": 308918185,
    "lat": 12.9348834,
    "lng": 77.6233085,
    "name": "5th Cross Road / 17th A Main Road"
  },
  {
    "id": "n28",
    "osmId": 254920223,
    "lat": 12.9345854,
    "lng": 77.623801,
    "name": "5th Cross Road / Mahayogi Vemana Road"
  },
  {
    "id": "n29",
    "osmId": 443224605,
    "lat": 12.9352411,
    "lng": 77.6243708,
    "name": "8th Main Road / Mahayogi Vemana Road"
  },
  {
    "id": "n30",
    "osmId": 309592695,
    "lat": 12.9351903,
    "lng": 77.6244413,
    "name": "8th Main Road / Mahayogi Vemana Road"
  },
  {
    "id": "n31",
    "osmId": 2571434008,
    "lat": 12.9257,
    "lng": 77.6251492,
    "name": "Sarjapura Road"
  },
  {
    "id": "n32",
    "osmId": 4761188839,
    "lat": 12.9274643,
    "lng": 77.6209908,
    "name": "Sarjapura Road / Mahayogi Vemana Road"
  },
  {
    "id": "n33",
    "osmId": 6017833816,
    "lat": 12.9373325,
    "lng": 77.6269369,
    "name": "Inner Ring Road / 80 Feet Road"
  },
  {
    "id": "n34",
    "osmId": 12183377237,
    "lat": 12.9374592,
    "lng": 77.627084,
    "name": "Inner Ring Road"
  },
  {
    "id": "n35",
    "osmId": 263226812,
    "lat": 12.9261579,
    "lng": 77.6286946,
    "name": "3rd Cross Road / 8th Main Road"
  },
  {
    "id": "n36",
    "osmId": 301348097,
    "lat": 12.926351,
    "lng": 77.6281978,
    "name": "3rd Cross Road / 9th Main Road"
  },
  {
    "id": "n37",
    "osmId": 265524447,
    "lat": 12.9265195,
    "lng": 77.6277708,
    "name": "3rd Cross Road / 10th Main Road"
  },
  {
    "id": "n38",
    "osmId": 308917133,
    "lat": 12.9268059,
    "lng": 77.6270445,
    "name": "3rd Cross Road / 11th Main Road"
  },
  {
    "id": "n39",
    "osmId": 263226936,
    "lat": 12.9270524,
    "lng": 77.6264198,
    "name": "3rd Cross Road / 12th Main Road"
  },
  {
    "id": "n40",
    "osmId": 263220551,
    "lat": 12.9273383,
    "lng": 77.6256948,
    "name": "3rd Cross Road / 13th Main Road"
  },
  {
    "id": "n41",
    "osmId": 301348513,
    "lat": 12.9280436,
    "lng": 77.6239069,
    "name": "3rd Cross Road / 16th Main Road"
  },
  {
    "id": "n42",
    "osmId": 301347812,
    "lat": 12.9303496,
    "lng": 77.6276105,
    "name": "12th Main Road / 7th Cross Road"
  },
  {
    "id": "n43",
    "osmId": 263227126,
    "lat": 12.9255601,
    "lng": 77.6335759,
    "name": "2nd Cross Road / 80 Feet Road"
  },
  {
    "id": "n44",
    "osmId": 305144478,
    "lat": 12.9256177,
    "lng": 77.6339586,
    "name": "2nd Cross Road / 6th Main Road"
  },
  {
    "id": "n45",
    "osmId": 305134812,
    "lat": 12.9257381,
    "lng": 77.6346227,
    "name": "2nd Cross Road / 5th Main Road"
  },
  {
    "id": "n46",
    "osmId": 305144298,
    "lat": 12.925823,
    "lng": 77.6350961,
    "name": "2nd Cross Road / 4th Main Road"
  },
  {
    "id": "n47",
    "osmId": 303933199,
    "lat": 12.926076,
    "lng": 77.6366314,
    "name": "2nd Cross Road / 3rd Main Road"
  },
  {
    "id": "n48",
    "osmId": 303933201,
    "lat": 12.9260188,
    "lng": 77.6370147,
    "name": "2nd Cross Road / 2nd Main Road"
  },
  {
    "id": "n49",
    "osmId": 263227171,
    "lat": 12.9258691,
    "lng": 77.6374913,
    "name": "2nd Cross Road / 1st Main Road"
  },
  {
    "id": "n50",
    "osmId": 5389437913,
    "lat": 12.9292838,
    "lng": 77.6346741,
    "name": "1st Main Road / 5th C Main Road"
  },
  {
    "id": "n51",
    "osmId": 5389437911,
    "lat": 12.9291803,
    "lng": 77.6348893,
    "name": "1st Main Road / 5th D Main Road"
  },
  {
    "id": "n52",
    "osmId": 3149542156,
    "lat": 12.9281564,
    "lng": 77.6369485,
    "name": "1st Main Road / 3rd Cross Road"
  },
  {
    "id": "n53",
    "osmId": 1469644253,
    "lat": 12.9252567,
    "lng": 77.6374045,
    "name": "1st Main Road / Sarjapura Road"
  },
  {
    "id": "n54",
    "osmId": 308915759,
    "lat": 12.925166,
    "lng": 77.6373952,
    "name": "1st Main Road / Sarjapura Road"
  },
  {
    "id": "n55",
    "osmId": 265524451,
    "lat": 12.9286816,
    "lng": 77.6280862,
    "name": "10th Main Road End"
  },
  {
    "id": "n56",
    "osmId": 265525604,
    "lat": 12.9286343,
    "lng": 77.6285962,
    "name": "9th Main Road End"
  },
  {
    "id": "n57",
    "osmId": 265525615,
    "lat": 12.9306064,
    "lng": 77.6248423,
    "name": "16th Main Road / 7th Cross Road"
  },
  {
    "id": "n58",
    "osmId": 305091421,
    "lat": 12.9301442,
    "lng": 77.6246592,
    "name": "16th Main Road / 6th B Cross Road"
  },
  {
    "id": "n59",
    "osmId": 305091424,
    "lat": 12.9297154,
    "lng": 77.624524,
    "name": "16th Main Road / 6th A Cross Road"
  },
  {
    "id": "n60",
    "osmId": 305091330,
    "lat": 12.9292697,
    "lng": 77.6243495,
    "name": "16th Main Road / 6th Cross Road"
  },
  {
    "id": "n61",
    "osmId": 305091228,
    "lat": 12.9285949,
    "lng": 77.6241075,
    "name": "16th Main Road / 5th Cross Road"
  },
  {
    "id": "n62",
    "osmId": 305091088,
    "lat": 12.9273784,
    "lng": 77.6236662,
    "name": "16th Main Road / 2nd Cross Road"
  },
  {
    "id": "n63",
    "osmId": 5960671739,
    "lat": 12.9266575,
    "lng": 77.6234079,
    "name": "16th Main Road / Sarjapura Road"
  },
  {
    "id": "n64",
    "osmId": 2746550985,
    "lat": 12.9265612,
    "lng": 77.623379,
    "name": "16th Main Road / Sarjapura Road"
  },
  {
    "id": "n65",
    "osmId": 305091860,
    "lat": 12.9364379,
    "lng": 77.6269037,
    "name": "16th C Main Road / 5th Cross Road"
  },
  {
    "id": "n66",
    "osmId": 583466958,
    "lat": 12.9356757,
    "lng": 77.6259763,
    "name": "16th C Main Road / 4th Cross Road"
  },
  {
    "id": "n67",
    "osmId": 305091972,
    "lat": 12.9354211,
    "lng": 77.625671,
    "name": "16th C Main Road / 3rd Cross Road"
  },
  {
    "id": "n68",
    "osmId": 305091999,
    "lat": 12.9351662,
    "lng": 77.6253582,
    "name": "16th C Main Road / 2nd A Cross Road"
  },
  {
    "id": "n69",
    "osmId": 303931711,
    "lat": 12.934835,
    "lng": 77.6249936,
    "name": "16th C Main Road / 8th Main Road"
  },
  {
    "id": "n70",
    "osmId": 308921422,
    "lat": 12.935888,
    "lng": 77.6202745,
    "name": "4th Cross Road / 17th D Main Road"
  },
  {
    "id": "n71",
    "osmId": 304955780,
    "lat": 12.936255,
    "lng": 77.61971,
    "name": "4th Cross Road / 17th E Main Road"
  },
  {
    "id": "n72",
    "osmId": 304956025,
    "lat": 12.9367426,
    "lng": 77.6188787,
    "name": "4th Cross Road / 4th A Cross Road"
  },
  {
    "id": "n73",
    "osmId": 3399098255,
    "lat": 12.9370655,
    "lng": 77.6183692,
    "name": "4th Cross Road / 80 Feet Road"
  },
  {
    "id": "n74",
    "osmId": 363182402,
    "lat": 12.9349478,
    "lng": 77.6190496,
    "name": "17th E Main Road"
  },
  {
    "id": "n75",
    "osmId": 304955847,
    "lat": 12.9353718,
    "lng": 77.619174,
    "name": "17th E Main Road / 2nd B Cross Road"
  },
  {
    "id": "n76",
    "osmId": 308920806,
    "lat": 12.9356461,
    "lng": 77.6193042,
    "name": "17th E Main Road / 2nd Cross Road"
  },
  {
    "id": "n77",
    "osmId": 304956289,
    "lat": 12.9359272,
    "lng": 77.6194968,
    "name": "17th E Main Road / 3rd Cross Road"
  },
  {
    "id": "n78",
    "osmId": 304956037,
    "lat": 12.9365196,
    "lng": 77.6198948,
    "name": "17th E Main Road / 4th A Cross Road"
  },
  {
    "id": "n79",
    "osmId": 308921398,
    "lat": 12.9362043,
    "lng": 77.6204359,
    "name": "4th A Cross Road / 17th D Main Road"
  },
  {
    "id": "n80",
    "osmId": 304956245,
    "lat": 12.9360934,
    "lng": 77.615861,
    "name": "2nd Cross Road / 80 Feet Road"
  },
  {
    "id": "n81",
    "osmId": 308921511,
    "lat": 12.9357342,
    "lng": 77.61607,
    "name": "2nd Cross Road / 2nd Main Road"
  },
  {
    "id": "n82",
    "osmId": 304956252,
    "lat": 12.9348509,
    "lng": 77.6165185,
    "name": "2nd Cross Road / 1st Main Road"
  },
  {
    "id": "n83",
    "osmId": 304956241,
    "lat": 12.9347036,
    "lng": 77.6169766,
    "name": "2nd Cross Road / 17th Main Road"
  },
  {
    "id": "n84",
    "osmId": 304956256,
    "lat": 12.9346287,
    "lng": 77.6185891,
    "name": "2nd Cross Road / 17th F Main Road"
  },
  {
    "id": "n85",
    "osmId": 363182099,
    "lat": 12.9346158,
    "lng": 77.619637,
    "name": "2nd Cross Road / 2nd A Cross Road"
  },
  {
    "id": "n86",
    "osmId": 304964738,
    "lat": 12.9346137,
    "lng": 77.6200525,
    "name": "2nd Cross Road / 17th C Main Road"
  },
  {
    "id": "n87",
    "osmId": 6504022158,
    "lat": 12.9366,
    "lng": 77.61838,
    "name": "3rd Cross Road"
  },
  {
    "id": "n88",
    "osmId": 304967128,
    "lat": 12.9361142,
    "lng": 77.6191864,
    "name": "3rd Cross Road / 17th F Main Road"
  },
  {
    "id": "n89",
    "osmId": 308921396,
    "lat": 12.9355672,
    "lng": 77.6200945,
    "name": "3rd Cross Road / 17th D Main Road"
  },
  {
    "id": "n90",
    "osmId": 308921454,
    "lat": 12.9353523,
    "lng": 77.6204512,
    "name": "3rd Cross Road / 17th C Main Road"
  },
  {
    "id": "n91",
    "osmId": 308920357,
    "lat": 12.9344019,
    "lng": 77.6199383,
    "name": "17th C Main Road / 2nd Cross Road"
  },
  {
    "id": "n92",
    "osmId": 308920807,
    "lat": 12.9350544,
    "lng": 77.6202902,
    "name": "17th C Main Road / 2nd Cross Road"
  },
  {
    "id": "n93",
    "osmId": 2185753760,
    "lat": 12.9345244,
    "lng": 77.6185936,
    "name": "2nd Main Road End"
  },
  {
    "id": "n94",
    "osmId": 9797919703,
    "lat": 12.937197,
    "lng": 77.626942,
    "name": "Mahayogi Vemana Road / 80 Feet Road"
  },
  {
    "id": "n95",
    "osmId": 305091854,
    "lat": 12.9368612,
    "lng": 77.6265291,
    "name": "Mahayogi Vemana Road / 5th Cross Road"
  },
  {
    "id": "n96",
    "osmId": 305091963,
    "lat": 12.9360846,
    "lng": 77.6255428,
    "name": "Mahayogi Vemana Road / 4th Cross Road"
  },
  {
    "id": "n97",
    "osmId": 595766030,
    "lat": 12.9266427,
    "lng": 77.6254533,
    "name": "2nd Cross Road / 13th Main Road"
  },
  {
    "id": "n98",
    "osmId": 308917132,
    "lat": 12.9260844,
    "lng": 77.62681,
    "name": "2nd Cross Road / 11th Main Road"
  },
  {
    "id": "n99",
    "osmId": 305091122,
    "lat": 12.9253643,
    "lng": 77.6285713,
    "name": "2nd Cross Road / 8th Main Road"
  },
  {
    "id": "n100",
    "osmId": 305091142,
    "lat": 12.9278704,
    "lng": 77.6258862,
    "name": "5th Cross Road / 13th Main Road"
  },
  {
    "id": "n101",
    "osmId": 305091505,
    "lat": 12.9281225,
    "lng": 77.6252634,
    "name": "5th Cross Road / 14th Main Road"
  },
  {
    "id": "n102",
    "osmId": 305091273,
    "lat": 12.9283574,
    "lng": 77.6246886,
    "name": "5th Cross Road / 15th Main Road"
  },
  {
    "id": "n103",
    "osmId": 305091576,
    "lat": 12.9287827,
    "lng": 77.6236481,
    "name": "5th Cross Road / 17th Main Road"
  },
  {
    "id": "n104",
    "osmId": 305091594,
    "lat": 12.9289887,
    "lng": 77.623144,
    "name": "5th Cross Road / 18th Main Road"
  },
  {
    "id": "n105",
    "osmId": 503050641,
    "lat": 12.9295187,
    "lng": 77.6218475,
    "name": "5th Cross Road / Mahayogi Vemana Road"
  },
  {
    "id": "n106",
    "osmId": 265525627,
    "lat": 12.9305619,
    "lng": 77.6255487,
    "name": "15th Main Road / 7th Cross Road"
  },
  {
    "id": "n107",
    "osmId": 305091418,
    "lat": 12.9300109,
    "lng": 77.6226739,
    "name": "6th Cross Road / 6th A Cross Road"
  },
  {
    "id": "n108",
    "osmId": 305091341,
    "lat": 12.9302411,
    "lng": 77.6221345,
    "name": "6th Cross Road / Mahayogi Vemana Road"
  },
  {
    "id": "n109",
    "osmId": 265525611,
    "lat": 12.9312415,
    "lng": 77.6231979,
    "name": "6th A Cross Road / 7th Cross Road"
  },
  {
    "id": "n110",
    "osmId": 305091419,
    "lat": 12.9308195,
    "lng": 77.6230182,
    "name": "6th A Cross Road / 6th B Cross Road"
  },
  {
    "id": "n111",
    "osmId": 305091422,
    "lat": 12.9304106,
    "lng": 77.6228441,
    "name": "6th A Cross Road"
  },
  {
    "id": "n112",
    "osmId": 305091318,
    "lat": 12.9305132,
    "lng": 77.6261452,
    "name": "14th Main Road / 7th Cross Road"
  },
  {
    "id": "n113",
    "osmId": 1070361777,
    "lat": 12.9268492,
    "lng": 77.6229326,
    "name": "17th Main Road / Sarjapura Road"
  },
  {
    "id": "n114",
    "osmId": 305091596,
    "lat": 12.9275558,
    "lng": 77.6225672,
    "name": "2nd Cross Road / 18th Main Road"
  },
  {
    "id": "n115",
    "osmId": 503065534,
    "lat": 12.9281284,
    "lng": 77.6212637,
    "name": "2nd Cross Road / Mahayogi Vemana Road"
  },
  {
    "id": "n116",
    "osmId": 305091599,
    "lat": 12.9280664,
    "lng": 77.6227726,
    "name": "3rd Cross Road / 18th Main Road"
  },
  {
    "id": "n117",
    "osmId": 305091600,
    "lat": 12.9285868,
    "lng": 77.6214602,
    "name": "3rd Cross Road / Mahayogi Vemana Road"
  },
  {
    "id": "n118",
    "osmId": 305091604,
    "lat": 12.9284829,
    "lng": 77.6229401,
    "name": "4th Cross Road / 18th Main Road"
  },
  {
    "id": "n119",
    "osmId": 503050639,
    "lat": 12.9290553,
    "lng": 77.621651,
    "name": "4th Cross Road / Mahayogi Vemana Road"
  },
  {
    "id": "n120",
    "osmId": 309592656,
    "lat": 12.936103,
    "lng": 77.627218,
    "name": "5th Cross Road / 16th B Main Road"
  },
  {
    "id": "n121",
    "osmId": 309592657,
    "lat": 12.9358786,
    "lng": 77.6274347,
    "name": "5th Cross Road / 16th A Main Road"
  },
  {
    "id": "n122",
    "osmId": 305091861,
    "lat": 12.9355998,
    "lng": 77.627704,
    "name": "5th Cross Road / 16th Main Road"
  },
  {
    "id": "n123",
    "osmId": 3801700762,
    "lat": 12.934432,
    "lng": 77.6296147,
    "name": "12th Main Road / 1st Cross Road"
  },
  {
    "id": "n124",
    "osmId": 305092002,
    "lat": 12.9340363,
    "lng": 77.6290958,
    "name": "12th Main Road / 5th Cross Road"
  },
  {
    "id": "n125",
    "osmId": 305092006,
    "lat": 12.933861,
    "lng": 77.6288446,
    "name": "12th Main Road / 5th Cross Road"
  },
  {
    "id": "n126",
    "osmId": 443224576,
    "lat": 12.933645,
    "lng": 77.6285657,
    "name": "12th Main Road / 4th Cross Road"
  },
  {
    "id": "n127",
    "osmId": 443224575,
    "lat": 12.9334607,
    "lng": 77.6283279,
    "name": "12th Main Road / 3rd Cross Road"
  },
  {
    "id": "n128",
    "osmId": 305092021,
    "lat": 12.933231,
    "lng": 77.6280313,
    "name": "12th Main Road / 2nd Cross"
  },
  {
    "id": "n129",
    "osmId": 305092010,
    "lat": 12.9331537,
    "lng": 77.6279317,
    "name": "12th Main Road / 3rd Cross Road"
  },
  {
    "id": "n130",
    "osmId": 305091873,
    "lat": 12.932879,
    "lng": 77.6275691,
    "name": "12th Main Road / 8th Main Road"
  },
  {
    "id": "n131",
    "osmId": 305091884,
    "lat": 12.9342129,
    "lng": 77.6260096,
    "name": "16th Main Road / 8th Main Road"
  },
  {
    "id": "n132",
    "osmId": 305092000,
    "lat": 12.934548,
    "lng": 77.6263648,
    "name": "16th Main Road / 2nd A Cross Road"
  },
  {
    "id": "n133",
    "osmId": 305091976,
    "lat": 12.9348251,
    "lng": 77.6266872,
    "name": "16th Main Road / 3rd Cross Road"
  },
  {
    "id": "n134",
    "osmId": 305091913,
    "lat": 12.9350341,
    "lng": 77.6269449,
    "name": "16th Main Road / 4th Cross Road"
  },
  {
    "id": "n135",
    "osmId": 3801692786,
    "lat": 12.9359641,
    "lng": 77.6280956,
    "name": "16th Main Road / 80 Feet Road"
  },
  {
    "id": "n136",
    "osmId": 305091898,
    "lat": 12.9338436,
    "lng": 77.6266153,
    "name": "15th Main Road / 8th Main Road"
  },
  {
    "id": "n137",
    "osmId": 305092008,
    "lat": 12.9341813,
    "lng": 77.6270532,
    "name": "15th Main Road / 3rd Cross Road"
  },
  {
    "id": "n138",
    "osmId": 305092003,
    "lat": 12.9348678,
    "lng": 77.6279905,
    "name": "15th Main Road / 5th Cross Road"
  },
  {
    "id": "n139",
    "osmId": 305092001,
    "lat": 12.9350477,
    "lng": 77.6282361,
    "name": "15th Main Road / 5th Cross Road"
  },
  {
    "id": "n140",
    "osmId": 3801692785,
    "lat": 12.935357,
    "lng": 77.6287135,
    "name": "15th Main Road / 80 Feet Road"
  },
  {
    "id": "n141",
    "osmId": 305091899,
    "lat": 12.9353985,
    "lng": 77.6287871,
    "name": "15th Main Road / 80 Feet Road"
  },
  {
    "id": "n142",
    "osmId": 305091961,
    "lat": 12.9352401,
    "lng": 77.6266654,
    "name": "4th Cross Road / 16th A Main Road"
  },
  {
    "id": "n143",
    "osmId": 309592649,
    "lat": 12.9354104,
    "lng": 77.6263947,
    "name": "4th Cross Road / 16th B Main Road"
  },
  {
    "id": "n144",
    "osmId": 305092012,
    "lat": 12.9346018,
    "lng": 77.628223,
    "name": "5th Cross Road / 15th Main Road"
  },
  {
    "id": "n145",
    "osmId": 305092014,
    "lat": 12.9343774,
    "lng": 77.628415,
    "name": "5th Cross Road / 14th Main Road"
  },
  {
    "id": "n146",
    "osmId": 305092015,
    "lat": 12.9341318,
    "lng": 77.6286193,
    "name": "5th Cross Road / 13th Main Road"
  },
  {
    "id": "n147",
    "osmId": 305092011,
    "lat": 12.9339472,
    "lng": 77.6272783,
    "name": "3rd Cross Road / 15th Main Road"
  },
  {
    "id": "n148",
    "osmId": 305092013,
    "lat": 12.9337214,
    "lng": 77.6274834,
    "name": "3rd Cross Road / 14th Main Road"
  },
  {
    "id": "n149",
    "osmId": 305092009,
    "lat": 12.93349,
    "lng": 77.6276834,
    "name": "3rd Cross Road / 13th Main Road"
  },
  {
    "id": "n150",
    "osmId": 305092023,
    "lat": 12.9323767,
    "lng": 77.6287962,
    "name": "2nd Cross / 11th Main Road"
  },
  {
    "id": "n151",
    "osmId": 305092269,
    "lat": 12.9311848,
    "lng": 77.6294317,
    "name": "2nd Cross / 10th Main Road"
  },
  {
    "id": "n152",
    "osmId": 12866638777,
    "lat": 12.9311063,
    "lng": 77.629466,
    "name": "2nd Cross / 10th Main Road"
  },
  {
    "id": "n153",
    "osmId": 305092025,
    "lat": 12.9305529,
    "lng": 77.6297078,
    "name": "2nd Cross / 1st Cross Road"
  },
  {
    "id": "n154",
    "osmId": 306582347,
    "lat": 12.9309442,
    "lng": 77.6275279,
    "name": "1st Cross Road / 12th Main Road"
  },
  {
    "id": "n155",
    "osmId": 6096432317,
    "lat": 12.9308869,
    "lng": 77.6278742,
    "name": "1st Cross Road / 8th B Main"
  },
  {
    "id": "n156",
    "osmId": 306582377,
    "lat": 12.9307784,
    "lng": 77.6284042,
    "name": "1st Cross Road / 1st A Cross Road"
  },
  {
    "id": "n157",
    "osmId": 260739401,
    "lat": 12.9306743,
    "lng": 77.6289732,
    "name": "1st Cross Road / 8th Main Road"
  },
  {
    "id": "n158",
    "osmId": 9200341881,
    "lat": 12.9306062,
    "lng": 77.6293853,
    "name": "1st Cross Road / 10th Main Road"
  },
  {
    "id": "n159",
    "osmId": 305092417,
    "lat": 12.9303089,
    "lng": 77.6306021,
    "name": "1st Cross Road / 8th A Main Road"
  },
  {
    "id": "n160",
    "osmId": 438069091,
    "lat": 12.9302381,
    "lng": 77.6326047,
    "name": "1st Cross Road / 5th Cross Road"
  },
  {
    "id": "n161",
    "osmId": 3801688116,
    "lat": 12.9303988,
    "lng": 77.6330477,
    "name": "1st Cross Road / 80 Feet Road"
  },
  {
    "id": "n162",
    "osmId": 3801688122,
    "lat": 12.9330766,
    "lng": 77.6309441,
    "name": "10th Main Road / 80 Feet Road"
  },
  {
    "id": "n163",
    "osmId": 438069277,
    "lat": 12.932741,
    "lng": 77.6306092,
    "name": "10th Main Road / 5th Cross Road"
  },
  {
    "id": "n164",
    "osmId": 443224585,
    "lat": 12.9324299,
    "lng": 77.6304043,
    "name": "10th Main Road / 4th B Cross Road"
  },
  {
    "id": "n165",
    "osmId": 443224582,
    "lat": 12.9320044,
    "lng": 77.6301236,
    "name": "10th Main Road / 4th A Cross Road"
  },
  {
    "id": "n166",
    "osmId": 305092268,
    "lat": 12.9316932,
    "lng": 77.6299184,
    "name": "10th Main Road / 4th Cross Road"
  },
  {
    "id": "n167",
    "osmId": 443224573,
    "lat": 12.931484,
    "lng": 77.6297181,
    "name": "10th Main Road / 3rd Cross Road"
  },
  {
    "id": "n168",
    "osmId": 7265495348,
    "lat": 12.9321027,
    "lng": 77.6317481,
    "name": "8th A Main Road"
  },
  {
    "id": "n169",
    "osmId": 438069276,
    "lat": 12.931773,
    "lng": 77.6315327,
    "name": "8th A Main Road / 5th Cross Road"
  },
  {
    "id": "n170",
    "osmId": 443224580,
    "lat": 12.9311601,
    "lng": 77.6311519,
    "name": "8th A Main Road / 4th A Cross Road"
  },
  {
    "id": "n171",
    "osmId": 443224570,
    "lat": 12.9306608,
    "lng": 77.6308145,
    "name": "8th A Main Road / 3rd Cross Road"
  },
  {
    "id": "n172",
    "osmId": 438068380,
    "lat": 12.9297646,
    "lng": 77.6303354,
    "name": "8th A Main Road / 7th Cross Road"
  },
  {
    "id": "n173",
    "osmId": 5389437926,
    "lat": 12.9294741,
    "lng": 77.634222,
    "name": "5th Main Road / 1st Main Road"
  },
  {
    "id": "n174",
    "osmId": 305134843,
    "lat": 12.9289647,
    "lng": 77.6342683,
    "name": "5th Main Road / 2nd Main Road"
  },
  {
    "id": "n175",
    "osmId": 595765589,
    "lat": 12.9270823,
    "lng": 77.6344737,
    "name": "5th Main Road / 5th Cross Road"
  },
  {
    "id": "n176",
    "osmId": 305144294,
    "lat": 12.9287564,
    "lng": 77.634727,
    "name": "2nd Main Road / 4th Main Road"
  },
  {
    "id": "n177",
    "osmId": 305144597,
    "lat": 12.9271555,
    "lng": 77.637179,
    "name": "2nd Main Road / 4th Cross Road"
  },
  {
    "id": "n178",
    "osmId": 1469644263,
    "lat": 12.9254266,
    "lng": 77.6369855,
    "name": "2nd Main Road / Sarjapura Road"
  },
  {
    "id": "n179",
    "osmId": 305144299,
    "lat": 12.9281605,
    "lng": 77.6348055,
    "name": "4th Main Road / 3rd Main Road"
  },
  {
    "id": "n180",
    "osmId": 595765590,
    "lat": 12.9271812,
    "lng": 77.634911,
    "name": "4th Main Road / 5th Cross Road"
  },
  {
    "id": "n181",
    "osmId": 305144569,
    "lat": 12.9266812,
    "lng": 77.6349894,
    "name": "4th Main Road / 4th Cross Road"
  },
  {
    "id": "n182",
    "osmId": 305144373,
    "lat": 12.9262445,
    "lng": 77.6350437,
    "name": "4th Main Road / 3rd Cross Road"
  },
  {
    "id": "n183",
    "osmId": 305144566,
    "lat": 12.9273976,
    "lng": 77.6364321,
    "name": "3rd Main Road / 5th Cross Road"
  },
  {
    "id": "n184",
    "osmId": 305144596,
    "lat": 12.927012,
    "lng": 77.6367396,
    "name": "3rd Main Road / 4th Cross Road"
  },
  {
    "id": "n185",
    "osmId": 305144362,
    "lat": 12.9265579,
    "lng": 77.6366823,
    "name": "3rd Main Road / 3rd Cross Road"
  },
  {
    "id": "n186",
    "osmId": 6132065477,
    "lat": 12.925456,
    "lng": 77.6365642,
    "name": "3rd Main Road / Sarjapura Road"
  },
  {
    "id": "n187",
    "osmId": 5389437927,
    "lat": 12.9298044,
    "lng": 77.6335345,
    "name": "6th Main Road / 1st Main Road"
  },
  {
    "id": "n188",
    "osmId": 305144537,
    "lat": 12.9269428,
    "lng": 77.6338199,
    "name": "6th Main Road / 5th Cross Road"
  },
  {
    "id": "n189",
    "osmId": 305134771,
    "lat": 12.9298567,
    "lng": 77.6335422,
    "name": "7th A Main Road / 1st Main Road"
  },
  {
    "id": "n190",
    "osmId": 3452260835,
    "lat": 12.9300751,
    "lng": 77.6336189,
    "name": "7th A Main Road / 7th Main Road"
  },
  {
    "id": "n191",
    "osmId": 3558446058,
    "lat": 12.9306308,
    "lng": 77.6338673,
    "name": "7th A Main Road End"
  },
  {
    "id": "n192",
    "osmId": 306580353,
    "lat": 12.9295642,
    "lng": 77.6291916,
    "name": "5th Cross Road / 8th Main Road"
  },
  {
    "id": "n193",
    "osmId": 4803681196,
    "lat": 12.9294894,
    "lng": 77.6295658,
    "name": "5th Cross Road / 8th B Main Road"
  },
  {
    "id": "n194",
    "osmId": 4803681199,
    "lat": 12.9291929,
    "lng": 77.6308262,
    "name": "5th Cross Road / 8th A Main Road"
  },
  {
    "id": "n195",
    "osmId": 306580382,
    "lat": 12.9291048,
    "lng": 77.6312233,
    "name": "5th Cross Road / 8A Main Road"
  },
  {
    "id": "n196",
    "osmId": 306580384,
    "lat": 12.9283011,
    "lng": 77.6290132,
    "name": "1st Cross Road / 8th Main Road"
  },
  {
    "id": "n197",
    "osmId": 4803681197,
    "lat": 12.9281964,
    "lng": 77.6294763,
    "name": "1st Cross Road / 8th B Main Road"
  },
  {
    "id": "n198",
    "osmId": 4803681198,
    "lat": 12.9279644,
    "lng": 77.6305021,
    "name": "1st Cross Road / 8th A Main Road"
  },
  {
    "id": "n199",
    "osmId": 306580443,
    "lat": 12.9278811,
    "lng": 77.6309061,
    "name": "1st Cross Road / 8A Main Road"
  },
  {
    "id": "n200",
    "osmId": 306580569,
    "lat": 12.9295532,
    "lng": 77.6313425,
    "name": "8A Main Road / 7th Cross Road"
  },
  {
    "id": "n201",
    "osmId": 306582104,
    "lat": 12.932688,
    "lng": 77.627736,
    "name": "12th Main Road / 8th Main Road"
  },
  {
    "id": "n202",
    "osmId": 306582445,
    "lat": 12.9320916,
    "lng": 77.6276883,
    "name": "12th Main Road / 1st A Cross Road"
  },
  {
    "id": "n203",
    "osmId": 306582120,
    "lat": 12.9303724,
    "lng": 77.6274511,
    "name": "12th Main Road / 7th Cross Road"
  },
  {
    "id": "n204",
    "osmId": 6096432316,
    "lat": 12.9316786,
    "lng": 77.62797,
    "name": "1st A Cross Road / 8th B Main"
  },
  {
    "id": "n205",
    "osmId": 443224603,
    "lat": 12.9334435,
    "lng": 77.6264286,
    "name": "1st A Cross Road End"
  },
  {
    "id": "n206",
    "osmId": 306586220,
    "lat": 12.9364563,
    "lng": 77.6148855,
    "name": "1st Main Road / Someshwara Temple Road"
  },
  {
    "id": "n207",
    "osmId": 309593646,
    "lat": 12.9367453,
    "lng": 77.614694,
    "name": "1st Main Road / 2nd Cross Road"
  },
  {
    "id": "n208",
    "osmId": 309593638,
    "lat": 12.9374662,
    "lng": 77.6130329,
    "name": "1st Main Road"
  },
  {
    "id": "n209",
    "osmId": 1744462784,
    "lat": 12.9369075,
    "lng": 77.6110193,
    "name": "Someshwara Temple Road / Hosur Road"
  },
  {
    "id": "n210",
    "osmId": 306586341,
    "lat": 12.9370709,
    "lng": 77.6114917,
    "name": "Someshwara Temple Road / 5th Cross Rd"
  },
  {
    "id": "n211",
    "osmId": 306586724,
    "lat": 12.9366292,
    "lng": 77.6134082,
    "name": "Someshwara Temple Road / 1st C Main Road"
  },
  {
    "id": "n212",
    "osmId": 6504113877,
    "lat": 12.9365783,
    "lng": 77.6137188,
    "name": "Someshwara Temple Road / 1st C Cross Street"
  },
  {
    "id": "n213",
    "osmId": 306586652,
    "lat": 12.9364693,
    "lng": 77.614603,
    "name": "Someshwara Temple Road / 1st B Cross Road"
  },
  {
    "id": "n214",
    "osmId": 306586468,
    "lat": 12.935275,
    "lng": 77.6175379,
    "name": "17th B Main Road End"
  },
  {
    "id": "n215",
    "osmId": 306586470,
    "lat": 12.9351874,
    "lng": 77.618721,
    "name": "17th B Main Road / 17th F Main Road"
  },
  {
    "id": "n216",
    "osmId": 306586704,
    "lat": 12.9363899,
    "lng": 77.6145867,
    "name": "1st B Cross Road / 1st B Main Road"
  },
  {
    "id": "n217",
    "osmId": 306586698,
    "lat": 12.9356263,
    "lng": 77.6130735,
    "name": "1st B Cross Road / 1st C Main Road"
  },
  {
    "id": "n218",
    "osmId": 309593576,
    "lat": 12.9360839,
    "lng": 77.614765,
    "name": "1st B Main Road / 1st A Cross Road"
  },
  {
    "id": "n219",
    "osmId": 309593571,
    "lat": 12.9351483,
    "lng": 77.6129369,
    "name": "1st C Main Road / 1st A Cross Road"
  },
  {
    "id": "n220",
    "osmId": 10992011818,
    "lat": 12.9338815,
    "lng": 77.6162276,
    "name": "Jyoti Nivas College Road"
  },
  {
    "id": "n221",
    "osmId": 306586914,
    "lat": 12.9325038,
    "lng": 77.6135402,
    "name": "Jyoti Nivas College Road"
  },
  {
    "id": "n222",
    "osmId": 306587086,
    "lat": 12.9329534,
    "lng": 77.6132988,
    "name": "4th B Cross Road End"
  },
  {
    "id": "n223",
    "osmId": 12709621387,
    "lat": 12.929538,
    "lng": 77.6149845,
    "name": "Tavarekere Main Road"
  },
  {
    "id": "n224",
    "osmId": 3931954080,
    "lat": 12.9302495,
    "lng": 77.612799,
    "name": "Tavarekere Main Road / Jogi Colony Main Road"
  },
  {
    "id": "n225",
    "osmId": 306590277,
    "lat": 12.9309162,
    "lng": 77.6098193,
    "name": "Tavarekere Main Road / 1st Main Road"
  },
  {
    "id": "n226",
    "osmId": 1607770311,
    "lat": 12.9302428,
    "lng": 77.6096711,
    "name": "Tavarekere Main Road / 1st Main Road"
  },
  {
    "id": "n227",
    "osmId": 1607770226,
    "lat": 12.9278446,
    "lng": 77.6091661,
    "name": "Tavarekere Main Road / 2nd Cross road"
  },
  {
    "id": "n228",
    "osmId": 6532581205,
    "lat": 12.9258025,
    "lng": 77.6087582,
    "name": "Tavarekere Main Road"
  },
  {
    "id": "n229",
    "osmId": 1466906044,
    "lat": 12.9309667,
    "lng": 77.6091715,
    "name": "1st Main Road / 2nd Cross Road"
  },
  {
    "id": "n230",
    "osmId": 306590578,
    "lat": 12.9310569,
    "lng": 77.6082195,
    "name": "1st Main Road / 4th Main Road"
  },
  {
    "id": "n231",
    "osmId": 306590588,
    "lat": 12.9313622,
    "lng": 77.607359,
    "name": "1st Main Road End"
  },
  {
    "id": "n232",
    "osmId": 1472269371,
    "lat": 12.9318314,
    "lng": 77.6134432,
    "name": "Jogi Colony Main Road / Dr. M H Marigowda Road"
  },
  {
    "id": "n233",
    "osmId": 11021742660,
    "lat": 12.9489651,
    "lng": 77.6205292,
    "name": "National Games Village Road End"
  },
  {
    "id": "n234",
    "osmId": 11350643474,
    "lat": 12.9425951,
    "lng": 77.624807,
    "name": "National Games Village Road"
  },
  {
    "id": "n235",
    "osmId": 306850816,
    "lat": 12.9263984,
    "lng": 77.615563,
    "name": "1st Main Road / Maruthi Nagar Main Road"
  },
  {
    "id": "n236",
    "osmId": 1607770096,
    "lat": 12.9267644,
    "lng": 77.6162225,
    "name": "1st Main Road / 1st Cross Road"
  },
  {
    "id": "n237",
    "osmId": 307408561,
    "lat": 12.9269951,
    "lng": 77.616588,
    "name": "1st Main Road / Hosur Road"
  },
  {
    "id": "n238",
    "osmId": 4464082677,
    "lat": 12.9253402,
    "lng": 77.6265362,
    "name": "11th Main Road / Sarjapura Road"
  },
  {
    "id": "n239",
    "osmId": 308917326,
    "lat": 12.9306711,
    "lng": 77.624661,
    "name": "16th Main Road / 7th Cross Road"
  },
  {
    "id": "n240",
    "osmId": 309593965,
    "lat": 12.9314062,
    "lng": 77.6249075,
    "name": "16th Main Road / 7th B Cross Road"
  },
  {
    "id": "n241",
    "osmId": 308917360,
    "lat": 12.9317842,
    "lng": 77.6250332,
    "name": "16th Main Road / 7th C Cross Road"
  },
  {
    "id": "n242",
    "osmId": 308917419,
    "lat": 12.9342986,
    "lng": 77.6258773,
    "name": "16th B Road, 4th Block / 8th Main Road"
  },
  {
    "id": "n243",
    "osmId": 308917473,
    "lat": 12.9338545,
    "lng": 77.6257011,
    "name": "16th B Road, 4th Block / 16th B Main Road"
  },
  {
    "id": "n244",
    "osmId": 308917472,
    "lat": 12.9325782,
    "lng": 77.6252938,
    "name": "16th B Road, 4th Block End"
  },
  {
    "id": "n245",
    "osmId": 308917649,
    "lat": 12.934525,
    "lng": 77.6246163,
    "name": "6th B Main Road / 16th B Main Road"
  },
  {
    "id": "n246",
    "osmId": 308917653,
    "lat": 12.9324584,
    "lng": 77.6236833,
    "name": "6th B Main Road / 7th C Cross Road"
  },
  {
    "id": "n247",
    "osmId": 583466957,
    "lat": 12.9325211,
    "lng": 77.6235463,
    "name": "7th C Cross Road / 16th B Main Road"
  },
  {
    "id": "n248",
    "osmId": 308918175,
    "lat": 12.9327112,
    "lng": 77.6231011,
    "name": "7th C Cross Road / Mahayogi Vemana Road"
  },
  {
    "id": "n249",
    "osmId": 308920454,
    "lat": 12.9341019,
    "lng": 77.6229504,
    "name": "17th A Main Road / 3rd Cross Road"
  },
  {
    "id": "n250",
    "osmId": 308920557,
    "lat": 12.9344668,
    "lng": 77.6231189,
    "name": "17th A Main Road / 4th Cross Road"
  },
  {
    "id": "n251",
    "osmId": 308920402,
    "lat": 12.9343212,
    "lng": 77.6205436,
    "name": "2nd Cross Road / 17th B Main Road"
  },
  {
    "id": "n252",
    "osmId": 308920367,
    "lat": 12.934273,
    "lng": 77.62264,
    "name": "2nd Cross Road / 3rd Cross Road"
  },
  {
    "id": "n253",
    "osmId": 308920473,
    "lat": 12.9356429,
    "lng": 77.6212025,
    "name": "17th B Main Road / 4th Cross Road"
  },
  {
    "id": "n254",
    "osmId": 308920404,
    "lat": 12.9352426,
    "lng": 77.621003,
    "name": "17th B Main Road / 3rd Cross Road"
  },
  {
    "id": "n255",
    "osmId": 304967127,
    "lat": 12.9355813,
    "lng": 77.6188492,
    "name": "2nd Cross Road / 17th F Main Road"
  },
  {
    "id": "n256",
    "osmId": 304956240,
    "lat": 12.9357818,
    "lng": 77.6171828,
    "name": "2nd Cross Road / 17th Main Road"
  },
  {
    "id": "n257",
    "osmId": 363177664,
    "lat": 12.9358253,
    "lng": 77.6167295,
    "name": "2nd Cross Road / 1st Main Road"
  },
  {
    "id": "n258",
    "osmId": 308921537,
    "lat": 12.9362825,
    "lng": 77.6167973,
    "name": "2nd Main Road / 1st Main Road"
  },
  {
    "id": "n259",
    "osmId": 2472183067,
    "lat": 12.9439836,
    "lng": 77.6088619,
    "name": "Bazaar Street End"
  },
  {
    "id": "n260",
    "osmId": 5389468678,
    "lat": 12.9439895,
    "lng": 77.6086743,
    "name": "Bazaar Street / 2nd Cross Road"
  },
  {
    "id": "n261",
    "osmId": 11868224434,
    "lat": 12.9440257,
    "lng": 77.6079184,
    "name": "Bazaar Street End"
  },
  {
    "id": "n262",
    "osmId": 17327139,
    "lat": 12.9349653,
    "lng": 77.6240716,
    "name": "7th Cross Road / Mahayogi Vemana Road"
  },
  {
    "id": "n263",
    "osmId": 309593057,
    "lat": 12.9352343,
    "lng": 77.6236984,
    "name": "7th Cross Road / 17th A Main Road"
  },
  {
    "id": "n264",
    "osmId": 309593064,
    "lat": 12.9355576,
    "lng": 77.6231521,
    "name": "7th Cross Road / 17th B Main Road"
  },
  {
    "id": "n265",
    "osmId": 363187111,
    "lat": 12.9356987,
    "lng": 77.622914,
    "name": "7th Cross Road / 17th C Main Road"
  },
  {
    "id": "n266",
    "osmId": 309593072,
    "lat": 12.9359004,
    "lng": 77.62259,
    "name": "7th Cross Road / 17 D Main Road"
  },
  {
    "id": "n267",
    "osmId": 309592711,
    "lat": 12.9361069,
    "lng": 77.6222582,
    "name": "7th Cross Road / 17th E Main Road"
  },
  {
    "id": "n268",
    "osmId": 309592832,
    "lat": 12.9361127,
    "lng": 77.6254105,
    "name": "6th Cross Road / Mahayogi Vemana Road"
  },
  {
    "id": "n269",
    "osmId": 309593063,
    "lat": 12.9364402,
    "lng": 77.6251252,
    "name": "6th Cross Road / 17th A Main Road"
  },
  {
    "id": "n270",
    "osmId": 5389451392,
    "lat": 12.9367136,
    "lng": 77.6249039,
    "name": "6th Cross Road / 17th A Main Road"
  },
  {
    "id": "n271",
    "osmId": 309593068,
    "lat": 12.9371854,
    "lng": 77.6245262,
    "name": "6th Cross Road / 17th B Main Road"
  },
  {
    "id": "n272",
    "osmId": 363187401,
    "lat": 12.9373679,
    "lng": 77.6243653,
    "name": "6th Cross Road / 17th C Main Road"
  },
  {
    "id": "n273",
    "osmId": 363190535,
    "lat": 12.937575,
    "lng": 77.6241826,
    "name": "6th Cross Road / 17th D Main Road"
  },
  {
    "id": "n274",
    "osmId": 309593074,
    "lat": 12.9376443,
    "lng": 77.6241215,
    "name": "6th Cross Road / 17 D Main Road"
  },
  {
    "id": "n275",
    "osmId": 309592878,
    "lat": 12.9379837,
    "lng": 77.6238238,
    "name": "6th Cross Road / 17th E Main Road"
  },
  {
    "id": "n276",
    "osmId": 309593172,
    "lat": 12.9383089,
    "lng": 77.6235423,
    "name": "6th Cross Road / 17th F Main Road"
  },
  {
    "id": "n277",
    "osmId": 309593030,
    "lat": 12.9397032,
    "lng": 77.62229,
    "name": "6th Cross Road / 18th Main Road"
  },
  {
    "id": "n278",
    "osmId": 309593119,
    "lat": 12.9375973,
    "lng": 77.6234995,
    "name": "17th E Main Road / 5th Cross Road"
  },
  {
    "id": "n279",
    "osmId": 309593115,
    "lat": 12.9369318,
    "lng": 77.6229311,
    "name": "17th E Main Road / 6th Cross Road"
  },
  {
    "id": "n280",
    "osmId": 61746220,
    "lat": 12.9412556,
    "lng": 77.6241534,
    "name": "18th Main Road / Srinivagilu Main Road"
  },
  {
    "id": "n281",
    "osmId": 1468540687,
    "lat": 12.941206,
    "lng": 77.624091,
    "name": "18th Main Road / Srinivagilu Main Road"
  },
  {
    "id": "n282",
    "osmId": 309593259,
    "lat": 12.9409227,
    "lng": 77.623776,
    "name": "18th Main Road"
  },
  {
    "id": "n283",
    "osmId": 309593254,
    "lat": 12.940177,
    "lng": 77.6228174,
    "name": "18th Main Road / 6th Cross Road"
  },
  {
    "id": "n284",
    "osmId": 309593120,
    "lat": 12.9392817,
    "lng": 77.6218499,
    "name": "18th Main Road / 5th Cross Road"
  },
  {
    "id": "n285",
    "osmId": 309593252,
    "lat": 12.9391113,
    "lng": 77.6216991,
    "name": "18th Main Road / 5th Cross Road"
  },
  {
    "id": "n286",
    "osmId": 309593050,
    "lat": 12.9388276,
    "lng": 77.621448,
    "name": "18th Main Road / 4th Cross Road"
  },
  {
    "id": "n287",
    "osmId": 663102275,
    "lat": 12.9382569,
    "lng": 77.6211409,
    "name": "18th Main Road / 3rd Cross Road"
  },
  {
    "id": "n288",
    "osmId": 309593216,
    "lat": 12.937807,
    "lng": 77.6208988,
    "name": "18th Main Road / 3rd Cross Road"
  },
  {
    "id": "n289",
    "osmId": 309593212,
    "lat": 12.9374776,
    "lng": 77.6207191,
    "name": "18th Main Road / 2nd Cross Road"
  },
  {
    "id": "n290",
    "osmId": 309593121,
    "lat": 12.9372336,
    "lng": 77.6205901,
    "name": "18th Main Road / 1st Cross Road"
  },
  {
    "id": "n291",
    "osmId": 309593188,
    "lat": 12.9371374,
    "lng": 77.6205383,
    "name": "18th Main Road / 1st Cross Road"
  },
  {
    "id": "n292",
    "osmId": 363189765,
    "lat": 12.9367372,
    "lng": 77.6254756,
    "name": "17th A Main Road / 6th E Cross Road"
  },
  {
    "id": "n293",
    "osmId": 363189766,
    "lat": 12.9371595,
    "lng": 77.6259883,
    "name": "17th A Main Road / 6th Cross Road"
  },
  {
    "id": "n294",
    "osmId": 363191422,
    "lat": 12.9373971,
    "lng": 77.6262661,
    "name": "17th A Main Road / 6th G Cross Road"
  },
  {
    "id": "n295",
    "osmId": 3740957803,
    "lat": 12.9376582,
    "lng": 77.6265696,
    "name": "17th A Main Road / Srinivagilu Main Road"
  },
  {
    "id": "n296",
    "osmId": 309593073,
    "lat": 12.9367112,
    "lng": 77.6232676,
    "name": "17 D Main Road / 6th Cross Road"
  },
  {
    "id": "n297",
    "osmId": 309593123,
    "lat": 12.9389476,
    "lng": 77.6222253,
    "name": "5th Cross Road / 17th H Main Road"
  },
  {
    "id": "n298",
    "osmId": 309593122,
    "lat": 12.9369132,
    "lng": 77.6211654,
    "name": "1st Cross Road / 17th H Main Road"
  },
  {
    "id": "n299",
    "osmId": 663102274,
    "lat": 12.9379766,
    "lng": 77.6217396,
    "name": "17th H Main Road / 3rd Cross Road"
  },
  {
    "id": "n300",
    "osmId": 309593189,
    "lat": 12.9378339,
    "lng": 77.6193848,
    "name": "19th Main Road / 1st Cross Road"
  },
  {
    "id": "n301",
    "osmId": 309593213,
    "lat": 12.9381699,
    "lng": 77.61957,
    "name": "19th Main Road / 2nd Cross Road"
  },
  {
    "id": "n302",
    "osmId": 309593218,
    "lat": 12.9384889,
    "lng": 77.6197579,
    "name": "19th Main Road / 3rd Cross Road"
  },
  {
    "id": "n303",
    "osmId": 309593160,
    "lat": 12.9396055,
    "lng": 77.6204267,
    "name": "19th Main Road / 4th Cross Road"
  },
  {
    "id": "n304",
    "osmId": 309593253,
    "lat": 12.9400233,
    "lng": 77.6207688,
    "name": "19th Main Road / 5th Cross Road"
  },
  {
    "id": "n305",
    "osmId": 309593162,
    "lat": 12.9410855,
    "lng": 77.6218654,
    "name": "19th Main Road / 6th Cross Road"
  },
  {
    "id": "n306",
    "osmId": 309593163,
    "lat": 12.9418575,
    "lng": 77.6228386,
    "name": "19th Main Road / 18th Main Road"
  },
  {
    "id": "n307",
    "osmId": 309593175,
    "lat": 12.9385432,
    "lng": 77.6238341,
    "name": "17th F Main Road / 6th C Cross Road"
  },
  {
    "id": "n308",
    "osmId": 309593297,
    "lat": 12.9395944,
    "lng": 77.6251154,
    "name": "17th F Main Road / 6th D Cross Road"
  },
  {
    "id": "n309",
    "osmId": 11493846395,
    "lat": 12.9398501,
    "lng": 77.6253654,
    "name": "17th F Main Road / Srinivagilu Main Road"
  },
  {
    "id": "n310",
    "osmId": 309593346,
    "lat": 12.9387785,
    "lng": 77.6236225,
    "name": "6th C Cross Road / 17th F1 Main Road"
  },
  {
    "id": "n311",
    "osmId": 309593339,
    "lat": 12.9389913,
    "lng": 77.6234421,
    "name": "6th C Cross Road / 17th F2 Main Road"
  },
  {
    "id": "n312",
    "osmId": 309593333,
    "lat": 12.9392302,
    "lng": 77.6232332,
    "name": "6th C Cross Road / 17th F3 Main Road"
  },
  {
    "id": "n313",
    "osmId": 3379605044,
    "lat": 12.9394716,
    "lng": 77.622999,
    "name": "6th C Cross Road / 17th F4 Main Rd"
  },
  {
    "id": "n314",
    "osmId": 309593180,
    "lat": 12.9396212,
    "lng": 77.6228577,
    "name": "6th C Cross Road / 17th G Main Road"
  },
  {
    "id": "n315",
    "osmId": 309593250,
    "lat": 12.9380792,
    "lng": 77.6204433,
    "name": "3rd Cross Road / 18 A Main Road"
  },
  {
    "id": "n316",
    "osmId": 309593243,
    "lat": 12.9382697,
    "lng": 77.6201246,
    "name": "3rd Cross Road / 18 B Main Road"
  },
  {
    "id": "n317",
    "osmId": 309593251,
    "lat": 12.9391027,
    "lng": 77.6210868,
    "name": "4th Cross Road / 18 A Main Road"
  },
  {
    "id": "n318",
    "osmId": 309593245,
    "lat": 12.9393562,
    "lng": 77.6207541,
    "name": "4th Cross Road / 18 B Main Road"
  },
  {
    "id": "n319",
    "osmId": 309593271,
    "lat": 12.939443,
    "lng": 77.6213505,
    "name": "5th Cross Road / 18A Main Road"
  },
  {
    "id": "n320",
    "osmId": 309593262,
    "lat": 12.9397294,
    "lng": 77.6210181,
    "name": "5th Cross Road / 18D Main Road"
  },
  {
    "id": "n321",
    "osmId": 3399067464,
    "lat": 12.9404644,
    "lng": 77.6202825,
    "name": "5th Cross Road / 80 Feet Road"
  },
  {
    "id": "n322",
    "osmId": 309593401,
    "lat": 12.9404185,
    "lng": 77.6225654,
    "name": "6th Cross Road / 18th E Main Road"
  },
  {
    "id": "n323",
    "osmId": 309593283,
    "lat": 12.9405263,
    "lng": 77.6224529,
    "name": "6th Cross Road / 18A Main Road"
  },
  {
    "id": "n324",
    "osmId": 309593399,
    "lat": 12.9406341,
    "lng": 77.6223403,
    "name": "6th Cross Road / 18th F Main Road"
  },
  {
    "id": "n325",
    "osmId": 309593264,
    "lat": 12.9408041,
    "lng": 77.6221629,
    "name": "6th Cross Road / 18D Main Road"
  },
  {
    "id": "n326",
    "osmId": 309593397,
    "lat": 12.9408456,
    "lng": 77.6221196,
    "name": "6th Cross Road / 18G Main Road"
  },
  {
    "id": "n327",
    "osmId": 309593261,
    "lat": 12.942244,
    "lng": 77.6224302,
    "name": "18th Main Road / 80 Feet Road"
  },
  {
    "id": "n328",
    "osmId": 309593398,
    "lat": 12.9416303,
    "lng": 77.6230642,
    "name": "18th Main Road / 18G Main Road"
  },
  {
    "id": "n329",
    "osmId": 309593400,
    "lat": 12.9414394,
    "lng": 77.6232761,
    "name": "18th Main Road / 18th F Main Road"
  },
  {
    "id": "n330",
    "osmId": 309593414,
    "lat": 12.9412303,
    "lng": 77.6235081,
    "name": "18th Main Road / 18th E Main Road"
  },
  {
    "id": "n331",
    "osmId": 309593348,
    "lat": 12.9398248,
    "lng": 77.6248832,
    "name": "6th D Cross Road / 17th F1 Main Road"
  },
  {
    "id": "n332",
    "osmId": 309593345,
    "lat": 12.9400232,
    "lng": 77.6246832,
    "name": "6th D Cross Road / 17th F2 Main Road"
  },
  {
    "id": "n333",
    "osmId": 309593337,
    "lat": 12.9402638,
    "lng": 77.6244408,
    "name": "6th D Cross Road / 17th F3 Main Road"
  },
  {
    "id": "n334",
    "osmId": 3379605045,
    "lat": 12.940457,
    "lng": 77.6242461,
    "name": "6th D Cross Road / 17th F4 Main Rd"
  },
  {
    "id": "n335",
    "osmId": 309593316,
    "lat": 12.9406204,
    "lng": 77.6240784,
    "name": "6th D Cross Road / 17th G Main Road"
  },
  {
    "id": "n336",
    "osmId": 3740957812,
    "lat": 12.9409012,
    "lng": 77.624399,
    "name": "17th G Main Road / Srinivagilu Main Road"
  },
  {
    "id": "n337",
    "osmId": 3740957813,
    "lat": 12.9409526,
    "lng": 77.624452,
    "name": "17th G Main Road / Srinivagilu Main Road"
  },
  {
    "id": "n338",
    "osmId": 309593639,
    "lat": 12.9370263,
    "lng": 77.6129243,
    "name": "2nd Cross Road"
  },
  {
    "id": "n339",
    "osmId": 309593726,
    "lat": 12.9373272,
    "lng": 77.6115478,
    "name": "5th Cross Rd / 2nd Cross Road"
  },
  {
    "id": "n340",
    "osmId": 309593719,
    "lat": 12.937536,
    "lng": 77.6115913,
    "name": "5th Cross Rd / 3rd Cross Road"
  },
  {
    "id": "n341",
    "osmId": 309593713,
    "lat": 12.9377567,
    "lng": 77.6116369,
    "name": "5th Cross Rd / 4th Cross Road"
  },
  {
    "id": "n342",
    "osmId": 309593714,
    "lat": 12.9380269,
    "lng": 77.6116888,
    "name": "5th Cross Rd / 5th Cross Road"
  },
  {
    "id": "n343",
    "osmId": 309593718,
    "lat": 12.937555,
    "lng": 77.6126387,
    "name": "4th Cross Road / 1st Main Road"
  },
  {
    "id": "n344",
    "osmId": 309593725,
    "lat": 12.9373185,
    "lng": 77.6125862,
    "name": "3rd Cross Road End"
  },
  {
    "id": "n345",
    "osmId": 309593849,
    "lat": 12.9313022,
    "lng": 77.6230678,
    "name": "16th B Main Road / 7th Cross Road"
  },
  {
    "id": "n346",
    "osmId": 309593854,
    "lat": 12.9317961,
    "lng": 77.6232567,
    "name": "16th B Main Road / 7th A Cross Road"
  },
  {
    "id": "n347",
    "osmId": 309593901,
    "lat": 12.9320762,
    "lng": 77.6233639,
    "name": "16th B Main Road / 7th B Cross Road"
  },
  {
    "id": "n348",
    "osmId": 2228517315,
    "lat": 12.9308518,
    "lng": 77.6241866,
    "name": "7th A Cross Road / 7th Cross Road"
  },
  {
    "id": "n349",
    "osmId": 363170806,
    "lat": 12.9377084,
    "lng": 77.6126727,
    "name": "5th Cross Road End"
  },
  {
    "id": "n350",
    "osmId": 363182474,
    "lat": 12.9349521,
    "lng": 77.6186757,
    "name": "17th E Main Road / 17th F Main Road"
  },
  {
    "id": "n351",
    "osmId": 12518058757,
    "lat": 12.93499,
    "lng": 77.6197969,
    "name": "17th E Main Road / 2nd B Cross Road"
  },
  {
    "id": "n352",
    "osmId": 363182695,
    "lat": 12.9349782,
    "lng": 77.6198336,
    "name": "2nd B Cross Road End"
  },
  {
    "id": "n353",
    "osmId": 363190994,
    "lat": 12.9379093,
    "lng": 77.6245649,
    "name": "17th D Main Road / 6th E Cross Road"
  },
  {
    "id": "n354",
    "osmId": 363191139,
    "lat": 12.9383451,
    "lng": 77.6250695,
    "name": "17th D Main Road / 6th Cross Road"
  },
  {
    "id": "n355",
    "osmId": 363191257,
    "lat": 12.9385771,
    "lng": 77.625346,
    "name": "17th D Main Road / 6th G Cross Road"
  },
  {
    "id": "n356",
    "osmId": 3145158634,
    "lat": 12.9389451,
    "lng": 77.6257855,
    "name": "17th D Main Road / Srinivagilu Main Road"
  },
  {
    "id": "n357",
    "osmId": 363191707,
    "lat": 12.9376068,
    "lng": 77.6247999,
    "name": "6th E Cross Road / 17th A3 Main Road"
  },
  {
    "id": "n358",
    "osmId": 363191628,
    "lat": 12.9373022,
    "lng": 77.6250277,
    "name": "6th E Cross Road / 17th A2 Main Road"
  },
  {
    "id": "n359",
    "osmId": 363191551,
    "lat": 12.9370676,
    "lng": 77.6252191,
    "name": "6th E Cross Road / 17th A1 Main Road"
  },
  {
    "id": "n360",
    "osmId": 363191726,
    "lat": 12.9379988,
    "lng": 77.6253307,
    "name": "6th Cross Road / 17th A3 Main Road"
  },
  {
    "id": "n361",
    "osmId": 363191639,
    "lat": 12.9377224,
    "lng": 77.6255393,
    "name": "6th Cross Road / 17th A2 Main Road"
  },
  {
    "id": "n362",
    "osmId": 363191623,
    "lat": 12.9374894,
    "lng": 77.6257151,
    "name": "6th Cross Road / 17th A1 Main Road"
  },
  {
    "id": "n363",
    "osmId": 304956059,
    "lat": 12.9363661,
    "lng": 77.6172596,
    "name": "1st B Main Road / 80 Feet Road"
  },
  {
    "id": "n364",
    "osmId": 363767229,
    "lat": 12.9391826,
    "lng": 77.6180061,
    "name": "1st B Main Road / 1st A Cross Road"
  },
  {
    "id": "n365",
    "osmId": 363232723,
    "lat": 12.9394558,
    "lng": 77.6180511,
    "name": "1st B Main Road / 1st Cross Road"
  },
  {
    "id": "n366",
    "osmId": 363232724,
    "lat": 12.9397413,
    "lng": 77.6181071,
    "name": "1st B Main Road / 1st A Cross Road"
  },
  {
    "id": "n367",
    "osmId": 363773924,
    "lat": 12.9400848,
    "lng": 77.6181763,
    "name": "1st B Main Road / 1st B Cross Road"
  },
  {
    "id": "n368",
    "osmId": 2228165461,
    "lat": 12.9401391,
    "lng": 77.6181908,
    "name": "1st B Main Road / 1st B Cross Road"
  },
  {
    "id": "n369",
    "osmId": 11140936034,
    "lat": 12.9404564,
    "lng": 77.6182764,
    "name": "1st B Main Road"
  },
  {
    "id": "n370",
    "osmId": 363774976,
    "lat": 12.9406681,
    "lng": 77.6183347,
    "name": "1st B Main Road / 1 C Cross Road"
  },
  {
    "id": "n371",
    "osmId": 363232725,
    "lat": 12.9409456,
    "lng": 77.6184401,
    "name": "1st B Main Road / Adugodi Main Rd"
  },
  {
    "id": "n372",
    "osmId": 363762637,
    "lat": 12.9331357,
    "lng": 77.6202045,
    "name": "1st Cross Road End"
  },
  {
    "id": "n373",
    "osmId": 363762563,
    "lat": 12.9331704,
    "lng": 77.6225624,
    "name": "1st Cross Road End"
  },
  {
    "id": "n374",
    "osmId": 363766230,
    "lat": 12.9369838,
    "lng": 77.6179023,
    "name": "20th A Main Road End"
  },
  {
    "id": "n375",
    "osmId": 363766357,
    "lat": 12.9388337,
    "lng": 77.6183733,
    "name": "20th A Main Road End"
  },
  {
    "id": "n376",
    "osmId": 363767205,
    "lat": 12.9388625,
    "lng": 77.6190788,
    "name": "1st A Cross Road / 80 Feet Road"
  },
  {
    "id": "n377",
    "osmId": 6196951260,
    "lat": 12.9390917,
    "lng": 77.6192822,
    "name": "1st Cross Road / 80 Feet Road"
  },
  {
    "id": "n378",
    "osmId": 301350889,
    "lat": 12.9391224,
    "lng": 77.6192271,
    "name": "1st Cross Road / 80 Feet Road"
  },
  {
    "id": "n379",
    "osmId": 363770946,
    "lat": 12.9392471,
    "lng": 77.6187416,
    "name": "1st Cross Road / 1st Main Road"
  },
  {
    "id": "n380",
    "osmId": 363771181,
    "lat": 12.9393434,
    "lng": 77.6184436,
    "name": "1st Cross Road / 1st Main Road"
  },
  {
    "id": "n381",
    "osmId": 363768158,
    "lat": 12.9398055,
    "lng": 77.6166545,
    "name": "1st Cross Road / 2nd Main Road"
  },
  {
    "id": "n382",
    "osmId": 363232726,
    "lat": 12.941311,
    "lng": 77.6187042,
    "name": "Basavanna Temple Road / Adugodi Main Rd"
  },
  {
    "id": "n383",
    "osmId": 2228165491,
    "lat": 12.9415455,
    "lng": 77.6190014,
    "name": "Basavanna Temple Road / 3rd Cross Road"
  },
  {
    "id": "n384",
    "osmId": 363232731,
    "lat": 12.9421992,
    "lng": 77.6196605,
    "name": "Basavanna Temple Road / 2nd Cross Road"
  },
  {
    "id": "n385",
    "osmId": 672579830,
    "lat": 12.9422624,
    "lng": 77.6196952,
    "name": "Basavanna Temple Road / 2nd C Main Road"
  },
  {
    "id": "n386",
    "osmId": 363232735,
    "lat": 12.9431513,
    "lng": 77.6193994,
    "name": "Basavanna Temple Road / Lakshmi Devi Temple Road"
  },
  {
    "id": "n387",
    "osmId": 348037010,
    "lat": 12.941714,
    "lng": 77.6173602,
    "name": "1st F Cross Road End"
  },
  {
    "id": "n388",
    "osmId": 348037012,
    "lat": 12.9417737,
    "lng": 77.6161969,
    "name": "1st F Cross Road / Koramangala Road"
  },
  {
    "id": "n389",
    "osmId": 363771007,
    "lat": 12.940746,
    "lng": 77.6197772,
    "name": "1st Main Road End"
  },
  {
    "id": "n390",
    "osmId": 2228165460,
    "lat": 12.9399202,
    "lng": 77.6188159,
    "name": "1st Main Road / 1st B Cross Road"
  },
  {
    "id": "n391",
    "osmId": 363771377,
    "lat": 12.9409076,
    "lng": 77.6194783,
    "name": "1st Main Road End"
  },
  {
    "id": "n392",
    "osmId": 363773217,
    "lat": 12.9407688,
    "lng": 77.6164676,
    "name": "1C Cross Road / 1st E Main Road"
  },
  {
    "id": "n393",
    "osmId": 363773301,
    "lat": 12.9407518,
    "lng": 77.6169827,
    "name": "1C Cross Road / 2nd Main Road"
  },
  {
    "id": "n394",
    "osmId": 363773220,
    "lat": 12.940752,
    "lng": 77.6175576,
    "name": "1C Cross Road / 1st C Main Road"
  },
  {
    "id": "n395",
    "osmId": 363773897,
    "lat": 12.940381,
    "lng": 77.6168546,
    "name": "2nd Main Road / 1st B Cross Road"
  },
  {
    "id": "n396",
    "osmId": 363773727,
    "lat": 12.9400926,
    "lng": 77.616755,
    "name": "2nd Main Road / 1st A Cross Road"
  },
  {
    "id": "n397",
    "osmId": 363773660,
    "lat": 12.9396058,
    "lng": 77.6165747,
    "name": "2nd Main Road End"
  },
  {
    "id": "n398",
    "osmId": 363774618,
    "lat": 12.94025,
    "lng": 77.6174394,
    "name": "1st B Cross Road / 1st C Main Road"
  },
  {
    "id": "n399",
    "osmId": 363769453,
    "lat": 12.9410866,
    "lng": 77.6176177,
    "name": "1st C Main Road End"
  },
  {
    "id": "n400",
    "osmId": 363775238,
    "lat": 12.94086,
    "lng": 77.6175782,
    "name": "1st C Main Road / 1 C Cross Road"
  },
  {
    "id": "n401",
    "osmId": 363775655,
    "lat": 12.9398402,
    "lng": 77.6157895,
    "name": "2nd C Main Road End"
  },
  {
    "id": "n402",
    "osmId": 363786755,
    "lat": 12.9399412,
    "lng": 77.615822,
    "name": "2nd C Main Road / 2nd H Main Road"
  },
  {
    "id": "n403",
    "osmId": 363775656,
    "lat": 12.9411452,
    "lng": 77.6162101,
    "name": "2nd C Main Road End"
  },
  {
    "id": "n404",
    "osmId": 363775666,
    "lat": 12.9414686,
    "lng": 77.6162133,
    "name": "1st Cross Road End"
  },
  {
    "id": "n405",
    "osmId": 363775721,
    "lat": 12.9413792,
    "lng": 77.6173382,
    "name": "1st Cross Road End"
  },
  {
    "id": "n406",
    "osmId": 363776034,
    "lat": 12.9411192,
    "lng": 77.616554,
    "name": "1st E Main Road End"
  },
  {
    "id": "n407",
    "osmId": 363776350,
    "lat": 12.9397231,
    "lng": 77.6161328,
    "name": "1st E Main Road End"
  },
  {
    "id": "n408",
    "osmId": 3740957823,
    "lat": 12.9453304,
    "lng": 77.6192198,
    "name": "Main Road / Srinivagilu Main Road"
  },
  {
    "id": "n409",
    "osmId": 363232738,
    "lat": 12.9434608,
    "lng": 77.6187386,
    "name": "Main Road / Lakshmi Devi Temple Road"
  },
  {
    "id": "n410",
    "osmId": 348037013,
    "lat": 12.9417977,
    "lng": 77.6159354,
    "name": "2nd D Main Road / 2nd E Main Road"
  },
  {
    "id": "n411",
    "osmId": 363781192,
    "lat": 12.9402809,
    "lng": 77.6156819,
    "name": "2nd D Main Road End"
  },
  {
    "id": "n412",
    "osmId": 363782253,
    "lat": 12.9408059,
    "lng": 77.6153385,
    "name": "2nd E Main Road End"
  },
  {
    "id": "n413",
    "osmId": 348036257,
    "lat": 12.9418539,
    "lng": 77.6156795,
    "name": "2nd F Main Road / Koramangala Road"
  },
  {
    "id": "n414",
    "osmId": 363783117,
    "lat": 12.9407515,
    "lng": 77.6150842,
    "name": "2nd F Main Road End"
  },
  {
    "id": "n415",
    "osmId": 363786354,
    "lat": 12.9419446,
    "lng": 77.6155167,
    "name": "2nd G Main Road / Koramangala Road"
  },
  {
    "id": "n416",
    "osmId": 363786750,
    "lat": 12.9408175,
    "lng": 77.6148352,
    "name": "2nd G Main Road / 2nd H Main Road"
  },
  {
    "id": "n417",
    "osmId": 6528479932,
    "lat": 12.9421955,
    "lng": 77.6150153,
    "name": "2nd H Main Road / Koramangala Road"
  },
  {
    "id": "n418",
    "osmId": 6528479937,
    "lat": 12.9420867,
    "lng": 77.6152627,
    "name": "2nd H Main Road / Koramangala Road"
  },
  {
    "id": "n419",
    "osmId": 3872381594,
    "lat": 12.9416434,
    "lng": 77.615035,
    "name": "2nd H Main Road / 2nd Cross Road"
  },
  {
    "id": "n420",
    "osmId": 3872381591,
    "lat": 12.9413527,
    "lng": 77.6148643,
    "name": "2nd H Main Road / 3rd Cross Road"
  },
  {
    "id": "n421",
    "osmId": 363789149,
    "lat": 12.9433034,
    "lng": 77.6161341,
    "name": "2nd C Main Road End"
  },
  {
    "id": "n422",
    "osmId": 672579817,
    "lat": 12.9429578,
    "lng": 77.61788,
    "name": "2nd C Main Road End"
  },
  {
    "id": "n423",
    "osmId": 363232741,
    "lat": 12.9435088,
    "lng": 77.6178141,
    "name": "Lakshmi Devi Temple Road"
  },
  {
    "id": "n424",
    "osmId": 363791478,
    "lat": 12.9441315,
    "lng": 77.616562,
    "name": "Lakshmi Devi Temple Road / 7th Main Road"
  },
  {
    "id": "n425",
    "osmId": 363788414,
    "lat": 12.9437213,
    "lng": 77.6161192,
    "name": "2nd D Main Road / 7th Main Road"
  },
  {
    "id": "n426",
    "osmId": 348037007,
    "lat": 12.9434399,
    "lng": 77.6175276,
    "name": "2nd D Main Road End"
  },
  {
    "id": "n427",
    "osmId": 363795803,
    "lat": 12.9414198,
    "lng": 77.6212361,
    "name": "2nd Cross Road / 80 Feet Road"
  },
  {
    "id": "n428",
    "osmId": 966877578,
    "lat": 12.9338791,
    "lng": 77.6128249,
    "name": "1st Main Road End"
  },
  {
    "id": "n429",
    "osmId": 1467991788,
    "lat": 12.9407836,
    "lng": 77.6291645,
    "name": "28th Cross Rd / 2nd Cross Road"
  },
  {
    "id": "n430",
    "osmId": 1469268706,
    "lat": 12.9407615,
    "lng": 77.6293966,
    "name": "28th Cross Rd / Pipeline Road"
  },
  {
    "id": "n431",
    "osmId": 3870649423,
    "lat": 12.9408034,
    "lng": 77.630633,
    "name": "28th Cross Rd / 3rd Cross Road"
  },
  {
    "id": "n432",
    "osmId": 3870649425,
    "lat": 12.9408329,
    "lng": 77.6310758,
    "name": "28th Cross Rd / 2nd Cross Road"
  },
  {
    "id": "n433",
    "osmId": 405150073,
    "lat": 12.9408636,
    "lng": 77.6315635,
    "name": "28th Cross Rd / Ejipura Main Road"
  },
  {
    "id": "n434",
    "osmId": 443224595,
    "lat": 12.9305785,
    "lng": 77.632458,
    "name": "5th Cross Road / 3rd Cross Road"
  },
  {
    "id": "n435",
    "osmId": 438069275,
    "lat": 12.9313707,
    "lng": 77.6320707,
    "name": "5th Cross Road / 7th A Main Road"
  },
  {
    "id": "n436",
    "osmId": 443224589,
    "lat": 12.9320437,
    "lng": 77.6312745,
    "name": "5th Cross Road / 8th B Main Road"
  },
  {
    "id": "n437",
    "osmId": 443224587,
    "lat": 12.9322951,
    "lng": 77.6310346,
    "name": "5th Cross Road / 9th Main Road"
  },
  {
    "id": "n438",
    "osmId": 443224586,
    "lat": 12.9324998,
    "lng": 77.6308393,
    "name": "5th Cross Road / 9th A Main"
  },
  {
    "id": "n439",
    "osmId": 438069279,
    "lat": 12.9334978,
    "lng": 77.6297802,
    "name": "5th Cross Road / 11th Main Road"
  },
  {
    "id": "n440",
    "osmId": 6065186796,
    "lat": 12.933655,
    "lng": 77.6295824,
    "name": "5th Cross Road / 11th A Main Road"
  },
  {
    "id": "n441",
    "osmId": 6065186792,
    "lat": 12.9338402,
    "lng": 77.6293304,
    "name": "5th Cross Road / 11th B Main Road"
  },
  {
    "id": "n442",
    "osmId": 443224551,
    "lat": 12.9341184,
    "lng": 77.6341032,
    "name": "8th Cross Road / 7th Main Road"
  },
  {
    "id": "n443",
    "osmId": 3145158641,
    "lat": 12.9343933,
    "lng": 77.6343045,
    "name": "8th Cross Road / 8th Main Road"
  },
  {
    "id": "n444",
    "osmId": 443224552,
    "lat": 12.9346027,
    "lng": 77.6344863,
    "name": "8th Cross Road / 9th Main Road"
  },
  {
    "id": "n445",
    "osmId": 443224554,
    "lat": 12.9348607,
    "lng": 77.6352226,
    "name": "8th Cross Road End"
  },
  {
    "id": "n446",
    "osmId": 7265835327,
    "lat": 12.9356104,
    "lng": 77.6349749,
    "name": "9th Main Road End"
  },
  {
    "id": "n447",
    "osmId": 443224558,
    "lat": 12.9354498,
    "lng": 77.6337722,
    "name": "9th Main Road / 6th Cross Road"
  },
  {
    "id": "n448",
    "osmId": 443224559,
    "lat": 12.9355367,
    "lng": 77.6332137,
    "name": "9th Main Road End"
  },
  {
    "id": "n449",
    "osmId": 3145158636,
    "lat": 12.9345347,
    "lng": 77.6336626,
    "name": "7th Main Road / 7th Cross Road"
  },
  {
    "id": "n450",
    "osmId": 3901976145,
    "lat": 12.9347532,
    "lng": 77.6334314,
    "name": "7th Main Road / 6th Cross Road"
  },
  {
    "id": "n451",
    "osmId": 443224563,
    "lat": 12.9351222,
    "lng": 77.6331463,
    "name": "7th Main Road End"
  },
  {
    "id": "n452",
    "osmId": 443224596,
    "lat": 12.9304601,
    "lng": 77.6315333,
    "name": "3rd Cross Road / 7th A Main Road"
  },
  {
    "id": "n453",
    "osmId": 443224590,
    "lat": 12.9308108,
    "lng": 77.6304357,
    "name": "3rd Cross Road / 8th B Main Road"
  },
  {
    "id": "n454",
    "osmId": 443224571,
    "lat": 12.9309597,
    "lng": 77.6301351,
    "name": "3rd Cross Road / 9th Main Road"
  },
  {
    "id": "n455",
    "osmId": 443224572,
    "lat": 12.9311787,
    "lng": 77.6299029,
    "name": "3rd Cross Road / 9th A Main"
  },
  {
    "id": "n456",
    "osmId": 443224578,
    "lat": 12.932653,
    "lng": 77.6290686,
    "name": "3rd Cross Road / 11th Main Road"
  },
  {
    "id": "n457",
    "osmId": 6065186790,
    "lat": 12.9333571,
    "lng": 77.6288317,
    "name": "4th Cross Road / 11th B Main Road"
  },
  {
    "id": "n458",
    "osmId": 6065186795,
    "lat": 12.9331351,
    "lng": 77.6290487,
    "name": "4th Cross Road / 11th A Main Road"
  },
  {
    "id": "n459",
    "osmId": 443224577,
    "lat": 12.9328796,
    "lng": 77.6292599,
    "name": "4th Cross Road / 11th Main Road"
  },
  {
    "id": "n460",
    "osmId": 443224583,
    "lat": 12.9331163,
    "lng": 77.6294746,
    "name": "11th Main Road / 4th A Cross Road"
  },
  {
    "id": "n461",
    "osmId": 443224584,
    "lat": 12.9332438,
    "lng": 77.6295726,
    "name": "11th Main Road / 4th B Cross Road"
  },
  {
    "id": "n462",
    "osmId": 3801688124,
    "lat": 12.9339015,
    "lng": 77.630151,
    "name": "11th Main Road / 80 Feet Road"
  },
  {
    "id": "n463",
    "osmId": 443224591,
    "lat": 12.9313378,
    "lng": 77.630779,
    "name": "4th A Cross Road / 8th B Main Road"
  },
  {
    "id": "n464",
    "osmId": 443224588,
    "lat": 12.9315085,
    "lng": 77.6304978,
    "name": "4th A Cross Road / 9th Main Road"
  },
  {
    "id": "n465",
    "osmId": 443224581,
    "lat": 12.931729,
    "lng": 77.6302753,
    "name": "4th A Cross Road / 9th A Main"
  },
  {
    "id": "n466",
    "osmId": 6528482736,
    "lat": 12.9447497,
    "lng": 77.6105612,
    "name": "2nd Cross Road End"
  },
  {
    "id": "n467",
    "osmId": 443252934,
    "lat": 12.9439598,
    "lng": 77.6101394,
    "name": "2nd Cross Road / Koramangala Road"
  },
  {
    "id": "n468",
    "osmId": 443252817,
    "lat": 12.9407605,
    "lng": 77.6080823,
    "name": "5th Cross Road End"
  },
  {
    "id": "n469",
    "osmId": 443252885,
    "lat": 12.9409573,
    "lng": 77.6087261,
    "name": "5th Cross Road / Hosur Road"
  },
  {
    "id": "n470",
    "osmId": 443252722,
    "lat": 12.9403422,
    "lng": 77.6090569,
    "name": "Main Road / Hosur Road"
  },
  {
    "id": "n471",
    "osmId": 443252729,
    "lat": 12.9384314,
    "lng": 77.6086925,
    "name": "Main Road / 1st Cross Road"
  },
  {
    "id": "n472",
    "osmId": 6141797366,
    "lat": 12.9366178,
    "lng": 77.6082647,
    "name": "Main Road / 2nd Cross Rd"
  },
  {
    "id": "n473",
    "osmId": 2017924114,
    "lat": 12.9359444,
    "lng": 77.6079118,
    "name": "Main Road / Doctor M H Marigowda Road"
  },
  {
    "id": "n474",
    "osmId": 443252889,
    "lat": 12.9410344,
    "lng": 77.6069978,
    "name": "3rd Cross Road End"
  },
  {
    "id": "n475",
    "osmId": 443252878,
    "lat": 12.9414837,
    "lng": 77.6084528,
    "name": "3rd Cross Road / Hosur Road"
  },
  {
    "id": "n476",
    "osmId": 443252820,
    "lat": 12.9420078,
    "lng": 77.6082097,
    "name": "2nd Cross Road / Hosur Road"
  },
  {
    "id": "n477",
    "osmId": 443252823,
    "lat": 12.941526,
    "lng": 77.6067606,
    "name": "2nd Cross Road End"
  },
  {
    "id": "n478",
    "osmId": 304771894,
    "lat": 12.9314922,
    "lng": 77.6226225,
    "name": "7th Cross Road / Mahayogi Vemana Road"
  },
  {
    "id": "n479",
    "osmId": 301348393,
    "lat": 12.9304478,
    "lng": 77.6268215,
    "name": "7th Cross Road / 13th Main Road"
  },
  {
    "id": "n480",
    "osmId": 7265565075,
    "lat": 12.93001,
    "lng": 77.6292344,
    "name": "7th Cross Road / 8th Main Road"
  },
  {
    "id": "n481",
    "osmId": 459782078,
    "lat": 12.9479602,
    "lng": 77.6179364,
    "name": "7th Main Road End"
  },
  {
    "id": "n482",
    "osmId": 956276595,
    "lat": 12.9453274,
    "lng": 77.6170695,
    "name": "7th Main Road / 3rd Cross Road"
  },
  {
    "id": "n483",
    "osmId": 2228225819,
    "lat": 12.9451658,
    "lng": 77.6170161,
    "name": "7th Main Road / 2nd Cross Road"
  },
  {
    "id": "n484",
    "osmId": 363791476,
    "lat": 12.9449787,
    "lng": 77.6169231,
    "name": "7th Main Road / 1st Cross Road"
  },
  {
    "id": "n485",
    "osmId": 6454877588,
    "lat": 12.937427,
    "lng": 77.622744,
    "name": "3rd Cross Road End"
  },
  {
    "id": "n486",
    "osmId": 669247545,
    "lat": 12.9464267,
    "lng": 77.6289604,
    "name": "Sri Rama Temple Road / Ejipura Main Road"
  },
  {
    "id": "n487",
    "osmId": 669247541,
    "lat": 12.9445928,
    "lng": 77.6288905,
    "name": "Sri Rama Temple Road / 21st Cross Road"
  },
  {
    "id": "n488",
    "osmId": 2327191406,
    "lat": 12.9434075,
    "lng": 77.6284627,
    "name": "Sri Rama Temple Road / 20th B Cross Road"
  },
  {
    "id": "n489",
    "osmId": 669247523,
    "lat": 12.9431204,
    "lng": 77.6284178,
    "name": "Sri Rama Temple Road / Pipeline Road"
  },
  {
    "id": "n490",
    "osmId": 3157767862,
    "lat": 12.9430497,
    "lng": 77.6283953,
    "name": "Sri Rama Temple Road / 20th C Cross Road"
  },
  {
    "id": "n491",
    "osmId": 669247521,
    "lat": 12.9426893,
    "lng": 77.6281987,
    "name": "Sri Rama Temple Road / 20D Cross Road"
  },
  {
    "id": "n492",
    "osmId": 966023241,
    "lat": 12.9424768,
    "lng": 77.6280923,
    "name": "Sri Rama Temple Road / 20F Cross Road"
  },
  {
    "id": "n493",
    "osmId": 3157767915,
    "lat": 12.9423737,
    "lng": 77.6280555,
    "name": "Sri Rama Temple Road / 20G Cross Road"
  },
  {
    "id": "n494",
    "osmId": 3157767888,
    "lat": 12.9420968,
    "lng": 77.6279918,
    "name": "Sri Rama Temple Road / 20H Cross Road"
  },
  {
    "id": "n495",
    "osmId": 2327191379,
    "lat": 12.9418184,
    "lng": 77.6279371,
    "name": "Sri Rama Temple Road / 20I Cross Road"
  },
  {
    "id": "n496",
    "osmId": 3157767883,
    "lat": 12.9415993,
    "lng": 77.6278974,
    "name": "Sri Rama Temple Road / 20J Cross Road"
  },
  {
    "id": "n497",
    "osmId": 669247516,
    "lat": 12.941126,
    "lng": 77.6278105,
    "name": "Sri Rama Temple Road End"
  },
  {
    "id": "n498",
    "osmId": 960532674,
    "lat": 12.9439372,
    "lng": 77.6197535,
    "name": "2nd Main Road"
  },
  {
    "id": "n499",
    "osmId": 960532678,
    "lat": 12.9444815,
    "lng": 77.6200017,
    "name": "2nd Main Road"
  },
  {
    "id": "n500",
    "osmId": 2327191229,
    "lat": 12.9422562,
    "lng": 77.6290093,
    "name": "20F Cross Road / Pipeline Road"
  },
  {
    "id": "n501",
    "osmId": 4533883485,
    "lat": 12.9246883,
    "lng": 77.6316508,
    "name": "7th C Main Road End"
  },
  {
    "id": "n502",
    "osmId": 956034560,
    "lat": 12.9261921,
    "lng": 77.6317161,
    "name": "7th C Main Road End"
  },
  {
    "id": "n503",
    "osmId": 2228225827,
    "lat": 12.9455293,
    "lng": 77.6166063,
    "name": "3rd Cross Road End"
  },
  {
    "id": "n504",
    "osmId": 2228225817,
    "lat": 12.9449667,
    "lng": 77.6179261,
    "name": "3rd Cross Road End"
  },
  {
    "id": "n505",
    "osmId": 12451306642,
    "lat": 12.934403,
    "lng": 77.6122579,
    "name": "Hosur Road / 80 Feet Road"
  },
  {
    "id": "n506",
    "osmId": 1070361761,
    "lat": 12.9346201,
    "lng": 77.6121427,
    "name": "Hosur Road"
  },
  {
    "id": "n507",
    "osmId": 443224634,
    "lat": 12.9489937,
    "lng": 77.6171906,
    "name": "7th Main Road End"
  },
  {
    "id": "n508",
    "osmId": 1272830640,
    "lat": 12.9353781,
    "lng": 77.6314311,
    "name": "1st Cross Road End"
  },
  {
    "id": "n509",
    "osmId": 305145662,
    "lat": 12.9348684,
    "lng": 77.6302023,
    "name": "1st Cross Road / 1st Main Road"
  },
  {
    "id": "n510",
    "osmId": 3558446067,
    "lat": 12.9347714,
    "lng": 77.6300679,
    "name": "1st Cross Road"
  },
  {
    "id": "n511",
    "osmId": 961798766,
    "lat": 12.938119,
    "lng": 77.6329292,
    "name": "7th Main Road / Srinivagilu Main Road"
  },
  {
    "id": "n512",
    "osmId": 10171465727,
    "lat": 12.9360938,
    "lng": 77.634513,
    "name": "7th Main Road"
  },
  {
    "id": "n513",
    "osmId": 574724923,
    "lat": 12.9272267,
    "lng": 77.620899,
    "name": "Mahayogi Vemana Road"
  },
  {
    "id": "n514",
    "osmId": 2700232506,
    "lat": 12.9253882,
    "lng": 77.6200089,
    "name": "Mahayogi Vemana Road / 17th Main Road"
  },
  {
    "id": "n515",
    "osmId": 7479071341,
    "lat": 12.9244848,
    "lng": 77.6180426,
    "name": "Mahayogi Vemana Road End"
  },
  {
    "id": "n516",
    "osmId": 1620344798,
    "lat": 12.9315406,
    "lng": 77.622498,
    "name": "Mahayogi Vemana Road / 7th Cross Road"
  },
  {
    "id": "n517",
    "osmId": 1274328906,
    "lat": 12.9353344,
    "lng": 77.6296896,
    "name": "Green Leaf Layout End"
  },
  {
    "id": "n518",
    "osmId": 260729389,
    "lat": 12.935128,
    "lng": 77.6290489,
    "name": "Green Leaf Layout / 80 Feet Road"
  },
  {
    "id": "n519",
    "osmId": 1278162347,
    "lat": 12.9252241,
    "lng": 77.6367015,
    "name": "1st Main Road / Sarjapura Road"
  },
  {
    "id": "n520",
    "osmId": 13415110849,
    "lat": 12.9224409,
    "lng": 77.6364925,
    "name": "1st Main Road End"
  },
  {
    "id": "n521",
    "osmId": 2941494384,
    "lat": 12.9282012,
    "lng": 77.6113254,
    "name": "5th Cross Road End"
  },
  {
    "id": "n522",
    "osmId": 2941494369,
    "lat": 12.925343,
    "lng": 77.6110359,
    "name": "5th Cross Road End"
  },
  {
    "id": "n523",
    "osmId": 1466891154,
    "lat": 12.9336431,
    "lng": 77.6093799,
    "name": "1st Cross Road End"
  },
  {
    "id": "n524",
    "osmId": 306590989,
    "lat": 12.9338956,
    "lng": 77.607329,
    "name": "1st Cross Road End"
  },
  {
    "id": "n525",
    "osmId": 1466906043,
    "lat": 12.9328018,
    "lng": 77.6094246,
    "name": "2nd Cross Road / 4th Cross Road"
  },
  {
    "id": "n526",
    "osmId": 1466907875,
    "lat": 12.9316474,
    "lng": 77.608984,
    "name": "8th Cross Road End"
  },
  {
    "id": "n527",
    "osmId": 3535867123,
    "lat": 12.9317458,
    "lng": 77.607359,
    "name": "8th Cross Road End"
  },
  {
    "id": "n528",
    "osmId": 1466909060,
    "lat": 12.9320193,
    "lng": 77.606636,
    "name": "7th Cross Road End"
  },
  {
    "id": "n529",
    "osmId": 1466909062,
    "lat": 12.9319826,
    "lng": 77.6083211,
    "name": "7th Cross Road End"
  },
  {
    "id": "n530",
    "osmId": 1466915315,
    "lat": 12.9333603,
    "lng": 77.60936,
    "name": "2nd Cross Road / 3rd Cross Road"
  },
  {
    "id": "n531",
    "osmId": 1466915318,
    "lat": 12.9335392,
    "lng": 77.6073167,
    "name": "2nd Cross Road End"
  },
  {
    "id": "n532",
    "osmId": 13752168982,
    "lat": 12.9327431,
    "lng": 77.6098256,
    "name": "4th Cross Road"
  },
  {
    "id": "n533",
    "osmId": 1466917234,
    "lat": 12.9328934,
    "lng": 77.6073276,
    "name": "4th Cross Road End"
  },
  {
    "id": "n534",
    "osmId": 1466919909,
    "lat": 12.9324982,
    "lng": 77.6066601,
    "name": "5th Cross Road End"
  },
  {
    "id": "n535",
    "osmId": 1466919915,
    "lat": 12.9323716,
    "lng": 77.6091426,
    "name": "5th Cross Road End"
  },
  {
    "id": "n536",
    "osmId": 1466920784,
    "lat": 12.9322213,
    "lng": 77.6066648,
    "name": "6th Cross Road End"
  },
  {
    "id": "n537",
    "osmId": 1466920788,
    "lat": 12.9320788,
    "lng": 77.6091047,
    "name": "6th Cross Road End"
  },
  {
    "id": "n538",
    "osmId": 1466927720,
    "lat": 12.9302265,
    "lng": 77.6082203,
    "name": "4th Main Road / 1st Main Road"
  },
  {
    "id": "n539",
    "osmId": 3537414364,
    "lat": 12.9299589,
    "lng": 77.6082051,
    "name": "4th Main Road End"
  },
  {
    "id": "n540",
    "osmId": 1466985682,
    "lat": 12.9288295,
    "lng": 77.6080765,
    "name": "3rd Cross Road / 4th Main Road"
  },
  {
    "id": "n541",
    "osmId": 1466985701,
    "lat": 12.9290434,
    "lng": 77.6065625,
    "name": "3rd Cross Road End"
  },
  {
    "id": "n542",
    "osmId": 1468106225,
    "lat": 12.9401749,
    "lng": 77.6291581,
    "name": "2nd Cross Road"
  },
  {
    "id": "n543",
    "osmId": 4533883479,
    "lat": 12.9249906,
    "lng": 77.6335475,
    "name": "Sarjapura Road / 80 Feet Road"
  },
  {
    "id": "n544",
    "osmId": 1469644231,
    "lat": 12.925004,
    "lng": 77.6336364,
    "name": "Sarjapura Road / 80 Feet Road"
  },
  {
    "id": "n545",
    "osmId": 1469644287,
    "lat": 12.9266897,
    "lng": 77.6389683,
    "name": "1st C Main Road"
  },
  {
    "id": "n546",
    "osmId": 1430679862,
    "lat": 12.9270606,
    "lng": 77.6383944,
    "name": "1st C Main Road / 1st B Main Road"
  },
  {
    "id": "n547",
    "osmId": 1472248456,
    "lat": 12.9260375,
    "lng": 77.6172816,
    "name": "Madiwala Underpass / Hosur Road"
  },
  {
    "id": "n548",
    "osmId": 1613146083,
    "lat": 12.9247467,
    "lng": 77.6180631,
    "name": "Madiwala Underpass End"
  },
  {
    "id": "n549",
    "osmId": 245613696,
    "lat": 12.9245641,
    "lng": 77.6179924,
    "name": "Mahayogi Vemana Road / Hosur Road"
  },
  {
    "id": "n550",
    "osmId": 11896408351,
    "lat": 12.9254987,
    "lng": 77.6199272,
    "name": "Mahayogi Vemana Road / 17th Main Road"
  },
  {
    "id": "n551",
    "osmId": 11896408350,
    "lat": 12.9256006,
    "lng": 77.6200541,
    "name": "Mahayogi Vemana Road / 17 A Main Road"
  },
  {
    "id": "n552",
    "osmId": 4761188837,
    "lat": 12.9275058,
    "lng": 77.6208789,
    "name": "Mahayogi Vemana Road / Sarjapura Road"
  },
  {
    "id": "n553",
    "osmId": 1723827217,
    "lat": 12.9315208,
    "lng": 77.61384,
    "name": "Dr. M H Marigowda Road / Hosur Road"
  },
  {
    "id": "n554",
    "osmId": 1473298162,
    "lat": 12.9262516,
    "lng": 77.6171742,
    "name": "17 A Main Road / Hosur Road"
  },
  {
    "id": "n555",
    "osmId": 12740817761,
    "lat": 12.9371937,
    "lng": 77.6270563,
    "name": "80 Feet Road"
  },
  {
    "id": "n556",
    "osmId": 1761893926,
    "lat": 12.9354848,
    "lng": 77.6287119,
    "name": "80 Feet Road / 1st Cross, Green Leaf Extension"
  },
  {
    "id": "n557",
    "osmId": 1761893917,
    "lat": 12.9348055,
    "lng": 77.6293659,
    "name": "80 Feet Road / 1st A Cross"
  },
  {
    "id": "n558",
    "osmId": 11493493810,
    "lat": 12.9344996,
    "lng": 77.6296526,
    "name": "80 Feet Road / 1st Cross Road"
  },
  {
    "id": "n559",
    "osmId": 11493493806,
    "lat": 12.9344595,
    "lng": 77.6296908,
    "name": "80 Feet Road / 1st Cross Road"
  },
  {
    "id": "n560",
    "osmId": 260729388,
    "lat": 12.9331391,
    "lng": 77.6310058,
    "name": "80 Feet Road / 10th Main Road"
  },
  {
    "id": "n561",
    "osmId": 260729385,
    "lat": 12.9300545,
    "lng": 77.6331602,
    "name": "80 Feet Road / 7th Main Road"
  },
  {
    "id": "n562",
    "osmId": 3870649402,
    "lat": 12.9390131,
    "lng": 77.6307889,
    "name": "Pipeline Road / 3rd Cross Road"
  },
  {
    "id": "n563",
    "osmId": 2327191275,
    "lat": 12.9391013,
    "lng": 77.6306221,
    "name": "Pipeline Road / 3rd Cross Road"
  },
  {
    "id": "n564",
    "osmId": 2327191286,
    "lat": 12.9395006,
    "lng": 77.6300862,
    "name": "Pipeline Road / 1st Cross Road"
  },
  {
    "id": "n565",
    "osmId": 1469268705,
    "lat": 12.9402107,
    "lng": 77.6295353,
    "name": "Pipeline Road / 2nd Cross Road"
  },
  {
    "id": "n566",
    "osmId": 2327191308,
    "lat": 12.9415794,
    "lng": 77.6292522,
    "name": "Pipeline Road / 20I Cross Road"
  },
  {
    "id": "n567",
    "osmId": 2327191311,
    "lat": 12.9417477,
    "lng": 77.6291931,
    "name": "Pipeline Road"
  },
  {
    "id": "n568",
    "osmId": 5076657796,
    "lat": 12.9332663,
    "lng": 77.6067261,
    "name": "3rd Cross Road End"
  },
  {
    "id": "n569",
    "osmId": 1607671489,
    "lat": 12.9268364,
    "lng": 77.6138391,
    "name": "2nd Cross Road End"
  },
  {
    "id": "n570",
    "osmId": 1607671480,
    "lat": 12.9265075,
    "lng": 77.6155953,
    "name": "2nd Cross Road / Maruthi Nagar Main Road"
  },
  {
    "id": "n571",
    "osmId": 1607671449,
    "lat": 12.92526,
    "lng": 77.6152364,
    "name": "1st Main Road / Maruthi Nagar Main Road"
  },
  {
    "id": "n572",
    "osmId": 3870459135,
    "lat": 12.9251337,
    "lng": 77.6166295,
    "name": "1st Main Road / 2nd Cross Road"
  },
  {
    "id": "n573",
    "osmId": 1607671450,
    "lat": 12.9253218,
    "lng": 77.6169465,
    "name": "1st Main Road"
  },
  {
    "id": "n574",
    "osmId": 1607671478,
    "lat": 12.9256807,
    "lng": 77.6126456,
    "name": "7th Cross Road End"
  },
  {
    "id": "n575",
    "osmId": 1607671447,
    "lat": 12.9251673,
    "lng": 77.6151961,
    "name": "7th Cross Road / Maruthi Nagar Main Road"
  },
  {
    "id": "n576",
    "osmId": 3145246992,
    "lat": 12.924915,
    "lng": 77.6103096,
    "name": "3rd Cross Road End"
  },
  {
    "id": "n577",
    "osmId": 1607671520,
    "lat": 12.9282139,
    "lng": 77.6106356,
    "name": "3rd Cross Road / 8th Main Road"
  },
  {
    "id": "n578",
    "osmId": 1607770229,
    "lat": 12.9278439,
    "lng": 77.6079681,
    "name": "2nd Cross road / 4th Main Road"
  },
  {
    "id": "n579",
    "osmId": 1607770199,
    "lat": 12.9275811,
    "lng": 77.6079517,
    "name": "4th Main Road"
  },
  {
    "id": "n580",
    "osmId": 1613146082,
    "lat": 12.9247095,
    "lng": 77.6179908,
    "name": "Madiwala Underpass End"
  },
  {
    "id": "n581",
    "osmId": 1837005173,
    "lat": 12.925979,
    "lng": 77.6171909,
    "name": "Madiwala Underpass / Hosur Road"
  },
  {
    "id": "n582",
    "osmId": 4761188838,
    "lat": 12.9275608,
    "lng": 77.6210315,
    "name": "Sarjapura Road / Mahayogi Vemana Road"
  },
  {
    "id": "n583",
    "osmId": 308915753,
    "lat": 12.9244971,
    "lng": 77.6282817,
    "name": "Sarjapura Road End"
  },
  {
    "id": "n584",
    "osmId": 1666061339,
    "lat": 12.9369879,
    "lng": 77.6306209,
    "name": "1st B Main Road End"
  },
  {
    "id": "n585",
    "osmId": 1666061333,
    "lat": 12.9364043,
    "lng": 77.6301232,
    "name": "1st B Main Road End"
  },
  {
    "id": "n586",
    "osmId": 11964724285,
    "lat": 12.9295715,
    "lng": 77.6151658,
    "name": "Hosur Road / Sarjapura Road"
  },
  {
    "id": "n587",
    "osmId": 1761893918,
    "lat": 12.9349406,
    "lng": 77.6297914,
    "name": "1st A Cross End"
  },
  {
    "id": "n588",
    "osmId": 1761893959,
    "lat": 12.9362777,
    "lng": 77.6293386,
    "name": "1st Cross, Green Leaf Extension End"
  },
  {
    "id": "n589",
    "osmId": 1770490841,
    "lat": 12.9342539,
    "lng": 77.6362309,
    "name": "Temole Trees Road,Cauvery Colony End"
  },
  {
    "id": "n590",
    "osmId": 1770490853,
    "lat": 12.9333772,
    "lng": 77.6356534,
    "name": "Temole Trees Road,Cauvery Colony End"
  },
  {
    "id": "n591",
    "osmId": 306850818,
    "lat": 12.9278594,
    "lng": 77.6160664,
    "name": "Hosur Road / Maruthi Nagar Main Road"
  },
  {
    "id": "n592",
    "osmId": 3302507661,
    "lat": 12.9284946,
    "lng": 77.6156751,
    "name": "Hosur Road"
  },
  {
    "id": "n593",
    "osmId": 2017924097,
    "lat": 12.9367299,
    "lng": 77.6047696,
    "name": "Doctor M H Marigowda Road End"
  },
  {
    "id": "n594",
    "osmId": 10091882014,
    "lat": 12.9349309,
    "lng": 77.6095392,
    "name": "Doctor M H Marigowda Road"
  },
  {
    "id": "n595",
    "osmId": 1070361707,
    "lat": 12.9342559,
    "lng": 77.6104312,
    "name": "Doctor M H Marigowda Road"
  },
  {
    "id": "n596",
    "osmId": 11306430808,
    "lat": 12.9316887,
    "lng": 77.6137504,
    "name": "Doctor M H Marigowda Road / Dr. M H Marigowda Road"
  },
  {
    "id": "n597",
    "osmId": 1837284746,
    "lat": 12.9387473,
    "lng": 77.6346476,
    "name": "Inner Ring Road"
  },
  {
    "id": "n598",
    "osmId": 12067366803,
    "lat": 12.9580829,
    "lng": 77.6413115,
    "name": "Inner Ring Road End"
  },
  {
    "id": "n599",
    "osmId": 3558446087,
    "lat": 12.9382356,
    "lng": 77.6286878,
    "name": "Inner Ring Road"
  },
  {
    "id": "n600",
    "osmId": 2192012625,
    "lat": 12.938179,
    "lng": 77.6285411,
    "name": "Inner Ring Road"
  },
  {
    "id": "n601",
    "osmId": 6017833813,
    "lat": 12.937249,
    "lng": 77.6270053,
    "name": "Inner Ring Road / Mahayogi Vemana Road"
  },
  {
    "id": "n602",
    "osmId": 2192012631,
    "lat": 12.9382733,
    "lng": 77.6285082,
    "name": "Inner Ring Road"
  },
  {
    "id": "n603",
    "osmId": 2192012628,
    "lat": 12.9383498,
    "lng": 77.6287044,
    "name": "Inner Ring Road / 1st Ashwini Street"
  },
  {
    "id": "n604",
    "osmId": 2227895719,
    "lat": 12.9410156,
    "lng": 77.6080097,
    "name": "4th Cross Road End"
  },
  {
    "id": "n605",
    "osmId": 2227895720,
    "lat": 12.941225,
    "lng": 77.6085838,
    "name": "4th Cross Road / Hosur Road"
  },
  {
    "id": "n606",
    "osmId": 2228165495,
    "lat": 12.9419379,
    "lng": 77.6136311,
    "name": "3rd A Main Road End"
  },
  {
    "id": "n607",
    "osmId": 2228165511,
    "lat": 12.9426959,
    "lng": 77.6139629,
    "name": "3rd A Main Road / Koramangala Road"
  },
  {
    "id": "n608",
    "osmId": 2228165513,
    "lat": 12.9427971,
    "lng": 77.6136318,
    "name": "3rd B Cross Road / Koramangala Road"
  },
  {
    "id": "n609",
    "osmId": 2228165499,
    "lat": 12.9420603,
    "lng": 77.6133594,
    "name": "3rd B Cross Road End"
  },
  {
    "id": "n610",
    "osmId": 2228165471,
    "lat": 12.9412707,
    "lng": 77.6210254,
    "name": "3rd Cross Road / 80 Feet Road"
  },
  {
    "id": "n611",
    "osmId": 2228165568,
    "lat": 12.944926,
    "lng": 77.6087252,
    "name": "2nd Cross Road End"
  },
  {
    "id": "n612",
    "osmId": 3740957822,
    "lat": 12.944716,
    "lng": 77.6201013,
    "name": "2nd Main Road / Srinivagilu Main Road"
  },
  {
    "id": "n613",
    "osmId": 960536085,
    "lat": 12.9421851,
    "lng": 77.6214784,
    "name": "8th Cross Road"
  },
  {
    "id": "n614",
    "osmId": 2228225776,
    "lat": 12.9418544,
    "lng": 77.6217952,
    "name": "8th Cross Road / 80 Feet Road"
  },
  {
    "id": "n615",
    "osmId": 6456088910,
    "lat": 12.9417991,
    "lng": 77.6218422,
    "name": "8th Cross Road / 80 Feet Road"
  },
  {
    "id": "n616",
    "osmId": 2228225793,
    "lat": 12.9436401,
    "lng": 77.6196185,
    "name": "2nd Main Road"
  },
  {
    "id": "n617",
    "osmId": 2228225806,
    "lat": 12.9447647,
    "lng": 77.6178921,
    "name": "2nd Cross Road End"
  },
  {
    "id": "n618",
    "osmId": 2228225808,
    "lat": 12.9446171,
    "lng": 77.6178166,
    "name": "1st Cross Road End"
  },
  {
    "id": "n619",
    "osmId": 12067366802,
    "lat": 12.9580802,
    "lng": 77.6414244,
    "name": "Inner Ring Road End"
  },
  {
    "id": "n620",
    "osmId": 1837284744,
    "lat": 12.9386513,
    "lng": 77.6347645,
    "name": "Inner Ring Road"
  },
  {
    "id": "n621",
    "osmId": 2327191210,
    "lat": 12.9392463,
    "lng": 77.628232,
    "name": "1st Main Ashwini Layout / 1st Cross Road"
  },
  {
    "id": "n622",
    "osmId": 2327191221,
    "lat": 12.9400714,
    "lng": 77.628085,
    "name": "1st Main Ashwini Layout / 2nd Cross Road"
  },
  {
    "id": "n623",
    "osmId": 1391210501,
    "lat": 12.9407171,
    "lng": 77.6269256,
    "name": "Sri Rama Temple Road End"
  },
  {
    "id": "n624",
    "osmId": 11493846394,
    "lat": 12.9399056,
    "lng": 77.6254211,
    "name": "Sri Rama Temple Road / 17th F Main Road"
  },
  {
    "id": "n625",
    "osmId": 2327191314,
    "lat": 12.9418952,
    "lng": 77.6291403,
    "name": "Pipeline Road / 20H Cross Road"
  },
  {
    "id": "n626",
    "osmId": 2327191357,
    "lat": 12.9425144,
    "lng": 77.6289262,
    "name": "20D Cross Road / Pipeline Road"
  },
  {
    "id": "n627",
    "osmId": 2327191412,
    "lat": 12.9432309,
    "lng": 77.6293631,
    "name": "20th B Cross Road End"
  },
  {
    "id": "n628",
    "osmId": 3157766047,
    "lat": 12.9445102,
    "lng": 77.6271854,
    "name": "Pipeline Road End"
  },
  {
    "id": "n629",
    "osmId": 2228279454,
    "lat": 12.9478886,
    "lng": 77.6248415,
    "name": "Pipeline Road End"
  },
  {
    "id": "n630",
    "osmId": 13161602779,
    "lat": 12.9445743,
    "lng": 77.6294786,
    "name": "21st Cross Road"
  },
  {
    "id": "n631",
    "osmId": 1607769990,
    "lat": 12.9262688,
    "lng": 77.6165163,
    "name": "1st Cross Road End"
  },
  {
    "id": "n632",
    "osmId": 1607770180,
    "lat": 12.9273272,
    "lng": 77.6158563,
    "name": "1st Cross Road / Maruthi Nagar Main Road"
  },
  {
    "id": "n633",
    "osmId": 1723827219,
    "lat": 12.92938,
    "lng": 77.6151599,
    "name": "Hosur Road"
  },
  {
    "id": "n634",
    "osmId": 11964724284,
    "lat": 12.9295316,
    "lng": 77.6150603,
    "name": "Hosur Road / Sarjapura Road"
  },
  {
    "id": "n635",
    "osmId": 2472183068,
    "lat": 12.9441842,
    "lng": 77.6088517,
    "name": "Koramangala Road End"
  },
  {
    "id": "n636",
    "osmId": 5389468690,
    "lat": 12.943414,
    "lng": 77.6118427,
    "name": "Koramangala Road / 1st Main Road"
  },
  {
    "id": "n637",
    "osmId": 5389468692,
    "lat": 12.9433454,
    "lng": 77.6122315,
    "name": "Koramangala Road / 2nd Cross Road"
  },
  {
    "id": "n638",
    "osmId": 3872381598,
    "lat": 12.9432528,
    "lng": 77.6125609,
    "name": "Koramangala Road / 3rd Cross Road"
  },
  {
    "id": "n639",
    "osmId": 5389468687,
    "lat": 12.9431623,
    "lng": 77.6128354,
    "name": "Koramangala Road / 4th Cross Road"
  },
  {
    "id": "n640",
    "osmId": 3872381597,
    "lat": 12.9430555,
    "lng": 77.6131074,
    "name": "Koramangala Road / 5th Cross Road"
  },
  {
    "id": "n641",
    "osmId": 2228165509,
    "lat": 12.9425559,
    "lng": 77.6142722,
    "name": "Koramangala Road / 3rd Cross Road"
  },
  {
    "id": "n642",
    "osmId": 2700228999,
    "lat": 12.9247554,
    "lng": 77.6203498,
    "name": "17th Main Road End"
  },
  {
    "id": "n643",
    "osmId": 1070361741,
    "lat": 12.9258917,
    "lng": 77.6251942,
    "name": "13th Main Road / Sarjapura Road"
  },
  {
    "id": "n644",
    "osmId": 2941494368,
    "lat": 12.9235354,
    "lng": 77.6146263,
    "name": "Maruthi Nagar Main Road End"
  },
  {
    "id": "n645",
    "osmId": 1607769861,
    "lat": 12.9248762,
    "lng": 77.6150923,
    "name": "Maruthi Nagar Main Road / 8th Cross Road"
  },
  {
    "id": "n646",
    "osmId": 3274194146,
    "lat": 12.9267412,
    "lng": 77.6156603,
    "name": "Maruthi Nagar Main Road / 1st C Cross Road"
  },
  {
    "id": "n647",
    "osmId": 3274194151,
    "lat": 12.927006,
    "lng": 77.6157421,
    "name": "Maruthi Nagar Main Road / 1st B Cross Road"
  },
  {
    "id": "n648",
    "osmId": 3274194150,
    "lat": 12.9272721,
    "lng": 77.6158366,
    "name": "Maruthi Nagar Main Road / 1st Cross Road"
  },
  {
    "id": "n649",
    "osmId": 3145130516,
    "lat": 12.9332839,
    "lng": 77.6337358,
    "name": "8th Cross Road / 5th Main Road"
  },
  {
    "id": "n650",
    "osmId": 3143852515,
    "lat": 12.9328994,
    "lng": 77.6336226,
    "name": "8th Cross Road / 4th Main Road"
  },
  {
    "id": "n651",
    "osmId": 3145130511,
    "lat": 12.9322071,
    "lng": 77.6334952,
    "name": "8th Cross Road / 2nd Main Road"
  },
  {
    "id": "n652",
    "osmId": 3143852516,
    "lat": 12.9316638,
    "lng": 77.6334015,
    "name": "8th Cross Road / 1st Main Road"
  },
  {
    "id": "n653",
    "osmId": 443224549,
    "lat": 12.93348,
    "lng": 77.6321489,
    "name": "2nd Main Road / 6th Cross Road"
  },
  {
    "id": "n654",
    "osmId": 7265835308,
    "lat": 12.9338184,
    "lng": 77.6318194,
    "name": "2nd Main Road / 5th Cross Road"
  },
  {
    "id": "n655",
    "osmId": 3145130512,
    "lat": 12.9342374,
    "lng": 77.6314081,
    "name": "2nd Main Road / 4th Cross Road"
  },
  {
    "id": "n656",
    "osmId": 3145130515,
    "lat": 12.9335956,
    "lng": 77.632863,
    "name": "4th Main Road End"
  },
  {
    "id": "n657",
    "osmId": 3145130517,
    "lat": 12.9338358,
    "lng": 77.6331102,
    "name": "5th Main Road End"
  },
  {
    "id": "n658",
    "osmId": 3145130528,
    "lat": 12.9339456,
    "lng": 77.63111,
    "name": "4th Cross Road / 1st Main Road"
  },
  {
    "id": "n659",
    "osmId": 3145158629,
    "lat": 12.9346281,
    "lng": 77.6318071,
    "name": "4th Cross Road / 4th Main Road"
  },
  {
    "id": "n660",
    "osmId": 10296405837,
    "lat": 12.9342209,
    "lng": 77.6322468,
    "name": "4th Main Road / 5th Cross Road"
  },
  {
    "id": "n661",
    "osmId": 3145158633,
    "lat": 12.9348696,
    "lng": 77.6315494,
    "name": "4th Main Road / 3rd Cross Road"
  },
  {
    "id": "n662",
    "osmId": 3145158631,
    "lat": 12.9350992,
    "lng": 77.6313101,
    "name": "4th Main Road / 2nd Cross Road"
  },
  {
    "id": "n663",
    "osmId": 3145158632,
    "lat": 12.9342224,
    "lng": 77.6308248,
    "name": "3rd Cross Road / 1st Main Road"
  },
  {
    "id": "n664",
    "osmId": 3145158642,
    "lat": 12.9347556,
    "lng": 77.6339058,
    "name": "7th Cross Road / 8th Main Road"
  },
  {
    "id": "n665",
    "osmId": 3145158637,
    "lat": 12.9349288,
    "lng": 77.634092,
    "name": "7th Cross Road / 9th Main Road"
  },
  {
    "id": "n666",
    "osmId": 443224569,
    "lat": 12.9350251,
    "lng": 77.6345044,
    "name": "7th Cross Road End"
  },
  {
    "id": "n667",
    "osmId": 3145247011,
    "lat": 12.9266437,
    "lng": 77.6131001,
    "name": "4th Cross Road End"
  },
  {
    "id": "n668",
    "osmId": 3145247015,
    "lat": 12.9263461,
    "lng": 77.6147213,
    "name": "4th Cross Road End"
  },
  {
    "id": "n669",
    "osmId": 6143995412,
    "lat": 12.9270435,
    "lng": 77.6397144,
    "name": "3rd Cross Road End"
  },
  {
    "id": "n670",
    "osmId": 3157767903,
    "lat": 12.9432154,
    "lng": 77.6267458,
    "name": "20th C Cross Road / 20G Cross Road"
  },
  {
    "id": "n671",
    "osmId": 3157767904,
    "lat": 12.9432811,
    "lng": 77.6264502,
    "name": "20th C Cross Road End"
  },
  {
    "id": "n672",
    "osmId": 10862291784,
    "lat": 12.9417352,
    "lng": 77.6264176,
    "name": "20 I Cross Road End"
  },
  {
    "id": "n673",
    "osmId": 3157767877,
    "lat": 12.9414352,
    "lng": 77.6269956,
    "name": "20J Cross Road End"
  },
  {
    "id": "n674",
    "osmId": 3157767887,
    "lat": 12.941502,
    "lng": 77.6288303,
    "name": "20J Cross Road End"
  },
  {
    "id": "n675",
    "osmId": 3157767916,
    "lat": 12.9420102,
    "lng": 77.626318,
    "name": "20H Cross Road End"
  },
  {
    "id": "n676",
    "osmId": 3158788655,
    "lat": 12.9272439,
    "lng": 77.6381151,
    "name": "1st A Main Road End"
  },
  {
    "id": "n677",
    "osmId": 3158788661,
    "lat": 12.9249877,
    "lng": 77.6377334,
    "name": "1st A Main Road / Sarjapur Road"
  },
  {
    "id": "n678",
    "osmId": 1607770099,
    "lat": 12.9268965,
    "lng": 77.6079349,
    "name": "4th Main Road End"
  },
  {
    "id": "n679",
    "osmId": 1607770198,
    "lat": 12.9275775,
    "lng": 77.6080496,
    "name": "4th Main Road"
  },
  {
    "id": "n680",
    "osmId": 3274194135,
    "lat": 12.9274138,
    "lng": 77.6120564,
    "name": "4th A Cross Road End"
  },
  {
    "id": "n681",
    "osmId": 3274194136,
    "lat": 12.9274034,
    "lng": 77.6131508,
    "name": "4th A Cross Road End"
  },
  {
    "id": "n682",
    "osmId": 3274194138,
    "lat": 12.9271132,
    "lng": 77.6120001,
    "name": "4th B Cross Road End"
  },
  {
    "id": "n683",
    "osmId": 3274194139,
    "lat": 12.9271026,
    "lng": 77.6131307,
    "name": "4th B Cross Road End"
  },
  {
    "id": "n684",
    "osmId": 3274194140,
    "lat": 12.9268182,
    "lng": 77.6119436,
    "name": "4th C Cross End"
  },
  {
    "id": "n685",
    "osmId": 3274194141,
    "lat": 12.9268031,
    "lng": 77.6131126,
    "name": "4th C Cross End"
  },
  {
    "id": "n686",
    "osmId": 3274194142,
    "lat": 12.9265406,
    "lng": 77.6119384,
    "name": "4th D Cross End"
  },
  {
    "id": "n687",
    "osmId": 3274194143,
    "lat": 12.9265199,
    "lng": 77.6130848,
    "name": "4th D Cross End"
  },
  {
    "id": "n688",
    "osmId": 3274194144,
    "lat": 12.9263747,
    "lng": 77.6120564,
    "name": "4th E Cross End"
  },
  {
    "id": "n689",
    "osmId": 3274194137,
    "lat": 12.926364,
    "lng": 77.6130751,
    "name": "4th E Cross End"
  },
  {
    "id": "n690",
    "osmId": 3274194148,
    "lat": 12.9271135,
    "lng": 77.6153268,
    "name": "1st B Cross Road End"
  },
  {
    "id": "n691",
    "osmId": 1070361781,
    "lat": 12.9313406,
    "lng": 77.6140453,
    "name": "Hosur Road"
  },
  {
    "id": "n692",
    "osmId": 650085190,
    "lat": 12.9298694,
    "lng": 77.6149477,
    "name": "Hosur Road / Sarjapura Road"
  },
  {
    "id": "n693",
    "osmId": 10068956866,
    "lat": 12.9424807,
    "lng": 77.6227384,
    "name": "80 Feet Road / Srinivagilu Main Road"
  },
  {
    "id": "n694",
    "osmId": 254920199,
    "lat": 12.9368302,
    "lng": 77.6181479,
    "name": "80 Feet Road / 3rd Cross Road"
  },
  {
    "id": "n695",
    "osmId": 3399067457,
    "lat": 12.9362932,
    "lng": 77.6172464,
    "name": "80 Feet Road / 17th Main Road"
  },
  {
    "id": "n696",
    "osmId": 12451306647,
    "lat": 12.9359065,
    "lng": 77.6152742,
    "name": "80 Feet Road"
  },
  {
    "id": "n697",
    "osmId": 309593674,
    "lat": 12.9360828,
    "lng": 77.6156251,
    "name": "80 Feet Road"
  },
  {
    "id": "n698",
    "osmId": 10705894337,
    "lat": 12.9357875,
    "lng": 77.6152125,
    "name": "80 Feet Road"
  },
  {
    "id": "n699",
    "osmId": 10705894338,
    "lat": 12.9345895,
    "lng": 77.612853,
    "name": "80 Feet Road"
  },
  {
    "id": "n700",
    "osmId": 11290494512,
    "lat": 12.9341301,
    "lng": 77.6168851,
    "name": "17th Main Road"
  },
  {
    "id": "n701",
    "osmId": 6311451942,
    "lat": 12.9401574,
    "lng": 77.6271281,
    "name": "1st Main Road End"
  },
  {
    "id": "n702",
    "osmId": 10862212869,
    "lat": 12.9392294,
    "lng": 77.6276529,
    "name": "1st Main Road End"
  },
  {
    "id": "n703",
    "osmId": 3399683443,
    "lat": 12.939471,
    "lng": 77.6296655,
    "name": "1st Cross Road / 4th Main Road"
  },
  {
    "id": "n704",
    "osmId": 2192096315,
    "lat": 12.9392673,
    "lng": 77.6283719,
    "name": "1st Cross Road / 1st Ashwini Street"
  },
  {
    "id": "n705",
    "osmId": 956271740,
    "lat": 12.9385483,
    "lng": 77.6296832,
    "name": "4th Main Road / Inner Ring Road"
  },
  {
    "id": "n706",
    "osmId": 3399683445,
    "lat": 12.9403135,
    "lng": 77.6306735,
    "name": "2nd Cross Road / 3rd Cross Road"
  },
  {
    "id": "n707",
    "osmId": 3558446066,
    "lat": 12.9346844,
    "lng": 77.6299342,
    "name": "1st Cross Road"
  },
  {
    "id": "n708",
    "osmId": 260911918,
    "lat": 12.9250709,
    "lng": 77.6373698,
    "name": "Sarjapura Road / Sarjapur Road"
  },
  {
    "id": "n709",
    "osmId": 6017833809,
    "lat": 12.9249774,
    "lng": 77.6350856,
    "name": "Sarjapura Road End"
  },
  {
    "id": "n710",
    "osmId": 11306430809,
    "lat": 12.9316547,
    "lng": 77.6138662,
    "name": "Hosur Road / Dr. M H Marigowda Road"
  },
  {
    "id": "n711",
    "osmId": 3801688120,
    "lat": 12.93222,
    "lng": 77.6318336,
    "name": "80 Feet Road / 8th A Main Road"
  },
  {
    "id": "n712",
    "osmId": 3870459136,
    "lat": 12.9258479,
    "lng": 77.6167643,
    "name": "2nd Cross Road End"
  },
  {
    "id": "n713",
    "osmId": 3870649401,
    "lat": 12.9385597,
    "lng": 77.6308242,
    "name": "3rd Cross Road / Inner Ring Road"
  },
  {
    "id": "n714",
    "osmId": 2327191235,
    "lat": 12.9385683,
    "lng": 77.6311049,
    "name": "2nd Cross Road / Inner Ring Road"
  },
  {
    "id": "n715",
    "osmId": 3870649404,
    "lat": 12.9402009,
    "lng": 77.6310728,
    "name": "2nd Cross Road"
  },
  {
    "id": "n716",
    "osmId": 3870651463,
    "lat": 12.9359701,
    "lng": 77.6306964,
    "name": "2nd Main Road End"
  },
  {
    "id": "n717",
    "osmId": 3870651466,
    "lat": 12.9370208,
    "lng": 77.6313329,
    "name": "2nd Main Road End"
  },
  {
    "id": "n718",
    "osmId": 4032342289,
    "lat": 12.9310431,
    "lng": 77.6362726,
    "name": "6th Cross Road End"
  },
  {
    "id": "n719",
    "osmId": 3870651471,
    "lat": 12.9315457,
    "lng": 77.6368066,
    "name": "6th Cross Road End"
  },
  {
    "id": "n720",
    "osmId": 3872381587,
    "lat": 12.9421843,
    "lng": 77.6140956,
    "name": "2nd Cross Road / 3rd Cross Road"
  },
  {
    "id": "n721",
    "osmId": 3872381590,
    "lat": 12.9415721,
    "lng": 77.6144972,
    "name": "3rd Cross Road End"
  },
  {
    "id": "n722",
    "osmId": 1770490843,
    "lat": 12.9339455,
    "lng": 77.6364724,
    "name": "Temple Trees Rd, Cauvery Colony End"
  },
  {
    "id": "n723",
    "osmId": 4032342297,
    "lat": 12.9316696,
    "lng": 77.6350793,
    "name": "Temple Trees Rd, Cauvery Colony End"
  },
  {
    "id": "n724",
    "osmId": 7270998479,
    "lat": 12.9300685,
    "lng": 77.6381802,
    "name": "13th Cross Road End"
  },
  {
    "id": "n725",
    "osmId": 6455354948,
    "lat": 12.9274783,
    "lng": 77.6398663,
    "name": "13th Cross Road / 10th Cross Road"
  },
  {
    "id": "n726",
    "osmId": 305145987,
    "lat": 12.9315908,
    "lng": 77.6339579,
    "name": "1st Main Road / Temple Trees Road, Cauvery Colony"
  },
  {
    "id": "n727",
    "osmId": 4032342299,
    "lat": 12.9321084,
    "lng": 77.6342234,
    "name": "1st Main Road End"
  },
  {
    "id": "n728",
    "osmId": 4032342291,
    "lat": 12.9314828,
    "lng": 77.6339643,
    "name": "1st Main Road End"
  },
  {
    "id": "n729",
    "osmId": 7331215088,
    "lat": 12.9296915,
    "lng": 77.6371089,
    "name": "1st Main Road End"
  },
  {
    "id": "n730",
    "osmId": 4406882480,
    "lat": 12.9250291,
    "lng": 77.6088886,
    "name": "Tavarekere Main Road"
  },
  {
    "id": "n731",
    "osmId": 4406882479,
    "lat": 12.924909,
    "lng": 77.6089752,
    "name": "Tavarekere Main Road End"
  },
  {
    "id": "n732",
    "osmId": 1617742453,
    "lat": 12.9250887,
    "lng": 77.6176814,
    "name": "Hosur Road / 2nd Main Road"
  },
  {
    "id": "n733",
    "osmId": 1837005170,
    "lat": 12.9255734,
    "lng": 77.6173739,
    "name": "Hosur Road / 1st Main Road"
  },
  {
    "id": "n734",
    "osmId": 4803681191,
    "lat": 12.9291644,
    "lng": 77.6295456,
    "name": "4th Cross Road / 8th B Main Road"
  },
  {
    "id": "n735",
    "osmId": 4803681190,
    "lat": 12.9288886,
    "lng": 77.630749,
    "name": "4th Cross Road / 8th A Main Road"
  },
  {
    "id": "n736",
    "osmId": 4803681193,
    "lat": 12.9285783,
    "lng": 77.6306661,
    "name": "3rd Cross Road / 8th A Main Road"
  },
  {
    "id": "n737",
    "osmId": 4803681192,
    "lat": 12.9288682,
    "lng": 77.6295244,
    "name": "3rd Cross Road / 8th B Main Road"
  },
  {
    "id": "n738",
    "osmId": 4803681195,
    "lat": 12.9285423,
    "lng": 77.6295011,
    "name": "2nd Cross Road / 8th B Main Road"
  },
  {
    "id": "n739",
    "osmId": 4803681194,
    "lat": 12.9282844,
    "lng": 77.6305876,
    "name": "2nd Cross Road / 8th A Main Road"
  },
  {
    "id": "n740",
    "osmId": 1272830641,
    "lat": 12.9356307,
    "lng": 77.6319337,
    "name": "Sri Nivagalu Main Road End"
  },
  {
    "id": "n741",
    "osmId": 961796018,
    "lat": 12.9365667,
    "lng": 77.6323085,
    "name": "Sri Nivagalu Main Road / Srinivagilu Main Road"
  },
  {
    "id": "n742",
    "osmId": 5270931824,
    "lat": 12.9344795,
    "lng": 77.6305642,
    "name": "2nd Cross Road / 1st Main Road"
  },
  {
    "id": "n743",
    "osmId": 3274194147,
    "lat": 12.9268361,
    "lng": 77.6152349,
    "name": "1st C Cross Road End"
  },
  {
    "id": "n744",
    "osmId": 3274194149,
    "lat": 12.9273772,
    "lng": 77.6154038,
    "name": "1st Cross Road End"
  },
  {
    "id": "n745",
    "osmId": 6017833815,
    "lat": 12.9372808,
    "lng": 77.6268738,
    "name": "100 feet Road / 80 Feet Road"
  },
  {
    "id": "n746",
    "osmId": 10068662142,
    "lat": 12.9384471,
    "lng": 77.6327689,
    "name": "Inner Ring Road / Ejipura Main Road"
  },
  {
    "id": "n747",
    "osmId": 5395545368,
    "lat": 12.9384651,
    "lng": 77.6316793,
    "name": "Inner Ring Road / 1st Cross Road"
  },
  {
    "id": "n748",
    "osmId": 10225316065,
    "lat": 12.9382646,
    "lng": 77.6287795,
    "name": "Inner Ring Road / 1st Main Road"
  },
  {
    "id": "n749",
    "osmId": 956271745,
    "lat": 12.9385822,
    "lng": 77.6320374,
    "name": "Inner Ring Road"
  },
  {
    "id": "n750",
    "osmId": 10068662143,
    "lat": 12.9385725,
    "lng": 77.632689,
    "name": "Inner Ring Road / Ejipura Main Road"
  },
  {
    "id": "n751",
    "osmId": 7262972972,
    "lat": 12.9384347,
    "lng": 77.6333119,
    "name": "Inner Ring Road"
  },
  {
    "id": "n752",
    "osmId": 10706381573,
    "lat": 12.9385672,
    "lng": 77.6333035,
    "name": "Inner Ring Road"
  },
  {
    "id": "n753",
    "osmId": 3145130522,
    "lat": 12.9341463,
    "lng": 77.6327996,
    "name": "6th Cross Road"
  },
  {
    "id": "n754",
    "osmId": 3149542148,
    "lat": 12.9274016,
    "lng": 77.6384047,
    "name": "2nd Cross Road End"
  },
  {
    "id": "n755",
    "osmId": 3149542150,
    "lat": 12.9267997,
    "lng": 77.6395876,
    "name": "2nd Cross Road End"
  },
  {
    "id": "n756",
    "osmId": 363764234,
    "lat": 12.9340955,
    "lng": 77.619408,
    "name": "2nd A Cross Road End"
  },
  {
    "id": "n757",
    "osmId": 5389437912,
    "lat": 12.9296265,
    "lng": 77.6348352,
    "name": "5th C Main Road End"
  },
  {
    "id": "n758",
    "osmId": 7265495340,
    "lat": 12.9298734,
    "lng": 77.6331786,
    "name": "1st Main Road / 80 Feet Road"
  },
  {
    "id": "n759",
    "osmId": 5389437910,
    "lat": 12.9295661,
    "lng": 77.6350591,
    "name": "5th D Main Road End"
  },
  {
    "id": "n760",
    "osmId": 5389437915,
    "lat": 12.929418,
    "lng": 77.6344884,
    "name": "5th B Main Road / 1st Main Road"
  },
  {
    "id": "n761",
    "osmId": 5389437914,
    "lat": 12.9297466,
    "lng": 77.634651,
    "name": "5th B Main Road End"
  },
  {
    "id": "n762",
    "osmId": 11918065885,
    "lat": 12.9295396,
    "lng": 77.6343136,
    "name": "5th A Main Road End"
  },
  {
    "id": "n763",
    "osmId": 5389437916,
    "lat": 12.9299988,
    "lng": 77.6345081,
    "name": "5th A Main Road End"
  },
  {
    "id": "n764",
    "osmId": 5389437919,
    "lat": 12.9296039,
    "lng": 77.6340977,
    "name": "5th A Main Road / 1st Main Road"
  },
  {
    "id": "n765",
    "osmId": 5389437918,
    "lat": 12.9301622,
    "lng": 77.6343392,
    "name": "5th A Main Road End"
  },
  {
    "id": "n766",
    "osmId": 5389437921,
    "lat": 12.9297066,
    "lng": 77.6338793,
    "name": "6th B Main Road / 1st Main Road"
  },
  {
    "id": "n767",
    "osmId": 5389437920,
    "lat": 12.9303348,
    "lng": 77.6341688,
    "name": "6th B Main Road End"
  },
  {
    "id": "n768",
    "osmId": 5389437923,
    "lat": 12.9297946,
    "lng": 77.6336868,
    "name": "6th A Main Road / 1st Main Road"
  },
  {
    "id": "n769",
    "osmId": 5389437922,
    "lat": 12.9304876,
    "lng": 77.6340174,
    "name": "6th A Main Road End"
  },
  {
    "id": "n770",
    "osmId": 10284348020,
    "lat": 12.9298061,
    "lng": 77.6331811,
    "name": "1st Main Road / 80 Feet Road"
  },
  {
    "id": "n771",
    "osmId": 5389437928,
    "lat": 12.9295357,
    "lng": 77.6342459,
    "name": "1st Main Road"
  },
  {
    "id": "n772",
    "osmId": 1430679874,
    "lat": 12.9248118,
    "lng": 77.6380222,
    "name": "1st B Main Road / Sarjapur Road"
  },
  {
    "id": "n773",
    "osmId": 2228165493,
    "lat": 12.9418087,
    "lng": 77.613918,
    "name": "3rd Cross Road End"
  },
  {
    "id": "n774",
    "osmId": 5389468685,
    "lat": 12.9427101,
    "lng": 77.6129982,
    "name": "5th Cross Road End"
  },
  {
    "id": "n775",
    "osmId": 5389468686,
    "lat": 12.9428186,
    "lng": 77.6127313,
    "name": "4th Cross Road End"
  },
  {
    "id": "n776",
    "osmId": 5389468688,
    "lat": 12.9428499,
    "lng": 77.6124322,
    "name": "3rd Cross Road End"
  },
  {
    "id": "n777",
    "osmId": 5389468689,
    "lat": 12.943107,
    "lng": 77.6118057,
    "name": "1st Main Road End"
  },
  {
    "id": "n778",
    "osmId": 5389468691,
    "lat": 12.9430617,
    "lng": 77.6121587,
    "name": "2nd Cross Road End"
  },
  {
    "id": "n779",
    "osmId": 12451306641,
    "lat": 12.9343153,
    "lng": 77.6123032,
    "name": "Hosur Road / 80 Feet Road"
  },
  {
    "id": "n780",
    "osmId": 1070361787,
    "lat": 12.9311081,
    "lng": 77.6140603,
    "name": "Hosur Road"
  },
  {
    "id": "n781",
    "osmId": 12451306639,
    "lat": 12.9344551,
    "lng": 77.6123658,
    "name": "Hosur Road / 80 Feet Road"
  },
  {
    "id": "n782",
    "osmId": 12451306640,
    "lat": 12.934367,
    "lng": 77.6124105,
    "name": "Hosur Road / 80 Feet Road"
  },
  {
    "id": "n783",
    "osmId": 1070361708,
    "lat": 12.9324651,
    "lng": 77.6134413,
    "name": "Hosur Road / Jyoti Nivas College Road"
  },
  {
    "id": "n784",
    "osmId": 13527855577,
    "lat": 12.9318272,
    "lng": 77.6137757,
    "name": "Hosur Road"
  },
  {
    "id": "n785",
    "osmId": 3399067454,
    "lat": 12.9344337,
    "lng": 77.6125406,
    "name": "80 Feet Road"
  },
  {
    "id": "n786",
    "osmId": 61746695,
    "lat": 12.9398885,
    "lng": 77.6093074,
    "name": "1st Cross Road / Hosur Road"
  },
  {
    "id": "n787",
    "osmId": 6528482648,
    "lat": 12.9373769,
    "lng": 77.6325523,
    "name": "Srinivagilu Main Road"
  },
  {
    "id": "n788",
    "osmId": 5395554681,
    "lat": 12.9332047,
    "lng": 77.6318579,
    "name": "1st Main Road / 6th Cross Road"
  },
  {
    "id": "n789",
    "osmId": 305145664,
    "lat": 12.9310904,
    "lng": 77.63402,
    "name": "1st Main Road End"
  },
  {
    "id": "n790",
    "osmId": 5395545370,
    "lat": 12.9383333,
    "lng": 77.6316564,
    "name": "1st Cross Road"
  },
  {
    "id": "n791",
    "osmId": 5395545369,
    "lat": 12.9379832,
    "lng": 77.6328508,
    "name": "1st Cross Road / Srinivagilu Main Road"
  },
  {
    "id": "n792",
    "osmId": 1666061322,
    "lat": 12.9369564,
    "lng": 77.6306652,
    "name": "1st Cross Road End"
  },
  {
    "id": "n793",
    "osmId": 1837005168,
    "lat": 12.9254904,
    "lng": 77.6172243,
    "name": "1st Main Road"
  },
  {
    "id": "n794",
    "osmId": 1143000002,
    "lat": 12.9289946,
    "lng": 77.617555,
    "name": "1st Cross Road End"
  },
  {
    "id": "n795",
    "osmId": 6494970744,
    "lat": 12.927686,
    "lng": 77.6209546,
    "name": "1st Cross Road / Mahayogi Vemana Road"
  },
  {
    "id": "n796",
    "osmId": 5431786084,
    "lat": 12.9349662,
    "lng": 77.6247861,
    "name": "16th B Main Road / 8th Main Road"
  },
  {
    "id": "n797",
    "osmId": 1759942773,
    "lat": 12.9258422,
    "lng": 77.6327515,
    "name": "7th A Main Road End"
  },
  {
    "id": "n798",
    "osmId": 1759977212,
    "lat": 12.9248416,
    "lng": 77.6327303,
    "name": "7th A Main Road End"
  },
  {
    "id": "n799",
    "osmId": 5960671738,
    "lat": 12.9270821,
    "lng": 77.6223767,
    "name": "Sarjapura Road / 1st Cross Road"
  },
  {
    "id": "n800",
    "osmId": 1759977210,
    "lat": 12.9246012,
    "lng": 77.6283269,
    "name": "Sarjapura Road / 8th Main Road"
  },
  {
    "id": "n801",
    "osmId": 12709621385,
    "lat": 12.9296206,
    "lng": 77.6151298,
    "name": "Hosur Road / Sarjapura Road"
  },
  {
    "id": "n802",
    "osmId": 3452260834,
    "lat": 12.9361267,
    "lng": 77.6334629,
    "name": "7th Main Road End"
  },
  {
    "id": "n803",
    "osmId": 1625402539,
    "lat": 12.9345265,
    "lng": 77.6238924,
    "name": "5th Cross Road / Mahayogi Vemana Road"
  },
  {
    "id": "n804",
    "osmId": 6528272256,
    "lat": 12.9359432,
    "lng": 77.6093796,
    "name": "2nd Cross Rd End"
  },
  {
    "id": "n805",
    "osmId": 6311451945,
    "lat": 12.9405141,
    "lng": 77.6267151,
    "name": "1st Main Road End"
  },
  {
    "id": "n806",
    "osmId": 11493846393,
    "lat": 12.9398186,
    "lng": 77.6254848,
    "name": "1st Main Road / Srinivagilu Main Road"
  },
  {
    "id": "n807",
    "osmId": 6455354946,
    "lat": 12.9284238,
    "lng": 77.6380769,
    "name": "10th Cross Road End"
  },
  {
    "id": "n808",
    "osmId": 1770490847,
    "lat": 12.9328645,
    "lng": 77.6338186,
    "name": "Temple Trees Road, Cauvery Colony End"
  },
  {
    "id": "n809",
    "osmId": 1770490845,
    "lat": 12.9322973,
    "lng": 77.6338725,
    "name": "Temple Trees Road, Cauvery Colony"
  },
  {
    "id": "n810",
    "osmId": 1615723287,
    "lat": 12.9334225,
    "lng": 77.6233943,
    "name": "1st Cross Road / Mahayogi Vemana Road"
  },
  {
    "id": "n811",
    "osmId": 6968081806,
    "lat": 12.9343209,
    "lng": 77.6104836,
    "name": "Nexus Mall Parking End"
  },
  {
    "id": "n812",
    "osmId": 6968081801,
    "lat": 12.9353505,
    "lng": 77.6116158,
    "name": "Nexus Mall Parking End"
  },
  {
    "id": "n813",
    "osmId": 7089555224,
    "lat": 12.9430467,
    "lng": 77.6184603,
    "name": "2nd C Main Road End"
  },
  {
    "id": "n814",
    "osmId": 7089555232,
    "lat": 12.9403494,
    "lng": 77.6187564,
    "name": "1st B Main Road End"
  },
  {
    "id": "n815",
    "osmId": 13527855576,
    "lat": 12.9318215,
    "lng": 77.6136835,
    "name": "Hosur Road"
  },
  {
    "id": "n816",
    "osmId": 10068956787,
    "lat": 12.9342679,
    "lng": 77.6123276,
    "name": "Hosur Road"
  },
  {
    "id": "n817",
    "osmId": 7132486285,
    "lat": 12.9392351,
    "lng": 77.6323159,
    "name": "Ejipura Main Road"
  },
  {
    "id": "n818",
    "osmId": 10862212888,
    "lat": 12.9388058,
    "lng": 77.6325533,
    "name": "Ejipura Main Road"
  },
  {
    "id": "n819",
    "osmId": 7140560430,
    "lat": 12.946588,
    "lng": 77.6288423,
    "name": "Ejipura Main Road End"
  },
  {
    "id": "n820",
    "osmId": 669247548,
    "lat": 12.9445602,
    "lng": 77.6299295,
    "name": "Ejipura Main Road / 21st Cross Road"
  },
  {
    "id": "n821",
    "osmId": 13154631389,
    "lat": 12.942409,
    "lng": 77.6309065,
    "name": "Ejipura Main Road / 24th A Cross Road"
  },
  {
    "id": "n822",
    "osmId": 7265495342,
    "lat": 12.9297981,
    "lng": 77.6331015,
    "name": "7th Cross Road / 1st Main Road"
  },
  {
    "id": "n823",
    "osmId": 7265495337,
    "lat": 12.9297835,
    "lng": 77.6329031,
    "name": "7th Cross Road"
  },
  {
    "id": "n824",
    "osmId": 1469644226,
    "lat": 12.9244338,
    "lng": 77.6386112,
    "name": "1st C Main Road / Sarjapur Road"
  },
  {
    "id": "n825",
    "osmId": 301350890,
    "lat": 12.9405075,
    "lng": 77.6202253,
    "name": "5th Cross Road / 80 Feet Road"
  },
  {
    "id": "n826",
    "osmId": 5993280678,
    "lat": 12.9251496,
    "lng": 77.6353253,
    "name": "Sarjapura Road"
  },
  {
    "id": "n827",
    "osmId": 9189234339,
    "lat": 12.9330763,
    "lng": 77.6094563,
    "name": "2nd Cross Road End"
  },
  {
    "id": "n828",
    "osmId": 7263195954,
    "lat": 12.9411388,
    "lng": 77.6307086,
    "name": "24th A Cross Road End"
  },
  {
    "id": "n829",
    "osmId": 12866638776,
    "lat": 12.9310641,
    "lng": 77.629422,
    "name": "10th Main Road"
  },
  {
    "id": "n830",
    "osmId": 9506746889,
    "lat": 12.9296113,
    "lng": 77.6155949,
    "name": "Sarjapura Road"
  },
  {
    "id": "n831",
    "osmId": 9673428275,
    "lat": 12.9392625,
    "lng": 77.6307936,
    "name": "3rd Cross Road End"
  },
  {
    "id": "n832",
    "osmId": 443252853,
    "lat": 12.942536,
    "lng": 77.607995,
    "name": "Hosur Road End"
  },
  {
    "id": "n833",
    "osmId": 13333360560,
    "lat": 12.9345149,
    "lng": 77.612491,
    "name": "80 Feet Road"
  },
  {
    "id": "n834",
    "osmId": 10091816491,
    "lat": 12.9361588,
    "lng": 77.6136168,
    "name": "1st C Cross Street End"
  },
  {
    "id": "n835",
    "osmId": 1070361724,
    "lat": 12.9275971,
    "lng": 77.6209204,
    "name": "Mahayogi Vemana Road / Sarjapura Road"
  },
  {
    "id": "n836",
    "osmId": 11964724287,
    "lat": 12.9283525,
    "lng": 77.618962,
    "name": "Sarjapura Road"
  },
  {
    "id": "n837",
    "osmId": 5960671740,
    "lat": 12.9276367,
    "lng": 77.6210614,
    "name": "1st Cross Road / Mahayogi Vemana Road"
  },
  {
    "id": "n838",
    "osmId": 10705897751,
    "lat": 12.9303327,
    "lng": 77.6220176,
    "name": "Mahayogi Vemana Road"
  },
  {
    "id": "n839",
    "osmId": 5942550426,
    "lat": 12.9248811,
    "lng": 77.633657,
    "name": "80 Feet Road / Sarjapura Road"
  },
  {
    "id": "n840",
    "osmId": 7265495338,
    "lat": 12.9298679,
    "lng": 77.6330992,
    "name": "1st Main Road / 80 Feet Road"
  },
  {
    "id": "n841",
    "osmId": 6180265403,
    "lat": 12.9247598,
    "lng": 77.6335782,
    "name": "80 Feet Road End"
  },
  {
    "id": "n842",
    "osmId": 669248004,
    "lat": 12.9386995,
    "lng": 77.6326172,
    "name": "Ejipura Main Road"
  },
  {
    "id": "n843",
    "osmId": 12141257617,
    "lat": 12.9271147,
    "lng": 77.6223898,
    "name": "18th Main Road"
  },
  {
    "id": "n844",
    "osmId": 11493846392,
    "lat": 12.9397535,
    "lng": 77.6254157,
    "name": "Srinivagilu Main Road / 1st Main Road"
  },
  {
    "id": "n845",
    "osmId": 306835061,
    "lat": 12.9425251,
    "lng": 77.6227797,
    "name": "80 Feet Road / Srinivagilu Main Road"
  },
  {
    "id": "n846",
    "osmId": 6485671250,
    "lat": 12.9258148,
    "lng": 77.6322963,
    "name": "7th B Main Road End"
  },
  {
    "id": "n847",
    "osmId": 10295532214,
    "lat": 12.9247751,
    "lng": 77.6322761,
    "name": "7th B Main Road End"
  },
  {
    "id": "n848",
    "osmId": 5395545364,
    "lat": 12.9344356,
    "lng": 77.6324827,
    "name": "5th Cross Road End"
  },
  {
    "id": "n849",
    "osmId": 7263010442,
    "lat": 12.9376733,
    "lng": 77.6266698,
    "name": "Srinivagilu Main Road"
  },
  {
    "id": "n850",
    "osmId": 12709621386,
    "lat": 12.9295762,
    "lng": 77.61503,
    "name": "Hosur Road / Tavarekere Main Road"
  },
  {
    "id": "n851",
    "osmId": 1607769876,
    "lat": 12.9250748,
    "lng": 77.6088257,
    "name": "Tavarekere Main Road"
  },
  {
    "id": "n852",
    "osmId": 13574966426,
    "lat": 12.9358508,
    "lng": 77.6151677,
    "name": "80 Feet Road"
  },
  {
    "id": "n853",
    "osmId": 3870649405,
    "lat": 12.9385825,
    "lng": 77.6317897,
    "name": "Inner Ring Road"
  },
  {
    "id": "n854",
    "osmId": 10068956864,
    "lat": 12.9425693,
    "lng": 77.6227316,
    "name": "Srinivagilu Main Road / 80 Feet Road"
  },
  {
    "id": "n855",
    "osmId": 7277381418,
    "lat": 12.9250739,
    "lng": 77.6348395,
    "name": "Sarjapura Road"
  },
  {
    "id": "n856",
    "osmId": 12740817760,
    "lat": 12.9372429,
    "lng": 77.6268259,
    "name": "Mahayogi Vemana Road"
  },
  {
    "id": "n857",
    "osmId": 960536082,
    "lat": 12.9424102,
    "lng": 77.621226,
    "name": "8th Cross Road"
  },
  {
    "id": "n858",
    "osmId": 10284348034,
    "lat": 12.9359344,
    "lng": 77.6152534,
    "name": "1st Main Road End"
  },
  {
    "id": "n859",
    "osmId": 11121585204,
    "lat": 12.9425168,
    "lng": 77.6210713,
    "name": "8th Cross Road End"
  },
  {
    "id": "n860",
    "osmId": 2017924110,
    "lat": 12.9347623,
    "lng": 77.6097886,
    "name": "Tavarekere Main Road / Doctor M H Marigowda Road"
  },
  {
    "id": "n861",
    "osmId": 306589874,
    "lat": 12.9346913,
    "lng": 77.6097349,
    "name": "Tavarekere Main Road / Doctor M H Marigowda Road"
  },
  {
    "id": "n862",
    "osmId": 12143832312,
    "lat": 12.9346732,
    "lng": 77.6097197,
    "name": "Tavarekere Main Road"
  },
  {
    "id": "n863",
    "osmId": 11295765839,
    "lat": 12.934356,
    "lng": 77.6097317,
    "name": "Tavarekere Main Road"
  },
  {
    "id": "n864",
    "osmId": 11295765840,
    "lat": 12.9343475,
    "lng": 77.6096846,
    "name": "Tavarekere Main Road"
  },
  {
    "id": "n865",
    "osmId": 1607671522,
    "lat": 12.928703,
    "lng": 77.6106574,
    "name": "8th Main Road End"
  },
  {
    "id": "n866",
    "osmId": 1607671415,
    "lat": 12.9248682,
    "lng": 77.6138149,
    "name": "2nd Main Road End"
  },
  {
    "id": "n867",
    "osmId": 1607671416,
    "lat": 12.9249165,
    "lng": 77.6142662,
    "name": "2nd Main Road End"
  },
  {
    "id": "n868",
    "osmId": 3145247021,
    "lat": 12.9254007,
    "lng": 77.6125182,
    "name": "8th Cross Road End"
  },
  {
    "id": "n869",
    "osmId": 3558445954,
    "lat": 12.9241332,
    "lng": 77.6391844,
    "name": "Sarjapur Road End"
  },
  {
    "id": "n870",
    "osmId": 3558445956,
    "lat": 12.9242078,
    "lng": 77.6391957,
    "name": "Sarjapur Road End"
  },
  {
    "id": "n871",
    "osmId": 348036258,
    "lat": 12.9458173,
    "lng": 77.618749,
    "name": "Srinivagilu Main Road End"
  },
  {
    "id": "n872",
    "osmId": 10068956865,
    "lat": 12.9425267,
    "lng": 77.6226859,
    "name": "Srinivagilu Main Road / 80 Feet Road"
  },
  {
    "id": "n873",
    "osmId": 3740962126,
    "lat": 12.9458232,
    "lng": 77.6186165,
    "name": "Srinivagilu Main Road End"
  },
  {
    "id": "n874",
    "osmId": 2228225772,
    "lat": 12.9416245,
    "lng": 77.6214994,
    "name": "80 Feet Road"
  },
  {
    "id": "n875",
    "osmId": 12848316978,
    "lat": 12.9276325,
    "lng": 77.6208265,
    "name": "Sarjapura Road"
  },
  {
    "id": "n876",
    "osmId": 12143832311,
    "lat": 12.934302,
    "lng": 77.609717,
    "name": "Tavarekere Main Road"
  },
  {
    "id": "n877",
    "osmId": 1448266555,
    "lat": 12.9342753,
    "lng": 77.6097198,
    "name": "Tavarekere Main Road"
  },
  {
    "id": "n878",
    "osmId": 10284348036,
    "lat": 12.9440003,
    "lng": 77.6076548,
    "name": "Hosur Road End"
  },
  {
    "id": "n879",
    "osmId": 12890598139,
    "lat": 12.9347563,
    "lng": 77.6096396,
    "name": "Doctor M H Marigowda Road"
  },
  {
    "id": "n880",
    "osmId": 1912811931,
    "lat": 12.9368301,
    "lng": 77.603588,
    "name": "Doctor M H Marigowda Road End"
  },
  {
    "id": "n881",
    "osmId": 2598853082,
    "lat": 12.9249899,
    "lng": 77.6175195,
    "name": "2nd Main Road End"
  },
  {
    "id": "n882",
    "osmId": 11882719588,
    "lat": 12.9274085,
    "lng": 77.6209692,
    "name": "Mahayogi Vemana Road"
  },
  {
    "id": "n883",
    "osmId": 10230155468,
    "lat": 12.9346253,
    "lng": 77.6099664,
    "name": "Doctor M H Marigowda Road"
  },
  {
    "id": "n884",
    "osmId": 254920205,
    "lat": 12.9378035,
    "lng": 77.6185839,
    "name": "80 Feet Road / 5th Cross Road"
  },
  {
    "id": "n885",
    "osmId": 12774719831,
    "lat": 12.9425482,
    "lng": 77.6247114,
    "name": "National Games Village Road"
  },
  {
    "id": "n886",
    "osmId": 11021742661,
    "lat": 12.9489329,
    "lng": 77.6204771,
    "name": "National Games Village Road End"
  },
  {
    "id": "n887",
    "osmId": 6504518148,
    "lat": 12.9422616,
    "lng": 77.6249691,
    "name": "National Games Village Road"
  },
  {
    "id": "n888",
    "osmId": 306589628,
    "lat": 12.9311031,
    "lng": 77.6098614,
    "name": "Tavarekere Main Road"
  },
  {
    "id": "n889",
    "osmId": 7148693828,
    "lat": 12.9311543,
    "lng": 77.6098741,
    "name": "Tavarekere Main Road"
  },
  {
    "id": "n890",
    "osmId": 10091779059,
    "lat": 12.9314004,
    "lng": 77.6099294,
    "name": "Tavarekere Main Road"
  },
  {
    "id": "n891",
    "osmId": 12890598138,
    "lat": 12.934847,
    "lng": 77.6096669,
    "name": "Doctor M H Marigowda Road"
  },
  {
    "id": "n892",
    "osmId": 3716332297,
    "lat": 12.9340537,
    "lng": 77.6097569,
    "name": "Tavarekere Main Road"
  },
  {
    "id": "n893",
    "osmId": 13232795380,
    "lat": 12.9328099,
    "lng": 77.6100468,
    "name": "Tavarekere Main Road"
  },
  {
    "id": "n894",
    "osmId": 11809900885,
    "lat": 12.9241909,
    "lng": 77.6287288,
    "name": "Sarjapura Road End"
  },
  {
    "id": "n895",
    "osmId": 1466668369,
    "lat": 12.9299591,
    "lng": 77.608158,
    "name": "4th Main Road End"
  },
  {
    "id": "n896",
    "osmId": 2327191342,
    "lat": 12.9444058,
    "lng": 77.6271839,
    "name": "Pipeline Road End"
  },
  {
    "id": "n897",
    "osmId": 13161602778,
    "lat": 12.9445725,
    "lng": 77.6295385,
    "name": "21st Cross Road"
  },
  {
    "id": "n898",
    "osmId": 1472269380,
    "lat": 12.9327067,
    "lng": 77.610074,
    "name": "4th Cross Road / Tavarekere Main Road"
  },
  {
    "id": "n899",
    "osmId": 6518066890,
    "lat": 12.9324536,
    "lng": 77.610088,
    "name": "Tavarekere Main Road"
  }
];

const roads = [
  {
    "id": "r0",
    "name": "3rd Main Road",
    "highway": "residential",
    "from": "n0",
    "to": "n1",
    "distance": 0.07,
    "status": "green",
    "coords": [
      [
        12.9408286,
        77.6285803
      ],
      [
        12.9401677,
        77.6286928
      ]
    ]
  },
  {
    "id": "r1",
    "name": "3rd Main Road",
    "highway": "residential",
    "from": "n1",
    "to": "n2",
    "distance": 0.09,
    "status": "green",
    "coords": [
      [
        12.9401677,
        77.6286928
      ],
      [
        12.9396894,
        77.6287952
      ],
      [
        12.9396216,
        77.6288109
      ],
      [
        12.9393502,
        77.6288736
      ]
    ]
  },
  {
    "id": "r2",
    "name": "3rd Main Road",
    "highway": "residential",
    "from": "n2",
    "to": "n3",
    "distance": 0.1,
    "status": "green",
    "coords": [
      [
        12.9393502,
        77.6288736
      ],
      [
        12.9393402,
        77.628877
      ],
      [
        12.9384931,
        77.6291682
      ]
    ]
  },
  {
    "id": "r3",
    "name": "3rd Cross Road",
    "highway": "residential",
    "from": "n4",
    "to": "n5",
    "distance": 0.06,
    "status": "red",
    "coords": [
      [
        12.9404239,
        77.62834
      ],
      [
        12.9403412,
        77.6277745
      ]
    ]
  },
  {
    "id": "r4",
    "name": "2nd Main Road",
    "highway": "residential",
    "from": "n6",
    "to": "n7",
    "distance": 0.09,
    "status": "green",
    "coords": [
      [
        12.9393014,
        77.6285506
      ],
      [
        12.9396319,
        77.6284862
      ],
      [
        12.9397602,
        77.6284612
      ],
      [
        12.9401189,
        77.6283899
      ]
    ]
  },
  {
    "id": "r5",
    "name": "2nd Main Road",
    "highway": "residential",
    "from": "n7",
    "to": "n4",
    "distance": 0.03,
    "status": "yellow",
    "coords": [
      [
        12.9401189,
        77.6283899
      ],
      [
        12.9404239,
        77.62834
      ]
    ]
  },
  {
    "id": "r6",
    "name": "1st A Cross Road",
    "highway": "tertiary",
    "from": "n8",
    "to": "n9",
    "distance": 0.06,
    "status": "green",
    "coords": [
      [
        12.9334559,
        77.6232731
      ],
      [
        12.9335338,
        77.622865
      ],
      [
        12.9335405,
        77.622713
      ]
    ]
  },
  {
    "id": "r7",
    "name": "1st A Cross Road",
    "highway": "tertiary",
    "from": "n9",
    "to": "n10",
    "distance": 0.34,
    "status": "green",
    "coords": [
      [
        12.9335405,
        77.622713
      ],
      [
        12.9335466,
        77.6225714
      ],
      [
        12.9335621,
        77.6221964
      ],
      [
        12.9335812,
        77.6215186
      ],
      [
        12.9336416,
        77.6202235
      ],
      [
        12.9336872,
        77.6196166
      ]
    ]
  },
  {
    "id": "r8",
    "name": "1st A Cross Road",
    "highway": "tertiary",
    "from": "n10",
    "to": "n11",
    "distance": 0.11,
    "status": "green",
    "coords": [
      [
        12.9336872,
        77.6196166
      ],
      [
        12.9337,
        77.6194237
      ],
      [
        12.9337035,
        77.619147
      ],
      [
        12.9336457,
        77.6187713
      ],
      [
        12.9336043,
        77.6185935
      ]
    ]
  },
  {
    "id": "r9",
    "name": "1st A Cross Road",
    "highway": "tertiary",
    "from": "n11",
    "to": "n12",
    "distance": 0.2,
    "status": "green",
    "coords": [
      [
        12.9336043,
        77.6185935
      ],
      [
        12.9335359,
        77.6182528
      ],
      [
        12.9335424,
        77.6181632
      ],
      [
        12.9338377,
        77.617297
      ],
      [
        12.9340096,
        77.6168659
      ]
    ]
  },
  {
    "id": "r10",
    "name": "1st A Cross Road",
    "highway": "tertiary",
    "from": "n12",
    "to": "n13",
    "distance": 0.03,
    "status": "green",
    "coords": [
      [
        12.9340096,
        77.6168659
      ],
      [
        12.9341284,
        77.6166244
      ]
    ]
  },
  {
    "id": "r11",
    "name": "1st A Cross Road",
    "highway": "tertiary",
    "from": "n13",
    "to": "n14",
    "distance": 0.05,
    "status": "green",
    "coords": [
      [
        12.9341284,
        77.6166244
      ],
      [
        12.9344379,
        77.6162724
      ]
    ]
  },
  {
    "id": "r12",
    "name": "1st A Cross Road",
    "highway": "tertiary",
    "from": "n14",
    "to": "n15",
    "distance": 0.12,
    "status": "green",
    "coords": [
      [
        12.9344379,
        77.6162724
      ],
      [
        12.9351313,
        77.615808
      ],
      [
        12.9352042,
        77.6157604
      ],
      [
        12.9353174,
        77.6156865
      ]
    ]
  },
  {
    "id": "r13",
    "name": "1st A Cross Road",
    "highway": "tertiary",
    "from": "n15",
    "to": "n16",
    "distance": 0.07,
    "status": "green",
    "coords": [
      [
        12.9353174,
        77.6156865
      ],
      [
        12.935517,
        77.6155457
      ],
      [
        12.935775,
        77.6153649
      ],
      [
        12.935787,
        77.6153565
      ],
      [
        12.9358402,
        77.6153192
      ]
    ]
  },
  {
    "id": "r14",
    "name": "80 Feet Road",
    "highway": "secondary",
    "from": "n17",
    "to": "n18",
    "distance": 0.27,
    "status": "green",
    "coords": [
      [
        12.9346238,
        77.612719
      ],
      [
        12.9349139,
        77.6132855
      ],
      [
        12.9353204,
        77.6141044
      ],
      [
        12.9355746,
        77.6146166
      ],
      [
        12.935738,
        77.6149547
      ]
    ]
  },
  {
    "id": "r15",
    "name": "5th Cross Road",
    "highway": "tertiary",
    "from": "n19",
    "to": "n20",
    "distance": 0.07,
    "status": "green",
    "coords": [
      [
        12.9377707,
        77.6186529
      ],
      [
        12.9377464,
        77.6186891
      ],
      [
        12.937619,
        77.6188933
      ],
      [
        12.9374499,
        77.619167
      ]
    ]
  },
  {
    "id": "r16",
    "name": "5th Cross Road",
    "highway": "tertiary",
    "from": "n20",
    "to": "n21",
    "distance": 0.12,
    "status": "yellow",
    "coords": [
      [
        12.9374499,
        77.619167
      ],
      [
        12.9372169,
        77.6195633
      ],
      [
        12.9370162,
        77.6198832
      ],
      [
        12.9368678,
        77.620119
      ]
    ]
  },
  {
    "id": "r17",
    "name": "5th Cross Road",
    "highway": "tertiary",
    "from": "n21",
    "to": "n22",
    "distance": 0.03,
    "status": "green",
    "coords": [
      [
        12.9368678,
        77.620119
      ],
      [
        12.9367451,
        77.6203267
      ]
    ]
  },
  {
    "id": "r18",
    "name": "5th Cross Road",
    "highway": "tertiary",
    "from": "n22",
    "to": "n23",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9367451,
        77.6203267
      ],
      [
        12.9365638,
        77.620623
      ]
    ]
  },
  {
    "id": "r19",
    "name": "5th Cross Road",
    "highway": "tertiary",
    "from": "n23",
    "to": "n24",
    "distance": 0.05,
    "status": "red",
    "coords": [
      [
        12.9365638,
        77.620623
      ],
      [
        12.9363405,
        77.6209764
      ]
    ]
  },
  {
    "id": "r20",
    "name": "5th Cross Road",
    "highway": "tertiary",
    "from": "n24",
    "to": "n25",
    "distance": 0.06,
    "status": "green",
    "coords": [
      [
        12.9363405,
        77.6209764
      ],
      [
        12.9360656,
        77.6214105
      ]
    ]
  },
  {
    "id": "r21",
    "name": "5th Cross Road",
    "highway": "tertiary",
    "from": "n25",
    "to": "n26",
    "distance": 0.07,
    "status": "green",
    "coords": [
      [
        12.9360656,
        77.6214105
      ],
      [
        12.9359579,
        77.6215914
      ],
      [
        12.9357389,
        77.6219474
      ]
    ]
  },
  {
    "id": "r22",
    "name": "5th Cross Road",
    "highway": "tertiary",
    "from": "n26",
    "to": "n27",
    "distance": 0.18,
    "status": "green",
    "coords": [
      [
        12.9357389,
        77.6219474
      ],
      [
        12.9348834,
        77.6233085
      ]
    ]
  },
  {
    "id": "r23",
    "name": "5th Cross Road",
    "highway": "tertiary",
    "from": "n27",
    "to": "n28",
    "distance": 0.06,
    "status": "green",
    "coords": [
      [
        12.9348834,
        77.6233085
      ],
      [
        12.9346402,
        77.6237113
      ],
      [
        12.9346355,
        77.6237192
      ],
      [
        12.9345854,
        77.623801
      ]
    ]
  },
  {
    "id": "r24",
    "name": "8th Main Road",
    "highway": "tertiary",
    "from": "n29",
    "to": "n30",
    "distance": 0.01,
    "status": "yellow",
    "coords": [
      [
        12.9352411,
        77.6243708
      ],
      [
        12.9351903,
        77.6244413
      ]
    ]
  },
  {
    "id": "r25",
    "name": "Sarjapura Road",
    "highway": "primary",
    "from": "n31",
    "to": "n32",
    "distance": 0.49,
    "status": "green",
    "coords": [
      [
        12.9257,
        77.6251492
      ],
      [
        12.9259489,
        77.624579
      ],
      [
        12.9261499,
        77.6240841
      ],
      [
        12.9262016,
        77.6239618
      ],
      [
        12.9262794,
        77.6237777
      ],
      [
        12.9267157,
        77.6227449
      ],
      [
        12.9267373,
        77.6226928
      ],
      [
        12.9269392,
        77.6222171
      ],
      [
        12.9274069,
        77.6211127
      ],
      [
        12.9274187,
        77.6210876
      ],
      [
        12.9274643,
        77.6209908
      ]
    ]
  },
  {
    "id": "r26",
    "name": "Inner Ring Road",
    "highway": "primary",
    "from": "n33",
    "to": "n34",
    "distance": 0.02,
    "status": "red",
    "coords": [
      [
        12.9373325,
        77.6269369
      ],
      [
        12.9373785,
        77.6269885
      ],
      [
        12.9374592,
        77.627084
      ]
    ]
  },
  {
    "id": "r27",
    "name": "3rd Cross Road",
    "highway": "residential",
    "from": "n35",
    "to": "n36",
    "distance": 0.06,
    "status": "green",
    "coords": [
      [
        12.9261579,
        77.6286946
      ],
      [
        12.926351,
        77.6281978
      ]
    ]
  },
  {
    "id": "r28",
    "name": "3rd Cross Road",
    "highway": "residential",
    "from": "n36",
    "to": "n37",
    "distance": 0.05,
    "status": "yellow",
    "coords": [
      [
        12.926351,
        77.6281978
      ],
      [
        12.9265195,
        77.6277708
      ]
    ]
  },
  {
    "id": "r29",
    "name": "3rd Cross Road",
    "highway": "residential",
    "from": "n37",
    "to": "n38",
    "distance": 0.08,
    "status": "yellow",
    "coords": [
      [
        12.9265195,
        77.6277708
      ],
      [
        12.9268059,
        77.6270445
      ]
    ]
  },
  {
    "id": "r30",
    "name": "3rd Cross Road",
    "highway": "residential",
    "from": "n38",
    "to": "n39",
    "distance": 0.07,
    "status": "green",
    "coords": [
      [
        12.9268059,
        77.6270445
      ],
      [
        12.9270524,
        77.6264198
      ]
    ]
  },
  {
    "id": "r31",
    "name": "3rd Cross Road",
    "highway": "residential",
    "from": "n39",
    "to": "n40",
    "distance": 0.08,
    "status": "yellow",
    "coords": [
      [
        12.9270524,
        77.6264198
      ],
      [
        12.9273383,
        77.6256948
      ]
    ]
  },
  {
    "id": "r32",
    "name": "3rd Cross Road",
    "highway": "residential",
    "from": "n40",
    "to": "n41",
    "distance": 0.21,
    "status": "green",
    "coords": [
      [
        12.9273383,
        77.6256948
      ],
      [
        12.9280436,
        77.6239069
      ]
    ]
  },
  {
    "id": "r33",
    "name": "12th Main Road",
    "highway": "residential",
    "from": "n39",
    "to": "n42",
    "distance": 0.39,
    "status": "yellow",
    "coords": [
      [
        12.9270524,
        77.6264198
      ],
      [
        12.9272621,
        77.6264958
      ],
      [
        12.927508,
        77.6265846
      ],
      [
        12.9275576,
        77.6266026
      ],
      [
        12.9278005,
        77.626691
      ],
      [
        12.9282655,
        77.6268603
      ],
      [
        12.9287781,
        77.6270468
      ],
      [
        12.9290638,
        77.6271463
      ],
      [
        12.9294491,
        77.6272854
      ],
      [
        12.9303496,
        77.6276105
      ]
    ]
  },
  {
    "id": "r34",
    "name": "2nd Cross Road",
    "highway": "residential",
    "from": "n43",
    "to": "n44",
    "distance": 0.04,
    "status": "yellow",
    "coords": [
      [
        12.9255601,
        77.6335759
      ],
      [
        12.9255682,
        77.6336299
      ],
      [
        12.9256177,
        77.6339586
      ]
    ]
  },
  {
    "id": "r35",
    "name": "2nd Cross Road",
    "highway": "residential",
    "from": "n44",
    "to": "n45",
    "distance": 0.07,
    "status": "yellow",
    "coords": [
      [
        12.9256177,
        77.6339586
      ],
      [
        12.9257381,
        77.6346227
      ]
    ]
  },
  {
    "id": "r36",
    "name": "2nd Cross Road",
    "highway": "residential",
    "from": "n45",
    "to": "n46",
    "distance": 0.05,
    "status": "green",
    "coords": [
      [
        12.9257381,
        77.6346227
      ],
      [
        12.925823,
        77.6350961
      ]
    ]
  },
  {
    "id": "r37",
    "name": "2nd Cross Road",
    "highway": "residential",
    "from": "n46",
    "to": "n47",
    "distance": 0.17,
    "status": "green",
    "coords": [
      [
        12.925823,
        77.6350961
      ],
      [
        12.9259886,
        77.6360183
      ],
      [
        12.926076,
        77.6366314
      ]
    ]
  },
  {
    "id": "r38",
    "name": "2nd Cross Road",
    "highway": "residential",
    "from": "n47",
    "to": "n48",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.926076,
        77.6366314
      ],
      [
        12.9260188,
        77.6370147
      ]
    ]
  },
  {
    "id": "r39",
    "name": "2nd Cross Road",
    "highway": "residential",
    "from": "n48",
    "to": "n49",
    "distance": 0.05,
    "status": "red",
    "coords": [
      [
        12.9260188,
        77.6370147
      ],
      [
        12.9258691,
        77.6374913
      ]
    ]
  },
  {
    "id": "r40",
    "name": "1st Main Road",
    "highway": "tertiary",
    "from": "n50",
    "to": "n51",
    "distance": 0.03,
    "status": "yellow",
    "coords": [
      [
        12.9292838,
        77.6346741
      ],
      [
        12.9291803,
        77.6348893
      ]
    ]
  },
  {
    "id": "r41",
    "name": "1st Main Road",
    "highway": "tertiary",
    "from": "n51",
    "to": "n52",
    "distance": 0.25,
    "status": "green",
    "coords": [
      [
        12.9291803,
        77.6348893
      ],
      [
        12.929079,
        77.6350689
      ],
      [
        12.9287393,
        77.6357761
      ],
      [
        12.928671,
        77.6359185
      ],
      [
        12.9285599,
        77.6361497
      ],
      [
        12.9285207,
        77.6362345
      ],
      [
        12.9284025,
        77.6364905
      ],
      [
        12.9283778,
        77.636544
      ],
      [
        12.9282348,
        77.6368509
      ],
      [
        12.9282199,
        77.6368799
      ],
      [
        12.9281977,
        77.6369087
      ],
      [
        12.9281564,
        77.6369485
      ]
    ]
  },
  {
    "id": "r42",
    "name": "1st Main Road",
    "highway": "tertiary",
    "from": "n52",
    "to": "n49",
    "distance": 0.29,
    "status": "yellow",
    "coords": [
      [
        12.9281564,
        77.6369485
      ],
      [
        12.9275787,
        77.6375047
      ],
      [
        12.9274716,
        77.6376182
      ],
      [
        12.9273744,
        77.6377093
      ],
      [
        12.9273141,
        77.6377456
      ],
      [
        12.9272905,
        77.637755
      ],
      [
        12.9272644,
        77.6377576
      ],
      [
        12.9271507,
        77.6377362
      ],
      [
        12.9262879,
        77.6375739
      ],
      [
        12.9258691,
        77.6374913
      ]
    ]
  },
  {
    "id": "r43",
    "name": "1st Main Road",
    "highway": "tertiary",
    "from": "n49",
    "to": "n53",
    "distance": 0.07,
    "status": "green",
    "coords": [
      [
        12.9258691,
        77.6374913
      ],
      [
        12.9252567,
        77.6374045
      ]
    ]
  },
  {
    "id": "r44",
    "name": "1st Main Road",
    "highway": "tertiary",
    "from": "n53",
    "to": "n54",
    "distance": 0.01,
    "status": "green",
    "coords": [
      [
        12.9252567,
        77.6374045
      ],
      [
        12.925166,
        77.6373952
      ]
    ]
  },
  {
    "id": "r45",
    "name": "10th Main Road",
    "highway": "residential",
    "from": "n37",
    "to": "n55",
    "distance": 0.24,
    "status": "green",
    "coords": [
      [
        12.9265195,
        77.6277708
      ],
      [
        12.9272465,
        77.6278762
      ],
      [
        12.9281115,
        77.6280028
      ],
      [
        12.9286816,
        77.6280862
      ]
    ]
  },
  {
    "id": "r46",
    "name": "9th Main Road",
    "highway": "residential",
    "from": "n56",
    "to": "n36",
    "distance": 0.26,
    "status": "green",
    "coords": [
      [
        12.9286343,
        77.6285962
      ],
      [
        12.926351,
        77.6281978
      ]
    ]
  },
  {
    "id": "r47",
    "name": "16th Main Road",
    "highway": "residential",
    "from": "n57",
    "to": "n58",
    "distance": 0.06,
    "status": "green",
    "coords": [
      [
        12.9306064,
        77.6248423
      ],
      [
        12.9301442,
        77.6246592
      ]
    ]
  },
  {
    "id": "r48",
    "name": "16th Main Road",
    "highway": "residential",
    "from": "n58",
    "to": "n59",
    "distance": 0.05,
    "status": "green",
    "coords": [
      [
        12.9301442,
        77.6246592
      ],
      [
        12.9297154,
        77.624524
      ]
    ]
  },
  {
    "id": "r49",
    "name": "16th Main Road",
    "highway": "residential",
    "from": "n59",
    "to": "n60",
    "distance": 0.05,
    "status": "green",
    "coords": [
      [
        12.9297154,
        77.624524
      ],
      [
        12.9292697,
        77.6243495
      ]
    ]
  },
  {
    "id": "r50",
    "name": "16th Main Road",
    "highway": "residential",
    "from": "n60",
    "to": "n61",
    "distance": 0.08,
    "status": "green",
    "coords": [
      [
        12.9292697,
        77.6243495
      ],
      [
        12.9285949,
        77.6241075
      ]
    ]
  },
  {
    "id": "r51",
    "name": "16th Main Road",
    "highway": "residential",
    "from": "n61",
    "to": "n41",
    "distance": 0.07,
    "status": "green",
    "coords": [
      [
        12.9285949,
        77.6241075
      ],
      [
        12.9280436,
        77.6239069
      ]
    ]
  },
  {
    "id": "r52",
    "name": "16th Main Road",
    "highway": "residential",
    "from": "n41",
    "to": "n62",
    "distance": 0.08,
    "status": "green",
    "coords": [
      [
        12.9280436,
        77.6239069
      ],
      [
        12.9273784,
        77.6236662
      ]
    ]
  },
  {
    "id": "r53",
    "name": "16th Main Road",
    "highway": "residential",
    "from": "n62",
    "to": "n63",
    "distance": 0.08,
    "status": "yellow",
    "coords": [
      [
        12.9273784,
        77.6236662
      ],
      [
        12.9266575,
        77.6234079
      ]
    ]
  },
  {
    "id": "r54",
    "name": "16th Main Road",
    "highway": "residential",
    "from": "n63",
    "to": "n64",
    "distance": 0.01,
    "status": "yellow",
    "coords": [
      [
        12.9266575,
        77.6234079
      ],
      [
        12.9266027,
        77.6233883
      ],
      [
        12.9265612,
        77.623379
      ]
    ]
  },
  {
    "id": "r55",
    "name": "16th C Main Road",
    "highway": "residential",
    "from": "n65",
    "to": "n66",
    "distance": 0.13,
    "status": "yellow",
    "coords": [
      [
        12.9364379,
        77.6269037
      ],
      [
        12.9356757,
        77.6259763
      ]
    ]
  },
  {
    "id": "r56",
    "name": "16th C Main Road",
    "highway": "residential",
    "from": "n66",
    "to": "n67",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9356757,
        77.6259763
      ],
      [
        12.9354211,
        77.625671
      ]
    ]
  },
  {
    "id": "r57",
    "name": "16th C Main Road",
    "highway": "residential",
    "from": "n67",
    "to": "n68",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9354211,
        77.625671
      ],
      [
        12.9351662,
        77.6253582
      ]
    ]
  },
  {
    "id": "r58",
    "name": "16th C Main Road",
    "highway": "residential",
    "from": "n68",
    "to": "n69",
    "distance": 0.05,
    "status": "green",
    "coords": [
      [
        12.9351662,
        77.6253582
      ],
      [
        12.934835,
        77.6249936
      ]
    ]
  },
  {
    "id": "r59",
    "name": "4th Cross Road",
    "highway": "residential",
    "from": "n70",
    "to": "n71",
    "distance": 0.07,
    "status": "green",
    "coords": [
      [
        12.935888,
        77.6202745
      ],
      [
        12.936255,
        77.61971
      ]
    ]
  },
  {
    "id": "r60",
    "name": "4th Cross Road",
    "highway": "residential",
    "from": "n71",
    "to": "n72",
    "distance": 0.11,
    "status": "yellow",
    "coords": [
      [
        12.936255,
        77.61971
      ],
      [
        12.9367426,
        77.6188787
      ]
    ]
  },
  {
    "id": "r61",
    "name": "4th Cross Road",
    "highway": "residential",
    "from": "n72",
    "to": "n73",
    "distance": 0.07,
    "status": "yellow",
    "coords": [
      [
        12.9367426,
        77.6188787
      ],
      [
        12.9370493,
        77.6184019
      ],
      [
        12.9370655,
        77.6183692
      ]
    ]
  },
  {
    "id": "r62",
    "name": "17th E Main Road",
    "highway": "residential",
    "from": "n74",
    "to": "n75",
    "distance": 0.05,
    "status": "yellow",
    "coords": [
      [
        12.9349478,
        77.6190496
      ],
      [
        12.9353718,
        77.619174
      ]
    ]
  },
  {
    "id": "r63",
    "name": "17th E Main Road",
    "highway": "residential",
    "from": "n75",
    "to": "n76",
    "distance": 0.03,
    "status": "green",
    "coords": [
      [
        12.9353718,
        77.619174
      ],
      [
        12.9356461,
        77.6193042
      ]
    ]
  },
  {
    "id": "r64",
    "name": "17th E Main Road",
    "highway": "residential",
    "from": "n76",
    "to": "n77",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9356461,
        77.6193042
      ],
      [
        12.9359272,
        77.6194968
      ]
    ]
  },
  {
    "id": "r65",
    "name": "17th E Main Road",
    "highway": "residential",
    "from": "n77",
    "to": "n71",
    "distance": 0.04,
    "status": "yellow",
    "coords": [
      [
        12.9359272,
        77.6194968
      ],
      [
        12.936255,
        77.61971
      ]
    ]
  },
  {
    "id": "r66",
    "name": "17th E Main Road",
    "highway": "residential",
    "from": "n71",
    "to": "n78",
    "distance": 0.04,
    "status": "yellow",
    "coords": [
      [
        12.936255,
        77.61971
      ],
      [
        12.9365196,
        77.6198948
      ]
    ]
  },
  {
    "id": "r67",
    "name": "17th E Main Road",
    "highway": "residential",
    "from": "n78",
    "to": "n21",
    "distance": 0.05,
    "status": "green",
    "coords": [
      [
        12.9365196,
        77.6198948
      ],
      [
        12.9368231,
        77.6200902
      ],
      [
        12.9368678,
        77.620119
      ]
    ]
  },
  {
    "id": "r68",
    "name": "4th A Cross Road",
    "highway": "residential",
    "from": "n72",
    "to": "n78",
    "distance": 0.12,
    "status": "yellow",
    "coords": [
      [
        12.9367426,
        77.6188787
      ],
      [
        12.9368516,
        77.6193197
      ],
      [
        12.9365196,
        77.6198948
      ]
    ]
  },
  {
    "id": "r69",
    "name": "4th A Cross Road",
    "highway": "residential",
    "from": "n78",
    "to": "n79",
    "distance": 0.07,
    "status": "green",
    "coords": [
      [
        12.9365196,
        77.6198948
      ],
      [
        12.9362043,
        77.6204359
      ]
    ]
  },
  {
    "id": "r70",
    "name": "2nd Cross Road",
    "highway": "residential",
    "from": "n80",
    "to": "n81",
    "distance": 0.05,
    "status": "yellow",
    "coords": [
      [
        12.9360934,
        77.615861
      ],
      [
        12.9360584,
        77.6158761
      ],
      [
        12.9357342,
        77.61607
      ]
    ]
  },
  {
    "id": "r71",
    "name": "2nd Cross Road",
    "highway": "residential",
    "from": "n81",
    "to": "n82",
    "distance": 0.11,
    "status": "green",
    "coords": [
      [
        12.9357342,
        77.61607
      ],
      [
        12.9356104,
        77.616132
      ],
      [
        12.9355439,
        77.6161652
      ],
      [
        12.9348509,
        77.6165185
      ]
    ]
  },
  {
    "id": "r72",
    "name": "2nd Cross Road",
    "highway": "residential",
    "from": "n82",
    "to": "n83",
    "distance": 0.05,
    "status": "green",
    "coords": [
      [
        12.9348509,
        77.6165185
      ],
      [
        12.9347036,
        77.6169766
      ]
    ]
  },
  {
    "id": "r73",
    "name": "2nd Cross Road",
    "highway": "residential",
    "from": "n83",
    "to": "n84",
    "distance": 0.18,
    "status": "yellow",
    "coords": [
      [
        12.9347036,
        77.6169766
      ],
      [
        12.934582,
        77.6174168
      ],
      [
        12.9346321,
        77.6178904
      ],
      [
        12.9346275,
        77.6181263
      ],
      [
        12.9346287,
        77.6185891
      ]
    ]
  },
  {
    "id": "r74",
    "name": "2nd Cross Road",
    "highway": "residential",
    "from": "n84",
    "to": "n85",
    "distance": 0.11,
    "status": "green",
    "coords": [
      [
        12.9346287,
        77.6185891
      ],
      [
        12.934614,
        77.6189138
      ],
      [
        12.9346158,
        77.619637
      ]
    ]
  },
  {
    "id": "r75",
    "name": "2nd Cross Road",
    "highway": "residential",
    "from": "n85",
    "to": "n86",
    "distance": 0.05,
    "status": "green",
    "coords": [
      [
        12.9346158,
        77.619637
      ],
      [
        12.9346137,
        77.6200525
      ]
    ]
  },
  {
    "id": "r76",
    "name": "3rd Cross Road",
    "highway": "residential",
    "from": "n87",
    "to": "n88",
    "distance": 0.1,
    "status": "green",
    "coords": [
      [
        12.9366,
        77.61838
      ],
      [
        12.9361142,
        77.6191864
      ]
    ]
  },
  {
    "id": "r77",
    "name": "3rd Cross Road",
    "highway": "residential",
    "from": "n88",
    "to": "n77",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9361142,
        77.6191864
      ],
      [
        12.9359272,
        77.6194968
      ]
    ]
  },
  {
    "id": "r78",
    "name": "3rd Cross Road",
    "highway": "residential",
    "from": "n77",
    "to": "n89",
    "distance": 0.08,
    "status": "yellow",
    "coords": [
      [
        12.9359272,
        77.6194968
      ],
      [
        12.9355672,
        77.6200945
      ]
    ]
  },
  {
    "id": "r79",
    "name": "3rd Cross Road",
    "highway": "residential",
    "from": "n89",
    "to": "n90",
    "distance": 0.05,
    "status": "green",
    "coords": [
      [
        12.9355672,
        77.6200945
      ],
      [
        12.9353523,
        77.6204512
      ]
    ]
  },
  {
    "id": "r80",
    "name": "17th C Main Road",
    "highway": "residential",
    "from": "n10",
    "to": "n91",
    "distance": 0.09,
    "status": "green",
    "coords": [
      [
        12.9336872,
        77.6196166
      ],
      [
        12.9337606,
        77.6196251
      ],
      [
        12.9344019,
        77.6199383
      ]
    ]
  },
  {
    "id": "r81",
    "name": "17th C Main Road",
    "highway": "residential",
    "from": "n91",
    "to": "n86",
    "distance": 0.03,
    "status": "green",
    "coords": [
      [
        12.9344019,
        77.6199383
      ],
      [
        12.9346137,
        77.6200525
      ]
    ]
  },
  {
    "id": "r82",
    "name": "17th C Main Road",
    "highway": "residential",
    "from": "n86",
    "to": "n92",
    "distance": 0.06,
    "status": "green",
    "coords": [
      [
        12.9346137,
        77.6200525
      ],
      [
        12.9347951,
        77.6201503
      ],
      [
        12.9350544,
        77.6202902
      ]
    ]
  },
  {
    "id": "r83",
    "name": "17th C Main Road",
    "highway": "residential",
    "from": "n92",
    "to": "n90",
    "distance": 0.04,
    "status": "red",
    "coords": [
      [
        12.9350544,
        77.6202902
      ],
      [
        12.9353523,
        77.6204512
      ]
    ]
  },
  {
    "id": "r84",
    "name": "17th C Main Road",
    "highway": "residential",
    "from": "n90",
    "to": "n24",
    "distance": 0.12,
    "status": "red",
    "coords": [
      [
        12.9353523,
        77.6204512
      ],
      [
        12.9361425,
        77.620874
      ],
      [
        12.9362852,
        77.6209478
      ],
      [
        12.9363405,
        77.6209764
      ]
    ]
  },
  {
    "id": "r85",
    "name": "2nd Main Road",
    "highway": "residential",
    "from": "n11",
    "to": "n93",
    "distance": 0.1,
    "status": "yellow",
    "coords": [
      [
        12.9336043,
        77.6185935
      ],
      [
        12.9340118,
        77.6185956
      ],
      [
        12.9345244,
        77.6185936
      ]
    ]
  },
  {
    "id": "r86",
    "name": "Mahayogi Vemana Road",
    "highway": "primary",
    "from": "n94",
    "to": "n95",
    "distance": 0.06,
    "status": "green",
    "coords": [
      [
        12.937197,
        77.626942
      ],
      [
        12.9369729,
        77.6266664
      ],
      [
        12.9368612,
        77.6265291
      ]
    ]
  },
  {
    "id": "r87",
    "name": "Mahayogi Vemana Road",
    "highway": "primary",
    "from": "n95",
    "to": "n96",
    "distance": 0.14,
    "status": "yellow",
    "coords": [
      [
        12.9368612,
        77.6265291
      ],
      [
        12.9360846,
        77.6255428
      ]
    ]
  },
  {
    "id": "r88",
    "name": "2nd Cross Road",
    "highway": "residential",
    "from": "n62",
    "to": "n97",
    "distance": 0.21,
    "status": "green",
    "coords": [
      [
        12.9273784,
        77.6236662
      ],
      [
        12.9266427,
        77.6254533
      ]
    ]
  },
  {
    "id": "r89",
    "name": "2nd Cross Road",
    "highway": "residential",
    "from": "n97",
    "to": "n98",
    "distance": 0.16,
    "status": "green",
    "coords": [
      [
        12.9266427,
        77.6254533
      ],
      [
        12.9260844,
        77.62681
      ]
    ]
  },
  {
    "id": "r90",
    "name": "2nd Cross Road",
    "highway": "residential",
    "from": "n98",
    "to": "n99",
    "distance": 0.21,
    "status": "green",
    "coords": [
      [
        12.9260844,
        77.62681
      ],
      [
        12.9253643,
        77.6285713
      ]
    ]
  },
  {
    "id": "r91",
    "name": "5th Cross Road",
    "highway": "residential",
    "from": "n100",
    "to": "n101",
    "distance": 0.07,
    "status": "green",
    "coords": [
      [
        12.9278704,
        77.6258862
      ],
      [
        12.9281225,
        77.6252634
      ]
    ]
  },
  {
    "id": "r92",
    "name": "5th Cross Road",
    "highway": "residential",
    "from": "n101",
    "to": "n102",
    "distance": 0.07,
    "status": "red",
    "coords": [
      [
        12.9281225,
        77.6252634
      ],
      [
        12.9283574,
        77.6246886
      ]
    ]
  },
  {
    "id": "r93",
    "name": "5th Cross Road",
    "highway": "residential",
    "from": "n102",
    "to": "n61",
    "distance": 0.07,
    "status": "green",
    "coords": [
      [
        12.9283574,
        77.6246886
      ],
      [
        12.9285949,
        77.6241075
      ]
    ]
  },
  {
    "id": "r94",
    "name": "5th Cross Road",
    "highway": "residential",
    "from": "n61",
    "to": "n103",
    "distance": 0.05,
    "status": "yellow",
    "coords": [
      [
        12.9285949,
        77.6241075
      ],
      [
        12.9287827,
        77.6236481
      ]
    ]
  },
  {
    "id": "r95",
    "name": "5th Cross Road",
    "highway": "residential",
    "from": "n103",
    "to": "n104",
    "distance": 0.06,
    "status": "green",
    "coords": [
      [
        12.9287827,
        77.6236481
      ],
      [
        12.9289887,
        77.623144
      ]
    ]
  },
  {
    "id": "r96",
    "name": "5th Cross Road",
    "highway": "residential",
    "from": "n104",
    "to": "n105",
    "distance": 0.15,
    "status": "green",
    "coords": [
      [
        12.9289887,
        77.623144
      ],
      [
        12.9295187,
        77.6218475
      ]
    ]
  },
  {
    "id": "r97",
    "name": "15th Main Road",
    "highway": "residential",
    "from": "n102",
    "to": "n106",
    "distance": 0.26,
    "status": "red",
    "coords": [
      [
        12.9283574,
        77.6246886
      ],
      [
        12.9292094,
        77.625021
      ],
      [
        12.9305619,
        77.6255487
      ]
    ]
  },
  {
    "id": "r98",
    "name": "6th Cross Road",
    "highway": "residential",
    "from": "n60",
    "to": "n107",
    "distance": 0.2,
    "status": "green",
    "coords": [
      [
        12.9292697,
        77.6243495
      ],
      [
        12.9300109,
        77.6226739
      ]
    ]
  },
  {
    "id": "r99",
    "name": "6th Cross Road",
    "highway": "residential",
    "from": "n107",
    "to": "n108",
    "distance": 0.06,
    "status": "green",
    "coords": [
      [
        12.9300109,
        77.6226739
      ],
      [
        12.9302411,
        77.6221345
      ]
    ]
  },
  {
    "id": "r100",
    "name": "6th A Cross Road",
    "highway": "residential",
    "from": "n109",
    "to": "n110",
    "distance": 0.05,
    "status": "green",
    "coords": [
      [
        12.9312415,
        77.6231979
      ],
      [
        12.9308195,
        77.6230182
      ]
    ]
  },
  {
    "id": "r101",
    "name": "6th A Cross Road",
    "highway": "residential",
    "from": "n110",
    "to": "n111",
    "distance": 0.05,
    "status": "green",
    "coords": [
      [
        12.9308195,
        77.6230182
      ],
      [
        12.9304106,
        77.6228441
      ]
    ]
  },
  {
    "id": "r102",
    "name": "6th A Cross Road",
    "highway": "residential",
    "from": "n111",
    "to": "n107",
    "distance": 0.05,
    "status": "yellow",
    "coords": [
      [
        12.9304106,
        77.6228441
      ],
      [
        12.930295,
        77.6227949
      ],
      [
        12.9300109,
        77.6226739
      ]
    ]
  },
  {
    "id": "r103",
    "name": "6th B Cross Road",
    "highway": "residential",
    "from": "n110",
    "to": "n58",
    "distance": 0.19,
    "status": "red",
    "coords": [
      [
        12.9308195,
        77.6230182
      ],
      [
        12.9301442,
        77.6246592
      ]
    ]
  },
  {
    "id": "r104",
    "name": "6th A Cross Road",
    "highway": "residential",
    "from": "n111",
    "to": "n59",
    "distance": 0.2,
    "status": "yellow",
    "coords": [
      [
        12.9304106,
        77.6228441
      ],
      [
        12.9297154,
        77.624524
      ]
    ]
  },
  {
    "id": "r105",
    "name": "14th Main Road",
    "highway": "residential",
    "from": "n112",
    "to": "n101",
    "distance": 0.28,
    "status": "yellow",
    "coords": [
      [
        12.9305132,
        77.6261452
      ],
      [
        12.9281225,
        77.6252634
      ]
    ]
  },
  {
    "id": "r106",
    "name": "17th Main Road",
    "highway": "residential",
    "from": "n103",
    "to": "n113",
    "distance": 0.23,
    "status": "green",
    "coords": [
      [
        12.9287827,
        77.6236481
      ],
      [
        12.9268492,
        77.6229326
      ]
    ]
  },
  {
    "id": "r107",
    "name": "2nd Cross Road",
    "highway": "residential",
    "from": "n114",
    "to": "n115",
    "distance": 0.15,
    "status": "yellow",
    "coords": [
      [
        12.9275558,
        77.6225672
      ],
      [
        12.9281284,
        77.6212637
      ]
    ]
  },
  {
    "id": "r108",
    "name": "3rd Cross Road",
    "highway": "residential",
    "from": "n116",
    "to": "n117",
    "distance": 0.15,
    "status": "green",
    "coords": [
      [
        12.9280664,
        77.6227726
      ],
      [
        12.9285868,
        77.6214602
      ]
    ]
  },
  {
    "id": "r109",
    "name": "4th Cross Road",
    "highway": "residential",
    "from": "n118",
    "to": "n119",
    "distance": 0.15,
    "status": "green",
    "coords": [
      [
        12.9284829,
        77.6229401
      ],
      [
        12.9290553,
        77.621651
      ]
    ]
  },
  {
    "id": "r110",
    "name": "5th Cross Road",
    "highway": "residential",
    "from": "n95",
    "to": "n65",
    "distance": 0.06,
    "status": "green",
    "coords": [
      [
        12.9368612,
        77.6265291
      ],
      [
        12.9364379,
        77.6269037
      ]
    ]
  },
  {
    "id": "r111",
    "name": "5th Cross Road",
    "highway": "residential",
    "from": "n65",
    "to": "n120",
    "distance": 0.05,
    "status": "green",
    "coords": [
      [
        12.9364379,
        77.6269037
      ],
      [
        12.936103,
        77.627218
      ]
    ]
  },
  {
    "id": "r112",
    "name": "5th Cross Road",
    "highway": "residential",
    "from": "n120",
    "to": "n121",
    "distance": 0.03,
    "status": "green",
    "coords": [
      [
        12.936103,
        77.627218
      ],
      [
        12.9358786,
        77.6274347
      ]
    ]
  },
  {
    "id": "r113",
    "name": "5th Cross Road",
    "highway": "residential",
    "from": "n121",
    "to": "n122",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9358786,
        77.6274347
      ],
      [
        12.9355998,
        77.627704
      ]
    ]
  },
  {
    "id": "r114",
    "name": "12th Main Road",
    "highway": "residential",
    "from": "n123",
    "to": "n124",
    "distance": 0.07,
    "status": "yellow",
    "coords": [
      [
        12.934432,
        77.6296147
      ],
      [
        12.9344121,
        77.6295887
      ],
      [
        12.9343909,
        77.6295609
      ],
      [
        12.9340363,
        77.6290958
      ]
    ]
  },
  {
    "id": "r115",
    "name": "12th Main Road",
    "highway": "residential",
    "from": "n124",
    "to": "n125",
    "distance": 0.03,
    "status": "green",
    "coords": [
      [
        12.9340363,
        77.6290958
      ],
      [
        12.933861,
        77.6288446
      ]
    ]
  },
  {
    "id": "r116",
    "name": "12th Main Road",
    "highway": "residential",
    "from": "n125",
    "to": "n126",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.933861,
        77.6288446
      ],
      [
        12.933645,
        77.6285657
      ]
    ]
  },
  {
    "id": "r117",
    "name": "12th Main Road",
    "highway": "residential",
    "from": "n126",
    "to": "n127",
    "distance": 0.03,
    "status": "green",
    "coords": [
      [
        12.933645,
        77.6285657
      ],
      [
        12.9334607,
        77.6283279
      ]
    ]
  },
  {
    "id": "r118",
    "name": "12th Main Road",
    "highway": "residential",
    "from": "n127",
    "to": "n128",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9334607,
        77.6283279
      ],
      [
        12.933231,
        77.6280313
      ]
    ]
  },
  {
    "id": "r119",
    "name": "12th Main Road",
    "highway": "residential",
    "from": "n128",
    "to": "n129",
    "distance": 0.01,
    "status": "yellow",
    "coords": [
      [
        12.933231,
        77.6280313
      ],
      [
        12.9331537,
        77.6279317
      ]
    ]
  },
  {
    "id": "r120",
    "name": "12th Main Road",
    "highway": "residential",
    "from": "n129",
    "to": "n130",
    "distance": 0.05,
    "status": "green",
    "coords": [
      [
        12.9331537,
        77.6279317
      ],
      [
        12.932879,
        77.6275691
      ]
    ]
  },
  {
    "id": "r121",
    "name": "16th Main Road",
    "highway": "residential",
    "from": "n131",
    "to": "n132",
    "distance": 0.05,
    "status": "yellow",
    "coords": [
      [
        12.9342129,
        77.6260096
      ],
      [
        12.934548,
        77.6263648
      ]
    ]
  },
  {
    "id": "r122",
    "name": "16th Main Road",
    "highway": "residential",
    "from": "n132",
    "to": "n133",
    "distance": 0.05,
    "status": "green",
    "coords": [
      [
        12.934548,
        77.6263648
      ],
      [
        12.9348251,
        77.6266872
      ]
    ]
  },
  {
    "id": "r123",
    "name": "16th Main Road",
    "highway": "residential",
    "from": "n133",
    "to": "n134",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9348251,
        77.6266872
      ],
      [
        12.9350341,
        77.6269449
      ]
    ]
  },
  {
    "id": "r124",
    "name": "16th Main Road",
    "highway": "residential",
    "from": "n134",
    "to": "n122",
    "distance": 0.1,
    "status": "green",
    "coords": [
      [
        12.9350341,
        77.6269449
      ],
      [
        12.9355998,
        77.627704
      ]
    ]
  },
  {
    "id": "r125",
    "name": "16th Main Road",
    "highway": "residential",
    "from": "n122",
    "to": "n135",
    "distance": 0.06,
    "status": "green",
    "coords": [
      [
        12.9355998,
        77.627704
      ],
      [
        12.9359216,
        77.62805
      ],
      [
        12.9359641,
        77.6280956
      ]
    ]
  },
  {
    "id": "r126",
    "name": "15th Main Road",
    "highway": "residential",
    "from": "n136",
    "to": "n137",
    "distance": 0.06,
    "status": "green",
    "coords": [
      [
        12.9338436,
        77.6266153
      ],
      [
        12.9341813,
        77.6270532
      ]
    ]
  },
  {
    "id": "r127",
    "name": "15th Main Road",
    "highway": "residential",
    "from": "n137",
    "to": "n138",
    "distance": 0.13,
    "status": "green",
    "coords": [
      [
        12.9341813,
        77.6270532
      ],
      [
        12.9348678,
        77.6279905
      ]
    ]
  },
  {
    "id": "r128",
    "name": "15th Main Road",
    "highway": "residential",
    "from": "n138",
    "to": "n139",
    "distance": 0.03,
    "status": "green",
    "coords": [
      [
        12.9348678,
        77.6279905
      ],
      [
        12.9350477,
        77.6282361
      ]
    ]
  },
  {
    "id": "r129",
    "name": "15th Main Road",
    "highway": "residential",
    "from": "n139",
    "to": "n140",
    "distance": 0.06,
    "status": "green",
    "coords": [
      [
        12.9350477,
        77.6282361
      ],
      [
        12.9352847,
        77.6286021
      ],
      [
        12.9353334,
        77.6286771
      ],
      [
        12.935357,
        77.6287135
      ]
    ]
  },
  {
    "id": "r130",
    "name": "15th Main Road",
    "highway": "residential",
    "from": "n140",
    "to": "n141",
    "distance": 0.01,
    "status": "green",
    "coords": [
      [
        12.935357,
        77.6287135
      ],
      [
        12.9353985,
        77.6287871
      ]
    ]
  },
  {
    "id": "r131",
    "name": "4th Cross Road",
    "highway": "residential",
    "from": "n134",
    "to": "n142",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9350341,
        77.6269449
      ],
      [
        12.9352401,
        77.6266654
      ]
    ]
  },
  {
    "id": "r132",
    "name": "4th Cross Road",
    "highway": "residential",
    "from": "n142",
    "to": "n143",
    "distance": 0.03,
    "status": "green",
    "coords": [
      [
        12.9352401,
        77.6266654
      ],
      [
        12.9354104,
        77.6263947
      ]
    ]
  },
  {
    "id": "r133",
    "name": "4th Cross Road",
    "highway": "residential",
    "from": "n143",
    "to": "n66",
    "distance": 0.05,
    "status": "green",
    "coords": [
      [
        12.9354104,
        77.6263947
      ],
      [
        12.9356667,
        77.6259874
      ],
      [
        12.9356757,
        77.6259763
      ]
    ]
  },
  {
    "id": "r134",
    "name": "4th Cross Road",
    "highway": "residential",
    "from": "n66",
    "to": "n96",
    "distance": 0.07,
    "status": "red",
    "coords": [
      [
        12.9356757,
        77.6259763
      ],
      [
        12.9360846,
        77.6255428
      ]
    ]
  },
  {
    "id": "r135",
    "name": "3rd Cross Road",
    "highway": "residential",
    "from": "n67",
    "to": "n133",
    "distance": 0.13,
    "status": "green",
    "coords": [
      [
        12.9354211,
        77.625671
      ],
      [
        12.9348251,
        77.6266872
      ]
    ]
  },
  {
    "id": "r136",
    "name": "2nd A Cross Road",
    "highway": "residential",
    "from": "n68",
    "to": "n132",
    "distance": 0.13,
    "status": "yellow",
    "coords": [
      [
        12.9351662,
        77.6253582
      ],
      [
        12.934548,
        77.6263648
      ]
    ]
  },
  {
    "id": "r137",
    "name": "5th Cross Road",
    "highway": "residential",
    "from": "n139",
    "to": "n124",
    "distance": 0.15,
    "status": "yellow",
    "coords": [
      [
        12.9350477,
        77.6282361
      ],
      [
        12.9340363,
        77.6290958
      ]
    ]
  },
  {
    "id": "r138",
    "name": "5th Cross Road",
    "highway": "residential",
    "from": "n138",
    "to": "n144",
    "distance": 0.04,
    "status": "yellow",
    "coords": [
      [
        12.9348678,
        77.6279905
      ],
      [
        12.9346018,
        77.628223
      ]
    ]
  },
  {
    "id": "r139",
    "name": "5th Cross Road",
    "highway": "residential",
    "from": "n144",
    "to": "n145",
    "distance": 0.03,
    "status": "green",
    "coords": [
      [
        12.9346018,
        77.628223
      ],
      [
        12.9343774,
        77.628415
      ]
    ]
  },
  {
    "id": "r140",
    "name": "5th Cross Road",
    "highway": "residential",
    "from": "n145",
    "to": "n146",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9343774,
        77.628415
      ],
      [
        12.9341318,
        77.6286193
      ]
    ]
  },
  {
    "id": "r141",
    "name": "5th Cross Road",
    "highway": "residential",
    "from": "n146",
    "to": "n125",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9341318,
        77.6286193
      ],
      [
        12.933861,
        77.6288446
      ]
    ]
  },
  {
    "id": "r142",
    "name": "3rd Cross Road",
    "highway": "residential",
    "from": "n137",
    "to": "n147",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9341813,
        77.6270532
      ],
      [
        12.9339472,
        77.6272783
      ]
    ]
  },
  {
    "id": "r143",
    "name": "3rd Cross Road",
    "highway": "residential",
    "from": "n147",
    "to": "n148",
    "distance": 0.03,
    "status": "green",
    "coords": [
      [
        12.9339472,
        77.6272783
      ],
      [
        12.9337214,
        77.6274834
      ]
    ]
  },
  {
    "id": "r144",
    "name": "3rd Cross Road",
    "highway": "residential",
    "from": "n148",
    "to": "n149",
    "distance": 0.03,
    "status": "green",
    "coords": [
      [
        12.9337214,
        77.6274834
      ],
      [
        12.93349,
        77.6276834
      ]
    ]
  },
  {
    "id": "r145",
    "name": "3rd Cross Road",
    "highway": "residential",
    "from": "n149",
    "to": "n129",
    "distance": 0.05,
    "status": "green",
    "coords": [
      [
        12.93349,
        77.6276834
      ],
      [
        12.9331537,
        77.6279317
      ]
    ]
  },
  {
    "id": "r146",
    "name": "15th Main Road",
    "highway": "residential",
    "from": "n147",
    "to": "n144",
    "distance": 0.13,
    "status": "green",
    "coords": [
      [
        12.9339472,
        77.6272783
      ],
      [
        12.9346018,
        77.628223
      ]
    ]
  },
  {
    "id": "r147",
    "name": "14th Main Road",
    "highway": "residential",
    "from": "n148",
    "to": "n145",
    "distance": 0.12,
    "status": "yellow",
    "coords": [
      [
        12.9337214,
        77.6274834
      ],
      [
        12.9343774,
        77.628415
      ]
    ]
  },
  {
    "id": "r148",
    "name": "13th Main Road",
    "highway": "residential",
    "from": "n149",
    "to": "n146",
    "distance": 0.12,
    "status": "green",
    "coords": [
      [
        12.93349,
        77.6276834
      ],
      [
        12.9341318,
        77.6286193
      ]
    ]
  },
  {
    "id": "r149",
    "name": "2nd Cross",
    "highway": "residential",
    "from": "n128",
    "to": "n150",
    "distance": 0.13,
    "status": "green",
    "coords": [
      [
        12.933231,
        77.6280313
      ],
      [
        12.9323767,
        77.6287962
      ]
    ]
  },
  {
    "id": "r150",
    "name": "2nd Cross",
    "highway": "residential",
    "from": "n150",
    "to": "n151",
    "distance": 0.15,
    "status": "green",
    "coords": [
      [
        12.9323767,
        77.6287962
      ],
      [
        12.9311848,
        77.6294317
      ]
    ]
  },
  {
    "id": "r151",
    "name": "2nd Cross",
    "highway": "residential",
    "from": "n151",
    "to": "n152",
    "distance": 0.01,
    "status": "yellow",
    "coords": [
      [
        12.9311848,
        77.6294317
      ],
      [
        12.9311063,
        77.629466
      ]
    ]
  },
  {
    "id": "r152",
    "name": "2nd Cross",
    "highway": "residential",
    "from": "n152",
    "to": "n153",
    "distance": 0.07,
    "status": "green",
    "coords": [
      [
        12.9311063,
        77.629466
      ],
      [
        12.9305529,
        77.6297078
      ]
    ]
  },
  {
    "id": "r153",
    "name": "1st Cross Road",
    "highway": "residential",
    "from": "n154",
    "to": "n155",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9309442,
        77.6275279
      ],
      [
        12.9308869,
        77.6278742
      ]
    ]
  },
  {
    "id": "r154",
    "name": "1st Cross Road",
    "highway": "residential",
    "from": "n155",
    "to": "n156",
    "distance": 0.06,
    "status": "green",
    "coords": [
      [
        12.9308869,
        77.6278742
      ],
      [
        12.9308319,
        77.6281429
      ],
      [
        12.9307784,
        77.6284042
      ]
    ]
  },
  {
    "id": "r155",
    "name": "1st Cross Road",
    "highway": "residential",
    "from": "n156",
    "to": "n157",
    "distance": 0.06,
    "status": "green",
    "coords": [
      [
        12.9307784,
        77.6284042
      ],
      [
        12.9306743,
        77.6289732
      ]
    ]
  },
  {
    "id": "r156",
    "name": "1st Cross Road",
    "highway": "residential",
    "from": "n157",
    "to": "n158",
    "distance": 0.05,
    "status": "green",
    "coords": [
      [
        12.9306743,
        77.6289732
      ],
      [
        12.9306062,
        77.6293853
      ]
    ]
  },
  {
    "id": "r157",
    "name": "1st Cross Road",
    "highway": "residential",
    "from": "n158",
    "to": "n153",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9306062,
        77.6293853
      ],
      [
        12.9305529,
        77.6297078
      ]
    ]
  },
  {
    "id": "r158",
    "name": "1st Cross Road",
    "highway": "residential",
    "from": "n153",
    "to": "n159",
    "distance": 0.1,
    "status": "green",
    "coords": [
      [
        12.9305529,
        77.6297078
      ],
      [
        12.9303089,
        77.6306021
      ]
    ]
  },
  {
    "id": "r159",
    "name": "1st Cross Road",
    "highway": "residential",
    "from": "n159",
    "to": "n160",
    "distance": 0.23,
    "status": "green",
    "coords": [
      [
        12.9303089,
        77.6306021
      ],
      [
        12.9300159,
        77.631836
      ],
      [
        12.9300316,
        77.6320264
      ],
      [
        12.9302381,
        77.6326047
      ]
    ]
  },
  {
    "id": "r160",
    "name": "1st Cross Road",
    "highway": "residential",
    "from": "n160",
    "to": "n161",
    "distance": 0.05,
    "status": "green",
    "coords": [
      [
        12.9302381,
        77.6326047
      ],
      [
        12.9303192,
        77.6328276
      ],
      [
        12.9303769,
        77.6329873
      ],
      [
        12.9303804,
        77.632997
      ],
      [
        12.9303988,
        77.6330477
      ]
    ]
  },
  {
    "id": "r161",
    "name": "10th Main Road",
    "highway": "residential",
    "from": "n162",
    "to": "n163",
    "distance": 0.05,
    "status": "green",
    "coords": [
      [
        12.9330766,
        77.6309441
      ],
      [
        12.933057,
        77.6309246
      ],
      [
        12.932741,
        77.6306092
      ]
    ]
  },
  {
    "id": "r162",
    "name": "10th Main Road",
    "highway": "residential",
    "from": "n163",
    "to": "n164",
    "distance": 0.04,
    "status": "yellow",
    "coords": [
      [
        12.932741,
        77.6306092
      ],
      [
        12.9324299,
        77.6304043
      ]
    ]
  },
  {
    "id": "r163",
    "name": "10th Main Road",
    "highway": "residential",
    "from": "n164",
    "to": "n165",
    "distance": 0.06,
    "status": "green",
    "coords": [
      [
        12.9324299,
        77.6304043
      ],
      [
        12.9320044,
        77.6301236
      ]
    ]
  },
  {
    "id": "r164",
    "name": "10th Main Road",
    "highway": "residential",
    "from": "n165",
    "to": "n166",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9320044,
        77.6301236
      ],
      [
        12.9316932,
        77.6299184
      ]
    ]
  },
  {
    "id": "r165",
    "name": "10th Main Road",
    "highway": "residential",
    "from": "n166",
    "to": "n167",
    "distance": 0.03,
    "status": "green",
    "coords": [
      [
        12.9316932,
        77.6299184
      ],
      [
        12.931484,
        77.6297181
      ]
    ]
  },
  {
    "id": "r166",
    "name": "10th Main Road",
    "highway": "residential",
    "from": "n167",
    "to": "n151",
    "distance": 0.05,
    "status": "yellow",
    "coords": [
      [
        12.931484,
        77.6297181
      ],
      [
        12.9311848,
        77.6294317
      ]
    ]
  },
  {
    "id": "r167",
    "name": "8th A Main Road",
    "highway": "residential",
    "from": "n168",
    "to": "n169",
    "distance": 0.04,
    "status": "yellow",
    "coords": [
      [
        12.9321027,
        77.6317481
      ],
      [
        12.931773,
        77.6315327
      ]
    ]
  },
  {
    "id": "r168",
    "name": "8th A Main Road",
    "highway": "residential",
    "from": "n169",
    "to": "n170",
    "distance": 0.08,
    "status": "green",
    "coords": [
      [
        12.931773,
        77.6315327
      ],
      [
        12.9311601,
        77.6311519
      ]
    ]
  },
  {
    "id": "r169",
    "name": "8th A Main Road",
    "highway": "residential",
    "from": "n170",
    "to": "n171",
    "distance": 0.07,
    "status": "green",
    "coords": [
      [
        12.9311601,
        77.6311519
      ],
      [
        12.9306608,
        77.6308145
      ]
    ]
  },
  {
    "id": "r170",
    "name": "8th A Main Road",
    "highway": "residential",
    "from": "n171",
    "to": "n159",
    "distance": 0.05,
    "status": "red",
    "coords": [
      [
        12.9306608,
        77.6308145
      ],
      [
        12.9303089,
        77.6306021
      ]
    ]
  },
  {
    "id": "r171",
    "name": "8th A Main Road",
    "highway": "residential",
    "from": "n159",
    "to": "n172",
    "distance": 0.07,
    "status": "yellow",
    "coords": [
      [
        12.9303089,
        77.6306021
      ],
      [
        12.9298036,
        77.6303545
      ],
      [
        12.9297646,
        77.6303354
      ]
    ]
  },
  {
    "id": "r172",
    "name": "5th Main Road",
    "highway": "residential",
    "from": "n173",
    "to": "n174",
    "distance": 0.06,
    "status": "yellow",
    "coords": [
      [
        12.9294741,
        77.634222
      ],
      [
        12.9294404,
        77.6342251
      ],
      [
        12.9289647,
        77.6342683
      ]
    ]
  },
  {
    "id": "r173",
    "name": "5th Main Road",
    "highway": "residential",
    "from": "n174",
    "to": "n175",
    "distance": 0.21,
    "status": "green",
    "coords": [
      [
        12.9289647,
        77.6342683
      ],
      [
        12.9270823,
        77.6344737
      ]
    ]
  },
  {
    "id": "r174",
    "name": "5th Main Road",
    "highway": "residential",
    "from": "n175",
    "to": "n45",
    "distance": 0.15,
    "status": "green",
    "coords": [
      [
        12.9270823,
        77.6344737
      ],
      [
        12.9257381,
        77.6346227
      ]
    ]
  },
  {
    "id": "r175",
    "name": "2nd Main Road",
    "highway": "residential",
    "from": "n174",
    "to": "n176",
    "distance": 0.05,
    "status": "green",
    "coords": [
      [
        12.9289647,
        77.6342683
      ],
      [
        12.9287564,
        77.634727
      ]
    ]
  },
  {
    "id": "r176",
    "name": "2nd Main Road",
    "highway": "residential",
    "from": "n176",
    "to": "n177",
    "distance": 0.33,
    "status": "green",
    "coords": [
      [
        12.9287564,
        77.634727
      ],
      [
        12.9281464,
        77.6359893
      ],
      [
        12.9279004,
        77.6364984
      ],
      [
        12.9271977,
        77.6371851
      ],
      [
        12.9271555,
        77.637179
      ]
    ]
  },
  {
    "id": "r177",
    "name": "2nd Main Road",
    "highway": "residential",
    "from": "n177",
    "to": "n48",
    "distance": 0.13,
    "status": "green",
    "coords": [
      [
        12.9271555,
        77.637179
      ],
      [
        12.9260188,
        77.6370147
      ]
    ]
  },
  {
    "id": "r178",
    "name": "2nd Main Road",
    "highway": "residential",
    "from": "n48",
    "to": "n178",
    "distance": 0.07,
    "status": "red",
    "coords": [
      [
        12.9260188,
        77.6370147
      ],
      [
        12.9255356,
        77.6369921
      ],
      [
        12.9254266,
        77.6369855
      ]
    ]
  },
  {
    "id": "r179",
    "name": "4th Main Road",
    "highway": "residential",
    "from": "n176",
    "to": "n179",
    "distance": 0.07,
    "status": "green",
    "coords": [
      [
        12.9287564,
        77.634727
      ],
      [
        12.9281605,
        77.6348055
      ]
    ]
  },
  {
    "id": "r180",
    "name": "4th Main Road",
    "highway": "residential",
    "from": "n179",
    "to": "n180",
    "distance": 0.11,
    "status": "green",
    "coords": [
      [
        12.9281605,
        77.6348055
      ],
      [
        12.9271812,
        77.634911
      ]
    ]
  },
  {
    "id": "r181",
    "name": "4th Main Road",
    "highway": "residential",
    "from": "n180",
    "to": "n181",
    "distance": 0.06,
    "status": "yellow",
    "coords": [
      [
        12.9271812,
        77.634911
      ],
      [
        12.9266812,
        77.6349894
      ]
    ]
  },
  {
    "id": "r182",
    "name": "4th Main Road",
    "highway": "residential",
    "from": "n181",
    "to": "n182",
    "distance": 0.05,
    "status": "green",
    "coords": [
      [
        12.9266812,
        77.6349894
      ],
      [
        12.9262445,
        77.6350437
      ]
    ]
  },
  {
    "id": "r183",
    "name": "4th Main Road",
    "highway": "residential",
    "from": "n182",
    "to": "n46",
    "distance": 0.05,
    "status": "green",
    "coords": [
      [
        12.9262445,
        77.6350437
      ],
      [
        12.925823,
        77.6350961
      ]
    ]
  },
  {
    "id": "r184",
    "name": "3rd Main Road",
    "highway": "residential",
    "from": "n179",
    "to": "n183",
    "distance": 0.2,
    "status": "green",
    "coords": [
      [
        12.9281605,
        77.6348055
      ],
      [
        12.9277095,
        77.6357739
      ],
      [
        12.9273976,
        77.6364321
      ]
    ]
  },
  {
    "id": "r185",
    "name": "3rd Main Road",
    "highway": "residential",
    "from": "n183",
    "to": "n184",
    "distance": 0.05,
    "status": "green",
    "coords": [
      [
        12.9273976,
        77.6364321
      ],
      [
        12.9272988,
        77.636538
      ],
      [
        12.9270879,
        77.6367044
      ],
      [
        12.927012,
        77.6367396
      ]
    ]
  },
  {
    "id": "r186",
    "name": "3rd Main Road",
    "highway": "residential",
    "from": "n184",
    "to": "n185",
    "distance": 0.05,
    "status": "green",
    "coords": [
      [
        12.927012,
        77.6367396
      ],
      [
        12.9265579,
        77.6366823
      ]
    ]
  },
  {
    "id": "r187",
    "name": "3rd Main Road",
    "highway": "residential",
    "from": "n185",
    "to": "n47",
    "distance": 0.05,
    "status": "yellow",
    "coords": [
      [
        12.9265579,
        77.6366823
      ],
      [
        12.926076,
        77.6366314
      ]
    ]
  },
  {
    "id": "r188",
    "name": "3rd Main Road",
    "highway": "residential",
    "from": "n47",
    "to": "n186",
    "distance": 0.07,
    "status": "green",
    "coords": [
      [
        12.926076,
        77.6366314
      ],
      [
        12.925456,
        77.6365642
      ]
    ]
  },
  {
    "id": "r189",
    "name": "3rd Cross Road",
    "highway": "residential",
    "from": "n185",
    "to": "n182",
    "distance": 0.18,
    "status": "green",
    "coords": [
      [
        12.9265579,
        77.6366823
      ],
      [
        12.9262445,
        77.6350437
      ]
    ]
  },
  {
    "id": "r190",
    "name": "6th Main Road",
    "highway": "residential",
    "from": "n187",
    "to": "n188",
    "distance": 0.32,
    "status": "green",
    "coords": [
      [
        12.9298044,
        77.6335345
      ],
      [
        12.9297562,
        77.6335258
      ],
      [
        12.9273381,
        77.6337785
      ],
      [
        12.9269428,
        77.6338199
      ]
    ]
  },
  {
    "id": "r191",
    "name": "6th Main Road",
    "highway": "residential",
    "from": "n188",
    "to": "n44",
    "distance": 0.15,
    "status": "yellow",
    "coords": [
      [
        12.9269428,
        77.6338199
      ],
      [
        12.9256177,
        77.6339586
      ]
    ]
  },
  {
    "id": "r192",
    "name": "5th Cross Road",
    "highway": "residential",
    "from": "n188",
    "to": "n175",
    "distance": 0.07,
    "status": "green",
    "coords": [
      [
        12.9269428,
        77.6338199
      ],
      [
        12.9270823,
        77.6344737
      ]
    ]
  },
  {
    "id": "r193",
    "name": "5th Cross Road",
    "highway": "residential",
    "from": "n175",
    "to": "n180",
    "distance": 0.05,
    "status": "green",
    "coords": [
      [
        12.9270823,
        77.6344737
      ],
      [
        12.9271812,
        77.634911
      ]
    ]
  },
  {
    "id": "r194",
    "name": "5th Cross Road",
    "highway": "residential",
    "from": "n180",
    "to": "n183",
    "distance": 0.17,
    "status": "yellow",
    "coords": [
      [
        12.9271812,
        77.634911
      ],
      [
        12.9273976,
        77.6364321
      ]
    ]
  },
  {
    "id": "r195",
    "name": "4th Cross Road",
    "highway": "residential",
    "from": "n181",
    "to": "n184",
    "distance": 0.19,
    "status": "yellow",
    "coords": [
      [
        12.9266812,
        77.6349894
      ],
      [
        12.927012,
        77.6367396
      ]
    ]
  },
  {
    "id": "r196",
    "name": "4th Cross Road",
    "highway": "residential",
    "from": "n184",
    "to": "n177",
    "distance": 0.05,
    "status": "red",
    "coords": [
      [
        12.927012,
        77.6367396
      ],
      [
        12.9271555,
        77.637179
      ]
    ]
  },
  {
    "id": "r197",
    "name": "7th A Main Road",
    "highway": "residential",
    "from": "n189",
    "to": "n190",
    "distance": 0.03,
    "status": "green",
    "coords": [
      [
        12.9298567,
        77.6335422
      ],
      [
        12.9298896,
        77.6335526
      ],
      [
        12.9300751,
        77.6336189
      ]
    ]
  },
  {
    "id": "r198",
    "name": "7th A Main Road",
    "highway": "residential",
    "from": "n190",
    "to": "n191",
    "distance": 0.07,
    "status": "yellow",
    "coords": [
      [
        12.9300751,
        77.6336189
      ],
      [
        12.9305505,
        77.6337988
      ],
      [
        12.9306308,
        77.6338673
      ]
    ]
  },
  {
    "id": "r199",
    "name": "5th Cross Road",
    "highway": "residential",
    "from": "n192",
    "to": "n193",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9295642,
        77.6291916
      ],
      [
        12.9294894,
        77.6295658
      ]
    ]
  },
  {
    "id": "r200",
    "name": "5th Cross Road",
    "highway": "residential",
    "from": "n193",
    "to": "n194",
    "distance": 0.14,
    "status": "yellow",
    "coords": [
      [
        12.9294894,
        77.6295658
      ],
      [
        12.9291929,
        77.6308262
      ]
    ]
  },
  {
    "id": "r201",
    "name": "5th Cross Road",
    "highway": "residential",
    "from": "n194",
    "to": "n195",
    "distance": 0.04,
    "status": "yellow",
    "coords": [
      [
        12.9291929,
        77.6308262
      ],
      [
        12.9291048,
        77.6312233
      ]
    ]
  },
  {
    "id": "r202",
    "name": "1st Cross Road",
    "highway": "residential",
    "from": "n196",
    "to": "n197",
    "distance": 0.05,
    "status": "green",
    "coords": [
      [
        12.9283011,
        77.6290132
      ],
      [
        12.9281964,
        77.6294763
      ]
    ]
  },
  {
    "id": "r203",
    "name": "1st Cross Road",
    "highway": "residential",
    "from": "n197",
    "to": "n198",
    "distance": 0.11,
    "status": "green",
    "coords": [
      [
        12.9281964,
        77.6294763
      ],
      [
        12.9281661,
        77.6296105
      ],
      [
        12.9280133,
        77.630286
      ],
      [
        12.9279644,
        77.6305021
      ]
    ]
  },
  {
    "id": "r204",
    "name": "1st Cross Road",
    "highway": "residential",
    "from": "n198",
    "to": "n199",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9279644,
        77.6305021
      ],
      [
        12.92789,
        77.630863
      ],
      [
        12.9278811,
        77.6309061
      ]
    ]
  },
  {
    "id": "r205",
    "name": "8A Main Road",
    "highway": "residential",
    "from": "n199",
    "to": "n195",
    "distance": 0.14,
    "status": "green",
    "coords": [
      [
        12.9278811,
        77.6309061
      ],
      [
        12.9284302,
        77.6310484
      ],
      [
        12.9291048,
        77.6312233
      ]
    ]
  },
  {
    "id": "r206",
    "name": "8A Main Road",
    "highway": "residential",
    "from": "n195",
    "to": "n200",
    "distance": 0.05,
    "status": "red",
    "coords": [
      [
        12.9291048,
        77.6312233
      ],
      [
        12.9295139,
        77.6313321
      ],
      [
        12.9295532,
        77.6313425
      ]
    ]
  },
  {
    "id": "r207",
    "name": "12th Main Road",
    "highway": "residential",
    "from": "n201",
    "to": "n202",
    "distance": 0.07,
    "status": "red",
    "coords": [
      [
        12.932688,
        77.627736
      ],
      [
        12.9323124,
        77.6277108
      ],
      [
        12.9320916,
        77.6276883
      ]
    ]
  },
  {
    "id": "r208",
    "name": "12th Main Road",
    "highway": "residential",
    "from": "n202",
    "to": "n154",
    "distance": 0.13,
    "status": "yellow",
    "coords": [
      [
        12.9320916,
        77.6276883
      ],
      [
        12.9311794,
        77.6275608
      ],
      [
        12.9309442,
        77.6275279
      ]
    ]
  },
  {
    "id": "r209",
    "name": "12th Main Road",
    "highway": "residential",
    "from": "n154",
    "to": "n203",
    "distance": 0.06,
    "status": "green",
    "coords": [
      [
        12.9309442,
        77.6275279
      ],
      [
        12.9303724,
        77.6274511
      ]
    ]
  },
  {
    "id": "r210",
    "name": "1st A Cross Road",
    "highway": "residential",
    "from": "n156",
    "to": "n204",
    "distance": 0.11,
    "status": "green",
    "coords": [
      [
        12.9307784,
        77.6284042
      ],
      [
        12.9312104,
        77.6282265
      ],
      [
        12.9314348,
        77.6281342
      ],
      [
        12.9316786,
        77.62797
      ]
    ]
  },
  {
    "id": "r211",
    "name": "1st A Cross Road",
    "highway": "residential",
    "from": "n204",
    "to": "n202",
    "distance": 0.06,
    "status": "yellow",
    "coords": [
      [
        12.9316786,
        77.62797
      ],
      [
        12.9320916,
        77.6276883
      ]
    ]
  },
  {
    "id": "r212",
    "name": "1st A Cross Road",
    "highway": "residential",
    "from": "n202",
    "to": "n205",
    "distance": 0.2,
    "status": "green",
    "coords": [
      [
        12.9320916,
        77.6276883
      ],
      [
        12.9322515,
        77.6275449
      ],
      [
        12.9332092,
        77.6266862
      ],
      [
        12.9334435,
        77.6264286
      ]
    ]
  },
  {
    "id": "r213",
    "name": "1st Main Road",
    "highway": "residential",
    "from": "n206",
    "to": "n207",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9364563,
        77.6148855
      ],
      [
        12.9367453,
        77.614694
      ]
    ]
  },
  {
    "id": "r214",
    "name": "1st Main Road",
    "highway": "residential",
    "from": "n207",
    "to": "n208",
    "distance": 0.21,
    "status": "green",
    "coords": [
      [
        12.9367453,
        77.614694
      ],
      [
        12.9369492,
        77.6145443
      ],
      [
        12.9372095,
        77.6143348
      ],
      [
        12.9374662,
        77.6130329
      ]
    ]
  },
  {
    "id": "r215",
    "name": "Someshwara Temple Road",
    "highway": "tertiary",
    "from": "n209",
    "to": "n210",
    "distance": 0.05,
    "status": "green",
    "coords": [
      [
        12.9369075,
        77.6110193
      ],
      [
        12.9370709,
        77.6114917
      ]
    ]
  },
  {
    "id": "r216",
    "name": "Someshwara Temple Road",
    "highway": "tertiary",
    "from": "n210",
    "to": "n211",
    "distance": 0.21,
    "status": "green",
    "coords": [
      [
        12.9370709,
        77.6114917
      ],
      [
        12.9367347,
        77.6128668
      ],
      [
        12.9366886,
        77.613051
      ],
      [
        12.9366631,
        77.6131654
      ],
      [
        12.9366292,
        77.6134082
      ]
    ]
  },
  {
    "id": "r217",
    "name": "Someshwara Temple Road",
    "highway": "tertiary",
    "from": "n211",
    "to": "n212",
    "distance": 0.03,
    "status": "green",
    "coords": [
      [
        12.9366292,
        77.6134082
      ],
      [
        12.9366224,
        77.6134497
      ],
      [
        12.9365783,
        77.6137188
      ]
    ]
  },
  {
    "id": "r218",
    "name": "Someshwara Temple Road",
    "highway": "tertiary",
    "from": "n212",
    "to": "n213",
    "distance": 0.1,
    "status": "green",
    "coords": [
      [
        12.9365783,
        77.6137188
      ],
      [
        12.9364795,
        77.6144236
      ],
      [
        12.9364693,
        77.614603
      ]
    ]
  },
  {
    "id": "r219",
    "name": "Someshwara Temple Road",
    "highway": "tertiary",
    "from": "n213",
    "to": "n206",
    "distance": 0.03,
    "status": "green",
    "coords": [
      [
        12.9364693,
        77.614603
      ],
      [
        12.9364563,
        77.6148855
      ]
    ]
  },
  {
    "id": "r220",
    "name": "17th B Main Road",
    "highway": "residential",
    "from": "n214",
    "to": "n215",
    "distance": 0.13,
    "status": "yellow",
    "coords": [
      [
        12.935275,
        77.6175379
      ],
      [
        12.9352333,
        77.6180331
      ],
      [
        12.935217,
        77.618257
      ],
      [
        12.9351874,
        77.618721
      ]
    ]
  },
  {
    "id": "r221",
    "name": "1st B Cross Road",
    "highway": "residential",
    "from": "n213",
    "to": "n216",
    "distance": 0.01,
    "status": "yellow",
    "coords": [
      [
        12.9364693,
        77.614603
      ],
      [
        12.9363899,
        77.6145867
      ]
    ]
  },
  {
    "id": "r222",
    "name": "1st B Cross Road",
    "highway": "residential",
    "from": "n216",
    "to": "n217",
    "distance": 0.18,
    "status": "yellow",
    "coords": [
      [
        12.9363899,
        77.6145867
      ],
      [
        12.936295,
        77.6144271
      ],
      [
        12.9356263,
        77.6130735
      ]
    ]
  },
  {
    "id": "r223",
    "name": "1st B Main Road",
    "highway": "residential",
    "from": "n216",
    "to": "n218",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9363899,
        77.6145867
      ],
      [
        12.9360839,
        77.614765
      ]
    ]
  },
  {
    "id": "r224",
    "name": "1st B Main Road",
    "highway": "residential",
    "from": "n218",
    "to": "n18",
    "distance": 0.04,
    "status": "red",
    "coords": [
      [
        12.9360839,
        77.614765
      ],
      [
        12.9357763,
        77.6149319
      ],
      [
        12.935738,
        77.6149547
      ]
    ]
  },
  {
    "id": "r225",
    "name": "1st C Main Road",
    "highway": "residential",
    "from": "n211",
    "to": "n217",
    "distance": 0.12,
    "status": "green",
    "coords": [
      [
        12.9366292,
        77.6134082
      ],
      [
        12.9361183,
        77.613232
      ],
      [
        12.9356263,
        77.6130735
      ]
    ]
  },
  {
    "id": "r226",
    "name": "1st C Main Road",
    "highway": "residential",
    "from": "n217",
    "to": "n219",
    "distance": 0.06,
    "status": "green",
    "coords": [
      [
        12.9356263,
        77.6130735
      ],
      [
        12.9351483,
        77.6129369
      ]
    ]
  },
  {
    "id": "r227",
    "name": "1st C Main Road",
    "highway": "residential",
    "from": "n219",
    "to": "n17",
    "distance": 0.06,
    "status": "green",
    "coords": [
      [
        12.9351483,
        77.6129369
      ],
      [
        12.9347541,
        77.612738
      ],
      [
        12.9346654,
        77.612699
      ],
      [
        12.9346238,
        77.612719
      ]
    ]
  },
  {
    "id": "r228",
    "name": "Jyoti Nivas College Road",
    "highway": "tertiary",
    "from": "n220",
    "to": "n221",
    "distance": 0.33,
    "status": "green",
    "coords": [
      [
        12.9338815,
        77.6162276
      ],
      [
        12.9337709,
        77.6160498
      ],
      [
        12.9336851,
        77.615912
      ],
      [
        12.9336732,
        77.615888
      ],
      [
        12.9336423,
        77.6158256
      ],
      [
        12.933434,
        77.6154052
      ],
      [
        12.9328977,
        77.6143231
      ],
      [
        12.9325038,
        77.6135402
      ]
    ]
  },
  {
    "id": "r229",
    "name": "4th B Cross Road",
    "highway": "tertiary",
    "from": "n222",
    "to": "n14",
    "distance": 0.36,
    "status": "green",
    "coords": [
      [
        12.9329534,
        77.6132988
      ],
      [
        12.9340514,
        77.6154972
      ],
      [
        12.9344379,
        77.6162724
      ]
    ]
  },
  {
    "id": "r230",
    "name": "Tavarekere Main Road",
    "highway": "secondary",
    "from": "n223",
    "to": "n224",
    "distance": 0.26,
    "status": "green",
    "coords": [
      [
        12.929538,
        77.6149845
      ],
      [
        12.9295294,
        77.6149408
      ],
      [
        12.9295293,
        77.6146521
      ],
      [
        12.9295449,
        77.6142396
      ],
      [
        12.9295838,
        77.6140614
      ],
      [
        12.9296269,
        77.6139333
      ],
      [
        12.929669,
        77.6138676
      ],
      [
        12.9299537,
        77.6133436
      ],
      [
        12.9299593,
        77.6133333
      ],
      [
        12.9299825,
        77.6132906
      ],
      [
        12.9302495,
        77.612799
      ]
    ]
  },
  {
    "id": "r231",
    "name": "Tavarekere Main Road",
    "highway": "secondary",
    "from": "n225",
    "to": "n226",
    "distance": 0.08,
    "status": "green",
    "coords": [
      [
        12.9309162,
        77.6098193
      ],
      [
        12.9302428,
        77.6096711
      ]
    ]
  },
  {
    "id": "r232",
    "name": "Tavarekere Main Road",
    "highway": "secondary",
    "from": "n226",
    "to": "n227",
    "distance": 0.27,
    "status": "green",
    "coords": [
      [
        12.9302428,
        77.6096711
      ],
      [
        12.9300552,
        77.6096298
      ],
      [
        12.9299576,
        77.6096083
      ],
      [
        12.92973,
        77.6095582
      ],
      [
        12.9294698,
        77.6095009
      ],
      [
        12.9292229,
        77.6094466
      ],
      [
        12.9291035,
        77.6094203
      ],
      [
        12.9289799,
        77.6093916
      ],
      [
        12.9288665,
        77.6093681
      ],
      [
        12.9287181,
        77.6093339
      ],
      [
        12.9284531,
        77.609264
      ],
      [
        12.9283235,
        77.6092454
      ],
      [
        12.9281229,
        77.6092122
      ],
      [
        12.9278446,
        77.6091661
      ]
    ]
  },
  {
    "id": "r233",
    "name": "Tavarekere Main Road",
    "highway": "secondary",
    "from": "n227",
    "to": "n228",
    "distance": 0.23,
    "status": "green",
    "coords": [
      [
        12.9278446,
        77.6091661
      ],
      [
        12.9278312,
        77.6091639
      ],
      [
        12.9275399,
        77.6091157
      ],
      [
        12.9275071,
        77.6091103
      ],
      [
        12.9273256,
        77.6090803
      ],
      [
        12.9273041,
        77.6090767
      ],
      [
        12.9271481,
        77.6090509
      ],
      [
        12.9270198,
        77.6090297
      ],
      [
        12.9267611,
        77.6089833
      ],
      [
        12.9264409,
        77.608939
      ],
      [
        12.9262122,
        77.6088705
      ],
      [
        12.9259797,
        77.6087998
      ],
      [
        12.9258902,
        77.6087788
      ],
      [
        12.9258025,
        77.6087582
      ]
    ]
  },
  {
    "id": "r234",
    "name": "1st Main Road",
    "highway": "tertiary",
    "from": "n225",
    "to": "n229",
    "distance": 0.07,
    "status": "green",
    "coords": [
      [
        12.9309162,
        77.6098193
      ],
      [
        12.9309572,
        77.6093666
      ],
      [
        12.9309594,
        77.6093424
      ],
      [
        12.9309667,
        77.6091715
      ]
    ]
  },
  {
    "id": "r235",
    "name": "1st Main Road",
    "highway": "tertiary",
    "from": "n229",
    "to": "n230",
    "distance": 0.1,
    "status": "green",
    "coords": [
      [
        12.9309667,
        77.6091715
      ],
      [
        12.930971,
        77.6090541
      ],
      [
        12.9309863,
        77.6088067
      ],
      [
        12.9310245,
        77.6083303
      ],
      [
        12.9310569,
        77.6082195
      ]
    ]
  },
  {
    "id": "r236",
    "name": "1st Main Road",
    "highway": "tertiary",
    "from": "n230",
    "to": "n231",
    "distance": 0.12,
    "status": "green",
    "coords": [
      [
        12.9310569,
        77.6082195
      ],
      [
        12.9311419,
        77.6081768
      ],
      [
        12.9312314,
        77.6081478
      ],
      [
        12.9313073,
        77.6081428
      ],
      [
        12.9313563,
        77.6080872
      ],
      [
        12.9313622,
        77.607359
      ]
    ]
  },
  {
    "id": "r237",
    "name": "Jogi Colony Main Road",
    "highway": "residential",
    "from": "n232",
    "to": "n224",
    "distance": 0.19,
    "status": "green",
    "coords": [
      [
        12.9318314,
        77.6134432
      ],
      [
        12.9318021,
        77.6134313
      ],
      [
        12.9315348,
        77.6133224
      ],
      [
        12.9311137,
        77.6131509
      ],
      [
        12.9309065,
        77.6130666
      ],
      [
        12.9306969,
        77.6129787
      ],
      [
        12.9304937,
        77.6128984
      ],
      [
        12.9302495,
        77.612799
      ]
    ]
  },
  {
    "id": "r238",
    "name": "National Games Village Road",
    "highway": "residential",
    "from": "n233",
    "to": "n234",
    "distance": 0.85,
    "status": "green",
    "coords": [
      [
        12.9489651,
        77.6205292
      ],
      [
        12.9485218,
        77.6208415
      ],
      [
        12.9481908,
        77.6210685
      ],
      [
        12.9475518,
        77.6214939
      ],
      [
        12.9469103,
        77.6219359
      ],
      [
        12.9465357,
        77.6221858
      ],
      [
        12.9462459,
        77.6223791
      ],
      [
        12.9458927,
        77.6226169
      ],
      [
        12.9455741,
        77.6228314
      ],
      [
        12.9448135,
        77.6233433
      ],
      [
        12.9439556,
        77.6239208
      ],
      [
        12.9438539,
        77.6239872
      ],
      [
        12.9438248,
        77.6240062
      ],
      [
        12.9429563,
        77.6245737
      ],
      [
        12.9425951,
        77.624807
      ]
    ]
  },
  {
    "id": "r239",
    "name": "1st Main Road",
    "highway": "residential",
    "from": "n235",
    "to": "n236",
    "distance": 0.08,
    "status": "yellow",
    "coords": [
      [
        12.9263984,
        77.615563
      ],
      [
        12.9264309,
        77.6156459
      ],
      [
        12.9265912,
        77.615929
      ],
      [
        12.9267644,
        77.6162225
      ]
    ]
  },
  {
    "id": "r240",
    "name": "1st Main Road",
    "highway": "residential",
    "from": "n236",
    "to": "n237",
    "distance": 0.05,
    "status": "green",
    "coords": [
      [
        12.9267644,
        77.6162225
      ],
      [
        12.9269951,
        77.616588
      ]
    ]
  },
  {
    "id": "r241",
    "name": "11th Main Road",
    "highway": "residential",
    "from": "n238",
    "to": "n98",
    "distance": 0.09,
    "status": "green",
    "coords": [
      [
        12.9253402,
        77.6265362
      ],
      [
        12.9260844,
        77.62681
      ]
    ]
  },
  {
    "id": "r242",
    "name": "11th Main Road",
    "highway": "residential",
    "from": "n98",
    "to": "n38",
    "distance": 0.08,
    "status": "green",
    "coords": [
      [
        12.9260844,
        77.62681
      ],
      [
        12.9268059,
        77.6270445
      ]
    ]
  },
  {
    "id": "r243",
    "name": "16th Main Road",
    "highway": "residential",
    "from": "n239",
    "to": "n240",
    "distance": 0.09,
    "status": "green",
    "coords": [
      [
        12.9306711,
        77.624661
      ],
      [
        12.9314062,
        77.6249075
      ]
    ]
  },
  {
    "id": "r244",
    "name": "16th Main Road",
    "highway": "residential",
    "from": "n240",
    "to": "n241",
    "distance": 0.04,
    "status": "yellow",
    "coords": [
      [
        12.9314062,
        77.6249075
      ],
      [
        12.9314508,
        77.6249223
      ],
      [
        12.9317842,
        77.6250332
      ]
    ]
  },
  {
    "id": "r245",
    "name": "16th B Road, 4th Block",
    "highway": "residential",
    "from": "n242",
    "to": "n243",
    "distance": 0.05,
    "status": "green",
    "coords": [
      [
        12.9342986,
        77.6258773
      ],
      [
        12.9338545,
        77.6257011
      ]
    ]
  },
  {
    "id": "r246",
    "name": "16th B Road, 4th Block",
    "highway": "residential",
    "from": "n243",
    "to": "n244",
    "distance": 0.15,
    "status": "green",
    "coords": [
      [
        12.9338545,
        77.6257011
      ],
      [
        12.933232,
        77.6254669
      ],
      [
        12.9329706,
        77.6253934
      ],
      [
        12.9328452,
        77.6253623
      ],
      [
        12.9327371,
        77.6253364
      ],
      [
        12.9325881,
        77.6253008
      ],
      [
        12.9325827,
        77.6252983
      ],
      [
        12.9325782,
        77.6252938
      ]
    ]
  },
  {
    "id": "r247",
    "name": "6th B Main Road",
    "highway": "residential",
    "from": "n245",
    "to": "n246",
    "distance": 0.25,
    "status": "red",
    "coords": [
      [
        12.934525,
        77.6246163
      ],
      [
        12.9337765,
        77.6242361
      ],
      [
        12.9336495,
        77.6241689
      ],
      [
        12.9331876,
        77.6239843
      ],
      [
        12.9324584,
        77.6236833
      ]
    ]
  },
  {
    "id": "r248",
    "name": "16th B Main Road",
    "highway": "residential",
    "from": "n243",
    "to": "n245",
    "distance": 0.14,
    "status": "green",
    "coords": [
      [
        12.9338545,
        77.6257011
      ],
      [
        12.9340535,
        77.6253565
      ],
      [
        12.9341724,
        77.625166
      ],
      [
        12.9343476,
        77.6249106
      ],
      [
        12.934525,
        77.6246163
      ]
    ]
  },
  {
    "id": "r249",
    "name": "7th C Cross Road",
    "highway": "residential",
    "from": "n241",
    "to": "n246",
    "distance": 0.16,
    "status": "green",
    "coords": [
      [
        12.9317842,
        77.6250332
      ],
      [
        12.932009,
        77.6245652
      ],
      [
        12.9322543,
        77.6240837
      ],
      [
        12.9324584,
        77.6236833
      ]
    ]
  },
  {
    "id": "r250",
    "name": "7th C Cross Road",
    "highway": "residential",
    "from": "n246",
    "to": "n247",
    "distance": 0.02,
    "status": "red",
    "coords": [
      [
        12.9324584,
        77.6236833
      ],
      [
        12.9325082,
        77.6235641
      ],
      [
        12.9325211,
        77.6235463
      ]
    ]
  },
  {
    "id": "r251",
    "name": "7th C Cross Road",
    "highway": "residential",
    "from": "n247",
    "to": "n248",
    "distance": 0.05,
    "status": "red",
    "coords": [
      [
        12.9325211,
        77.6235463
      ],
      [
        12.9327112,
        77.6231011
      ]
    ]
  },
  {
    "id": "r252",
    "name": "17th A Main Road",
    "highway": "residential",
    "from": "n9",
    "to": "n249",
    "distance": 0.07,
    "status": "green",
    "coords": [
      [
        12.9335405,
        77.622713
      ],
      [
        12.9335922,
        77.6227148
      ],
      [
        12.9341019,
        77.6229504
      ]
    ]
  },
  {
    "id": "r253",
    "name": "17th A Main Road",
    "highway": "residential",
    "from": "n249",
    "to": "n250",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9341019,
        77.6229504
      ],
      [
        12.9344668,
        77.6231189
      ]
    ]
  },
  {
    "id": "r254",
    "name": "17th A Main Road",
    "highway": "residential",
    "from": "n250",
    "to": "n27",
    "distance": 0.05,
    "status": "yellow",
    "coords": [
      [
        12.9344668,
        77.6231189
      ],
      [
        12.9346725,
        77.6232117
      ],
      [
        12.9348498,
        77.6232839
      ],
      [
        12.9348834,
        77.6233085
      ]
    ]
  },
  {
    "id": "r255",
    "name": "2nd Cross Road",
    "highway": "residential",
    "from": "n91",
    "to": "n251",
    "distance": 0.07,
    "status": "green",
    "coords": [
      [
        12.9344019,
        77.6199383
      ],
      [
        12.9343212,
        77.6205436
      ]
    ]
  },
  {
    "id": "r256",
    "name": "2nd Cross Road",
    "highway": "residential",
    "from": "n251",
    "to": "n252",
    "distance": 0.23,
    "status": "green",
    "coords": [
      [
        12.9343212,
        77.6205436
      ],
      [
        12.9342792,
        77.6210027
      ],
      [
        12.9342769,
        77.6215997
      ],
      [
        12.934273,
        77.62264
      ]
    ]
  },
  {
    "id": "r257",
    "name": "17th B Main Road",
    "highway": "residential",
    "from": "n253",
    "to": "n254",
    "distance": 0.05,
    "status": "green",
    "coords": [
      [
        12.9356429,
        77.6212025
      ],
      [
        12.9352426,
        77.621003
      ]
    ]
  },
  {
    "id": "r258",
    "name": "17th B Main Road",
    "highway": "residential",
    "from": "n254",
    "to": "n251",
    "distance": 0.11,
    "status": "green",
    "coords": [
      [
        12.9352426,
        77.621003
      ],
      [
        12.9343212,
        77.6205436
      ]
    ]
  },
  {
    "id": "r259",
    "name": "3rd Cross Road",
    "highway": "residential",
    "from": "n254",
    "to": "n252",
    "distance": 0.21,
    "status": "green",
    "coords": [
      [
        12.9352426,
        77.621003
      ],
      [
        12.9344416,
        77.6223554
      ],
      [
        12.934273,
        77.62264
      ]
    ]
  },
  {
    "id": "r260",
    "name": "3rd Cross Road",
    "highway": "residential",
    "from": "n252",
    "to": "n249",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.934273,
        77.62264
      ],
      [
        12.9341019,
        77.6229504
      ]
    ]
  },
  {
    "id": "r261",
    "name": "4th Cross Road",
    "highway": "residential",
    "from": "n253",
    "to": "n250",
    "distance": 0.25,
    "status": "green",
    "coords": [
      [
        12.9356429,
        77.6212025
      ],
      [
        12.9346245,
        77.622862
      ],
      [
        12.9344668,
        77.6231189
      ]
    ]
  },
  {
    "id": "r262",
    "name": "2nd Cross Road",
    "highway": "residential",
    "from": "n255",
    "to": "n256",
    "distance": 0.18,
    "status": "yellow",
    "coords": [
      [
        12.9355813,
        77.6188492
      ],
      [
        12.9357049,
        77.6183356
      ],
      [
        12.9357539,
        77.6176016
      ],
      [
        12.9357818,
        77.6171828
      ]
    ]
  },
  {
    "id": "r263",
    "name": "2nd Cross Road",
    "highway": "residential",
    "from": "n256",
    "to": "n257",
    "distance": 0.05,
    "status": "yellow",
    "coords": [
      [
        12.9357818,
        77.6171828
      ],
      [
        12.9358253,
        77.6167295
      ]
    ]
  },
  {
    "id": "r264",
    "name": "17th D Main Road",
    "highway": "residential",
    "from": "n89",
    "to": "n70",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9355672,
        77.6200945
      ],
      [
        12.935888,
        77.6202745
      ]
    ]
  },
  {
    "id": "r265",
    "name": "17th D Main Road",
    "highway": "residential",
    "from": "n70",
    "to": "n79",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.935888,
        77.6202745
      ],
      [
        12.9362043,
        77.6204359
      ]
    ]
  },
  {
    "id": "r266",
    "name": "17th D Main Road",
    "highway": "residential",
    "from": "n79",
    "to": "n23",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9362043,
        77.6204359
      ],
      [
        12.9365022,
        77.620591
      ],
      [
        12.9365638,
        77.620623
      ]
    ]
  },
  {
    "id": "r267",
    "name": "2nd Main Road",
    "highway": "residential",
    "from": "n81",
    "to": "n258",
    "distance": 0.1,
    "status": "yellow",
    "coords": [
      [
        12.9357342,
        77.61607
      ],
      [
        12.9362386,
        77.6167542
      ],
      [
        12.9362825,
        77.6167973
      ]
    ]
  },
  {
    "id": "r268",
    "name": "Bazaar Street",
    "highway": "tertiary",
    "from": "n259",
    "to": "n260",
    "distance": 0.02,
    "status": "green",
    "coords": [
      [
        12.9439836,
        77.6088619
      ],
      [
        12.9439895,
        77.6086743
      ]
    ]
  },
  {
    "id": "r269",
    "name": "Bazaar Street",
    "highway": "tertiary",
    "from": "n260",
    "to": "n261",
    "distance": 0.08,
    "status": "green",
    "coords": [
      [
        12.9439895,
        77.6086743
      ],
      [
        12.9439964,
        77.608473
      ],
      [
        12.9440257,
        77.6079184
      ]
    ]
  },
  {
    "id": "r270",
    "name": "16th B Main Road",
    "highway": "residential",
    "from": "n143",
    "to": "n120",
    "distance": 0.12,
    "status": "red",
    "coords": [
      [
        12.9354104,
        77.6263947
      ],
      [
        12.936103,
        77.627218
      ]
    ]
  },
  {
    "id": "r271",
    "name": "16th A Main Road",
    "highway": "residential",
    "from": "n142",
    "to": "n121",
    "distance": 0.11,
    "status": "yellow",
    "coords": [
      [
        12.9352401,
        77.6266654
      ],
      [
        12.9358786,
        77.6274347
      ]
    ]
  },
  {
    "id": "r272",
    "name": "7th Cross Road",
    "highway": "residential",
    "from": "n262",
    "to": "n263",
    "distance": 0.05,
    "status": "green",
    "coords": [
      [
        12.9349653,
        77.6240716
      ],
      [
        12.9350028,
        77.6240195
      ],
      [
        12.9352343,
        77.6236984
      ]
    ]
  },
  {
    "id": "r273",
    "name": "7th Cross Road",
    "highway": "residential",
    "from": "n263",
    "to": "n264",
    "distance": 0.07,
    "status": "green",
    "coords": [
      [
        12.9352343,
        77.6236984
      ],
      [
        12.9355576,
        77.6231521
      ]
    ]
  },
  {
    "id": "r274",
    "name": "7th Cross Road",
    "highway": "residential",
    "from": "n264",
    "to": "n265",
    "distance": 0.03,
    "status": "red",
    "coords": [
      [
        12.9355576,
        77.6231521
      ],
      [
        12.9356987,
        77.622914
      ]
    ]
  },
  {
    "id": "r275",
    "name": "7th Cross Road",
    "highway": "residential",
    "from": "n265",
    "to": "n266",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9356987,
        77.622914
      ],
      [
        12.9359004,
        77.62259
      ]
    ]
  },
  {
    "id": "r276",
    "name": "7th Cross Road",
    "highway": "residential",
    "from": "n266",
    "to": "n267",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9359004,
        77.62259
      ],
      [
        12.9360917,
        77.6222825
      ],
      [
        12.9361069,
        77.6222582
      ]
    ]
  },
  {
    "id": "r277",
    "name": "6th Cross Road",
    "highway": "tertiary",
    "from": "n268",
    "to": "n269",
    "distance": 0.05,
    "status": "green",
    "coords": [
      [
        12.9361127,
        77.6254105
      ],
      [
        12.9364402,
        77.6251252
      ]
    ]
  },
  {
    "id": "r278",
    "name": "6th Cross Road",
    "highway": "tertiary",
    "from": "n269",
    "to": "n270",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9364402,
        77.6251252
      ],
      [
        12.9367136,
        77.6249039
      ]
    ]
  },
  {
    "id": "r279",
    "name": "6th Cross Road",
    "highway": "tertiary",
    "from": "n270",
    "to": "n271",
    "distance": 0.07,
    "status": "green",
    "coords": [
      [
        12.9367136,
        77.6249039
      ],
      [
        12.9371854,
        77.6245262
      ]
    ]
  },
  {
    "id": "r280",
    "name": "6th Cross Road",
    "highway": "tertiary",
    "from": "n271",
    "to": "n272",
    "distance": 0.03,
    "status": "green",
    "coords": [
      [
        12.9371854,
        77.6245262
      ],
      [
        12.9373679,
        77.6243653
      ]
    ]
  },
  {
    "id": "r281",
    "name": "6th Cross Road",
    "highway": "tertiary",
    "from": "n272",
    "to": "n273",
    "distance": 0.03,
    "status": "green",
    "coords": [
      [
        12.9373679,
        77.6243653
      ],
      [
        12.937575,
        77.6241826
      ]
    ]
  },
  {
    "id": "r282",
    "name": "6th Cross Road",
    "highway": "tertiary",
    "from": "n273",
    "to": "n274",
    "distance": 0.01,
    "status": "yellow",
    "coords": [
      [
        12.937575,
        77.6241826
      ],
      [
        12.9376443,
        77.6241215
      ]
    ]
  },
  {
    "id": "r283",
    "name": "6th Cross Road",
    "highway": "tertiary",
    "from": "n274",
    "to": "n275",
    "distance": 0.05,
    "status": "green",
    "coords": [
      [
        12.9376443,
        77.6241215
      ],
      [
        12.9379837,
        77.6238238
      ]
    ]
  },
  {
    "id": "r284",
    "name": "6th Cross Road",
    "highway": "tertiary",
    "from": "n275",
    "to": "n276",
    "distance": 0.05,
    "status": "green",
    "coords": [
      [
        12.9379837,
        77.6238238
      ],
      [
        12.9382468,
        77.6235961
      ],
      [
        12.9383089,
        77.6235423
      ]
    ]
  },
  {
    "id": "r285",
    "name": "6th Cross Road",
    "highway": "tertiary",
    "from": "n276",
    "to": "n277",
    "distance": 0.21,
    "status": "green",
    "coords": [
      [
        12.9383089,
        77.6235423
      ],
      [
        12.9393759,
        77.6225806
      ],
      [
        12.9393902,
        77.6225691
      ],
      [
        12.9397032,
        77.62229
      ]
    ]
  },
  {
    "id": "r286",
    "name": "17th E Main Road",
    "highway": "residential",
    "from": "n275",
    "to": "n278",
    "distance": 0.06,
    "status": "green",
    "coords": [
      [
        12.9379837,
        77.6238238
      ],
      [
        12.9375973,
        77.6234995
      ]
    ]
  },
  {
    "id": "r287",
    "name": "17th E Main Road",
    "highway": "residential",
    "from": "n278",
    "to": "n279",
    "distance": 0.1,
    "status": "green",
    "coords": [
      [
        12.9375973,
        77.6234995
      ],
      [
        12.9369318,
        77.6229311
      ]
    ]
  },
  {
    "id": "r288",
    "name": "17th E Main Road",
    "highway": "residential",
    "from": "n279",
    "to": "n267",
    "distance": 0.12,
    "status": "green",
    "coords": [
      [
        12.9369318,
        77.6229311
      ],
      [
        12.9361069,
        77.6222582
      ]
    ]
  },
  {
    "id": "r289",
    "name": "17th E Main Road",
    "highway": "residential",
    "from": "n267",
    "to": "n26",
    "distance": 0.05,
    "status": "yellow",
    "coords": [
      [
        12.9361069,
        77.6222582
      ],
      [
        12.9357937,
        77.6219913
      ],
      [
        12.9357389,
        77.6219474
      ]
    ]
  },
  {
    "id": "r290",
    "name": "18th Main Road",
    "highway": "tertiary",
    "from": "n280",
    "to": "n281",
    "distance": 0.01,
    "status": "green",
    "coords": [
      [
        12.9412556,
        77.6241534
      ],
      [
        12.941206,
        77.624091
      ]
    ]
  },
  {
    "id": "r291",
    "name": "18th Main Road",
    "highway": "tertiary",
    "from": "n281",
    "to": "n282",
    "distance": 0.05,
    "status": "yellow",
    "coords": [
      [
        12.941206,
        77.624091
      ],
      [
        12.9411741,
        77.6240555
      ],
      [
        12.9410339,
        77.6238996
      ],
      [
        12.9409227,
        77.623776
      ]
    ]
  },
  {
    "id": "r292",
    "name": "18th Main Road",
    "highway": "tertiary",
    "from": "n282",
    "to": "n283",
    "distance": 0.13,
    "status": "green",
    "coords": [
      [
        12.9409227,
        77.623776
      ],
      [
        12.940177,
        77.6228174
      ]
    ]
  },
  {
    "id": "r293",
    "name": "18th Main Road",
    "highway": "tertiary",
    "from": "n283",
    "to": "n277",
    "distance": 0.08,
    "status": "green",
    "coords": [
      [
        12.940177,
        77.6228174
      ],
      [
        12.9397032,
        77.62229
      ]
    ]
  },
  {
    "id": "r294",
    "name": "18th Main Road",
    "highway": "tertiary",
    "from": "n277",
    "to": "n284",
    "distance": 0.07,
    "status": "green",
    "coords": [
      [
        12.9397032,
        77.62229
      ],
      [
        12.9392817,
        77.6218499
      ]
    ]
  },
  {
    "id": "r295",
    "name": "18th Main Road",
    "highway": "tertiary",
    "from": "n284",
    "to": "n285",
    "distance": 0.03,
    "status": "yellow",
    "coords": [
      [
        12.9392817,
        77.6218499
      ],
      [
        12.9391113,
        77.6216991
      ]
    ]
  },
  {
    "id": "r296",
    "name": "18th Main Road",
    "highway": "tertiary",
    "from": "n285",
    "to": "n286",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9391113,
        77.6216991
      ],
      [
        12.9388276,
        77.621448
      ]
    ]
  },
  {
    "id": "r297",
    "name": "18th Main Road",
    "highway": "tertiary",
    "from": "n286",
    "to": "n287",
    "distance": 0.07,
    "status": "green",
    "coords": [
      [
        12.9388276,
        77.621448
      ],
      [
        12.9382569,
        77.6211409
      ]
    ]
  },
  {
    "id": "r298",
    "name": "18th Main Road",
    "highway": "tertiary",
    "from": "n287",
    "to": "n288",
    "distance": 0.06,
    "status": "green",
    "coords": [
      [
        12.9382569,
        77.6211409
      ],
      [
        12.937807,
        77.6208988
      ]
    ]
  },
  {
    "id": "r299",
    "name": "18th Main Road",
    "highway": "tertiary",
    "from": "n288",
    "to": "n289",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.937807,
        77.6208988
      ],
      [
        12.9376921,
        77.6208372
      ],
      [
        12.9374776,
        77.6207191
      ]
    ]
  },
  {
    "id": "r300",
    "name": "18th Main Road",
    "highway": "tertiary",
    "from": "n289",
    "to": "n290",
    "distance": 0.03,
    "status": "green",
    "coords": [
      [
        12.9374776,
        77.6207191
      ],
      [
        12.9372336,
        77.6205901
      ]
    ]
  },
  {
    "id": "r301",
    "name": "18th Main Road",
    "highway": "tertiary",
    "from": "n290",
    "to": "n291",
    "distance": 0.01,
    "status": "yellow",
    "coords": [
      [
        12.9372336,
        77.6205901
      ],
      [
        12.9371374,
        77.6205383
      ]
    ]
  },
  {
    "id": "r302",
    "name": "18th Main Road",
    "highway": "tertiary",
    "from": "n291",
    "to": "n22",
    "distance": 0.05,
    "status": "yellow",
    "coords": [
      [
        12.9371374,
        77.6205383
      ],
      [
        12.9369871,
        77.6204572
      ],
      [
        12.9368192,
        77.6203662
      ],
      [
        12.9367451,
        77.6203267
      ]
    ]
  },
  {
    "id": "r303",
    "name": "17th A Main Road",
    "highway": "residential",
    "from": "n269",
    "to": "n292",
    "distance": 0.05,
    "status": "green",
    "coords": [
      [
        12.9364402,
        77.6251252
      ],
      [
        12.9365729,
        77.6252925
      ],
      [
        12.9367372,
        77.6254756
      ]
    ]
  },
  {
    "id": "r304",
    "name": "17th A Main Road",
    "highway": "residential",
    "from": "n292",
    "to": "n293",
    "distance": 0.07,
    "status": "green",
    "coords": [
      [
        12.9367372,
        77.6254756
      ],
      [
        12.9371595,
        77.6259883
      ]
    ]
  },
  {
    "id": "r305",
    "name": "17th A Main Road",
    "highway": "residential",
    "from": "n293",
    "to": "n294",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9371595,
        77.6259883
      ],
      [
        12.9373971,
        77.6262661
      ]
    ]
  },
  {
    "id": "r306",
    "name": "17th A Main Road",
    "highway": "residential",
    "from": "n294",
    "to": "n295",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9373971,
        77.6262661
      ],
      [
        12.9376296,
        77.6265352
      ],
      [
        12.9376582,
        77.6265696
      ]
    ]
  },
  {
    "id": "r307",
    "name": "17th B Main Road",
    "highway": "residential",
    "from": "n264",
    "to": "n271",
    "distance": 0.23,
    "status": "yellow",
    "coords": [
      [
        12.9355576,
        77.6231521
      ],
      [
        12.9361258,
        77.6236317
      ],
      [
        12.9365182,
        77.623963
      ],
      [
        12.9367085,
        77.6241236
      ],
      [
        12.9371854,
        77.6245262
      ]
    ]
  },
  {
    "id": "r308",
    "name": "17 D Main Road",
    "highway": "residential",
    "from": "n266",
    "to": "n296",
    "distance": 0.12,
    "status": "yellow",
    "coords": [
      [
        12.9359004,
        77.62259
      ],
      [
        12.9367112,
        77.6232676
      ]
    ]
  },
  {
    "id": "r309",
    "name": "17 D Main Road",
    "highway": "residential",
    "from": "n296",
    "to": "n274",
    "distance": 0.14,
    "status": "yellow",
    "coords": [
      [
        12.9367112,
        77.6232676
      ],
      [
        12.9376139,
        77.6240937
      ],
      [
        12.9376443,
        77.6241215
      ]
    ]
  },
  {
    "id": "r310",
    "name": "6th Cross Road",
    "highway": "residential",
    "from": "n296",
    "to": "n279",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9367112,
        77.6232676
      ],
      [
        12.9368998,
        77.6229799
      ],
      [
        12.9369318,
        77.6229311
      ]
    ]
  },
  {
    "id": "r311",
    "name": "5th Cross Road",
    "highway": "residential",
    "from": "n278",
    "to": "n297",
    "distance": 0.2,
    "status": "green",
    "coords": [
      [
        12.9375973,
        77.6234995
      ],
      [
        12.9376296,
        77.6234638
      ],
      [
        12.9380727,
        77.6230362
      ],
      [
        12.9381968,
        77.6229195
      ],
      [
        12.9389476,
        77.6222253
      ]
    ]
  },
  {
    "id": "r312",
    "name": "5th Cross Road",
    "highway": "residential",
    "from": "n297",
    "to": "n284",
    "distance": 0.06,
    "status": "green",
    "coords": [
      [
        12.9389476,
        77.6222253
      ],
      [
        12.9392817,
        77.6218499
      ]
    ]
  },
  {
    "id": "r313",
    "name": "1st Cross Road",
    "highway": "residential",
    "from": "n290",
    "to": "n298",
    "distance": 0.07,
    "status": "green",
    "coords": [
      [
        12.9372336,
        77.6205901
      ],
      [
        12.9369132,
        77.6211654
      ]
    ]
  },
  {
    "id": "r314",
    "name": "17th H Main Road",
    "highway": "residential",
    "from": "n298",
    "to": "n299",
    "distance": 0.13,
    "status": "green",
    "coords": [
      [
        12.9369132,
        77.6211654
      ],
      [
        12.9375442,
        77.6214973
      ],
      [
        12.9377225,
        77.6216072
      ],
      [
        12.9379766,
        77.6217396
      ]
    ]
  },
  {
    "id": "r315",
    "name": "17th H Main Road",
    "highway": "residential",
    "from": "n299",
    "to": "n297",
    "distance": 0.12,
    "status": "yellow",
    "coords": [
      [
        12.9379766,
        77.6217396
      ],
      [
        12.9389476,
        77.6222253
      ]
    ]
  },
  {
    "id": "r316",
    "name": "19th Main Road",
    "highway": "residential",
    "from": "n20",
    "to": "n300",
    "distance": 0.05,
    "status": "green",
    "coords": [
      [
        12.9374499,
        77.619167
      ],
      [
        12.9375038,
        77.6191976
      ],
      [
        12.9378339,
        77.6193848
      ]
    ]
  },
  {
    "id": "r317",
    "name": "19th Main Road",
    "highway": "residential",
    "from": "n300",
    "to": "n301",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9378339,
        77.6193848
      ],
      [
        12.9381699,
        77.61957
      ]
    ]
  },
  {
    "id": "r318",
    "name": "19th Main Road",
    "highway": "residential",
    "from": "n301",
    "to": "n302",
    "distance": 0.04,
    "status": "yellow",
    "coords": [
      [
        12.9381699,
        77.61957
      ],
      [
        12.9384889,
        77.6197579
      ]
    ]
  },
  {
    "id": "r319",
    "name": "19th Main Road",
    "highway": "residential",
    "from": "n302",
    "to": "n303",
    "distance": 0.14,
    "status": "yellow",
    "coords": [
      [
        12.9384889,
        77.6197579
      ],
      [
        12.9391204,
        77.6201177
      ],
      [
        12.9396055,
        77.6204267
      ]
    ]
  },
  {
    "id": "r320",
    "name": "19th Main Road",
    "highway": "residential",
    "from": "n303",
    "to": "n304",
    "distance": 0.06,
    "status": "red",
    "coords": [
      [
        12.9396055,
        77.6204267
      ],
      [
        12.9400233,
        77.6207688
      ]
    ]
  },
  {
    "id": "r321",
    "name": "19th Main Road",
    "highway": "residential",
    "from": "n304",
    "to": "n305",
    "distance": 0.17,
    "status": "green",
    "coords": [
      [
        12.9400233,
        77.6207688
      ],
      [
        12.9407696,
        77.6215393
      ],
      [
        12.9410189,
        77.6217967
      ],
      [
        12.9410855,
        77.6218654
      ]
    ]
  },
  {
    "id": "r322",
    "name": "19th Main Road",
    "highway": "residential",
    "from": "n305",
    "to": "n306",
    "distance": 0.14,
    "status": "yellow",
    "coords": [
      [
        12.9410855,
        77.6218654
      ],
      [
        12.9418575,
        77.6228386
      ]
    ]
  },
  {
    "id": "r323",
    "name": "17th F Main Road",
    "highway": "residential",
    "from": "n276",
    "to": "n307",
    "distance": 0.04,
    "status": "yellow",
    "coords": [
      [
        12.9383089,
        77.6235423
      ],
      [
        12.9385432,
        77.6238341
      ]
    ]
  },
  {
    "id": "r324",
    "name": "17th F Main Road",
    "highway": "residential",
    "from": "n307",
    "to": "n308",
    "distance": 0.18,
    "status": "yellow",
    "coords": [
      [
        12.9385432,
        77.6238341
      ],
      [
        12.9387453,
        77.6240804
      ],
      [
        12.9395944,
        77.6251154
      ]
    ]
  },
  {
    "id": "r325",
    "name": "17th F Main Road",
    "highway": "residential",
    "from": "n308",
    "to": "n309",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9395944,
        77.6251154
      ],
      [
        12.9398042,
        77.6253216
      ],
      [
        12.9398239,
        77.6253404
      ],
      [
        12.9398501,
        77.6253654
      ]
    ]
  },
  {
    "id": "r326",
    "name": "6th C Cross Road",
    "highway": "residential",
    "from": "n307",
    "to": "n310",
    "distance": 0.03,
    "status": "green",
    "coords": [
      [
        12.9385432,
        77.6238341
      ],
      [
        12.9387785,
        77.6236225
      ]
    ]
  },
  {
    "id": "r327",
    "name": "6th C Cross Road",
    "highway": "residential",
    "from": "n310",
    "to": "n311",
    "distance": 0.03,
    "status": "yellow",
    "coords": [
      [
        12.9387785,
        77.6236225
      ],
      [
        12.9389913,
        77.6234421
      ]
    ]
  },
  {
    "id": "r328",
    "name": "6th C Cross Road",
    "highway": "residential",
    "from": "n311",
    "to": "n312",
    "distance": 0.03,
    "status": "green",
    "coords": [
      [
        12.9389913,
        77.6234421
      ],
      [
        12.9392302,
        77.6232332
      ]
    ]
  },
  {
    "id": "r329",
    "name": "6th C Cross Road",
    "highway": "residential",
    "from": "n312",
    "to": "n313",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9392302,
        77.6232332
      ],
      [
        12.9394716,
        77.622999
      ]
    ]
  },
  {
    "id": "r330",
    "name": "6th C Cross Road",
    "highway": "residential",
    "from": "n313",
    "to": "n314",
    "distance": 0.02,
    "status": "green",
    "coords": [
      [
        12.9394716,
        77.622999
      ],
      [
        12.9396212,
        77.6228577
      ]
    ]
  },
  {
    "id": "r331",
    "name": "1st Cross Road",
    "highway": "residential",
    "from": "n291",
    "to": "n300",
    "distance": 0.15,
    "status": "green",
    "coords": [
      [
        12.9371374,
        77.6205383
      ],
      [
        12.9371706,
        77.6204834
      ],
      [
        12.9374433,
        77.6200318
      ],
      [
        12.9378339,
        77.6193848
      ]
    ]
  },
  {
    "id": "r332",
    "name": "2nd Cross Road",
    "highway": "residential",
    "from": "n289",
    "to": "n301",
    "distance": 0.15,
    "status": "green",
    "coords": [
      [
        12.9374776,
        77.6207191
      ],
      [
        12.9377344,
        77.6202845
      ],
      [
        12.9381699,
        77.61957
      ]
    ]
  },
  {
    "id": "r333",
    "name": "3rd Cross Road",
    "highway": "residential",
    "from": "n288",
    "to": "n315",
    "distance": 0.06,
    "status": "green",
    "coords": [
      [
        12.937807,
        77.6208988
      ],
      [
        12.9380792,
        77.6204433
      ]
    ]
  },
  {
    "id": "r334",
    "name": "3rd Cross Road",
    "highway": "residential",
    "from": "n315",
    "to": "n316",
    "distance": 0.04,
    "status": "yellow",
    "coords": [
      [
        12.9380792,
        77.6204433
      ],
      [
        12.9382697,
        77.6201246
      ]
    ]
  },
  {
    "id": "r335",
    "name": "3rd Cross Road",
    "highway": "residential",
    "from": "n316",
    "to": "n302",
    "distance": 0.05,
    "status": "green",
    "coords": [
      [
        12.9382697,
        77.6201246
      ],
      [
        12.9384889,
        77.6197579
      ]
    ]
  },
  {
    "id": "r336",
    "name": "4th Cross Road",
    "highway": "residential",
    "from": "n286",
    "to": "n317",
    "distance": 0.05,
    "status": "yellow",
    "coords": [
      [
        12.9388276,
        77.621448
      ],
      [
        12.9391027,
        77.6210868
      ]
    ]
  },
  {
    "id": "r337",
    "name": "4th Cross Road",
    "highway": "residential",
    "from": "n317",
    "to": "n318",
    "distance": 0.05,
    "status": "green",
    "coords": [
      [
        12.9391027,
        77.6210868
      ],
      [
        12.9393562,
        77.6207541
      ]
    ]
  },
  {
    "id": "r338",
    "name": "4th Cross Road",
    "highway": "residential",
    "from": "n318",
    "to": "n303",
    "distance": 0.05,
    "status": "yellow",
    "coords": [
      [
        12.9393562,
        77.6207541
      ],
      [
        12.9396055,
        77.6204267
      ]
    ]
  },
  {
    "id": "r339",
    "name": "18 B Main Road",
    "highway": "residential",
    "from": "n316",
    "to": "n318",
    "distance": 0.14,
    "status": "green",
    "coords": [
      [
        12.9382697,
        77.6201246
      ],
      [
        12.9393562,
        77.6207541
      ]
    ]
  },
  {
    "id": "r340",
    "name": "18 A Main Road",
    "highway": "residential",
    "from": "n315",
    "to": "n317",
    "distance": 0.13,
    "status": "green",
    "coords": [
      [
        12.9380792,
        77.6204433
      ],
      [
        12.9391027,
        77.6210868
      ]
    ]
  },
  {
    "id": "r341",
    "name": "5th Cross Road",
    "highway": "residential",
    "from": "n285",
    "to": "n319",
    "distance": 0.05,
    "status": "yellow",
    "coords": [
      [
        12.9391113,
        77.6216991
      ],
      [
        12.939443,
        77.6213505
      ]
    ]
  },
  {
    "id": "r342",
    "name": "5th Cross Road",
    "highway": "residential",
    "from": "n319",
    "to": "n320",
    "distance": 0.05,
    "status": "green",
    "coords": [
      [
        12.939443,
        77.6213505
      ],
      [
        12.9397294,
        77.6210181
      ]
    ]
  },
  {
    "id": "r343",
    "name": "5th Cross Road",
    "highway": "residential",
    "from": "n320",
    "to": "n304",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9397294,
        77.6210181
      ],
      [
        12.9400233,
        77.6207688
      ]
    ]
  },
  {
    "id": "r344",
    "name": "5th Cross Road",
    "highway": "residential",
    "from": "n304",
    "to": "n321",
    "distance": 0.07,
    "status": "yellow",
    "coords": [
      [
        12.9400233,
        77.6207688
      ],
      [
        12.9402691,
        77.6205285
      ],
      [
        12.9404267,
        77.6203745
      ],
      [
        12.9404473,
        77.6203241
      ],
      [
        12.9404644,
        77.6202825
      ]
    ]
  },
  {
    "id": "r345",
    "name": "6th Cross Road",
    "highway": "residential",
    "from": "n283",
    "to": "n322",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.940177,
        77.6228174
      ],
      [
        12.9404185,
        77.6225654
      ]
    ]
  },
  {
    "id": "r346",
    "name": "6th Cross Road",
    "highway": "residential",
    "from": "n322",
    "to": "n323",
    "distance": 0.02,
    "status": "yellow",
    "coords": [
      [
        12.9404185,
        77.6225654
      ],
      [
        12.9405263,
        77.6224529
      ]
    ]
  },
  {
    "id": "r347",
    "name": "6th Cross Road",
    "highway": "residential",
    "from": "n323",
    "to": "n324",
    "distance": 0.02,
    "status": "red",
    "coords": [
      [
        12.9405263,
        77.6224529
      ],
      [
        12.9406341,
        77.6223403
      ]
    ]
  },
  {
    "id": "r348",
    "name": "6th Cross Road",
    "highway": "residential",
    "from": "n324",
    "to": "n325",
    "distance": 0.03,
    "status": "red",
    "coords": [
      [
        12.9406341,
        77.6223403
      ],
      [
        12.9408041,
        77.6221629
      ]
    ]
  },
  {
    "id": "r349",
    "name": "6th Cross Road",
    "highway": "residential",
    "from": "n325",
    "to": "n326",
    "distance": 0.01,
    "status": "green",
    "coords": [
      [
        12.9408041,
        77.6221629
      ],
      [
        12.9408456,
        77.6221196
      ]
    ]
  },
  {
    "id": "r350",
    "name": "6th Cross Road",
    "highway": "residential",
    "from": "n326",
    "to": "n305",
    "distance": 0.04,
    "status": "red",
    "coords": [
      [
        12.9408456,
        77.6221196
      ],
      [
        12.9410855,
        77.6218654
      ]
    ]
  },
  {
    "id": "r351",
    "name": "18th Main Road",
    "highway": "residential",
    "from": "n327",
    "to": "n306",
    "distance": 0.06,
    "status": "green",
    "coords": [
      [
        12.942244,
        77.6224302
      ],
      [
        12.9422184,
        77.6224586
      ],
      [
        12.9418575,
        77.6228386
      ]
    ]
  },
  {
    "id": "r352",
    "name": "18th Main Road",
    "highway": "residential",
    "from": "n306",
    "to": "n328",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9418575,
        77.6228386
      ],
      [
        12.9416303,
        77.6230642
      ]
    ]
  },
  {
    "id": "r353",
    "name": "18th Main Road",
    "highway": "residential",
    "from": "n328",
    "to": "n329",
    "distance": 0.03,
    "status": "green",
    "coords": [
      [
        12.9416303,
        77.6230642
      ],
      [
        12.9414394,
        77.6232761
      ]
    ]
  },
  {
    "id": "r354",
    "name": "18th Main Road",
    "highway": "residential",
    "from": "n329",
    "to": "n330",
    "distance": 0.03,
    "status": "red",
    "coords": [
      [
        12.9414394,
        77.6232761
      ],
      [
        12.9412303,
        77.6235081
      ]
    ]
  },
  {
    "id": "r355",
    "name": "18th Main Road",
    "highway": "residential",
    "from": "n330",
    "to": "n282",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9412303,
        77.6235081
      ],
      [
        12.9409227,
        77.623776
      ]
    ]
  },
  {
    "id": "r356",
    "name": "18D Main Road",
    "highway": "residential",
    "from": "n320",
    "to": "n325",
    "distance": 0.17,
    "status": "red",
    "coords": [
      [
        12.9397294,
        77.6210181
      ],
      [
        12.9408041,
        77.6221629
      ]
    ]
  },
  {
    "id": "r357",
    "name": "18A Main Road",
    "highway": "residential",
    "from": "n319",
    "to": "n323",
    "distance": 0.17,
    "status": "green",
    "coords": [
      [
        12.939443,
        77.6213505
      ],
      [
        12.9405263,
        77.6224529
      ]
    ]
  },
  {
    "id": "r358",
    "name": "6th D Cross Road",
    "highway": "residential",
    "from": "n308",
    "to": "n331",
    "distance": 0.04,
    "status": "yellow",
    "coords": [
      [
        12.9395944,
        77.6251154
      ],
      [
        12.9398248,
        77.6248832
      ]
    ]
  },
  {
    "id": "r359",
    "name": "6th D Cross Road",
    "highway": "residential",
    "from": "n331",
    "to": "n332",
    "distance": 0.03,
    "status": "yellow",
    "coords": [
      [
        12.9398248,
        77.6248832
      ],
      [
        12.9400232,
        77.6246832
      ]
    ]
  },
  {
    "id": "r360",
    "name": "6th D Cross Road",
    "highway": "residential",
    "from": "n332",
    "to": "n333",
    "distance": 0.04,
    "status": "yellow",
    "coords": [
      [
        12.9400232,
        77.6246832
      ],
      [
        12.9402638,
        77.6244408
      ]
    ]
  },
  {
    "id": "r361",
    "name": "6th D Cross Road",
    "highway": "residential",
    "from": "n333",
    "to": "n334",
    "distance": 0.03,
    "status": "green",
    "coords": [
      [
        12.9402638,
        77.6244408
      ],
      [
        12.940457,
        77.6242461
      ]
    ]
  },
  {
    "id": "r362",
    "name": "6th D Cross Road",
    "highway": "residential",
    "from": "n334",
    "to": "n335",
    "distance": 0.03,
    "status": "green",
    "coords": [
      [
        12.940457,
        77.6242461
      ],
      [
        12.9406204,
        77.6240784
      ]
    ]
  },
  {
    "id": "r363",
    "name": "17th G Main Road",
    "highway": "residential",
    "from": "n314",
    "to": "n335",
    "distance": 0.17,
    "status": "yellow",
    "coords": [
      [
        12.9396212,
        77.6228577
      ],
      [
        12.9406204,
        77.6240784
      ]
    ]
  },
  {
    "id": "r364",
    "name": "17th G Main Road",
    "highway": "residential",
    "from": "n335",
    "to": "n336",
    "distance": 0.05,
    "status": "yellow",
    "coords": [
      [
        12.9406204,
        77.6240784
      ],
      [
        12.9408716,
        77.6243652
      ],
      [
        12.9409012,
        77.624399
      ]
    ]
  },
  {
    "id": "r365",
    "name": "17th G Main Road",
    "highway": "residential",
    "from": "n336",
    "to": "n337",
    "distance": 0.01,
    "status": "green",
    "coords": [
      [
        12.9409012,
        77.624399
      ],
      [
        12.9409526,
        77.624452
      ]
    ]
  },
  {
    "id": "r366",
    "name": "17th F3 Main Road",
    "highway": "residential",
    "from": "n312",
    "to": "n333",
    "distance": 0.17,
    "status": "yellow",
    "coords": [
      [
        12.9392302,
        77.6232332
      ],
      [
        12.9402638,
        77.6244408
      ]
    ]
  },
  {
    "id": "r367",
    "name": "17th F2 Main Road",
    "highway": "residential",
    "from": "n311",
    "to": "n332",
    "distance": 0.18,
    "status": "yellow",
    "coords": [
      [
        12.9389913,
        77.6234421
      ],
      [
        12.9400232,
        77.6246832
      ]
    ]
  },
  {
    "id": "r368",
    "name": "17th F1 Main Road",
    "highway": "residential",
    "from": "n310",
    "to": "n331",
    "distance": 0.18,
    "status": "green",
    "coords": [
      [
        12.9387785,
        77.6236225
      ],
      [
        12.9398248,
        77.6248832
      ]
    ]
  },
  {
    "id": "r369",
    "name": "18G Main Road",
    "highway": "residential",
    "from": "n326",
    "to": "n328",
    "distance": 0.13,
    "status": "green",
    "coords": [
      [
        12.9408456,
        77.6221196
      ],
      [
        12.9416303,
        77.6230642
      ]
    ]
  },
  {
    "id": "r370",
    "name": "18th F Main Road",
    "highway": "residential",
    "from": "n324",
    "to": "n329",
    "distance": 0.14,
    "status": "green",
    "coords": [
      [
        12.9406341,
        77.6223403
      ],
      [
        12.9414394,
        77.6232761
      ]
    ]
  },
  {
    "id": "r371",
    "name": "18th E Main Road",
    "highway": "residential",
    "from": "n322",
    "to": "n330",
    "distance": 0.14,
    "status": "green",
    "coords": [
      [
        12.9404185,
        77.6225654
      ],
      [
        12.9412303,
        77.6235081
      ]
    ]
  },
  {
    "id": "r372",
    "name": "1st A Cross Road",
    "highway": "residential",
    "from": "n219",
    "to": "n218",
    "distance": 0.22,
    "status": "green",
    "coords": [
      [
        12.9351483,
        77.6129369
      ],
      [
        12.9360839,
        77.614765
      ]
    ]
  },
  {
    "id": "r373",
    "name": "2nd Cross Road",
    "highway": "residential",
    "from": "n338",
    "to": "n207",
    "distance": 0.2,
    "status": "green",
    "coords": [
      [
        12.9370263,
        77.6129243
      ],
      [
        12.936837,
        77.6137652
      ],
      [
        12.9367229,
        77.6142718
      ],
      [
        12.9367453,
        77.614694
      ]
    ]
  },
  {
    "id": "r374",
    "name": "5th Cross Rd",
    "highway": "residential",
    "from": "n210",
    "to": "n339",
    "distance": 0.03,
    "status": "green",
    "coords": [
      [
        12.9370709,
        77.6114917
      ],
      [
        12.9373272,
        77.6115478
      ]
    ]
  },
  {
    "id": "r375",
    "name": "5th Cross Rd",
    "highway": "residential",
    "from": "n339",
    "to": "n340",
    "distance": 0.02,
    "status": "green",
    "coords": [
      [
        12.9373272,
        77.6115478
      ],
      [
        12.937536,
        77.6115913
      ]
    ]
  },
  {
    "id": "r376",
    "name": "5th Cross Rd",
    "highway": "residential",
    "from": "n340",
    "to": "n341",
    "distance": 0.03,
    "status": "yellow",
    "coords": [
      [
        12.937536,
        77.6115913
      ],
      [
        12.9377567,
        77.6116369
      ]
    ]
  },
  {
    "id": "r377",
    "name": "5th Cross Rd",
    "highway": "residential",
    "from": "n341",
    "to": "n342",
    "distance": 0.03,
    "status": "yellow",
    "coords": [
      [
        12.9377567,
        77.6116369
      ],
      [
        12.9380269,
        77.6116888
      ]
    ]
  },
  {
    "id": "r378",
    "name": "4th Cross Road",
    "highway": "residential",
    "from": "n341",
    "to": "n343",
    "distance": 0.11,
    "status": "yellow",
    "coords": [
      [
        12.9377567,
        77.6116369
      ],
      [
        12.9375769,
        77.6125302
      ],
      [
        12.937555,
        77.6126387
      ]
    ]
  },
  {
    "id": "r379",
    "name": "3rd Cross Road",
    "highway": "residential",
    "from": "n340",
    "to": "n344",
    "distance": 0.11,
    "status": "yellow",
    "coords": [
      [
        12.937536,
        77.6115913
      ],
      [
        12.9373185,
        77.6125862
      ]
    ]
  },
  {
    "id": "r380",
    "name": "2nd Cross Road",
    "highway": "residential",
    "from": "n339",
    "to": "n338",
    "distance": 0.15,
    "status": "green",
    "coords": [
      [
        12.9373272,
        77.6115478
      ],
      [
        12.9371008,
        77.612538
      ],
      [
        12.9370263,
        77.6129243
      ]
    ]
  },
  {
    "id": "r381",
    "name": "16th B Main Road",
    "highway": "residential",
    "from": "n345",
    "to": "n346",
    "distance": 0.06,
    "status": "green",
    "coords": [
      [
        12.9313022,
        77.6230678
      ],
      [
        12.9315723,
        77.6231711
      ],
      [
        12.9317961,
        77.6232567
      ]
    ]
  },
  {
    "id": "r382",
    "name": "16th B Main Road",
    "highway": "residential",
    "from": "n346",
    "to": "n347",
    "distance": 0.03,
    "status": "green",
    "coords": [
      [
        12.9317961,
        77.6232567
      ],
      [
        12.9320762,
        77.6233639
      ]
    ]
  },
  {
    "id": "r383",
    "name": "16th B Main Road",
    "highway": "residential",
    "from": "n347",
    "to": "n247",
    "distance": 0.05,
    "status": "green",
    "coords": [
      [
        12.9320762,
        77.6233639
      ],
      [
        12.9325211,
        77.6235463
      ]
    ]
  },
  {
    "id": "r384",
    "name": "7th A Cross Road",
    "highway": "residential",
    "from": "n346",
    "to": "n348",
    "distance": 0.18,
    "status": "yellow",
    "coords": [
      [
        12.9317961,
        77.6232567
      ],
      [
        12.9312722,
        77.6243622
      ],
      [
        12.9308518,
        77.6241866
      ]
    ]
  },
  {
    "id": "r385",
    "name": "7th B Cross Road",
    "highway": "residential",
    "from": "n347",
    "to": "n240",
    "distance": 0.18,
    "status": "red",
    "coords": [
      [
        12.9320762,
        77.6233639
      ],
      [
        12.931584,
        77.6244978
      ],
      [
        12.9314062,
        77.6249075
      ]
    ]
  },
  {
    "id": "r386",
    "name": "5th Cross Road",
    "highway": "residential",
    "from": "n342",
    "to": "n349",
    "distance": 0.13,
    "status": "red",
    "coords": [
      [
        12.9380269,
        77.6116888
      ],
      [
        12.9378862,
        77.6125599
      ],
      [
        12.9377308,
        77.6125335
      ],
      [
        12.9377084,
        77.6126727
      ]
    ]
  },
  {
    "id": "r387",
    "name": "1st Main Road",
    "highway": "residential",
    "from": "n258",
    "to": "n257",
    "distance": 0.05,
    "status": "green",
    "coords": [
      [
        12.9362825,
        77.6167973
      ],
      [
        12.9362392,
        77.6167918
      ],
      [
        12.9358253,
        77.6167295
      ]
    ]
  },
  {
    "id": "r388",
    "name": "1st Main Road",
    "highway": "residential",
    "from": "n257",
    "to": "n82",
    "distance": 0.11,
    "status": "green",
    "coords": [
      [
        12.9358253,
        77.6167295
      ],
      [
        12.9350615,
        77.6165905
      ],
      [
        12.9348509,
        77.6165185
      ]
    ]
  },
  {
    "id": "r389",
    "name": "17th E Main Road",
    "highway": "residential",
    "from": "n350",
    "to": "n74",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9349521,
        77.6186757
      ],
      [
        12.9349478,
        77.6190496
      ]
    ]
  },
  {
    "id": "r390",
    "name": "17th E Main Road",
    "highway": "residential",
    "from": "n74",
    "to": "n351",
    "distance": 0.08,
    "status": "yellow",
    "coords": [
      [
        12.9349478,
        77.6190496
      ],
      [
        12.93499,
        77.6197969
      ]
    ]
  },
  {
    "id": "r391",
    "name": "2nd B Cross Road",
    "highway": "residential",
    "from": "n352",
    "to": "n351",
    "distance": 0,
    "status": "yellow",
    "coords": [
      [
        12.9349782,
        77.6198336
      ],
      [
        12.93499,
        77.6197969
      ]
    ]
  },
  {
    "id": "r392",
    "name": "2nd B Cross Road",
    "highway": "residential",
    "from": "n351",
    "to": "n75",
    "distance": 0.08,
    "status": "green",
    "coords": [
      [
        12.93499,
        77.6197969
      ],
      [
        12.9353718,
        77.619174
      ]
    ]
  },
  {
    "id": "r393",
    "name": "17th C Main Road",
    "highway": "residential",
    "from": "n265",
    "to": "n272",
    "distance": 0.24,
    "status": "green",
    "coords": [
      [
        12.9356987,
        77.622914
      ],
      [
        12.9373454,
        77.6243458
      ],
      [
        12.9373679,
        77.6243653
      ]
    ]
  },
  {
    "id": "r394",
    "name": "17th D Main Road",
    "highway": "residential",
    "from": "n273",
    "to": "n353",
    "distance": 0.06,
    "status": "green",
    "coords": [
      [
        12.937575,
        77.6241826
      ],
      [
        12.9379093,
        77.6245649
      ]
    ]
  },
  {
    "id": "r395",
    "name": "17th D Main Road",
    "highway": "residential",
    "from": "n353",
    "to": "n354",
    "distance": 0.07,
    "status": "green",
    "coords": [
      [
        12.9379093,
        77.6245649
      ],
      [
        12.9382178,
        77.6249177
      ],
      [
        12.9383451,
        77.6250695
      ]
    ]
  },
  {
    "id": "r396",
    "name": "17th D Main Road",
    "highway": "residential",
    "from": "n354",
    "to": "n355",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9383451,
        77.6250695
      ],
      [
        12.9385771,
        77.625346
      ]
    ]
  },
  {
    "id": "r397",
    "name": "17th D Main Road",
    "highway": "residential",
    "from": "n355",
    "to": "n356",
    "distance": 0.06,
    "status": "red",
    "coords": [
      [
        12.9385771,
        77.625346
      ],
      [
        12.9389215,
        77.6257572
      ],
      [
        12.9389451,
        77.6257855
      ]
    ]
  },
  {
    "id": "r398",
    "name": "6th E Cross Road",
    "highway": "residential",
    "from": "n353",
    "to": "n357",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9379093,
        77.6245649
      ],
      [
        12.9376068,
        77.6247999
      ]
    ]
  },
  {
    "id": "r399",
    "name": "6th E Cross Road",
    "highway": "residential",
    "from": "n357",
    "to": "n358",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9376068,
        77.6247999
      ],
      [
        12.9373022,
        77.6250277
      ]
    ]
  },
  {
    "id": "r400",
    "name": "6th E Cross Road",
    "highway": "residential",
    "from": "n358",
    "to": "n359",
    "distance": 0.03,
    "status": "green",
    "coords": [
      [
        12.9373022,
        77.6250277
      ],
      [
        12.9370676,
        77.6252191
      ]
    ]
  },
  {
    "id": "r401",
    "name": "6th E Cross Road",
    "highway": "residential",
    "from": "n359",
    "to": "n292",
    "distance": 0.05,
    "status": "green",
    "coords": [
      [
        12.9370676,
        77.6252191
      ],
      [
        12.9367372,
        77.6254756
      ]
    ]
  },
  {
    "id": "r402",
    "name": "6th Cross Road",
    "highway": "residential",
    "from": "n354",
    "to": "n360",
    "distance": 0.05,
    "status": "green",
    "coords": [
      [
        12.9383451,
        77.6250695
      ],
      [
        12.9379988,
        77.6253307
      ]
    ]
  },
  {
    "id": "r403",
    "name": "6th Cross Road",
    "highway": "residential",
    "from": "n360",
    "to": "n361",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9379988,
        77.6253307
      ],
      [
        12.9377224,
        77.6255393
      ]
    ]
  },
  {
    "id": "r404",
    "name": "6th Cross Road",
    "highway": "residential",
    "from": "n361",
    "to": "n362",
    "distance": 0.03,
    "status": "green",
    "coords": [
      [
        12.9377224,
        77.6255393
      ],
      [
        12.9374894,
        77.6257151
      ]
    ]
  },
  {
    "id": "r405",
    "name": "6th Cross Road",
    "highway": "residential",
    "from": "n362",
    "to": "n293",
    "distance": 0.05,
    "status": "red",
    "coords": [
      [
        12.9374894,
        77.6257151
      ],
      [
        12.9371595,
        77.6259883
      ]
    ]
  },
  {
    "id": "r406",
    "name": "6th G Cross Road",
    "highway": "residential",
    "from": "n355",
    "to": "n294",
    "distance": 0.16,
    "status": "yellow",
    "coords": [
      [
        12.9385771,
        77.625346
      ],
      [
        12.9373971,
        77.6262661
      ]
    ]
  },
  {
    "id": "r407",
    "name": "17th A1 Main Road",
    "highway": "residential",
    "from": "n359",
    "to": "n362",
    "distance": 0.07,
    "status": "green",
    "coords": [
      [
        12.9370676,
        77.6252191
      ],
      [
        12.9374894,
        77.6257151
      ]
    ]
  },
  {
    "id": "r408",
    "name": "17th A2 Main Road",
    "highway": "residential",
    "from": "n358",
    "to": "n361",
    "distance": 0.07,
    "status": "green",
    "coords": [
      [
        12.9373022,
        77.6250277
      ],
      [
        12.9377224,
        77.6255393
      ]
    ]
  },
  {
    "id": "r409",
    "name": "17th A3 Main Road",
    "highway": "residential",
    "from": "n357",
    "to": "n360",
    "distance": 0.07,
    "status": "green",
    "coords": [
      [
        12.9376068,
        77.6247999
      ],
      [
        12.9379988,
        77.6253307
      ]
    ]
  },
  {
    "id": "r410",
    "name": "1st B Main Road",
    "highway": "residential",
    "from": "n363",
    "to": "n364",
    "distance": 0.32,
    "status": "yellow",
    "coords": [
      [
        12.9363661,
        77.6172596
      ],
      [
        12.9364079,
        77.6172462
      ],
      [
        12.9371161,
        77.6174522
      ],
      [
        12.9389543,
        77.6179503
      ],
      [
        12.9391826,
        77.6180061
      ]
    ]
  },
  {
    "id": "r411",
    "name": "1st B Main Road",
    "highway": "residential",
    "from": "n364",
    "to": "n365",
    "distance": 0.03,
    "status": "green",
    "coords": [
      [
        12.9391826,
        77.6180061
      ],
      [
        12.9394558,
        77.6180511
      ]
    ]
  },
  {
    "id": "r412",
    "name": "1st B Main Road",
    "highway": "residential",
    "from": "n365",
    "to": "n366",
    "distance": 0.03,
    "status": "yellow",
    "coords": [
      [
        12.9394558,
        77.6180511
      ],
      [
        12.9397413,
        77.6181071
      ]
    ]
  },
  {
    "id": "r413",
    "name": "1st B Main Road",
    "highway": "residential",
    "from": "n366",
    "to": "n367",
    "distance": 0.04,
    "status": "yellow",
    "coords": [
      [
        12.9397413,
        77.6181071
      ],
      [
        12.9400848,
        77.6181763
      ]
    ]
  },
  {
    "id": "r414",
    "name": "1st B Main Road",
    "highway": "residential",
    "from": "n367",
    "to": "n368",
    "distance": 0.01,
    "status": "yellow",
    "coords": [
      [
        12.9400848,
        77.6181763
      ],
      [
        12.9401391,
        77.6181908
      ]
    ]
  },
  {
    "id": "r415",
    "name": "1st B Main Road",
    "highway": "residential",
    "from": "n368",
    "to": "n369",
    "distance": 0.04,
    "status": "red",
    "coords": [
      [
        12.9401391,
        77.6181908
      ],
      [
        12.940397,
        77.6182601
      ],
      [
        12.940442,
        77.6182725
      ],
      [
        12.9404564,
        77.6182764
      ]
    ]
  },
  {
    "id": "r416",
    "name": "1st B Main Road",
    "highway": "residential",
    "from": "n369",
    "to": "n370",
    "distance": 0.02,
    "status": "green",
    "coords": [
      [
        12.9404564,
        77.6182764
      ],
      [
        12.9406681,
        77.6183347
      ]
    ]
  },
  {
    "id": "r417",
    "name": "1st B Main Road",
    "highway": "residential",
    "from": "n370",
    "to": "n371",
    "distance": 0.03,
    "status": "green",
    "coords": [
      [
        12.9406681,
        77.6183347
      ],
      [
        12.9409456,
        77.6184401
      ]
    ]
  },
  {
    "id": "r418",
    "name": "1st Cross Road",
    "highway": "residential",
    "from": "n372",
    "to": "n373",
    "distance": 0.26,
    "status": "green",
    "coords": [
      [
        12.9331357,
        77.6202045
      ],
      [
        12.9331292,
        77.6215218
      ],
      [
        12.9331704,
        77.6225624
      ]
    ]
  },
  {
    "id": "r419",
    "name": "20th A Main Road",
    "highway": "residential",
    "from": "n374",
    "to": "n375",
    "distance": 0.21,
    "status": "green",
    "coords": [
      [
        12.9369838,
        77.6179023
      ],
      [
        12.9381925,
        77.6182093
      ],
      [
        12.9386174,
        77.6183183
      ],
      [
        12.9388337,
        77.6183733
      ]
    ]
  },
  {
    "id": "r420",
    "name": "1st A Cross Road",
    "highway": "residential",
    "from": "n376",
    "to": "n364",
    "distance": 0.12,
    "status": "green",
    "coords": [
      [
        12.9388625,
        77.6190788
      ],
      [
        12.9388752,
        77.6190492
      ],
      [
        12.9391826,
        77.6180061
      ]
    ]
  },
  {
    "id": "r421",
    "name": "1st Cross Road",
    "highway": "residential",
    "from": "n377",
    "to": "n378",
    "distance": 0.01,
    "status": "yellow",
    "coords": [
      [
        12.9390917,
        77.6192822
      ],
      [
        12.9391224,
        77.6192271
      ]
    ]
  },
  {
    "id": "r422",
    "name": "1st Cross Road",
    "highway": "residential",
    "from": "n378",
    "to": "n379",
    "distance": 0.05,
    "status": "red",
    "coords": [
      [
        12.9391224,
        77.6192271
      ],
      [
        12.9391285,
        77.6192006
      ],
      [
        12.9392471,
        77.6187416
      ]
    ]
  },
  {
    "id": "r423",
    "name": "1st Cross Road",
    "highway": "residential",
    "from": "n379",
    "to": "n380",
    "distance": 0.03,
    "status": "green",
    "coords": [
      [
        12.9392471,
        77.6187416
      ],
      [
        12.9393434,
        77.6184436
      ]
    ]
  },
  {
    "id": "r424",
    "name": "1st Cross Road",
    "highway": "residential",
    "from": "n380",
    "to": "n365",
    "distance": 0.04,
    "status": "yellow",
    "coords": [
      [
        12.9393434,
        77.6184436
      ],
      [
        12.9394558,
        77.6180511
      ]
    ]
  },
  {
    "id": "r425",
    "name": "1st Cross Road",
    "highway": "residential",
    "from": "n365",
    "to": "n381",
    "distance": 0.16,
    "status": "yellow",
    "coords": [
      [
        12.9394558,
        77.6180511
      ],
      [
        12.9398055,
        77.6166545
      ]
    ]
  },
  {
    "id": "r426",
    "name": "Basavanna Temple Road",
    "highway": "residential",
    "from": "n382",
    "to": "n383",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.941311,
        77.6187042
      ],
      [
        12.9414605,
        77.6188286
      ],
      [
        12.9415455,
        77.6190014
      ]
    ]
  },
  {
    "id": "r427",
    "name": "Basavanna Temple Road",
    "highway": "residential",
    "from": "n383",
    "to": "n384",
    "distance": 0.1,
    "status": "green",
    "coords": [
      [
        12.9415455,
        77.6190014
      ],
      [
        12.941654,
        77.6192106
      ],
      [
        12.9418547,
        77.6194252
      ],
      [
        12.9418911,
        77.619454
      ],
      [
        12.9419133,
        77.6194716
      ],
      [
        12.9420388,
        77.6195711
      ],
      [
        12.9421992,
        77.6196605
      ]
    ]
  },
  {
    "id": "r428",
    "name": "Basavanna Temple Road",
    "highway": "residential",
    "from": "n384",
    "to": "n385",
    "distance": 0.01,
    "status": "red",
    "coords": [
      [
        12.9421992,
        77.6196605
      ],
      [
        12.9422624,
        77.6196952
      ]
    ]
  },
  {
    "id": "r429",
    "name": "Basavanna Temple Road",
    "highway": "residential",
    "from": "n385",
    "to": "n386",
    "distance": 0.12,
    "status": "red",
    "coords": [
      [
        12.9422624,
        77.6196952
      ],
      [
        12.9424654,
        77.6198029
      ],
      [
        12.942708,
        77.6197685
      ],
      [
        12.9427892,
        77.619713
      ],
      [
        12.9428705,
        77.6196573
      ],
      [
        12.942984,
        77.6195797
      ],
      [
        12.9431513,
        77.6193994
      ]
    ]
  },
  {
    "id": "r430",
    "name": "1st F Cross Road",
    "highway": "residential",
    "from": "n387",
    "to": "n388",
    "distance": 0.13,
    "status": "yellow",
    "coords": [
      [
        12.941714,
        77.6173602
      ],
      [
        12.9417449,
        77.6169216
      ],
      [
        12.9417645,
        77.6165617
      ],
      [
        12.9417737,
        77.6161969
      ]
    ]
  },
  {
    "id": "r431",
    "name": "1st Main Road",
    "highway": "residential",
    "from": "n379",
    "to": "n389",
    "distance": 0.2,
    "status": "green",
    "coords": [
      [
        12.9392471,
        77.6187416
      ],
      [
        12.940746,
        77.6197772
      ]
    ]
  },
  {
    "id": "r432",
    "name": "1st Main Road",
    "highway": "residential",
    "from": "n380",
    "to": "n390",
    "distance": 0.08,
    "status": "green",
    "coords": [
      [
        12.9393434,
        77.6184436
      ],
      [
        12.9399202,
        77.6188159
      ]
    ]
  },
  {
    "id": "r433",
    "name": "1st Main Road",
    "highway": "residential",
    "from": "n390",
    "to": "n391",
    "distance": 0.13,
    "status": "green",
    "coords": [
      [
        12.9399202,
        77.6188159
      ],
      [
        12.9405547,
        77.6192422
      ],
      [
        12.9409076,
        77.6194783
      ]
    ]
  },
  {
    "id": "r434",
    "name": "1C Cross Road",
    "highway": "residential",
    "from": "n392",
    "to": "n393",
    "distance": 0.06,
    "status": "green",
    "coords": [
      [
        12.9407688,
        77.6164676
      ],
      [
        12.9407612,
        77.6166993
      ],
      [
        12.9407518,
        77.6169827
      ]
    ]
  },
  {
    "id": "r435",
    "name": "1C Cross Road",
    "highway": "residential",
    "from": "n393",
    "to": "n394",
    "distance": 0.06,
    "status": "green",
    "coords": [
      [
        12.9407518,
        77.6169827
      ],
      [
        12.940752,
        77.6175576
      ]
    ]
  },
  {
    "id": "r436",
    "name": "2nd Main Road",
    "highway": "residential",
    "from": "n393",
    "to": "n395",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9407518,
        77.6169827
      ],
      [
        12.940381,
        77.6168546
      ]
    ]
  },
  {
    "id": "r437",
    "name": "2nd Main Road",
    "highway": "residential",
    "from": "n395",
    "to": "n396",
    "distance": 0.03,
    "status": "green",
    "coords": [
      [
        12.940381,
        77.6168546
      ],
      [
        12.9400926,
        77.616755
      ]
    ]
  },
  {
    "id": "r438",
    "name": "2nd Main Road",
    "highway": "residential",
    "from": "n396",
    "to": "n381",
    "distance": 0.03,
    "status": "yellow",
    "coords": [
      [
        12.9400926,
        77.616755
      ],
      [
        12.9398055,
        77.6166545
      ]
    ]
  },
  {
    "id": "r439",
    "name": "2nd Main Road",
    "highway": "residential",
    "from": "n381",
    "to": "n397",
    "distance": 0.02,
    "status": "green",
    "coords": [
      [
        12.9398055,
        77.6166545
      ],
      [
        12.9396058,
        77.6165747
      ]
    ]
  },
  {
    "id": "r440",
    "name": "1st A Cross Road",
    "highway": "residential",
    "from": "n396",
    "to": "n366",
    "distance": 0.15,
    "status": "yellow",
    "coords": [
      [
        12.9400926,
        77.616755
      ],
      [
        12.9397413,
        77.6181071
      ]
    ]
  },
  {
    "id": "r441",
    "name": "1st B Cross Road",
    "highway": "residential",
    "from": "n395",
    "to": "n398",
    "distance": 0.07,
    "status": "yellow",
    "coords": [
      [
        12.940381,
        77.6168546
      ],
      [
        12.94025,
        77.6174394
      ]
    ]
  },
  {
    "id": "r442",
    "name": "1st B Cross Road",
    "highway": "residential",
    "from": "n398",
    "to": "n367",
    "distance": 0.08,
    "status": "green",
    "coords": [
      [
        12.94025,
        77.6174394
      ],
      [
        12.9400848,
        77.6181763
      ]
    ]
  },
  {
    "id": "r443",
    "name": "1st C Main Road",
    "highway": "residential",
    "from": "n399",
    "to": "n400",
    "distance": 0.03,
    "status": "green",
    "coords": [
      [
        12.9410866,
        77.6176177
      ],
      [
        12.94086,
        77.6175782
      ]
    ]
  },
  {
    "id": "r444",
    "name": "1st C Main Road",
    "highway": "residential",
    "from": "n400",
    "to": "n394",
    "distance": 0.01,
    "status": "green",
    "coords": [
      [
        12.94086,
        77.6175782
      ],
      [
        12.940752,
        77.6175576
      ]
    ]
  },
  {
    "id": "r445",
    "name": "1st C Main Road",
    "highway": "residential",
    "from": "n394",
    "to": "n398",
    "distance": 0.06,
    "status": "yellow",
    "coords": [
      [
        12.940752,
        77.6175576
      ],
      [
        12.9405707,
        77.6175214
      ],
      [
        12.94025,
        77.6174394
      ]
    ]
  },
  {
    "id": "r446",
    "name": "1 C Cross Road",
    "highway": "residential",
    "from": "n370",
    "to": "n400",
    "distance": 0.08,
    "status": "yellow",
    "coords": [
      [
        12.9406681,
        77.6183347
      ],
      [
        12.9407719,
        77.6179255
      ],
      [
        12.94086,
        77.6175782
      ]
    ]
  },
  {
    "id": "r447",
    "name": "2nd C Main Road",
    "highway": "residential",
    "from": "n401",
    "to": "n402",
    "distance": 0.01,
    "status": "green",
    "coords": [
      [
        12.9398402,
        77.6157895
      ],
      [
        12.9399412,
        77.615822
      ]
    ]
  },
  {
    "id": "r448",
    "name": "2nd C Main Road",
    "highway": "residential",
    "from": "n402",
    "to": "n403",
    "distance": 0.14,
    "status": "green",
    "coords": [
      [
        12.9399412,
        77.615822
      ],
      [
        12.9401669,
        77.6158972
      ],
      [
        12.9410641,
        77.616204
      ],
      [
        12.9411452,
        77.6162101
      ]
    ]
  },
  {
    "id": "r449",
    "name": "1st Cross Road",
    "highway": "residential",
    "from": "n404",
    "to": "n405",
    "distance": 0.12,
    "status": "red",
    "coords": [
      [
        12.9414686,
        77.6162133
      ],
      [
        12.9413792,
        77.6173382
      ]
    ]
  },
  {
    "id": "r450",
    "name": "1st E Main Road",
    "highway": "residential",
    "from": "n406",
    "to": "n392",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9411192,
        77.616554
      ],
      [
        12.9407688,
        77.6164676
      ]
    ]
  },
  {
    "id": "r451",
    "name": "1st E Main Road",
    "highway": "residential",
    "from": "n392",
    "to": "n407",
    "distance": 0.12,
    "status": "green",
    "coords": [
      [
        12.9407688,
        77.6164676
      ],
      [
        12.9397231,
        77.6161328
      ]
    ]
  },
  {
    "id": "r452",
    "name": "Main Road",
    "highway": "residential",
    "from": "n408",
    "to": "n409",
    "distance": 0.21,
    "status": "yellow",
    "coords": [
      [
        12.9453304,
        77.6192198
      ],
      [
        12.9452968,
        77.6192098
      ],
      [
        12.9448446,
        77.6190676
      ],
      [
        12.9444579,
        77.6189627
      ],
      [
        12.944197,
        77.6189014
      ],
      [
        12.9439505,
        77.6188323
      ],
      [
        12.9434608,
        77.6187386
      ]
    ]
  },
  {
    "id": "r453",
    "name": "2nd D Main Road",
    "highway": "residential",
    "from": "n410",
    "to": "n411",
    "distance": 0.17,
    "status": "green",
    "coords": [
      [
        12.9417977,
        77.6159354
      ],
      [
        12.9416492,
        77.6159772
      ],
      [
        12.9411994,
        77.6159901
      ],
      [
        12.9411084,
        77.6159845
      ],
      [
        12.9409746,
        77.6159355
      ],
      [
        12.940816,
        77.6158773
      ],
      [
        12.9407239,
        77.6158436
      ],
      [
        12.9405573,
        77.6157825
      ],
      [
        12.9404593,
        77.6157466
      ],
      [
        12.9402809,
        77.6156819
      ]
    ]
  },
  {
    "id": "r454",
    "name": "2nd E Main Road",
    "highway": "residential",
    "from": "n412",
    "to": "n410",
    "distance": 0.13,
    "status": "green",
    "coords": [
      [
        12.9408059,
        77.6153385
      ],
      [
        12.9412111,
        77.6156033
      ],
      [
        12.9414509,
        77.61576
      ],
      [
        12.9415303,
        77.615812
      ],
      [
        12.9417083,
        77.6158852
      ],
      [
        12.9417977,
        77.6159354
      ]
    ]
  },
  {
    "id": "r455",
    "name": "2nd F Main Road",
    "highway": "residential",
    "from": "n413",
    "to": "n414",
    "distance": 0.14,
    "status": "red",
    "coords": [
      [
        12.9418539,
        77.6156795
      ],
      [
        12.9409167,
        77.6151743
      ],
      [
        12.9407515,
        77.6150842
      ]
    ]
  },
  {
    "id": "r456",
    "name": "2nd G Main Road",
    "highway": "residential",
    "from": "n415",
    "to": "n416",
    "distance": 0.15,
    "status": "green",
    "coords": [
      [
        12.9419446,
        77.6155167
      ],
      [
        12.9408175,
        77.6148352
      ]
    ]
  },
  {
    "id": "r457",
    "name": "2nd H Main Road",
    "highway": "residential",
    "from": "n417",
    "to": "n418",
    "distance": 0.15,
    "status": "green",
    "coords": [
      [
        12.9421955,
        77.6150153
      ],
      [
        12.9427179,
        77.6151681
      ],
      [
        12.9426863,
        77.6154052
      ],
      [
        12.9424997,
        77.6153813
      ],
      [
        12.9420867,
        77.6152627
      ]
    ]
  },
  {
    "id": "r458",
    "name": "2nd H Main Road",
    "highway": "residential",
    "from": "n418",
    "to": "n419",
    "distance": 0.06,
    "status": "green",
    "coords": [
      [
        12.9420867,
        77.6152627
      ],
      [
        12.9416434,
        77.615035
      ]
    ]
  },
  {
    "id": "r459",
    "name": "2nd H Main Road",
    "highway": "residential",
    "from": "n419",
    "to": "n420",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9416434,
        77.615035
      ],
      [
        12.9415582,
        77.6149982
      ],
      [
        12.9413527,
        77.6148643
      ]
    ]
  },
  {
    "id": "r460",
    "name": "2nd H Main Road",
    "highway": "residential",
    "from": "n420",
    "to": "n416",
    "distance": 0.07,
    "status": "green",
    "coords": [
      [
        12.9413527,
        77.6148643
      ],
      [
        12.9409894,
        77.6146698
      ],
      [
        12.9408175,
        77.6148352
      ]
    ]
  },
  {
    "id": "r461",
    "name": "2nd H Main Road",
    "highway": "residential",
    "from": "n416",
    "to": "n402",
    "distance": 0.15,
    "status": "green",
    "coords": [
      [
        12.9408175,
        77.6148352
      ],
      [
        12.9404227,
        77.6150863
      ],
      [
        12.9403603,
        77.6151312
      ],
      [
        12.9401515,
        77.6154428
      ],
      [
        12.9399412,
        77.615822
      ]
    ]
  },
  {
    "id": "r462",
    "name": "2nd C Main Road",
    "highway": "residential",
    "from": "n421",
    "to": "n422",
    "distance": 0.19,
    "status": "red",
    "coords": [
      [
        12.9433034,
        77.6161341
      ],
      [
        12.9432365,
        77.6164762
      ],
      [
        12.943012,
        77.6174891
      ],
      [
        12.9429578,
        77.61788
      ]
    ]
  },
  {
    "id": "r463",
    "name": "Lakshmi Devi Temple Road",
    "highway": "residential",
    "from": "n423",
    "to": "n424",
    "distance": 0.15,
    "status": "green",
    "coords": [
      [
        12.9435088,
        77.6178141
      ],
      [
        12.9435737,
        77.6175476
      ],
      [
        12.9436066,
        77.6174644
      ],
      [
        12.943773,
        77.6172093
      ],
      [
        12.9438136,
        77.6171542
      ],
      [
        12.9439296,
        77.6169598
      ],
      [
        12.9439479,
        77.6169293
      ],
      [
        12.9440202,
        77.6167694
      ],
      [
        12.9441315,
        77.616562
      ]
    ]
  },
  {
    "id": "r464",
    "name": "2nd D Main Road",
    "highway": "residential",
    "from": "n425",
    "to": "n426",
    "distance": 0.16,
    "status": "green",
    "coords": [
      [
        12.9437213,
        77.6161192
      ],
      [
        12.943675,
        77.616351
      ],
      [
        12.9436245,
        77.6166038
      ],
      [
        12.943578,
        77.6168365
      ],
      [
        12.9435152,
        77.6171506
      ],
      [
        12.9434399,
        77.6175276
      ]
    ]
  },
  {
    "id": "r465",
    "name": "2nd Cross Road",
    "highway": "residential",
    "from": "n384",
    "to": "n427",
    "distance": 0.19,
    "status": "green",
    "coords": [
      [
        12.9421992,
        77.6196605
      ],
      [
        12.942076,
        77.6199416
      ],
      [
        12.9419388,
        77.6202472
      ],
      [
        12.9416784,
        77.6207433
      ],
      [
        12.9414383,
        77.6212008
      ],
      [
        12.9414198,
        77.6212361
      ]
    ]
  },
  {
    "id": "r466",
    "name": "1st Main Road",
    "highway": "tertiary",
    "from": "n15",
    "to": "n428",
    "distance": 0.35,
    "status": "yellow",
    "coords": [
      [
        12.9353174,
        77.6156865
      ],
      [
        12.9338791,
        77.6128249
      ]
    ]
  },
  {
    "id": "r467",
    "name": "28th Cross Rd",
    "highway": "residential",
    "from": "n0",
    "to": "n429",
    "distance": 0.06,
    "status": "green",
    "coords": [
      [
        12.9408286,
        77.6285803
      ],
      [
        12.9407836,
        77.6291645
      ]
    ]
  },
  {
    "id": "r468",
    "name": "28th Cross Rd",
    "highway": "residential",
    "from": "n429",
    "to": "n430",
    "distance": 0.03,
    "status": "red",
    "coords": [
      [
        12.9407836,
        77.6291645
      ],
      [
        12.9407615,
        77.6293966
      ]
    ]
  },
  {
    "id": "r469",
    "name": "28th Cross Rd",
    "highway": "residential",
    "from": "n430",
    "to": "n431",
    "distance": 0.14,
    "status": "green",
    "coords": [
      [
        12.9407615,
        77.6293966
      ],
      [
        12.940731,
        77.6295262
      ],
      [
        12.9407123,
        77.6298379
      ],
      [
        12.9407195,
        77.6299269
      ],
      [
        12.9407286,
        77.6299886
      ],
      [
        12.9407469,
        77.6300564
      ],
      [
        12.9407623,
        77.6300922
      ],
      [
        12.9407704,
        77.6301147
      ],
      [
        12.9407874,
        77.6302381
      ],
      [
        12.9408008,
        77.630441
      ],
      [
        12.940801,
        77.6304982
      ],
      [
        12.9408034,
        77.630633
      ]
    ]
  },
  {
    "id": "r470",
    "name": "28th Cross Rd",
    "highway": "residential",
    "from": "n431",
    "to": "n432",
    "distance": 0.05,
    "status": "red",
    "coords": [
      [
        12.9408034,
        77.630633
      ],
      [
        12.9408194,
        77.6308317
      ],
      [
        12.9408329,
        77.6310758
      ]
    ]
  },
  {
    "id": "r471",
    "name": "28th Cross Rd",
    "highway": "residential",
    "from": "n432",
    "to": "n433",
    "distance": 0.05,
    "status": "green",
    "coords": [
      [
        12.9408329,
        77.6310758
      ],
      [
        12.9408563,
        77.6313487
      ],
      [
        12.9408636,
        77.6315635
      ]
    ]
  },
  {
    "id": "r472",
    "name": "5th Cross Road",
    "highway": "residential",
    "from": "n160",
    "to": "n434",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9302381,
        77.6326047
      ],
      [
        12.9305785,
        77.632458
      ]
    ]
  },
  {
    "id": "r473",
    "name": "5th Cross Road",
    "highway": "residential",
    "from": "n434",
    "to": "n435",
    "distance": 0.1,
    "status": "yellow",
    "coords": [
      [
        12.9305785,
        77.632458
      ],
      [
        12.9311596,
        77.6322296
      ],
      [
        12.9312798,
        77.6321518
      ],
      [
        12.9313707,
        77.6320707
      ]
    ]
  },
  {
    "id": "r474",
    "name": "5th Cross Road",
    "highway": "residential",
    "from": "n435",
    "to": "n169",
    "distance": 0.07,
    "status": "yellow",
    "coords": [
      [
        12.9313707,
        77.6320707
      ],
      [
        12.9315638,
        77.6318095
      ],
      [
        12.931773,
        77.6315327
      ]
    ]
  },
  {
    "id": "r475",
    "name": "5th Cross Road",
    "highway": "residential",
    "from": "n169",
    "to": "n436",
    "distance": 0.04,
    "status": "yellow",
    "coords": [
      [
        12.931773,
        77.6315327
      ],
      [
        12.9320437,
        77.6312745
      ]
    ]
  },
  {
    "id": "r476",
    "name": "5th Cross Road",
    "highway": "residential",
    "from": "n436",
    "to": "n437",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9320437,
        77.6312745
      ],
      [
        12.9322951,
        77.6310346
      ]
    ]
  },
  {
    "id": "r477",
    "name": "5th Cross Road",
    "highway": "residential",
    "from": "n437",
    "to": "n438",
    "distance": 0.03,
    "status": "green",
    "coords": [
      [
        12.9322951,
        77.6310346
      ],
      [
        12.9324998,
        77.6308393
      ]
    ]
  },
  {
    "id": "r478",
    "name": "5th Cross Road",
    "highway": "residential",
    "from": "n438",
    "to": "n163",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9324998,
        77.6308393
      ],
      [
        12.932741,
        77.6306092
      ]
    ]
  },
  {
    "id": "r479",
    "name": "5th Cross Road",
    "highway": "residential",
    "from": "n163",
    "to": "n439",
    "distance": 0.12,
    "status": "yellow",
    "coords": [
      [
        12.932741,
        77.6306092
      ],
      [
        12.9334978,
        77.6297802
      ]
    ]
  },
  {
    "id": "r480",
    "name": "5th Cross Road",
    "highway": "residential",
    "from": "n439",
    "to": "n440",
    "distance": 0.03,
    "status": "yellow",
    "coords": [
      [
        12.9334978,
        77.6297802
      ],
      [
        12.9336239,
        77.6296283
      ],
      [
        12.933655,
        77.6295824
      ]
    ]
  },
  {
    "id": "r481",
    "name": "5th Cross Road",
    "highway": "residential",
    "from": "n440",
    "to": "n441",
    "distance": 0.03,
    "status": "green",
    "coords": [
      [
        12.933655,
        77.6295824
      ],
      [
        12.9338402,
        77.6293304
      ]
    ]
  },
  {
    "id": "r482",
    "name": "5th Cross Road",
    "highway": "residential",
    "from": "n441",
    "to": "n124",
    "distance": 0.03,
    "status": "green",
    "coords": [
      [
        12.9338402,
        77.6293304
      ],
      [
        12.9340363,
        77.6290958
      ]
    ]
  },
  {
    "id": "r483",
    "name": "8th Cross Road",
    "highway": "residential",
    "from": "n442",
    "to": "n443",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9341184,
        77.6341032
      ],
      [
        12.9343933,
        77.6343045
      ]
    ]
  },
  {
    "id": "r484",
    "name": "8th Cross Road",
    "highway": "residential",
    "from": "n443",
    "to": "n444",
    "distance": 0.03,
    "status": "green",
    "coords": [
      [
        12.9343933,
        77.6343045
      ],
      [
        12.9346027,
        77.6344863
      ]
    ]
  },
  {
    "id": "r485",
    "name": "8th Cross Road",
    "highway": "residential",
    "from": "n444",
    "to": "n445",
    "distance": 0.09,
    "status": "green",
    "coords": [
      [
        12.9346027,
        77.6344863
      ],
      [
        12.9346942,
        77.6346441
      ],
      [
        12.934743,
        77.6348009
      ],
      [
        12.9347887,
        77.634948
      ],
      [
        12.9348224,
        77.6350615
      ],
      [
        12.9348305,
        77.6350889
      ],
      [
        12.9348607,
        77.6352226
      ]
    ]
  },
  {
    "id": "r486",
    "name": "9th Main Road",
    "highway": "residential",
    "from": "n446",
    "to": "n447",
    "distance": 0.14,
    "status": "green",
    "coords": [
      [
        12.9356104,
        77.6349749
      ],
      [
        12.9355988,
        77.6349381
      ],
      [
        12.9354886,
        77.63459
      ],
      [
        12.935377,
        77.634189
      ],
      [
        12.9353778,
        77.6341711
      ],
      [
        12.9353829,
        77.6341585
      ],
      [
        12.9354371,
        77.6341412
      ],
      [
        12.9354497,
        77.6341374
      ],
      [
        12.9354526,
        77.6341304
      ],
      [
        12.9354498,
        77.6337722
      ]
    ]
  },
  {
    "id": "r487",
    "name": "9th Main Road",
    "highway": "residential",
    "from": "n447",
    "to": "n448",
    "distance": 0.06,
    "status": "green",
    "coords": [
      [
        12.9354498,
        77.6337722
      ],
      [
        12.9355367,
        77.6332137
      ]
    ]
  },
  {
    "id": "r488",
    "name": "7th Main Road",
    "highway": "residential",
    "from": "n442",
    "to": "n449",
    "distance": 0.07,
    "status": "green",
    "coords": [
      [
        12.9341184,
        77.6341032
      ],
      [
        12.9345347,
        77.6336626
      ]
    ]
  },
  {
    "id": "r489",
    "name": "7th Main Road",
    "highway": "residential",
    "from": "n449",
    "to": "n450",
    "distance": 0.03,
    "status": "green",
    "coords": [
      [
        12.9345347,
        77.6336626
      ],
      [
        12.9347532,
        77.6334314
      ]
    ]
  },
  {
    "id": "r490",
    "name": "7th Main Road",
    "highway": "residential",
    "from": "n450",
    "to": "n451",
    "distance": 0.05,
    "status": "green",
    "coords": [
      [
        12.9347532,
        77.6334314
      ],
      [
        12.9350054,
        77.6331645
      ],
      [
        12.9350638,
        77.6331429
      ],
      [
        12.9351222,
        77.6331463
      ]
    ]
  },
  {
    "id": "r491",
    "name": "3rd Cross Road",
    "highway": "residential",
    "from": "n434",
    "to": "n452",
    "distance": 0.1,
    "status": "yellow",
    "coords": [
      [
        12.9305785,
        77.632458
      ],
      [
        12.9304564,
        77.6320526
      ],
      [
        12.9304302,
        77.6319212
      ],
      [
        12.9304257,
        77.6318283
      ],
      [
        12.9304601,
        77.6315333
      ]
    ]
  },
  {
    "id": "r492",
    "name": "3rd Cross Road",
    "highway": "residential",
    "from": "n452",
    "to": "n171",
    "distance": 0.08,
    "status": "yellow",
    "coords": [
      [
        12.9304601,
        77.6315333
      ],
      [
        12.930556,
        77.631149
      ],
      [
        12.9306608,
        77.6308145
      ]
    ]
  },
  {
    "id": "r493",
    "name": "3rd Cross Road",
    "highway": "residential",
    "from": "n171",
    "to": "n453",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9306608,
        77.6308145
      ],
      [
        12.9308108,
        77.6304357
      ]
    ]
  },
  {
    "id": "r494",
    "name": "3rd Cross Road",
    "highway": "residential",
    "from": "n453",
    "to": "n454",
    "distance": 0.04,
    "status": "yellow",
    "coords": [
      [
        12.9308108,
        77.6304357
      ],
      [
        12.9309597,
        77.6301351
      ]
    ]
  },
  {
    "id": "r495",
    "name": "3rd Cross Road",
    "highway": "residential",
    "from": "n454",
    "to": "n455",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9309597,
        77.6301351
      ],
      [
        12.9311787,
        77.6299029
      ]
    ]
  },
  {
    "id": "r496",
    "name": "3rd Cross Road",
    "highway": "residential",
    "from": "n455",
    "to": "n167",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9311787,
        77.6299029
      ],
      [
        12.931484,
        77.6297181
      ]
    ]
  },
  {
    "id": "r497",
    "name": "3rd Cross Road",
    "highway": "residential",
    "from": "n167",
    "to": "n456",
    "distance": 0.15,
    "status": "green",
    "coords": [
      [
        12.931484,
        77.6297181
      ],
      [
        12.9320036,
        77.6294681
      ],
      [
        12.9325124,
        77.6291955
      ],
      [
        12.932653,
        77.6290686
      ]
    ]
  },
  {
    "id": "r498",
    "name": "3rd Cross Road",
    "highway": "residential",
    "from": "n456",
    "to": "n127",
    "distance": 0.12,
    "status": "green",
    "coords": [
      [
        12.932653,
        77.6290686
      ],
      [
        12.9334607,
        77.6283279
      ]
    ]
  },
  {
    "id": "r499",
    "name": "4th Cross Road",
    "highway": "residential",
    "from": "n126",
    "to": "n457",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.933645,
        77.6285657
      ],
      [
        12.9333571,
        77.6288317
      ]
    ]
  },
  {
    "id": "r500",
    "name": "4th Cross Road",
    "highway": "residential",
    "from": "n457",
    "to": "n458",
    "distance": 0.03,
    "status": "yellow",
    "coords": [
      [
        12.9333571,
        77.6288317
      ],
      [
        12.9331351,
        77.6290487
      ]
    ]
  },
  {
    "id": "r501",
    "name": "4th Cross Road",
    "highway": "residential",
    "from": "n458",
    "to": "n459",
    "distance": 0.04,
    "status": "yellow",
    "coords": [
      [
        12.9331351,
        77.6290487
      ],
      [
        12.9328796,
        77.6292599
      ]
    ]
  },
  {
    "id": "r502",
    "name": "4th Cross Road",
    "highway": "residential",
    "from": "n459",
    "to": "n166",
    "distance": 0.15,
    "status": "green",
    "coords": [
      [
        12.9328796,
        77.6292599
      ],
      [
        12.9316932,
        77.6299184
      ]
    ]
  },
  {
    "id": "r503",
    "name": "11th Main Road",
    "highway": "residential",
    "from": "n150",
    "to": "n456",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9323767,
        77.6287962
      ],
      [
        12.932653,
        77.6290686
      ]
    ]
  },
  {
    "id": "r504",
    "name": "11th Main Road",
    "highway": "residential",
    "from": "n456",
    "to": "n459",
    "distance": 0.03,
    "status": "red",
    "coords": [
      [
        12.932653,
        77.6290686
      ],
      [
        12.9328796,
        77.6292599
      ]
    ]
  },
  {
    "id": "r505",
    "name": "11th Main Road",
    "highway": "residential",
    "from": "n459",
    "to": "n460",
    "distance": 0.04,
    "status": "red",
    "coords": [
      [
        12.9328796,
        77.6292599
      ],
      [
        12.9331163,
        77.6294746
      ]
    ]
  },
  {
    "id": "r506",
    "name": "11th Main Road",
    "highway": "residential",
    "from": "n460",
    "to": "n461",
    "distance": 0.02,
    "status": "yellow",
    "coords": [
      [
        12.9331163,
        77.6294746
      ],
      [
        12.9332438,
        77.6295726
      ]
    ]
  },
  {
    "id": "r507",
    "name": "11th Main Road",
    "highway": "residential",
    "from": "n461",
    "to": "n439",
    "distance": 0.04,
    "status": "yellow",
    "coords": [
      [
        12.9332438,
        77.6295726
      ],
      [
        12.9334978,
        77.6297802
      ]
    ]
  },
  {
    "id": "r508",
    "name": "11th Main Road",
    "highway": "residential",
    "from": "n439",
    "to": "n462",
    "distance": 0.06,
    "status": "green",
    "coords": [
      [
        12.9334978,
        77.6297802
      ],
      [
        12.9338729,
        77.6301247
      ],
      [
        12.9339015,
        77.630151
      ]
    ]
  },
  {
    "id": "r509",
    "name": "4th A Cross Road",
    "highway": "residential",
    "from": "n170",
    "to": "n463",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9311601,
        77.6311519
      ],
      [
        12.9313378,
        77.630779
      ]
    ]
  },
  {
    "id": "r510",
    "name": "4th A Cross Road",
    "highway": "residential",
    "from": "n463",
    "to": "n464",
    "distance": 0.04,
    "status": "yellow",
    "coords": [
      [
        12.9313378,
        77.630779
      ],
      [
        12.9315085,
        77.6304978
      ]
    ]
  },
  {
    "id": "r511",
    "name": "4th A Cross Road",
    "highway": "residential",
    "from": "n464",
    "to": "n465",
    "distance": 0.03,
    "status": "red",
    "coords": [
      [
        12.9315085,
        77.6304978
      ],
      [
        12.931729,
        77.6302753
      ]
    ]
  },
  {
    "id": "r512",
    "name": "4th A Cross Road",
    "highway": "residential",
    "from": "n465",
    "to": "n165",
    "distance": 0.03,
    "status": "green",
    "coords": [
      [
        12.931729,
        77.6302753
      ],
      [
        12.9320044,
        77.6301236
      ]
    ]
  },
  {
    "id": "r513",
    "name": "4th A Cross Road",
    "highway": "residential",
    "from": "n165",
    "to": "n460",
    "distance": 0.14,
    "status": "green",
    "coords": [
      [
        12.9320044,
        77.6301236
      ],
      [
        12.9324317,
        77.6298807
      ],
      [
        12.9326276,
        77.6297867
      ],
      [
        12.9331163,
        77.6294746
      ]
    ]
  },
  {
    "id": "r514",
    "name": "4th B Cross Road",
    "highway": "residential",
    "from": "n461",
    "to": "n164",
    "distance": 0.13,
    "status": "yellow",
    "coords": [
      [
        12.9332438,
        77.6295726
      ],
      [
        12.9328242,
        77.6300271
      ],
      [
        12.9326572,
        77.6301725
      ],
      [
        12.9324299,
        77.6304043
      ]
    ]
  },
  {
    "id": "r515",
    "name": "9th A Main",
    "highway": "residential",
    "from": "n438",
    "to": "n465",
    "distance": 0.11,
    "status": "yellow",
    "coords": [
      [
        12.9324998,
        77.6308393
      ],
      [
        12.931729,
        77.6302753
      ]
    ]
  },
  {
    "id": "r516",
    "name": "9th A Main",
    "highway": "residential",
    "from": "n465",
    "to": "n455",
    "distance": 0.07,
    "status": "yellow",
    "coords": [
      [
        12.931729,
        77.6302753
      ],
      [
        12.9311787,
        77.6299029
      ]
    ]
  },
  {
    "id": "r517",
    "name": "9th Main Road",
    "highway": "residential",
    "from": "n454",
    "to": "n464",
    "distance": 0.07,
    "status": "green",
    "coords": [
      [
        12.9309597,
        77.6301351
      ],
      [
        12.9315085,
        77.6304978
      ]
    ]
  },
  {
    "id": "r518",
    "name": "9th Main Road",
    "highway": "residential",
    "from": "n464",
    "to": "n437",
    "distance": 0.11,
    "status": "green",
    "coords": [
      [
        12.9315085,
        77.6304978
      ],
      [
        12.9322951,
        77.6310346
      ]
    ]
  },
  {
    "id": "r519",
    "name": "8th B Main Road",
    "highway": "residential",
    "from": "n436",
    "to": "n463",
    "distance": 0.1,
    "status": "yellow",
    "coords": [
      [
        12.9320437,
        77.6312745
      ],
      [
        12.9313378,
        77.630779
      ]
    ]
  },
  {
    "id": "r520",
    "name": "8th B Main Road",
    "highway": "residential",
    "from": "n463",
    "to": "n453",
    "distance": 0.07,
    "status": "green",
    "coords": [
      [
        12.9313378,
        77.630779
      ],
      [
        12.9308108,
        77.6304357
      ]
    ]
  },
  {
    "id": "r521",
    "name": "7th A Main Road",
    "highway": "residential",
    "from": "n435",
    "to": "n452",
    "distance": 0.12,
    "status": "red",
    "coords": [
      [
        12.9313707,
        77.6320707
      ],
      [
        12.9304601,
        77.6315333
      ]
    ]
  },
  {
    "id": "r522",
    "name": "2nd Cross Road",
    "highway": "residential",
    "from": "n466",
    "to": "n467",
    "distance": 0.12,
    "status": "green",
    "coords": [
      [
        12.9447497,
        77.6105612
      ],
      [
        12.9447811,
        77.6103329
      ],
      [
        12.9441313,
        77.6101738
      ],
      [
        12.9439598,
        77.6101394
      ]
    ]
  },
  {
    "id": "r523",
    "name": "5th Cross Road",
    "highway": "residential",
    "from": "n468",
    "to": "n469",
    "distance": 0.07,
    "status": "green",
    "coords": [
      [
        12.9407605,
        77.6080823
      ],
      [
        12.9408374,
        77.6083335
      ],
      [
        12.9409573,
        77.6087261
      ]
    ]
  },
  {
    "id": "r524",
    "name": "Main Road",
    "highway": "residential",
    "from": "n470",
    "to": "n471",
    "distance": 0.22,
    "status": "yellow",
    "coords": [
      [
        12.9403422,
        77.6090569
      ],
      [
        12.9393015,
        77.6087097
      ],
      [
        12.9391857,
        77.6086698
      ],
      [
        12.9388529,
        77.6086299
      ],
      [
        12.9384314,
        77.6086925
      ]
    ]
  },
  {
    "id": "r525",
    "name": "Main Road",
    "highway": "residential",
    "from": "n471",
    "to": "n472",
    "distance": 0.21,
    "status": "yellow",
    "coords": [
      [
        12.9384314,
        77.6086925
      ],
      [
        12.9380376,
        77.6086527
      ],
      [
        12.9372214,
        77.6084535
      ],
      [
        12.937128,
        77.6084307
      ],
      [
        12.9370585,
        77.60841
      ],
      [
        12.9369107,
        77.608366
      ],
      [
        12.9366178,
        77.6082647
      ]
    ]
  },
  {
    "id": "r526",
    "name": "Main Road",
    "highway": "residential",
    "from": "n472",
    "to": "n473",
    "distance": 0.08,
    "status": "yellow",
    "coords": [
      [
        12.9366178,
        77.6082647
      ],
      [
        12.9365734,
        77.6082486
      ],
      [
        12.9363083,
        77.6081164
      ],
      [
        12.9360066,
        77.6079468
      ],
      [
        12.9359444,
        77.6079118
      ]
    ]
  },
  {
    "id": "r527",
    "name": "3rd Cross Road",
    "highway": "residential",
    "from": "n474",
    "to": "n475",
    "distance": 0.17,
    "status": "green",
    "coords": [
      [
        12.9410344,
        77.6069978
      ],
      [
        12.9410982,
        77.6072592
      ],
      [
        12.9411188,
        77.607327
      ],
      [
        12.9411914,
        77.6075667
      ],
      [
        12.941297,
        77.607923
      ],
      [
        12.9414837,
        77.6084528
      ]
    ]
  },
  {
    "id": "r528",
    "name": "2nd Cross Road",
    "highway": "residential",
    "from": "n476",
    "to": "n477",
    "distance": 0.17,
    "status": "red",
    "coords": [
      [
        12.9420078,
        77.6082097
      ],
      [
        12.9419812,
        77.6081346
      ],
      [
        12.941843,
        77.6077436
      ],
      [
        12.9417376,
        77.607383
      ],
      [
        12.9416338,
        77.6070749
      ],
      [
        12.941526,
        77.6067606
      ]
    ]
  },
  {
    "id": "r529",
    "name": "7th Cross Road",
    "highway": "tertiary",
    "from": "n478",
    "to": "n345",
    "distance": 0.05,
    "status": "green",
    "coords": [
      [
        12.9314922,
        77.6226225
      ],
      [
        12.9313022,
        77.6230678
      ]
    ]
  },
  {
    "id": "r530",
    "name": "7th Cross Road",
    "highway": "tertiary",
    "from": "n345",
    "to": "n109",
    "distance": 0.02,
    "status": "green",
    "coords": [
      [
        12.9313022,
        77.6230678
      ],
      [
        12.9312415,
        77.6231979
      ]
    ]
  },
  {
    "id": "r531",
    "name": "7th Cross Road",
    "highway": "tertiary",
    "from": "n109",
    "to": "n348",
    "distance": 0.12,
    "status": "red",
    "coords": [
      [
        12.9312415,
        77.6231979
      ],
      [
        12.9308518,
        77.6241866
      ]
    ]
  },
  {
    "id": "r532",
    "name": "7th Cross Road",
    "highway": "tertiary",
    "from": "n348",
    "to": "n239",
    "distance": 0.06,
    "status": "green",
    "coords": [
      [
        12.9308518,
        77.6241866
      ],
      [
        12.9306711,
        77.624661
      ]
    ]
  },
  {
    "id": "r533",
    "name": "7th Cross Road",
    "highway": "tertiary",
    "from": "n239",
    "to": "n57",
    "distance": 0.02,
    "status": "yellow",
    "coords": [
      [
        12.9306711,
        77.624661
      ],
      [
        12.9306064,
        77.6248423
      ]
    ]
  },
  {
    "id": "r534",
    "name": "7th Cross Road",
    "highway": "tertiary",
    "from": "n57",
    "to": "n106",
    "distance": 0.08,
    "status": "green",
    "coords": [
      [
        12.9306064,
        77.6248423
      ],
      [
        12.9305619,
        77.6255487
      ]
    ]
  },
  {
    "id": "r535",
    "name": "7th Cross Road",
    "highway": "tertiary",
    "from": "n106",
    "to": "n112",
    "distance": 0.06,
    "status": "green",
    "coords": [
      [
        12.9305619,
        77.6255487
      ],
      [
        12.9305132,
        77.6261452
      ]
    ]
  },
  {
    "id": "r536",
    "name": "7th Cross Road",
    "highway": "tertiary",
    "from": "n112",
    "to": "n479",
    "distance": 0.07,
    "status": "green",
    "coords": [
      [
        12.9305132,
        77.6261452
      ],
      [
        12.9304478,
        77.6268215
      ]
    ]
  },
  {
    "id": "r537",
    "name": "7th Cross Road",
    "highway": "tertiary",
    "from": "n479",
    "to": "n203",
    "distance": 0.07,
    "status": "green",
    "coords": [
      [
        12.9304478,
        77.6268215
      ],
      [
        12.9303724,
        77.6274511
      ]
    ]
  },
  {
    "id": "r538",
    "name": "7th Cross Road",
    "highway": "tertiary",
    "from": "n203",
    "to": "n42",
    "distance": 0.02,
    "status": "green",
    "coords": [
      [
        12.9303724,
        77.6274511
      ],
      [
        12.9303496,
        77.6276105
      ]
    ]
  },
  {
    "id": "r539",
    "name": "7th Cross Road",
    "highway": "tertiary",
    "from": "n42",
    "to": "n480",
    "distance": 0.18,
    "status": "green",
    "coords": [
      [
        12.9303496,
        77.6276105
      ],
      [
        12.93001,
        77.6292344
      ]
    ]
  },
  {
    "id": "r540",
    "name": "7th Main Road",
    "highway": "residential",
    "from": "n481",
    "to": "n482",
    "distance": 0.31,
    "status": "green",
    "coords": [
      [
        12.9479602,
        77.6179364
      ],
      [
        12.9474537,
        77.6177717
      ],
      [
        12.9472755,
        77.6177138
      ],
      [
        12.9465783,
        77.6174832
      ],
      [
        12.9459635,
        77.6172781
      ],
      [
        12.9458271,
        77.6172347
      ],
      [
        12.9457846,
        77.6172207
      ],
      [
        12.9456678,
        77.6171821
      ],
      [
        12.9454999,
        77.6171355
      ],
      [
        12.9453274,
        77.6170695
      ]
    ]
  },
  {
    "id": "r541",
    "name": "7th Main Road",
    "highway": "residential",
    "from": "n482",
    "to": "n483",
    "distance": 0.02,
    "status": "green",
    "coords": [
      [
        12.9453274,
        77.6170695
      ],
      [
        12.9451658,
        77.6170161
      ]
    ]
  },
  {
    "id": "r542",
    "name": "7th Main Road",
    "highway": "residential",
    "from": "n483",
    "to": "n484",
    "distance": 0.02,
    "status": "green",
    "coords": [
      [
        12.9451658,
        77.6170161
      ],
      [
        12.9449787,
        77.6169231
      ]
    ]
  },
  {
    "id": "r543",
    "name": "3rd Cross Road",
    "highway": "residential",
    "from": "n485",
    "to": "n299",
    "distance": 0.12,
    "status": "green",
    "coords": [
      [
        12.937427,
        77.622744
      ],
      [
        12.9379766,
        77.6217396
      ]
    ]
  },
  {
    "id": "r544",
    "name": "3rd Cross Road",
    "highway": "residential",
    "from": "n299",
    "to": "n287",
    "distance": 0.07,
    "status": "red",
    "coords": [
      [
        12.9379766,
        77.6217396
      ],
      [
        12.9381933,
        77.6212621
      ],
      [
        12.9382569,
        77.6211409
      ]
    ]
  },
  {
    "id": "r545",
    "name": "Sri Rama Temple Road",
    "highway": "residential",
    "from": "n486",
    "to": "n487",
    "distance": 0.2,
    "status": "yellow",
    "coords": [
      [
        12.9464267,
        77.6289604
      ],
      [
        12.9459706,
        77.6289371
      ],
      [
        12.9457154,
        77.6289307
      ],
      [
        12.9455642,
        77.628924
      ],
      [
        12.9453779,
        77.6289158
      ],
      [
        12.9453244,
        77.6289128
      ],
      [
        12.9451658,
        77.6289093
      ],
      [
        12.9450267,
        77.6289051
      ],
      [
        12.9448527,
        77.6288976
      ],
      [
        12.9448248,
        77.6288964
      ],
      [
        12.944643,
        77.6288919
      ],
      [
        12.9446348,
        77.6288917
      ],
      [
        12.9445928,
        77.6288905
      ]
    ]
  },
  {
    "id": "r546",
    "name": "Sri Rama Temple Road",
    "highway": "residential",
    "from": "n487",
    "to": "n488",
    "distance": 0.16,
    "status": "red",
    "coords": [
      [
        12.9445928,
        77.6288905
      ],
      [
        12.9444067,
        77.6288936
      ],
      [
        12.9444144,
        77.62863
      ],
      [
        12.9444145,
        77.628618
      ],
      [
        12.9444131,
        77.6286093
      ],
      [
        12.9444076,
        77.6286019
      ],
      [
        12.9443985,
        77.6285985
      ],
      [
        12.944338,
        77.6285885
      ],
      [
        12.9441243,
        77.628553
      ],
      [
        12.9437888,
        77.6285132
      ],
      [
        12.9437062,
        77.628504
      ],
      [
        12.9435863,
        77.6284906
      ],
      [
        12.9435376,
        77.6284814
      ],
      [
        12.9434075,
        77.6284627
      ]
    ]
  },
  {
    "id": "r547",
    "name": "Sri Rama Temple Road",
    "highway": "residential",
    "from": "n488",
    "to": "n489",
    "distance": 0.03,
    "status": "green",
    "coords": [
      [
        12.9434075,
        77.6284627
      ],
      [
        12.9431204,
        77.6284178
      ]
    ]
  },
  {
    "id": "r548",
    "name": "Sri Rama Temple Road",
    "highway": "residential",
    "from": "n489",
    "to": "n490",
    "distance": 0.01,
    "status": "green",
    "coords": [
      [
        12.9431204,
        77.6284178
      ],
      [
        12.9430497,
        77.6283953
      ]
    ]
  },
  {
    "id": "r549",
    "name": "Sri Rama Temple Road",
    "highway": "residential",
    "from": "n490",
    "to": "n491",
    "distance": 0.05,
    "status": "yellow",
    "coords": [
      [
        12.9430497,
        77.6283953
      ],
      [
        12.9428792,
        77.6283023
      ],
      [
        12.9426893,
        77.6281987
      ]
    ]
  },
  {
    "id": "r550",
    "name": "Sri Rama Temple Road",
    "highway": "residential",
    "from": "n491",
    "to": "n492",
    "distance": 0.03,
    "status": "green",
    "coords": [
      [
        12.9426893,
        77.6281987
      ],
      [
        12.9425933,
        77.628145
      ],
      [
        12.9424768,
        77.6280923
      ]
    ]
  },
  {
    "id": "r551",
    "name": "Sri Rama Temple Road",
    "highway": "residential",
    "from": "n492",
    "to": "n493",
    "distance": 0.01,
    "status": "green",
    "coords": [
      [
        12.9424768,
        77.6280923
      ],
      [
        12.9423737,
        77.6280555
      ]
    ]
  },
  {
    "id": "r552",
    "name": "Sri Rama Temple Road",
    "highway": "residential",
    "from": "n493",
    "to": "n494",
    "distance": 0.03,
    "status": "yellow",
    "coords": [
      [
        12.9423737,
        77.6280555
      ],
      [
        12.9421939,
        77.6280162
      ],
      [
        12.9420968,
        77.6279918
      ]
    ]
  },
  {
    "id": "r553",
    "name": "Sri Rama Temple Road",
    "highway": "residential",
    "from": "n494",
    "to": "n495",
    "distance": 0.03,
    "status": "green",
    "coords": [
      [
        12.9420968,
        77.6279918
      ],
      [
        12.941972,
        77.6279704
      ],
      [
        12.9418834,
        77.6279527
      ],
      [
        12.9418184,
        77.6279371
      ]
    ]
  },
  {
    "id": "r554",
    "name": "Sri Rama Temple Road",
    "highway": "residential",
    "from": "n495",
    "to": "n496",
    "distance": 0.02,
    "status": "yellow",
    "coords": [
      [
        12.9418184,
        77.6279371
      ],
      [
        12.9416816,
        77.627912
      ],
      [
        12.9416622,
        77.6279085
      ],
      [
        12.9415993,
        77.6278974
      ]
    ]
  },
  {
    "id": "r555",
    "name": "Sri Rama Temple Road",
    "highway": "residential",
    "from": "n496",
    "to": "n497",
    "distance": 0.05,
    "status": "green",
    "coords": [
      [
        12.9415993,
        77.6278974
      ],
      [
        12.9414077,
        77.6278624
      ],
      [
        12.941383,
        77.6278585
      ],
      [
        12.941126,
        77.6278105
      ]
    ]
  },
  {
    "id": "r556",
    "name": "2nd Main Road",
    "highway": "residential",
    "from": "n498",
    "to": "n499",
    "distance": 0.07,
    "status": "green",
    "coords": [
      [
        12.9439372,
        77.6197535
      ],
      [
        12.9442063,
        77.6198762
      ],
      [
        12.9444815,
        77.6200017
      ]
    ]
  },
  {
    "id": "r557",
    "name": "20F Cross Road",
    "highway": "residential",
    "from": "n492",
    "to": "n500",
    "distance": 0.1,
    "status": "green",
    "coords": [
      [
        12.9424768,
        77.6280923
      ],
      [
        12.942387,
        77.62839
      ],
      [
        12.9422562,
        77.6290093
      ]
    ]
  },
  {
    "id": "r558",
    "name": "7th C Main Road",
    "highway": "residential",
    "from": "n501",
    "to": "n502",
    "distance": 0.17,
    "status": "yellow",
    "coords": [
      [
        12.9246883,
        77.6316508
      ],
      [
        12.9252705,
        77.631677
      ],
      [
        12.9257288,
        77.6316976
      ],
      [
        12.9257509,
        77.6316986
      ],
      [
        12.9261921,
        77.6317161
      ]
    ]
  },
  {
    "id": "r559",
    "name": "3rd Cross Road",
    "highway": "residential",
    "from": "n503",
    "to": "n482",
    "distance": 0.06,
    "status": "red",
    "coords": [
      [
        12.9455293,
        77.6166063
      ],
      [
        12.9453847,
        77.6169239
      ],
      [
        12.9453274,
        77.6170695
      ]
    ]
  },
  {
    "id": "r560",
    "name": "3rd Cross Road",
    "highway": "residential",
    "from": "n482",
    "to": "n504",
    "distance": 0.1,
    "status": "yellow",
    "coords": [
      [
        12.9453274,
        77.6170695
      ],
      [
        12.945256,
        77.6172454
      ],
      [
        12.9450361,
        77.6177268
      ],
      [
        12.9449667,
        77.6179261
      ]
    ]
  },
  {
    "id": "r561",
    "name": "Hosur Road",
    "highway": "primary",
    "from": "n505",
    "to": "n506",
    "distance": 0.03,
    "status": "green",
    "coords": [
      [
        12.934403,
        77.6122579
      ],
      [
        12.9344425,
        77.6122378
      ],
      [
        12.9346201,
        77.6121427
      ]
    ]
  },
  {
    "id": "r562",
    "name": "7th Main Road",
    "highway": "residential",
    "from": "n507",
    "to": "n484",
    "distance": 0.49,
    "status": "green",
    "coords": [
      [
        12.9489937,
        77.6171906
      ],
      [
        12.9489039,
        77.6171448
      ],
      [
        12.9487873,
        77.6170928
      ],
      [
        12.9484885,
        77.6169842
      ],
      [
        12.9483548,
        77.6169401
      ],
      [
        12.9482075,
        77.6168916
      ],
      [
        12.9480708,
        77.6168465
      ],
      [
        12.9479637,
        77.6168112
      ],
      [
        12.9479301,
        77.6168001
      ],
      [
        12.9477804,
        77.6167507
      ],
      [
        12.9476441,
        77.6167073
      ],
      [
        12.9475006,
        77.6166615
      ],
      [
        12.9473511,
        77.6166139
      ],
      [
        12.9472457,
        77.6165803
      ],
      [
        12.9472029,
        77.6165667
      ],
      [
        12.9470734,
        77.6165254
      ],
      [
        12.9469192,
        77.6164763
      ],
      [
        12.9466503,
        77.6163906
      ],
      [
        12.9463609,
        77.6162984
      ],
      [
        12.9463234,
        77.6162865
      ],
      [
        12.9456556,
        77.6164168
      ],
      [
        12.9451919,
        77.6165823
      ],
      [
        12.9450505,
        77.6167805
      ],
      [
        12.9449787,
        77.6169231
      ]
    ]
  },
  {
    "id": "r563",
    "name": "7th Main Road",
    "highway": "residential",
    "from": "n484",
    "to": "n424",
    "distance": 0.1,
    "status": "green",
    "coords": [
      [
        12.9449787,
        77.6169231
      ],
      [
        12.9441315,
        77.616562
      ]
    ]
  },
  {
    "id": "r564",
    "name": "7th Main Road",
    "highway": "residential",
    "from": "n424",
    "to": "n425",
    "distance": 0.07,
    "status": "green",
    "coords": [
      [
        12.9441315,
        77.616562
      ],
      [
        12.9438638,
        77.616253
      ],
      [
        12.9437213,
        77.6161192
      ]
    ]
  },
  {
    "id": "r565",
    "name": "7th Main Road",
    "highway": "residential",
    "from": "n425",
    "to": "n410",
    "distance": 0.24,
    "status": "green",
    "coords": [
      [
        12.9437213,
        77.6161192
      ],
      [
        12.9437216,
        77.6158839
      ],
      [
        12.942339,
        77.6159201
      ],
      [
        12.9417977,
        77.6159354
      ]
    ]
  },
  {
    "id": "r566",
    "name": "1st Cross Road",
    "highway": "residential",
    "from": "n508",
    "to": "n509",
    "distance": 0.17,
    "status": "green",
    "coords": [
      [
        12.9353781,
        77.6314311
      ],
      [
        12.9355431,
        77.6311609
      ],
      [
        12.9355786,
        77.631112
      ],
      [
        12.9353543,
        77.6308385
      ],
      [
        12.9351438,
        77.6305636
      ],
      [
        12.9348684,
        77.6302023
      ]
    ]
  },
  {
    "id": "r567",
    "name": "1st Cross Road",
    "highway": "residential",
    "from": "n509",
    "to": "n510",
    "distance": 0.02,
    "status": "green",
    "coords": [
      [
        12.9348684,
        77.6302023
      ],
      [
        12.9347714,
        77.6300679
      ]
    ]
  },
  {
    "id": "r568",
    "name": "7th Main Road",
    "highway": "tertiary",
    "from": "n511",
    "to": "n512",
    "distance": 0.29,
    "status": "green",
    "coords": [
      [
        12.938119,
        77.6329292
      ],
      [
        12.9377472,
        77.6330994
      ],
      [
        12.9376662,
        77.6331456
      ],
      [
        12.9375995,
        77.6331872
      ],
      [
        12.9375202,
        77.6332347
      ],
      [
        12.9374218,
        77.6333038
      ],
      [
        12.9372545,
        77.6334434
      ],
      [
        12.9371518,
        77.6335297
      ],
      [
        12.9370063,
        77.6336885
      ],
      [
        12.936606,
        77.6341418
      ],
      [
        12.9364726,
        77.6342966
      ],
      [
        12.9362607,
        77.6345214
      ],
      [
        12.9362284,
        77.634537
      ],
      [
        12.9361801,
        77.6345471
      ],
      [
        12.9361396,
        77.6345451
      ],
      [
        12.9361219,
        77.6345364
      ],
      [
        12.9360938,
        77.634513
      ]
    ]
  },
  {
    "id": "r569",
    "name": "Mahayogi Vemana Road",
    "highway": "primary",
    "from": "n513",
    "to": "n514",
    "distance": 0.23,
    "status": "red",
    "coords": [
      [
        12.9272267,
        77.620899
      ],
      [
        12.925982,
        77.6204316
      ],
      [
        12.9258085,
        77.6203664
      ],
      [
        12.9257492,
        77.6203441
      ],
      [
        12.9255148,
        77.6201569
      ],
      [
        12.9254909,
        77.6201379
      ],
      [
        12.9254422,
        77.6200898
      ],
      [
        12.9253882,
        77.6200089
      ]
    ]
  },
  {
    "id": "r570",
    "name": "Mahayogi Vemana Road",
    "highway": "primary",
    "from": "n514",
    "to": "n515",
    "distance": 0.24,
    "status": "green",
    "coords": [
      [
        12.9253882,
        77.6200089
      ],
      [
        12.9252826,
        77.619846
      ],
      [
        12.9247611,
        77.6185737
      ],
      [
        12.9246425,
        77.6183237
      ],
      [
        12.9246054,
        77.618251
      ],
      [
        12.9244848,
        77.6180426
      ]
    ]
  },
  {
    "id": "r571",
    "name": "Mahayogi Vemana Road",
    "highway": "primary",
    "from": "n516",
    "to": "n8",
    "distance": 0.23,
    "status": "green",
    "coords": [
      [
        12.9315406,
        77.622498
      ],
      [
        12.9317164,
        77.6225692
      ],
      [
        12.9319288,
        77.6226551
      ],
      [
        12.9334559,
        77.6232731
      ]
    ]
  },
  {
    "id": "r572",
    "name": "Mahayogi Vemana Road",
    "highway": "primary",
    "from": "n8",
    "to": "n28",
    "distance": 0.14,
    "status": "green",
    "coords": [
      [
        12.9334559,
        77.6232731
      ],
      [
        12.9345359,
        77.6237779
      ],
      [
        12.9345854,
        77.623801
      ]
    ]
  },
  {
    "id": "r573",
    "name": "Mahayogi Vemana Road",
    "highway": "primary",
    "from": "n28",
    "to": "n262",
    "distance": 0.05,
    "status": "green",
    "coords": [
      [
        12.9345854,
        77.623801
      ],
      [
        12.9349653,
        77.6240716
      ]
    ]
  },
  {
    "id": "r574",
    "name": "Mahayogi Vemana Road",
    "highway": "primary",
    "from": "n262",
    "to": "n29",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9349653,
        77.6240716
      ],
      [
        12.9352411,
        77.6243708
      ]
    ]
  },
  {
    "id": "r575",
    "name": "Green Leaf Layout",
    "highway": "residential",
    "from": "n517",
    "to": "n518",
    "distance": 0.07,
    "status": "green",
    "coords": [
      [
        12.9353344,
        77.6296896
      ],
      [
        12.9351407,
        77.6290883
      ],
      [
        12.935128,
        77.6290489
      ]
    ]
  },
  {
    "id": "r576",
    "name": "1st Main Road",
    "highway": "residential",
    "from": "n519",
    "to": "n520",
    "distance": 0.31,
    "status": "green",
    "coords": [
      [
        12.9252241,
        77.6367015
      ],
      [
        12.9251339,
        77.6366975
      ],
      [
        12.924871,
        77.6366846
      ],
      [
        12.9245171,
        77.6366711
      ],
      [
        12.9244853,
        77.6366706
      ],
      [
        12.9240962,
        77.6366629
      ],
      [
        12.9238864,
        77.6366585
      ],
      [
        12.9236484,
        77.6366547
      ],
      [
        12.9235071,
        77.6366365
      ],
      [
        12.922876,
        77.6365486
      ],
      [
        12.9225809,
        77.636511
      ],
      [
        12.9224409,
        77.6364925
      ]
    ]
  },
  {
    "id": "r577",
    "name": "5th Cross Road",
    "highway": "residential",
    "from": "n521",
    "to": "n522",
    "distance": 0.34,
    "status": "green",
    "coords": [
      [
        12.9282012,
        77.6113254
      ],
      [
        12.9278014,
        77.611311
      ],
      [
        12.9275433,
        77.6112964
      ],
      [
        12.9269525,
        77.6112737
      ],
      [
        12.9267175,
        77.6112634
      ],
      [
        12.9262096,
        77.6112433
      ],
      [
        12.9260479,
        77.6112369
      ],
      [
        12.9260788,
        77.611096
      ],
      [
        12.925343,
        77.6110359
      ]
    ]
  },
  {
    "id": "r578",
    "name": "1st Cross Road",
    "highway": "residential",
    "from": "n523",
    "to": "n524",
    "distance": 0.22,
    "status": "green",
    "coords": [
      [
        12.9336431,
        77.6093799
      ],
      [
        12.9337616,
        77.6087718
      ],
      [
        12.9337991,
        77.6085152
      ],
      [
        12.9338479,
        77.6079364
      ],
      [
        12.9338732,
        77.6075934
      ],
      [
        12.9338956,
        77.607329
      ]
    ]
  },
  {
    "id": "r579",
    "name": "2nd Cross Road",
    "highway": "residential",
    "from": "n525",
    "to": "n229",
    "distance": 0.21,
    "status": "green",
    "coords": [
      [
        12.9328018,
        77.6094246
      ],
      [
        12.932672,
        77.6094087
      ],
      [
        12.9318682,
        77.6092795
      ],
      [
        12.9314864,
        77.6092152
      ],
      [
        12.9309667,
        77.6091715
      ]
    ]
  },
  {
    "id": "r580",
    "name": "8th Cross Road",
    "highway": "residential",
    "from": "n526",
    "to": "n527",
    "distance": 0.18,
    "status": "green",
    "coords": [
      [
        12.9316474,
        77.608984
      ],
      [
        12.9316824,
        77.6086765
      ],
      [
        12.9316994,
        77.6085464
      ],
      [
        12.9317188,
        77.6083046
      ],
      [
        12.9317389,
        77.6079522
      ],
      [
        12.9317458,
        77.607359
      ]
    ]
  },
  {
    "id": "r581",
    "name": "7th Cross Road",
    "highway": "residential",
    "from": "n528",
    "to": "n529",
    "distance": 0.18,
    "status": "green",
    "coords": [
      [
        12.9320193,
        77.606636
      ],
      [
        12.9320098,
        77.6073479
      ],
      [
        12.931997,
        77.6079735
      ],
      [
        12.9319882,
        77.6080847
      ],
      [
        12.9319826,
        77.6083211
      ]
    ]
  },
  {
    "id": "r582",
    "name": "2nd Cross Road",
    "highway": "residential",
    "from": "n530",
    "to": "n531",
    "distance": 0.22,
    "status": "yellow",
    "coords": [
      [
        12.9333603,
        77.60936
      ],
      [
        12.9334428,
        77.6086977
      ],
      [
        12.9334667,
        77.6085017
      ],
      [
        12.9335055,
        77.6080555
      ],
      [
        12.9335192,
        77.6078649
      ],
      [
        12.9335401,
        77.6076728
      ],
      [
        12.9335392,
        77.6073167
      ]
    ]
  },
  {
    "id": "r583",
    "name": "4th Cross Road",
    "highway": "residential",
    "from": "n532",
    "to": "n525",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9327431,
        77.6098256
      ],
      [
        12.9328018,
        77.6094246
      ]
    ]
  },
  {
    "id": "r584",
    "name": "4th Cross Road",
    "highway": "residential",
    "from": "n525",
    "to": "n533",
    "distance": 0.23,
    "status": "green",
    "coords": [
      [
        12.9328018,
        77.6094246
      ],
      [
        12.932799,
        77.6093329
      ],
      [
        12.9327312,
        77.6092556
      ],
      [
        12.9328504,
        77.6084306
      ],
      [
        12.9328813,
        77.6078706
      ],
      [
        12.9328934,
        77.6073276
      ]
    ]
  },
  {
    "id": "r585",
    "name": "5th Cross Road",
    "highway": "residential",
    "from": "n534",
    "to": "n535",
    "distance": 0.27,
    "status": "green",
    "coords": [
      [
        12.9324982,
        77.6066601
      ],
      [
        12.93252,
        77.6073353
      ],
      [
        12.9324948,
        77.6084025
      ],
      [
        12.9323716,
        77.6091426
      ]
    ]
  },
  {
    "id": "r586",
    "name": "6th Cross Road",
    "highway": "residential",
    "from": "n536",
    "to": "n537",
    "distance": 0.27,
    "status": "yellow",
    "coords": [
      [
        12.9322213,
        77.6066648
      ],
      [
        12.9322393,
        77.6073444
      ],
      [
        12.9322304,
        77.6078188
      ],
      [
        12.9322016,
        77.60836
      ],
      [
        12.9321543,
        77.6086426
      ],
      [
        12.9321364,
        77.6087501
      ],
      [
        12.9321042,
        77.6089648
      ],
      [
        12.9320788,
        77.6091047
      ]
    ]
  },
  {
    "id": "r587",
    "name": "4th Main Road",
    "highway": "residential",
    "from": "n230",
    "to": "n538",
    "distance": 0.09,
    "status": "red",
    "coords": [
      [
        12.9310569,
        77.6082195
      ],
      [
        12.9307476,
        77.608228
      ],
      [
        12.9307118,
        77.6082272
      ],
      [
        12.9305557,
        77.6082292
      ],
      [
        12.9302265,
        77.6082203
      ]
    ]
  },
  {
    "id": "r588",
    "name": "4th Main Road",
    "highway": "residential",
    "from": "n538",
    "to": "n539",
    "distance": 0.03,
    "status": "green",
    "coords": [
      [
        12.9302265,
        77.6082203
      ],
      [
        12.9299589,
        77.6082051
      ]
    ]
  },
  {
    "id": "r589",
    "name": "3rd Cross Road",
    "highway": "residential",
    "from": "n540",
    "to": "n541",
    "distance": 0.17,
    "status": "green",
    "coords": [
      [
        12.9288295,
        77.6080765
      ],
      [
        12.9288359,
        77.6078028
      ],
      [
        12.9288771,
        77.6074926
      ],
      [
        12.9288823,
        77.6073474
      ],
      [
        12.9288879,
        77.6072716
      ],
      [
        12.9289141,
        77.6070785
      ],
      [
        12.9289873,
        77.6067781
      ],
      [
        12.9290434,
        77.6065625
      ]
    ]
  },
  {
    "id": "r590",
    "name": "2nd Cross Road",
    "highway": "residential",
    "from": "n542",
    "to": "n429",
    "distance": 0.07,
    "status": "yellow",
    "coords": [
      [
        12.9401749,
        77.6291581
      ],
      [
        12.9407836,
        77.6291645
      ]
    ]
  },
  {
    "id": "r591",
    "name": "Sarjapura Road",
    "highway": "tertiary",
    "from": "n543",
    "to": "n544",
    "distance": 0.01,
    "status": "green",
    "coords": [
      [
        12.9249906,
        77.6335475
      ],
      [
        12.925004,
        77.6336364
      ]
    ]
  },
  {
    "id": "r592",
    "name": "Sarjapura Road",
    "highway": "tertiary",
    "from": "n544",
    "to": "n186",
    "distance": 0.32,
    "status": "yellow",
    "coords": [
      [
        12.925004,
        77.6336364
      ],
      [
        12.9250775,
        77.6341132
      ],
      [
        12.9250851,
        77.6341626
      ],
      [
        12.9250931,
        77.6342146
      ],
      [
        12.925447,
        77.636509
      ],
      [
        12.925456,
        77.6365642
      ]
    ]
  },
  {
    "id": "r593",
    "name": "Sarjapura Road",
    "highway": "tertiary",
    "from": "n186",
    "to": "n178",
    "distance": 0.05,
    "status": "green",
    "coords": [
      [
        12.925456,
        77.6365642
      ],
      [
        12.9254656,
        77.6366946
      ],
      [
        12.9254567,
        77.6368457
      ],
      [
        12.9254266,
        77.6369855
      ]
    ]
  },
  {
    "id": "r594",
    "name": "Sarjapura Road",
    "highway": "tertiary",
    "from": "n178",
    "to": "n53",
    "distance": 0.05,
    "status": "yellow",
    "coords": [
      [
        12.9254266,
        77.6369855
      ],
      [
        12.9252567,
        77.6374045
      ]
    ]
  },
  {
    "id": "r595",
    "name": "1st C Main Road",
    "highway": "residential",
    "from": "n545",
    "to": "n546",
    "distance": 0.07,
    "status": "red",
    "coords": [
      [
        12.9266897,
        77.6389683
      ],
      [
        12.9268017,
        77.6387762
      ],
      [
        12.9269243,
        77.6385971
      ],
      [
        12.9270606,
        77.6383944
      ]
    ]
  },
  {
    "id": "r596",
    "name": "Madiwala Underpass",
    "highway": "primary",
    "from": "n547",
    "to": "n548",
    "distance": 0.17,
    "status": "green",
    "coords": [
      [
        12.9260375,
        77.6172816
      ],
      [
        12.9258298,
        77.6173844
      ],
      [
        12.9247467,
        77.6180631
      ]
    ]
  },
  {
    "id": "r597",
    "name": "Mahayogi Vemana Road",
    "highway": "primary",
    "from": "n549",
    "to": "n550",
    "distance": 0.23,
    "status": "green",
    "coords": [
      [
        12.9245641,
        77.6179924
      ],
      [
        12.9246842,
        77.6182077
      ],
      [
        12.9249368,
        77.6187994
      ],
      [
        12.9253587,
        77.6196979
      ],
      [
        12.9253911,
        77.6197775
      ],
      [
        12.9254987,
        77.6199272
      ]
    ]
  },
  {
    "id": "r598",
    "name": "Mahayogi Vemana Road",
    "highway": "primary",
    "from": "n550",
    "to": "n551",
    "distance": 0.02,
    "status": "red",
    "coords": [
      [
        12.9254987,
        77.6199272
      ],
      [
        12.9255403,
        77.6199902
      ],
      [
        12.9255663,
        77.6200295
      ],
      [
        12.9256006,
        77.6200541
      ]
    ]
  },
  {
    "id": "r599",
    "name": "Mahayogi Vemana Road",
    "highway": "primary",
    "from": "n551",
    "to": "n552",
    "distance": 0.23,
    "status": "red",
    "coords": [
      [
        12.9256006,
        77.6200541
      ],
      [
        12.9258029,
        77.6201989
      ],
      [
        12.9258503,
        77.6202175
      ],
      [
        12.927227,
        77.6207581
      ],
      [
        12.9274056,
        77.6208361
      ],
      [
        12.9274554,
        77.6208578
      ],
      [
        12.9275058,
        77.6208789
      ]
    ]
  },
  {
    "id": "r600",
    "name": "Dr. M H Marigowda Road",
    "highway": "primary",
    "from": "n553",
    "to": "n232",
    "distance": 0.06,
    "status": "green",
    "coords": [
      [
        12.9315208,
        77.61384
      ],
      [
        12.93167,
        77.6136342
      ],
      [
        12.9318314,
        77.6134432
      ]
    ]
  },
  {
    "id": "r601",
    "name": "17 A Main Road",
    "highway": "residential",
    "from": "n554",
    "to": "n551",
    "distance": 0.32,
    "status": "green",
    "coords": [
      [
        12.9262516,
        77.6171742
      ],
      [
        12.9261223,
        77.6177471
      ],
      [
        12.9260153,
        77.6181525
      ],
      [
        12.9257755,
        77.6191862
      ],
      [
        12.9256006,
        77.6200541
      ]
    ]
  },
  {
    "id": "r602",
    "name": "80 Feet Road",
    "highway": "secondary",
    "from": "n555",
    "to": "n556",
    "distance": 0.26,
    "status": "green",
    "coords": [
      [
        12.9371937,
        77.6270563
      ],
      [
        12.9367994,
        77.6274193
      ],
      [
        12.9364143,
        77.6277774
      ],
      [
        12.936052,
        77.6281101
      ],
      [
        12.9359222,
        77.6282414
      ],
      [
        12.9354848,
        77.6287119
      ]
    ]
  },
  {
    "id": "r603",
    "name": "80 Feet Road",
    "highway": "secondary",
    "from": "n556",
    "to": "n141",
    "distance": 0.01,
    "status": "yellow",
    "coords": [
      [
        12.9354848,
        77.6287119
      ],
      [
        12.9353985,
        77.6287871
      ]
    ]
  },
  {
    "id": "r604",
    "name": "80 Feet Road",
    "highway": "secondary",
    "from": "n141",
    "to": "n518",
    "distance": 0.04,
    "status": "red",
    "coords": [
      [
        12.9353985,
        77.6287871
      ],
      [
        12.935128,
        77.6290489
      ]
    ]
  },
  {
    "id": "r605",
    "name": "80 Feet Road",
    "highway": "secondary",
    "from": "n518",
    "to": "n557",
    "distance": 0.05,
    "status": "green",
    "coords": [
      [
        12.935128,
        77.6290489
      ],
      [
        12.9348493,
        77.6293229
      ],
      [
        12.9348055,
        77.6293659
      ]
    ]
  },
  {
    "id": "r606",
    "name": "80 Feet Road",
    "highway": "secondary",
    "from": "n557",
    "to": "n558",
    "distance": 0.05,
    "status": "green",
    "coords": [
      [
        12.9348055,
        77.6293659
      ],
      [
        12.9345563,
        77.629595
      ],
      [
        12.9345211,
        77.6296308
      ],
      [
        12.9344996,
        77.6296526
      ]
    ]
  },
  {
    "id": "r607",
    "name": "80 Feet Road",
    "highway": "secondary",
    "from": "n558",
    "to": "n559",
    "distance": 0.01,
    "status": "green",
    "coords": [
      [
        12.9344996,
        77.6296526
      ],
      [
        12.9344595,
        77.6296908
      ]
    ]
  },
  {
    "id": "r608",
    "name": "80 Feet Road",
    "highway": "secondary",
    "from": "n559",
    "to": "n560",
    "distance": 0.2,
    "status": "green",
    "coords": [
      [
        12.9344595,
        77.6296908
      ],
      [
        12.934361,
        77.6297972
      ],
      [
        12.934353,
        77.6298064
      ],
      [
        12.9339595,
        77.6301918
      ],
      [
        12.9337136,
        77.6304346
      ],
      [
        12.9331391,
        77.6310058
      ]
    ]
  },
  {
    "id": "r609",
    "name": "80 Feet Road",
    "highway": "secondary",
    "from": "n560",
    "to": "n561",
    "distance": 0.43,
    "status": "green",
    "coords": [
      [
        12.9331391,
        77.6310058
      ],
      [
        12.9323074,
        77.6318568
      ],
      [
        12.9317916,
        77.632399
      ],
      [
        12.9316769,
        77.6325129
      ],
      [
        12.9315064,
        77.6326494
      ],
      [
        12.9314042,
        77.6327179
      ],
      [
        12.9308421,
        77.6329681
      ],
      [
        12.9304172,
        77.6331167
      ],
      [
        12.9300545,
        77.6331602
      ]
    ]
  },
  {
    "id": "r610",
    "name": "Pipeline Road",
    "highway": "residential",
    "from": "n562",
    "to": "n563",
    "distance": 0.02,
    "status": "green",
    "coords": [
      [
        12.9390131,
        77.6307889
      ],
      [
        12.9391013,
        77.6306221
      ]
    ]
  },
  {
    "id": "r611",
    "name": "Pipeline Road",
    "highway": "residential",
    "from": "n563",
    "to": "n564",
    "distance": 0.08,
    "status": "yellow",
    "coords": [
      [
        12.9391013,
        77.6306221
      ],
      [
        12.9393963,
        77.6302899
      ],
      [
        12.9394765,
        77.6302737
      ],
      [
        12.9394913,
        77.6301587
      ],
      [
        12.9395006,
        77.6300862
      ]
    ]
  },
  {
    "id": "r612",
    "name": "Pipeline Road",
    "highway": "residential",
    "from": "n564",
    "to": "n565",
    "distance": 0.1,
    "status": "green",
    "coords": [
      [
        12.9395006,
        77.6300862
      ],
      [
        12.939793,
        77.6298673
      ],
      [
        12.939856,
        77.6297974
      ],
      [
        12.9399434,
        77.6297006
      ],
      [
        12.9400854,
        77.6295971
      ],
      [
        12.9402107,
        77.6295353
      ]
    ]
  },
  {
    "id": "r613",
    "name": "Pipeline Road",
    "highway": "residential",
    "from": "n565",
    "to": "n430",
    "distance": 0.06,
    "status": "green",
    "coords": [
      [
        12.9402107,
        77.6295353
      ],
      [
        12.9403168,
        77.629501
      ],
      [
        12.9407615,
        77.6293966
      ]
    ]
  },
  {
    "id": "r614",
    "name": "Pipeline Road",
    "highway": "residential",
    "from": "n430",
    "to": "n566",
    "distance": 0.09,
    "status": "green",
    "coords": [
      [
        12.9407615,
        77.6293966
      ],
      [
        12.9409829,
        77.6293045
      ],
      [
        12.9414085,
        77.6292765
      ],
      [
        12.9415442,
        77.6292844
      ],
      [
        12.9415794,
        77.6292522
      ]
    ]
  },
  {
    "id": "r615",
    "name": "Pipeline Road",
    "highway": "residential",
    "from": "n566",
    "to": "n567",
    "distance": 0.02,
    "status": "green",
    "coords": [
      [
        12.9415794,
        77.6292522
      ],
      [
        12.9416287,
        77.629229
      ],
      [
        12.9417477,
        77.6291931
      ]
    ]
  },
  {
    "id": "r616",
    "name": "3rd Cross Road",
    "highway": "residential",
    "from": "n530",
    "to": "n568",
    "distance": 0.31,
    "status": "green",
    "coords": [
      [
        12.9333603,
        77.60936
      ],
      [
        12.9330975,
        77.6093202
      ],
      [
        12.933198,
        77.6084811
      ],
      [
        12.9332404,
        77.6079696
      ],
      [
        12.9332797,
        77.6073134
      ],
      [
        12.9332663,
        77.6067261
      ]
    ]
  },
  {
    "id": "r617",
    "name": "2nd Cross Road",
    "highway": "residential",
    "from": "n569",
    "to": "n570",
    "distance": 0.19,
    "status": "green",
    "coords": [
      [
        12.9268364,
        77.6138391
      ],
      [
        12.9268056,
        77.6139907
      ],
      [
        12.9266489,
        77.6147985
      ],
      [
        12.9266176,
        77.6151091
      ],
      [
        12.9265075,
        77.6155953
      ]
    ]
  },
  {
    "id": "r618",
    "name": "1st Main Road",
    "highway": "residential",
    "from": "n571",
    "to": "n572",
    "distance": 0.16,
    "status": "yellow",
    "coords": [
      [
        12.92526,
        77.6152364
      ],
      [
        12.9251807,
        77.6155202
      ],
      [
        12.9251124,
        77.6157647
      ],
      [
        12.9250071,
        77.6161414
      ],
      [
        12.9249595,
        77.6163405
      ],
      [
        12.9250226,
        77.6164423
      ],
      [
        12.9251337,
        77.6166295
      ]
    ]
  },
  {
    "id": "r619",
    "name": "1st Main Road",
    "highway": "residential",
    "from": "n572",
    "to": "n573",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9251337,
        77.6166295
      ],
      [
        12.9252629,
        77.6168473
      ],
      [
        12.9253057,
        77.6169194
      ],
      [
        12.9253218,
        77.6169465
      ]
    ]
  },
  {
    "id": "r620",
    "name": "7th Cross Road",
    "highway": "residential",
    "from": "n574",
    "to": "n575",
    "distance": 0.28,
    "status": "green",
    "coords": [
      [
        12.9256807,
        77.6126456
      ],
      [
        12.9256536,
        77.6129807
      ],
      [
        12.9256203,
        77.6132321
      ],
      [
        12.9255647,
        77.6135358
      ],
      [
        12.9254549,
        77.6140991
      ],
      [
        12.9253746,
        77.6144062
      ],
      [
        12.925285,
        77.6147911
      ],
      [
        12.9251673,
        77.6151961
      ]
    ]
  },
  {
    "id": "r621",
    "name": "3rd Cross Road",
    "highway": "residential",
    "from": "n576",
    "to": "n577",
    "distance": 0.37,
    "status": "red",
    "coords": [
      [
        12.924915,
        77.6103096
      ],
      [
        12.9254395,
        77.6103789
      ],
      [
        12.9265173,
        77.6105264
      ],
      [
        12.9269552,
        77.610591
      ],
      [
        12.9269776,
        77.6105917
      ],
      [
        12.9272446,
        77.6106125
      ],
      [
        12.9275191,
        77.6106233
      ],
      [
        12.9278188,
        77.6106396
      ],
      [
        12.9282139,
        77.6106356
      ]
    ]
  },
  {
    "id": "r622",
    "name": "2nd Cross road",
    "highway": "residential",
    "from": "n578",
    "to": "n227",
    "distance": 0.13,
    "status": "green",
    "coords": [
      [
        12.9278439,
        77.6079681
      ],
      [
        12.9278387,
        77.6085701
      ],
      [
        12.9278446,
        77.6091661
      ]
    ]
  },
  {
    "id": "r623",
    "name": "1st Main Road",
    "highway": "residential",
    "from": "n538",
    "to": "n226",
    "distance": 0.16,
    "status": "green",
    "coords": [
      [
        12.9302265,
        77.6082203
      ],
      [
        12.9302428,
        77.6096711
      ]
    ]
  },
  {
    "id": "r624",
    "name": "4th Main Road",
    "highway": "residential",
    "from": "n540",
    "to": "n578",
    "distance": 0.11,
    "status": "green",
    "coords": [
      [
        12.9288295,
        77.6080765
      ],
      [
        12.9287411,
        77.6080734
      ],
      [
        12.9284141,
        77.6080348
      ],
      [
        12.9282787,
        77.6080304
      ],
      [
        12.9281422,
        77.6080093
      ],
      [
        12.9279577,
        77.6079815
      ],
      [
        12.9278439,
        77.6079681
      ]
    ]
  },
  {
    "id": "r625",
    "name": "4th Main Road",
    "highway": "residential",
    "from": "n578",
    "to": "n579",
    "distance": 0.03,
    "status": "green",
    "coords": [
      [
        12.9278439,
        77.6079681
      ],
      [
        12.9275811,
        77.6079517
      ]
    ]
  },
  {
    "id": "r626",
    "name": "Madiwala Underpass",
    "highway": "primary",
    "from": "n580",
    "to": "n581",
    "distance": 0.17,
    "status": "green",
    "coords": [
      [
        12.9247095,
        77.6179908
      ],
      [
        12.9256504,
        77.6174042
      ],
      [
        12.925979,
        77.6171909
      ]
    ]
  },
  {
    "id": "r627",
    "name": "Sarjapura Road",
    "highway": "primary",
    "from": "n582",
    "to": "n64",
    "distance": 0.28,
    "status": "yellow",
    "coords": [
      [
        12.9275608,
        77.6210315
      ],
      [
        12.9275183,
        77.6211292
      ],
      [
        12.9270019,
        77.6223418
      ],
      [
        12.9268106,
        77.6227986
      ],
      [
        12.9265612,
        77.623379
      ]
    ]
  },
  {
    "id": "r628",
    "name": "Sarjapura Road",
    "highway": "primary",
    "from": "n64",
    "to": "n583",
    "distance": 0.58,
    "status": "green",
    "coords": [
      [
        12.9265612,
        77.623379
      ],
      [
        12.9258055,
        77.6251691
      ],
      [
        12.9257981,
        77.6251869
      ],
      [
        12.9252385,
        77.626535
      ],
      [
        12.9250287,
        77.6270231
      ],
      [
        12.9244971,
        77.6282817
      ]
    ]
  },
  {
    "id": "r629",
    "name": "1st B Main Road",
    "highway": "residential",
    "from": "n584",
    "to": "n585",
    "distance": 0.09,
    "status": "green",
    "coords": [
      [
        12.9369879,
        77.6306209
      ],
      [
        12.9367657,
        77.6303932
      ],
      [
        12.9364793,
        77.6301146
      ],
      [
        12.9364568,
        77.630103
      ],
      [
        12.9364336,
        77.6301076
      ],
      [
        12.9364199,
        77.6301114
      ],
      [
        12.9364043,
        77.6301232
      ]
    ]
  },
  {
    "id": "r630",
    "name": "Hosur Road",
    "highway": "primary",
    "from": "n586",
    "to": "n554",
    "distance": 0.43,
    "status": "green",
    "coords": [
      [
        12.9295715,
        77.6151658
      ],
      [
        12.9293925,
        77.6153
      ],
      [
        12.929187,
        77.6154226
      ],
      [
        12.9262516,
        77.6171742
      ]
    ]
  },
  {
    "id": "r631",
    "name": "Hosur Road",
    "highway": "primary",
    "from": "n554",
    "to": "n547",
    "distance": 0.03,
    "status": "yellow",
    "coords": [
      [
        12.9262516,
        77.6171742
      ],
      [
        12.9260375,
        77.6172816
      ]
    ]
  },
  {
    "id": "r632",
    "name": "1st A Cross",
    "highway": "residential",
    "from": "n587",
    "to": "n557",
    "distance": 0.05,
    "status": "green",
    "coords": [
      [
        12.9349406,
        77.6297914
      ],
      [
        12.9348255,
        77.6294154
      ],
      [
        12.9348055,
        77.6293659
      ]
    ]
  },
  {
    "id": "r633",
    "name": "1st Cross, Green Leaf Extension",
    "highway": "residential",
    "from": "n588",
    "to": "n556",
    "distance": 0.15,
    "status": "yellow",
    "coords": [
      [
        12.9362777,
        77.6293386
      ],
      [
        12.9360552,
        77.6286018
      ],
      [
        12.9357355,
        77.6287062
      ],
      [
        12.9355804,
        77.628756
      ],
      [
        12.9355098,
        77.6287432
      ],
      [
        12.9354848,
        77.6287119
      ]
    ]
  },
  {
    "id": "r634",
    "name": "Temole Trees Road,Cauvery Colony",
    "highway": "residential",
    "from": "n589",
    "to": "n590",
    "distance": 0.12,
    "status": "red",
    "coords": [
      [
        12.9342539,
        77.6362309
      ],
      [
        12.9338857,
        77.6359258
      ],
      [
        12.9336731,
        77.6357601
      ],
      [
        12.9334914,
        77.6356387
      ],
      [
        12.9334535,
        77.6356273
      ],
      [
        12.9334221,
        77.635626
      ],
      [
        12.9333947,
        77.6356337
      ],
      [
        12.9333772,
        77.6356534
      ]
    ]
  },
  {
    "id": "r635",
    "name": "Hosur Road",
    "highway": "primary",
    "from": "n581",
    "to": "n237",
    "distance": 0.13,
    "status": "green",
    "coords": [
      [
        12.925979,
        77.6171909
      ],
      [
        12.9261271,
        77.617103
      ],
      [
        12.9269951,
        77.616588
      ]
    ]
  },
  {
    "id": "r636",
    "name": "Hosur Road",
    "highway": "primary",
    "from": "n237",
    "to": "n591",
    "distance": 0.11,
    "status": "green",
    "coords": [
      [
        12.9269951,
        77.616588
      ],
      [
        12.9278594,
        77.6160664
      ]
    ]
  },
  {
    "id": "r637",
    "name": "Hosur Road",
    "highway": "primary",
    "from": "n591",
    "to": "n592",
    "distance": 0.08,
    "status": "yellow",
    "coords": [
      [
        12.9278594,
        77.6160664
      ],
      [
        12.9284946,
        77.6156751
      ]
    ]
  },
  {
    "id": "r638",
    "name": "Doctor M H Marigowda Road",
    "highway": "primary",
    "from": "n593",
    "to": "n473",
    "distance": 0.35,
    "status": "green",
    "coords": [
      [
        12.9367299,
        77.6047696
      ],
      [
        12.9367132,
        77.604874
      ],
      [
        12.9367096,
        77.6048965
      ],
      [
        12.9366909,
        77.6050137
      ],
      [
        12.9366834,
        77.6050652
      ],
      [
        12.936609,
        77.6055647
      ],
      [
        12.9365926,
        77.60569
      ],
      [
        12.936575,
        77.6058255
      ],
      [
        12.936548,
        77.6060337
      ],
      [
        12.936522,
        77.6062346
      ],
      [
        12.9364956,
        77.6063989
      ],
      [
        12.9364875,
        77.6064496
      ],
      [
        12.9364732,
        77.6065383
      ],
      [
        12.9364003,
        77.6067925
      ],
      [
        12.9363604,
        77.6069045
      ],
      [
        12.9363538,
        77.6069229
      ],
      [
        12.936336,
        77.6069729
      ],
      [
        12.9363247,
        77.6070047
      ],
      [
        12.9363118,
        77.6070407
      ],
      [
        12.9362647,
        77.6071729
      ],
      [
        12.936102,
        77.6075926
      ],
      [
        12.9360709,
        77.607673
      ],
      [
        12.9359444,
        77.6079118
      ]
    ]
  },
  {
    "id": "r639",
    "name": "Doctor M H Marigowda Road",
    "highway": "primary",
    "from": "n473",
    "to": "n594",
    "distance": 0.21,
    "status": "green",
    "coords": [
      [
        12.9359444,
        77.6079118
      ],
      [
        12.9354673,
        77.6086846
      ],
      [
        12.9349712,
        77.609475
      ],
      [
        12.9349638,
        77.6094868
      ],
      [
        12.9349309,
        77.6095392
      ]
    ]
  },
  {
    "id": "r640",
    "name": "Doctor M H Marigowda Road",
    "highway": "primary",
    "from": "n595",
    "to": "n596",
    "distance": 0.46,
    "status": "green",
    "coords": [
      [
        12.9342559,
        77.6104312
      ],
      [
        12.9336994,
        77.611161
      ],
      [
        12.9336283,
        77.6112518
      ],
      [
        12.9334844,
        77.6114358
      ],
      [
        12.9333978,
        77.6115464
      ],
      [
        12.933222,
        77.611771
      ],
      [
        12.9327649,
        77.6123657
      ],
      [
        12.9322145,
        77.6130714
      ],
      [
        12.9321223,
        77.6131896
      ],
      [
        12.9320183,
        77.6133247
      ],
      [
        12.9319553,
        77.613411
      ],
      [
        12.9318621,
        77.6135387
      ],
      [
        12.9316887,
        77.6137504
      ]
    ]
  },
  {
    "id": "r641",
    "name": "17th F Main Road",
    "highway": "residential",
    "from": "n84",
    "to": "n350",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9346287,
        77.6185891
      ],
      [
        12.9349521,
        77.6186757
      ]
    ]
  },
  {
    "id": "r642",
    "name": "17th F Main Road",
    "highway": "residential",
    "from": "n350",
    "to": "n215",
    "distance": 0.03,
    "status": "red",
    "coords": [
      [
        12.9349521,
        77.6186757
      ],
      [
        12.9351874,
        77.618721
      ]
    ]
  },
  {
    "id": "r643",
    "name": "17th F Main Road",
    "highway": "residential",
    "from": "n215",
    "to": "n255",
    "distance": 0.05,
    "status": "green",
    "coords": [
      [
        12.9351874,
        77.618721
      ],
      [
        12.9355813,
        77.6188492
      ]
    ]
  },
  {
    "id": "r644",
    "name": "17th F Main Road",
    "highway": "residential",
    "from": "n255",
    "to": "n88",
    "distance": 0.07,
    "status": "green",
    "coords": [
      [
        12.9355813,
        77.6188492
      ],
      [
        12.9358237,
        77.6189941
      ],
      [
        12.9361142,
        77.6191864
      ]
    ]
  },
  {
    "id": "r645",
    "name": "Inner Ring Road",
    "highway": "primary",
    "from": "n597",
    "to": "n598",
    "distance": 2.5,
    "status": "red",
    "coords": [
      [
        12.9387473,
        77.6346476
      ],
      [
        12.9388525,
        77.6349106
      ],
      [
        12.9389824,
        77.6351774
      ],
      [
        12.9390661,
        77.6353249
      ],
      [
        12.9391574,
        77.6354529
      ],
      [
        12.9393947,
        77.6357568
      ],
      [
        12.9396511,
        77.6360208
      ],
      [
        12.9397536,
        77.6361014
      ],
      [
        12.9399797,
        77.6362744
      ],
      [
        12.9403073,
        77.6364934
      ],
      [
        12.9408989,
        77.6368526
      ],
      [
        12.9424905,
        77.6378354
      ],
      [
        12.9440785,
        77.6388024
      ],
      [
        12.9450353,
        77.6394005
      ],
      [
        12.9459778,
        77.6399778
      ],
      [
        12.9459899,
        77.6399851
      ],
      [
        12.9460321,
        77.640011
      ],
      [
        12.9461078,
        77.6400555
      ],
      [
        12.9465737,
        77.6403286
      ],
      [
        12.947076,
        77.6406259
      ],
      [
        12.9472429,
        77.6407094
      ],
      [
        12.9473134,
        77.6407322
      ],
      [
        12.9474452,
        77.6407665
      ],
      [
        12.9475526,
        77.6407765
      ],
      [
        12.947791,
        77.6407665
      ],
      [
        12.9479742,
        77.6407283
      ],
      [
        12.9481526,
        77.6406785
      ],
      [
        12.9482834,
        77.640608
      ],
      [
        12.9483434,
        77.6405618
      ],
      [
        12.9484479,
        77.6404694
      ],
      [
        12.948576,
        77.6403386
      ],
      [
        12.9488544,
        77.640002
      ],
      [
        12.9492636,
        77.639558
      ],
      [
        12.9493974,
        77.6394173
      ],
      [
        12.9495483,
        77.6392966
      ],
      [
        12.9497451,
        77.6391986
      ],
      [
        12.9498759,
        77.6391527
      ],
      [
        12.9500777,
        77.6391189
      ],
      [
        12.9502703,
        77.6391251
      ],
      [
        12.950468,
        77.6391602
      ],
      [
        12.950852,
        77.63933
      ],
      [
        12.9514557,
        77.6396446
      ],
      [
        12.9517297,
        77.6398068
      ],
      [
        12.9523878,
        77.6401966
      ],
      [
        12.9526756,
        77.6403715
      ],
      [
        12.9529792,
        77.6405486
      ],
      [
        12.9531098,
        77.6406247
      ],
      [
        12.9532268,
        77.640693
      ],
      [
        12.9534691,
        77.6408344
      ],
      [
        12.9541534,
        77.6411955
      ],
      [
        12.9543926,
        77.6412591
      ],
      [
        12.9546887,
        77.6412871
      ],
      [
        12.9550654,
        77.6413086
      ],
      [
        12.9555613,
        77.6413397
      ],
      [
        12.9563938,
        77.6413531
      ],
      [
        12.9567428,
        77.6413603
      ],
      [
        12.9568407,
        77.6413623
      ],
      [
        12.9569623,
        77.641363
      ],
      [
        12.9571754,
        77.6413469
      ],
      [
        12.9578484,
        77.6413026
      ],
      [
        12.9580829,
        77.6413115
      ]
    ]
  },
  {
    "id": "r646",
    "name": "Inner Ring Road",
    "highway": "primary",
    "from": "n599",
    "to": "n600",
    "distance": 0.02,
    "status": "green",
    "coords": [
      [
        12.9382356,
        77.6286878
      ],
      [
        12.938179,
        77.6285411
      ]
    ]
  },
  {
    "id": "r647",
    "name": "Inner Ring Road",
    "highway": "primary",
    "from": "n600",
    "to": "n601",
    "distance": 0.2,
    "status": "yellow",
    "coords": [
      [
        12.938179,
        77.6285411
      ],
      [
        12.9381191,
        77.6284201
      ],
      [
        12.9380641,
        77.6283057
      ],
      [
        12.9379981,
        77.6281756
      ],
      [
        12.9378841,
        77.6279541
      ],
      [
        12.937751,
        77.6277041
      ],
      [
        12.9376121,
        77.6274688
      ],
      [
        12.9374897,
        77.6272877
      ],
      [
        12.9373044,
        77.6270752
      ],
      [
        12.9372886,
        77.6270563
      ],
      [
        12.937249,
        77.6270053
      ]
    ]
  },
  {
    "id": "r648",
    "name": "Inner Ring Road",
    "highway": "primary",
    "from": "n602",
    "to": "n603",
    "distance": 0.02,
    "status": "green",
    "coords": [
      [
        12.9382733,
        77.6285082
      ],
      [
        12.9383498,
        77.6287044
      ]
    ]
  },
  {
    "id": "r649",
    "name": "4th Cross Road",
    "highway": "residential",
    "from": "n604",
    "to": "n605",
    "distance": 0.07,
    "status": "green",
    "coords": [
      [
        12.9410156,
        77.6080097
      ],
      [
        12.9411959,
        77.6085238
      ],
      [
        12.941225,
        77.6085838
      ]
    ]
  },
  {
    "id": "r650",
    "name": "3rd A Main Road",
    "highway": "residential",
    "from": "n606",
    "to": "n607",
    "distance": 0.09,
    "status": "green",
    "coords": [
      [
        12.9419379,
        77.6136311
      ],
      [
        12.9426959,
        77.6139629
      ]
    ]
  },
  {
    "id": "r651",
    "name": "1st B Cross Road",
    "highway": "residential",
    "from": "n368",
    "to": "n390",
    "distance": 0.07,
    "status": "green",
    "coords": [
      [
        12.9401391,
        77.6181908
      ],
      [
        12.9399202,
        77.6188159
      ]
    ]
  },
  {
    "id": "r652",
    "name": "3rd B Cross Road",
    "highway": "residential",
    "from": "n608",
    "to": "n609",
    "distance": 0.09,
    "status": "red",
    "coords": [
      [
        12.9427971,
        77.6136318
      ],
      [
        12.9420603,
        77.6133594
      ]
    ]
  },
  {
    "id": "r653",
    "name": "3rd Cross Road",
    "highway": "residential",
    "from": "n383",
    "to": "n610",
    "distance": 0.26,
    "status": "red",
    "coords": [
      [
        12.9415455,
        77.6190014
      ],
      [
        12.9414736,
        77.6191171
      ],
      [
        12.9410432,
        77.620239
      ],
      [
        12.9414766,
        77.6207639
      ],
      [
        12.9412876,
        77.6210039
      ],
      [
        12.9412707,
        77.6210254
      ]
    ]
  },
  {
    "id": "r654",
    "name": "2nd Cross Road",
    "highway": "residential",
    "from": "n260",
    "to": "n611",
    "distance": 0.1,
    "status": "green",
    "coords": [
      [
        12.9439895,
        77.6086743
      ],
      [
        12.9445539,
        77.6086877
      ],
      [
        12.944926,
        77.6087252
      ]
    ]
  },
  {
    "id": "r655",
    "name": "2nd Main Road",
    "highway": "residential",
    "from": "n499",
    "to": "n612",
    "distance": 0.03,
    "status": "green",
    "coords": [
      [
        12.9444815,
        77.6200017
      ],
      [
        12.9446589,
        77.6200771
      ],
      [
        12.944716,
        77.6201013
      ]
    ]
  },
  {
    "id": "r656",
    "name": "8th Cross Road",
    "highway": "residential",
    "from": "n613",
    "to": "n614",
    "distance": 0.05,
    "status": "green",
    "coords": [
      [
        12.9421851,
        77.6214784
      ],
      [
        12.9418767,
        77.6217739
      ],
      [
        12.9418544,
        77.6217952
      ]
    ]
  },
  {
    "id": "r657",
    "name": "8th Cross Road",
    "highway": "residential",
    "from": "n614",
    "to": "n615",
    "distance": 0.01,
    "status": "green",
    "coords": [
      [
        12.9418544,
        77.6217952
      ],
      [
        12.9417991,
        77.6218422
      ]
    ]
  },
  {
    "id": "r658",
    "name": "2nd Main Road",
    "highway": "residential",
    "from": "n616",
    "to": "n498",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9436401,
        77.6196185
      ],
      [
        12.9439372,
        77.6197535
      ]
    ]
  },
  {
    "id": "r659",
    "name": "2nd Cross Road",
    "highway": "residential",
    "from": "n617",
    "to": "n483",
    "distance": 0.1,
    "status": "green",
    "coords": [
      [
        12.9447647,
        77.6178921
      ],
      [
        12.9451658,
        77.6170161
      ]
    ]
  },
  {
    "id": "r660",
    "name": "1st Cross Road",
    "highway": "residential",
    "from": "n618",
    "to": "n484",
    "distance": 0.1,
    "status": "green",
    "coords": [
      [
        12.9446171,
        77.6178166
      ],
      [
        12.9447852,
        77.6174086
      ],
      [
        12.9449787,
        77.6169231
      ]
    ]
  },
  {
    "id": "r661",
    "name": "Inner Ring Road",
    "highway": "primary",
    "from": "n619",
    "to": "n620",
    "distance": 2.51,
    "status": "green",
    "coords": [
      [
        12.9580802,
        77.6414244
      ],
      [
        12.9578378,
        77.6414143
      ],
      [
        12.9572778,
        77.6414557
      ],
      [
        12.9568439,
        77.6414725
      ],
      [
        12.9563798,
        77.6414648
      ],
      [
        12.9558712,
        77.6414584
      ],
      [
        12.9554138,
        77.6414394
      ],
      [
        12.9547164,
        77.6413866
      ],
      [
        12.9543943,
        77.6413707
      ],
      [
        12.9541917,
        77.6413288
      ],
      [
        12.9539876,
        77.6412439
      ],
      [
        12.9534566,
        77.6409533
      ],
      [
        12.9533227,
        77.6408801
      ],
      [
        12.9528182,
        77.640587
      ],
      [
        12.9524091,
        77.6403398
      ],
      [
        12.9518287,
        77.6400015
      ],
      [
        12.9516986,
        77.6399105
      ],
      [
        12.9516151,
        77.6398655
      ],
      [
        12.951437,
        77.6397621
      ],
      [
        12.95119,
        77.6396302
      ],
      [
        12.9509894,
        77.639535
      ],
      [
        12.9508872,
        77.6394865
      ],
      [
        12.9508219,
        77.6394576
      ],
      [
        12.9505385,
        77.6393213
      ],
      [
        12.9503986,
        77.6392718
      ],
      [
        12.9502519,
        77.6392413
      ],
      [
        12.9500894,
        77.6392322
      ],
      [
        12.949896,
        77.639263
      ],
      [
        12.9497665,
        77.6393191
      ],
      [
        12.949585,
        77.63942
      ],
      [
        12.9494899,
        77.6394959
      ],
      [
        12.9493752,
        77.6395968
      ],
      [
        12.9489289,
        77.640059
      ],
      [
        12.9486593,
        77.6404073
      ],
      [
        12.9485184,
        77.6405552
      ],
      [
        12.9484388,
        77.640637
      ],
      [
        12.9483606,
        77.6407006
      ],
      [
        12.9481415,
        77.6408227
      ],
      [
        12.9479787,
        77.640877
      ],
      [
        12.9478144,
        77.6409046
      ],
      [
        12.9475444,
        77.6409106
      ],
      [
        12.9474127,
        77.6408986
      ],
      [
        12.9473464,
        77.64089
      ],
      [
        12.9472949,
        77.6408761
      ],
      [
        12.9472059,
        77.6408448
      ],
      [
        12.9470102,
        77.6407456
      ],
      [
        12.9465253,
        77.64046
      ],
      [
        12.9461245,
        77.6401963
      ],
      [
        12.9460702,
        77.6401606
      ],
      [
        12.9460574,
        77.640153
      ],
      [
        12.945974,
        77.6401043
      ],
      [
        12.9459361,
        77.6400807
      ],
      [
        12.9449882,
        77.6394944
      ],
      [
        12.9440523,
        77.6389194
      ],
      [
        12.9432695,
        77.638443
      ],
      [
        12.9424487,
        77.6379266
      ],
      [
        12.9416396,
        77.6374358
      ],
      [
        12.9408345,
        77.636945
      ],
      [
        12.9404689,
        77.6367245
      ],
      [
        12.9403057,
        77.636626
      ],
      [
        12.9399024,
        77.6363563
      ],
      [
        12.9396895,
        77.6362006
      ],
      [
        12.9395719,
        77.6361014
      ],
      [
        12.9393019,
        77.6358302
      ],
      [
        12.9390747,
        77.6355649
      ],
      [
        12.9389693,
        77.6354094
      ],
      [
        12.9388543,
        77.6352196
      ],
      [
        12.9387511,
        77.6350003
      ],
      [
        12.9386513,
        77.6347645
      ]
    ]
  },
  {
    "id": "r662",
    "name": "1st Main Ashwini Layout",
    "highway": "residential",
    "from": "n621",
    "to": "n622",
    "distance": 0.09,
    "status": "green",
    "coords": [
      [
        12.9392463,
        77.628232
      ],
      [
        12.9394842,
        77.6281843
      ],
      [
        12.9396222,
        77.6281541
      ],
      [
        12.9397888,
        77.6281289
      ],
      [
        12.9400714,
        77.628085
      ]
    ]
  },
  {
    "id": "r663",
    "name": "Sri Rama Temple Road",
    "highway": "residential",
    "from": "n623",
    "to": "n624",
    "distance": 0.19,
    "status": "green",
    "coords": [
      [
        12.9407171,
        77.6269256
      ],
      [
        12.9406385,
        77.6267673
      ],
      [
        12.9405388,
        77.626491
      ],
      [
        12.9404489,
        77.6261829
      ],
      [
        12.9404006,
        77.6260387
      ],
      [
        12.9403441,
        77.6258879
      ],
      [
        12.9402895,
        77.6258212
      ],
      [
        12.9402155,
        77.625747
      ],
      [
        12.9401666,
        77.6256958
      ],
      [
        12.9399808,
        77.6255013
      ],
      [
        12.9399581,
        77.6254775
      ],
      [
        12.9399056,
        77.6254211
      ]
    ]
  },
  {
    "id": "r664",
    "name": "Pipeline Road",
    "highway": "residential",
    "from": "n567",
    "to": "n625",
    "distance": 0.02,
    "status": "green",
    "coords": [
      [
        12.9417477,
        77.6291931
      ],
      [
        12.9418952,
        77.6291403
      ]
    ]
  },
  {
    "id": "r665",
    "name": "20D Cross Road",
    "highway": "residential",
    "from": "n626",
    "to": "n491",
    "distance": 0.08,
    "status": "green",
    "coords": [
      [
        12.9425144,
        77.6289262
      ],
      [
        12.9426297,
        77.6284419
      ],
      [
        12.9426893,
        77.6281987
      ]
    ]
  },
  {
    "id": "r666",
    "name": "20I Cross Road",
    "highway": "residential",
    "from": "n566",
    "to": "n495",
    "distance": 0.15,
    "status": "red",
    "coords": [
      [
        12.9415794,
        77.6292522
      ],
      [
        12.9416869,
        77.6285542
      ],
      [
        12.9417529,
        77.6282771
      ],
      [
        12.9418184,
        77.6279371
      ]
    ]
  },
  {
    "id": "r667",
    "name": "20th B Cross Road",
    "highway": "residential",
    "from": "n488",
    "to": "n627",
    "distance": 0.1,
    "status": "green",
    "coords": [
      [
        12.9434075,
        77.6284627
      ],
      [
        12.9433547,
        77.6286852
      ],
      [
        12.943302,
        77.6289256
      ],
      [
        12.9432309,
        77.6293631
      ]
    ]
  },
  {
    "id": "r668",
    "name": "Pipeline Road",
    "highway": "residential",
    "from": "n628",
    "to": "n629",
    "distance": 0.58,
    "status": "red",
    "coords": [
      [
        12.9445102,
        77.6271854
      ],
      [
        12.9445129,
        77.6270602
      ],
      [
        12.9446344,
        77.6269204
      ],
      [
        12.9446525,
        77.6268942
      ],
      [
        12.9449551,
        77.6265839
      ],
      [
        12.9451339,
        77.6263552
      ],
      [
        12.9451711,
        77.626245
      ],
      [
        12.9451822,
        77.6262269
      ],
      [
        12.9451784,
        77.6260302
      ],
      [
        12.9452598,
        77.6259937
      ],
      [
        12.9453081,
        77.6258782
      ],
      [
        12.9453977,
        77.6256846
      ],
      [
        12.9455652,
        77.6253824
      ],
      [
        12.9455865,
        77.6253265
      ],
      [
        12.9456537,
        77.6251967
      ],
      [
        12.9458244,
        77.6248621
      ],
      [
        12.9459957,
        77.6246072
      ],
      [
        12.9461773,
        77.6242532
      ],
      [
        12.9462977,
        77.6242931
      ],
      [
        12.9465483,
        77.6243762
      ],
      [
        12.9467682,
        77.6244527
      ],
      [
        12.9471386,
        77.6245815
      ],
      [
        12.9478886,
        77.6248415
      ]
    ]
  },
  {
    "id": "r669",
    "name": "21st Cross Road",
    "highway": "residential",
    "from": "n487",
    "to": "n630",
    "distance": 0.06,
    "status": "yellow",
    "coords": [
      [
        12.9445928,
        77.6288905
      ],
      [
        12.9445743,
        77.6294786
      ]
    ]
  },
  {
    "id": "r670",
    "name": "1st Cross Road",
    "highway": "residential",
    "from": "n631",
    "to": "n236",
    "distance": 0.06,
    "status": "red",
    "coords": [
      [
        12.9262688,
        77.6165163
      ],
      [
        12.9267644,
        77.6162225
      ]
    ]
  },
  {
    "id": "r671",
    "name": "1st Cross Road",
    "highway": "residential",
    "from": "n236",
    "to": "n632",
    "distance": 0.07,
    "status": "green",
    "coords": [
      [
        12.9267644,
        77.6162225
      ],
      [
        12.9273272,
        77.6158563
      ]
    ]
  },
  {
    "id": "r672",
    "name": "Hosur Road",
    "highway": "primary",
    "from": "n633",
    "to": "n634",
    "distance": 0.02,
    "status": "green",
    "coords": [
      [
        12.92938,
        77.6151599
      ],
      [
        12.9295316,
        77.6150603
      ]
    ]
  },
  {
    "id": "r673",
    "name": "Koramangala Road",
    "highway": "tertiary",
    "from": "n635",
    "to": "n467",
    "distance": 0.14,
    "status": "green",
    "coords": [
      [
        12.9441842,
        77.6088517
      ],
      [
        12.9441113,
        77.6093948
      ],
      [
        12.944115,
        77.6094926
      ],
      [
        12.9440977,
        77.6095645
      ],
      [
        12.9440461,
        77.6097795
      ],
      [
        12.9440324,
        77.6098368
      ],
      [
        12.9440114,
        77.6099243
      ],
      [
        12.9439598,
        77.6101394
      ]
    ]
  },
  {
    "id": "r674",
    "name": "Koramangala Road",
    "highway": "tertiary",
    "from": "n467",
    "to": "n636",
    "distance": 0.2,
    "status": "green",
    "coords": [
      [
        12.9439598,
        77.6101394
      ],
      [
        12.9439165,
        77.6103562
      ],
      [
        12.9438825,
        77.6105116
      ],
      [
        12.9436935,
        77.6108375
      ],
      [
        12.9436538,
        77.610906
      ],
      [
        12.9434319,
        77.6116406
      ],
      [
        12.943414,
        77.6118427
      ]
    ]
  },
  {
    "id": "r675",
    "name": "Koramangala Road",
    "highway": "tertiary",
    "from": "n636",
    "to": "n637",
    "distance": 0.04,
    "status": "yellow",
    "coords": [
      [
        12.943414,
        77.6118427
      ],
      [
        12.9433953,
        77.6120537
      ],
      [
        12.9433454,
        77.6122315
      ]
    ]
  },
  {
    "id": "r676",
    "name": "Koramangala Road",
    "highway": "tertiary",
    "from": "n637",
    "to": "n638",
    "distance": 0.04,
    "status": "yellow",
    "coords": [
      [
        12.9433454,
        77.6122315
      ],
      [
        12.9432528,
        77.6125609
      ]
    ]
  },
  {
    "id": "r677",
    "name": "Koramangala Road",
    "highway": "tertiary",
    "from": "n638",
    "to": "n639",
    "distance": 0.03,
    "status": "green",
    "coords": [
      [
        12.9432528,
        77.6125609
      ],
      [
        12.9431623,
        77.6128354
      ]
    ]
  },
  {
    "id": "r678",
    "name": "Koramangala Road",
    "highway": "tertiary",
    "from": "n639",
    "to": "n640",
    "distance": 0.03,
    "status": "green",
    "coords": [
      [
        12.9431623,
        77.6128354
      ],
      [
        12.9430555,
        77.6131074
      ]
    ]
  },
  {
    "id": "r679",
    "name": "Koramangala Road",
    "highway": "tertiary",
    "from": "n640",
    "to": "n608",
    "distance": 0.06,
    "status": "green",
    "coords": [
      [
        12.9430555,
        77.6131074
      ],
      [
        12.9429457,
        77.6132207
      ],
      [
        12.9427971,
        77.6136318
      ]
    ]
  },
  {
    "id": "r680",
    "name": "Koramangala Road",
    "highway": "tertiary",
    "from": "n608",
    "to": "n607",
    "distance": 0.04,
    "status": "yellow",
    "coords": [
      [
        12.9427971,
        77.6136318
      ],
      [
        12.9426959,
        77.6139629
      ]
    ]
  },
  {
    "id": "r681",
    "name": "Koramangala Road",
    "highway": "tertiary",
    "from": "n607",
    "to": "n641",
    "distance": 0.04,
    "status": "yellow",
    "coords": [
      [
        12.9426959,
        77.6139629
      ],
      [
        12.9425559,
        77.6142722
      ]
    ]
  },
  {
    "id": "r682",
    "name": "Koramangala Road",
    "highway": "tertiary",
    "from": "n641",
    "to": "n417",
    "distance": 0.09,
    "status": "green",
    "coords": [
      [
        12.9425559,
        77.6142722
      ],
      [
        12.9425482,
        77.6142877
      ],
      [
        12.9424398,
        77.6145047
      ],
      [
        12.942323,
        77.6147388
      ],
      [
        12.9422528,
        77.6148796
      ],
      [
        12.9421955,
        77.6150153
      ]
    ]
  },
  {
    "id": "r683",
    "name": "Koramangala Road",
    "highway": "tertiary",
    "from": "n417",
    "to": "n418",
    "distance": 0.03,
    "status": "green",
    "coords": [
      [
        12.9421955,
        77.6150153
      ],
      [
        12.9421024,
        77.6152359
      ],
      [
        12.9420867,
        77.6152627
      ]
    ]
  },
  {
    "id": "r684",
    "name": "Koramangala Road",
    "highway": "tertiary",
    "from": "n418",
    "to": "n415",
    "distance": 0.03,
    "status": "green",
    "coords": [
      [
        12.9420867,
        77.6152627
      ],
      [
        12.9419446,
        77.6155167
      ]
    ]
  },
  {
    "id": "r685",
    "name": "Koramangala Road",
    "highway": "tertiary",
    "from": "n415",
    "to": "n413",
    "distance": 0.02,
    "status": "green",
    "coords": [
      [
        12.9419446,
        77.6155167
      ],
      [
        12.9418539,
        77.6156795
      ]
    ]
  },
  {
    "id": "r686",
    "name": "Koramangala Road",
    "highway": "tertiary",
    "from": "n413",
    "to": "n410",
    "distance": 0.03,
    "status": "green",
    "coords": [
      [
        12.9418539,
        77.6156795
      ],
      [
        12.9417977,
        77.6159354
      ]
    ]
  },
  {
    "id": "r687",
    "name": "Koramangala Road",
    "highway": "tertiary",
    "from": "n410",
    "to": "n388",
    "distance": 0.03,
    "status": "green",
    "coords": [
      [
        12.9417977,
        77.6159354
      ],
      [
        12.9417812,
        77.6160146
      ],
      [
        12.9417737,
        77.6161969
      ]
    ]
  },
  {
    "id": "r688",
    "name": "17th Main Road",
    "highway": "residential",
    "from": "n642",
    "to": "n514",
    "distance": 0.08,
    "status": "green",
    "coords": [
      [
        12.9247554,
        77.6203498
      ],
      [
        12.9249464,
        77.6202576
      ],
      [
        12.9253882,
        77.6200089
      ]
    ]
  },
  {
    "id": "r689",
    "name": "17th Main Road",
    "highway": "residential",
    "from": "n514",
    "to": "n550",
    "distance": 0.02,
    "status": "green",
    "coords": [
      [
        12.9253882,
        77.6200089
      ],
      [
        12.9254987,
        77.6199272
      ]
    ]
  },
  {
    "id": "r690",
    "name": "13th Main Road",
    "highway": "residential",
    "from": "n643",
    "to": "n97",
    "distance": 0.09,
    "status": "green",
    "coords": [
      [
        12.9258917,
        77.6251942
      ],
      [
        12.9266427,
        77.6254533
      ]
    ]
  },
  {
    "id": "r691",
    "name": "13th Main Road",
    "highway": "residential",
    "from": "n97",
    "to": "n40",
    "distance": 0.08,
    "status": "green",
    "coords": [
      [
        12.9266427,
        77.6254533
      ],
      [
        12.9273383,
        77.6256948
      ]
    ]
  },
  {
    "id": "r692",
    "name": "13th Main Road",
    "highway": "residential",
    "from": "n40",
    "to": "n100",
    "distance": 0.06,
    "status": "red",
    "coords": [
      [
        12.9273383,
        77.6256948
      ],
      [
        12.9278704,
        77.6258862
      ]
    ]
  },
  {
    "id": "r693",
    "name": "13th Main Road",
    "highway": "residential",
    "from": "n100",
    "to": "n479",
    "distance": 0.3,
    "status": "green",
    "coords": [
      [
        12.9278704,
        77.6258862
      ],
      [
        12.929708,
        77.6265473
      ],
      [
        12.9304478,
        77.6268215
      ]
    ]
  },
  {
    "id": "r694",
    "name": "Maruthi Nagar Main Road",
    "highway": "secondary",
    "from": "n644",
    "to": "n645",
    "distance": 0.16,
    "status": "green",
    "coords": [
      [
        12.9235354,
        77.6146263
      ],
      [
        12.923583,
        77.6146522
      ],
      [
        12.9236109,
        77.6146674
      ],
      [
        12.9237569,
        77.6147164
      ],
      [
        12.9238625,
        77.614752
      ],
      [
        12.9241147,
        77.6148365
      ],
      [
        12.9242891,
        77.6148951
      ],
      [
        12.924422,
        77.6149397
      ],
      [
        12.9244583,
        77.6149519
      ],
      [
        12.9246592,
        77.6150194
      ],
      [
        12.9248762,
        77.6150923
      ]
    ]
  },
  {
    "id": "r695",
    "name": "Maruthi Nagar Main Road",
    "highway": "secondary",
    "from": "n645",
    "to": "n575",
    "distance": 0.03,
    "status": "green",
    "coords": [
      [
        12.9248762,
        77.6150923
      ],
      [
        12.9251673,
        77.6151961
      ]
    ]
  },
  {
    "id": "r696",
    "name": "Maruthi Nagar Main Road",
    "highway": "secondary",
    "from": "n575",
    "to": "n571",
    "distance": 0.01,
    "status": "yellow",
    "coords": [
      [
        12.9251673,
        77.6151961
      ],
      [
        12.92526,
        77.6152364
      ]
    ]
  },
  {
    "id": "r697",
    "name": "Maruthi Nagar Main Road",
    "highway": "secondary",
    "from": "n571",
    "to": "n235",
    "distance": 0.13,
    "status": "yellow",
    "coords": [
      [
        12.92526,
        77.6152364
      ],
      [
        12.9254196,
        77.6152839
      ],
      [
        12.9257081,
        77.61537
      ],
      [
        12.9259865,
        77.6154531
      ],
      [
        12.9262461,
        77.6155265
      ],
      [
        12.9263984,
        77.615563
      ]
    ]
  },
  {
    "id": "r698",
    "name": "Maruthi Nagar Main Road",
    "highway": "secondary",
    "from": "n235",
    "to": "n570",
    "distance": 0.01,
    "status": "red",
    "coords": [
      [
        12.9263984,
        77.615563
      ],
      [
        12.9265075,
        77.6155953
      ]
    ]
  },
  {
    "id": "r699",
    "name": "Maruthi Nagar Main Road",
    "highway": "secondary",
    "from": "n570",
    "to": "n646",
    "distance": 0.03,
    "status": "green",
    "coords": [
      [
        12.9265075,
        77.6155953
      ],
      [
        12.9267412,
        77.6156603
      ]
    ]
  },
  {
    "id": "r700",
    "name": "Maruthi Nagar Main Road",
    "highway": "secondary",
    "from": "n646",
    "to": "n647",
    "distance": 0.03,
    "status": "green",
    "coords": [
      [
        12.9267412,
        77.6156603
      ],
      [
        12.9269218,
        77.615717
      ],
      [
        12.927006,
        77.6157421
      ]
    ]
  },
  {
    "id": "r701",
    "name": "Maruthi Nagar Main Road",
    "highway": "secondary",
    "from": "n647",
    "to": "n648",
    "distance": 0.03,
    "status": "yellow",
    "coords": [
      [
        12.927006,
        77.6157421
      ],
      [
        12.9272721,
        77.6158366
      ]
    ]
  },
  {
    "id": "r702",
    "name": "Maruthi Nagar Main Road",
    "highway": "secondary",
    "from": "n648",
    "to": "n632",
    "distance": 0.01,
    "status": "yellow",
    "coords": [
      [
        12.9272721,
        77.6158366
      ],
      [
        12.9273272,
        77.6158563
      ]
    ]
  },
  {
    "id": "r703",
    "name": "Maruthi Nagar Main Road",
    "highway": "secondary",
    "from": "n632",
    "to": "n591",
    "distance": 0.06,
    "status": "red",
    "coords": [
      [
        12.9273272,
        77.6158563
      ],
      [
        12.9274361,
        77.6158965
      ],
      [
        12.9277443,
        77.6160151
      ],
      [
        12.9278594,
        77.6160664
      ]
    ]
  },
  {
    "id": "r704",
    "name": "8th Cross Road",
    "highway": "residential",
    "from": "n442",
    "to": "n649",
    "distance": 0.1,
    "status": "green",
    "coords": [
      [
        12.9341184,
        77.6341032
      ],
      [
        12.9336873,
        77.6338878
      ],
      [
        12.9332839,
        77.6337358
      ]
    ]
  },
  {
    "id": "r705",
    "name": "8th Cross Road",
    "highway": "residential",
    "from": "n649",
    "to": "n650",
    "distance": 0.04,
    "status": "yellow",
    "coords": [
      [
        12.9332839,
        77.6337358
      ],
      [
        12.9328994,
        77.6336226
      ]
    ]
  },
  {
    "id": "r706",
    "name": "8th Cross Road",
    "highway": "residential",
    "from": "n650",
    "to": "n651",
    "distance": 0.08,
    "status": "green",
    "coords": [
      [
        12.9328994,
        77.6336226
      ],
      [
        12.932601,
        77.6335687
      ],
      [
        12.9322071,
        77.6334952
      ]
    ]
  },
  {
    "id": "r707",
    "name": "8th Cross Road",
    "highway": "residential",
    "from": "n651",
    "to": "n652",
    "distance": 0.06,
    "status": "yellow",
    "coords": [
      [
        12.9322071,
        77.6334952
      ],
      [
        12.9316638,
        77.6334015
      ]
    ]
  },
  {
    "id": "r708",
    "name": "2nd Main Road",
    "highway": "residential",
    "from": "n651",
    "to": "n653",
    "distance": 0.2,
    "status": "yellow",
    "coords": [
      [
        12.9322071,
        77.6334952
      ],
      [
        12.9331898,
        77.6324453
      ],
      [
        12.93348,
        77.6321489
      ]
    ]
  },
  {
    "id": "r709",
    "name": "2nd Main Road",
    "highway": "residential",
    "from": "n653",
    "to": "n654",
    "distance": 0.05,
    "status": "green",
    "coords": [
      [
        12.93348,
        77.6321489
      ],
      [
        12.9338184,
        77.6318194
      ]
    ]
  },
  {
    "id": "r710",
    "name": "2nd Main Road",
    "highway": "residential",
    "from": "n654",
    "to": "n655",
    "distance": 0.06,
    "status": "green",
    "coords": [
      [
        12.9338184,
        77.6318194
      ],
      [
        12.9342374,
        77.6314081
      ]
    ]
  },
  {
    "id": "r711",
    "name": "4th Main Road",
    "highway": "residential",
    "from": "n650",
    "to": "n656",
    "distance": 0.11,
    "status": "green",
    "coords": [
      [
        12.9328994,
        77.6336226
      ],
      [
        12.9335956,
        77.632863
      ]
    ]
  },
  {
    "id": "r712",
    "name": "5th Main Road",
    "highway": "residential",
    "from": "n649",
    "to": "n657",
    "distance": 0.09,
    "status": "green",
    "coords": [
      [
        12.9332839,
        77.6337358
      ],
      [
        12.9338358,
        77.6331102
      ]
    ]
  },
  {
    "id": "r713",
    "name": "4th Cross Road",
    "highway": "residential",
    "from": "n658",
    "to": "n655",
    "distance": 0.05,
    "status": "yellow",
    "coords": [
      [
        12.9339456,
        77.63111
      ],
      [
        12.9342374,
        77.6314081
      ]
    ]
  },
  {
    "id": "r714",
    "name": "4th Cross Road",
    "highway": "residential",
    "from": "n655",
    "to": "n659",
    "distance": 0.06,
    "status": "green",
    "coords": [
      [
        12.9342374,
        77.6314081
      ],
      [
        12.9344384,
        77.6316133
      ],
      [
        12.9346281,
        77.6318071
      ]
    ]
  },
  {
    "id": "r715",
    "name": "4th Main Road",
    "highway": "residential",
    "from": "n660",
    "to": "n659",
    "distance": 0.07,
    "status": "red",
    "coords": [
      [
        12.9342209,
        77.6322468
      ],
      [
        12.9346281,
        77.6318071
      ]
    ]
  },
  {
    "id": "r716",
    "name": "4th Main Road",
    "highway": "residential",
    "from": "n659",
    "to": "n661",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9346281,
        77.6318071
      ],
      [
        12.9348696,
        77.6315494
      ]
    ]
  },
  {
    "id": "r717",
    "name": "4th Main Road",
    "highway": "residential",
    "from": "n661",
    "to": "n662",
    "distance": 0.04,
    "status": "red",
    "coords": [
      [
        12.9348696,
        77.6315494
      ],
      [
        12.9350992,
        77.6313101
      ]
    ]
  },
  {
    "id": "r718",
    "name": "3rd Cross Road",
    "highway": "residential",
    "from": "n663",
    "to": "n661",
    "distance": 0.11,
    "status": "yellow",
    "coords": [
      [
        12.9342224,
        77.6308248
      ],
      [
        12.9348696,
        77.6315494
      ]
    ]
  },
  {
    "id": "r719",
    "name": "7th Cross Road",
    "highway": "residential",
    "from": "n449",
    "to": "n664",
    "distance": 0.04,
    "status": "yellow",
    "coords": [
      [
        12.9345347,
        77.6336626
      ],
      [
        12.9347556,
        77.6339058
      ]
    ]
  },
  {
    "id": "r720",
    "name": "7th Cross Road",
    "highway": "residential",
    "from": "n664",
    "to": "n665",
    "distance": 0.03,
    "status": "red",
    "coords": [
      [
        12.9347556,
        77.6339058
      ],
      [
        12.9349288,
        77.634092
      ]
    ]
  },
  {
    "id": "r721",
    "name": "9th Main Road",
    "highway": "residential",
    "from": "n444",
    "to": "n665",
    "distance": 0.06,
    "status": "green",
    "coords": [
      [
        12.9346027,
        77.6344863
      ],
      [
        12.9349288,
        77.634092
      ]
    ]
  },
  {
    "id": "r722",
    "name": "7th Cross Road",
    "highway": "residential",
    "from": "n665",
    "to": "n666",
    "distance": 0.05,
    "status": "yellow",
    "coords": [
      [
        12.9349288,
        77.634092
      ],
      [
        12.9350251,
        77.6345044
      ]
    ]
  },
  {
    "id": "r723",
    "name": "8th Main Road",
    "highway": "residential",
    "from": "n443",
    "to": "n664",
    "distance": 0.06,
    "status": "green",
    "coords": [
      [
        12.9343933,
        77.6343045
      ],
      [
        12.9347556,
        77.6339058
      ]
    ]
  },
  {
    "id": "r724",
    "name": "4th Cross Road",
    "highway": "residential",
    "from": "n667",
    "to": "n668",
    "distance": 0.18,
    "status": "green",
    "coords": [
      [
        12.9266437,
        77.6131001
      ],
      [
        12.926623,
        77.6131997
      ],
      [
        12.9265036,
        77.6137429
      ],
      [
        12.9265154,
        77.613766
      ],
      [
        12.9264909,
        77.6138952
      ],
      [
        12.9264838,
        77.6139326
      ],
      [
        12.9263461,
        77.6147213
      ]
    ]
  },
  {
    "id": "r725",
    "name": "3rd Cross Road",
    "highway": "residential",
    "from": "n52",
    "to": "n669",
    "distance": 0.36,
    "status": "green",
    "coords": [
      [
        12.9281564,
        77.6369485
      ],
      [
        12.9284297,
        77.6371035
      ],
      [
        12.9280762,
        77.6378163
      ],
      [
        12.9279327,
        77.6380721
      ],
      [
        12.9276669,
        77.6385459
      ],
      [
        12.927154,
        77.6395094
      ],
      [
        12.9270435,
        77.6397144
      ]
    ]
  },
  {
    "id": "r726",
    "name": "20th C Cross Road",
    "highway": "residential",
    "from": "n490",
    "to": "n670",
    "distance": 0.2,
    "status": "green",
    "coords": [
      [
        12.9430497,
        77.6283953
      ],
      [
        12.9430933,
        77.6281387
      ],
      [
        12.9431367,
        77.6278911
      ],
      [
        12.9431801,
        77.6276288
      ],
      [
        12.9432738,
        77.6273506
      ],
      [
        12.943337,
        77.6271501
      ],
      [
        12.9433382,
        77.6271384
      ],
      [
        12.9433358,
        77.6271286
      ],
      [
        12.943147,
        77.6270513
      ],
      [
        12.9431378,
        77.6270396
      ],
      [
        12.9431368,
        77.6270248
      ],
      [
        12.9431538,
        77.6269802
      ],
      [
        12.9432154,
        77.6267458
      ]
    ]
  },
  {
    "id": "r727",
    "name": "20th C Cross Road",
    "highway": "residential",
    "from": "n670",
    "to": "n671",
    "distance": 0.03,
    "status": "green",
    "coords": [
      [
        12.9432154,
        77.6267458
      ],
      [
        12.9432811,
        77.6264502
      ]
    ]
  },
  {
    "id": "r728",
    "name": "20 I Cross Road",
    "highway": "residential",
    "from": "n495",
    "to": "n672",
    "distance": 0.17,
    "status": "yellow",
    "coords": [
      [
        12.9418184,
        77.6279371
      ],
      [
        12.9418096,
        77.6277896
      ],
      [
        12.9417747,
        77.6275417
      ],
      [
        12.9417538,
        77.6274149
      ],
      [
        12.9416751,
        77.6269846
      ],
      [
        12.9416783,
        77.6268762
      ],
      [
        12.9417099,
        77.6266233
      ],
      [
        12.9417352,
        77.6264176
      ]
    ]
  },
  {
    "id": "r729",
    "name": "20J Cross Road",
    "highway": "residential",
    "from": "n496",
    "to": "n673",
    "distance": 0.1,
    "status": "yellow",
    "coords": [
      [
        12.9415993,
        77.6278974
      ],
      [
        12.9415941,
        77.62778
      ],
      [
        12.9415583,
        77.6275574
      ],
      [
        12.9415114,
        77.6273349
      ],
      [
        12.9414352,
        77.6269956
      ]
    ]
  },
  {
    "id": "r730",
    "name": "20J Cross Road",
    "highway": "residential",
    "from": "n496",
    "to": "n674",
    "distance": 0.1,
    "status": "yellow",
    "coords": [
      [
        12.9415993,
        77.6278974
      ],
      [
        12.9415739,
        77.6280534
      ],
      [
        12.9415298,
        77.628317
      ],
      [
        12.941533,
        77.6283783
      ],
      [
        12.9415436,
        77.6284363
      ],
      [
        12.9415457,
        77.6284739
      ],
      [
        12.941502,
        77.6288303
      ]
    ]
  },
  {
    "id": "r731",
    "name": "20H Cross Road",
    "highway": "residential",
    "from": "n494",
    "to": "n625",
    "distance": 0.13,
    "status": "yellow",
    "coords": [
      [
        12.9420968,
        77.6279918
      ],
      [
        12.9420638,
        77.6282053
      ],
      [
        12.9419364,
        77.6288672
      ],
      [
        12.9418952,
        77.6291403
      ]
    ]
  },
  {
    "id": "r732",
    "name": "20G Cross Road",
    "highway": "residential",
    "from": "n670",
    "to": "n493",
    "distance": 0.27,
    "status": "green",
    "coords": [
      [
        12.9432154,
        77.6267458
      ],
      [
        12.9429965,
        77.6266962
      ],
      [
        12.9424508,
        77.6265802
      ],
      [
        12.9423596,
        77.6265737
      ],
      [
        12.9422547,
        77.6265738
      ],
      [
        12.9422846,
        77.6269927
      ],
      [
        12.9423173,
        77.6273477
      ],
      [
        12.9423488,
        77.6276908
      ],
      [
        12.9423737,
        77.6280555
      ]
    ]
  },
  {
    "id": "r733",
    "name": "20H Cross Road",
    "highway": "residential",
    "from": "n675",
    "to": "n494",
    "distance": 0.18,
    "status": "green",
    "coords": [
      [
        12.9420102,
        77.626318
      ],
      [
        12.9420019,
        77.6266077
      ],
      [
        12.9420228,
        77.6269397
      ],
      [
        12.9420565,
        77.6272781
      ],
      [
        12.9420621,
        77.6273068
      ],
      [
        12.9420801,
        77.6273949
      ],
      [
        12.942084,
        77.6274231
      ],
      [
        12.9421049,
        77.627694
      ],
      [
        12.9421074,
        77.6278132
      ],
      [
        12.9420968,
        77.6279918
      ]
    ]
  },
  {
    "id": "r734",
    "name": "1st A Main Road",
    "highway": "residential",
    "from": "n676",
    "to": "n677",
    "distance": 0.25,
    "status": "green",
    "coords": [
      [
        12.9272439,
        77.6381151
      ],
      [
        12.9270835,
        77.6380888
      ],
      [
        12.9262159,
        77.6379464
      ],
      [
        12.9257992,
        77.637878
      ],
      [
        12.9249877,
        77.6377334
      ]
    ]
  },
  {
    "id": "r735",
    "name": "4th Main Road",
    "highway": "residential",
    "from": "n678",
    "to": "n679",
    "distance": 0.08,
    "status": "green",
    "coords": [
      [
        12.9268965,
        77.6079349
      ],
      [
        12.9270428,
        77.6079697
      ],
      [
        12.9271715,
        77.6079882
      ],
      [
        12.9273047,
        77.6080154
      ],
      [
        12.9275775,
        77.6080496
      ]
    ]
  },
  {
    "id": "r736",
    "name": "4th A Cross Road",
    "highway": "residential",
    "from": "n680",
    "to": "n681",
    "distance": 0.12,
    "status": "green",
    "coords": [
      [
        12.9274138,
        77.6120564
      ],
      [
        12.9274034,
        77.6131508
      ]
    ]
  },
  {
    "id": "r737",
    "name": "4th B Cross Road",
    "highway": "residential",
    "from": "n682",
    "to": "n683",
    "distance": 0.12,
    "status": "green",
    "coords": [
      [
        12.9271132,
        77.6120001
      ],
      [
        12.9271026,
        77.6131307
      ]
    ]
  },
  {
    "id": "r738",
    "name": "4th C Cross",
    "highway": "residential",
    "from": "n684",
    "to": "n685",
    "distance": 0.13,
    "status": "green",
    "coords": [
      [
        12.9268182,
        77.6119436
      ],
      [
        12.9268031,
        77.6131126
      ]
    ]
  },
  {
    "id": "r739",
    "name": "4th D Cross",
    "highway": "residential",
    "from": "n686",
    "to": "n687",
    "distance": 0.12,
    "status": "yellow",
    "coords": [
      [
        12.9265406,
        77.6119384
      ],
      [
        12.9265396,
        77.6119951
      ],
      [
        12.9265199,
        77.6130848
      ]
    ]
  },
  {
    "id": "r740",
    "name": "4th E Cross",
    "highway": "residential",
    "from": "n688",
    "to": "n689",
    "distance": 0.11,
    "status": "yellow",
    "coords": [
      [
        12.9263747,
        77.6120564
      ],
      [
        12.9263666,
        77.6128459
      ],
      [
        12.9263649,
        77.6129735
      ],
      [
        12.926364,
        77.6130751
      ]
    ]
  },
  {
    "id": "r741",
    "name": "1st B Cross Road",
    "highway": "residential",
    "from": "n690",
    "to": "n647",
    "distance": 0.05,
    "status": "yellow",
    "coords": [
      [
        12.9271135,
        77.6153268
      ],
      [
        12.927006,
        77.6157421
      ]
    ]
  },
  {
    "id": "r742",
    "name": "Hosur Road",
    "highway": "primary",
    "from": "n691",
    "to": "n692",
    "distance": 0.19,
    "status": "red",
    "coords": [
      [
        12.9313406,
        77.6140453
      ],
      [
        12.931146,
        77.6141692
      ],
      [
        12.9307504,
        77.6143862
      ],
      [
        12.9302149,
        77.6147313
      ],
      [
        12.9301741,
        77.6147568
      ],
      [
        12.9299865,
        77.6148743
      ],
      [
        12.9298694,
        77.6149477
      ]
    ]
  },
  {
    "id": "r743",
    "name": "17th F4 Main Rd",
    "highway": "residential",
    "from": "n313",
    "to": "n334",
    "distance": 0.17,
    "status": "green",
    "coords": [
      [
        12.9394716,
        77.622999
      ],
      [
        12.940457,
        77.6242461
      ]
    ]
  },
  {
    "id": "r744",
    "name": "80 Feet Road",
    "highway": "secondary",
    "from": "n693",
    "to": "n327",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9424807,
        77.6227384
      ],
      [
        12.9424392,
        77.6226933
      ],
      [
        12.942244,
        77.6224302
      ]
    ]
  },
  {
    "id": "r745",
    "name": "80 Feet Road",
    "highway": "secondary",
    "from": "n327",
    "to": "n615",
    "distance": 0.08,
    "status": "red",
    "coords": [
      [
        12.942244,
        77.6224302
      ],
      [
        12.941811,
        77.621858
      ],
      [
        12.9417991,
        77.6218422
      ]
    ]
  },
  {
    "id": "r746",
    "name": "80 Feet Road",
    "highway": "secondary",
    "from": "n615",
    "to": "n321",
    "distance": 0.23,
    "status": "red",
    "coords": [
      [
        12.9417991,
        77.6218422
      ],
      [
        12.9416236,
        77.6216098
      ],
      [
        12.9415144,
        77.621464
      ],
      [
        12.9414323,
        77.6213546
      ],
      [
        12.9413858,
        77.6212925
      ],
      [
        12.9409022,
        77.6206338
      ],
      [
        12.9404644,
        77.6202825
      ]
    ]
  },
  {
    "id": "r747",
    "name": "80 Feet Road",
    "highway": "secondary",
    "from": "n321",
    "to": "n377",
    "distance": 0.19,
    "status": "green",
    "coords": [
      [
        12.9404644,
        77.6202825
      ],
      [
        12.9400119,
        77.6199739
      ],
      [
        12.9390917,
        77.6192822
      ]
    ]
  },
  {
    "id": "r748",
    "name": "80 Feet Road",
    "highway": "secondary",
    "from": "n377",
    "to": "n19",
    "distance": 0.16,
    "status": "yellow",
    "coords": [
      [
        12.9390917,
        77.6192822
      ],
      [
        12.9386577,
        77.6190283
      ],
      [
        12.9377707,
        77.6186529
      ]
    ]
  },
  {
    "id": "r749",
    "name": "80 Feet Road",
    "highway": "secondary",
    "from": "n19",
    "to": "n73",
    "distance": 0.08,
    "status": "green",
    "coords": [
      [
        12.9377707,
        77.6186529
      ],
      [
        12.9371262,
        77.6184044
      ],
      [
        12.9370957,
        77.6183889
      ],
      [
        12.9370655,
        77.6183692
      ]
    ]
  },
  {
    "id": "r750",
    "name": "80 Feet Road",
    "highway": "secondary",
    "from": "n73",
    "to": "n694",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9370655,
        77.6183692
      ],
      [
        12.9368302,
        77.6181479
      ]
    ]
  },
  {
    "id": "r751",
    "name": "80 Feet Road",
    "highway": "secondary",
    "from": "n694",
    "to": "n695",
    "distance": 0.12,
    "status": "green",
    "coords": [
      [
        12.9368302,
        77.6181479
      ],
      [
        12.936524,
        77.6178281
      ],
      [
        12.9364439,
        77.6177121
      ],
      [
        12.9363831,
        77.6176077
      ],
      [
        12.9363577,
        77.6175517
      ],
      [
        12.9363361,
        77.6174974
      ],
      [
        12.9363173,
        77.6174357
      ],
      [
        12.9363063,
        77.6173756
      ],
      [
        12.9362976,
        77.6173051
      ],
      [
        12.9362932,
        77.6172464
      ]
    ]
  },
  {
    "id": "r752",
    "name": "80 Feet Road",
    "highway": "secondary",
    "from": "n696",
    "to": "n697",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9359065,
        77.6152742
      ],
      [
        12.9360055,
        77.6154589
      ],
      [
        12.9360828,
        77.6156251
      ]
    ]
  },
  {
    "id": "r753",
    "name": "80 Feet Road",
    "highway": "secondary",
    "from": "n698",
    "to": "n699",
    "distance": 0.29,
    "status": "yellow",
    "coords": [
      [
        12.9357875,
        77.6152125
      ],
      [
        12.9349827,
        77.6136581
      ],
      [
        12.9348289,
        77.613321
      ],
      [
        12.9347475,
        77.6131575
      ],
      [
        12.9345895,
        77.612853
      ]
    ]
  },
  {
    "id": "r754",
    "name": "17th Main Road",
    "highway": "residential",
    "from": "n695",
    "to": "n256",
    "distance": 0.06,
    "status": "green",
    "coords": [
      [
        12.9362932,
        77.6172464
      ],
      [
        12.9362593,
        77.6172376
      ],
      [
        12.9357818,
        77.6171828
      ]
    ]
  },
  {
    "id": "r755",
    "name": "17th Main Road",
    "highway": "residential",
    "from": "n256",
    "to": "n83",
    "distance": 0.12,
    "status": "green",
    "coords": [
      [
        12.9357818,
        77.6171828
      ],
      [
        12.9347036,
        77.6169766
      ]
    ]
  },
  {
    "id": "r756",
    "name": "17th Main Road",
    "highway": "residential",
    "from": "n83",
    "to": "n700",
    "distance": 0.06,
    "status": "green",
    "coords": [
      [
        12.9347036,
        77.6169766
      ],
      [
        12.9341301,
        77.6168851
      ]
    ]
  },
  {
    "id": "r757",
    "name": "80 Feet Road",
    "highway": "secondary",
    "from": "n695",
    "to": "n258",
    "distance": 0.05,
    "status": "green",
    "coords": [
      [
        12.9362932,
        77.6172464
      ],
      [
        12.9362825,
        77.6167973
      ]
    ]
  },
  {
    "id": "r758",
    "name": "80 Feet Road",
    "highway": "secondary",
    "from": "n258",
    "to": "n80",
    "distance": 0.11,
    "status": "yellow",
    "coords": [
      [
        12.9362825,
        77.6167973
      ],
      [
        12.9362837,
        77.6164389
      ],
      [
        12.9362782,
        77.616364
      ],
      [
        12.9362737,
        77.6163169
      ],
      [
        12.9362644,
        77.6162643
      ],
      [
        12.9362477,
        77.6162137
      ],
      [
        12.9360934,
        77.615861
      ]
    ]
  },
  {
    "id": "r759",
    "name": "80 Feet Road",
    "highway": "secondary",
    "from": "n80",
    "to": "n16",
    "distance": 0.07,
    "status": "yellow",
    "coords": [
      [
        12.9360934,
        77.615861
      ],
      [
        12.9360087,
        77.6156626
      ],
      [
        12.9359379,
        77.6155118
      ],
      [
        12.9358648,
        77.6153569
      ],
      [
        12.9358402,
        77.6153192
      ]
    ]
  },
  {
    "id": "r760",
    "name": "1st Main Road",
    "highway": "residential",
    "from": "n701",
    "to": "n702",
    "distance": 0.14,
    "status": "green",
    "coords": [
      [
        12.9401574,
        77.6271281
      ],
      [
        12.9401641,
        77.6271752
      ],
      [
        12.9401623,
        77.6271789
      ],
      [
        12.9401576,
        77.6271824
      ],
      [
        12.939884,
        77.627257
      ],
      [
        12.9396052,
        77.6273304
      ],
      [
        12.9393018,
        77.6274005
      ],
      [
        12.9392253,
        77.6274182
      ],
      [
        12.9391813,
        77.6274291
      ],
      [
        12.9392294,
        77.6276529
      ]
    ]
  },
  {
    "id": "r761",
    "name": "1st Cross Road",
    "highway": "residential",
    "from": "n564",
    "to": "n703",
    "distance": 0.05,
    "status": "green",
    "coords": [
      [
        12.9395006,
        77.6300862
      ],
      [
        12.9394998,
        77.6299822
      ],
      [
        12.9394805,
        77.6297705
      ],
      [
        12.939471,
        77.6296655
      ]
    ]
  },
  {
    "id": "r762",
    "name": "1st Cross Road",
    "highway": "residential",
    "from": "n703",
    "to": "n2",
    "distance": 0.09,
    "status": "green",
    "coords": [
      [
        12.939471,
        77.6296655
      ],
      [
        12.9394546,
        77.6295035
      ],
      [
        12.9394416,
        77.6293744
      ],
      [
        12.9394172,
        77.6292408
      ],
      [
        12.9393502,
        77.6288736
      ]
    ]
  },
  {
    "id": "r763",
    "name": "1st Cross Road",
    "highway": "residential",
    "from": "n2",
    "to": "n6",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9393502,
        77.6288736
      ],
      [
        12.9393014,
        77.6285506
      ]
    ]
  },
  {
    "id": "r764",
    "name": "1st Cross Road",
    "highway": "residential",
    "from": "n6",
    "to": "n704",
    "distance": 0.02,
    "status": "red",
    "coords": [
      [
        12.9393014,
        77.6285506
      ],
      [
        12.9392673,
        77.6283719
      ]
    ]
  },
  {
    "id": "r765",
    "name": "1st Cross Road",
    "highway": "residential",
    "from": "n704",
    "to": "n621",
    "distance": 0.02,
    "status": "green",
    "coords": [
      [
        12.9392673,
        77.6283719
      ],
      [
        12.9392463,
        77.628232
      ]
    ]
  },
  {
    "id": "r766",
    "name": "4th Main Road",
    "highway": "residential",
    "from": "n703",
    "to": "n705",
    "distance": 0.1,
    "status": "green",
    "coords": [
      [
        12.939471,
        77.6296655
      ],
      [
        12.9391734,
        77.6296712
      ],
      [
        12.9385483,
        77.6296832
      ]
    ]
  },
  {
    "id": "r767",
    "name": "2nd Cross Road",
    "highway": "residential",
    "from": "n622",
    "to": "n7",
    "distance": 0.03,
    "status": "green",
    "coords": [
      [
        12.9400714,
        77.628085
      ],
      [
        12.9401189,
        77.6283899
      ]
    ]
  },
  {
    "id": "r768",
    "name": "2nd Cross Road",
    "highway": "residential",
    "from": "n7",
    "to": "n1",
    "distance": 0.03,
    "status": "green",
    "coords": [
      [
        12.9401189,
        77.6283899
      ],
      [
        12.9401677,
        77.6286928
      ]
    ]
  },
  {
    "id": "r769",
    "name": "2nd Cross Road",
    "highway": "residential",
    "from": "n1",
    "to": "n542",
    "distance": 0.05,
    "status": "green",
    "coords": [
      [
        12.9401677,
        77.6286928
      ],
      [
        12.9401749,
        77.6291581
      ]
    ]
  },
  {
    "id": "r770",
    "name": "2nd Cross Road",
    "highway": "residential",
    "from": "n542",
    "to": "n565",
    "distance": 0.04,
    "status": "yellow",
    "coords": [
      [
        12.9401749,
        77.6291581
      ],
      [
        12.9402107,
        77.6295353
      ]
    ]
  },
  {
    "id": "r771",
    "name": "2nd Cross Road",
    "highway": "residential",
    "from": "n565",
    "to": "n706",
    "distance": 0.12,
    "status": "green",
    "coords": [
      [
        12.9402107,
        77.6295353
      ],
      [
        12.9402877,
        77.629956
      ],
      [
        12.9403221,
        77.6303253
      ],
      [
        12.9403086,
        77.6305205
      ],
      [
        12.9403135,
        77.6306735
      ]
    ]
  },
  {
    "id": "r772",
    "name": "7th Main Road",
    "highway": "residential",
    "from": "n190",
    "to": "n561",
    "distance": 0.05,
    "status": "red",
    "coords": [
      [
        12.9300751,
        77.6336189
      ],
      [
        12.9301072,
        77.6334257
      ],
      [
        12.9300611,
        77.6332113
      ],
      [
        12.9300545,
        77.6331602
      ]
    ]
  },
  {
    "id": "r773",
    "name": "1st Cross Road",
    "highway": "residential",
    "from": "n510",
    "to": "n707",
    "distance": 0.02,
    "status": "green",
    "coords": [
      [
        12.9347714,
        77.6300679
      ],
      [
        12.9346844,
        77.6299342
      ]
    ]
  },
  {
    "id": "r774",
    "name": "1st Cross Road",
    "highway": "residential",
    "from": "n707",
    "to": "n559",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9346844,
        77.6299342
      ],
      [
        12.9346456,
        77.6299279
      ],
      [
        12.9345296,
        77.6297801
      ],
      [
        12.9344983,
        77.6297402
      ],
      [
        12.9344595,
        77.6296908
      ]
    ]
  },
  {
    "id": "r775",
    "name": "1st Cross Road",
    "highway": "residential",
    "from": "n559",
    "to": "n123",
    "distance": 0.01,
    "status": "green",
    "coords": [
      [
        12.9344595,
        77.6296908
      ],
      [
        12.934432,
        77.6296147
      ]
    ]
  },
  {
    "id": "r776",
    "name": "Sarjapura Road",
    "highway": "primary",
    "from": "n708",
    "to": "n519",
    "distance": 0.07,
    "status": "green",
    "coords": [
      [
        12.9250709,
        77.6373698
      ],
      [
        12.9251429,
        77.6371461
      ],
      [
        12.9251913,
        77.6369691
      ],
      [
        12.9252213,
        77.6368055
      ],
      [
        12.9252241,
        77.6367015
      ]
    ]
  },
  {
    "id": "r777",
    "name": "Sarjapura Road",
    "highway": "primary",
    "from": "n519",
    "to": "n709",
    "distance": 0.18,
    "status": "yellow",
    "coords": [
      [
        12.9252241,
        77.6367015
      ],
      [
        12.9251744,
        77.6363876
      ],
      [
        12.9251318,
        77.6360881
      ],
      [
        12.9250415,
        77.6354542
      ],
      [
        12.9250325,
        77.6354027
      ],
      [
        12.9249774,
        77.6350856
      ]
    ]
  },
  {
    "id": "r778",
    "name": "1st Ashwini Street",
    "highway": "residential",
    "from": "n603",
    "to": "n704",
    "distance": 0.11,
    "status": "green",
    "coords": [
      [
        12.9383498,
        77.6287044
      ],
      [
        12.9385608,
        77.6286607
      ],
      [
        12.9388777,
        77.6285895
      ],
      [
        12.9389979,
        77.6285064
      ],
      [
        12.939126,
        77.6284339
      ],
      [
        12.9392673,
        77.6283719
      ]
    ]
  },
  {
    "id": "r779",
    "name": "Hosur Road",
    "highway": "primary",
    "from": "n710",
    "to": "n691",
    "distance": 0.04,
    "status": "yellow",
    "coords": [
      [
        12.9316547,
        77.6138662
      ],
      [
        12.9313406,
        77.6140453
      ]
    ]
  },
  {
    "id": "r780",
    "name": "80 Feet Road",
    "highway": "secondary",
    "from": "n161",
    "to": "n711",
    "distance": 0.25,
    "status": "red",
    "coords": [
      [
        12.9303988,
        77.6330477
      ],
      [
        12.9308166,
        77.6328892
      ],
      [
        12.9314668,
        77.6325864
      ],
      [
        12.9316389,
        77.6324379
      ],
      [
        12.9320467,
        77.6320015
      ],
      [
        12.93222,
        77.6318336
      ]
    ]
  },
  {
    "id": "r781",
    "name": "80 Feet Road",
    "highway": "secondary",
    "from": "n711",
    "to": "n162",
    "distance": 0.14,
    "status": "green",
    "coords": [
      [
        12.93222,
        77.6318336
      ],
      [
        12.9325276,
        77.6315035
      ],
      [
        12.9330766,
        77.6309441
      ]
    ]
  },
  {
    "id": "r782",
    "name": "80 Feet Road",
    "highway": "secondary",
    "from": "n162",
    "to": "n462",
    "distance": 0.13,
    "status": "green",
    "coords": [
      [
        12.9330766,
        77.6309441
      ],
      [
        12.9336336,
        77.6304016
      ],
      [
        12.9336568,
        77.630379
      ],
      [
        12.9336915,
        77.6303457
      ],
      [
        12.9339015,
        77.630151
      ]
    ]
  },
  {
    "id": "r783",
    "name": "80 Feet Road",
    "highway": "secondary",
    "from": "n462",
    "to": "n123",
    "distance": 0.08,
    "status": "green",
    "coords": [
      [
        12.9339015,
        77.630151
      ],
      [
        12.9342983,
        77.6297442
      ],
      [
        12.9343073,
        77.6297354
      ],
      [
        12.934432,
        77.6296147
      ]
    ]
  },
  {
    "id": "r784",
    "name": "80 Feet Road",
    "highway": "secondary",
    "from": "n123",
    "to": "n140",
    "distance": 0.14,
    "status": "green",
    "coords": [
      [
        12.934432,
        77.6296147
      ],
      [
        12.9344684,
        77.6295795
      ],
      [
        12.9347439,
        77.6293144
      ],
      [
        12.9347948,
        77.6292645
      ],
      [
        12.935357,
        77.6287135
      ]
    ]
  },
  {
    "id": "r785",
    "name": "80 Feet Road",
    "highway": "secondary",
    "from": "n140",
    "to": "n135",
    "distance": 0.1,
    "status": "green",
    "coords": [
      [
        12.935357,
        77.6287135
      ],
      [
        12.9359641,
        77.6280956
      ]
    ]
  },
  {
    "id": "r786",
    "name": "80 Feet Road",
    "highway": "secondary",
    "from": "n135",
    "to": "n94",
    "distance": 0.19,
    "status": "green",
    "coords": [
      [
        12.9359641,
        77.6280956
      ],
      [
        12.9363386,
        77.62773
      ],
      [
        12.9367444,
        77.6273532
      ],
      [
        12.9371207,
        77.6270122
      ],
      [
        12.937197,
        77.626942
      ]
    ]
  },
  {
    "id": "r787",
    "name": "8th A Main Road",
    "highway": "residential",
    "from": "n168",
    "to": "n711",
    "distance": 0.02,
    "status": "yellow",
    "coords": [
      [
        12.9321027,
        77.6317481
      ],
      [
        12.9321866,
        77.6318092
      ],
      [
        12.93222,
        77.6318336
      ]
    ]
  },
  {
    "id": "r788",
    "name": "2nd Cross Road",
    "highway": "residential",
    "from": "n572",
    "to": "n712",
    "distance": 0.08,
    "status": "red",
    "coords": [
      [
        12.9251337,
        77.6166295
      ],
      [
        12.9255502,
        77.6167072
      ],
      [
        12.9257325,
        77.6167412
      ],
      [
        12.9258479,
        77.6167643
      ]
    ]
  },
  {
    "id": "r789",
    "name": "3rd Cross Road",
    "highway": "residential",
    "from": "n713",
    "to": "n562",
    "distance": 0.05,
    "status": "green",
    "coords": [
      [
        12.9385597,
        77.6308242
      ],
      [
        12.9390131,
        77.6307889
      ]
    ]
  },
  {
    "id": "r790",
    "name": "2nd Cross Road",
    "highway": "residential",
    "from": "n714",
    "to": "n715",
    "distance": 0.18,
    "status": "yellow",
    "coords": [
      [
        12.9385683,
        77.6311049
      ],
      [
        12.9391186,
        77.6310859
      ],
      [
        12.9397443,
        77.6310644
      ],
      [
        12.9402009,
        77.6310728
      ]
    ]
  },
  {
    "id": "r791",
    "name": "3rd Cross Road",
    "highway": "residential",
    "from": "n563",
    "to": "n706",
    "distance": 0.14,
    "status": "yellow",
    "coords": [
      [
        12.9391013,
        77.6306221
      ],
      [
        12.9394119,
        77.630638
      ],
      [
        12.9396859,
        77.6306492
      ],
      [
        12.939779,
        77.6306872
      ],
      [
        12.9400944,
        77.6306786
      ],
      [
        12.9401722,
        77.6306769
      ],
      [
        12.9403135,
        77.6306735
      ]
    ]
  },
  {
    "id": "r792",
    "name": "3rd Cross Road",
    "highway": "residential",
    "from": "n706",
    "to": "n431",
    "distance": 0.05,
    "status": "green",
    "coords": [
      [
        12.9403135,
        77.6306735
      ],
      [
        12.9408034,
        77.630633
      ]
    ]
  },
  {
    "id": "r793",
    "name": "2nd Cross Road",
    "highway": "residential",
    "from": "n715",
    "to": "n432",
    "distance": 0.07,
    "status": "green",
    "coords": [
      [
        12.9402009,
        77.6310728
      ],
      [
        12.9405617,
        77.6310745
      ],
      [
        12.9408329,
        77.6310758
      ]
    ]
  },
  {
    "id": "r794",
    "name": "2nd Main Road",
    "highway": "residential",
    "from": "n716",
    "to": "n717",
    "distance": 0.14,
    "status": "green",
    "coords": [
      [
        12.9359701,
        77.6306964
      ],
      [
        12.9365006,
        77.6310084
      ],
      [
        12.9366954,
        77.6311403
      ],
      [
        12.936843,
        77.6312149
      ],
      [
        12.9370208,
        77.6313329
      ]
    ]
  },
  {
    "id": "r795",
    "name": "6th Cross Road",
    "highway": "residential",
    "from": "n718",
    "to": "n719",
    "distance": 0.11,
    "status": "green",
    "coords": [
      [
        12.9310431,
        77.6362726
      ],
      [
        12.9316604,
        77.636498
      ],
      [
        12.9315457,
        77.6368066
      ]
    ]
  },
  {
    "id": "r796",
    "name": "2nd Cross Road",
    "highway": "residential",
    "from": "n720",
    "to": "n419",
    "distance": 0.12,
    "status": "green",
    "coords": [
      [
        12.9421843,
        77.6140956
      ],
      [
        12.9418585,
        77.614647
      ],
      [
        12.9416434,
        77.615035
      ]
    ]
  },
  {
    "id": "r797",
    "name": "3rd Cross Road",
    "highway": "residential",
    "from": "n420",
    "to": "n721",
    "distance": 0.05,
    "status": "green",
    "coords": [
      [
        12.9413527,
        77.6148643
      ],
      [
        12.9415302,
        77.6145637
      ],
      [
        12.9415721,
        77.6144972
      ]
    ]
  },
  {
    "id": "r798",
    "name": "Temple Trees Rd, Cauvery Colony",
    "highway": "residential",
    "from": "n722",
    "to": "n723",
    "distance": 0.29,
    "status": "green",
    "coords": [
      [
        12.9339455,
        77.6364724
      ],
      [
        12.9331941,
        77.6359634
      ],
      [
        12.9327448,
        77.6356922
      ],
      [
        12.9322969,
        77.6354201
      ],
      [
        12.9316696,
        77.6350793
      ]
    ]
  },
  {
    "id": "r799",
    "name": "13th Cross Road",
    "highway": "residential",
    "from": "n724",
    "to": "n725",
    "distance": 0.49,
    "status": "green",
    "coords": [
      [
        12.9300685,
        77.6381802
      ],
      [
        12.9300635,
        77.6381962
      ],
      [
        12.9300486,
        77.638469
      ],
      [
        12.9300223,
        77.6385985
      ],
      [
        12.9298754,
        77.6388736
      ],
      [
        12.929595,
        77.6393815
      ],
      [
        12.9292256,
        77.6400556
      ],
      [
        12.9289127,
        77.6406477
      ],
      [
        12.9289002,
        77.6406692
      ],
      [
        12.9288872,
        77.640686
      ],
      [
        12.928861,
        77.640698
      ],
      [
        12.9288414,
        77.6406994
      ],
      [
        12.9279201,
        77.6401416
      ],
      [
        12.9275755,
        77.6399329
      ],
      [
        12.9274783,
        77.6398663
      ]
    ]
  },
  {
    "id": "r800",
    "name": "1st Main Road",
    "highway": "residential",
    "from": "n726",
    "to": "n727",
    "distance": 0.06,
    "status": "green",
    "coords": [
      [
        12.9315908,
        77.6339579
      ],
      [
        12.931653,
        77.6339898
      ],
      [
        12.9321084,
        77.6342234
      ]
    ]
  },
  {
    "id": "r801",
    "name": "1st Main Road",
    "highway": "residential",
    "from": "n728",
    "to": "n729",
    "distance": 0.4,
    "status": "green",
    "coords": [
      [
        12.9314828,
        77.6339643
      ],
      [
        12.9307061,
        77.6354421
      ],
      [
        12.9303855,
        77.6358731
      ],
      [
        12.9296915,
        77.6371089
      ]
    ]
  },
  {
    "id": "r802",
    "name": "Tavarekere Main Road",
    "highway": "secondary",
    "from": "n730",
    "to": "n731",
    "distance": 0.02,
    "status": "yellow",
    "coords": [
      [
        12.9250291,
        77.6088886
      ],
      [
        12.9249803,
        77.6089259
      ],
      [
        12.924909,
        77.6089752
      ]
    ]
  },
  {
    "id": "r803",
    "name": "Hosur Road",
    "highway": "primary_link",
    "from": "n549",
    "to": "n732",
    "distance": 0.07,
    "status": "green",
    "coords": [
      [
        12.9245641,
        77.6179924
      ],
      [
        12.9246266,
        77.6179553
      ],
      [
        12.9250887,
        77.6176814
      ]
    ]
  },
  {
    "id": "r804",
    "name": "Hosur Road",
    "highway": "primary_link",
    "from": "n732",
    "to": "n733",
    "distance": 0.06,
    "status": "green",
    "coords": [
      [
        12.9250887,
        77.6176814
      ],
      [
        12.9255734,
        77.6173739
      ]
    ]
  },
  {
    "id": "r805",
    "name": "Hosur Road",
    "highway": "primary_link",
    "from": "n733",
    "to": "n581",
    "distance": 0.05,
    "status": "green",
    "coords": [
      [
        12.9255734,
        77.6173739
      ],
      [
        12.9257676,
        77.6172519
      ],
      [
        12.925979,
        77.6171909
      ]
    ]
  },
  {
    "id": "r806",
    "name": "Lakshmi Devi Temple Road",
    "highway": "residential",
    "from": "n386",
    "to": "n409",
    "distance": 0.08,
    "status": "green",
    "coords": [
      [
        12.9431513,
        77.6193994
      ],
      [
        12.9432935,
        77.6192192
      ],
      [
        12.943427,
        77.6189104
      ],
      [
        12.9434608,
        77.6187386
      ]
    ]
  },
  {
    "id": "r807",
    "name": "Lakshmi Devi Temple Road",
    "highway": "residential",
    "from": "n409",
    "to": "n423",
    "distance": 0.1,
    "status": "green",
    "coords": [
      [
        12.9434608,
        77.6187386
      ],
      [
        12.9434836,
        77.6184425
      ],
      [
        12.9434495,
        77.6182668
      ],
      [
        12.9434358,
        77.6181614
      ],
      [
        12.9434472,
        77.6180683
      ],
      [
        12.9434752,
        77.6179545
      ],
      [
        12.9435088,
        77.6178141
      ]
    ]
  },
  {
    "id": "r808",
    "name": "4th Cross Road",
    "highway": "residential",
    "from": "n734",
    "to": "n735",
    "distance": 0.13,
    "status": "green",
    "coords": [
      [
        12.9291644,
        77.6295456
      ],
      [
        12.9288886,
        77.630749
      ]
    ]
  },
  {
    "id": "r809",
    "name": "3rd Cross Road",
    "highway": "residential",
    "from": "n736",
    "to": "n737",
    "distance": 0.13,
    "status": "yellow",
    "coords": [
      [
        12.9285783,
        77.6306661
      ],
      [
        12.9288682,
        77.6295244
      ]
    ]
  },
  {
    "id": "r810",
    "name": "2nd Cross Road",
    "highway": "residential",
    "from": "n738",
    "to": "n739",
    "distance": 0.12,
    "status": "green",
    "coords": [
      [
        12.9285423,
        77.6295011
      ],
      [
        12.9282844,
        77.6305876
      ]
    ]
  },
  {
    "id": "r811",
    "name": "8th B Main Road",
    "highway": "residential",
    "from": "n197",
    "to": "n738",
    "distance": 0.04,
    "status": "yellow",
    "coords": [
      [
        12.9281964,
        77.6294763
      ],
      [
        12.9285423,
        77.6295011
      ]
    ]
  },
  {
    "id": "r812",
    "name": "8th B Main Road",
    "highway": "residential",
    "from": "n738",
    "to": "n737",
    "distance": 0.04,
    "status": "yellow",
    "coords": [
      [
        12.9285423,
        77.6295011
      ],
      [
        12.9288682,
        77.6295244
      ]
    ]
  },
  {
    "id": "r813",
    "name": "8th B Main Road",
    "highway": "residential",
    "from": "n737",
    "to": "n734",
    "distance": 0.03,
    "status": "yellow",
    "coords": [
      [
        12.9288682,
        77.6295244
      ],
      [
        12.9291644,
        77.6295456
      ]
    ]
  },
  {
    "id": "r814",
    "name": "8th B Main Road",
    "highway": "residential",
    "from": "n734",
    "to": "n193",
    "distance": 0.04,
    "status": "yellow",
    "coords": [
      [
        12.9291644,
        77.6295456
      ],
      [
        12.9294894,
        77.6295658
      ]
    ]
  },
  {
    "id": "r815",
    "name": "8th A Main Road",
    "highway": "residential",
    "from": "n194",
    "to": "n735",
    "distance": 0.03,
    "status": "yellow",
    "coords": [
      [
        12.9291929,
        77.6308262
      ],
      [
        12.9288886,
        77.630749
      ]
    ]
  },
  {
    "id": "r816",
    "name": "8th A Main Road",
    "highway": "residential",
    "from": "n735",
    "to": "n736",
    "distance": 0.04,
    "status": "red",
    "coords": [
      [
        12.9288886,
        77.630749
      ],
      [
        12.9285783,
        77.6306661
      ]
    ]
  },
  {
    "id": "r817",
    "name": "8th A Main Road",
    "highway": "residential",
    "from": "n736",
    "to": "n739",
    "distance": 0.03,
    "status": "red",
    "coords": [
      [
        12.9285783,
        77.6306661
      ],
      [
        12.9282844,
        77.6305876
      ]
    ]
  },
  {
    "id": "r818",
    "name": "8th A Main Road",
    "highway": "residential",
    "from": "n739",
    "to": "n198",
    "distance": 0.04,
    "status": "red",
    "coords": [
      [
        12.9282844,
        77.6305876
      ],
      [
        12.9279644,
        77.6305021
      ]
    ]
  },
  {
    "id": "r819",
    "name": "Sri Nivagalu Main Road",
    "highway": "residential",
    "from": "n740",
    "to": "n741",
    "distance": 0.12,
    "status": "green",
    "coords": [
      [
        12.9356307,
        77.6319337
      ],
      [
        12.9356413,
        77.6320068
      ],
      [
        12.9365667,
        77.6323085
      ]
    ]
  },
  {
    "id": "r820",
    "name": "2nd Cross Road",
    "highway": "residential",
    "from": "n662",
    "to": "n742",
    "distance": 0.11,
    "status": "green",
    "coords": [
      [
        12.9350992,
        77.6313101
      ],
      [
        12.9344795,
        77.6305642
      ]
    ]
  },
  {
    "id": "r821",
    "name": "1st C Cross Road",
    "highway": "residential",
    "from": "n646",
    "to": "n743",
    "distance": 0.05,
    "status": "green",
    "coords": [
      [
        12.9267412,
        77.6156603
      ],
      [
        12.9268361,
        77.6152349
      ]
    ]
  },
  {
    "id": "r822",
    "name": "1st Cross Road",
    "highway": "residential",
    "from": "n744",
    "to": "n648",
    "distance": 0.05,
    "status": "yellow",
    "coords": [
      [
        12.9273772,
        77.6154038
      ],
      [
        12.9272721,
        77.6158366
      ]
    ]
  },
  {
    "id": "r823",
    "name": "7th Cross Road",
    "highway": "tertiary",
    "from": "n516",
    "to": "n478",
    "distance": 0.01,
    "status": "green",
    "coords": [
      [
        12.9315406,
        77.622498
      ],
      [
        12.9314922,
        77.6226225
      ]
    ]
  },
  {
    "id": "r824",
    "name": "Mahayogi Vemana Road",
    "highway": "primary",
    "from": "n601",
    "to": "n94",
    "distance": 0.01,
    "status": "green",
    "coords": [
      [
        12.937249,
        77.6270053
      ],
      [
        12.937197,
        77.626942
      ]
    ]
  },
  {
    "id": "r825",
    "name": "80 Feet Road",
    "highway": "secondary",
    "from": "n33",
    "to": "n601",
    "distance": 0.01,
    "status": "red",
    "coords": [
      [
        12.9373325,
        77.6269369
      ],
      [
        12.937249,
        77.6270053
      ]
    ]
  },
  {
    "id": "r826",
    "name": "100 feet Road",
    "highway": "primary",
    "from": "n745",
    "to": "n33",
    "distance": 0.01,
    "status": "green",
    "coords": [
      [
        12.9372808,
        77.6268738
      ],
      [
        12.9373325,
        77.6269369
      ]
    ]
  },
  {
    "id": "r827",
    "name": "Inner Ring Road",
    "highway": "primary",
    "from": "n746",
    "to": "n747",
    "distance": 0.12,
    "status": "green",
    "coords": [
      [
        12.9384471,
        77.6327689
      ],
      [
        12.9384714,
        77.6317931
      ],
      [
        12.9384651,
        77.6316793
      ]
    ]
  },
  {
    "id": "r828",
    "name": "Inner Ring Road",
    "highway": "primary",
    "from": "n747",
    "to": "n748",
    "distance": 0.32,
    "status": "green",
    "coords": [
      [
        12.9384651,
        77.6316793
      ],
      [
        12.9384426,
        77.6311339
      ],
      [
        12.9384422,
        77.6308833
      ],
      [
        12.9384318,
        77.6305999
      ],
      [
        12.9384373,
        77.6303383
      ],
      [
        12.9384423,
        77.6301075
      ],
      [
        12.9384552,
        77.6296591
      ],
      [
        12.9384533,
        77.629489
      ],
      [
        12.9384337,
        77.6293303
      ],
      [
        12.9384034,
        77.629189
      ],
      [
        12.9382965,
        77.6288703
      ],
      [
        12.9382646,
        77.6287795
      ]
    ]
  },
  {
    "id": "r829",
    "name": "Inner Ring Road",
    "highway": "primary",
    "from": "n748",
    "to": "n599",
    "distance": 0.01,
    "status": "green",
    "coords": [
      [
        12.9382646,
        77.6287795
      ],
      [
        12.9382356,
        77.6286878
      ]
    ]
  },
  {
    "id": "r830",
    "name": "Inner Ring Road",
    "highway": "primary",
    "from": "n749",
    "to": "n750",
    "distance": 0.07,
    "status": "yellow",
    "coords": [
      [
        12.9385822,
        77.6320374
      ],
      [
        12.9385742,
        77.6325141
      ],
      [
        12.9385736,
        77.6325528
      ],
      [
        12.9385725,
        77.632689
      ]
    ]
  },
  {
    "id": "r831",
    "name": "Inner Ring Road",
    "highway": "primary",
    "from": "n603",
    "to": "n3",
    "distance": 0.05,
    "status": "yellow",
    "coords": [
      [
        12.9383498,
        77.6287044
      ],
      [
        12.9384931,
        77.6291682
      ]
    ]
  },
  {
    "id": "r832",
    "name": "Inner Ring Road",
    "highway": "primary",
    "from": "n3",
    "to": "n705",
    "distance": 0.06,
    "status": "green",
    "coords": [
      [
        12.9384931,
        77.6291682
      ],
      [
        12.938538,
        77.6293771
      ],
      [
        12.938548,
        77.62954
      ],
      [
        12.9385483,
        77.6296832
      ]
    ]
  },
  {
    "id": "r833",
    "name": "Inner Ring Road",
    "highway": "primary",
    "from": "n705",
    "to": "n713",
    "distance": 0.12,
    "status": "yellow",
    "coords": [
      [
        12.9385483,
        77.6296832
      ],
      [
        12.9385257,
        77.6303164
      ],
      [
        12.9385254,
        77.6305721
      ],
      [
        12.9385597,
        77.6308242
      ]
    ]
  },
  {
    "id": "r834",
    "name": "Inner Ring Road",
    "highway": "primary",
    "from": "n713",
    "to": "n714",
    "distance": 0.03,
    "status": "green",
    "coords": [
      [
        12.9385597,
        77.6308242
      ],
      [
        12.9385683,
        77.6311049
      ]
    ]
  },
  {
    "id": "r835",
    "name": "Ejipura Main Road",
    "highway": "tertiary",
    "from": "n750",
    "to": "n746",
    "distance": 0.02,
    "status": "green",
    "coords": [
      [
        12.9385725,
        77.632689
      ],
      [
        12.9384471,
        77.6327689
      ]
    ]
  },
  {
    "id": "r836",
    "name": "Inner Ring Road",
    "highway": "primary",
    "from": "n620",
    "to": "n751",
    "distance": 0.16,
    "status": "red",
    "coords": [
      [
        12.9386513,
        77.6347645
      ],
      [
        12.9385526,
        77.6344725
      ],
      [
        12.9385149,
        77.6343199
      ],
      [
        12.9384799,
        77.6341785
      ],
      [
        12.9384557,
        77.6340522
      ],
      [
        12.9384381,
        77.6338902
      ],
      [
        12.9384282,
        77.6336043
      ],
      [
        12.9384347,
        77.6333119
      ]
    ]
  },
  {
    "id": "r837",
    "name": "Inner Ring Road",
    "highway": "primary",
    "from": "n752",
    "to": "n597",
    "distance": 0.15,
    "status": "green",
    "coords": [
      [
        12.9385672,
        77.6333035
      ],
      [
        12.938565,
        77.6336129
      ],
      [
        12.9385721,
        77.6338946
      ],
      [
        12.9385817,
        77.6340192
      ],
      [
        12.9386109,
        77.6341669
      ],
      [
        12.9386348,
        77.6342789
      ],
      [
        12.9387473,
        77.6346476
      ]
    ]
  },
  {
    "id": "r838",
    "name": "6th Cross Road",
    "highway": "residential",
    "from": "n653",
    "to": "n753",
    "distance": 0.1,
    "status": "green",
    "coords": [
      [
        12.93348,
        77.6321489
      ],
      [
        12.9341463,
        77.6327996
      ]
    ]
  },
  {
    "id": "r839",
    "name": "2nd Cross Road",
    "highway": "residential",
    "from": "n754",
    "to": "n755",
    "distance": 0.14,
    "status": "green",
    "coords": [
      [
        12.9274016,
        77.6384047
      ],
      [
        12.9270592,
        77.6390624
      ],
      [
        12.9267997,
        77.6395876
      ]
    ]
  },
  {
    "id": "r840",
    "name": "2nd Cross Road",
    "highway": "residential",
    "from": "n76",
    "to": "n92",
    "distance": 0.13,
    "status": "yellow",
    "coords": [
      [
        12.9356461,
        77.6193042
      ],
      [
        12.9352381,
        77.6199881
      ],
      [
        12.9350544,
        77.6202902
      ]
    ]
  },
  {
    "id": "r841",
    "name": "2nd A Cross Road",
    "highway": "residential",
    "from": "n756",
    "to": "n85",
    "distance": 0.06,
    "status": "yellow",
    "coords": [
      [
        12.9340955,
        77.619408
      ],
      [
        12.9342838,
        77.6194816
      ],
      [
        12.9346158,
        77.619637
      ]
    ]
  },
  {
    "id": "r842",
    "name": "5th C Main Road",
    "highway": "residential",
    "from": "n50",
    "to": "n757",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9292838,
        77.6346741
      ],
      [
        12.9293507,
        77.6347083
      ],
      [
        12.9296265,
        77.6348352
      ]
    ]
  },
  {
    "id": "r843",
    "name": "1st Main Road",
    "highway": "tertiary",
    "from": "n173",
    "to": "n187",
    "distance": 0.08,
    "status": "green",
    "coords": [
      [
        12.9294741,
        77.634222
      ],
      [
        12.9298044,
        77.6335345
      ]
    ]
  },
  {
    "id": "r844",
    "name": "1st Main Road",
    "highway": "tertiary",
    "from": "n758",
    "to": "n189",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9298734,
        77.6331786
      ],
      [
        12.9298744,
        77.6332318
      ],
      [
        12.9298567,
        77.6335422
      ]
    ]
  },
  {
    "id": "r845",
    "name": "5th D Main Road",
    "highway": "residential",
    "from": "n51",
    "to": "n759",
    "distance": 0.05,
    "status": "green",
    "coords": [
      [
        12.9291803,
        77.6348893
      ],
      [
        12.9292349,
        77.6349138
      ],
      [
        12.9295661,
        77.6350591
      ]
    ]
  },
  {
    "id": "r846",
    "name": "5th B Main Road",
    "highway": "residential",
    "from": "n760",
    "to": "n761",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.929418,
        77.6344884
      ],
      [
        12.9294443,
        77.6345049
      ],
      [
        12.9297466,
        77.634651
      ]
    ]
  },
  {
    "id": "r847",
    "name": "5th A Main Road",
    "highway": "residential",
    "from": "n762",
    "to": "n763",
    "distance": 0.06,
    "status": "green",
    "coords": [
      [
        12.9295396,
        77.6343136
      ],
      [
        12.9299988,
        77.6345081
      ]
    ]
  },
  {
    "id": "r848",
    "name": "5th A Main Road",
    "highway": "residential",
    "from": "n764",
    "to": "n765",
    "distance": 0.07,
    "status": "yellow",
    "coords": [
      [
        12.9296039,
        77.6340977
      ],
      [
        12.9296394,
        77.6341161
      ],
      [
        12.9301622,
        77.6343392
      ]
    ]
  },
  {
    "id": "r849",
    "name": "6th B Main Road",
    "highway": "residential",
    "from": "n766",
    "to": "n767",
    "distance": 0.08,
    "status": "green",
    "coords": [
      [
        12.9297066,
        77.6338793
      ],
      [
        12.9297422,
        77.6338957
      ],
      [
        12.9303348,
        77.6341688
      ]
    ]
  },
  {
    "id": "r850",
    "name": "6th A Main Road",
    "highway": "residential",
    "from": "n768",
    "to": "n769",
    "distance": 0.08,
    "status": "green",
    "coords": [
      [
        12.9297946,
        77.6336868
      ],
      [
        12.9298309,
        77.6337032
      ],
      [
        12.9304876,
        77.6340174
      ]
    ]
  },
  {
    "id": "r851",
    "name": "1st Main Road",
    "highway": "tertiary",
    "from": "n187",
    "to": "n770",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9298044,
        77.6335345
      ],
      [
        12.9298091,
        77.6332856
      ],
      [
        12.9298078,
        77.6332377
      ],
      [
        12.9298061,
        77.6331811
      ]
    ]
  },
  {
    "id": "r852",
    "name": "1st Main Road",
    "highway": "tertiary",
    "from": "n189",
    "to": "n768",
    "distance": 0.02,
    "status": "yellow",
    "coords": [
      [
        12.9298567,
        77.6335422
      ],
      [
        12.9297946,
        77.6336868
      ]
    ]
  },
  {
    "id": "r853",
    "name": "1st Main Road",
    "highway": "tertiary",
    "from": "n768",
    "to": "n766",
    "distance": 0.02,
    "status": "green",
    "coords": [
      [
        12.9297946,
        77.6336868
      ],
      [
        12.9297066,
        77.6338793
      ]
    ]
  },
  {
    "id": "r854",
    "name": "1st Main Road",
    "highway": "tertiary",
    "from": "n766",
    "to": "n764",
    "distance": 0.03,
    "status": "red",
    "coords": [
      [
        12.9297066,
        77.6338793
      ],
      [
        12.9296039,
        77.6340977
      ]
    ]
  },
  {
    "id": "r855",
    "name": "1st Main Road",
    "highway": "tertiary",
    "from": "n764",
    "to": "n771",
    "distance": 0.02,
    "status": "yellow",
    "coords": [
      [
        12.9296039,
        77.6340977
      ],
      [
        12.9295357,
        77.6342459
      ]
    ]
  },
  {
    "id": "r856",
    "name": "1st B Main Road",
    "highway": "residential",
    "from": "n546",
    "to": "n772",
    "distance": 0.25,
    "status": "green",
    "coords": [
      [
        12.9270606,
        77.6383944
      ],
      [
        12.9261655,
        77.6382463
      ],
      [
        12.9248118,
        77.6380222
      ]
    ]
  },
  {
    "id": "r857",
    "name": "3rd Cross Road",
    "highway": "residential",
    "from": "n773",
    "to": "n720",
    "distance": 0.05,
    "status": "red",
    "coords": [
      [
        12.9418087,
        77.613918
      ],
      [
        12.9421843,
        77.6140956
      ]
    ]
  },
  {
    "id": "r858",
    "name": "3rd Cross Road",
    "highway": "residential",
    "from": "n720",
    "to": "n641",
    "distance": 0.05,
    "status": "green",
    "coords": [
      [
        12.9421843,
        77.6140956
      ],
      [
        12.9425559,
        77.6142722
      ]
    ]
  },
  {
    "id": "r859",
    "name": "17th A Main Road",
    "highway": "residential",
    "from": "n270",
    "to": "n263",
    "distance": 0.22,
    "status": "green",
    "coords": [
      [
        12.9367136,
        77.6249039
      ],
      [
        12.9365212,
        77.6248053
      ],
      [
        12.9364788,
        77.6247774
      ],
      [
        12.9363683,
        77.6247168
      ],
      [
        12.9362829,
        77.6246898
      ],
      [
        12.9362219,
        77.6246712
      ],
      [
        12.9360367,
        77.6246162
      ],
      [
        12.9358402,
        77.6245414
      ],
      [
        12.9355401,
        77.6241431
      ],
      [
        12.9354825,
        77.6240503
      ],
      [
        12.9353787,
        77.6238596
      ],
      [
        12.9352343,
        77.6236984
      ]
    ]
  },
  {
    "id": "r860",
    "name": "5th Cross Road",
    "highway": "residential",
    "from": "n640",
    "to": "n774",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9430555,
        77.6131074
      ],
      [
        12.9427101,
        77.6129982
      ]
    ]
  },
  {
    "id": "r861",
    "name": "4th Cross Road",
    "highway": "residential",
    "from": "n639",
    "to": "n775",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9431623,
        77.6128354
      ],
      [
        12.9428186,
        77.6127313
      ]
    ]
  },
  {
    "id": "r862",
    "name": "3rd Cross Road",
    "highway": "residential",
    "from": "n638",
    "to": "n776",
    "distance": 0.05,
    "status": "green",
    "coords": [
      [
        12.9432528,
        77.6125609
      ],
      [
        12.9428499,
        77.6124322
      ]
    ]
  },
  {
    "id": "r863",
    "name": "1st Main Road",
    "highway": "residential",
    "from": "n636",
    "to": "n777",
    "distance": 0.03,
    "status": "yellow",
    "coords": [
      [
        12.943414,
        77.6118427
      ],
      [
        12.943107,
        77.6118057
      ]
    ]
  },
  {
    "id": "r864",
    "name": "2nd Cross Road",
    "highway": "residential",
    "from": "n637",
    "to": "n778",
    "distance": 0.03,
    "status": "green",
    "coords": [
      [
        12.9433454,
        77.6122315
      ],
      [
        12.9430617,
        77.6121587
      ]
    ]
  },
  {
    "id": "r865",
    "name": "Hosur Road",
    "highway": "primary",
    "from": "n779",
    "to": "n505",
    "distance": 0.01,
    "status": "green",
    "coords": [
      [
        12.9343153,
        77.6123032
      ],
      [
        12.934403,
        77.6122579
      ]
    ]
  },
  {
    "id": "r866",
    "name": "Hosur Road",
    "highway": "primary",
    "from": "n780",
    "to": "n553",
    "distance": 0.05,
    "status": "yellow",
    "coords": [
      [
        12.9311081,
        77.6140603
      ],
      [
        12.9311537,
        77.6140363
      ],
      [
        12.9314859,
        77.6138616
      ],
      [
        12.9315208,
        77.61384
      ]
    ]
  },
  {
    "id": "r867",
    "name": "Hosur Road",
    "highway": "primary",
    "from": "n781",
    "to": "n782",
    "distance": 0.01,
    "status": "green",
    "coords": [
      [
        12.9344551,
        77.6123658
      ],
      [
        12.934367,
        77.6124105
      ]
    ]
  },
  {
    "id": "r868",
    "name": "Hosur Road",
    "highway": "primary",
    "from": "n782",
    "to": "n783",
    "distance": 0.24,
    "status": "green",
    "coords": [
      [
        12.934367,
        77.6124105
      ],
      [
        12.9343269,
        77.6124336
      ],
      [
        12.9324651,
        77.6134413
      ]
    ]
  },
  {
    "id": "r869",
    "name": "Hosur Road",
    "highway": "primary",
    "from": "n783",
    "to": "n784",
    "distance": 0.08,
    "status": "green",
    "coords": [
      [
        12.9324651,
        77.6134413
      ],
      [
        12.9319484,
        77.6137122
      ],
      [
        12.9318272,
        77.6137757
      ]
    ]
  },
  {
    "id": "r870",
    "name": "80 Feet Road",
    "highway": "secondary",
    "from": "n785",
    "to": "n782",
    "distance": 0.02,
    "status": "green",
    "coords": [
      [
        12.9344337,
        77.6125406
      ],
      [
        12.934367,
        77.6124105
      ]
    ]
  },
  {
    "id": "r871",
    "name": "80 Feet Road",
    "highway": "secondary",
    "from": "n782",
    "to": "n779",
    "distance": 0.01,
    "status": "green",
    "coords": [
      [
        12.934367,
        77.6124105
      ],
      [
        12.9343153,
        77.6123032
      ]
    ]
  },
  {
    "id": "r872",
    "name": "80 Feet Road",
    "highway": "secondary",
    "from": "n505",
    "to": "n781",
    "distance": 0.01,
    "status": "green",
    "coords": [
      [
        12.934403,
        77.6122579
      ],
      [
        12.9344551,
        77.6123658
      ]
    ]
  },
  {
    "id": "r873",
    "name": "1st Cross Road",
    "highway": "residential",
    "from": "n786",
    "to": "n471",
    "distance": 0.18,
    "status": "green",
    "coords": [
      [
        12.9398885,
        77.6093074
      ],
      [
        12.9392578,
        77.6091307
      ],
      [
        12.9389187,
        77.6089559
      ],
      [
        12.9387223,
        77.6088239
      ],
      [
        12.9384314,
        77.6086925
      ]
    ]
  },
  {
    "id": "r874",
    "name": "Srinivagilu Main Road",
    "highway": "residential",
    "from": "n741",
    "to": "n787",
    "distance": 0.1,
    "status": "green",
    "coords": [
      [
        12.9365667,
        77.6323085
      ],
      [
        12.9365884,
        77.6322374
      ],
      [
        12.9365902,
        77.6322336
      ],
      [
        12.936593,
        77.6322301
      ],
      [
        12.9365978,
        77.6322279
      ],
      [
        12.9366039,
        77.6322281
      ],
      [
        12.9367053,
        77.6322766
      ],
      [
        12.9368702,
        77.6323467
      ],
      [
        12.9371113,
        77.6324491
      ],
      [
        12.9373769,
        77.6325523
      ]
    ]
  },
  {
    "id": "r875",
    "name": "1st Main Road",
    "highway": "residential",
    "from": "n509",
    "to": "n742",
    "distance": 0.06,
    "status": "green",
    "coords": [
      [
        12.9348684,
        77.6302023
      ],
      [
        12.9344795,
        77.6305642
      ]
    ]
  },
  {
    "id": "r876",
    "name": "1st Main Road",
    "highway": "residential",
    "from": "n742",
    "to": "n663",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9344795,
        77.6305642
      ],
      [
        12.9342224,
        77.6308248
      ]
    ]
  },
  {
    "id": "r877",
    "name": "1st Main Road",
    "highway": "residential",
    "from": "n663",
    "to": "n658",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9342224,
        77.6308248
      ],
      [
        12.9339456,
        77.63111
      ]
    ]
  },
  {
    "id": "r878",
    "name": "1st Main Road",
    "highway": "residential",
    "from": "n658",
    "to": "n788",
    "distance": 0.12,
    "status": "green",
    "coords": [
      [
        12.9339456,
        77.63111
      ],
      [
        12.9332694,
        77.6317926
      ],
      [
        12.9332047,
        77.6318579
      ]
    ]
  },
  {
    "id": "r879",
    "name": "1st Main Road",
    "highway": "residential",
    "from": "n788",
    "to": "n652",
    "distance": 0.24,
    "status": "green",
    "coords": [
      [
        12.9332047,
        77.6318579
      ],
      [
        12.9327434,
        77.6323236
      ],
      [
        12.9316638,
        77.6334015
      ]
    ]
  },
  {
    "id": "r880",
    "name": "1st Main Road",
    "highway": "residential",
    "from": "n652",
    "to": "n789",
    "distance": 0.09,
    "status": "green",
    "coords": [
      [
        12.9316638,
        77.6334015
      ],
      [
        12.9310904,
        77.63402
      ]
    ]
  },
  {
    "id": "r881",
    "name": "6th Cross Road",
    "highway": "residential",
    "from": "n753",
    "to": "n450",
    "distance": 0.1,
    "status": "green",
    "coords": [
      [
        12.9341463,
        77.6327996
      ],
      [
        12.934443,
        77.6331074
      ],
      [
        12.9347532,
        77.6334314
      ]
    ]
  },
  {
    "id": "r882",
    "name": "6th Cross Road",
    "highway": "residential",
    "from": "n450",
    "to": "n447",
    "distance": 0.09,
    "status": "green",
    "coords": [
      [
        12.9347532,
        77.6334314
      ],
      [
        12.9350287,
        77.6337216
      ],
      [
        12.9351754,
        77.6337351
      ],
      [
        12.9354498,
        77.6337722
      ]
    ]
  },
  {
    "id": "r883",
    "name": "1st Cross Road",
    "highway": "residential",
    "from": "n747",
    "to": "n790",
    "distance": 0.01,
    "status": "yellow",
    "coords": [
      [
        12.9384651,
        77.6316793
      ],
      [
        12.9383333,
        77.6316564
      ]
    ]
  },
  {
    "id": "r884",
    "name": "1st Cross Road",
    "highway": "residential",
    "from": "n790",
    "to": "n791",
    "distance": 0.14,
    "status": "green",
    "coords": [
      [
        12.9383333,
        77.6316564
      ],
      [
        12.9381882,
        77.6321819
      ],
      [
        12.9379832,
        77.6328508
      ]
    ]
  },
  {
    "id": "r885",
    "name": "1st Cross Road",
    "highway": "residential",
    "from": "n790",
    "to": "n792",
    "distance": 0.2,
    "status": "green",
    "coords": [
      [
        12.9383333,
        77.6316564
      ],
      [
        12.9381873,
        77.6316287
      ],
      [
        12.9378615,
        77.6315623
      ],
      [
        12.9377179,
        77.6315199
      ],
      [
        12.9376456,
        77.6314981
      ],
      [
        12.9375969,
        77.6314625
      ],
      [
        12.9373028,
        77.6310829
      ],
      [
        12.937149,
        77.6308975
      ],
      [
        12.9369564,
        77.6306652
      ]
    ]
  },
  {
    "id": "r886",
    "name": "1st Main Road",
    "highway": "residential",
    "from": "n509",
    "to": "n748",
    "distance": 0.43,
    "status": "green",
    "coords": [
      [
        12.9348684,
        77.6302023
      ],
      [
        12.9358746,
        77.6298381
      ],
      [
        12.9359539,
        77.6298183
      ],
      [
        12.9360611,
        77.6298009
      ],
      [
        12.9361063,
        77.6297951
      ],
      [
        12.9362318,
        77.6297788
      ],
      [
        12.9372374,
        77.6293269
      ],
      [
        12.9373602,
        77.6292717
      ],
      [
        12.9376326,
        77.629157
      ],
      [
        12.9376446,
        77.6291477
      ],
      [
        12.9376486,
        77.6291347
      ],
      [
        12.9376113,
        77.6289191
      ],
      [
        12.9376205,
        77.6289017
      ],
      [
        12.9376328,
        77.6288897
      ],
      [
        12.9382646,
        77.6287795
      ]
    ]
  },
  {
    "id": "r887",
    "name": "6th Cross Road",
    "highway": "residential",
    "from": "n653",
    "to": "n788",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.93348,
        77.6321489
      ],
      [
        12.9332047,
        77.6318579
      ]
    ]
  },
  {
    "id": "r888",
    "name": "1st Main Road",
    "highway": "residential",
    "from": "n573",
    "to": "n793",
    "distance": 0.04,
    "status": "red",
    "coords": [
      [
        12.9253218,
        77.6169465
      ],
      [
        12.9254904,
        77.6172243
      ]
    ]
  },
  {
    "id": "r889",
    "name": "1st Main Road",
    "highway": "residential",
    "from": "n793",
    "to": "n733",
    "distance": 0.02,
    "status": "green",
    "coords": [
      [
        12.9254904,
        77.6172243
      ],
      [
        12.9255734,
        77.6173739
      ]
    ]
  },
  {
    "id": "r890",
    "name": "1st Cross Road",
    "highway": "tertiary",
    "from": "n794",
    "to": "n795",
    "distance": 0.4,
    "status": "yellow",
    "coords": [
      [
        12.9289946,
        77.617555
      ],
      [
        12.9289396,
        77.6177038
      ],
      [
        12.9284782,
        77.6189344
      ],
      [
        12.9284579,
        77.6189885
      ],
      [
        12.9284486,
        77.6190121
      ],
      [
        12.9277245,
        77.6208562
      ],
      [
        12.927686,
        77.6209546
      ]
    ]
  },
  {
    "id": "r891",
    "name": "16th B Main Road",
    "highway": "residential",
    "from": "n245",
    "to": "n796",
    "distance": 0.05,
    "status": "red",
    "coords": [
      [
        12.934525,
        77.6246163
      ],
      [
        12.9347157,
        77.6246742
      ],
      [
        12.9349662,
        77.6247861
      ]
    ]
  },
  {
    "id": "r892",
    "name": "7th A Main Road",
    "highway": "residential",
    "from": "n797",
    "to": "n798",
    "distance": 0.11,
    "status": "green",
    "coords": [
      [
        12.9258422,
        77.6327515
      ],
      [
        12.9254301,
        77.6327427
      ],
      [
        12.9248416,
        77.6327303
      ]
    ]
  },
  {
    "id": "r893",
    "name": "Sarjapura Road",
    "highway": "tertiary",
    "from": "n799",
    "to": "n113",
    "distance": 0.07,
    "status": "green",
    "coords": [
      [
        12.9270821,
        77.6223767
      ],
      [
        12.9268492,
        77.6229326
      ]
    ]
  },
  {
    "id": "r894",
    "name": "Sarjapura Road",
    "highway": "tertiary",
    "from": "n113",
    "to": "n63",
    "distance": 0.06,
    "status": "green",
    "coords": [
      [
        12.9268492,
        77.6229326
      ],
      [
        12.9266575,
        77.6234079
      ]
    ]
  },
  {
    "id": "r895",
    "name": "Sarjapura Road",
    "highway": "tertiary",
    "from": "n63",
    "to": "n643",
    "distance": 0.21,
    "status": "green",
    "coords": [
      [
        12.9266575,
        77.6234079
      ],
      [
        12.9261211,
        77.6246591
      ],
      [
        12.9258917,
        77.6251942
      ]
    ]
  },
  {
    "id": "r896",
    "name": "Sarjapura Road",
    "highway": "tertiary",
    "from": "n643",
    "to": "n238",
    "distance": 0.16,
    "status": "green",
    "coords": [
      [
        12.9258917,
        77.6251942
      ],
      [
        12.9253402,
        77.6265362
      ]
    ]
  },
  {
    "id": "r897",
    "name": "Sarjapura Road",
    "highway": "tertiary",
    "from": "n238",
    "to": "n800",
    "distance": 0.21,
    "status": "green",
    "coords": [
      [
        12.9253402,
        77.6265362
      ],
      [
        12.9253286,
        77.6265643
      ],
      [
        12.9246012,
        77.6283269
      ]
    ]
  },
  {
    "id": "r898",
    "name": "Hosur Road",
    "highway": "primary",
    "from": "n692",
    "to": "n801",
    "distance": 0.03,
    "status": "red",
    "coords": [
      [
        12.9298694,
        77.6149477
      ],
      [
        12.929752,
        77.6150337
      ],
      [
        12.9296206,
        77.6151298
      ]
    ]
  },
  {
    "id": "r899",
    "name": "11th B Main Road",
    "highway": "residential",
    "from": "n441",
    "to": "n457",
    "distance": 0.08,
    "status": "green",
    "coords": [
      [
        12.9338402,
        77.6293304
      ],
      [
        12.9338045,
        77.6292964
      ],
      [
        12.933713,
        77.6292056
      ],
      [
        12.9336082,
        77.6290976
      ],
      [
        12.9335246,
        77.6290109
      ],
      [
        12.9333571,
        77.6288317
      ]
    ]
  },
  {
    "id": "r900",
    "name": "11th A Main Road",
    "highway": "residential",
    "from": "n458",
    "to": "n440",
    "distance": 0.08,
    "status": "green",
    "coords": [
      [
        12.9331351,
        77.6290487
      ],
      [
        12.933655,
        77.6295824
      ]
    ]
  },
  {
    "id": "r901",
    "name": "8th B Main",
    "highway": "residential",
    "from": "n204",
    "to": "n155",
    "distance": 0.09,
    "status": "green",
    "coords": [
      [
        12.9316786,
        77.62797
      ],
      [
        12.9308869,
        77.6278742
      ]
    ]
  },
  {
    "id": "r902",
    "name": "7th Main Road",
    "highway": "residential",
    "from": "n802",
    "to": "n512",
    "distance": 0.12,
    "status": "red",
    "coords": [
      [
        12.9361267,
        77.6334629
      ],
      [
        12.9360801,
        77.6335841
      ],
      [
        12.9360641,
        77.6336703
      ],
      [
        12.9360451,
        77.6337692
      ],
      [
        12.9360284,
        77.6338852
      ],
      [
        12.9360144,
        77.6339892
      ],
      [
        12.9360118,
        77.6340756
      ],
      [
        12.936015,
        77.6341632
      ],
      [
        12.9360265,
        77.6342386
      ],
      [
        12.9360639,
        77.6343856
      ],
      [
        12.9360804,
        77.6344639
      ],
      [
        12.9360938,
        77.634513
      ]
    ]
  },
  {
    "id": "r903",
    "name": "5th Cross Road",
    "highway": "tertiary",
    "from": "n28",
    "to": "n803",
    "distance": 0.01,
    "status": "green",
    "coords": [
      [
        12.9345854,
        77.623801
      ],
      [
        12.9345265,
        77.6238924
      ]
    ]
  },
  {
    "id": "r904",
    "name": "2nd Cross Rd",
    "highway": "residential",
    "from": "n472",
    "to": "n804",
    "distance": 0.14,
    "status": "green",
    "coords": [
      [
        12.9366178,
        77.6082647
      ],
      [
        12.9361585,
        77.609043
      ],
      [
        12.9359432,
        77.6093796
      ]
    ]
  },
  {
    "id": "r905",
    "name": "1st Main Road",
    "highway": "residential",
    "from": "n805",
    "to": "n806",
    "distance": 0.16,
    "status": "green",
    "coords": [
      [
        12.9405141,
        77.6267151
      ],
      [
        12.9403548,
        77.626255
      ],
      [
        12.9403365,
        77.6261678
      ],
      [
        12.9403169,
        77.626082
      ],
      [
        12.9402476,
        77.6259452
      ],
      [
        12.9401836,
        77.6258714
      ],
      [
        12.9401012,
        77.6257748
      ],
      [
        12.9400476,
        77.6257226
      ],
      [
        12.9398742,
        77.6255411
      ],
      [
        12.9398616,
        77.625528
      ],
      [
        12.9398186,
        77.6254848
      ]
    ]
  },
  {
    "id": "r906",
    "name": "10th Cross Road",
    "highway": "residential",
    "from": "n725",
    "to": "n807",
    "distance": 0.22,
    "status": "green",
    "coords": [
      [
        12.9274783,
        77.6398663
      ],
      [
        12.9280683,
        77.638746
      ],
      [
        12.9281493,
        77.638597
      ],
      [
        12.9284238,
        77.6380769
      ]
    ]
  },
  {
    "id": "r907",
    "name": "Hosur Road",
    "highway": "primary",
    "from": "n592",
    "to": "n633",
    "distance": 0.11,
    "status": "yellow",
    "coords": [
      [
        12.9284946,
        77.6156751
      ],
      [
        12.9292918,
        77.6152112
      ],
      [
        12.92938,
        77.6151599
      ]
    ]
  },
  {
    "id": "r908",
    "name": "Sarjapura Road",
    "highway": "primary",
    "from": "n586",
    "to": "n634",
    "distance": 0.01,
    "status": "yellow",
    "coords": [
      [
        12.9295715,
        77.6151658
      ],
      [
        12.9295316,
        77.6150603
      ]
    ]
  },
  {
    "id": "r909",
    "name": "Temple Trees Road, Cauvery Colony",
    "highway": "residential",
    "from": "n808",
    "to": "n809",
    "distance": 0.06,
    "status": "green",
    "coords": [
      [
        12.9328645,
        77.6338186
      ],
      [
        12.9322973,
        77.6338725
      ]
    ]
  },
  {
    "id": "r910",
    "name": "1st Cross Road",
    "highway": "tertiary",
    "from": "n810",
    "to": "n8",
    "distance": 0.01,
    "status": "green",
    "coords": [
      [
        12.9334225,
        77.6233943
      ],
      [
        12.9334559,
        77.6232731
      ]
    ]
  },
  {
    "id": "r911",
    "name": "Nexus Mall Parking",
    "highway": "service",
    "from": "n811",
    "to": "n812",
    "distance": 0.17,
    "status": "yellow",
    "coords": [
      [
        12.9343209,
        77.6104836
      ],
      [
        12.9343413,
        77.6104992
      ],
      [
        12.9343812,
        77.6105297
      ],
      [
        12.9345718,
        77.6106678
      ],
      [
        12.9345924,
        77.6106827
      ],
      [
        12.9347678,
        77.6108318
      ],
      [
        12.9349836,
        77.6110153
      ],
      [
        12.9350129,
        77.6110402
      ],
      [
        12.9351196,
        77.6111733
      ],
      [
        12.9352222,
        77.6113014
      ],
      [
        12.93528,
        77.6114611
      ],
      [
        12.9353085,
        77.6115278
      ],
      [
        12.9353202,
        77.6115551
      ],
      [
        12.9353276,
        77.6115706
      ],
      [
        12.9353505,
        77.6116158
      ]
    ]
  },
  {
    "id": "r912",
    "name": "2nd C Main Road",
    "highway": "residential",
    "from": "n813",
    "to": "n385",
    "distance": 0.23,
    "status": "yellow",
    "coords": [
      [
        12.9430467,
        77.6184603
      ],
      [
        12.9424145,
        77.6184221
      ],
      [
        12.9424048,
        77.6187048
      ],
      [
        12.9422713,
        77.6186828
      ],
      [
        12.942265,
        77.6189971
      ],
      [
        12.9422578,
        77.6193513
      ],
      [
        12.9422624,
        77.6196952
      ]
    ]
  },
  {
    "id": "r913",
    "name": "1st B Main Road",
    "highway": "residential",
    "from": "n814",
    "to": "n369",
    "distance": 0.05,
    "status": "yellow",
    "coords": [
      [
        12.9403494,
        77.6187564
      ],
      [
        12.9404025,
        77.6185155
      ],
      [
        12.9404564,
        77.6182764
      ]
    ]
  },
  {
    "id": "r914",
    "name": "Dr. M H Marigowda Road",
    "highway": "primary",
    "from": "n710",
    "to": "n596",
    "distance": 0.01,
    "status": "green",
    "coords": [
      [
        12.9316547,
        77.6138662
      ],
      [
        12.9316887,
        77.6137504
      ]
    ]
  },
  {
    "id": "r915",
    "name": "Hosur Road",
    "highway": "primary",
    "from": "n815",
    "to": "n816",
    "distance": 0.31,
    "status": "green",
    "coords": [
      [
        12.9318215,
        77.6136835
      ],
      [
        12.9322437,
        77.6134708
      ],
      [
        12.932298,
        77.613441
      ],
      [
        12.9338579,
        77.6125517
      ],
      [
        12.9342159,
        77.6123554
      ],
      [
        12.9342679,
        77.6123276
      ]
    ]
  },
  {
    "id": "r916",
    "name": "Ejipura Main Road",
    "highway": "tertiary",
    "from": "n817",
    "to": "n818",
    "distance": 0.05,
    "status": "yellow",
    "coords": [
      [
        12.9392351,
        77.6323159
      ],
      [
        12.939019,
        77.6324252
      ],
      [
        12.9388058,
        77.6325533
      ]
    ]
  },
  {
    "id": "r917",
    "name": "Ejipura Main Road",
    "highway": "tertiary",
    "from": "n819",
    "to": "n486",
    "distance": 0.02,
    "status": "yellow",
    "coords": [
      [
        12.946588,
        77.6288423
      ],
      [
        12.9464856,
        77.6289228
      ],
      [
        12.9464267,
        77.6289604
      ]
    ]
  },
  {
    "id": "r918",
    "name": "Ejipura Main Road",
    "highway": "tertiary",
    "from": "n486",
    "to": "n820",
    "distance": 0.23,
    "status": "green",
    "coords": [
      [
        12.9464267,
        77.6289604
      ],
      [
        12.9457345,
        77.629371
      ],
      [
        12.9455755,
        77.6294561
      ],
      [
        12.9453419,
        77.6295702
      ],
      [
        12.9451559,
        77.6296572
      ],
      [
        12.9451464,
        77.6296615
      ],
      [
        12.9445602,
        77.6299295
      ]
    ]
  },
  {
    "id": "r919",
    "name": "Ejipura Main Road",
    "highway": "tertiary",
    "from": "n820",
    "to": "n821",
    "distance": 0.26,
    "status": "green",
    "coords": [
      [
        12.9445602,
        77.6299295
      ],
      [
        12.9443657,
        77.6300168
      ],
      [
        12.944342,
        77.6300277
      ],
      [
        12.9439172,
        77.6302239
      ],
      [
        12.9436986,
        77.6303171
      ],
      [
        12.9436682,
        77.6303312
      ],
      [
        12.9435032,
        77.6304078
      ],
      [
        12.9433124,
        77.6304964
      ],
      [
        12.9431121,
        77.6305894
      ],
      [
        12.9427367,
        77.6307638
      ],
      [
        12.9424668,
        77.6308779
      ],
      [
        12.942409,
        77.6309065
      ]
    ]
  },
  {
    "id": "r920",
    "name": "Ejipura Main Road",
    "highway": "tertiary",
    "from": "n821",
    "to": "n433",
    "distance": 0.19,
    "status": "red",
    "coords": [
      [
        12.942409,
        77.6309065
      ],
      [
        12.9421873,
        77.6310161
      ],
      [
        12.9419677,
        77.6311125
      ],
      [
        12.941747,
        77.6312036
      ],
      [
        12.9414359,
        77.6313242
      ],
      [
        12.9411236,
        77.6314521
      ],
      [
        12.9408636,
        77.6315635
      ]
    ]
  },
  {
    "id": "r921",
    "name": "Ejipura Main Road",
    "highway": "tertiary",
    "from": "n433",
    "to": "n817",
    "distance": 0.2,
    "status": "green",
    "coords": [
      [
        12.9408636,
        77.6315635
      ],
      [
        12.940375,
        77.6317805
      ],
      [
        12.9402343,
        77.6318397
      ],
      [
        12.9401168,
        77.6318892
      ],
      [
        12.9397041,
        77.6320735
      ],
      [
        12.9392351,
        77.6323159
      ]
    ]
  },
  {
    "id": "r922",
    "name": "17th F Main Road",
    "highway": "residential",
    "from": "n309",
    "to": "n624",
    "distance": 0.01,
    "status": "green",
    "coords": [
      [
        12.9398501,
        77.6253654
      ],
      [
        12.9399056,
        77.6254211
      ]
    ]
  },
  {
    "id": "r923",
    "name": "7th Cross Road",
    "highway": "tertiary",
    "from": "n822",
    "to": "n823",
    "distance": 0.02,
    "status": "green",
    "coords": [
      [
        12.9297981,
        77.6331015
      ],
      [
        12.929781,
        77.6330152
      ],
      [
        12.9297728,
        77.6329746
      ],
      [
        12.9297835,
        77.6329031
      ]
    ]
  },
  {
    "id": "r924",
    "name": "Temple Trees Road, Cauvery Colony",
    "highway": "residential",
    "from": "n809",
    "to": "n726",
    "distance": 0.08,
    "status": "green",
    "coords": [
      [
        12.9322973,
        77.6338725
      ],
      [
        12.9315908,
        77.6339579
      ]
    ]
  },
  {
    "id": "r925",
    "name": "1st C Main Road",
    "highway": "residential",
    "from": "n824",
    "to": "n545",
    "distance": 0.25,
    "status": "green",
    "coords": [
      [
        12.9244338,
        77.6386112
      ],
      [
        12.9255973,
        77.6388022
      ],
      [
        12.9262787,
        77.6389058
      ],
      [
        12.9266897,
        77.6389683
      ]
    ]
  },
  {
    "id": "r926",
    "name": "5th Cross Road",
    "highway": "tertiary",
    "from": "n321",
    "to": "n825",
    "distance": 0.01,
    "status": "green",
    "coords": [
      [
        12.9404644,
        77.6202825
      ],
      [
        12.9405075,
        77.6202253
      ]
    ]
  },
  {
    "id": "r927",
    "name": "Sarjapura Road",
    "highway": "primary",
    "from": "n826",
    "to": "n54",
    "distance": 0.23,
    "status": "green",
    "coords": [
      [
        12.9251496,
        77.6353253
      ],
      [
        12.9252565,
        77.636068
      ],
      [
        12.9253009,
        77.636376
      ],
      [
        12.9253333,
        77.6366906
      ],
      [
        12.9253292,
        77.6368224
      ],
      [
        12.9252998,
        77.6369785
      ],
      [
        12.9252461,
        77.6371646
      ],
      [
        12.925166,
        77.6373952
      ]
    ]
  },
  {
    "id": "r928",
    "name": "2nd Cross Road",
    "highway": "residential",
    "from": "n827",
    "to": "n525",
    "distance": 0.03,
    "status": "green",
    "coords": [
      [
        12.9330763,
        77.6094563
      ],
      [
        12.9328018,
        77.6094246
      ]
    ]
  },
  {
    "id": "r929",
    "name": "24th A Cross Road",
    "highway": "residential",
    "from": "n821",
    "to": "n828",
    "distance": 0.14,
    "status": "red",
    "coords": [
      [
        12.942409,
        77.6309065
      ],
      [
        12.9422455,
        77.6308606
      ],
      [
        12.9411388,
        77.6307086
      ]
    ]
  },
  {
    "id": "r930",
    "name": "10th Main Road",
    "highway": "residential",
    "from": "n829",
    "to": "n158",
    "distance": 0.05,
    "status": "green",
    "coords": [
      [
        12.9310641,
        77.629422
      ],
      [
        12.9306062,
        77.6293853
      ]
    ]
  },
  {
    "id": "r931",
    "name": "Sarjapura Road",
    "highway": "primary_link",
    "from": "n692",
    "to": "n830",
    "distance": 0.08,
    "status": "green",
    "coords": [
      [
        12.9298694,
        77.6149477
      ],
      [
        12.9297548,
        77.6152165
      ],
      [
        12.9296113,
        77.6155949
      ]
    ]
  },
  {
    "id": "r932",
    "name": "Sarjapura Road",
    "highway": "primary",
    "from": "n801",
    "to": "n830",
    "distance": 0.05,
    "status": "yellow",
    "coords": [
      [
        12.9296206,
        77.6151298
      ],
      [
        12.9296163,
        77.6153051
      ],
      [
        12.9296113,
        77.6155949
      ]
    ]
  },
  {
    "id": "r933",
    "name": "3rd Cross Road",
    "highway": "residential",
    "from": "n562",
    "to": "n831",
    "distance": 0.03,
    "status": "green",
    "coords": [
      [
        12.9390131,
        77.6307889
      ],
      [
        12.9391262,
        77.6307906
      ],
      [
        12.9392625,
        77.6307936
      ]
    ]
  },
  {
    "id": "r934",
    "name": "Jyoti Nivas College Road",
    "highway": "tertiary",
    "from": "n221",
    "to": "n783",
    "distance": 0.01,
    "status": "yellow",
    "coords": [
      [
        12.9325038,
        77.6135402
      ],
      [
        12.9324866,
        77.6134963
      ],
      [
        12.9324794,
        77.613478
      ],
      [
        12.9324651,
        77.6134413
      ]
    ]
  },
  {
    "id": "r935",
    "name": "Hosur Road",
    "highway": "primary",
    "from": "n506",
    "to": "n786",
    "distance": 0.66,
    "status": "green",
    "coords": [
      [
        12.9346201,
        77.6121427
      ],
      [
        12.9354196,
        77.6117285
      ],
      [
        12.9358798,
        77.6114802
      ],
      [
        12.9360382,
        77.6113856
      ],
      [
        12.9360726,
        77.611365
      ],
      [
        12.9365681,
        77.6110983
      ],
      [
        12.9368716,
        77.6109379
      ],
      [
        12.9369678,
        77.6108853
      ],
      [
        12.9371221,
        77.610797
      ],
      [
        12.9372233,
        77.6107454
      ],
      [
        12.9375137,
        77.6105914
      ],
      [
        12.9377089,
        77.6104779
      ],
      [
        12.9383612,
        77.6101215
      ],
      [
        12.9387315,
        77.6099167
      ],
      [
        12.9388429,
        77.6098535
      ],
      [
        12.9388857,
        77.6098307
      ],
      [
        12.9390151,
        77.6097671
      ],
      [
        12.9391965,
        77.6096817
      ],
      [
        12.939598,
        77.6094691
      ],
      [
        12.9398885,
        77.6093074
      ]
    ]
  },
  {
    "id": "r936",
    "name": "Hosur Road",
    "highway": "primary",
    "from": "n786",
    "to": "n470",
    "distance": 0.06,
    "status": "yellow",
    "coords": [
      [
        12.9398885,
        77.6093074
      ],
      [
        12.9403422,
        77.6090569
      ]
    ]
  },
  {
    "id": "r937",
    "name": "Hosur Road",
    "highway": "primary",
    "from": "n470",
    "to": "n469",
    "distance": 0.08,
    "status": "green",
    "coords": [
      [
        12.9403422,
        77.6090569
      ],
      [
        12.9409573,
        77.6087261
      ]
    ]
  },
  {
    "id": "r938",
    "name": "Hosur Road",
    "highway": "primary",
    "from": "n469",
    "to": "n605",
    "distance": 0.03,
    "status": "red",
    "coords": [
      [
        12.9409573,
        77.6087261
      ],
      [
        12.9411324,
        77.608627
      ],
      [
        12.941225,
        77.6085838
      ]
    ]
  },
  {
    "id": "r939",
    "name": "Hosur Road",
    "highway": "primary",
    "from": "n605",
    "to": "n475",
    "distance": 0.03,
    "status": "green",
    "coords": [
      [
        12.941225,
        77.6085838
      ],
      [
        12.9414837,
        77.6084528
      ]
    ]
  },
  {
    "id": "r940",
    "name": "Hosur Road",
    "highway": "primary",
    "from": "n475",
    "to": "n476",
    "distance": 0.06,
    "status": "green",
    "coords": [
      [
        12.9414837,
        77.6084528
      ],
      [
        12.9419474,
        77.6082351
      ],
      [
        12.9420078,
        77.6082097
      ]
    ]
  },
  {
    "id": "r941",
    "name": "Hosur Road",
    "highway": "primary",
    "from": "n476",
    "to": "n832",
    "distance": 0.06,
    "status": "yellow",
    "coords": [
      [
        12.9420078,
        77.6082097
      ],
      [
        12.9422495,
        77.6080969
      ],
      [
        12.942536,
        77.607995
      ]
    ]
  },
  {
    "id": "r942",
    "name": "80 Feet Road",
    "highway": "secondary",
    "from": "n833",
    "to": "n17",
    "distance": 0.03,
    "status": "red",
    "coords": [
      [
        12.9345149,
        77.612491
      ],
      [
        12.9345449,
        77.6125539
      ],
      [
        12.9346238,
        77.612719
      ]
    ]
  },
  {
    "id": "r943",
    "name": "Inner Ring Road",
    "highway": "primary",
    "from": "n751",
    "to": "n746",
    "distance": 0.06,
    "status": "green",
    "coords": [
      [
        12.9384347,
        77.6333119
      ],
      [
        12.9384435,
        77.6329272
      ],
      [
        12.9384443,
        77.6328936
      ],
      [
        12.9384457,
        77.6328315
      ],
      [
        12.9384471,
        77.6327689
      ]
    ]
  },
  {
    "id": "r944",
    "name": "1st C Cross Street",
    "highway": "residential",
    "from": "n212",
    "to": "n834",
    "distance": 0.05,
    "status": "green",
    "coords": [
      [
        12.9365783,
        77.6137188
      ],
      [
        12.9361588,
        77.6136168
      ]
    ]
  },
  {
    "id": "r945",
    "name": "80 Feet Road",
    "highway": "secondary",
    "from": "n94",
    "to": "n745",
    "distance": 0.01,
    "status": "yellow",
    "coords": [
      [
        12.937197,
        77.626942
      ],
      [
        12.9372808,
        77.6268738
      ]
    ]
  },
  {
    "id": "r946",
    "name": "Mahayogi Vemana Road",
    "highway": "primary",
    "from": "n552",
    "to": "n835",
    "distance": 0.01,
    "status": "green",
    "coords": [
      [
        12.9275058,
        77.6208789
      ],
      [
        12.9275971,
        77.6209204
      ]
    ]
  },
  {
    "id": "r947",
    "name": "Sarjapura Road",
    "highway": "primary",
    "from": "n830",
    "to": "n836",
    "distance": 0.39,
    "status": "green",
    "coords": [
      [
        12.9296113,
        77.6155949
      ],
      [
        12.9294716,
        77.6160012
      ],
      [
        12.9294086,
        77.6161925
      ],
      [
        12.9289096,
        77.6175203
      ],
      [
        12.9288504,
        77.6176734
      ],
      [
        12.9283525,
        77.618962
      ]
    ]
  },
  {
    "id": "r948",
    "name": "Mahayogi Vemana Road",
    "highway": "primary",
    "from": "n582",
    "to": "n32",
    "distance": 0.01,
    "status": "green",
    "coords": [
      [
        12.9275608,
        77.6210315
      ],
      [
        12.9274643,
        77.6209908
      ]
    ]
  },
  {
    "id": "r949",
    "name": "Sarjapura Road",
    "highway": "primary",
    "from": "n835",
    "to": "n582",
    "distance": 0.01,
    "status": "green",
    "coords": [
      [
        12.9275971,
        77.6209204
      ],
      [
        12.9275608,
        77.6210315
      ]
    ]
  },
  {
    "id": "r950",
    "name": "Sarjapura Road",
    "highway": "primary",
    "from": "n552",
    "to": "n586",
    "distance": 0.66,
    "status": "yellow",
    "coords": [
      [
        12.9275058,
        77.6208789
      ],
      [
        12.9275576,
        77.6207545
      ],
      [
        12.9276081,
        77.620616
      ],
      [
        12.9281077,
        77.6193863
      ],
      [
        12.9285287,
        77.6182675
      ],
      [
        12.9288204,
        77.6174874
      ],
      [
        12.9293703,
        77.6160208
      ],
      [
        12.9294046,
        77.6159128
      ],
      [
        12.9295234,
        77.6155636
      ],
      [
        12.929553,
        77.6153767
      ],
      [
        12.9295715,
        77.6151658
      ]
    ]
  },
  {
    "id": "r951",
    "name": "Sarjapura Road",
    "highway": "primary",
    "from": "n32",
    "to": "n552",
    "distance": 0.01,
    "status": "yellow",
    "coords": [
      [
        12.9274643,
        77.6209908
      ],
      [
        12.9275058,
        77.6208789
      ]
    ]
  },
  {
    "id": "r952",
    "name": "Mahayogi Vemana Road",
    "highway": "primary",
    "from": "n835",
    "to": "n795",
    "distance": 0.01,
    "status": "green",
    "coords": [
      [
        12.9275971,
        77.6209204
      ],
      [
        12.927686,
        77.6209546
      ]
    ]
  },
  {
    "id": "r953",
    "name": "1st Cross Road",
    "highway": "tertiary",
    "from": "n795",
    "to": "n837",
    "distance": 0.01,
    "status": "yellow",
    "coords": [
      [
        12.927686,
        77.6209546
      ],
      [
        12.9276367,
        77.6210614
      ]
    ]
  },
  {
    "id": "r954",
    "name": "Mahayogi Vemana Road",
    "highway": "primary",
    "from": "n108",
    "to": "n105",
    "distance": 0.09,
    "status": "green",
    "coords": [
      [
        12.9302411,
        77.6221345
      ],
      [
        12.9298454,
        77.6219773
      ],
      [
        12.9295187,
        77.6218475
      ]
    ]
  },
  {
    "id": "r955",
    "name": "Mahayogi Vemana Road",
    "highway": "primary",
    "from": "n105",
    "to": "n119",
    "distance": 0.06,
    "status": "green",
    "coords": [
      [
        12.9295187,
        77.6218475
      ],
      [
        12.9290553,
        77.621651
      ]
    ]
  },
  {
    "id": "r956",
    "name": "Mahayogi Vemana Road",
    "highway": "primary",
    "from": "n119",
    "to": "n117",
    "distance": 0.06,
    "status": "green",
    "coords": [
      [
        12.9290553,
        77.621651
      ],
      [
        12.9285868,
        77.6214602
      ]
    ]
  },
  {
    "id": "r957",
    "name": "Mahayogi Vemana Road",
    "highway": "primary",
    "from": "n117",
    "to": "n115",
    "distance": 0.06,
    "status": "green",
    "coords": [
      [
        12.9285868,
        77.6214602
      ],
      [
        12.9281284,
        77.6212637
      ]
    ]
  },
  {
    "id": "r958",
    "name": "Mahayogi Vemana Road",
    "highway": "primary",
    "from": "n115",
    "to": "n837",
    "distance": 0.06,
    "status": "green",
    "coords": [
      [
        12.9281284,
        77.6212637
      ],
      [
        12.9277791,
        77.621122
      ],
      [
        12.927751,
        77.62111
      ],
      [
        12.9276367,
        77.6210614
      ]
    ]
  },
  {
    "id": "r959",
    "name": "Mahayogi Vemana Road",
    "highway": "primary",
    "from": "n795",
    "to": "n838",
    "distance": 0.32,
    "status": "green",
    "coords": [
      [
        12.927686,
        77.6209546
      ],
      [
        12.9277357,
        77.6209726
      ],
      [
        12.929079,
        77.6215176
      ],
      [
        12.9302753,
        77.6219947
      ],
      [
        12.9303327,
        77.6220176
      ]
    ]
  },
  {
    "id": "r960",
    "name": "Mahayogi Vemana Road",
    "highway": "primary",
    "from": "n837",
    "to": "n582",
    "distance": 0.01,
    "status": "green",
    "coords": [
      [
        12.9276367,
        77.6210614
      ],
      [
        12.9275608,
        77.6210315
      ]
    ]
  },
  {
    "id": "r961",
    "name": "80 Feet Road",
    "highway": "secondary",
    "from": "n770",
    "to": "n43",
    "distance": 0.47,
    "status": "green",
    "coords": [
      [
        12.9298061,
        77.6331811
      ],
      [
        12.9297209,
        77.6331887
      ],
      [
        12.9288024,
        77.6332701
      ],
      [
        12.9273644,
        77.633416
      ],
      [
        12.9269216,
        77.6334528
      ],
      [
        12.9258987,
        77.6335496
      ],
      [
        12.9255601,
        77.6335759
      ]
    ]
  },
  {
    "id": "r962",
    "name": "80 Feet Road",
    "highway": "secondary",
    "from": "n43",
    "to": "n544",
    "distance": 0.06,
    "status": "yellow",
    "coords": [
      [
        12.9255601,
        77.6335759
      ],
      [
        12.9251326,
        77.6336178
      ],
      [
        12.9251142,
        77.6336204
      ],
      [
        12.925004,
        77.6336364
      ]
    ]
  },
  {
    "id": "r963",
    "name": "80 Feet Road",
    "highway": "secondary",
    "from": "n544",
    "to": "n839",
    "distance": 0.01,
    "status": "green",
    "coords": [
      [
        12.925004,
        77.6336364
      ],
      [
        12.9248811,
        77.633657
      ]
    ]
  },
  {
    "id": "r964",
    "name": "1st Main Road",
    "highway": "tertiary",
    "from": "n770",
    "to": "n822",
    "distance": 0.01,
    "status": "green",
    "coords": [
      [
        12.9298061,
        77.6331811
      ],
      [
        12.9297981,
        77.6331015
      ]
    ]
  },
  {
    "id": "r965",
    "name": "80 Feet Road",
    "highway": "secondary",
    "from": "n758",
    "to": "n770",
    "distance": 0.01,
    "status": "green",
    "coords": [
      [
        12.9298734,
        77.6331786
      ],
      [
        12.9298061,
        77.6331811
      ]
    ]
  },
  {
    "id": "r966",
    "name": "1st Main Road",
    "highway": "tertiary",
    "from": "n840",
    "to": "n758",
    "distance": 0.01,
    "status": "green",
    "coords": [
      [
        12.9298679,
        77.6330992
      ],
      [
        12.9298734,
        77.6331786
      ]
    ]
  },
  {
    "id": "r967",
    "name": "80 Feet Road",
    "highway": "secondary",
    "from": "n841",
    "to": "n543",
    "distance": 0.03,
    "status": "yellow",
    "coords": [
      [
        12.9247598,
        77.6335782
      ],
      [
        12.9248662,
        77.6335624
      ],
      [
        12.9249906,
        77.6335475
      ]
    ]
  },
  {
    "id": "r968",
    "name": "80 Feet Road",
    "highway": "secondary",
    "from": "n543",
    "to": "n822",
    "distance": 0.54,
    "status": "yellow",
    "coords": [
      [
        12.9249906,
        77.6335475
      ],
      [
        12.9251064,
        77.6335331
      ],
      [
        12.9254753,
        77.6334917
      ],
      [
        12.9258904,
        77.6334526
      ],
      [
        12.9263838,
        77.6334016
      ],
      [
        12.9269173,
        77.6333551
      ],
      [
        12.9273119,
        77.6333169
      ],
      [
        12.927347,
        77.6333136
      ],
      [
        12.927629,
        77.6332842
      ],
      [
        12.9277004,
        77.6332779
      ],
      [
        12.927933,
        77.6332532
      ],
      [
        12.9281045,
        77.6332379
      ],
      [
        12.9281468,
        77.6332341
      ],
      [
        12.9281923,
        77.63323
      ],
      [
        12.9282884,
        77.6332214
      ],
      [
        12.9285374,
        77.6332006
      ],
      [
        12.9288882,
        77.6331651
      ],
      [
        12.9291294,
        77.6331453
      ],
      [
        12.9296149,
        77.6331155
      ],
      [
        12.9297056,
        77.6331099
      ],
      [
        12.9297186,
        77.6331088
      ],
      [
        12.9297981,
        77.6331015
      ]
    ]
  },
  {
    "id": "r969",
    "name": "80 Feet Road",
    "highway": "secondary",
    "from": "n822",
    "to": "n840",
    "distance": 0.01,
    "status": "green",
    "coords": [
      [
        12.9297981,
        77.6331015
      ],
      [
        12.9298679,
        77.6330992
      ]
    ]
  },
  {
    "id": "r970",
    "name": "Ejipura Main Road",
    "highway": "tertiary",
    "from": "n842",
    "to": "n750",
    "distance": 0.02,
    "status": "green",
    "coords": [
      [
        12.9386995,
        77.6326172
      ],
      [
        12.9386664,
        77.6326356
      ],
      [
        12.9386491,
        77.6326453
      ],
      [
        12.9386278,
        77.6326572
      ],
      [
        12.9385725,
        77.632689
      ]
    ]
  },
  {
    "id": "r971",
    "name": "80 Feet Road",
    "highway": "secondary",
    "from": "n561",
    "to": "n758",
    "distance": 0.02,
    "status": "green",
    "coords": [
      [
        12.9300545,
        77.6331602
      ],
      [
        12.9299326,
        77.6331716
      ],
      [
        12.9299259,
        77.6331724
      ],
      [
        12.9298734,
        77.6331786
      ]
    ]
  },
  {
    "id": "r972",
    "name": "18th Main Road",
    "highway": "residential",
    "from": "n104",
    "to": "n118",
    "distance": 0.06,
    "status": "green",
    "coords": [
      [
        12.9289887,
        77.623144
      ],
      [
        12.9284829,
        77.6229401
      ]
    ]
  },
  {
    "id": "r973",
    "name": "18th Main Road",
    "highway": "residential",
    "from": "n118",
    "to": "n116",
    "distance": 0.05,
    "status": "green",
    "coords": [
      [
        12.9284829,
        77.6229401
      ],
      [
        12.9280664,
        77.6227726
      ]
    ]
  },
  {
    "id": "r974",
    "name": "18th Main Road",
    "highway": "residential",
    "from": "n116",
    "to": "n114",
    "distance": 0.06,
    "status": "green",
    "coords": [
      [
        12.9280664,
        77.6227726
      ],
      [
        12.9275558,
        77.6225672
      ]
    ]
  },
  {
    "id": "r975",
    "name": "18th Main Road",
    "highway": "residential",
    "from": "n114",
    "to": "n843",
    "distance": 0.05,
    "status": "green",
    "coords": [
      [
        12.9275558,
        77.6225672
      ],
      [
        12.9271268,
        77.6223947
      ],
      [
        12.9271147,
        77.6223898
      ]
    ]
  },
  {
    "id": "r976",
    "name": "1st Cross Road",
    "highway": "tertiary",
    "from": "n837",
    "to": "n799",
    "distance": 0.16,
    "status": "red",
    "coords": [
      [
        12.9276367,
        77.6210614
      ],
      [
        12.9275004,
        77.6214057
      ],
      [
        12.9270821,
        77.6223767
      ]
    ]
  },
  {
    "id": "r977",
    "name": "Srinivagilu Main Road",
    "highway": "secondary",
    "from": "n745",
    "to": "n295",
    "distance": 0.05,
    "status": "green",
    "coords": [
      [
        12.9372808,
        77.6268738
      ],
      [
        12.9373803,
        77.6267916
      ],
      [
        12.9376582,
        77.6265696
      ]
    ]
  },
  {
    "id": "r978",
    "name": "Srinivagilu Main Road",
    "highway": "secondary",
    "from": "n295",
    "to": "n356",
    "distance": 0.17,
    "status": "green",
    "coords": [
      [
        12.9376582,
        77.6265696
      ],
      [
        12.9380454,
        77.626258
      ],
      [
        12.9381834,
        77.626158
      ],
      [
        12.938391,
        77.6260405
      ],
      [
        12.9389451,
        77.6257855
      ]
    ]
  },
  {
    "id": "r979",
    "name": "Srinivagilu Main Road",
    "highway": "secondary",
    "from": "n356",
    "to": "n844",
    "distance": 0.1,
    "status": "green",
    "coords": [
      [
        12.9389451,
        77.6257855
      ],
      [
        12.9393175,
        77.6256251
      ],
      [
        12.9396995,
        77.6254463
      ],
      [
        12.9397535,
        77.6254157
      ]
    ]
  },
  {
    "id": "r980",
    "name": "Srinivagilu Main Road",
    "highway": "secondary",
    "from": "n844",
    "to": "n309",
    "distance": 0.01,
    "status": "green",
    "coords": [
      [
        12.9397535,
        77.6254157
      ],
      [
        12.9398501,
        77.6253654
      ]
    ]
  },
  {
    "id": "r981",
    "name": "Srinivagilu Main Road",
    "highway": "secondary",
    "from": "n309",
    "to": "n336",
    "distance": 0.16,
    "status": "green",
    "coords": [
      [
        12.9398501,
        77.6253654
      ],
      [
        12.9400875,
        77.6251815
      ],
      [
        12.9404052,
        77.6248878
      ],
      [
        12.9409012,
        77.624399
      ]
    ]
  },
  {
    "id": "r982",
    "name": "Srinivagilu Main Road",
    "highway": "secondary",
    "from": "n336",
    "to": "n281",
    "distance": 0.05,
    "status": "green",
    "coords": [
      [
        12.9409012,
        77.624399
      ],
      [
        12.9410649,
        77.6242298
      ],
      [
        12.941206,
        77.624091
      ]
    ]
  },
  {
    "id": "r983",
    "name": "Srinivagilu Main Road",
    "highway": "secondary",
    "from": "n281",
    "to": "n693",
    "distance": 0.2,
    "status": "green",
    "coords": [
      [
        12.941206,
        77.624091
      ],
      [
        12.9423591,
        77.6228777
      ],
      [
        12.9424221,
        77.6228085
      ],
      [
        12.9424807,
        77.6227384
      ]
    ]
  },
  {
    "id": "r984",
    "name": "80 Feet Road",
    "highway": "secondary",
    "from": "n845",
    "to": "n693",
    "distance": 0.01,
    "status": "green",
    "coords": [
      [
        12.9425251,
        77.6227797
      ],
      [
        12.9424807,
        77.6227384
      ]
    ]
  },
  {
    "id": "r985",
    "name": "7th B Main Road",
    "highway": "residential",
    "from": "n846",
    "to": "n847",
    "distance": 0.12,
    "status": "yellow",
    "coords": [
      [
        12.9258148,
        77.6322963
      ],
      [
        12.9247751,
        77.6322761
      ]
    ]
  },
  {
    "id": "r986",
    "name": "5th Cross Road",
    "highway": "residential",
    "from": "n848",
    "to": "n660",
    "distance": 0.03,
    "status": "green",
    "coords": [
      [
        12.9344356,
        77.6324827
      ],
      [
        12.9342209,
        77.6322468
      ]
    ]
  },
  {
    "id": "r987",
    "name": "5th Cross Road",
    "highway": "residential",
    "from": "n660",
    "to": "n654",
    "distance": 0.06,
    "status": "green",
    "coords": [
      [
        12.9342209,
        77.6322468
      ],
      [
        12.9338184,
        77.6318194
      ]
    ]
  },
  {
    "id": "r988",
    "name": "Srinivagilu Main Road",
    "highway": "secondary",
    "from": "n806",
    "to": "n849",
    "distance": 0.27,
    "status": "green",
    "coords": [
      [
        12.9398186,
        77.6254848
      ],
      [
        12.9393368,
        77.6257146
      ],
      [
        12.9388595,
        77.6259175
      ],
      [
        12.9384036,
        77.6261302
      ],
      [
        12.9382221,
        77.6262384
      ],
      [
        12.938052,
        77.6263722
      ],
      [
        12.9376733,
        77.6266698
      ]
    ]
  },
  {
    "id": "r989",
    "name": "1st Main Road",
    "highway": "residential",
    "from": "n806",
    "to": "n844",
    "distance": 0.01,
    "status": "yellow",
    "coords": [
      [
        12.9398186,
        77.6254848
      ],
      [
        12.9397535,
        77.6254157
      ]
    ]
  },
  {
    "id": "r990",
    "name": "Hosur Road",
    "highway": "primary",
    "from": "n850",
    "to": "n780",
    "distance": 0.2,
    "status": "yellow",
    "coords": [
      [
        12.9295762,
        77.61503
      ],
      [
        12.930167,
        77.6146285
      ],
      [
        12.9308594,
        77.6141891
      ],
      [
        12.9311081,
        77.6140603
      ]
    ]
  },
  {
    "id": "r991",
    "name": "Tavarekere Main Road",
    "highway": "secondary",
    "from": "n851",
    "to": "n730",
    "distance": 0.01,
    "status": "green",
    "coords": [
      [
        12.9250748,
        77.6088257
      ],
      [
        12.9250291,
        77.6088886
      ]
    ]
  },
  {
    "id": "r992",
    "name": "Mahayogi Vemana Road",
    "highway": "primary",
    "from": "n478",
    "to": "n108",
    "distance": 0.15,
    "status": "green",
    "coords": [
      [
        12.9314922,
        77.6226225
      ],
      [
        12.9312742,
        77.6225375
      ],
      [
        12.9302411,
        77.6221345
      ]
    ]
  },
  {
    "id": "r993",
    "name": "Mahayogi Vemana Road",
    "highway": "primary",
    "from": "n838",
    "to": "n516",
    "distance": 0.14,
    "status": "green",
    "coords": [
      [
        12.9303327,
        77.6220176
      ],
      [
        12.9309306,
        77.622256
      ],
      [
        12.931277,
        77.6223941
      ],
      [
        12.9315406,
        77.622498
      ]
    ]
  },
  {
    "id": "r994",
    "name": "80 Feet Road",
    "highway": "secondary",
    "from": "n18",
    "to": "n852",
    "distance": 0.03,
    "status": "green",
    "coords": [
      [
        12.935738,
        77.6149547
      ],
      [
        12.9358508,
        77.6151677
      ]
    ]
  },
  {
    "id": "r995",
    "name": "80 Feet Road",
    "highway": "secondary",
    "from": "n16",
    "to": "n698",
    "distance": 0.01,
    "status": "green",
    "coords": [
      [
        12.9358402,
        77.6153192
      ],
      [
        12.9357875,
        77.6152125
      ]
    ]
  },
  {
    "id": "r996",
    "name": "80 Feet Road",
    "highway": "secondary",
    "from": "n699",
    "to": "n785",
    "distance": 0.04,
    "status": "yellow",
    "coords": [
      [
        12.9345895,
        77.612853
      ],
      [
        12.9344741,
        77.6126186
      ],
      [
        12.9344635,
        77.6125972
      ],
      [
        12.9344337,
        77.6125406
      ]
    ]
  },
  {
    "id": "r997",
    "name": "Inner Ring Road",
    "highway": "primary",
    "from": "n750",
    "to": "n752",
    "distance": 0.07,
    "status": "green",
    "coords": [
      [
        12.9385725,
        77.632689
      ],
      [
        12.9385691,
        77.6331222
      ],
      [
        12.9385672,
        77.6333035
      ]
    ]
  },
  {
    "id": "r998",
    "name": "Inner Ring Road",
    "highway": "primary",
    "from": "n714",
    "to": "n853",
    "distance": 0.07,
    "status": "green",
    "coords": [
      [
        12.9385683,
        77.6311049
      ],
      [
        12.9385706,
        77.6313323
      ],
      [
        12.9385772,
        77.6315238
      ],
      [
        12.9385825,
        77.6317897
      ]
    ]
  },
  {
    "id": "r999",
    "name": "Srinivagilu Main Road",
    "highway": "secondary",
    "from": "n854",
    "to": "n845",
    "distance": 0.01,
    "status": "green",
    "coords": [
      [
        12.9425693,
        77.6227316
      ],
      [
        12.9425251,
        77.6227797
      ]
    ]
  },
  {
    "id": "r1000",
    "name": "Srinivagilu Main Road",
    "highway": "secondary",
    "from": "n845",
    "to": "n280",
    "distance": 0.21,
    "status": "green",
    "coords": [
      [
        12.9425251,
        77.6227797
      ],
      [
        12.9424728,
        77.6228483
      ],
      [
        12.9423245,
        77.6230245
      ],
      [
        12.9412556,
        77.6241534
      ]
    ]
  },
  {
    "id": "r1001",
    "name": "Srinivagilu Main Road",
    "highway": "secondary",
    "from": "n280",
    "to": "n337",
    "distance": 0.05,
    "status": "green",
    "coords": [
      [
        12.9412556,
        77.6241534
      ],
      [
        12.940964,
        77.6244407
      ],
      [
        12.9409526,
        77.624452
      ]
    ]
  },
  {
    "id": "r1002",
    "name": "Srinivagilu Main Road",
    "highway": "secondary",
    "from": "n337",
    "to": "n624",
    "distance": 0.16,
    "status": "green",
    "coords": [
      [
        12.9409526,
        77.624452
      ],
      [
        12.9404866,
        77.6249314
      ],
      [
        12.9400273,
        77.6253351
      ],
      [
        12.9399056,
        77.6254211
      ]
    ]
  },
  {
    "id": "r1003",
    "name": "Srinivagilu Main Road",
    "highway": "secondary",
    "from": "n624",
    "to": "n806",
    "distance": 0.01,
    "status": "green",
    "coords": [
      [
        12.9399056,
        77.6254211
      ],
      [
        12.9398186,
        77.6254848
      ]
    ]
  },
  {
    "id": "r1004",
    "name": "Sarjapura Road",
    "highway": "primary",
    "from": "n839",
    "to": "n855",
    "distance": 0.13,
    "status": "green",
    "coords": [
      [
        12.9248811,
        77.633657
      ],
      [
        12.9249363,
        77.6339922
      ],
      [
        12.9249494,
        77.634089
      ],
      [
        12.9249656,
        77.6341867
      ],
      [
        12.9250739,
        77.6348395
      ]
    ]
  },
  {
    "id": "r1005",
    "name": "Mahayogi Vemana Road",
    "highway": "primary",
    "from": "n30",
    "to": "n803",
    "distance": 0.1,
    "status": "green",
    "coords": [
      [
        12.9351903,
        77.6244413
      ],
      [
        12.9349264,
        77.6241666
      ],
      [
        12.9346329,
        77.6239554
      ],
      [
        12.9345998,
        77.6239316
      ],
      [
        12.9345265,
        77.6238924
      ]
    ]
  },
  {
    "id": "r1006",
    "name": "Mahayogi Vemana Road",
    "highway": "primary",
    "from": "n803",
    "to": "n810",
    "distance": 0.13,
    "status": "green",
    "coords": [
      [
        12.9345265,
        77.6238924
      ],
      [
        12.9334225,
        77.6233943
      ]
    ]
  },
  {
    "id": "r1007",
    "name": "Mahayogi Vemana Road",
    "highway": "primary",
    "from": "n810",
    "to": "n248",
    "distance": 0.09,
    "status": "green",
    "coords": [
      [
        12.9334225,
        77.6233943
      ],
      [
        12.9327112,
        77.6231011
      ]
    ]
  },
  {
    "id": "r1008",
    "name": "Mahayogi Vemana Road",
    "highway": "primary",
    "from": "n248",
    "to": "n478",
    "distance": 0.15,
    "status": "green",
    "coords": [
      [
        12.9327112,
        77.6231011
      ],
      [
        12.9314922,
        77.6226225
      ]
    ]
  },
  {
    "id": "r1009",
    "name": "8th Main Road",
    "highway": "tertiary",
    "from": "n30",
    "to": "n796",
    "distance": 0.04,
    "status": "yellow",
    "coords": [
      [
        12.9351903,
        77.6244413
      ],
      [
        12.9349662,
        77.6247861
      ]
    ]
  },
  {
    "id": "r1010",
    "name": "8th Main Road",
    "highway": "tertiary",
    "from": "n796",
    "to": "n69",
    "distance": 0.03,
    "status": "green",
    "coords": [
      [
        12.9349662,
        77.6247861
      ],
      [
        12.9349298,
        77.6248436
      ],
      [
        12.934835,
        77.6249936
      ]
    ]
  },
  {
    "id": "r1011",
    "name": "8th Main Road",
    "highway": "tertiary",
    "from": "n69",
    "to": "n242",
    "distance": 0.11,
    "status": "red",
    "coords": [
      [
        12.934835,
        77.6249936
      ],
      [
        12.9346867,
        77.6252379
      ],
      [
        12.9342986,
        77.6258773
      ]
    ]
  },
  {
    "id": "r1012",
    "name": "8th Main Road",
    "highway": "tertiary",
    "from": "n242",
    "to": "n131",
    "distance": 0.02,
    "status": "green",
    "coords": [
      [
        12.9342986,
        77.6258773
      ],
      [
        12.9342129,
        77.6260096
      ]
    ]
  },
  {
    "id": "r1013",
    "name": "8th Main Road",
    "highway": "tertiary",
    "from": "n131",
    "to": "n136",
    "distance": 0.08,
    "status": "green",
    "coords": [
      [
        12.9342129,
        77.6260096
      ],
      [
        12.9339759,
        77.6264068
      ],
      [
        12.9339031,
        77.6265179
      ],
      [
        12.9338436,
        77.6266153
      ]
    ]
  },
  {
    "id": "r1014",
    "name": "8th Main Road",
    "highway": "tertiary",
    "from": "n136",
    "to": "n130",
    "distance": 0.15,
    "status": "green",
    "coords": [
      [
        12.9338436,
        77.6266153
      ],
      [
        12.9337511,
        77.6267459
      ],
      [
        12.9336888,
        77.6268263
      ],
      [
        12.9336378,
        77.6268853
      ],
      [
        12.932879,
        77.6275691
      ]
    ]
  },
  {
    "id": "r1015",
    "name": "8th Main Road",
    "highway": "tertiary",
    "from": "n130",
    "to": "n201",
    "distance": 0.03,
    "status": "yellow",
    "coords": [
      [
        12.932879,
        77.6275691
      ],
      [
        12.932688,
        77.627736
      ]
    ]
  },
  {
    "id": "r1016",
    "name": "8th Main Road",
    "highway": "tertiary",
    "from": "n201",
    "to": "n157",
    "distance": 0.26,
    "status": "green",
    "coords": [
      [
        12.932688,
        77.627736
      ],
      [
        12.9319469,
        77.6283146
      ],
      [
        12.9316916,
        77.628496
      ],
      [
        12.9315996,
        77.6285542
      ],
      [
        12.9306743,
        77.6289732
      ]
    ]
  },
  {
    "id": "r1017",
    "name": "8th Main Road",
    "highway": "tertiary",
    "from": "n157",
    "to": "n480",
    "distance": 0.08,
    "status": "green",
    "coords": [
      [
        12.9306743,
        77.6289732
      ],
      [
        12.93001,
        77.6292344
      ]
    ]
  },
  {
    "id": "r1018",
    "name": "8th Main Road",
    "highway": "tertiary",
    "from": "n480",
    "to": "n192",
    "distance": 0.05,
    "status": "yellow",
    "coords": [
      [
        12.93001,
        77.6292344
      ],
      [
        12.9295642,
        77.6291916
      ]
    ]
  },
  {
    "id": "r1019",
    "name": "8th Main Road",
    "highway": "tertiary",
    "from": "n192",
    "to": "n196",
    "distance": 0.14,
    "status": "green",
    "coords": [
      [
        12.9295642,
        77.6291916
      ],
      [
        12.9293341,
        77.6291671
      ],
      [
        12.9285912,
        77.6290605
      ],
      [
        12.9283011,
        77.6290132
      ]
    ]
  },
  {
    "id": "r1020",
    "name": "8th Main Road",
    "highway": "tertiary",
    "from": "n196",
    "to": "n35",
    "distance": 0.24,
    "status": "yellow",
    "coords": [
      [
        12.9283011,
        77.6290132
      ],
      [
        12.9278177,
        77.6289368
      ],
      [
        12.9262625,
        77.6287125
      ],
      [
        12.9261579,
        77.6286946
      ]
    ]
  },
  {
    "id": "r1021",
    "name": "8th Main Road",
    "highway": "tertiary",
    "from": "n35",
    "to": "n99",
    "distance": 0.09,
    "status": "yellow",
    "coords": [
      [
        12.9261579,
        77.6286946
      ],
      [
        12.9260167,
        77.6286721
      ],
      [
        12.9254642,
        77.6286019
      ],
      [
        12.9253643,
        77.6285713
      ]
    ]
  },
  {
    "id": "r1022",
    "name": "8th Main Road",
    "highway": "tertiary",
    "from": "n99",
    "to": "n800",
    "distance": 0.09,
    "status": "yellow",
    "coords": [
      [
        12.9253643,
        77.6285713
      ],
      [
        12.9246574,
        77.6283474
      ],
      [
        12.9246012,
        77.6283269
      ]
    ]
  },
  {
    "id": "r1023",
    "name": "Mahayogi Vemana Road",
    "highway": "primary",
    "from": "n268",
    "to": "n856",
    "distance": 0.2,
    "status": "yellow",
    "coords": [
      [
        12.9361127,
        77.6254105
      ],
      [
        12.9372333,
        77.6268138
      ],
      [
        12.9372429,
        77.6268259
      ]
    ]
  },
  {
    "id": "r1024",
    "name": "8th Cross Road",
    "highway": "residential",
    "from": "n613",
    "to": "n857",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9421851,
        77.6214784
      ],
      [
        12.9424102,
        77.621226
      ]
    ]
  },
  {
    "id": "r1025",
    "name": "1st Main Road",
    "highway": "residential",
    "from": "n208",
    "to": "n343",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9374662,
        77.6130329
      ],
      [
        12.9375294,
        77.6127527
      ],
      [
        12.937555,
        77.6126387
      ]
    ]
  },
  {
    "id": "r1026",
    "name": "1st Main Road",
    "highway": "tertiary",
    "from": "n858",
    "to": "n206",
    "distance": 0.07,
    "status": "red",
    "coords": [
      [
        12.9359344,
        77.6152534
      ],
      [
        12.9364563,
        77.6148855
      ]
    ]
  },
  {
    "id": "r1027",
    "name": "8th Cross Road",
    "highway": "residential",
    "from": "n857",
    "to": "n859",
    "distance": 0.02,
    "status": "green",
    "coords": [
      [
        12.9424102,
        77.621226
      ],
      [
        12.9425168,
        77.6210713
      ]
    ]
  },
  {
    "id": "r1028",
    "name": "Adugodi Main Rd",
    "highway": "tertiary",
    "from": "n371",
    "to": "n382",
    "distance": 0.05,
    "status": "green",
    "coords": [
      [
        12.9409456,
        77.6184401
      ],
      [
        12.9411212,
        77.618579
      ],
      [
        12.9412496,
        77.6186505
      ],
      [
        12.941311,
        77.6187042
      ]
    ]
  },
  {
    "id": "r1029",
    "name": "17th Main Road",
    "highway": "residential",
    "from": "n700",
    "to": "n12",
    "distance": 0.01,
    "status": "green",
    "coords": [
      [
        12.9341301,
        77.6168851
      ],
      [
        12.9340096,
        77.6168659
      ]
    ]
  },
  {
    "id": "r1030",
    "name": "Tavarekere Main Road",
    "highway": "secondary",
    "from": "n860",
    "to": "n861",
    "distance": 0.01,
    "status": "green",
    "coords": [
      [
        12.9347623,
        77.6097886
      ],
      [
        12.9346913,
        77.6097349
      ]
    ]
  },
  {
    "id": "r1031",
    "name": "Tavarekere Main Road",
    "highway": "secondary",
    "from": "n862",
    "to": "n863",
    "distance": 0.04,
    "status": "red",
    "coords": [
      [
        12.9346732,
        77.6097197
      ],
      [
        12.9346337,
        77.6097312
      ],
      [
        12.9346156,
        77.609727
      ],
      [
        12.9345826,
        77.6097198
      ],
      [
        12.934356,
        77.6097317
      ]
    ]
  },
  {
    "id": "r1032",
    "name": "Tavarekere Main Road",
    "highway": "secondary",
    "from": "n864",
    "to": "n862",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9343475,
        77.6096846
      ],
      [
        12.9346027,
        77.6096758
      ],
      [
        12.9346384,
        77.6096897
      ],
      [
        12.9346732,
        77.6097197
      ]
    ]
  },
  {
    "id": "r1033",
    "name": "8th Main Road",
    "highway": "residential",
    "from": "n577",
    "to": "n865",
    "distance": 0.05,
    "status": "yellow",
    "coords": [
      [
        12.9282139,
        77.6106356
      ],
      [
        12.9284833,
        77.6106516
      ],
      [
        12.928703,
        77.6106574
      ]
    ]
  },
  {
    "id": "r1034",
    "name": "2nd Main Road",
    "highway": "residential",
    "from": "n866",
    "to": "n867",
    "distance": 0.06,
    "status": "green",
    "coords": [
      [
        12.9248682,
        77.6138149
      ],
      [
        12.9250211,
        77.6138581
      ],
      [
        12.9249715,
        77.614047
      ],
      [
        12.9249165,
        77.6142662
      ]
    ]
  },
  {
    "id": "r1035",
    "name": "Jyoti Nivas College Road",
    "highway": "tertiary",
    "from": "n13",
    "to": "n220",
    "distance": 0.05,
    "status": "green",
    "coords": [
      [
        12.9341284,
        77.6166244
      ],
      [
        12.9338815,
        77.6162276
      ]
    ]
  },
  {
    "id": "r1036",
    "name": "1st Cross Road",
    "highway": "residential",
    "from": "n123",
    "to": "n558",
    "distance": 0.01,
    "status": "yellow",
    "coords": [
      [
        12.934432,
        77.6296147
      ],
      [
        12.9344996,
        77.6296526
      ]
    ]
  },
  {
    "id": "r1037",
    "name": "1st Cross Road",
    "highway": "residential",
    "from": "n558",
    "to": "n707",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9344996,
        77.6296526
      ],
      [
        12.934537,
        77.6297026
      ],
      [
        12.9346789,
        77.6298927
      ],
      [
        12.9346844,
        77.6299342
      ]
    ]
  },
  {
    "id": "r1038",
    "name": "8th Cross Road",
    "highway": "residential",
    "from": "n645",
    "to": "n868",
    "distance": 0.29,
    "status": "green",
    "coords": [
      [
        12.9248762,
        77.6150923
      ],
      [
        12.9249824,
        77.6147025
      ],
      [
        12.9250808,
        77.6143165
      ],
      [
        12.9251861,
        77.6139325
      ],
      [
        12.9252917,
        77.6134303
      ],
      [
        12.9253423,
        77.6131937
      ],
      [
        12.9253994,
        77.6125338
      ],
      [
        12.9254007,
        77.6125182
      ]
    ]
  },
  {
    "id": "r1039",
    "name": "Sarjapur Road",
    "highway": "primary",
    "from": "n869",
    "to": "n708",
    "distance": 0.22,
    "status": "yellow",
    "coords": [
      [
        12.9241332,
        77.6391844
      ],
      [
        12.9243521,
        77.638604
      ],
      [
        12.9244592,
        77.6384252
      ],
      [
        12.9244599,
        77.638424
      ],
      [
        12.9245212,
        77.6383216
      ],
      [
        12.9246321,
        77.6381526
      ],
      [
        12.9247557,
        77.6379823
      ],
      [
        12.9247783,
        77.6379409
      ],
      [
        12.9248185,
        77.6378675
      ],
      [
        12.9248756,
        77.6377633
      ],
      [
        12.9248952,
        77.6377274
      ],
      [
        12.924974,
        77.6375786
      ],
      [
        12.9250709,
        77.6373698
      ]
    ]
  },
  {
    "id": "r1040",
    "name": "Sarjapur Road",
    "highway": "primary",
    "from": "n54",
    "to": "n677",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.925166,
        77.6373952
      ],
      [
        12.9249877,
        77.6377334
      ]
    ]
  },
  {
    "id": "r1041",
    "name": "Sarjapur Road",
    "highway": "primary",
    "from": "n677",
    "to": "n772",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9249877,
        77.6377334
      ],
      [
        12.9248118,
        77.6380222
      ]
    ]
  },
  {
    "id": "r1042",
    "name": "Sarjapur Road",
    "highway": "primary",
    "from": "n772",
    "to": "n824",
    "distance": 0.08,
    "status": "green",
    "coords": [
      [
        12.9248118,
        77.6380222
      ],
      [
        12.9246913,
        77.6382135
      ],
      [
        12.9245866,
        77.6383732
      ],
      [
        12.9244338,
        77.6386112
      ]
    ]
  },
  {
    "id": "r1043",
    "name": "Sarjapur Road",
    "highway": "primary",
    "from": "n824",
    "to": "n870",
    "distance": 0.07,
    "status": "green",
    "coords": [
      [
        12.9244338,
        77.6386112
      ],
      [
        12.924298,
        77.6389482
      ],
      [
        12.9242078,
        77.6391957
      ]
    ]
  },
  {
    "id": "r1044",
    "name": "Srinivagilu Main Road",
    "highway": "secondary",
    "from": "n871",
    "to": "n854",
    "distance": 0.56,
    "status": "yellow",
    "coords": [
      [
        12.9458173,
        77.618749
      ],
      [
        12.9456915,
        77.6188821
      ],
      [
        12.9455452,
        77.6190821
      ],
      [
        12.9454855,
        77.6191623
      ],
      [
        12.9454013,
        77.6192755
      ],
      [
        12.9453783,
        77.6193064
      ],
      [
        12.9453225,
        77.6193815
      ],
      [
        12.9446031,
        77.6203778
      ],
      [
        12.944371,
        77.6206876
      ],
      [
        12.9443348,
        77.6207359
      ],
      [
        12.9442916,
        77.6207875
      ],
      [
        12.944154,
        77.620952
      ],
      [
        12.9440959,
        77.6210167
      ],
      [
        12.9432145,
        77.6220361
      ],
      [
        12.9427582,
        77.6225279
      ],
      [
        12.9427312,
        77.622553
      ],
      [
        12.9425693,
        77.6227316
      ]
    ]
  },
  {
    "id": "r1045",
    "name": "Srinivagilu Main Road",
    "highway": "secondary",
    "from": "n693",
    "to": "n872",
    "distance": 0.01,
    "status": "green",
    "coords": [
      [
        12.9424807,
        77.6227384
      ],
      [
        12.9425267,
        77.6226859
      ]
    ]
  },
  {
    "id": "r1046",
    "name": "Srinivagilu Main Road",
    "highway": "secondary",
    "from": "n872",
    "to": "n612",
    "distance": 0.37,
    "status": "green",
    "coords": [
      [
        12.9425267,
        77.6226859
      ],
      [
        12.9426848,
        77.62251
      ],
      [
        12.9428745,
        77.6222934
      ],
      [
        12.9430725,
        77.6220697
      ],
      [
        12.9432959,
        77.6218316
      ],
      [
        12.9436167,
        77.6214623
      ],
      [
        12.9437151,
        77.6213491
      ],
      [
        12.9438746,
        77.6211655
      ],
      [
        12.9440989,
        77.6209018
      ],
      [
        12.9442795,
        77.6206842
      ],
      [
        12.944716,
        77.6201013
      ]
    ]
  },
  {
    "id": "r1047",
    "name": "Srinivagilu Main Road",
    "highway": "secondary",
    "from": "n612",
    "to": "n408",
    "distance": 0.12,
    "status": "red",
    "coords": [
      [
        12.944716,
        77.6201013
      ],
      [
        12.9448354,
        77.6199339
      ],
      [
        12.9453304,
        77.6192198
      ]
    ]
  },
  {
    "id": "r1048",
    "name": "Srinivagilu Main Road",
    "highway": "secondary",
    "from": "n408",
    "to": "n873",
    "distance": 0.09,
    "status": "red",
    "coords": [
      [
        12.9453304,
        77.6192198
      ],
      [
        12.9455068,
        77.618991
      ],
      [
        12.9457443,
        77.618698
      ],
      [
        12.9458232,
        77.6186165
      ]
    ]
  },
  {
    "id": "r1049",
    "name": "Hosur Road",
    "highway": "primary",
    "from": "n553",
    "to": "n596",
    "distance": 0.02,
    "status": "green",
    "coords": [
      [
        12.9315208,
        77.61384
      ],
      [
        12.9316887,
        77.6137504
      ]
    ]
  },
  {
    "id": "r1050",
    "name": "80 Feet Road",
    "highway": "secondary",
    "from": "n874",
    "to": "n614",
    "distance": 0.04,
    "status": "yellow",
    "coords": [
      [
        12.9416245,
        77.6214994
      ],
      [
        12.9418544,
        77.6217952
      ]
    ]
  },
  {
    "id": "r1051",
    "name": "80 Feet Road",
    "highway": "secondary",
    "from": "n614",
    "to": "n872",
    "distance": 0.12,
    "status": "yellow",
    "coords": [
      [
        12.9418544,
        77.6217952
      ],
      [
        12.9418702,
        77.6218162
      ],
      [
        12.9422959,
        77.6223797
      ],
      [
        12.9424494,
        77.6225928
      ],
      [
        12.942486,
        77.6226414
      ],
      [
        12.9425267,
        77.6226859
      ]
    ]
  },
  {
    "id": "r1052",
    "name": "80 Feet Road",
    "highway": "secondary",
    "from": "n872",
    "to": "n854",
    "distance": 0.01,
    "status": "green",
    "coords": [
      [
        12.9425267,
        77.6226859
      ],
      [
        12.9425693,
        77.6227316
      ]
    ]
  },
  {
    "id": "r1053",
    "name": "Sarjapura Road",
    "highway": "primary",
    "from": "n836",
    "to": "n875",
    "distance": 0.22,
    "status": "yellow",
    "coords": [
      [
        12.9283525,
        77.618962
      ],
      [
        12.9276546,
        77.620768
      ],
      [
        12.9276451,
        77.6207932
      ],
      [
        12.9276325,
        77.6208265
      ]
    ]
  },
  {
    "id": "r1054",
    "name": "Tavarekere Main Road",
    "highway": "secondary",
    "from": "n228",
    "to": "n851",
    "distance": 0.08,
    "status": "yellow",
    "coords": [
      [
        12.9258025,
        77.6087582
      ],
      [
        12.925616,
        77.6087379
      ],
      [
        12.9254508,
        77.6087437
      ],
      [
        12.9252731,
        77.60875
      ],
      [
        12.9251802,
        77.6087855
      ],
      [
        12.9250748,
        77.6088257
      ]
    ]
  },
  {
    "id": "r1055",
    "name": "Tavarekere Main Road",
    "highway": "secondary",
    "from": "n876",
    "to": "n877",
    "distance": 0,
    "status": "red",
    "coords": [
      [
        12.934302,
        77.609717
      ],
      [
        12.9342753,
        77.6097198
      ]
    ]
  },
  {
    "id": "r1056",
    "name": "Sarjapura Road",
    "highway": "primary",
    "from": "n855",
    "to": "n826",
    "distance": 0.05,
    "status": "green",
    "coords": [
      [
        12.9250739,
        77.6348395
      ],
      [
        12.9251496,
        77.6353253
      ]
    ]
  },
  {
    "id": "r1057",
    "name": "Mahayogi Vemana Road",
    "highway": "primary",
    "from": "n29",
    "to": "n268",
    "distance": 0.15,
    "status": "green",
    "coords": [
      [
        12.9352411,
        77.6243708
      ],
      [
        12.9361127,
        77.6254105
      ]
    ]
  },
  {
    "id": "r1058",
    "name": "Mahayogi Vemana Road",
    "highway": "primary",
    "from": "n96",
    "to": "n30",
    "distance": 0.16,
    "status": "red",
    "coords": [
      [
        12.9360846,
        77.6255428
      ],
      [
        12.9351903,
        77.6244413
      ]
    ]
  },
  {
    "id": "r1059",
    "name": "3rd Cross Road",
    "highway": "residential",
    "from": "n694",
    "to": "n87",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9368302,
        77.6181479
      ],
      [
        12.9367723,
        77.6181616
      ],
      [
        12.9366,
        77.61838
      ]
    ]
  },
  {
    "id": "r1060",
    "name": "Srinivagilu Main Road",
    "highway": "secondary",
    "from": "n849",
    "to": "n33",
    "distance": 0.05,
    "status": "green",
    "coords": [
      [
        12.9376733,
        77.6266698
      ],
      [
        12.9374466,
        77.6268399
      ],
      [
        12.937425,
        77.6268582
      ],
      [
        12.9373325,
        77.6269369
      ]
    ]
  },
  {
    "id": "r1061",
    "name": "10th Main Road",
    "highway": "secondary_link",
    "from": "n560",
    "to": "n162",
    "distance": 0.01,
    "status": "yellow",
    "coords": [
      [
        12.9331391,
        77.6310058
      ],
      [
        12.9330766,
        77.6309441
      ]
    ]
  },
  {
    "id": "r1062",
    "name": "Hosur Road",
    "highway": "primary",
    "from": "n878",
    "to": "n209",
    "distance": 0.87,
    "status": "yellow",
    "coords": [
      [
        12.9440003,
        77.6076548
      ],
      [
        12.9439214,
        77.6076783
      ],
      [
        12.943729,
        77.6077356
      ],
      [
        12.9432192,
        77.6078862
      ],
      [
        12.943057,
        77.607935
      ],
      [
        12.9427169,
        77.6080333
      ],
      [
        12.9425609,
        77.6080874
      ],
      [
        12.9424117,
        77.6081392
      ],
      [
        12.9422731,
        77.6081895
      ],
      [
        12.9419843,
        77.608325
      ],
      [
        12.9411862,
        77.6087485
      ],
      [
        12.9398973,
        77.6094326
      ],
      [
        12.9390803,
        77.6098663
      ],
      [
        12.9387817,
        77.6100247
      ],
      [
        12.9383763,
        77.6102549
      ],
      [
        12.9382798,
        77.6103051
      ],
      [
        12.9369075,
        77.6110193
      ]
    ]
  },
  {
    "id": "r1063",
    "name": "Hosur Road",
    "highway": "primary",
    "from": "n209",
    "to": "n781",
    "distance": 0.31,
    "status": "green",
    "coords": [
      [
        12.9369075,
        77.6110193
      ],
      [
        12.935902,
        77.6115788
      ],
      [
        12.9357187,
        77.6116722
      ],
      [
        12.9349284,
        77.6121062
      ],
      [
        12.9345385,
        77.6123203
      ],
      [
        12.9345224,
        77.6123292
      ],
      [
        12.9344997,
        77.6123417
      ],
      [
        12.9344551,
        77.6123658
      ]
    ]
  },
  {
    "id": "r1064",
    "name": "18th Main Road",
    "highway": "residential",
    "from": "n843",
    "to": "n799",
    "distance": 0,
    "status": "green",
    "coords": [
      [
        12.9271147,
        77.6223898
      ],
      [
        12.9270821,
        77.6223767
      ]
    ]
  },
  {
    "id": "r1065",
    "name": "Doctor M H Marigowda Road",
    "highway": "primary",
    "from": "n879",
    "to": "n880",
    "distance": 0.71,
    "status": "yellow",
    "coords": [
      [
        12.9347563,
        77.6096396
      ],
      [
        12.9354069,
        77.6086458
      ],
      [
        12.9358806,
        77.6078349
      ],
      [
        12.9360506,
        77.6075136
      ],
      [
        12.9360965,
        77.6073914
      ],
      [
        12.9361888,
        77.6071456
      ],
      [
        12.9363329,
        77.6067688
      ],
      [
        12.9363638,
        77.606663
      ],
      [
        12.9363753,
        77.6066237
      ],
      [
        12.9364037,
        77.606522
      ],
      [
        12.9364211,
        77.6064135
      ],
      [
        12.9364474,
        77.60625
      ],
      [
        12.9364516,
        77.6062239
      ],
      [
        12.9364596,
        77.6061623
      ],
      [
        12.9365038,
        77.6058203
      ],
      [
        12.9365128,
        77.6057517
      ],
      [
        12.9365221,
        77.6056798
      ],
      [
        12.9366206,
        77.6050024
      ],
      [
        12.9368301,
        77.603588
      ]
    ]
  },
  {
    "id": "r1066",
    "name": "2nd Main Road",
    "highway": "residential",
    "from": "n881",
    "to": "n732",
    "distance": 0.02,
    "status": "green",
    "coords": [
      [
        12.9249899,
        77.6175195
      ],
      [
        12.9250887,
        77.6176814
      ]
    ]
  },
  {
    "id": "r1067",
    "name": "80 Feet Road",
    "highway": "secondary",
    "from": "n840",
    "to": "n161",
    "distance": 0.06,
    "status": "green",
    "coords": [
      [
        12.9298679,
        77.6330992
      ],
      [
        12.9299208,
        77.633094
      ],
      [
        12.9303988,
        77.6330477
      ]
    ]
  },
  {
    "id": "r1068",
    "name": "Inner Ring Road",
    "highway": "primary",
    "from": "n853",
    "to": "n749",
    "distance": 0.03,
    "status": "green",
    "coords": [
      [
        12.9385825,
        77.6317897
      ],
      [
        12.9385822,
        77.6320374
      ]
    ]
  },
  {
    "id": "r1069",
    "name": "Ejipura Main Road",
    "highway": "tertiary",
    "from": "n818",
    "to": "n842",
    "distance": 0.01,
    "status": "green",
    "coords": [
      [
        12.9388058,
        77.6325533
      ],
      [
        12.9386995,
        77.6326172
      ]
    ]
  },
  {
    "id": "r1070",
    "name": "Mahayogi Vemana Road",
    "highway": "primary",
    "from": "n32",
    "to": "n882",
    "distance": 0.01,
    "status": "green",
    "coords": [
      [
        12.9274643,
        77.6209908
      ],
      [
        12.9274085,
        77.6209692
      ]
    ]
  },
  {
    "id": "r1071",
    "name": "Doctor M H Marigowda Road",
    "highway": "primary",
    "from": "n860",
    "to": "n883",
    "distance": 0.02,
    "status": "green",
    "coords": [
      [
        12.9347623,
        77.6097886
      ],
      [
        12.9347148,
        77.6098504
      ],
      [
        12.9346805,
        77.6098949
      ],
      [
        12.9346253,
        77.6099664
      ]
    ]
  },
  {
    "id": "r1072",
    "name": "80 Feet Road",
    "highway": "secondary",
    "from": "n697",
    "to": "n363",
    "distance": 0.18,
    "status": "green",
    "coords": [
      [
        12.9360828,
        77.6156251
      ],
      [
        12.9361887,
        77.6158403
      ],
      [
        12.9363137,
        77.6161708
      ],
      [
        12.9363263,
        77.6162207
      ],
      [
        12.9363358,
        77.6162669
      ],
      [
        12.9363448,
        77.6163644
      ],
      [
        12.9363472,
        77.6164417
      ],
      [
        12.9363499,
        77.6167491
      ],
      [
        12.9363518,
        77.6167813
      ],
      [
        12.9363594,
        77.6169695
      ],
      [
        12.9363607,
        77.6170017
      ],
      [
        12.9363661,
        77.6172596
      ]
    ]
  },
  {
    "id": "r1073",
    "name": "80 Feet Road",
    "highway": "secondary",
    "from": "n363",
    "to": "n884",
    "distance": 0.23,
    "status": "green",
    "coords": [
      [
        12.9363661,
        77.6172596
      ],
      [
        12.9363772,
        77.6173141
      ],
      [
        12.9363876,
        77.6174065
      ],
      [
        12.9364103,
        77.6174849
      ],
      [
        12.9364386,
        77.6175495
      ],
      [
        12.9364605,
        77.6175933
      ],
      [
        12.936576,
        77.6177658
      ],
      [
        12.9368775,
        77.6181062
      ],
      [
        12.9370203,
        77.6182309
      ],
      [
        12.9371013,
        77.6182952
      ],
      [
        12.9371396,
        77.6183199
      ],
      [
        12.9371733,
        77.6183364
      ],
      [
        12.9378035,
        77.6185839
      ]
    ]
  },
  {
    "id": "r1074",
    "name": "80 Feet Road",
    "highway": "secondary",
    "from": "n884",
    "to": "n376",
    "distance": 0.13,
    "status": "green",
    "coords": [
      [
        12.9378035,
        77.6185839
      ],
      [
        12.9380653,
        77.6186914
      ],
      [
        12.9383976,
        77.6188389
      ],
      [
        12.9385039,
        77.6188924
      ],
      [
        12.9386851,
        77.6189766
      ],
      [
        12.9388625,
        77.6190788
      ]
    ]
  },
  {
    "id": "r1075",
    "name": "80 Feet Road",
    "highway": "secondary",
    "from": "n376",
    "to": "n378",
    "distance": 0.03,
    "status": "green",
    "coords": [
      [
        12.9388625,
        77.6190788
      ],
      [
        12.9391224,
        77.6192271
      ]
    ]
  },
  {
    "id": "r1076",
    "name": "80 Feet Road",
    "highway": "secondary",
    "from": "n378",
    "to": "n825",
    "distance": 0.19,
    "status": "yellow",
    "coords": [
      [
        12.9391224,
        77.6192271
      ],
      [
        12.9392119,
        77.6192916
      ],
      [
        12.9405075,
        77.6202253
      ]
    ]
  },
  {
    "id": "r1077",
    "name": "80 Feet Road",
    "highway": "secondary",
    "from": "n825",
    "to": "n610",
    "distance": 0.12,
    "status": "green",
    "coords": [
      [
        12.9405075,
        77.6202253
      ],
      [
        12.9409282,
        77.6205802
      ],
      [
        12.941028,
        77.6207194
      ],
      [
        12.9412707,
        77.6210254
      ]
    ]
  },
  {
    "id": "r1078",
    "name": "80 Feet Road",
    "highway": "secondary",
    "from": "n610",
    "to": "n427",
    "distance": 0.03,
    "status": "green",
    "coords": [
      [
        12.9412707,
        77.6210254
      ],
      [
        12.9414198,
        77.6212361
      ]
    ]
  },
  {
    "id": "r1079",
    "name": "80 Feet Road",
    "highway": "secondary",
    "from": "n427",
    "to": "n874",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9414198,
        77.6212361
      ],
      [
        12.9416245,
        77.6214994
      ]
    ]
  },
  {
    "id": "r1080",
    "name": "17th B Main Road",
    "highway": "residential",
    "from": "n25",
    "to": "n253",
    "distance": 0.05,
    "status": "green",
    "coords": [
      [
        12.9360656,
        77.6214105
      ],
      [
        12.9360149,
        77.6213856
      ],
      [
        12.9356429,
        77.6212025
      ]
    ]
  },
  {
    "id": "r1081",
    "name": "Srinivagilu Main Road",
    "highway": "residential",
    "from": "n787",
    "to": "n791",
    "distance": 0.07,
    "status": "green",
    "coords": [
      [
        12.9373769,
        77.6325523
      ],
      [
        12.9375008,
        77.6326126
      ],
      [
        12.9375355,
        77.6326293
      ],
      [
        12.9379832,
        77.6328508
      ]
    ]
  },
  {
    "id": "r1082",
    "name": "Srinivagilu Main Road",
    "highway": "residential",
    "from": "n791",
    "to": "n511",
    "distance": 0.02,
    "status": "green",
    "coords": [
      [
        12.9379832,
        77.6328508
      ],
      [
        12.9380634,
        77.6328795
      ],
      [
        12.938119,
        77.6329292
      ]
    ]
  },
  {
    "id": "r1083",
    "name": "Tavarekere Main Road",
    "highway": "secondary",
    "from": "n634",
    "to": "n223",
    "distance": 0.01,
    "status": "green",
    "coords": [
      [
        12.9295316,
        77.6150603
      ],
      [
        12.929538,
        77.6149845
      ]
    ]
  },
  {
    "id": "r1084",
    "name": "Tavarekere Main Road",
    "highway": "secondary",
    "from": "n850",
    "to": "n223",
    "distance": 0.01,
    "status": "green",
    "coords": [
      [
        12.9295762,
        77.61503
      ],
      [
        12.929538,
        77.6149845
      ]
    ]
  },
  {
    "id": "r1085",
    "name": "Mahayogi Vemana Road",
    "highway": "primary",
    "from": "n856",
    "to": "n745",
    "distance": 0.01,
    "status": "yellow",
    "coords": [
      [
        12.9372429,
        77.6268259
      ],
      [
        12.9372808,
        77.6268738
      ]
    ]
  },
  {
    "id": "r1086",
    "name": "80 Feet Road",
    "highway": "secondary",
    "from": "n601",
    "to": "n555",
    "distance": 0.01,
    "status": "yellow",
    "coords": [
      [
        12.937249,
        77.6270053
      ],
      [
        12.9371937,
        77.6270563
      ]
    ]
  },
  {
    "id": "r1087",
    "name": "National Games Village Road",
    "highway": "residential",
    "from": "n885",
    "to": "n886",
    "distance": 0.85,
    "status": "green",
    "coords": [
      [
        12.9425482,
        77.6247114
      ],
      [
        12.9428907,
        77.6244717
      ],
      [
        12.943739,
        77.6238999
      ],
      [
        12.9447481,
        77.6232521
      ],
      [
        12.9449566,
        77.623091
      ],
      [
        12.9453201,
        77.6228551
      ],
      [
        12.9455134,
        77.6227326
      ],
      [
        12.9456071,
        77.6226705
      ],
      [
        12.9461964,
        77.6222891
      ],
      [
        12.9468588,
        77.6218539
      ],
      [
        12.9474998,
        77.6214151
      ],
      [
        12.9478055,
        77.6212128
      ],
      [
        12.9489329,
        77.6204771
      ]
    ]
  },
  {
    "id": "r1088",
    "name": "National Games Village Road",
    "highway": "residential",
    "from": "n234",
    "to": "n887",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9425951,
        77.624807
      ],
      [
        12.9423513,
        77.6249645
      ],
      [
        12.9422616,
        77.6249691
      ]
    ]
  },
  {
    "id": "r1089",
    "name": "National Games Village Road",
    "highway": "residential",
    "from": "n887",
    "to": "n885",
    "distance": 0.04,
    "status": "yellow",
    "coords": [
      [
        12.9422616,
        77.6249691
      ],
      [
        12.942287,
        77.6248804
      ],
      [
        12.9425482,
        77.6247114
      ]
    ]
  },
  {
    "id": "r1090",
    "name": "Hosur Road",
    "highway": "primary",
    "from": "n816",
    "to": "n779",
    "distance": 0.01,
    "status": "green",
    "coords": [
      [
        12.9342679,
        77.6123276
      ],
      [
        12.9343153,
        77.6123032
      ]
    ]
  },
  {
    "id": "r1091",
    "name": "Sarjapura Road",
    "highway": "primary",
    "from": "n875",
    "to": "n835",
    "distance": 0.01,
    "status": "green",
    "coords": [
      [
        12.9276325,
        77.6208265
      ],
      [
        12.9275971,
        77.6209204
      ]
    ]
  },
  {
    "id": "r1092",
    "name": "Mahayogi Vemana Road",
    "highway": "primary",
    "from": "n882",
    "to": "n513",
    "distance": 0.02,
    "status": "yellow",
    "coords": [
      [
        12.9274085,
        77.6209692
      ],
      [
        12.9272267,
        77.620899
      ]
    ]
  },
  {
    "id": "r1093",
    "name": "10th Main Road",
    "highway": "residential",
    "from": "n152",
    "to": "n829",
    "distance": 0.01,
    "status": "green",
    "coords": [
      [
        12.9311063,
        77.629466
      ],
      [
        12.9310641,
        77.629422
      ]
    ]
  },
  {
    "id": "r1094",
    "name": "7th Cross Road",
    "highway": "tertiary",
    "from": "n480",
    "to": "n172",
    "distance": 0.12,
    "status": "green",
    "coords": [
      [
        12.93001,
        77.6292344
      ],
      [
        12.9297646,
        77.6303354
      ]
    ]
  },
  {
    "id": "r1095",
    "name": "7th Cross Road",
    "highway": "tertiary",
    "from": "n172",
    "to": "n200",
    "distance": 0.11,
    "status": "green",
    "coords": [
      [
        12.9297646,
        77.6303354
      ],
      [
        12.9295532,
        77.6313425
      ]
    ]
  },
  {
    "id": "r1096",
    "name": "7th Cross Road",
    "highway": "tertiary",
    "from": "n200",
    "to": "n823",
    "distance": 0.18,
    "status": "green",
    "coords": [
      [
        12.9295532,
        77.6313425
      ],
      [
        12.9294358,
        77.6319416
      ],
      [
        12.929442,
        77.6320645
      ],
      [
        12.9296196,
        77.6325113
      ],
      [
        12.9297835,
        77.6329031
      ]
    ]
  },
  {
    "id": "r1097",
    "name": "Tavarekere Main Road",
    "highway": "secondary",
    "from": "n888",
    "to": "n225",
    "distance": 0.02,
    "status": "yellow",
    "coords": [
      [
        12.9311031,
        77.6098614
      ],
      [
        12.9310533,
        77.6098502
      ],
      [
        12.9309162,
        77.6098193
      ]
    ]
  },
  {
    "id": "r1098",
    "name": "Tavarekere Main Road",
    "highway": "secondary",
    "from": "n889",
    "to": "n888",
    "distance": 0.01,
    "status": "green",
    "coords": [
      [
        12.9311543,
        77.6098741
      ],
      [
        12.9311031,
        77.6098614
      ]
    ]
  },
  {
    "id": "r1099",
    "name": "Tavarekere Main Road",
    "highway": "secondary",
    "from": "n890",
    "to": "n889",
    "distance": 0.03,
    "status": "green",
    "coords": [
      [
        12.9314004,
        77.6099294
      ],
      [
        12.9311543,
        77.6098741
      ]
    ]
  },
  {
    "id": "r1100",
    "name": "Doctor M H Marigowda Road",
    "highway": "primary",
    "from": "n891",
    "to": "n860",
    "distance": 0.02,
    "status": "yellow",
    "coords": [
      [
        12.934847,
        77.6096669
      ],
      [
        12.9348223,
        77.6097044
      ],
      [
        12.9347879,
        77.6097526
      ],
      [
        12.9347623,
        77.6097886
      ]
    ]
  },
  {
    "id": "r1101",
    "name": "Doctor M H Marigowda Road",
    "highway": "primary",
    "from": "n232",
    "to": "n861",
    "distance": 0.51,
    "status": "yellow",
    "coords": [
      [
        12.9318314,
        77.6134432
      ],
      [
        12.9320325,
        77.6131852
      ],
      [
        12.9320874,
        77.6131149
      ],
      [
        12.93216,
        77.6130217
      ],
      [
        12.9334219,
        77.6114032
      ],
      [
        12.9335852,
        77.6111938
      ],
      [
        12.9335951,
        77.6111811
      ],
      [
        12.9336919,
        77.611057
      ],
      [
        12.9338827,
        77.6107889
      ],
      [
        12.9342149,
        77.6103468
      ],
      [
        12.9346389,
        77.6098041
      ],
      [
        12.9346439,
        77.6097984
      ],
      [
        12.9346913,
        77.6097349
      ]
    ]
  },
  {
    "id": "r1102",
    "name": "Tavarekere Main Road",
    "highway": "secondary",
    "from": "n861",
    "to": "n862",
    "distance": 0,
    "status": "green",
    "coords": [
      [
        12.9346913,
        77.6097349
      ],
      [
        12.9346732,
        77.6097197
      ]
    ]
  },
  {
    "id": "r1103",
    "name": "Doctor M H Marigowda Road",
    "highway": "primary",
    "from": "n861",
    "to": "n879",
    "distance": 0.01,
    "status": "green",
    "coords": [
      [
        12.9346913,
        77.6097349
      ],
      [
        12.9347187,
        77.609697
      ],
      [
        12.9347563,
        77.6096396
      ]
    ]
  },
  {
    "id": "r1104",
    "name": "Doctor M H Marigowda Road",
    "highway": "primary",
    "from": "n594",
    "to": "n891",
    "distance": 0.02,
    "status": "green",
    "coords": [
      [
        12.9349309,
        77.6095392
      ],
      [
        12.934847,
        77.6096669
      ]
    ]
  },
  {
    "id": "r1105",
    "name": "Doctor M H Marigowda Road",
    "highway": "primary",
    "from": "n883",
    "to": "n595",
    "distance": 0.06,
    "status": "green",
    "coords": [
      [
        12.9346253,
        77.6099664
      ],
      [
        12.9345423,
        77.6100705
      ],
      [
        12.9343185,
        77.6103512
      ],
      [
        12.9342559,
        77.6104312
      ]
    ]
  },
  {
    "id": "r1106",
    "name": "Tavarekere Main Road",
    "highway": "secondary",
    "from": "n863",
    "to": "n876",
    "distance": 0.01,
    "status": "green",
    "coords": [
      [
        12.934356,
        77.6097317
      ],
      [
        12.934302,
        77.609717
      ]
    ]
  },
  {
    "id": "r1107",
    "name": "Tavarekere Main Road",
    "highway": "secondary",
    "from": "n876",
    "to": "n864",
    "distance": 0.01,
    "status": "red",
    "coords": [
      [
        12.934302,
        77.609717
      ],
      [
        12.9343475,
        77.6096846
      ]
    ]
  },
  {
    "id": "r1108",
    "name": "Tavarekere Main Road",
    "highway": "secondary",
    "from": "n892",
    "to": "n893",
    "distance": 0.14,
    "status": "yellow",
    "coords": [
      [
        12.9340537,
        77.6097569
      ],
      [
        12.9339586,
        77.6097655
      ],
      [
        12.9335874,
        77.6098019
      ],
      [
        12.9332286,
        77.6098513
      ],
      [
        12.9328532,
        77.6100354
      ],
      [
        12.9328099,
        77.6100468
      ]
    ]
  },
  {
    "id": "r1109",
    "name": "Tavarekere Main Road",
    "highway": "secondary",
    "from": "n877",
    "to": "n892",
    "distance": 0.02,
    "status": "green",
    "coords": [
      [
        12.9342753,
        77.6097198
      ],
      [
        12.9340537,
        77.6097569
      ]
    ]
  },
  {
    "id": "r1110",
    "name": "5th Cross Road",
    "highway": "tertiary",
    "from": "n884",
    "to": "n19",
    "distance": 0.01,
    "status": "red",
    "coords": [
      [
        12.9378035,
        77.6185839
      ],
      [
        12.9377707,
        77.6186529
      ]
    ]
  },
  {
    "id": "r1111",
    "name": "Sarjapura Road",
    "highway": "primary",
    "from": "n894",
    "to": "n31",
    "distance": 0.42,
    "status": "red",
    "coords": [
      [
        12.9241909,
        77.6287288
      ],
      [
        12.9243272,
        77.6284284
      ],
      [
        12.9244232,
        77.628217
      ],
      [
        12.9248823,
        77.6271089
      ],
      [
        12.9249321,
        77.6269803
      ],
      [
        12.9256193,
        77.6253416
      ],
      [
        12.9256836,
        77.6251884
      ],
      [
        12.9257,
        77.6251492
      ]
    ]
  },
  {
    "id": "r1112",
    "name": "2nd Main Road",
    "highway": "residential",
    "from": "n616",
    "to": "n386",
    "distance": 0.06,
    "status": "green",
    "coords": [
      [
        12.9436401,
        77.6196185
      ],
      [
        12.9431513,
        77.6193994
      ]
    ]
  },
  {
    "id": "r1113",
    "name": "4th Main Road",
    "highway": "residential",
    "from": "n895",
    "to": "n540",
    "distance": 0.13,
    "status": "green",
    "coords": [
      [
        12.9299591,
        77.608158
      ],
      [
        12.9297087,
        77.6081422
      ],
      [
        12.9294589,
        77.6081271
      ],
      [
        12.9292147,
        77.6081116
      ],
      [
        12.9289582,
        77.6080976
      ],
      [
        12.9288295,
        77.6080765
      ]
    ]
  },
  {
    "id": "r1114",
    "name": "4th Main Road",
    "highway": "residential",
    "from": "n679",
    "to": "n579",
    "distance": 0.01,
    "status": "green",
    "coords": [
      [
        12.9275775,
        77.6080496
      ],
      [
        12.9275811,
        77.6079517
      ]
    ]
  },
  {
    "id": "r1115",
    "name": "Pipeline Road",
    "highway": "residential",
    "from": "n625",
    "to": "n500",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9418952,
        77.6291403
      ],
      [
        12.9422562,
        77.6290093
      ]
    ]
  },
  {
    "id": "r1116",
    "name": "Pipeline Road",
    "highway": "residential",
    "from": "n500",
    "to": "n626",
    "distance": 0.03,
    "status": "green",
    "coords": [
      [
        12.9422562,
        77.6290093
      ],
      [
        12.9425144,
        77.6289262
      ]
    ]
  },
  {
    "id": "r1117",
    "name": "Pipeline Road",
    "highway": "residential",
    "from": "n626",
    "to": "n489",
    "distance": 0.09,
    "status": "yellow",
    "coords": [
      [
        12.9425144,
        77.6289262
      ],
      [
        12.9426251,
        77.6288876
      ],
      [
        12.9427013,
        77.628851
      ],
      [
        12.9430029,
        77.6285438
      ],
      [
        12.9430125,
        77.6285339
      ],
      [
        12.9431204,
        77.6284178
      ]
    ]
  },
  {
    "id": "r1118",
    "name": "Pipeline Road",
    "highway": "residential",
    "from": "n489",
    "to": "n896",
    "distance": 0.2,
    "status": "green",
    "coords": [
      [
        12.9431204,
        77.6284178
      ],
      [
        12.9433204,
        77.6282287
      ],
      [
        12.9435758,
        77.6279965
      ],
      [
        12.9438048,
        77.6277912
      ],
      [
        12.9438967,
        77.6277131
      ],
      [
        12.9439622,
        77.6276557
      ],
      [
        12.943989,
        77.6276319
      ],
      [
        12.9440267,
        77.6275966
      ],
      [
        12.9440585,
        77.6275667
      ],
      [
        12.9442022,
        77.627432
      ],
      [
        12.9442268,
        77.6274035
      ],
      [
        12.9444058,
        77.6271839
      ]
    ]
  },
  {
    "id": "r1119",
    "name": "21st Cross Road",
    "highway": "residential",
    "from": "n897",
    "to": "n820",
    "distance": 0.04,
    "status": "green",
    "coords": [
      [
        12.9445725,
        77.6295385
      ],
      [
        12.9445602,
        77.6299295
      ]
    ]
  },
  {
    "id": "r1120",
    "name": "21st Cross Road",
    "highway": "residential",
    "from": "n630",
    "to": "n897",
    "distance": 0.01,
    "status": "green",
    "coords": [
      [
        12.9445743,
        77.6294786
      ],
      [
        12.9445725,
        77.6295385
      ]
    ]
  },
  {
    "id": "r1121",
    "name": "1st Main Road",
    "highway": "tertiary",
    "from": "n771",
    "to": "n760",
    "distance": 0.03,
    "status": "green",
    "coords": [
      [
        12.9295357,
        77.6342459
      ],
      [
        12.9294457,
        77.6344313
      ],
      [
        12.929418,
        77.6344884
      ]
    ]
  },
  {
    "id": "r1122",
    "name": "1st Main Road",
    "highway": "tertiary",
    "from": "n50",
    "to": "n173",
    "distance": 0.05,
    "status": "yellow",
    "coords": [
      [
        12.9292838,
        77.6346741
      ],
      [
        12.9293176,
        77.6345342
      ],
      [
        12.9294741,
        77.634222
      ]
    ]
  },
  {
    "id": "r1123",
    "name": "1st Main Road",
    "highway": "tertiary",
    "from": "n760",
    "to": "n50",
    "distance": 0.03,
    "status": "yellow",
    "coords": [
      [
        12.929418,
        77.6344884
      ],
      [
        12.9293632,
        77.6345955
      ],
      [
        12.9292838,
        77.6346741
      ]
    ]
  },
  {
    "id": "r1124",
    "name": "80 Feet Road",
    "highway": "secondary",
    "from": "n781",
    "to": "n833",
    "distance": 0.02,
    "status": "green",
    "coords": [
      [
        12.9344551,
        77.6123658
      ],
      [
        12.9345149,
        77.612491
      ]
    ]
  },
  {
    "id": "r1125",
    "name": "Hosur Road",
    "highway": "primary",
    "from": "n634",
    "to": "n850",
    "distance": 0.01,
    "status": "green",
    "coords": [
      [
        12.9295316,
        77.6150603
      ],
      [
        12.9295762,
        77.61503
      ]
    ]
  },
  {
    "id": "r1126",
    "name": "Hosur Road",
    "highway": "primary",
    "from": "n801",
    "to": "n586",
    "distance": 0.01,
    "status": "yellow",
    "coords": [
      [
        12.9296206,
        77.6151298
      ],
      [
        12.9295715,
        77.6151658
      ]
    ]
  },
  {
    "id": "r1127",
    "name": "Sarjapura Road",
    "highway": "primary",
    "from": "n850",
    "to": "n801",
    "distance": 0.01,
    "status": "yellow",
    "coords": [
      [
        12.9295762,
        77.61503
      ],
      [
        12.9296206,
        77.6151298
      ]
    ]
  },
  {
    "id": "r1128",
    "name": "Inner Ring Road",
    "highway": "primary",
    "from": "n34",
    "to": "n602",
    "distance": 0.18,
    "status": "green",
    "coords": [
      [
        12.9374592,
        77.627084
      ],
      [
        12.9375825,
        77.62723
      ],
      [
        12.9377023,
        77.6273983
      ],
      [
        12.9378348,
        77.6276162
      ],
      [
        12.9379459,
        77.6278228
      ],
      [
        12.9381715,
        77.6282821
      ],
      [
        12.9382733,
        77.6285082
      ]
    ]
  },
  {
    "id": "r1129",
    "name": "Hosur Road",
    "highway": "primary",
    "from": "n596",
    "to": "n815",
    "distance": 0.02,
    "status": "yellow",
    "coords": [
      [
        12.9316887,
        77.6137504
      ],
      [
        12.9318215,
        77.6136835
      ]
    ]
  },
  {
    "id": "r1130",
    "name": "Hosur Road",
    "highway": "primary",
    "from": "n784",
    "to": "n710",
    "distance": 0.02,
    "status": "green",
    "coords": [
      [
        12.9318272,
        77.6137757
      ],
      [
        12.9316547,
        77.6138662
      ]
    ]
  },
  {
    "id": "r1131",
    "name": "80 Feet Road",
    "highway": "secondary",
    "from": "n852",
    "to": "n696",
    "distance": 0.01,
    "status": "green",
    "coords": [
      [
        12.9358508,
        77.6151677
      ],
      [
        12.9358762,
        77.6152156
      ],
      [
        12.9359065,
        77.6152742
      ]
    ]
  },
  {
    "id": "r1132",
    "name": "4th Cross Road",
    "highway": "residential",
    "from": "n898",
    "to": "n532",
    "distance": 0.03,
    "status": "green",
    "coords": [
      [
        12.9327067,
        77.610074
      ],
      [
        12.9327431,
        77.6098256
      ]
    ]
  },
  {
    "id": "r1133",
    "name": "Tavarekere Main Road",
    "highway": "secondary",
    "from": "n898",
    "to": "n899",
    "distance": 0.03,
    "status": "green",
    "coords": [
      [
        12.9327067,
        77.610074
      ],
      [
        12.9324536,
        77.610088
      ]
    ]
  },
  {
    "id": "r1134",
    "name": "Tavarekere Main Road",
    "highway": "secondary",
    "from": "n893",
    "to": "n898",
    "distance": 0.01,
    "status": "yellow",
    "coords": [
      [
        12.9328099,
        77.6100468
      ],
      [
        12.9327067,
        77.610074
      ]
    ]
  },
  {
    "id": "r1135",
    "name": "Tavarekere Main Road",
    "highway": "secondary",
    "from": "n899",
    "to": "n890",
    "distance": 0.12,
    "status": "green",
    "coords": [
      [
        12.9324536,
        77.610088
      ],
      [
        12.9321467,
        77.6100912
      ],
      [
        12.9319978,
        77.6100763
      ],
      [
        12.9315389,
        77.6099605
      ],
      [
        12.9314004,
        77.6099294
      ]
    ]
  }
];

const roadNetwork = { nodes, edges: roads };

module.exports = { nodes, roads, roadNetwork };
