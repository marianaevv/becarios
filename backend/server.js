const app = require("./app");
require('dotenv').config()
const { PORT,CONNECTION_URL } = require("./config");
const mongoose = require("mongoose");
if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
  }
app.listen(PORT,() =>
{
    new Promise( (resolve,reject) =>{

        const settings = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        };

        mongoose.connect(CONNECTION_URL,settings,(err) =>{
            if (err){
                reject(err);
            }
            else{
                console.log("Database connected");
                return resolve();
            }
        });
    })
    .catch(err =>{
        mongoose.disconnect();
        console.log(err);
    })
    console.log("This server is using port "+PORT);
});
