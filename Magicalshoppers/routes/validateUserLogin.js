var express = require('express');
const { response } = require('../app');
var router = express.Router();

const {MongoClient} =  require("mongodb");
const client = new MongoClient('mongodb://127.0.0.1:27017');


/* POST home page. */
router.post('/', function(req, res, next) {
  console.log(req.body);
  console.log("Document");
  var responseObj = {};
  connectToDb(req.body)
    .then((document) => {
         console.log("Done with Job");
         console.log(document);
         if (document.length) {
           console.log("Valid User");
           responseObj.msg = 'valid'
         } else {
           console.log("Invalid credentails");
           responseObj.msg = 'invalid'
         }
      res.send(JSON.stringify(responseObj));
    })
    .catch(console.error)
    .finally(() => {
      //client.close()
    });
});

async function connectToDb(reqData) {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db("magicalShoppers");

  const collection1 = db.collection('userAccountDetails');

  console.log("reqData");
  console.log(reqData);
  var result = collection1.find({accountid: reqData.accountid, password: reqData.password}).toArray();
  console.log('Trying to find the user in the collection');
  console.log(result);
  //var result = collection.find({}).toArray();
  return result;
}



module.exports = router;
