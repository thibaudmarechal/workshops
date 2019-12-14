const initialItems = [
  {
    description: "Nice boats. 50% off, wow!",
    price: 10000,
    inventory: 20,
    image: "/boat.png",
    id: "asewq",
    sellerId: "ewio",
    reviewIds: ["sdvn3c", "pojkbef", "weokoinw"]
  },
  {
    description: "Lawn chairs",
    price: 50,
    inventory: 40,
    image: "/lawnchair.jpg",
    id: "wqwasq",
    sellerId: "xcvb",
    reviewIds: ["iuwhbrvo"]
  },
  {
    description: "Guns",
    price: 5500,
    inventory: 6,
    image: "/guns.jpg",
    id: "qiejiuhf",
    sellerId: "xcvb",
    reviewIds: []
  },
  {
    description: "Bitcoin",
    price: 9000,
    inventory: 21,
    image: "/bitcoin.jpeg",
    id: "quhfeuhef",
    sellerId: "qwefc",
    reviewIds: ["iuni94nua"]
  },
  {
    description: "Cybertruck",
    price: 40000,
    inventory: 4,
    image: "/cybertruck.jpg",
    id: "sfeihqq",
    sellerId: "qwefc",
    reviewIds: ["oijhiuhr"]
  }
];

const initialSellers = [
  {
    id: "ewio",
    name: "Craig Wright",
    rating: "0.5/5 stars",
    pic: "/csw.png",
    itemIds: ["asewq"]
  },
  {
    id: "qwefc",
    name: "Satoshi Nakamoto",
    rating: "5/5 stars",
    pic: "/satoshi.jpg",
    itemIds: ["sfeihqq", "quhfeuhef"]
  },
  {
    id: "xcvb",
    name: "The Dude",
    rating: "2/5 stars",
    pic: "/dude.jpg",
    itemIds: ["qiejiuhf", "wqwasq"]
  }
];

const initialReviews = [
  {
    reviewId: "sdvn3c",
    itemId: "asewq",
    content: "Awesome product. Love it!",
    authorId: "nveub398hbnc"
  },
  {
    reviewId: "iuwhbrvo",
    itemId: "wqwasq",
    content: "It's OK. Cheap and easy!",
    authorId: "nveub398hbnc"
  },
  {
    reviewId: "iuni94nua",
    itemId: "quhfeuhef",
    content: "Orange coin good, number go up!",
    authorId: "nveub398hbnc"
  },
  {
    reviewId: "weokoinw",
    itemId: "asewq",
    content: "Bad. I don't like it!",
    authorId: "nveub398hbnc"
  },
  {
    reviewId: "oijhiuhr",
    itemId: "sfeihqq",
    content: "Bad. How dare you?",
    authorId: "inb123n9njb"
  },
  {
    reviewId: "pojkbef",
    itemId: "asewq",
    content: "Bof bof",
    authorId: "inb123n9njb"
  }
];

const initialReviewers = [
  {
    name: "Trump",
    pic: "/trump.jpg",
    id: "nveub398hbnc",
    description: "Orange-skinned guy who happens to be the US President",
    reviewIds: ["iuwhbrvo", "weokoinw", "sdvn3c", "iuni94nua"]
  },
  {
    name: "Albert",
    pic: "/albert.jpg",
    id: "inb123n9njb",
    description: "Fisherman who likes to sell things online",
    reviewIds: ["pojkbef", "oijhiuhr"]
  }
];

export { initialItems, initialSellers, initialReviews, initialReviewers };
