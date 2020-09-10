# Name-Search
A solution for Utah moms before they regret giving their child an awkwardly spelt name.

## Project Description
Looking for baby names? Trying to figure out what the heck your own name means? Want a name that will rhyme with your last name or has a specific amount of syllables? Name search will help you find what you're looking for! Name search may seem like a simple search engine, but it will have many advanced search options, based on a name's country of origin, its length in characters, sub-strings, meaning, and popularity. Many name sites are static, presenting only information. If you are building up a baby name list, you are constantly switching tabs to record a name. Name search will allow you to do that all in one place and let you create custom lists of your favorite names in real time. Eventually this data could be downloaded or exported as a .csv or spreadsheet. If you can't find the name you are looking for then you will also be able to submit one and have it added to the Name Search Database.

## Team
Just me so far. 1 more person could be enough for this project, if more are interested then possibly another.

## SQL
I am most familiar with postgreSQL and using an open source program called DBeaver to interface with the database.

## NoSQL
Most likely a document based NoSQL database like MongoDB. There could be possibly more additional data fields that could accompany a name that could be dynamically added. This would become critical if user demand grows fast.

## MVP Road Map
By prority:
1. A RESTful API
2. Search Engine
3. List Customization
4. Account creation and authentication 
5. Name Submission Web Form

## Business
This product could become self sustainable through allowing ads on the site with strong user demand. Account creation and in-app purchases can incentize users to buy an ad-free experience just for 99 cents for life! As well this project will include buiding out a RESTful API that could eventually be monetized. Rates could start with 1000 API calls for free accounts and rates following larger amounts of requests. Possibly crowd-fund the project.

## Legal 
The name you give your posterity goes one their legal documents, make sure its one they can be proud of! As well, if the app reaches at least the top three MVP goals then we can talk about creating a small business and LLC. 

## Technical
### Backend
 - PostgreSQL database with stored procedures to simplify querying and sanitze requests on the backend 
 - Node.js as the backend framework and package manager
 - Express.js to get off the ground running building out the API
 - Jest a testing framework for unit testing on the API and DB calls
### Frontend
 - React.js to easily customize components and modularize design
 - Material UI as a Component library to streamline UX and UI design of the site and app
 - Reach Router to route search results and separate pages that quick and easy
 - React Native eventually (far into the future) when the website is stable to become available on IOS and Android platforms
 
 ## Major Steps 
 - create the database, schema, tables, views, and stored procedures(functions)
 - build the backend concurrently with the database to build confidence, a proof of concept, and testing early
 - build API routes, DB models (functions to call to the DB), and JSON Mappings
 - Build the frontend, start with search engine, then dynamic name lists.
