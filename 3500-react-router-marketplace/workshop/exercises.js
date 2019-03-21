({
  desc: "Extend the program you created",
  questions: [
    `There are only 2 items being sold by 2 people. Add 3 additional items and 1 seller. 
    Make sure that every seller is selling at least one item. `,
    `There might be 10 boats left and as a buyer I'd like to know that information.

    Add a details page for each item. In the details page, display how many of that item is left in stock.

    HINTS

    Add a "number left in stock" field for each item. To do this, we're going to add a new "item details page" where we will display this information.

You will need to add a route for the details page. The path attribute of that route will look something like 
'/details/:itemId'

You will need to add a function to pass to the render attribute of the route

To extract the itemId in that function, use 
routerData.match.params.itemId
(assuming routerData is the parameter of the function)

    `,
    `The potential buyers would like to read reviews before making a purchase. Add reviews for the items. 

    Add the reviews to the item details page (already created in a previous question)
    `,
    `The potential buyers would like to learn more about who wrote each review.

    For each review, put a link to the reviewer. By clicking on the link, the user can see all the reviews that person has written.
    `,
    `Your users want to see all the items that a seller is selling.

    In the seller details page, display links to the items being sold by that seller. 
    
    Each item should have a link in the seller details page.
    `,
    `Some users would like to see the list of all the sellers. 

    Add a link on the starting page that displays all the sellers. Create a link for each seller.
    When a user clicks on the link, all the items being sold by that seller will be displayed.	`,
    `(super hard question) Add a form to add an item to be sold and another form to add a seller.
(Hint: you will need to put your data in the state)`

  ]
})