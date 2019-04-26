let initialItems = [{ // 1
    description: "Nice boats. 50% off. wow.", // 2
    price: 10000, // 4
    image: "/boat.png", // 4
    id: "asewq", // 2
    sellerId: "ewio" // 3
}, { // 1
    id: "wqwasq", // 5
    description: "Lawn chairs", // 5
    price: 50, // 5
    image: "/lawnchair.jpg", // 5
    sellerId: "xcvb" // 5
}] // 1

let initialSellers = [{ // 1
    id: "ewio", // 6
    name: "Jack Frost", // 7
    rating: "5 stars", // 7
}, { // 1
    id: "xcvb", // 8
    name: "Hank Green", // 8
    rating: "2 stars", // 8
}] // 1
export { initialItems, initialSellers } // 1

/* meta
({
    text: {
        1: `This file contains the data that we will be displaying to the
        user. It contains two arrays. The first array has two elements, both objects
        , and it represents the items
        being sold. The second array represents the people doing the selling. Each object
        of the first array will the following properties:
- description
- price
- image
- id
- sellerId

Each element of the second array will the following properties:
- id
- name
- rating
`,
        2: `The description property of an item is a string that describes the item. The id property is a
        unique string that can be used to refer to the item. The id property will be useful
        for the exercises. The value of the id property should be unique.`,
        3: `The sellerId property uniquely identifies the seller in the second array. This represents the person
        selling the item in question.`,
        4: `The image of the item, relative to the public/ folder  `,
        5: `Similar to the first item. Notice that the order of the properties is different. The property order never matters.`,
        6: `The id of the seller. Notice that this id is also used in the first array (can you see it?)`,
        7: `Information related to the seller`,
        8: `All the properties of the second seller`
    }
})
*/