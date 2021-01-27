const express = require ('express');
const bodyParser = require ('body-parser');
// importing graphql, graphql funtion which actually used in the place of middleware function
// middleware funciton will do is it will take incoming request and funnel them through graphQL query parser automatically forward to right resolver
//Developer has to set resovler schema up
const {  graphqlHTTP } = require ('express-graphql');//===> Modern java script syntax which is called object destrcturing  
// adding a schema 
//const graphQL = require ('graphql'); ==> declaring in object
//buildschema function which is used to build schema , it has specify in app.use , schema object
const { buildSchema } = require ('graphql');  //===> Modern java script syntax which is called object destrcturing  

//@using of function expresstion in app
const app = express();


//@middle-ware for json objects
app.use (bodyParser.json());

//using graphql middleware , when you are using graphql middle ware , you cannot use app.get ==> root route
//Syntax : app.use('/graphql',midddleware function ({Java Script Objects}) code)
//query to fetch data, mutation to change sata
app.use('/graphql', graphqlHTTP ({
    schema: buildSchema(`
        type RootQuery {
            events: [String!]!
            
        }
        type RootMutation {
            createEvent(name: String): String
        }
        schema {
            query: RootQuery 
            mutation:  RootMutation
        }

        `), //====> schemas are defined

//====> where resovler names are specified, Which has all resolver functions 
//these resolver function need to match with schema by name
    rootValue:  {
        events: () => {  // anonymous fuction
            return ['Code festival','Project Hackthon','Challege Event']
        },

        createEvent: (args) => {       // fucntion with args
            const eventName = args.name;
            return eventName;
        }

    },
    //output @/graphql endpoint can be seen only through graphical GUI tool
    graphiql: true  
     
}));

//creating root route with default middleware function
// app.get('/',(req,res,next) => {
//     res.send('Welcome to Express Server');

// })

//@express server listening to 3001
app.listen(3001);
console.log('Express Server is running');