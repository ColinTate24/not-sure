const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');
const MongoClient = require('mongodb').MongoClient
const app = express();
const { ObjectId } = require('mongodb');
const PORT = (process.env.PORT || 3000)

dotenv.config({path:'config.env'});

app.use(bodyParser.urlencoded({ extended: true }))

// app.get('/', async function (req, res) {
    // res.sendFile(path.join(__dirname, "index.html" )); 
    // res.send('Hello ' + userName + ' from Node/Express/Heroku');

    MongoClient.connect(`mongodb+srv:Colingarrett24:<RdrZcoTWuMploJes>@cluster0.khllp7s.mongodb.net/?retryWrites=true&w=majority` ,
    {useUnifiedTopology: true}) 
        .then(client =>{
          console.log('connected to db')
          const db = client.db('roster')
          const playersCollection = db.collection('players')  
          
          app.set('view engine', 'ejs')
          app.use(bodyParser.urlencoded({ extended: true }))
          app.use(bodyParser.json());
          app.use(express.static('public'))});

    // client.connect;

    //     const collection = client.db("Cluster0").collection("posts");
    //     console.log('connected!');
    //     // perform actions on the collection object
       
    //     console.log('closed!');

    
    //     const result = await collection.findOne(); //.toArray();
    //      console.log(result.titlenp);
            
    //         res.send(result);
    //         // client.close();
        
    // });

        // res.send(`Hello Express from inside my client connect f/n!`);
    

    // res.render('index',  {     }    );


app.listen(PORT, console.log(`server is running on port: ${PORT}` ));