const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./src/routes/userRoutes');
const productRoutes = require('./src/routes/productRoutes');
const cartRoutes = require('./src/routes/cartRoutes');
const sessionRoutes = require('./src/routes/sessionRoutes');
const passport = require('./src/middlewares/passport');
const exphbs = require('express-handlebars');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(passport.initialize());

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use('/api', userRoutes);
app.use('/api', productRoutes);
app.use('/api', cartRoutes);
app.use('/api/sessions', sessionRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .[_{{{CITATION{{{_1{](https://github.com/stepanencode/weather-service-backend/tree/1119549b61708fb8e8ffb5273c6b1e67a7f44d92/models%2Fuser.model.js)[_{{{CITATION{{{_2{](https://github.com/cjreitman/Tracker/tree/b0bab7ac9ec0a348682307845b5aa6d603704507/routes%2Fapi%2Fusers.js)[_{{{CITATION{{{_3{](https://github.com/tiongsonkj/AboutTheKids/tree/bbfb0199647f6914013c127b706523303171dd56/routes%2Fapi%2Fmentors.js)[_{{{CITATION{{{_4{](https://github.com/adamwjo/hotel-wizard/tree/6267c3594dc83f6c5ce0ab3ae13e426e1310004c/api%2Froutes%2Fusers.js)[_{{{CITATION{{{_5{](https://github.com/altub/Website-with-posts/tree/516bb1b2a622ca5932f4a0bb61237db849a48d84/server%2Froutes%2FverifyToken.js)[_{{{CITATION{{{_6{](https://github.com/AarRidho/rest-api-crud-user/tree/814745dbb1578242361dafbf213de5eb1f3637b9/src%2Flib%2Fpassport%2Findex.js)