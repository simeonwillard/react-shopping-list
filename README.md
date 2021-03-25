# React Shopping List

## Description

_Duration: 2 days_

This app allows you to make a personalized shopping list that you can add items to by filling out the input fields.  Once filled out, that item will be added to the list along with a "buy" button and a "delete" button. If you have bought the item you will see the item as purchased.  Also, there is an "edit" button which when clicked allows you to edit the input fields of that item.  The app also has a "reset" button and "clear" button.  The "reset" button will mark all the items in the list as "unpurchased" and you will then have the option to buy the items or delete the items again.  The "clear" button will delete all list items from the list.

## Screen Shot

![Alt text](./react-shopping-list.png?raw=true "demo of app")


## Installation

1. Create a database named _react-shopping-list_,
2. The queries in the tables.sql file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on Postgres, so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries,
3. Open up your editor of choice and run an npm install, npm install axios, npm install sweetalerts2 --save
4. Run npm run server in your terminal
5. Run npm run client in your terminal
6. The npm run client command will open up a new browser tab for you!


## Usage

1. Upon opening the app, the user is able to see their grocery list.
2. The user can add a list by clicking the 'add item' button and filling out the form.
3. The user can delete an item from their list by clicking the 'x' button on the item card.
4. The user can mark an item as "purchased" by clicking the 'check' icon on the item card.
5. The user can edit a listed item by clicking the 'pencil' icon on the item card.
6. The user can reset the "purchased" items to "unpurchased" by clicking the 'reset' button at the top right of the page.
7. The user can delete all grocery items by clicking the 'clear' button at the top right of the page.

## Built With
- Node
- Postgres
- Express
- Axios
- React

## Acknowledgement

Thanks to Prime Digital Academy who equipped and helped me to make this application a reality.
Thanks to Jordan Ashbacher, Sean Wade, and Kevin Burk for creating this application with me.
