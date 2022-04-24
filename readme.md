# Neo4j Movie Recommendation Web App based on IMDb movies dataset  

## Technology Stack:
- Front End : Twitter Bootstrap, Pug(templating engine)
- Server Side : Express.js, Neo4j driver
- Database : Neo4j

## Installation:
- Install [Neo4j Desktop](https://neo4j.com/)
- Extract [dataset](recommendation-system-using-graph-db/docs/dataset/recommendations.db.zip) file to Neo4j install-path/data/database/graphdb
- Set username to 'neo4j' and password to '123456'
- Install [npm](https://www.npmjs.com/) and run the following command inside the root directory  
    - `npm install`  
    - `npm start`
    
## Working:
- Browse movies, rate them, and add them to our watchlist.
- Get info about specific and a list of movies similar to it.
- Recommendatios will be genreated based on your browsing habits.

## Algorithms Used:
- Weighted Similarity Algorithm - computes similar movies based on matching parameters like genres, directors, actors etc.. Weights are used to modify results.
- Refer to [neo4j api](https://github.com/ani5ruth/NEOMd/tree/master/controller/neo4jApi) directory for more algorithms and queries.

