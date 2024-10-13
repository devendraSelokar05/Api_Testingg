import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({
  origin: '*',
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type'
}));



// Movies data (for your movie API)
let movies = [
  {
    "id":1,
    "title": "Game Of Thrones",
    "year": 2011,
    "rank": 15,
    "rankChange": "▲ -1",
    "rating": 96,
    "imdbRating": 9.2,
    "imdbVotes": "2m",
    "backdropImage": "https://images.justwatch.com/backdrop/10043150/s1440/game-of-thrones.webp/game-of-thrones.webp",
    "posterImage": "https://thedigitalbits.com/media/k2/items/cache/6e4b2528701707a3ed973fc804a3e209_XL.jpg",
    "duration": "58min",
    "highestRank": 1,
    "top10Days": 2113,
    "top100Days": 3180,
    "top1000Days": 3191,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "70k",
    "dislikes": "2.1k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "bjqEWgDVPe0",
    "type" : "series",
    "seasons": [ // Add season details here
      {
        "seasonNumber": 1,
        "episodes": 10,
        "posterImage": "https://images.justwatch.com/poster/8584648/s166/season-1.webp"
      },

      {
        "seasonNumber": 2,
        "episodes": 10,
        "posterImage": "https://images.justwatch.com/poster/8584616/s166/season-2.webp"
      },

      {
        "seasonNumber": 3,
        "episodes": 10,
        "posterImage": "https://images.justwatch.com/poster/8584568/s166/season-3.webp"
      },

      {
        "seasonNumber": 4,
        "episodes": 10,
        "posterImage": "https://images.justwatch.com/poster/8584555/s166/season-4.webp"
      },

      {
        "seasonNumber": 5,
        "episodes": 10,
        "posterImage": "https://images.justwatch.com/poster/8584386/s166/season-5.webp"
      },

      {
        "seasonNumber": 6,
        "episodes": 10,
        "posterImage": "https://images.justwatch.com/poster/8583927/s166/season-6.webp"
      },

      {
        "seasonNumber": 7,
        "episodes": 7,
        "posterImage": "https://images.justwatch.com/poster/78227677/s166/season-7.webp"
      },

      {
        "seasonNumber": 8,
        "episodes": 6,
        "posterImage": "https://images.justwatch.com/poster/123167430/s166/season-8.webp"
      },
    ]

  },
 

  {
    "id":2,
    "title": "TERMINATOR ZERO",
    "year": 2024,
    "rank": 52,
    "rankChange": "▲ +30",
    "rating": 76,
    "imdbRating": 7,
    "imdbVotes": "7.8k",
    "backdropImage": "https://images.justwatch.com/backdrop/319782457/s1440/terminator-zero.webp/terminator-zero.webp",
    "posterImage": "https://sportshub.cbsistatic.com/i/2024/07/02/da4783e5-b14b-47d5-9b9b-0f15b8f2dca9/terminator-zero.jpg?auto=webp&width=1080&height=1350&crop=0.8:1,smart",
    "duration": "50min",
    "highestRank": 1,
    "top10Days": 8,
    "top100Days": 22,
    "top1000Days": 42 ,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "10k",
    "dislikes": "3k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "1uRZ8CFExEY"
  

  },

  {
    "id":3,
    "title": "KILL",
    "year": 2024,
    "rank": 3,
    "rankChange": "▲ +1",
    "rating": 79,
    "imdbRating": 7.6,
    "imdbVotes": "27k",
    "backdropImage": "https://images.justwatch.com/backdrop/320515994/s1440/kill-2024.webp/kill-2024.webp",
    "posterImage": "https://m.media-amazon.com/images/M/MV5BZjI1ZjM3NjUtYTc1Ni00ODJmLWI5YjQtMWZiZTAyNTFiZGY1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    "duration": "1h 45min",
    "highestRank": 1,
    "top10Days": 81,
    "top100Days": 86,
    "top1000Days": 92,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "3k",
    "dislikes": "400",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "da7lKeeS67c"

  },
 


  {
    "id":4,
    "title": "SHOGUN",
    "year": 2024,
    "rank":25,
    "rankChange": "▲ -4",
    "rating": 74,
    "imdbRating": 8.6,
    "imdbVotes": "174k",
    "backdropImage": "https://images.justwatch.com/backdrop/309349707/s1440/shogun-2024.webp/shogun-2024.webp",
    "posterImage": "https://www.artofvfx.com/wp-content/uploads/2023/11/shogun_ver2_xlg-jpg.webp",
    "duration": "59min",
    "highestRank": 1,
    "top10Days": 125,
    "top100Days": 230,
    "top1000Days": 255,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "15k",
    "dislikes": "959",
    "watchlistText": "List",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId" : "yAN5uspO_hk",
    "type" : "series",
    "seasons": [ // Add season details here
      {
        "seasonNumber": 1,
        "episodes": 10,
        "posterImage": "https://images.justwatch.com/poster/309349704/s166/season-1.webp"
      },

  
    ]
  },


  {
    "id":5,
    "title": "STREE 2:SARKATE KA AATANK",
    "year": 2024,
    "rank":79,
    "rankChange": "▲ +50",
    "rating": 79,
    "imdbRating": 7.6,
    "imdbVotes": "24k",
    "backdropImage": "https://assets-in.bmscdn.com/discovery-catalog/events/et00364249-qbqdytudsg-landscape.jpg",
    "posterImage": "https://assetscdn1.paytm.com/images/cinema/Stree21-min-f4ac2e40-4389-11ef-83ec-5d141d381675.jpg",
    "duration": "  2h 27min",
    "highestRank": 1,
    "top10Days": 125,
    "top100Days": 230,
    "top1000Days": 255,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "200k",
    "dislikes": "100",
    "watchlistText": "Watchist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "KVnheXywIbY"
  },


  {
    "id":6,
    "title": "MIRZAPUR",
    "year": 2018,
    "rank": 25,
    "rankChange": "▲ +33",
    "rating": 80,
    "imdbRating": 9.0,
    "imdbVotes": "97k",
    "backdropImage": "https://m.media-amazon.com/images/S/pv-target-images/855e8bb647c4a3ccfcdceb8d8d354ffc1df41908b203322b96c6683a0a070f0a._SX1080_FMjpg_.jpg",
    "posterImage": "https://rukminim2.flixcart.com/image/850/1000/l0h1g280/poster/1/m/t/small-mirzapur-web-series-poster-multicolor-photopaper-print-12-original-imagc95bfufzrhw8.jpeg?q=90&crop=false",
    "duration": "35min",
    "highestRank": 1,
    "top10Days": 292,
    "top100Days": 702,
    "top1000Days": 852,
    "watchOptions": [
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "4k",
    "dislikes": "555",
    "watchlistText": "List",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "ZNeGF-PvRHY",
    "type" : "series",
    "seasons": [ // Add season details here
      {
        "seasonNumber": 1,
        "episodes": 10,
        "posterImage": "https://images.justwatch.com/poster/98993671/s166/season-1.webp"
      },

      {
        "seasonNumber": 2,
        "episodes": 10,
        "posterImage": "https://images.justwatch.com/poster/216332297/s166/season-2.webp"
      },

      {
        "seasonNumber": 3,
        "episodes": 10,
        "posterImage": "https://images.justwatch.com/poster/318579955/s166/season-3.webp"
      },
    ]
  },



  {
    "id":7,
    "title": "HOUSE OF THE DRAGON",
    "year": 2022,
    "rank":19,
    "rankChange": "▲ +11",
    "rating": 95,
    "imdbRating": 8.4,
    "imdbVotes": "446k",
    "backdropImage": "https://images.justwatch.com/backdrop/317367735/s1440/house-of-the-dragon.webp/house-of-the-dragon.webp",
    "posterImage": "https://deadline.com/wp-content/uploads/2022/05/house-of-dragon-fabien-frankel-ser-criston-cole-.jpg?w=691",
    "duration": "  1h 3min",
    "highestRank": 1,
    "top10Days": 154,
    "top100Days": 546,
    "top1000Days": 913,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "44k",
    "dislikes": "3k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "dVp0k6PV3Hk",
    "type" : "series",
    "seasons": [ // Add season details here
      {
        "seasonNumber": 1,
        "episodes": 8,
        "posterImage": "https://images.justwatch.com/poster/300920866/s166/season-1.webp"
      },

      {
        "seasonNumber": 2,
        "episodes": 8,
        "posterImage": "https://images.justwatch.com/poster/319802873/s166/season-2.webp"
      },

      {
        "seasonNumber": 3,
        "episodes": 10,
        "posterImage": "https://images.justwatch.com/poster/260075695/s166/season-3.webp"
      },
    ]
  },
 

  {
    "id":8,
    "title": "The Lord of the Rings: The Rings of Power",
    "year": 2022,
    "rank":18,
    "rankChange": "▲ +13",
    "rating": 88,
    "imdbRating": 6.9,
    "imdbVotes": "380k",
    "backdropImage": "https://images.justwatch.com/backdrop/320045052/s1440/the-lord-of-the-rings-the-rings-of-power.webp/the-lord-of-the-rings-the-rings-of-power.webp",
    "posterImage": "https://i0.wp.com/www.artofvfx.com/wp-content/uploads/2022/08/lord_of_the_rings_the_rings_of_power_ver52_xlg.jpg?fit=1280%2C1895&ssl=1",
    "duration": "  1h 8min",
    "highestRank": 1,
    "top10Days": 47,
    "top100Days": 197,
    "top1000Days": 938,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "57k",
    "dislikes": "2.1",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "Uc4dE4LJ3xQ"
  },
 
  {
    "id":9,
    "title": "Harold and the Purple Crayon",
    "year": 2024,
    "rank":18,
    "rankChange": "▲ +13",
    "rating": 72,
    "imdbRating": 5.7,
    "imdbVotes": "3.7k",
    "backdropImage": "https://images.justwatch.com/backdrop/320023808/s1440/harold-and-the-purple-crayon-2024.webp/harold-and-the-purple-crayon-2024.webp",
    "posterImage": "https://m.media-amazon.com/images/M/MV5BZGE3MmYxOTgtMGY1Ni00ZWQ4LTlhNjAtMzcxYjIzMjcwN2U1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    "duration": "  1h 8min",
    "highestRank": 1,
    "top10Days": 47,
    "top100Days": 197,
    "top1000Days": 938,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "51",
    "dislikes": "10",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "WojIv-PVYm8?"

  },


  {
    "id":10,
    "title": "PANCHAYAT",
    "year": 2020,
    "rank": 3,
    "rankChange": "▲ +2",
    "rating": 79,
    "imdbRating": 8.4,
    "imdbVotes": "87k",
    "backdropImage": "https://media.assettype.com/pratidintime%2F2024-03%2Fdd857ae7-f9b8-4909-a1ca-534aea22d538%2FSnapinsta_app_433426900_18339877129112131_5071267279140018758_n_1080.jpg",
    "posterImage": "https://images.justwatch.com/poster/316699631/s718/panchayat.jpg",
    "duration": "50min",
    "highestRank": 1,
    "top10Days": 1003,
    "top100Days": 1877,
    "top1000Days": 2141,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "1.3k",
    "dislikes": "200",
    "watchlistText": "List",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "mojZJ7oeD_g",
    "type" : "series",
    "seasons": [ // Add season details here
      {
        "seasonNumber": 1,
        "episodes": 8,
        "posterImage": "https://images.justwatch.com/poster/319303704/s166/season-1.webp"
      },

      {
        "seasonNumber": 2,
        "episodes": 8,
        "posterImage": "https://images.justwatch.com/poster/319303711/s166/season-2.webp"
      },

      {
        "seasonNumber": 3,
        "episodes": 8,
        "posterImage": "https://images.justwatch.com/poster/319303722/s166/season-3.webp"
      },
    ]
  },

  
  {
    "id":11,
    "title": "AFRAID",
    "year": 2024,
    "rank":18,
    "rankChange": "▲ +13",
    "rating": 56,
    "imdbRating": 5.1,
    "imdbVotes": "4.8k",
    "backdropImage": "https://images.justwatch.com/backdrop/320204860/s1440/they-listen.webp/they-listen.webp",
    "posterImage": "https://image.tmdb.org/t/p/original/w0SFLjdtQtjCB4LvwB7On2V1lgG.jpg",
    "duration": "  1h 8min",
    "highestRank": 1,
    "top10Days": 47,
    "top100Days": 197,
    "top1000Days": 938,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "51",
    "dislikes": "23",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "LE5QzD_qtxs"
  },


  {
    "id":12,
    "title": "Gyaarah Gyaarah ",
    "year": 2024,
    "rank":13,
    "rankChange": "▲ -6",
    "rating": 84,
    "imdbRating": 8.2,
    "imdbVotes": "4.9k",
    "backdropImage": "https://images.justwatch.com/backdrop/319735385/s1440/gyaarah-gyaarah.webp/gyaarah-gyaarah.webp",
    "posterImage": "https://i.scdn.co/image/ab67616d0000b2731a8592a35a69422ee7c3db58",
    "duration": "  1h 8min",
    "highestRank": 1,
    "top10Days": 44,
    "top100Days": 48,
    "top1000Days": 52,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "100",
    "dislikes": "12k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "qssOLOr5i4c"
  },

  {
    "id":13,
    "title": "Shekhar Home",
    "year": 2024,
    "rank":46,
    "rankChange": "▲ +96",
    "rating": 77,
    "imdbRating": 8.2,
    "imdbVotes": "10k",
    "backdropImage": "https://upload.wikimedia.org/wikipedia/en/7/71/Shekhar_Home.jpg",
    "posterImage": "https://static.seriesreminder.com/tvdb/sr_posters/shekhar-home/66abbf155a2e6.jpg",
    "duration": "  1h 8min",
    "highestRank": 1,
    "top10Days": 21,
    "top100Days": 39,
    "top1000Days": 46,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "52",
    "dislikes": "7",
    "watchlistText": "List",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "qU5-M1KrEAE"
  },

  
  {
    "id":14,
    "title": "TOUCH",
    "year": 2024,
    "rank":66,
    "rankChange": "▲ -3",
    "rating": 75,
    "imdbRating": 2.5,
    "imdbVotes": "10k",
    "backdropImage": "https://images.justwatch.com/backdrop/316456492/s1440/touch-0.webp/touch-0.webp",
    "posterImage": "https://s3.amazonaws.com/nightjarprod/content/uploads/sites/130/2024/05/08192348/7azx73Z5nYWgG9c00HH6CHVtgMX.jpg",
    "duration": "  2h 1min",
    
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "36",
    "dislikes": "9",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "y5fXuZ3ns_c"
  },

  
  {
    "id":15,
    "title": "Watchmen",
    "year": 2009,
    "rank":618,
    "rankChange": "▲ +300",
    "rating": 92,
    "imdbRating": 7.6,
    "imdbVotes": "589k",
    "backdropImage": "https://images.justwatch.com/backdrop/179879377/s1440/watchmen.webp/watchmen.webp",
    "posterImage": "https://cdn.europosters.eu/image/750/posters/watchmen-city-street-i13393.jpg",
    "duration": "  2h 42min",
    "highestRank": 3,
    "top10Days": 8,
    "top100Days": 105,
    "top1000Days": 2242,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "17k",
    "dislikes": "1k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "wglmbroElU0"
  },

  {
    "id":16,
    "title": "Thangalaan",
    "year": 2024,
    "rank": 15,
    "rankChange": "▲ +100",
    "rating": 96,
    "imdbRating": 7.2,
    "imdbVotes": "4.3k",
    "backdropImage": "https://images.justwatch.com/backdrop/319827592/s1440/thangalaan.webp/thangalaan.webp",
    "posterImage": "https://stat5.bollywoodhungama.in/wp-content/uploads/2024/07/Thangalaan-322x503.jpg",
    "duration": "2h 36min",
    "highestRank": 1,
    "top10Days": 213,
    "top100Days": 180,
    "top1000Days": 391,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "70k",
    "dislikes": "2.1k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "vidoId" : "tnKhlp6NaVs"

  },

 
  {
    "id":17,
    "title": "Horizon: An American Saga - Chapter 1", 
    "year": 2024,
    "rank":79,
    "rankChange": "▲ +300",
    "rating": 6.7,
    "imdbRating": 7.6,
    "imdbVotes": "26k",
    "backdropImage": "https://images.justwatch.com/backdrop/318955943/s1440/horizon-an-american-saga-chapter-1.webp/horizon-an-american-saga-chapter-1.webp",
    "posterImage": "https://preview.redd.it/official-poster-for-kevin-costners-horizon-v0-360r7vytresb1.jpg?width=640&crop=smart&auto=webp&s=45351eb62f67e0a8360d31512e7878c2c88e9c0d",
    "duration": "3h 1min",
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "544",
    "dislikes": "3k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "YYsReoZMj1k"
  },

  {
    "id":18,
    "title": "Despicable Me 4",
    "year": 2024,
    "rank":83,
    "rankChange": "▲ +300",
    "rating": 83,
    "imdbRating": 6.2,
    "imdbVotes": "42k",
    "backdropImage": "https://images.justwatch.com/backdrop/311602034/s1440/despicable-me-4-2024.webp/despicable-me-4-2024.webp",
    "posterImage": "https://shop.warnerbros.co.uk/cdn/shop/files/DM4-DVD_15_MF1.jpg?v=1721135650",
    "duration": "  1h 34min",
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "28k",
    "dislikes": "140",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "qQlr9-rF32A"
  },

  {
    "id":19,
    "title": "Trap",
    "year": 2024,
    "rank":78,
    "rankChange": " ▲ +300",
    "rating": 78,
    "imdbRating": 6.0,
    "imdbVotes": "66k",
    "backdropImage": "https://images.justwatch.com/backdrop/319859355/s1440/trap-2024.webp/trap-2024.webp",
    "posterImage": "https://i.redd.it/mfnua86j7mxc1.jpeg",
    "duration": " 1h 45min",
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "913",
    "dislikes": "221",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId":"hJiPAJKjUVg"
  },

  
  {
    "id":20,
    "title": "Inside Out 2",
    "year": 2015,
    "rank":134,
    "rankChange": "▲ -26",
    "rating": 97,
    "imdbRating": 8.1,
    "imdbVotes": "829k",
    "backdropImage": "https://images.justwatch.com/backdrop/178301399/s1440/inside-out.webp/inside-out.webp",
    "posterImage": "https://m.media-amazon.com/images/M/MV5BOTgxMDQwMDk0OF5BMl5BanBnXkFtZTgwNjU5OTg2NDE@._V1_.jpg",
    "duration": "  1h 35min",
    "highestRank": 3,
    "top10Days": 18,
    "top100Days": 220,
    "top1000Days": 2559,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "35k",
    "dislikes": "1.1k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "LEjhY15eCx0"
  },

  
  {
    "id":21,
    "title": "Raayan",
    "year": 2024,
    "rank": 155,
    "rankChange": "▲ -14",
    "rating": 55,
    "imdbRating": 6.5,
    "imdbVotes": "8.k",
    "backdropImage": "https://images.justwatch.com/backdrop/319476194/s1440/raayan.webp/raayan.webp",
    "posterImage": "https://alldatmatterz.com/uploads/2024/06/raayan_1718258332.webp",
    "duration": "2h 25min",
    "highestRank": 2,
    "top10Days": 13,
    "top100Days": 54,
    "top1000Days": 68,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "70k",
    "dislikes": "2.1k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "UzTm--hNa6Q"

  },
 

  
  {
    "id":22,
    "title": "The Bikeriders",
    "year": 2024,
    "rank":23,
    "rankChange": "▲ +43",
    "rating": 82,
    "imdbRating": 6.7,
    "imdbVotes": "46k",
    "backdropImage": "https://images.justwatch.com/backdrop/318653942/s1440/the-bikeriders.webp/the-bikeriders.webp",
    "posterImage": "https://l450v.alamy.com/450v/2wr9g0j/the-bikeriders-poster-2wr9g0j.jpg",
    "duration": "  1h 46min",
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "801",
    "dislikes": "151",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "-OAywYNvbMo"
  },

  

  {
    "id":23,
    "title": "You Gotta Believe",
    "year": 2024,
    "rank":21,
    "rankChange": "▲ +53",
    "imdbRating": 5.4,
    "imdbVotes": "350k",
    "backdropImage": "https://images.justwatch.com/backdrop/320911483/s1440/you-gotta-believe.webp/you-gotta-believe.webp",
    "posterImage": "https://m.media-amazon.com/images/M/MV5BZWM0ZjQ0MDgtYTNmNS00Yjc0LWFkNDUtMTM2MjU5NWVkZDRkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    "duration": "  1h 44min",
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "500",
    "dislikes": "1.3k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "0r_nbHSOyDE"
  },

 

  
  {
    "id":24,
    "title": "Batman: The Dark Knight Returns, Part 1",
    "year": 2012,
    "rank":1,
    "rankChange": "▲ +100",
    "rating": 88,
    "backdropImage": "https://images.justwatch.com/backdrop/320550333/s1440/batman-the-dark-knight-returns-part-1.webp/batman-the-dark-knight-returns-part-1.webp",
    "posterImage": "https://m.media-amazon.com/images/M/MV5BMzIxMDkxNDM2M15BMl5BanBnXkFtZTcwMDA5ODY1OQ@@._V1_.jpg",
    "duration": "  1h 16min",
    "highestRank": 1,
    "top10Days": 64,
    "top100Days": 148,
    "top1000Days": 1124,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "1.9k",
    "dislikes": "235",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "vuvykaDj2dY"
  },

  {
    "id":25,
    "title": "Fast and the Furious 7",
    "year": 2015,
    "rank":729,
    "rankChange": "▲ +314",
    "rating": 92,
    "imdbRating": 6.8,
    "imdbVotes": "426k",
    "backdropImage": "https://ew.com/thmb/gSHO6t0Y7bTBua1PoZRF65gJoWQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/furious-7-cast_0-2000-eac0fdddffb8449186a6514aaabd27f8.jpg",
    "posterImage": "https://www.tallengestore.com/cdn/shop/products/Fast_Furious_7_-_Paul_Walker_-_Vin_Diesel_-_Dwayne_Johnson_-_Hollywood_Action_Movie_Poster_92545455-e1d9-436c-9f4c-95143035c41b.jpg?v=1582543219",
    "duration": "  1h 46min",
    "highestRank": 25,
    "top10Days": 0,
    "top100Days": 51,
    "top1000Days": 1109,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "13k",
    "dislikes": "1k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId":"Skpu5HaVkOc"
  },


  {
    "id":26,
    "title": "Extraction",
    "year": 2020,
    "rank":724,
    "rankChange": "▲ +337",
    "rating": 94,
    "imdbRating": 6.8,
    "imdbVotes": "270k",
    "backdropImage": "https://images.justwatch.com/backdrop/177559132/s1440/extraction-2020.webp/extraction-2020.webp",
    "posterImage": "https://m.media-amazon.com/images/I/71ntZpru-4L._AC_UF894,1000_QL80_.jpg",
    "duration": "  1h 56min",
    "highestRank": 1,
    "top10Days": 5,
    "top100Days": 39,
    "top1000Days": 614,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "12k",
    "dislikes": "648",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId" : "L6P3nI6VnlY"
  },

  
  {
    "id":27,
    "title": "MULAN",
    "year": 2020,
    "rank":722,
    "rankChange": "▲ +594",
    "rating": 74,
    "imdbRating": 5.8,
    "imdbVotes": "160k",
    "backdropImage": "https://images.justwatch.com/backdrop/199842629/s1440/mulan-2020.webp/mulan-2020.webp",
    "posterImage": "https://i2.wp.com/www.themoviedb.org/t/p/original/tt8TxCL2W1Arv7vMYfjXMUO8JBW.jpg",
    "duration": "  1h 55min",
    "highestRank": 1,
    "top10Days": 8,
    "top100Days": 39,
    "top1000Days": 454,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "8.2k",
    "dislikes": "2.8k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "KK8FHdFluOQ"
  },


  {
    "id":28,
    "title": "Captain America: The First Avenger",
    "year": 2011,
    "rank":768,
    "rankChange": "▲ +353",
    "rating": 96,
    "imdbRating": 6.9,
    "imdbVotes": "910k",
    "backdropImage": "https://images.justwatch.com/backdrop/198981995/s1440/captain-america-the-first-avenger.webp/captain-america-the-first-avenger.webp",
    "posterImage": "https://www.geekalerts.com/u/Captain-America-The-First-Avenger-Poster.jpg",
    "duration": "  2h 4min",
    "highestRank": 4,
    "top10Days": 4,
    "top100Days": 192,
    "top1000Days": 2391,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "21k",
    "dislikes": "729",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId" : "ru0MEXIX_ZE"
  },

  
  {
    "id":29,
    "title": "Deadpool 2",
    "year": 2018,
    "rank":411,
    "rankChange": "▲ +295",
    "rating": 96,
    "imdbRating": 7.6,
    "imdbVotes": "683k",
    "backdropImage": "https://images.justwatch.com/backdrop/55613628/s1440/deadpool-2.webp/deadpool-2.webp",
    "posterImage": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/50f59dfe-f3de-4253-98ed-41972905ee82/dc580ue-a72e7954-b25c-413e-927d-779d52f76888.jpg/v1/fill/w_1024,h_1517,q_75,strp/deadpool_2___poster_by_omrkse10_dc580ue-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTUxNyIsInBhdGgiOiJcL2ZcLzUwZjU5ZGZlLWYzZGUtNDI1My05OGVkLTQxOTcyOTA1ZWU4MlwvZGM1ODB1ZS1hNzJlNzk1NC1iMjVjLTQxM2UtOTI3ZC03NzlkNTJmNzY4ODguanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.zFf-Ix2nMdNoATlRUejRxIR7zrT6yqVr6j-3ygUjdbY",
    "duration": "  1h 59min",
    "highestRank": 4,
    "top10Days": 19,
    "top100Days": 289,
    "top1000Days": 2214,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "33k",
    "dislikes": "1.3k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "D86RtevtfrA"
  },


  
  {
    "id":30,
    "title": "Deadpool & Wolverine",
    "year": 2024,
     "rank":4,
    "rankChange": "▲ +295",
    "rating": 95,
    "imdbRating": 8.0,
    "imdbVotes": "288k",
    "backdropImage": "https://images.justwatch.com/backdrop/319139252/s1440/deadpool-3.webp/deadpool",
    "posterImage": "https://xl.movieposterdb.com/24_07/2024/6263850/xl_deadpool-wolverine-movie-poster_a229c3b9.jpg",
    "duration": "  2h 8min",
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "5.3k",
    "dislikes": "196k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId" : "ea94nqoxnVQ"
  },

  
  {
    "id":31,
    "title": "The Marvels",
    "year": 2023,
    "rank":3046,
    "rankChange": "▲ +2311",
    "rating": 69,
    "imdbRating": 5.5,
    "imdbVotes": "133k",
    "backdropImage": "https://compote.slate.com/images/b3997261-711a-4d26-b18e-e1dd7dc19dd9.jpeg?crop=1560%2C1040%2Cx0%2Cy0",
    "posterImage": "https://i.redd.it/j9glw1siky9b1.jpg",
    "duration": "  1h 45min",
    "highestRank": 4,
    "top10Days": 5,
    "top100Days": 61,
    "top1000Days": 312,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "4.4k",
    "dislikes": "1.9k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId" : "gLuhrhEfQBc"
  },

  
  {
    "id":32,
    "title": "The Guardians of the Galaxy Holiday Special",
    "year": 2022,
    "rank":964,
    "rankChange": "▲ +445",
    "rating": 90,
    "imdbRating": 6.9,
    "imdbVotes": "97k",
    "backdropImage": "https://images.justwatch.com/backdrop/301916630/s1440/the-guardians-of-the-galaxy-holiday-special.webp/the-guardians-of-the-galaxy-holiday-special.webp",
    "posterImage": "https://lumiere-a.akamaihd.net/v1/images/p_disneyplusoriginals_guardiansofthegalaxy_holidayspeci_352289e6.jpeg",
    "duration": "  1h 45min",
    "highestRank": 4,
    "top10Days": 5,
    "top100Days": 61,
    "top1000Days": 312,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "8.1k",
    "dislikes": "876",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId" : "OYhFFQl4fLs"
  },

   
  {
    "id":33,
    "title": "Ant-Man and the Wasp: Quantumania",
    "year": 2023,
    "rank":2819,
    "rankChange": "▲ +2115",
    "rating": 73,
    "imdbRating": 6.0,
    "imdbVotes": "238k",
    "backdropImage": "https://images.justwatch.com/backdrop/303438481/s1440/ant-man-3.webp/ant-man-3.webp",
    "posterImage": "https://cdn.marvel.com/content/1x/ant-man_4.jpg",
    "duration": "  2h 5min",
    "highestRank": 1,
    "top10Days": 33,
    "top100Days": 113,
    "top1000Days": 349,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "16k",
    "dislikes": "1k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId" : "ZlNFpri-Y40"
  },

  {
    "id":34,
    "title": "Thor: Love and Thunder",
    "year": 2022,
    "rank":903,
    "rankChange": "▲ +537",
    "rating": 77,
    "imdbRating": 6.2,
    "imdbVotes": "238k",
    "backdropImage": "https://images.justwatch.com/backdrop/300409455/s1440/thor-love-and-thunder.webp/thor-love-and-thunder.webp",
    "posterImage": "https://images.moviesanywhere.com/a542619a429486f00c7d0cd8ad61b34d/28615d76-65cf-4110-ae21-d97f43debef3.jpg",
    "duration": "  1h 59min",
    "highestRank": 1,
    "top10Days": 77,
    "top100Days": 160,
    "top1000Days": 473,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "20k",
    "dislikes": "10k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "Go8nTmfrQd8"
  },

  
  {
    "id":35,
    "title": "Avengers: Endgame",
    "year": 2019,
    "rank":535,
    "rankChange": "▲ +247",
    "rating": 97,
    "imdbRating": 8.4,
    "imdbVotes": "1m",
    "backdropImage": "https://images.justwatch.com/backdrop/108456304/s1440/avengers-endgame.webp/avengers-endgame.webp",
    "posterImage": "https://rukminim2.flixcart.com/image/850/1000/ju2z6a80/poster/v/9/g/medium-endgameart-avengers-endgame-new-poster-for-room-office-original-imaff9ecy3wgbdtv.jpeg?q=90&crop=false",
    "duration": "  3h 1min",
    "highestRank": 1,
    "top10Days": 52,
    "top100Days": 555,
    "top1000Days": 1963,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "98k",
    "dislikes": "1.5k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "TcMBFSGVi1c"
  },

 
  {
    "id":36,
    "title": "Venom: LET THERE BE CARNAGE",
    "year": 2021,
    "rank":343,
    "rankChange": "▲ +270",
    "rating": 88,
    "imdbRating": 6.6,
    "imdbVotes": "550k",
    "backdropImage": "https://w0.peakpx.com/wallpaper/73/319/HD-wallpaper-venom-2-let-there-be-carnage-new-poster.jpg",
    "posterImage": "https://images.squarespace-cdn.com/content/v1/5ff0f2d566132f51dedacd3f/1660848818778-QJETBW2SBL4XRT7PWJ4U/goopy_03.jpg",
    "duration": "  1h 52min",
    "highestRank": 1,
    "top10Days": 88,
    "top100Days": 436,
    "top1000Days": 2049,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "38k",
    "dislikes": "2.5k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "-FmWuCgJmxo"
  },


  {
    "id":37,
    "title": "Logan",
    "year": 2017,
    "rank":330,
    "rankChange": "▲ +292",
    "rating": 96,
    "imdbRating": 8.1,
    "imdbVotes": "861k",
    "backdropImage": "https://images.justwatch.com/backdrop/10573557/s1440/logan.webp/logan.webp",
    "posterImage": "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/wolverine-3-logan-et00047340-06-10-2016-11-01-21.jpg",
    "duration": "  2h 17min",
    "highestRank": 6,
    "top10Days": 11,
    "top100Days": 365,
    "top1000Days": 2445,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "31k",
    "dislikes": "1.1k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "Div0iP65aZo"
  },

  {
    "id":38,
    "title": "The Amazing Spider-Man",
    "year": 2012,
    "rank":406,
    "rankChange": "▲ +113",
    "rating": 92,
    "imdbRating": 6.9,
    "imdbVotes": "714k",
    "backdropImage": "https://images.justwatch.com/backdrop/204659694/s1440/the-amazing-spider-man.webp/the-amazing-spider-man.webp",
    "posterImage": "https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_.jpg",
    "duration": "  2h 16min",
    "highestRank": 1,
    "top10Days": 50,
    "top100Days": 335,
    "top1000Days": 2145,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "100k",
    "dislikes": "2.1k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "-tnxzJ0SSOw"
  },
  {
    "id":39,
    "title": "Spiderman: NO WAY HOME",
    "year": 2021,
    "rank":16,
    "rankChange": "▲ +2220",
    "rating": 84,
    "imdbRating": 6.6,
    "imdbVotes": "340k",
    "backdropImage": "https://i.ytimg.com/vi/uyPCkTzhDxQ/maxresdefault.jpg",
    "posterImage": "https://m.media-amazon.com/images/I/81y0foYjoFL._AC_UF1000,1000_QL80_.jpg",
    "duration": "  1h 49min",
    "highestRank": 2,
    "top10Days": 114,
    "top100Days":127,
    "top1000Days": 238,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "129",
    "dislikes": "47",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "JfVOs4VSpmA"
  },
  
   
  {
    "id":40,
    "title": "Doctor Strange In the Multiverse Of Madness",
    "year": 2022,
    "rank":7480,
    "rankChange": "▲ +738",
    "rating": 90,
    "imdbRating": 8.2,
    "imdbVotes": "97k",
    "backdropImage": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EB479687DDB78C087550ADC004EDEEF96DF6354724342E3599BABB94389B6E3/scale?width=1200&aspectRatio=1.78&format=webp",
    "posterImage": "https://lumiere-a.akamaihd.net/v1/images/p_drstrangeinthemultiverseofmadness_245_476cabb1.jpeg",
    "duration": "  25min",
    "highestRank": 1,
    "top10Days": 24,
    "top100Days":45,
    "top1000Days": 1385,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "4.8",
    "dislikes": "481",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "aWzlQ2N6qqg"
  },
  
  {
    "id":41,
    "title": "Shang-Chi and the Legend of the Ten Rings",
    "year": 2021,
    "rank":790,
    "rankChange": "▲ +353",
    "rating": 93,
    "imdbRating": 7.4,
    "imdbVotes": "446k",
    "backdropImage": "https://images.justwatch.com/backdrop/249102371/s1440/shang-chi-and-the-legend-of-the-ten-rings.webp/shang-chi-and-the-legend-of-the-ten-rings.webp",
    "posterImage": "https://i.pinimg.com/originals/0c/74/1d/0c741d63608bcbaf753c956a7c996cab.jpg",
    "duration": "  2h 12min",
    "highestRank": 1,
    "top10Days": 69,
    "top100Days": 83,
    "top1000Days": 705,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "38k",
    "dislikes": "2.5k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "pOEvuzEVh8g"
  },

  {
    "id":42,
    "title": "Annavaram",
    "year": 2006,
    "rank":12743,
    "rankChange": "+20370",
    "rating": 93,
    "imdbRating": 4.9,
    "imdbVotes": "985k",
    "backdropImage": "https://images.justwatch.com/backdrop/202520478/s1440/annavaram.webp/annavaram.webp",
    "posterImage": "https://m.media-amazon.com/images/M/MV5BNTUzYTY2ZjQtZDA2Yy00MGJkLWJhODAtYzQ4NWNlYmVkYjU3XkEyXkFqcGc@._V1_.jpg",
    "duration": "  2h 55min",
    "highestRank": 213,
    "top10Days": 0,
    "top100Days": 0,
    "top1000Days": 3,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "38k",
    "dislikes": "2.5k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "CCL_zth2mms"
  },
  
  
  {
    "id":43,
    "title": "Ravanasura",
    "year": 2023,
    "rank":605,
    "rankChange": "▲ +467",
    "rating": 40,
    "imdbRating": 5.7,
    "imdbVotes": "2.6k",
    "backdropImage": "https://images.justwatch.com/backdrop/304258843/s1440/ravanasura.webp/ravanasura.webp",
    "posterImage": "https://i.pinimg.com/originals/48/61/3e/48613e3dfe4b8d590dbf5c04acbe2bd9.jpg",
    "duration": "  2h 22min",
    "highestRank": 1,
    "top10Days": 4,
    "top100Days": 24,
    "top1000Days": 167,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "77",
    "dislikes": "2.1k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "qLGZbo_YjqE"
  },


  
  {
    "id":44,
    "title": "Bholaa",
    "year": 2024,
    "rank":3262,
    "rankChange": "▲ +2513",
    "rating": 53,
    "backdropImage": "https://images.justwatch.com/backdrop/304668096/s1440/bholaa-2022.webp/bholaa-2022.webp",
    "posterImage": "https://m.media-amazon.com/images/M/MV5BYjgxNzY1MjktOTg4Ny00NzU5LWEzNmItMGQyZWYwMjhhNmQxXkEyXkFqcGc@._V1_.jpg",
    "duration": "  2h 24min",
    "highestRank": 1,
    "top10Days": 13,
    "top100Days": 85,
    "top1000Days": 259,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "159K",
    "dislikes": "112",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "K-EMszLvRIQ"
  },

  
  
  {
    "id":45,
    "title": "DEVARA PART 1",
    "year": 2024,
    "rank":1,
    "rankChange": "▲ +250",
    "backdropImage": "https://images.justwatch.com/backdrop/320975332/s1440/ntr-30.webp/ntr-30.webp",
    "posterImage": "https://akm-img-a-in.tosshub.com/indiatoday/styles/medium_crop_simple/public/2024-01/jr_ntr_devara_glimpse.jpg?VersionId=FO..TRJHzYBdPzgb7_gXZNbgHVzmQqHS&size=750:*",
    "duration": "  2h 50min",
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "78k",
    "dislikes": "3.2k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "Xg0vBOxV2to"
  },




  {
    "id":46,
    "title": "The Umbrella Academy",
    "year": 2019,
    "rank":143,
    "rankChange": "▲ +7",
    "rating": 92,
    "imdbRating": 7.8,
    "imdbVotes": "293k",
    "backdropImage": "https://images.justwatch.com/backdrop/286521525/s1440/the-umbrella-academy.webp/the-umbrella-academy.webp",
    "posterImage": "https://m.media-amazon.com/images/I/61Bn5CFCpJL._AC_UF894,1000_QL80_.jpg",
    "duration": "  2h 5min",
    "highestRank": 2,
    "top10Days": 14,
    "top100Days":237,
    "top1000Days": 1871,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "29k",
    "dislikes": "2.4k",
    "watchlistText": "List",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "0DAmWHxeoKw"
  },

  


  {
    "id":47,
    "title": "Gladiator II",
    "year": 2024,
    "rating": 85,
    "rank":500,
    "rankChange": "▲ +4300",
    "imdbRating": 6.3,
    "imdbVotes": "593k",
    "backdropImage": "https://images.justwatch.com/backdrop/318611814/s1440/gladiator-2.webp/gladiator-2.webp",
    "posterImage": "https://www.mensjournal.com/.image/t_share/MjA3NzA0NzgxMTA2NTIxNzUz/gladiator-2-poster.jpg",
    "duration": "  2h 30min",
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "79",
    "dislikes": "6",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "Ts0N8swyWFI"
  },


  {
    "id":48,
    "title": "Thunderbolts*",
    "year": 2025,
    "rank":123,
    "rankChange": "▲ +78",
    "rating": 95,
    "imdbRating": 8.8,
    "imdbVotes": "490k",
    "backdropImage": "https://images.justwatch.com/backdrop/300660467/s1440/thunderbolts.webp/thunderbolts.webp",
    "posterImage": "https://i.pinimg.com/564x/f9/be/23/f9be23cdee7da4d4d05a4e95c6c9516c.jpg",
    "duration": "  2h 0min",
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "38k",
    "dislikes": "10k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "v-94Snw-H4o"
  },

  {
    "id":49,
    "title": "The Lord of the Rings: The Fellowship of the Ring",
    "year": 2001,
    "rank":123,
    "rankChange": "▲ +148",
    "rating": 96,
    "imdbRating": 8.9,
    "imdbVotes": "2m",
    "backdropImage": "https://c4.wallpaperflare.com/wallpaper/228/806/372/the-lord-of-the-rings-the-lord-of-the-rings-the-fellowship-of-the-ring-wallpaper-preview.jpg",
    "posterImage": "https://images.moviesanywhere.com/198e228b071c60f5ad57e5f62fe60029/ff22cad6-2218-414d-b853-3f95d76905c7.jpg",
    "duration": "  2h 58min",
    "highestRank": 5,
    "top10Days": 2,
    "top100Days":532,
    "top1000Days": 2983,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "57k",
    "dislikes": "2.1k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "V75dMMIW2B4"
  },

  {
    "id":50,
    "title": "It Follows",
    "year": 2015,
    "rank":234,
    "rankChange": "▲ +330",
    "rating": 89,
    "imdbRating": 6.8,
    "imdbVotes": "277k",
    "backdropImage": "https://images.justwatch.com/backdrop/183675309/s1440/it-follows.webp/it-follows.webp",
    "posterImage": "https://m.media-amazon.com/images/M/MV5BNGZiYWRiYjAtODU0NS00YzAzLTk2MzQtZGVlMzVjM2M3MGQ3XkEyXkFqcGc@._V1_.jpg",
    "duration": "  1h 41min",
    "highestRank": 3,
    "top10Days": 9,
    "top100Days":2177,
    "top1000Days": 1871,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "29k",
    "dislikes": "2.4k",
    "watchlistText": "List",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "HkZYbOH0ujw"
  },

  {
    "id":51,
    "title": "Ridley",
    "year": 2022,
    "rank":430,
    "rankChange": "▲ -21",
    "rating": 43,
    "imdbRating": 4.2,
    "imdbVotes": "293k",
    "backdropImage": "https://images.justwatch.com/backdrop/300670843/s1440/ridley.webp/ridley.webp",
    "posterImage": "https://m.media-amazon.com/images/M/MV5BM2NhYWY1ODgtYjU3Ny00ZWIzLTg3NTctMzBhOWIzZGY0YzVkXkEyXkFqcGc@._V1_.jpg",
    "duration": "  1h 12min",
    "highestRank": 2,
    "top10Days": 14,
    "top100Days":132,
    "top1000Days": 183,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "129",
    "dislikes": "47",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "r97L5PpKk9E"
  },
  {
    "id":52,
    "title": "Gremlins: Secrets of the Mogwai ",
    "year": 2023,
    "rank":130,
    "rankChange": "▲ +20",
    "rating": 47,
    "imdbRating": 7.0,
    "imdbVotes": "293k",
    "backdropImage": "https://images.justwatch.com/backdrop/306854096/s1440/gremlins-secrets-of-the-mogwai.webp/gremlins-secrets-of-the-mogwai.webp",
    "posterImage": "https://images.justwatch.com/poster/318611992/s718/gremlins-secrets-of-the-mogwai.jpg",
    "duration": "  23min",
    "highestRank": 1,
    "top10Days": 14,
    "top100Days":12,
    "top1000Days": 183,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "129",
    "dislikes": "47",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "rCJ8NjUnSk4"
  },

  {
    "id":53,
    "title": "Spin the Bottle",
    "year": 2024,
    "rank":130,
    "rankChange": "▲ +25",
    "rating": 47,
    "imdbRating": 7.0,
    "imdbVotes": "293k",
    "backdropImage": "https://images.justwatch.com/backdrop/320945962/s1440/.webp.webp",
    "posterImage": "https://m.media-amazon.com/images/M/MV5BZmJjOWJkZmUtZmFhMi00NTg1LWI5Y2QtNTYxOGI4N2M2NDhlXkEyXkFqcGc@._V1_.jpg",
    "duration": "  1h 23min",
    "highestRank": 1,
    "top10Days": 14,
    "top100Days":12,
    "top1000Days": 183,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "129",
    "dislikes": "47",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "KkSk2xG82Zs"
  },

  {
    "id":54,
    "title": "Small Things Like These",
    "year": 2024,
    "rank":13,
    "rankChange": "▲ +24",
    "rating": 47,
    "imdbRating": 7.5,
    "imdbVotes": "428k",
    "backdropImage": "https://images.justwatch.com/backdrop/312101749/s1440/small-things-like-these.webp/small-things-like-these.webp",
    "posterImage": "https://www.thehollywoodnews.com/wp-content/uploads/1_Art_SmallThingsLikeThese-691x1024.jpg",
    "duration": "  1h 38min",
    "highestRank": 1,
    "top10Days": 24,
    "top100Days":45,
    "top1000Days": 238,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "129",
    "dislikes": "47",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "Nqwn5Y_Y4xs"
  },

  {
    "id":55,
    "title": "Brothers",
    "year": 2024,
    "rank":23,
    "rankChange": "▲ +24",
    "rating": 47,
    "imdbRating": 6.5,
    "imdbVotes": "128k",
    "backdropImage": "https://m.media-amazon.com/images/M/MV5BNWJiZjM4ZGMtNjlkNC00YTMxLWEzNmQtOTA2YzE4MDA4MmIwXkEyXkFqcGc@._V1_.jpg",
    "posterImage": "https://m.media-amazon.com/images/M/MV5BNzQ4Njg3Mjg5Nl5BMl5BanBnXkFtZTgwODE5MDg1NjE@._V1_.jpg",
    "duration": "  1h 28min",
    "highestRank": 1,
    "top10Days": 14,
    "top100Days":57,
    "top1000Days": 138,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "129",
    "dislikes": "47",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "QuRSCU0tOKs"
  },

  {
    "id":56,
    "title": "The Fire Inside",
    "year": 2024,
    "rank":46,
    "rankChange": "▲ +4",
    "rating": 47,
    "imdbRating": 7.5,
    "imdbVotes": "56k",
    "backdropImage": "https://images.justwatch.com/backdrop/319494366/s1440/flint-strong.webp/flint-strong.webp",
    "posterImage": "https://thesource.com/wp-content/uploads/2024/09/unnamed-6-1.jpg",
    "duration": "  1h 49min",
    "highestRank": 1,
    "top10Days": 14,
    "top100Days":17,
    "top1000Days": 38,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "129",
    "dislikes": "47",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "Z4EthHjPg-A"
  },

  {
    "id":57,
    "title": "Where's Wanda?",
    "year": 2024,
    "rank":46,
    "rankChange": "▲ +10",
    "rating": 47,
    "imdbRating": 6.5,
    "imdbVotes": "46k",
    "backdropImage": "https://images.justwatch.com/backdrop/320609232/s1440/wheres-wanda.webp/wheres-wanda.webp",
    "posterImage": "https://cdn.cinematerial.com/p/297x/loqnf0a5/wheres-wanda-movie-poster-md.jpg?v=1726155943",
    "duration": "  1h 49min",
    "highestRank": 1,
    "top10Days": 14,
    "top100Days":17,
    "top1000Days": 38,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "129",
    "dislikes": "47",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "csKOquHUGiE"
  },

  {
    "id":58,
    "title": "Salem's Lot ",
    "year": 2024,
    "rank":26,
    "rankChange": "▲ +1",
    "rating": 84,
    "imdbRating": 6.8,
    "imdbVotes": "82k",
    "backdropImage": "https://images.justwatch.com/backdrop/320706218/s1440/salems-lot.webp/salems-lot.webp",
    "posterImage": "https://posterspy.com/wp-content/uploads/2022/03/salems-lot-twitter.jpg",
    "duration": "  1h 53min",
    "highestRank": 2,
    "top10Days": 114,
    "top100Days":127,
    "top1000Days": 238,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "129",
    "dislikes": "47",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "QtVzKkv03ic"
  },

 

  {
    "id":59,
    "title": "Howl's Moving Castle",
    "year": 2004,
    "rank":3480,
    "rankChange": "▲ +2738",
    "rating": 96,
    "imdbRating": 8.2,
    "imdbVotes": "463k",
    "backdropImage": "https://images.justwatch.com/backdrop/9036037/s1440/howls-moving-castle.webp/howls-moving-castle.webp",
    "posterImage": "https://m.media-amazon.com/images/I/81nY1K-OigL.jpg",
    "duration": "  1h 59min",
    "highestRank": 18,
    "top10Days": 0,
    "top100Days":2,
    "top1000Days": 385,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "117",
    "dislikes": "565",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "iwROgK94zcM"
  },
 
  {
    "id":60,
    "title": "Saripodhaa Sanivaaram",
    "year": 2024,
    "rank":4,
    "rankChange": "▲ +9",
    "rating": 45,
    "imdbRating": 7.2,
    "imdbVotes": "4.6k",
    "backdropImage": "https://images.justwatch.com/backdrop/319530142/s1440/saripodhaa-sanivaaram.webp/saripodhaa-sanivaaram.webp",
    "posterImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR93OSZF2pjPVQOkxaIMgS_BlBPuRFaWJ1ZaA&s",
    "duration": "  2h 50min",
    "highestRank": 2,
    "top10Days": 8,
    "top100Days":17,
    "top1000Days": 34,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "39",
    "dislikes": "30",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "dkx07ZvjKE4"
  },

  {
    "id":61,
    "title": "The Greatest of All Time",
    "year": 2024,
    "rank":1,
    "rankChange": "▲ +9",
    "rating": 37,
    "imdbRating": 6.6,
    "imdbVotes": "14k",
    "backdropImage": "https://images.justwatch.com/backdrop/320516448/s1440/thalapathy-68.webp/thalapathy-68.webp",
    "posterImage": "https://preview.redd.it/the-greatest-of-all-time-new-poster-v0-21g6479eu68d1.jpeg?width=640&crop=smart&auto=webp&s=aa8e6f8ab02c9672498e13a2e3e5a296dbe26ff9",
    "duration": "  3h 3min",
    "highestRank": 1,
    "top10Days": 5,
    "top100Days":29,
    "top1000Days": 31,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "20",
    "dislikes": "18",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "tb37SwBvRoQ"
  },
  
  {
    "id":62,
    "title": "GHOSTBUSTERS",
    "year": 2016,
    "rank":149,
    "rankChange": "▲ +610",
    "rating": 59,
    "imdbRating": 6.8,
    "imdbVotes": "250k",
    "backdropImage": "https://images.justwatch.com/backdrop/178693367/s1440/ghostbusters.webp/ghostbusters.webp",
    "posterImage": "https://devdiscourse.blob.core.windows.net/devnews/19_10_2021_08_25_17_529654.jpg",
    "duration": "  1h 57min",
    "highestRank": 1,
    "top10Days": 20,
    "top100Days":121,
    "top1000Days": 921,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "5.6",
    "dislikes": "3.7",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "HpOBXh02rVc"
  },

  {
    "id":63,
    "title": "Double Ismart",
    "year": 2024,
    "rank":39,
    "rankChange": "▲ +31",
    "rating": 25,
    "imdbRating": 2.9,
    "imdbVotes": "1.5k",
    "backdropImage": "https://images.justwatch.com/backdrop/319810520/s1440/double-ismart.webp/double-ismart.webp",
    "posterImage": "https://stat4.bollywoodhungama.in/wp-content/uploads/2024/07/Double-Ismart-322x483.jpeg",
    "duration": "  2h 36min",
    "highestRank": 1,
    "top10Days": 7,
    "top100Days":34,
    "top1000Days": 53,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "20",
    "dislikes": "34",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "OOhbzK-BBnc"
  },
  {
    "id":64,
    "title": "Salaar",
    "year": 2023,
    "rank":21,
    "rankChange": "▲ +347",
    "rating": 64,
    "imdbRating": 6.6,
    "imdbVotes": "70k",
    "backdropImage": "https://images.justwatch.com/backdrop/310502802/s1440/salaar.webp/salaar.webp",
    "posterImage": "https://wallpapercave.com/wp/wp13540562.jpg",
    "duration": "  2h 55min",
    "highestRank": 1,
    "top10Days": 76,
    "top100Days":249,
    "top1000Days": 311,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "371",
    "dislikes": "175",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "HihakYi5M2I"
  },

  {
 
    "id":65,
    "title": "Aavesham",
    "year": 2024,
    "rank":43,
    "rankChange": "▲ +32",
    "rating": 82,
    "imdbRating": 7.8,
    "imdbVotes": "21k",
    "backdropImage": "https://images.justwatch.com/backdrop/313630178/s1440/aavesham-2024.webp/aavesham-2024.webp",
    "posterImage": "https://image.tmdb.org/t/p/original/k5RWPaNjgRcNvGoawYaQHQwyctI.jpg",
    "duration": "  2h 38min",
    "highestRank": 1,
    "top10Days": 68,
    "top100Days":160,
    "top1000Days": 177,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "288",
    "dislikes": "48",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "UttccYQXpTM"
  },
  {

    "id":66,
    "title": "Bhediya",
    "year": 2022,
    "rank":64,
    "rankChange": "▲ +79",
    "rating": 81,
    "imdbRating": 6.7,
    "imdbVotes": "26k",
    "backdropImage": "https://images.justwatch.com/backdrop/301523379/s1440/bhediya.webp/bhediya.webp",
    "posterImage": "https://wallpapercave.com/wp/wp12167960.jpg",
    "duration": "  2h 36min",
    "highestRank": 1,
    "top10Days": 179,
    "top100Days":319,
    "top1000Days": 673,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "625",
    "dislikes": "122",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "d_BPlvbw_ok"
  },

  {
 
    "id":67,
    "title": "Ulajh",
    "year": 2024,
    "rank":8,
    "rankChange": "▲ +4",
    "rating": 20,
    "imdbRating": 6.7,
    "imdbVotes": "21k",
    "backdropImage": "https://images.justwatch.com/backdrop/321200667/s1440/ulajh.webp/ulajh.webp",
    "posterImage": "https://m.media-amazon.com/images/M/MV5BYmJiYTQ4NWYtNDFmYS00NjJlLWJhZDItMGY4OWJiMDE0N2UyXkEyXkFqcGc@._V1_.jpg",
    "duration": "  2h 14min",
    "highestRank": 2,
    "top10Days": 5,
    "top100Days":10,
    "top1000Days": 51,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "13",
    "dislikes": "28",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "Tk1EQD7vGiY"
  },

  {

    "id":68,
    "title": "Rathnam",
    "year": 2024,
    "rank":30,
    "rankChange": "▲ +33",
    "rating": 33,
    "imdbRating": 5.4,
    "imdbVotes": "3.4k",
    "backdropImage": "https://images.justwatch.com/backdrop/316453487/s1440/rathnam.webp/rathnam.webp",
    "posterImage": "https://static.moviecrow.com/gallery/20240108/224283-Rathanam.jpeg",
    "duration": "  2h 39min",
    "highestRank": 4,
    "top10Days": 5,
    "top100Days":27,
    "top1000Days": 101,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "16",
    "dislikes": "17",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "eeZAC976hjw"
  },

  
  {

    "id":69,
    "title": "Tholi Prema",
    "year": 2018,
    "rank":3365,
    "rankChange": "▲ +2722",
    "rating": 77,
    "imdbRating": 7.2,
    "imdbVotes": "3.7k",
    "backdropImage": "https://images.justwatch.com/backdrop/42954185/s1440/tholi-prema-2018.webp/tholi-prema-2018.webp",
    "posterImage": "https://files.prokerala.com/movies/pics/800/tholi-prema-posters-84059.jpg",
    "duration": "  2h 26min",
    "highestRank": 2,
    "top10Days": 18,
    "top100Days":118,
    "top1000Days":1300,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "109",
    "dislikes": "17",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "nS9ZM4R1DJw"
  },

  {

    "id":70,
    "title": "A Aa",
    "year": 2016,
    "rank":3333,
    "rankChange": "▲ +2548",
    "rating": 79,
    "imdbRating": 7.8,
    "imdbVotes": "3.9k",
    "backdropImage": "https://images.justwatch.com/backdrop/319043243/s1440/a-aa.webp/a-aa.webp",
    "posterImage": "https://i.pinimg.com/550x/be/b2/3d/beb23d971116f4cea5859a41516673f1.jpg",
    "duration": "  2h 26min",
    "highestRank": 2,
    "top10Days": 18,
    "top100Days":118,
    "top1000Days":1300,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "109",
    "dislikes": "17",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "SU7h7Nan_4o"
  },

  {
 
    "id":71,
    "title": "Manjummel Boys",
    "year": 2024,
    "rank":460,
    "rankChange": "▲ +461",
    "rating": 89,
    "imdbRating": 8.3,
    "imdbVotes": "2.2k",
    "backdropImage": "https://images.justwatch.com/backdrop/311759378/s1440/manjummel-boys.webp/manjummel-boys.webp",
    "posterImage": "https://img.nowrunning.com/content/movie/2023/manju-27581/Stills/manjummelboys_2024212.jpg",
    "duration": "  2h 15min",
    "highestRank": 1,
    "top10Days": 54,
    "top100Days":167,
    "top1000Days": 225,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "275",
    "dislikes": "21",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "rqBuKT_8dMY"
  },
  {

    "id":72,
    "title": "12th Fail",
    "year": 2023,
    "rank":83,
    "rankChange": "▲ +78",
    "rating": 83,
    "imdbRating": 8.8,
    "imdbVotes": "130k",
    "backdropImage": "https://images.justwatch.com/backdrop/312357660/s1440/12th-fail.webp/12th-fail.webp",
    "posterImage": "https://image.tmdb.org/t/p/original/26xY5efr080WgR8mGhFiwSBhh9e.jpg",
    "duration": "  2h 28min",
    "highestRank": 1,
    "top10Days": 127,
    "top100Days":264,
    "top1000Days": 346,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "869",
    "dislikes": "147",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "WeMJo701mvQ"
  },

  {
 
    "id":73,
    "title": "Bhimaa",
    "year": 2024,
    "rank":235,
    "rankChange": "▲ +20",
    "rating": 5.2,
    "imdbRating": 986,
    "imdbVotes": "87k",
    "backdropImage": "https://images.justwatch.com/backdrop/315907160/s1440/bhimaa.webp/bhimaa.webp",
    "posterImage": "https://cdn.gulte.com/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-12-at-10.35.16-AM-scaled.jpeg",
    "duration": "2h 21min",
    "highestRank": 18,
    "top10Days": 0,
    "top100Days":16,
    "top1000Days": 131,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "1",
    "dislikes": "1",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "P3t--CmbibE"
  },
  {

    "id":74,
    "title": "Pushpa: The Rise",
    "year": 2021,
    "rank":1397,
    "rankChange": "▲ +411",
    "rating": 82,
    "imdbRating": 7.6,
    "imdbVotes": "90k",
    "backdropImage": "https://images.justwatch.com/backdrop/257781354/s1440/pushpa.webp/pushpa.webp",
    "posterImage": "https://images.sr.roku.com/idType/roku/context/global/id/b29c7a063ab25b81bd7d11c56f126f27/images/gracenote/assets/p21200456_v_v8_aa.jpg/magic/396x0/filters:quality(70)",
    "duration": "2h 59min",
    "highestRank": 1,
    "top10Days": 127,
    "top100Days":622,
    "top1000Days": 1088,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "2.6",
    "dislikes": "537",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "pKctjlxbFDQ"
  },
  {

    "id":75,
    "title": "The Family Star",
    "year": 2024,
    "rank":1123,
    "rankChange": "▲ +476",
    "rating": 37,
    "imdbRating": 5.3,
    "imdbVotes": "4.8k",
    "backdropImage": "https://m.media-amazon.com/images/S/pv-target-images/b815768031a3ecc44dc665c6a2e5b223cda2c4b4812f2918f40f025845363239.jpg",
    "posterImage": "https://m.media-amazon.com/images/M/MV5BOTRjOTM5YzktNzZkMS00ODFhLWJjNGQtYTMwNjRmZmFlMzM5XkEyXkFqcGc@._V1_.jpg",
    "duration": "2h 39min",
    "highestRank": 1,
    "top10Days": 50,
    "top100Days":118,
    "top1000Days": 190,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "69",
    "dislikes": "87",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "jWVbxd80oyc"
  },

  {
 
    "id":76,
    "title": "Rockstar",
    "year": 2011,
    "rank":670,
    "rankChange": "▲ +659",
    "rating": 86,
    "imdbRating": 7.8,
    "imdbVotes": "51k",
    "backdropImage": "https://images.justwatch.com/backdrop/244145151/s1440/rockstar.webp/rockstar.webp",
    "posterImage": "https://stat4.bollywoodhungama.in/wp-content/uploads/2016/03/Rockstar-Poster-Feature.jpg",
    "duration": "2h 39min",
    "highestRank": 4,
    "top10Days": 11,
    "top100Days":580,
    "top1000Days": 2344,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "481",
    "dislikes": "61",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "bD5FShPZdpw"
  },
  {

    "id":77,
    "title": "The Fall Guy",
    "year": 2024,
    "rank":53,
    "rankChange": "▲ +29",
    "rating": 88,
    "imdbRating": 6.9,
    "imdbVotes": "158k",
    "backdropImage": "https://images.justwatch.com/backdrop/312569653/s1440/the-fall-guy.webp/the-fall-guy.webp",
    "posterImage": "https://image.tmdb.org/t/p/original/e7olqFmzcIX5c23kX4zSmLPJi8c.jpg",
    "duration": "2h 39min",
    "highestRank": 1,
    "top10Days": 16,
    "top100Days":146,
    "top1000Days": 217,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "4.4k",
    "dislikes": "578",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "M7lc1UVf-VE"
  },
  {

    "id":78,
    "title": "Chandu Champion",
    "year": 2024,
    "rank":688,
    "rankChange": "▲ +600",
    "rating": 71,
    "imdbRating": 7.9,
    "imdbVotes": "2m",
    "backdropImage": "https://images.justwatch.com/backdrop/319469589/s1440/chandu-champion.webp/chandu-champion.webp",
    "posterImage": "https://upload.wikimedia.org/wikipedia/hi/archive/d/df/20240918230235%21Chandu_Champion_film_poster.jpeg",
    "duration": "2h 2min",
    "highestRank": 2,
    "top10Days": 13,
    "top100Days":666,
    "top1000Days": 113,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "96",
    "dislikes": "26",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "IHQQK_Wn5DM"
  },

  {
 
    "id":79,
    "title": "Joker",
    "year": 2019,
    "rank":25,
    "rankChange": "▲ +17",
    "rating": 94,
    "imdbRating": 8.4,
    "imdbVotes": "31k",
    "backdropImage": "https://images.justwatch.com/backdrop/147680055/s1440/joker-2019.webp/joker-2019.webp",
    "posterImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTqLyEBucif__c02XSXE5UEVsqcnJyW4n-ng&s",
    "duration": "2h 2min",
    "highestRank": 1,
    "top10Days": 138,
    "top100Days":511,
    "top1000Days": 1853,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "56k",
    "dislikes": "3.7k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "a3B0bePcfl4"
  },
  {

    "id":80,
    "title": "John Wick",
    "year": 2014,
    "rank":295,
    "rankChange": "▲ +184",
    "rating": 96,
    "imdbRating": 7.4,
    "imdbVotes": "755k",
    "backdropImage": "https://images.justwatch.com/backdrop/8697369/s1440/john-wick.webp/john-wick.webp",
    "posterImage": "https://rukminim2.flixcart.com/image/850/1000/jmz7csw0/poster/r/z/5/medium-wall-poster-john-wick-hd-movie-poster-18x12pow-538-original-imaf9rgzmugvzxry.jpeg?q=90&crop=false",
    "duration": "1h 54min",
    "highestRank": 1,
    "top10Days": 91,
    "top100Days":1532,
    "top1000Days": 3198,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "47k",
    "dislikes": "1.6k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "C0BMx-qxsP4"
  },
  
  {

    "id":81,
    "title": "777 Charlie",
    "year": 2022,
    "rank":108,
    "rankChange": "▲ +63",
    "rating": 83,
    "imdbRating": 8.7,
    "imdbVotes": "11k",
    "backdropImage": "https://images.justwatch.com/backdrop/279111882/s1440/777-charlie.webp/777-charlie.webp",
    "posterImage": "https://pbs.twimg.com/media/E3NRfpEVcAQcOVW.jpg",
    "duration": "2h 46min",
    "highestRank": 2,
    "top10Days": 102,
    "top100Days":563,
    "top1000Days": 855,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "523",
    "dislikes": "85",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "lzr2PJXeHww"
  },

  {
 
    "id":82,
    "title": "Jailer",
    "year": 2023,
    "rank":4010,
    "rankChange": "▲ +3432",
    "rating": 74,
    "imdbRating": 7.7,
    "imdbVotes": "9k",
    "backdropImage": "https://images.justwatch.com/backdrop/302068761/s1440/jailer.webp/jailer.webp",
    "posterImage": "https://ih1.redbubble.net/image.5157749045.2422/flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
    "duration": "2h 45min",
    "highestRank": 2,
    "top10Days": 28,
    "top100Days":131,
    "top1000Days": 404,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "404",
    "dislikes": "117",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId":"xenOE1Tma0A"
  },
  {

    "id":83,
    "title": "Drishyam 2",
    "year": 2022,
    "rank":511,
    "rankChange": "▲ +410",
    "rating": 80,
    "imdbRating": 8.2,
    "imdbVotes": "46k",
    "backdropImage": "https://images.justwatch.com/backdrop/302032241/s1440/drishyam-2-2022.webp/drishyam-2-2022.webp",
    "posterImage": "https://resizing.flixster.com/xuDDnS7s-nZAIs-1-EUzZNNZ084=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p23271406_v_v9_aa.jpg",
    "duration": "2h 20min",
    "highestRank": 1,
    "top10Days": 44,
    "top100Days":142,
    "top1000Days": 613,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "574",
    "dislikes": "121",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "cxA2y9Tgl7o"
  },

  {

    "id":84,
    "title": "Leo",
    "year": 2023,
    "rank":381,
    "rankChange": "▲ +243",
    "rating": 68,
    "imdbRating": 7.2,
    "imdbVotes": "63k",
    "backdropImage": "https://images.justwatch.com/backdrop/309143388/s1440/leo-2023.webp/leo-2023.webp",
    "posterImage": "https://i.pinimg.com/originals/46/37/db/4637dbeccdf457d9086f4e19e3737863.jpg",
    "duration": "2h 43min",
    "highestRank": 1,
    "top10Days": 57,
    "top100Days":125,
    "top1000Days": 358,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "369",
    "dislikes": "143",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "Po3jStA673E"
  },

  {
 
    "id":85,
    "title": "Kakuda",
    "year": 2024,
    "rank":290,
    "rankChange": "▲ +899",
    "rating": 43,
    "imdbRating": 6.4,
    "imdbVotes": "6.9k",
    "backdropImage": "https://images.justwatch.com/backdrop/319553669/s1440/kakuda.webp/kakuda.webp",
    "posterImage": "https://media5.bollywoodhungama.in/wp-content/uploads/2024/07/Kakuda-2-322x402.jpg",
    "duration": "2h 57min",
    "highestRank": 29,
    "top10Days": 0,
    "top100Days":9,
    "top1000Days": 82,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "19",
    "dislikes": "11",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "5V8Z3h9oVMc"
  },

  {

    "id":86,
    "title": "Rudra: The Edge of Darkness",
    "year": 2022,
    "rank":541,
    "rankChange": "▲ +87",
    "rating": 75,
    "imdbRating": 6.7,
    "imdbVotes": "8.9k",
    "backdropImage": "https://images.justwatch.com/backdrop/266486963/s1440/rudra-the-edge-of-darkness.webp/rudra-the-edge-of-darkness.webp",
    "posterImage": "https://m.media-amazon.com/images/M/MV5BZTU4MzUyMjctYTM4NC00Zjc5LThjZjctOTJhMGEwZGRlZGIzXkEyXkFqcGc@._V1_.jpg",
    "duration": "53min",
    "highestRank": 2,
    "top10Days": 17,
    "top100Days":87,
    "top1000Days": 917,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "144",
    "dislikes": "33",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "FyuODiTjoFs"
  },

  {

    "id":87,
    "title": "Teri Baaton Mein Aisa Uljha Jiya",
    "year": 2024,
    "rank":1243,
    "rankChange": "▲ +146",
    "rating": 63,
    "imdbRating": 6.3,
    "imdbVotes": "5.2k",
    "backdropImage": "https://images.justwatch.com/backdrop/308601827/s1440/untitled-shahid-kapoor-kriti-sanon-film.webp/untitled-shahid-kapoor-kriti-sanon-film.webp",
    "posterImage": "https://th-i.thgim.com/public/entertainment/movies/4pv6z/article67726624.ece/alternates/FREE_1200/VS--1ShahidKapoorshahidkapoorX-0%E2%80%9905%E2%80%9D.png",
    "duration": "2h 21min",
    "highestRank": 1,
    "top10Days": 38,
    "top100Days":122,
    "top1000Days": 239,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "142",
    "dislikes": "62",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "w_N6d4ec79c"
  },

  {
 
    "id":88,
    "title": "Train to Busan",
    "year": 2016,
    "rank":409,
    "rankChange": "▲ +213",
    "rating": 95,
    "imdbRating": 7.6,
    "imdbVotes": "269k",
    "backdropImage": "https://images.justwatch.com/backdrop/8836855/s1440/train-to-busan.webp/train-to-busan.webp",
    "posterImage": "https://picfiles.alphacoders.com/352/thumb-352183.jpg",
    "duration": "1h 58min",
    "highestRank": 1,
    "top10Days": 12,
    "top100Days":205,
    "top1000Days": 2454,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "17k",
    "dislikes": "878",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "1ovgxN2VWNc"
  },
  {

    "id":89,
    "title": "Yodha",
    "year": 2024,
    "rank":1402,
    "rankChange": "▲ +152",
    "rating": 55,
    "imdbRating": 5.7,
    "imdbVotes": "8.4k",
    "backdropImage": "https://images.justwatch.com/backdrop/312812342/s1440/yodha-2022.webp/yodha-2022.webp",
    "posterImage": "https://m.media-amazon.com/images/M/MV5BMTIxYmY0YzUtYTkxNS00ZDEwLTg5MGEtODZkOWRmNjkzNWFkXkEyXkFqcGc@._V1_.jpg",
    "duration": "2h 11min",
    "highestRank": 3,
    "top10Days": 13,
    "top100Days":67,
    "top1000Days": 202,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "60",
    "dislikes": "32",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "3AuB8RTfBJc"
  },

  {

    "id":90,
    "title": "Shaitaan",
    "year": 2024,
    "rank":522,
    "rankChange": "▲ +670",
    "rating": 53,
    "imdbRating": 6.6,
    "imdbVotes": "5.1k",
    "backdropImage": "https://images.justwatch.com/backdrop/315476071/s1440/black-magic-2024.webp/black-magic-2024.webp",
    "posterImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTvmTs_KuGBvDgydgU5KryIzYDHRIGmbu4Uw&s",
    "duration": "2h 12min",
    "highestRank": 1,
    "top10Days": 17,
    "top100Days":105,
    "top1000Days": 209,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "171",
    "dislikes": "122",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "jLshY-zUfZ4"
  },
  
  {

    "id":91,
    "title": "Bhool Bhulaiyaa 2",
    "year": 2022,
    "rank":407,
    "rankChange": "▲ +900",
    "rating": 56,
    "imdbRating": 5.7,
    "imdbVotes": "33k",
    "backdropImage": "https://images.justwatch.com/backdrop/290417264/s1440/bhool-bhulaiyaa-2.webp/bhool-bhulaiyaa-2.webp",
    "posterImage": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ec16a4146301677.62addf77becfe.jpg",
    "duration": "2h 22min",
    "highestRank": 1,
    "top10Days": 22,
    "top100Days":113,
    "top1000Days": 472,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "321",
    "dislikes": "210",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "P2KRKxAb2ek"
  },
 
  
  {

    "id":92,
    "title": "The Kerala Story",
    "year":2023,
    "rank":702,
    "rankChange": "▲ +2974",
    "rating": 79,
    "imdbRating": 6.1,
    "imdbVotes": "73k",
    "backdropImage": "https://images.justwatch.com/backdrop/305317096/s1440/the-kerala-story.webp/the-kerala-story.webp",
    "posterImage": "https://assets.telegraphindia.com/telegraph/2023/May/1683547821_kerala-story.jpg",
    "duration": "2h 18min",
    "highestRank": 1,
    "top10Days": 158,
    "top100Days":353,
    "top1000Days": 513,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "470",
    "dislikes": "160",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
     "videoId": "hM12KxC3ONA"
  },
  
  {

    "id":93,
    "title": "Shershaah",
    "year":2021,
    "rank":421,
    "rankChange": "▲ +461",
    "rating": 71,
    "imdbRating": 8.3,
    "imdbVotes": "131k",
    "backdropImage": "https://images.justwatch.com/backdrop/253243045/s1440/shershaah.webp/shershaah.webp",
    "posterImage": "https://etvbharatimages.akamaized.net/etvbharat/prod-images/5727921_s1.jpg",
    "duration": "2h 15min",
    "highestRank": 1,
    "top10Days": 28,
    "top100Days":136,
    "top1000Days": 1009,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "1k",
    "dislikes": "378",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "Q0FTXnefVBA"
  },

  
  {

    "id":94,
    "title": "M.S. DHONI: THE UNTOLD STORY",
    "year":2016,
    "rank":861,
    "rankChange": "▲ +394",
    "rating": 94,
    "imdbRating": 8.0,
    "imdbVotes": "70k",
    "backdropImage": "https://images.justwatch.com/backdrop/197009956/s1440/m-s-dhoni-the-untold-story.webp/m-s-dhoni-the-untold-story.webp",
    "posterImage": "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1200,q_60/lsci/db/PICTURES/CMS/194400/194475.jpg",
    "duration": "1h 40min",
    "highestRank": 5,
    "top10Days": 6,
    "top100Days":55,
    "top1000Days": 946,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "345",
    "dislikes": "33",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "6L6XqWoS8tw"
  },

  {

    "id":95,
    "title": "Tu Jhoothi Mai Makkar",
    "year":2023 ,
    "rank":1399,
    "rankChange": "▲ +5659",
    "rating": 61,
    "imdbRating": 7.0,
    "imdbVotes": "30k",
    "backdropImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202301/trailer_of_tu_jhoothi_main_makkar_to_release_on_this_date-sixteen_nine.jpg?VersionId=xjr0srH.rjTI7AtxbqEg_sO6Ear6W_f4",
    "posterImage": "https://stat4.bollywoodhungama.in/wp-content/uploads/2023/01/Tu-Jhoothi-Main-Makkaar-1.jpeg",
    "duration": "2h 39min",
    "highestRank": 1,
    "top10Days": 54,
    "top100Days":174,
    "top1000Days": 541,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "352",
    "dislikes": "192",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "JzGGF4JPFIQ"
  },

  {
    "id": 96,
    "title": "MUNJYA",
    "year": 2024,
    "rank": 15,
    "rankChange": "▲ +110",
    "rating": 67,
    "imdbRating": 6.5,
    "imdbVotes": "21k",
    "backdropImage": "https://images.justwatch.com/backdrop/317639257/s1440/munjha.webp/munjha.webp",
    "posterImage": "https://wallpapercave.com/wp/wp14067165.jpg",
    "duration": "2h 3min",
    "highestRank": 1,
    "top10Days": 97,
    "top100Days": 114,
    "top1000Days": 121,
    "watchOptions": [
  {"platform": "Netflix", "price": "Rs200/-"},
  {"platform": "Amazon Prime", "price": "Rs500/-"}
],
    "likes": "55k",
    "dislikes": 5,
    "watchlistText": "WatchList",
    "seenText": "Seen",
    "syncText": "Sign in to sync Watch List",
    "videoId" : "qGb5aKEYR8Q"
  },

  
  {
    "id": 97,
    "title": "ANIMAL",
    "year": 2023,
    "rank": 192,
    "rankChange": "▲ +342",
    "rating": 67,
    "imdbRating": 6.1,
    "imdbVotes": "99k",
    "backdropImage": "https://images.justwatch.com/backdrop/309854144/s1440/animal-2022.webp/animal-2022.webp",
    "posterImage": "https://m.media-amazon.com/images/M/MV5BMmFjYzdhZjktN2E1ZS00NzY5LWE1NTUtY2U4YTQ1NzdhOGVmXkEyXkFqcGc@._V1_QL75_UX820_.jpg",
    "duration": "1h 1min",
    "highestRank": "01",
    "top10Days": 113,
    "top100Days": 241,
    "top1000Days": 336,
    "watchOptions": [
  {"platform": "Netflix", "price": "Rs200/-"},
  {"platform": "Amazon Prime", "price": "Rs500/-"}
  ],
    "likes": "12k",
    "dislikes": "152",
    "watchlistText": "Lists",
    "seenText": "Seen all",
    "syncText": "Sign in to sync Watch List", 
    "videoId" : "Dydmpfo68DA"
  },

  {
    "id": 98,
    "title": "SANAM TERI KASAM",
    "year": 2016,
    "rank": 214,
    "rankChange": "▲ +8",
    "rating": 69,
    "imdbRating": 7.6,
    "imdbVotes": "17k",
    "backdropImage": "https://images.justwatch.com/backdrop/198570000/s1440/sanam-teri-kasam.webp/sanam-teri-kasam.webp",
    "posterImage": "https://eros-asset-msp.airtelxstream.in/assets/EROSNOW/MOVIE/613844b8e987121d7171c31d/images/SQUARE_HD/SQUARE_HD_qlhDjABJ9_Sanam_Teri_Kasam_Airtel_Xstream_1080x1080.jpg",
    "duration": "2h 34min",
    "highestRank": 7,
    "top10Days": 3,
    "top100Days": 117,
    "top1000Days": 1869,
    "watchOptions": [
  {"platform": "Netflix", "price": "Rs200/-"},
  {"platform": "Amazon Prime", "price": "Rs500/-"}
  ],
    "likes": "118k",
    "dislikes": "37",
    "watchlistText": "Watchlists",
    "seenText": "Seen",
    "syncText": "Sign in to sync Watch List", 
    "videoId" : "v1Zajpp0aEY"
  },


  {
    "id": 99,
    "title": "LAILA MAJNU",
    "year": 2018,
    "rank": 12,
    "rankChange": "▲ +11",
    "rating": 78,
    "imdbRating": 7.7,
    "imdbVotes": "6.6",
    "backdropImage": "https://images.justwatch.com/backdrop/81338817/s1440/laila-majnu.webp/laila-majnu.webp",
    "posterImage": "https://static.digit.in/OTT/v2/images/laila-majnu-229760.jpg?tr=w-600",
    "duration": "2h 19min",
    "highestRank": 2,
    "top10Days": 8,
    "top100Days": 83,
    "top1000Days": 445,
    "watchOptions": [
  {"platform": "Netflix", "price": "Rs200/-"},
  {"platform": "Amazon Prime", "price": "Rs500/-"}
  ],
    "likes": "55k",
    "dislikes": "358",
    "watchlistText": "Watchlists",
    "seenText": "Seen",
    "syncText": "Sign in to sync Watch List", 
    "videoId" : "Cv-6cAHanZ8"
  },

  {
    "id": 100,
    "title": "STRANGER THINGS",
    "year": 2016,
    "rank": 82,
    "rankChange": "▲ +67",
    "rating": 15,
    "imdbRating": 8.7,
    "imdbVotes": "1m",
    "backdropImage": "https://images.justwatch.com/backdrop/102141616/s1440/stranger-things.webp/stranger-things.webp",
    "posterImage": "https://rukminim2.flixcart.com/image/850/1000/jr0y9ow0/poster/r/g/e/medium-stranger-things-poster-for-room-office-13-inch-x-19-inch-original-imafcwvzakgs3c5v.jpeg?q=90&crop=false",
    "duration": "1h 1min",
    "highestRank": 1,
    "top10Days": 228,
    "top100Days": 1921,
    "top1000Days": 2994,
    "watchOptions": [
  {"platform": "Netflix", "price": "Rs200/-"},
  {"platform": "Amazon Prime", "price": "Rs500/-"}
],
    "likes": "79k",
    "dislikes": "3.6",
    "watchlistText": "Lists",
    "seenText": "Seen",
    "syncText": "Sign in to sync Watch List",  
    "videoId" : "b9EkMc79ZSU",
    "type" : "series",
        "seasons": [ // Add season details here
          {
            "seasonNumber": 1,
            "episodes": 8,
            "posterImage": "https://www.justwatch.com/images/poster/249313589/s166/season-1.webp"
          },
    
          {
            "seasonNumber": 2,
            "episodes": 9,
            "posterImage": "https://www.justwatch.com/images/poster/10828442/s166/season-2.webp"
          },
    
          {
            "seasonNumber": 3,
            "episodes": 8,
            "posterImage": "https://www.justwatch.com/images/poster/147403540/s166/season-3.webp"
          },
    
          {
            "seasonNumber": 4,
            "episodes": 9,
            "posterImage": "https://www.justwatch.com/images/poster/264470916/s166/season-4.webp"
          },
        ]
},

{
  "id": 101,
  "title": "JUJUTSU KAISEN",
  "year": 2020,
  "rank": 175,
  "rankChange": "▲ +21",
  "rating": 93,
  "imdbRating": 8.6,
  "imdbVotes": "131K",
  "backdropImage": "https://images.justwatch.com/backdrop/297814126/s1440/jujutsu-kaisen.webp/jujutsu-kaisen.webp",
  "posterImage": "https://i.pinimg.com/originals/ac/43/52/ac4352f877cd4265d69538bd7532b7b3.jpg",
  "duration": " 24min",
  "highestRank": 2,
  "top10Days": 71,
  "top100Days": 390,
  "top1000Days": 1437,
  "watchOptions": [
{"platform": "Netflix", "price": "Rs200/-"},
{"platform": "Amazon Prime", "price": "Rs500/-"}
],
  "likes": "7.5K",
  "dislikes": "511",
  "watchlistText": "Lists",
  "seenText": "Seen",
  "syncText": "Sign in to sync Watch List",  
  "videoId" : "Pm-wNmS9RGI",
  "type" : "series",
  "seasons": [ // Add season details here
    {
      "seasonNumber": 1,
      "episodes": 24,
      "posterImage": "https://www.justwatch.com/images/poster/312146079/s166/season-1.webp"
    },

    {
      "seasonNumber": 2,
      "episodes": 24,
      "posterImage": "https://www.justwatch.com/images/poster/306336521/s166/season-2.webp"
    },

    {
      "seasonNumber": 3,
      "episodes": 1,
      "posterImage": "https://www.justwatch.com/images/poster/320955231/s166/season-3.webp"
    },
  ]
},



{
  "id": 102,
  "title": "WEDNESDAY",
  "year": 2022,
  "rank": 172,
  "rankChange": "▲ +104",
  "rating": 95,
  "imdbRating": 8.1,
  "imdbVotes": "383K",
  "backdropImage": "https://images.justwatch.com/backdrop/301994024/s1440/wednesday.webp/wednesday.webp",
  "posterImage": "https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/b/1/l/large-wednesday-poster-for-wall-home-office-decoration-posters-original-imagn38htdpyunqe.jpeg?q=90&crop=false",
  "duration": "29min",
  "highestRank": 1,
  "top10Days": 107,
  "top100Days": 329,
  "top1000Days": 783,
  "watchOptions": [
{"platform": "Netflix", "price": "Rs200/-"},
{"platform": "Amazon Prime", "price": "Rs500/-"}
],
  "likes": "44k",
  "dislikes": "2.2",
  "watchlistText": "Lists",
  "seenText": "Seen",
  "syncText": "Sign in to sync Watch List", 
  "videoId" : "DwvQLVAxiKY",
  "type" : "series",
  "seasons": [ // Add season details here
    {
      "seasonNumber": 1,
      "episodes": 8,
      "posterImage": "https://www.justwatch.com/images/poster/300790715/s166/season-1.webp"
    },

    {
      "seasonNumber": 2,
      "episodes": 3,
      "posterImage": "https://www.justwatch.com/images/poster/300790715/s166/season-1.webp"
    },
  ]
},

{
  "id": 103,
  "title": "MY FAULT",
  "year": 2023,
  "rank": 579,
  "rankChange": "▲ +453",
  "rating": 82,
  "imdbrating": 6.2,
  "imdbVotes": "28K",
  "backdropImage": "https://images.justwatch.com/backdrop/305772264/s1440/culpa-mia.webp/culpa-mia.webp",
  "posterImage": "https://m.media-amazon.com/images/I/61i+ZrpiIiL._AC_UF894,1000_QL80_.jpg",
  "duration": "1h 57min",
  "highestRank": 3,
  "top10Days": 17,
  "top100Days": 82,
  "top1000Days": 484,
  "watchOptions": [
{"platform": "Netflix", "price": "Rs200/-"},
{"platform": "Amazon Prime", "price": "Rs500/-"}
],
  "likes": "30k",
  "dislikes": "536",
  "watchlistText": "Lists",
  "seenText": "Seen",
  "syncText": "Sign in to sync Watch List", 
  "videoId" : "e7lvpm13ZN0"
},

{
  "id": 104,
  "title": "YOUR NAME",
  "year": 2016,
  "rank": 596,
  "rankChange": "▲ +33",
  "rating": 15,
  "imdbRating": 8.4,
  "imdbVotes": "334K",
  "backdropImage": "https://images.justwatch.com/backdrop/56668328/s1440/your-name.webp/your-name.webp",
  "posterImage": "https://rukminim2.flixcart.com/image/850/1000/xif0q/book/1/f/p/your-name-the-official-visual-guide-original-imahy5knsetkjzxe.jpeg?q=90&crop=false",
  "duration": "1h 49min",
  "highestRank": 1,
  "top10Days": 228,
  "top100Days": 1921,
  "top1000Days": 2994,
  "watchOptions": [
{"platform": "Netflix", "price": "Rs200/-"},
{"platform": "Amazon Prime", "price": "Rs500/-"}
],
  "likes": "30k",
  "dislikes": "382",
  "watchlistText": "Lists",
  "seenText": "Seen",
  "syncText": "Sign in to sync Watch List", 
  "videoId" : "_oWzYOwXn-o"
},

{
  "id": 106,
  "title": "SUZUME",
  "year": 2022,
  "rank": 82,
  "rankChange": "▲ +67",
  "rating": 91,
  "imdbRating": 7.6,
  "imdbVotes": "46K",
  "backdropImage": "https://images.justwatch.com/backdrop/306324717/s1440/suzume-no-tojimari.webp/suzume-no-tojimari.webp",
  "posterImage": "https://m.media-amazon.com/images/I/71riN5eCekL.jpg",
  "duration": "2h 1min",
  "highestRank": 2,
  "top10Days": 245,
  "top100Days": 1451,
  "top1000Days": 1584,
  "watchOptions": [
{"platform": "Netflix", "price": "Rs200/-"},
{"platform": "Amazon Prime", "price": "Rs500/-"}
],
  "likes": "2k",
  "dislikes": "263",
  "watchlistText": "Lists",
  "seenText": "Seen",
  "syncText": "Sign in to sync Watch List", 
  "videoId" : "ciQc8lfvSm0",
},

{
  "id": 107,
  "title": "MONEY HEIST",
  "year": 2017,
  "rank": 40,
  "rankChange": "▲ +1",
  "rating": 91,
  "imdbRating": 8.2,
  "imdbVotes": "547k",
  "backdropImage": "https://images.justwatch.com/backdrop/242778527/s1440/paperhouse.webp/paperhouse.webp",
  "posterImage": "https://m.media-amazon.com/images/I/71pFk6piECL._AC_UF1000,1000_QL80_.jpg",
  "duration": "50min",
  "highestRank": 1,
  "top10Days": 239,
  "top100Days": 2007,
  "top1000Days": 2481,
  "watchOptions": [
{"platform": "Netflix", "price": "Rs200/-"},
{"platform": "Amazon Prime", "price": "Rs500/-"}
],
  "likes": "40k",
  "dislikes": "2.7k",
  "watchlistText": "Lists",
  "seenText": "Seen",
  "syncText": "Sign in to sync Watch List", 
  "videoId" : "8QkyLqmJCMM",
  "type": "series",
  "seasons": [ // Add season details here
        {
          "seasonNumber": 1,
          "episodes": 13,
          "posterImage": "https://www.justwatch.com/images/poster/270389468/s166/season-1.webp"
        },
  
        {
          "seasonNumber": 2,
          "episodes": 9,
          "posterImage": "https://www.justwatch.com/images/poster/281065948/s166/season-2.webp"
        },
  
        {
          "seasonNumber": 3,
          "episodes": 8,
          "posterImage": "https://www.justwatch.com/images/poster/281066199/s166/season-3.webp"
        },
  
        {
          "seasonNumber": 4,
          "episodes": 8,
          "posterImage": "https://www.justwatch.com/images/poster/270389906/s166/season-4.webp"
        },
  
        {
          "seasonNumber": 5,
          "episodes": 10,
          "posterImage": "https://www.justwatch.com/images/poster/281044992/s166/season-5.webp"
        },
      ]
},

{
  "id": 108,
  "title": "TUMBBAD",
  "year": 2018,
  "rank": 73,
  "rankChange": "▲ +67",
  "rating": 82,
  "imdbRating": 8.2,
  "imdbVotes": "64k",
  "backdropImage": "https://images.justwatch.com/backdrop/245230559/s1440/tumbbad.webp/tumbbad.webp",
  "posterImage": "https://m.media-amazon.com/images/M/MV5BMzVjNGFmZTMtYjRjNi00OWQzLTlkNWQtZmU1OGI0ODc2ODU5XkEyXkFqcGc@._V1_QL75_UX820_.jpg",
  "duration": "1h 53min",
  "highestRank": 2,
  "top10Days": 258,
  "top100Days": 1458,
  "top1000Days": 2586,
  "watchOptions": [
{"platform": "Netflix", "price": "Rs200/-"},
{"platform": "Amazon Prime", "price": "Rs500/-"}
],
  "likes": "18k",
  "dislikes": "3.5k",
  "watchlistText": "Lists",
  "seenText": "Seen",
  "syncText": "Sign in to sync Watch List",
  "videoId" : "YGIcZrUBY0k",
},


{
  "id": 109,
  "title": "PUT YOUR HEAD ON MY SHOULDER",
  "year": 2019,
  "rank": 1411,
  "rankChange": "▲ +820",
  "rating": 53,
  "imdbRating": 8.0,
  "imdbVotes": "3.4k",
  "backdropImage": "https://images.justwatch.com/backdrop/150332384/s1440/put-your-head-on-my-shoulder.webp/put-your-head-on-my-shoulder.webp",
  "posterImage": "https://image.tmdb.org/t/p/original/zVYvodC12ZHGVPHX8LJjZHDERmK.jpg",
  "duration": "41min",
  "highestRank": 51,
  "top10Days":  10,
  "top100Days": 50,
  "top1000Days": 239,
  "watchOptions": [
{"platform": "Netflix", "price": "Rs200/-"},
{"platform": "Amazon Prime", "price": "Rs500/-"}
],
  "likes": "5k",
  "dislikes": "34",
  "watchlistText": "Lists",
  "seenText": "Seen",
  "syncText": "Sign in to sync Watch List", 
  "videoId" : "HMLeGMSeJVM"
},

{
  "id": 110,
  "title": "ATTACK ON TITAN",
  "year": 2013,
  "rank": 46,
  "rankChange": "▲ +63",
  "rating": 91,
  "imdbRating": 9.1,
  "imdbVotes": "546k",
  "backdropImage": "https://images.justwatch.com/backdrop/302212233/s1440/attack-on-titan.webp/attack-on-titan.webp",
  "posterImage": "https://m.media-amazon.com/images/I/61t9ie31jgL._AC_UF1000,1000_QL80_.jpg",
  "duration": "25min",
  "highestRank": 1,
  "top10Days": 63,
  "top100Days": 1077,
  "top1000Days": 2941,
  "watchOptions": [
{"platform": "Netflix", "price": "Rs200/-"},
{"platform": "Amazon Prime", "price": "Rs500/-"}
],
  "likes": "17k",
  "dislikes": "1.6k",
  "watchlistText": "Lists",
  "seenText": "Seen",
  "syncText": "Sign in to sync Watch List", 
  "videoId" : "LV-nazLVmgo"
},


{
  "id": 111,
  "title": "LOVE IS SWEET",
  "year": 2020,
  "rank": 82,
  "rankChange": "▲ +67",
  "rating": 68,
  "imdbRating": 8.7,
  "imdbVotes": "18k",
  "backdropImage": "https://images.justwatch.com/backdrop/305955903/s1440/love-is-sweet.webp/love-is-sweet.webp",
  "posterImage": "https://m.media-amazon.com/images/M/MV5BYWZiZTQ0ZTMtOTJhNC00NzIzLTlmNjgtZmRmZDc4NTVmNjlmXkEyXkFqcGc@._V1_.jpg",
  "duration": "44min",
  "highestRank": 3,
  "top10Days": 15,
  "top100Days": 152,
  "top1000Days": 1025,
  "watchOptions": [
{"platform": "Netflix", "price": "Rs200/-"},
{"platform": "Amazon Prime", "price": "Rs500/-"}
],
  "likes": "10k",
  "dislikes": "1.1k",
  "watchlistText": "Lists",
  "seenText": "Seen",
  "syncText": "Sign in to sync Watch List",
  "videoId" : "44SPxWJ9Rno" 
},


{
  "id": 112,
  "title": "THE CONJURING 2",
  "year": 2016,
  "rank": 990.,
  "rankChange": "▲ +589",
  "rating": 93,
  "imdbRating": 7.3,
  "imdbVotes": "309k",
  "backdropImage": "https://www.justwatch.com/images/backdrop/828170/s1440/the-conjuring-2.webp/the-conjuring-2.webp",
  "posterImage": "https://e0.pxfuel.com/wallpapers/230/354/desktop-wallpaper-the-conjuring-2-movie-hq-the-conjuring-2-2019-the-conjuring-3-thumbnail.jpg",
  "duration": "1h 53min",
  "highestRank": 13,
  "top10Days": 5,
  "top100Days": 70,
 "top1000Days": 2994,
  "watchOptions": [
{"platform": "Netflix", "price": "Rs200/-"},
{"platform": "Amazon Prime", "price": "Rs500/-"}
],
  "likes": "17k",
  "dislikes": "1.1k",
  "watchlistText": "WatchList",
  "seenText": "Seen",
  "syncText": "Sign in to sync Watch List", 
  "videoId" : "VFsmuRPClr4"
},


{
  "id": 113,
  "title": "THE KISSING BOOTH 3",
  "year": 2018,
  "rank": 3023.,
  "rankChange": "▲ +2225",
  "rating": 75,
  "imdb": 5.9,
  "imdbVotes": "96k",
  "backdropImage": "https://images.justwatch.com/backdrop/238965629/s1440/the-kissing-booth.webp/the-kissing-booth.webp",
  "posterImage": "https://rukminim2.flixcart.com/image/850/1000/xif0q/book/z/u/s/the-kissing-booth-3-one-last-time-original-imah4ey75grdnnsp.jpeg?q=90&crop=false",
  "duration": "1h 45min",
  "highestRank": 4,
  "top10Days": 13,
  "top100Days": 164,
  "top1000Days": 667,
  "watchOptions": [
{"platform": "Netflix", "price": "Rs200/-"},
{"platform": "Amazon Prime", "price": "Rs500/-"}
],
  "likes": "4.7k",
  "dislikes": "1.5k",
  "watchlistText": "WatchLists",
  "seenText": "Seen",
  "syncText": "Sign in to sync Watch List",
  "videoId" : "5fKn0Dhj64w",
},

{
  "id": 114,
  "title": "MY GIRLFRIEND IS AN ALIEN",
  "year": 2019,
  "rank": 12,
  "rankChange": "▲ +45",
  "rating": 76,
  "imdbRating": 8.2,
  "imdbVotes": "2.7k",
  "backdropImage": "https://images.justwatch.com/backdrop/300784304/s1440/my-girlfriend-is-an-alien.webp/my-girlfriend-is-an-alien.webp",
  "posterImage": "https://image.tmdb.org/t/p/original/sOtUZ34xeQiEZh6n0tC8vkaTNQF.jpg",
  "duration": "44min",
  "highestRank": 5,
  "top10Days": 425,
  "top100Days": 1451,
  "top1000Days": 2524,
  "watchOptions": [
{"platform": "Netflix", "price": "Rs200/-"},
{"platform": "Amazon Prime", "price": "Rs500/-"}
],
  "likes": "4k",
  "dislikes": "35",
  "watchlistText": "Lists",
  "seenText": "Seen",
  "syncText": "Sign in to sync Watch List", 
  "videoId" : "m21MWq6wb9Y"
},

{
  "id": 115,
  "title": "Bad Newz",
  "year": 2024,
  "rank": 61,
  "rankChange": "▲ +170",
  "rating": 27,
  "imdbRating": 5.1,
  "imdbVotes": "25k",
  "backdropImage": "https://images.justwatch.com/backdrop/321215960/s1440/untitled-vicky-kaushal-prime-video-project.webp/untitled-vicky-kaushal-prime-video-project.webp",
  "posterImage": "https://www.prabhatkhabar.com/wp-content/uploads/2024/07/IMG_5778-716x1024.jpeg",
  "duration": "2h 20min",
  "highestRank": 3,
  "top10Days": 9,
  "top100Days": 41,
  "top1000Days": 80,
  "watchOptions": [
{"platform": "Netflix", "price": "Rs200/-"},
{"platform": "Amazon Prime", "price": "Rs500/-"}
],
  "likes": "1.5k",
  "dislikes": "203",
  "watchlistText": "Lists",
  "seenText": "Seen",
  "syncText": "Sign in to sync Watch List", 
   "videoId" : "uV50UfcIT68"
},

{
  "id": 116,
  "title": "NO GAIN NO LOVE",
  "year": 2024,
  "rank": 24,
  "rankChange": "▲ +12",
  "rating": 53,
  "imdbRating": 7.9,
  "imdbVotes": "1.1k",
  "backdropImage": "https://images.justwatch.com/backdrop/320106640/s1440/no-gain-no-love.webp/no-gain-no-love.webp",
  "posterImage": "https://media-cache.cinematerial.com/p/500x/uhwn4hiw/no-gain-no-love-movie-poster.jpg?v=1725059323",
  "duration": "1h 8min",
  "highestRank": 12,
  "top10Days": 0,
  "top100Days": 27,
  "top1000Days": 41,
  "watchOptions": [
{"platform": "Netflix", "price": "Rs200/-"},
{"platform": "Amazon Prime", "price": "Rs500/-"}
],
  "likes": "520",
  "dislikes": "45",
  "watchlistText": "Lists",
  "seenText": "Seen all",
  "syncText": "Sign in to sync Watch List", 
   "videoId" : "NL88DKtfrlY"
},

{
  "id": 117,
  "title": "DEMON SLAYER",
  "year": 2019,
  "rank": 29,
  "rankChange": "▲ +6",
  "rating": 90,
  "imdbRating": 8.6,
  "imdbVotes": "166k",
  "backdropImage": "https://images.justwatch.com/backdrop/317220005/s1440/demon-slayer-kimetsu-no-yaiba.webp/demon-slayer-kimetsu-no-yaiba.webp",
  "posterImage": "https://i.pinimg.com/736x/51/2c/9a/512c9a9bfd71ae7ab6b583dca74c318f.jpg",
  "duration": "26min",
  "highestRank": 1,
  "top10Days": 126,
  "top100Days": 660,
  "top1000Days": 1920,
  "watchOptions": [
{"platform": "Netflix", "price": "Rs200/-"},
{"platform": "Amazon Prime", "price": "Rs500/-"}
],
  "likes": "15k",
  "dislikes": "951",
  "watchlistText": "Lists",
  "seenText": "Seen all",
  "syncText": "Sign in to sync Watch List",
  "videoId" : "VQGCKyvzIM4",
  "type": "series",
  "seasons": [ // Add season details here
        {
          "seasonNumber": 1,
          "episodes": 26,
          "posterImage": "https://www.justwatch.com/images/poster/320272945/s166/season-1.webp"
        },
  
        {
          "seasonNumber": 2,
          "episodes": 18,
          "posterImage": "https://www.justwatch.com/images/poster/320272944/s166/season-2.webp"
        },
  
        {
          "seasonNumber": 3,
          "episodes": 11,
          "posterImage": "https://www.justwatch.com/images/poster/320272942/s166/season-3.webp"
        },
  
        {
          "seasonNumber": 4,
          "episodes": 11,
          "posterImage": "https://www.justwatch.com/images/poster/320272941/s166/season-4.webp"
        },
  
        {
          "seasonNumber": 5,
          "episodes": 8,
          "posterImage": "https://www.justwatch.com/images/poster/320272943/s166/season-5.webp"
        },
      ]

},

{
  "id": 118,
  "title": "FRIENDS",
  "year": 1994,
  "rank": 31,
  "rankChange": "▲ +85",
  "rating": 92,
  "imdbRating": 8.9,
  "imdbVotes": "1m",
  "backdropImage": "https://images.justwatch.com/backdrop/177294826/s1440/friends.webp/friends.webp",
  "posterImage": "https://i.pinimg.com/originals/41/2c/ea/412cea60bab9c59e1d7414616d426f81.jpg",
  "duration": "25min",
  "hightRank": "01",
  "top10Days": "869 Days",
  "top100Days": "2581 Days",
  "top1000Days": "3197 Days",
  "watchOptions": [
{"platform": "Netflix", "price": "Rs200/-"},
{"platform": "Amazon Prime", "price": "Rs500/-"}
],
  "likes": "35k",
  "dislikes": "274",
  "watchlistText": "Lists",
  "seenText": "Seen all",
  "syncText": "Sign in to sync Watch List", 
   "videoId" : "VQGCKyvzIM4",
   "type" : "series",
   "seasons": [ // Add season details here
     {
       "seasonNumber": 1,
       "episodes": 24,
       "posterImage": "https://www.justwatch.com/images/poster/238614572/s166/season-1.webp"
     },

     {
       "seasonNumber": 2,
       "episodes": 24,
       "posterImage": "https://www.justwatch.com/images/poster/238614566/s166/season-2.webp"
     },

     {
       "seasonNumber": 3,
       "episodes": 25,
       "posterImage": "https://www.justwatch.com/images/poster/238614557/s166/season-3.webp"
     },

     {
       "seasonNumber": 4,
       "episodes": 24,
       "posterImage": "https://www.justwatch.com/images/poster/238614546/s166/season-4.webp"
     },

     {
       "seasonNumber": 5,
       "episodes": 24,
       "posterImage": "https://www.justwatch.com/images/poster/238614540/s166/season-5.webp"
     },

     {
      "seasonNumber": 6,
      "episodes": 25,
      "posterImage": "https://www.justwatch.com/images/poster/300603462/s166/season-6.webp"
    },

    {
      "seasonNumber": 7,
      "episodes": 24,
      "posterImage": "https://www.justwatch.com/images/poster/238614521/s166/season-7.webp"
    },

    {
      "seasonNumber": 8,
      "episodes": 24,
      "posterImage": "https://www.justwatch.com/images/poster/304855085/s166/season-8.webp"
    },

    {
      "seasonNumber": 9,
      "episodes": 24,
      "posterImage": "https://www.justwatch.com/images/poster/238614510/s166/season-9.webp"
    },

    {
      "seasonNumber": 10,
      "episodes": 18,
      "posterImage": "https://www.justwatch.com/images/poster/252095774/s166/season-10.webp"
    },
   ]
},

{
  "id": 119,
  "title": "FLAMES",
  "year": 2018,
  "rank": 196,
  "rankChange": "▲ +297",
  "Rating": "71%",
  "imdbRating": 8.8,
  "imdbVotes": "33k",
  "backdropImage": "https://images.justwatch.com/backdrop/163344875/s1440/flames.webp/flames.webp",
  "posterImage": "https://m.media-amazon.com/images/M/MV5BOTQ5MWNkMDgtNjk5ZC00NGE5LWEyMGQtN2YzNzlkZTgxZWFlXkEyXkFqcGc@._V1_.jpg",
  "duration": "31min",
  "highestRank": 1,
  "top10Days": 71,
  "top100Days": 515,
  "top1000Days": 1793,
  "watchOptions": [
{"platform": "Netflix", "price": "Rs200/-"},
{"platform": "Amazon Prime", "price": "Rs500/-"}
],
  "likes": "4k",
  "dislikes": "35",
  "watchlistText": "Lists",
  "seenText": "Seen all",
  "syncText": "Sign in to sync Watch List", 
  "videoId" : "NkdCgjqQq7s",
  "type": "series",
  "seasons": [ // Add season details here
        {
          "seasonNumber": 1,
          "episodes": 5,
          "posterImage": "https://www.justwatch.com/images/poster/310326899/s166/season-1.webp"
        },
  
        {
          "seasonNumber": 2,
          "episodes": 5,
          "posterImage": "https://www.justwatch.com/images/poster/310330520/s166/season-2.webp"
        },
  
        {
          "seasonNumber": 3,
          "episodes": 5,
          "posterImage": "https://www.justwatch.com/images/poster/301436273/s166/season-3.webp"
        },
  
        {
          "seasonNumber": 4,
          "episodes": 5,
          "posterImage": "https://www.justwatch.com/images/poster/310330522/s166/season-4.webp"
        },
      ]
},

{
  "id": 120,
  "title": "ALICE IN BORDERLAND",
  "year": 2020,
  "rank": 204,
  "rankChange": "▲ +347",
  "rating": 92,
  "imdbRating": 7.7,
  "imdbVotes": "102k",
  "backdropImage": "https://images.justwatch.com/backdrop/239548970/s1440/alice-in-borderland.webp/alice-in-borderland.webp",
  "posterImage": "https://e1.pxfuel.com/desktop-wallpaper/942/291/desktop-wallpaper-alice-in-borderland-thumbnail.jpg",
  "duration": "54min",
  "highestRank": 4,
  "top10Days": 14,
  "top100Days": 152,
  "top1000Days": 1287,
  "watchOptions": [
{"platform": "Netflix", "price": "Rs200/-"},
{"platform": "Amazon Prime", "price": "Rs500/-"}
],
  "likes": "12k",
  "dislikes": "1k",
  "watchlistText": "Lists",
  "seenText": "Seen all",
  "syncText": "Sign in to sync Watch List", 
  "videoId" : "49_44FFKZ1M",
  "type" : "series",
  "seasons": [ // Add season details here
    {
      "seasonNumber": 1,
      "episodes": 8,
      "posterImage": "https://www.justwatch.com/images/poster/302278527/s166/season-1.webp"
    },

    {
      "seasonNumber": 2,
      "episodes": 8,
      "posterImage": "https://www.justwatch.com/images/poster/302278475/s166/season-2.webp"
    },

  ]
  
},

{
  "id": 121,
  "title": "EVIL DEAD RISE",
  "year": 2023,
  "rank": 78,
  "rankChange": "▲ +640",
  "rating": 81,
  "imdbRating": 6.5,
  "imdbVotes": "146k",
  "backdropImage": "https://images.justwatch.com/backdrop/305192753/s1440/evil-dead-rise.webp/evil-dead-rise.webp",
  "posterImage": "https://rukminim2.flixcart.com/image/850/1000/xif0q/movie/v/k/r/2023-dvd-flt-films-english-evil-dead-rise-2023-in-english-play-original-imagpnke3bexpr2h.jpeg?q=90&crop=false",
  "duration": "1h 36min",
  "highestRank": 3,
  "top10Days": 12,
  "top100Days": 126,
  "top1000Days": 549,
  "watchOptions": [
{"platform": "Netflix", "price": "Rs200/-"},
{"platform": "Amazon Prime", "price": "Rs500/-"}
],
  "likes": "6.1k",
  "dislikes": "452",
  "watchlistText": "Lists",
  "seenText": "Seen all",
  "syncText": "Sign in to sync Watch List",
  "videoId" : "smTK_AeAPHs"
},

{
  "id": 122,
  "title": "NARUTO",
  "year": 2002,
  "rank": 34,
  "rankChange": "▲ +82",
  "rating": 88,
  "imdbRating": 8.4,
  "imdbVotes": "134k",
  "backdropImage": "https://images.justwatch.com/backdrop/304968809/s1440/naruto.webp/naruto.webp",
  "posterImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVZVkWEJXqWMrX7CHsp9NvpacXO5DMWygAdw&s",
  "duration": "23min",
  "highestRank": 6,
  "top10Days": 25,
  "top100Days": 666,
  "top1000Days": 2673,
  "watchOptions": [
{"platform": "Netflix", "price": "Rs200/-"},
{"platform": "Amazon Prime", "price": "Rs500/-"}
],
  "likes": "8.8k",
  "dislikes": "1k",
  "watchlistText": "Lists",
  "seenText": "Seen all",
  "syncText": "Sign in to sync Watch List",
  "videoId" : "-G9BqkgZXRA",
  "type": "series",
  "seasons": [ // Add season details here
    {
      "seasonNumber": 1,
      "episodes": 220,
      "posterImage": "https://www.justwatch.com/images/poster/301262497/s166/season-1.webp"
    },

    {
      "seasonNumber": 2,
      "episodes": 104,
      "posterImage": "https://www.justwatch.com/images/poster/280619753/s166/season-2.webp"
    },

    {
      "seasonNumber": 3,
      "episodes": 108,
      "posterImage": "https://www.justwatch.com/images/poster/8605717/s166/season-3.webp"
    },

    {
      "seasonNumber": 4,
      "episodes": 124,
      "posterImage": "https://www.justwatch.com/images/poster/8605715/s166/season-4.webp"
    },

    {
      "seasonNumber": 5,
      "episodes": 220,
      "posterImage": "https://www.justwatch.com/images/poster/734764/s166/season-5.webp"
    },

    {
      "seasonNumber": 6,
      "episodes": 50,
      "posterImage": "https://www.justwatch.com/images/poster/6499522/s166/season-6.webp"
    },
  ]
},


{
  "id": 123,
  "title": "COLLEGE ROMANCE",
  "year": 2018,
  "rank": 126.,
  "rankChange": "▲ +160",
  "rating": 76,
  "imdbRating": 8.8,
  "imdbVotes": "29k",
  "backdropImage": "https://images.justwatch.com/backdrop/307434339/s1440/college-romance.webp/college-romance.webp",
  "posterImage": "https://i.pinimg.com/736x/f3/e1/b1/f3e1b1e3fe5fb345efefb38dd40e6560.jpg",
  "duration": "31min",
  "highestRank": 1,
  "top10Days": 309,
  "top100Days": 992,
  "top1000Days": 1622,
  "watchOptions": [
{"platform": "Netflix", "price": "Rs200/-"},
{"platform": "Amazon Prime", "price": "Rs500/-"}
],
  "likes": "72k",
  "dislikes": "158",
  "watchlistText": "Lists",
  "seenText": "Seen all",
  "syncText": "Sign in to sync Watch List",
  "videoId" : "zwRhlzrJGxo",
  "type": "series",
  "seasons": [ // Add season details here
    {
      "seasonNumber": 1,
      "episodes": 5,
      "posterImage": "https://www.justwatch.com/images/poster/153922176/s166/season-1.webp"
    },

    {
      "seasonNumber": 2,
      "episodes": 5,
      "posterImage": "https://www.justwatch.com/images/poster/241488605/s166/season-2.webp"
    },

    {
      "seasonNumber": 3,
      "episodes": 5,
      "posterImage": "https://www.justwatch.com/images/poster/300726847/s166/season-3.webp"
    },

    {
      "seasonNumber": 4,
      "episodes": 5,
      "posterImage": "https://www.justwatch.com/images/poster/307436638/s166/season-4.webp"
    },
  ]
},

{
  "id":124,
  "title": "Kalki 2898-AD",
  "year": 2024,
  "rank": 33,
  "rankChange": "▲ +16",
  "rating": 63,
  "imdbRating": 7.5,
  "imdbVotes": "24k",
  "backdropImage": "https://images.justwatch.com/backdrop/319594814/s1440/project-k.webp/project-k.webp",
  "posterImage": "https://m.media-amazon.com/images/M/MV5BMjNkNmEyMjAtYmJmNi00MWFlLWE2ZDMtMTc0YjQ5NDYwZjlmXkEyXkFqcGc@._V1_.jpg",
  "durection": "2h 56min",
  "highestRank": 1,
  "top10Days": 79,
  "top100Days": 110,
  "top1000Days": 142,
  "watchOptions": [
    {"platform": "Netflix", "price": "Rs200/-"},
    {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
  "likes": 341,
  "dislike": 170,
  "watchlistText": "watchlist",
  "seenText": "seen",
  "syncText": "sing in to watch list",
  "videoId": "aninoDcPWo4" 
},

{
  "id":125,
  "title": "Maharaja",
  "year": 2024,
  "rank": 51,
  "rankChange": "▲ +78",
  "rating": 76,
  "imdbRating": 8.5,
  "imdbVotes": "48k",
  "backdropImage": "https://images.justwatch.com/backdrop/318728320/s1440/maharaja-2024.webp/maharaja-2024.webp",
  "posterImage": "https://assetscdn1.paytm.com/images/cinema/164545-c46fe080-3f4e-11ef-99b5-d35223c98590.jpg",
  "durection": "2h 21min",
  "highestRank": 1,
  "top10Days": 41,
  "top100Days": 108,
  "top1000Days": 114,
  "watchOptions": [
    {"platform": "Netflix", "price": "Rs200/-"},
    {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
  "likes": 455,
  "dislike": 114,
  "watchlistText": "watchlist",
  "seenText": "seen",
  "syncText": "sing in to watch list",
  "videoId": "n3ttNeXKPHg"
},

{
    "id":126,
    "title": "Lucifer",
    "year": 2016,
    "rank": 384,
    "rankChange": "▲ +64",
    "rating": 91,
    "imdbRating": 8.1,
    "imdbVotes": "364k",
    "backdropImage": "https://images.justwatch.com/backdrop/8621909/s1440/lucifer.webp/lucifer.webp",
    "posterImage": "https://cdn.moviefone.com/image-assets/63174/uHpfjWUJI2gXQIIxjgAvOZWJORx.jpg?d=360x540&q=80",
    "duration": "58min",
    "highestRank": 1,
    "top10Days": 157,
    "top100Days": 2176,
    "top1000Days": 3172,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "18k",
    "dislikes": "1.6k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "X4bF_quwNtw",
    "type" : "series",
    "seasons": [ // Add season details here
      {
        "seasonNumber": 1,
        "episodes": 13,
        "posterImage": "https://images.justwatch.com/poster/256495379/s166/season-1.webp"
      },

      {
        "seasonNumber": 2,
        "episodes": 18,
        "posterImage": "https://images.justwatch.com/poster/256495445/s166/season-2.webp"
      },

      {
        "seasonNumber": 3,
        "episodes": 26,
        "posterImage": "https://images.justwatch.com/poster/256495450/s166/season-3.webp"
      },

      {
        "seasonNumber": 4,
        "episodes": 10,
        "posterImage": "https://images.justwatch.com/poster/127860861/s166/season-4.webp"
      },

      {
        "seasonNumber": 5,
        "episodes": 16,
        "posterImage": "https://images.justwatch.com/poster/256495449/s166/season-5.webp"
      },

      {
        "seasonNumber": 6,
        "episodes": 10,
        "posterImage": "https://images.justwatch.com/poster/256495457/s166/season-6.webp"
      },
    ]
},


{
    "id":127,
    "title": "The Walking Dead",
    "year": 2010,
    "rank": 94,
    "rankChange": "▲ +4",
    "rating": 86,
    "imdbRating": 8.1,
    "imdbVotes": "1m",
    "backdropImage": "https://images.justwatch.com/backdrop/86305926/s1440/the-walking-dead.webp/the-walking-dead.webp",
    "posterImage": "https://i.pinimg.com/736x/8b/55/aa/8b55aa9b71b85499e4971c8d3c707b35.jpg",
    "duration": "46min",
    "highestRank": 1,
    "top10Days": 547,
    "top100Days": 2393,
    "top1000Days": 3205,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "29k",
    "dislikes": "4.4k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "sfAc2U20uyg",
    "type" : "series",
    "seasons": [ // Add season details here
      {
        "seasonNumber": 1,
        "episodes": 6,
        "posterImage": "https://images.justwatch.com/poster/306348297/s166/season-1.webp"
      },

      {
        "seasonNumber": 2,
        "episodes": 13,
        "posterImage": "https://images.justwatch.com/poster/306348306/s166/season-2.webp"
      },

      {
        "seasonNumber": 3,
        "episodes": 16,
        "posterImage": "https://images.justwatch.com/poster/306348314/s166/season-3.webp"
      },

      {
        "seasonNumber": 4,
        "episodes": 16,
        "posterImage": "https://images.justwatch.com/poster/306348331/s166/season-4.webp"
      },

      {
        "seasonNumber": 5,
        "episodes": 16,
        "posterImage": "https://images.justwatch.com/poster/306304089/s166/season-5.webp"
      },

      {
        "seasonNumber": 6,
        "episodes": 16,
        "posterImage": "https://images.justwatch.com/poster/140225063/s166/the-walking-dead.webp"
      },

      {
        "seasonNumber": 7,
        "episodes": 16,
        "posterImage": "https://images.justwatch.com/poster/306348427/s166/season-7.webp"
      },

      {
        "seasonNumber": 8,
        "episodes": 16,
        "posterImage": "https://images.justwatch.com/poster/27657865/s166/season-8.webp"
      },

      {
        "seasonNumber": 9,
        "episodes": 16,
        "posterImage": "https://images.justwatch.com/poster/306348482/s166/season-9.webp"
      },

      {
        "seasonNumber": 10,
        "episodes": 16,
        "posterImage": "https://images.justwatch.com/poster/306348465/s166/season-10.webp"
      },

      {
        "seasonNumber": 11,
        "episodes": 16,
        "posterImage": "https://images.justwatch.com/poster/306348518/s166/season-11.webp"
      },
    ]
},

{
    "id":128,
    "title": "Crushed",
    "year": 2022,
    "rank": 111,
    "rankChange": "▲ +1397",
    "rating": 85,
    "imdbRating": 8.4,
    "imdbVotes": "5.3k",
    "backdropImage": "https://i.ytimg.com/vi/hvyV9qFUuDM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB2ektq2ZrZMhuzGkikfINeGwi2bQ",
    "posterImage": "https://assets.gadgets360cdn.com/pricee/assets/product/202311/Crushed_poster2_1699872795.jpg",
    "duration": "30min",
    "highestRank": 64,
    "top10Days": 9,
    "top100Days": 89,
    "top1000Days": 765,
    "watchOptions": [
      {"platform": "Amazon Prime", "price": "Rs500/-"},
      {"platform": "Amazon MiniTv"}
    ],
    "likes": "8k",
    "dislikes": "1k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "3tRiy5OHea4",
    "type" : "series",
    "seasons": [ // Add season details here
      {
        "seasonNumber": 1,
        "episodes": 6,
        "posterImage": "https://www.justwatch.com/images/poster/259529669/s166/season-1.webp"
      },

      {
        "seasonNumber": 2,
        "episodes": 6,
        "posterImage": "https://www.justwatch.com/images/poster/301898545/s166/season-2.webp"
      },

      {
        "seasonNumber": 3,
        "episodes": 6,
        "posterImage": "https://www.justwatch.com/images/poster/309388921/s166/season-3.webp"
      },

      {
        "seasonNumber": 4,
        "episodes":6,
        "posterImage": "https://www.justwatch.com/images/poster/316281397/s166/season-4.webp"
      },


    ]
  },

  {
    "id":129,
    "title": "Breaking Bad",
    "year": 2008,
    "rank": 111,
    "rankChange": "▲ +6",
    "rating": 97,
    "imdbRating": 9.5,
    "imdbVotes": "2m",
    "backdropImage": "https://images.justwatch.com/backdrop/178169781/s1440/breaking-bad.webp/breaking-bad.webp",
    "posterImage": "https://mir-s3-cdn-cf.behance.net/project_modules/hd/6e04e4104134375.5f5c010ef323a.jpg",
    "duration": "47min",
    "highestRank": 4,
    "top10Days": 75,
    "top100Days": 2542,
    "top1000Days": 3209,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
    ],
    "likes": "72k",
    "dislikes": "2.3k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "1JLUn2DFW4w",
    "type" : "series",
    "seasons": [ // Add season details here
      {
        "seasonNumber": 1,
        "episodes": 7,
        "posterImage": "https://images.justwatch.com/poster/8594434/s166/season-1.webp"
      },

      {
        "seasonNumber": 2,
        "episodes": 13,
        "posterImage": "https://images.justwatch.com/poster/8594406/s166/season-2.webp"
      },

      {
        "seasonNumber": 3,
        "episodes": 13,
        "posterImage": "https://images.justwatch.com/poster/301572468/s166/season-3.webp"
      },

      {
        "seasonNumber": 4,
        "episodes":13,
        "posterImage": "https://images.justwatch.com/poster/8594372/s166/season-4.webp"
      },

      {
        "seasonNumber": 5,
        "episodes": 16,
        "posterImage": "https://images.justwatch.com/poster/8594362/s166/season-5.webp"
      }, 
    ]
  },

  
  {
    "id":130,
    "title": "Peaky Blinders",
    "year": 2013,
    "rank": 138,
    "rankChange": "▲ +49",
    "rating": 95,
    "imdbRating": 8.8,
    "imdbVotes": "675k",
    "backdropImage": "https://images.justwatch.com/backdrop/178308142/s1440/peaky-blinders.webp/peaky-blinders.webp",
    "posterImage": "https://www.tallengestore.com/cdn/shop/products/PeakyBlinders-ThomasShelby-GarrisonBombing-NetflixTVShow-ArtPoster_7fef60c1-eddd-41e8-89fd-ac6edeba5038.jpg?v=1619864662",
    "duration": "58min",
    "highestRank": 2,
    "top10Days": 63,
    "top100Days": 1631,
    "top1000Days": 3193,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "39k",
    "dislikes": "2k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "1JLUn2DFW4w",
    "type" : "series",
    "seasons": [ // Add season details here
      {
        "seasonNumber": 1,
        "episodes": 6,
        "posterImage": "https://images.justwatch.com/poster/195479700/s166/season-1.webp"
      },

      {
        "seasonNumber": 2,
        "episodes": 6,
        "posterImage": "https://images.justwatch.com/poster/195470848/s166/season-2.webp"
      },

      {
        "seasonNumber": 3,
        "episodes": 6,
        "posterImage": "https://images.justwatch.com/poster/195470821/s166/season-3.webp"
      },

      {
        "seasonNumber": 4,
        "episodes":6,
        "posterImage": "https://images.justwatch.com/poster/195470692/s166/season-4.webp"
      },

      {
        "seasonNumber": 5,
        "episodes": 6,
        "posterImage": "https://images.justwatch.com/poster/252100318/s166/season-5.webp"
      }, 

      {
        "seasonNumber": 6,
        "episodes": 6,
        "posterImage": "https://images.justwatch.com/poster/265096894/s166/season-6.webp"
      }, 
    ]
  },


  {
    "id":131,
    "title": "Supernatural",
    "year": 2005,
    "rank": 123,
    "rankChange": "▲ +1",
    "rating": 90,
    "imdbRating": 8.4,
    "imdbVotes": "495k",
    "backdropImage": "https://images.justwatch.com/backdrop/8604625/s1440/supernatural.webp/supernatural.webp",
    "posterImage": "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781608878277/supernatural-the-poster-collection-9781608878277_lg.jpg",
    "duration": "45min",
    "highestRank": 2,
    "top10Days": 104,
    "top100Days": 1823,
    "top1000Days": 3205,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "14k",
    "dislikes": "1.4k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "1JLUn2DFW4w",
    "type" : "series",
    "seasons": [ // Add season details here
      {
        "seasonNumber": 1,
        "episodes": 22,
        "posterImage": "https://images.justwatch.com/poster/86311580/s166/season-1.webp"
      },

      {
        "seasonNumber": 2,
        "episodes": 22,
        "posterImage": "https://images.justwatch.com/poster/86311568/s166/season-2.webp"
      },

      {
        "seasonNumber": 3,
        "episodes": 16,
        "posterImage": "https://images.justwatch.com/poster/170937379/s166/season-3.webp"
      },

      {
        "seasonNumber": 4,
        "episodes":22,
        "posterImage": "https://images.justwatch.com/poster/86311545/s166/season-4.webp"
      },

      {
        "seasonNumber": 5,
        "episodes": 22,
        "posterImage": "https://images.justwatch.com/poster/86311496/s166/season-5.webp"
      }, 

      {
        "seasonNumber": 6,
        "episodes": 22,
        "posterImage": "https://images.justwatch.com/poster/170937327/s166/season-6.webp"
      }, 

      {
        "seasonNumber": 7,
        "episodes": 23,
        "posterImage": "https://images.justwatch.com/poster/170937264/s166/season-7.webp"
      }, 

      {
        "seasonNumber": 8,
        "episodes": 23,
        "posterImage": "https://images.justwatch.com/poster/170937264/s166/season-7.webp"
      }, 

      {
        "seasonNumber": 9,
        "episodes": 23,
        "posterImage": "https://images.justwatch.com/poster/170937211/s166/season-9.webp"
      }, 

      {
        "seasonNumber": 10,
        "episodes": 24,
        "posterImage": "https://images.justwatch.com/poster/86311406/s166/season-10.webp"
      }, 

      {
        "seasonNumber": 11,
        "episodes": 22,
        "posterImage": "https://images.justwatch.com/poster/86311386/s166/season-11.webp"
      }, 

      {
        "seasonNumber": 12,
        "episodes": 23,
        "posterImage": "https://images.justwatch.com/poster/86311364/s166/season-12.webp"
      }, 

      {
        "seasonNumber": 13,
        "episodes": 23,
        "posterImage": "https://images.justwatch.com/poster/86311344/s166/season-13.webp"
      }, 

      {
        "seasonNumber": 14,
        "episodes": 20,
        "posterImage": "https://images.justwatch.com/poster/86311777/s166/season-14.webp"
      }, 

      {
        "seasonNumber": 15,
        "episodes": 20,
        "posterImage": "https://images.justwatch.com/poster/256744176/s166/season-15.webp"
      }, 
    ]
  },

  {
    "id":132,
    "title": "The Office ",
    "year": 2005,
    "rank": 100,
    "rankChange": "▲ +12",
    "rating": 94,
    "imdbRating": 9.0,
    "imdbVotes": "739k",
    "backdropImage": "https://images.justwatch.com/backdrop/177294826/s1440/friends.webp/friends.webp",
    "posterImage": "https://images.justwatch.com/poster/300603462/s166/friends.webp",
    "duration": "24min",
    "highestRank": 2,
    "top10Days": 20,
    "top100Days": 2127,
    "top1000Days": 3040,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "37k",
    "dislikes": "2.5k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "CZZrFC2MFAw",
    "type" : "series",
    "seasons": [ // Add season details here
      {
        "seasonNumber": 1,
        "episodes": 6,
        "posterImage": "https://images.justwatch.com/poster/245581596/s166/season-1.webp"
      },

      {
        "seasonNumber": 2,
        "episodes": 22,
        "posterImage": "https://images.justwatch.com/poster/238556208/s166/season-2.webp"
      },

      {
        "seasonNumber": 3,
        "episodes": 23,
        "posterImage": "https://images.justwatch.com/poster/245581579/s166/season-3.webp"
      },

      {
        "seasonNumber": 4,
        "episodes":14,
        "posterImage": "https://images.justwatch.com/poster/238555997/s166/season-4.webp"
      },

      {
        "seasonNumber": 5,
        "episodes": 26,
        "posterImage": "https://images.justwatch.com/poster/238555958/s166/season-5.webp"
      }, 

      {
        "seasonNumber": 6,
        "episodes": 26,
        "posterImage": "https://images.justwatch.com/poster/245582099/s166/season-6.webp"
      }, 

      {
        "seasonNumber": 7,
        "episodes": 24,
        "posterImage": "https://images.justwatch.com/poster/238555894/s166/season-7.webp"
      }, 

      {
        "seasonNumber": 8,
        "episodes": 24,
        "posterImage": "https://images.justwatch.com/poster/238555860/s166/season-8.webp"
      }, 

      {
        "seasonNumber": 9,
        "episodes": 23,
        "posterImage": "https://images.justwatch.com/poster/8603758/s166/season-9.webp"
      }, 

    ]
  },



  {
    "id":133,
    "title": "The Blacklist ",
    "year": 2013,
    "rank": 243,
    "rankChange": "▲ +45",
    "rating": 90,
    "imdbRating": 7.9,
    "imdbVotes": "284k",
    "backdropImage": "https://images.justwatch.com/backdrop/222822775/s1440/the-blacklist.webp/the-blacklist.webp",
    "posterImage": "https://images.justwatch.com/poster/259437978/s166/the-blacklist.webp",
    "duration": "43min",
    "highestRank": 1,
    "top10Days": 53,
    "top100Days": 1912,
    "top1000Days": 3205,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "16k",
    "dislikes": "1.7k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "z-cTuId0rYs",
    "type" : "series",
    "seasons": [ // Add season details here
      {
        "seasonNumber": 1,
        "episodes": 22,
        "posterImage": "https://images.justwatch.com/poster/94672126/s166/season-1.webp"
      },

      {
        "seasonNumber": 2,
        "episodes": 22,
        "posterImage": "https://images.justwatch.com/poster/176028087/s166/season-2.webp"
      },

      {
        "seasonNumber": 3,
        "episodes": 23,
        "posterImage": "https://images.justwatch.com/poster/237677062/s166/season-3.webp"
      },

      {
        "seasonNumber": 4,
        "episodes":22,
        "posterImage": "https://images.justwatch.com/poster/35297513/s166/season-4.webp"
      },

      {
        "seasonNumber": 5,
        "episodes": 22,
        "posterImage": "https://images.justwatch.com/poster/35297510/s166/season-5.webp"
      }, 

      {
        "seasonNumber": 6,
        "episodes": 22,
        "posterImage": "https://images.justwatch.com/poster/265885938/s166/season-6.webp"
      }, 

      {
        "seasonNumber": 7,
        "episodes": 22,
        "posterImage": "https://images.justwatch.com/poster/265885939/s166/season-7.webp"
      }, 

      {
        "seasonNumber": 8,
        "episodes": 22,
        "posterImage": "https://images.justwatch.com/poster/265885943/s166/season-8.webp"
      }, 

      {
        "seasonNumber": 9,
        "episodes": 22,
        "posterImage": "https://images.justwatch.com/poster/265885942/s166/season-9.webp"
      }, 

      {
        "seasonNumber": 10,
        "episodes": 22,
        "posterImage": "https://images.justwatch.com/poster/302759152/s166/season-10.webp"
      }, 
    ]
  },


  {
    "id":134,
    "title": "Arrow ",
    "year": 2012,
    "rank": 378,
    "rankChange": "▲ +20",
    "rating": 86,
    "imdbRating": 7.5,
    "imdbVotes": "449k",
    "backdropImage": "https://images.justwatch.com/backdrop/306143455/s1440/arrow.webp/arrow.webp",
    "posterImage": "https://images.justwatch.com/poster/150304764/s166/arrow.webp",
    "duration": "42min",
    "highestRank": 1,
    "top10Days": 430,
    "top100Days": 1694,
    "top1000Days": 3190,
    "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
    "likes": "7.4k",
    "dislikes": "1.1k",
    "watchlistText": "Watchlist",
    "seenText": "Seen",
    "syncText": "Sign in to Sync Watchlist",
    "videoId": "z-cTuId0rYs",
    "type" : "series",
    "seasons": [ // Add season details here
      {
        "seasonNumber": 1,
        "episodes": 22,
        "posterImage": "https://images.justwatch.com/poster/94672126/s166/season-1.webp"
      },

      {
        "seasonNumber": 2,
        "episodes": 22,
        "posterImage": "https://images.justwatch.com/poster/176028087/s166/season-2.webp"
      },

      {
        "seasonNumber": 3,
        "episodes": 23,
        "posterImage": "https://images.justwatch.com/poster/237677062/s166/season-3.webp"
      },

      {
        "seasonNumber": 4,
        "episodes":22,
        "posterImage": "https://images.justwatch.com/poster/35297513/s166/season-4.webp"
      },

      {
        "seasonNumber": 5,
        "episodes": 22,
        "posterImage": "https://images.justwatch.com/poster/35297510/s166/season-5.webp"
      }, 

      {
        "seasonNumber": 6,
        "episodes": 22,
        "posterImage": "https://images.justwatch.com/poster/265885938/s166/season-6.webp"
      }, 

      {
        "seasonNumber": 7,
        "episodes": 22,
        "posterImage": "https://images.justwatch.com/poster/265885939/s166/season-7.webp"
      }, 

      {
        "seasonNumber": 8,
        "episodes": 22,
        "posterImage": "https://images.justwatch.com/poster/265885943/s166/season-8.webp"
      }, 

      {
        "seasonNumber": 9,
        "episodes": 22,
        "posterImage": "https://images.justwatch.com/poster/265885942/s166/season-9.webp"
      }, 

      {
        "seasonNumber": 10,
        "episodes": 22,
        "posterImage": "https://images.justwatch.com/poster/302759152/s166/season-10.webp"
      }, 
    ]
  },

 





];

app.get('/api/New-movies', (req, res) => {
  const titleQuery = req.query.title ? req.query.title.toLowerCase() : null;

  if (titleQuery) {
    // Search movie by title
    const movieByTitle = movies.find(movie => movie.title.toLowerCase() === titleQuery);
    if (movieByTitle) {
      return res.json(movieByTitle);
    } else {
      return res.status(404).json({ message: 'Movie not found by title' });
    }
  } else {

    res.json(movies);
  }
});

// Endpoint to get a single movie by ID
app.get('/api/New-movies/:id', (req, res) => {
  const id = req.params.id;
  const movie = movies.find(movie => movie.id === parseInt(id));
  if (!movie) {
    return res.status(404).json({ message: 'Movie not found by id' });
  }
  res.json(movie);
});

// Endpoint to add a new movie
app.post('/api/movies', (req, res) => {
  const newMovie = { ...req.body, id: movies.length + 1 }; // Simple ID generation
  movies.push(newMovie);
  res.status(201).json(newMovie);
});

// Listen to server on the defined PORT
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
