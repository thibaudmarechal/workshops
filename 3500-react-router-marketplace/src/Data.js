let initialItems = [
  {
    description: "Nice boats. 50% off, wow!",
    price: 10000,
    inventory: 20,
    image: "/boat.png",
    id: "asewq",
    sellerId: "ewio",
    reviewIds: ["sdvn3c", "pojkbef"]
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
    reviewIds: []
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

let initialSellers = [
  {
    id: "ewio",
    name: "Jack Frost",
    rating: "5 stars"
  },
  {
    id: "qwefc",
    name: "Satoshi Nakamoto",
    rating: "5 stars"
  },
  {
    id: "xcvb",
    name: "Hank Green",
    rating: "2 stars"
  }
];

let initialReviews = [
  {
    id: "sdvn3c",
    content: "Awesome product. Love it!",
    author: "MrPoopyButthole"
  },
  {
    id: "iuwhbrvo",
    content: "It's OK. Cheap and easy!",
    author: "Trump"
  },
  {
    id: "oijhiuhr",
    content: "How dare you?",
    author: "Greta"
  },
  {
    id: "pojkbef",
    content: "Bof bof",
    author: "Albert"
  }
];

export { initialItems, initialSellers, initialReviews };
