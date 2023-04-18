  const mongoose = require('mongoose');


  const MONGODB_URI = process.env.MONGO_URI || 'mongodb://localhost/freemusic';

  mongoose.connect(MONGODB_URI)
    .then(() => console.info(`Successfully connect to the database ${MONGODB_URI}`))
    .catch((error) => console.error(`An error ocurred trying to connect to de database`, error))