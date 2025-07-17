import express from 'express'
const app = express();
import ContactRoutes from './routes/contact.routes.js'
import { connectDB } from './config/database.js';
const PORT = process.env.PORT
//!Database Connection.
connectDB()

// middleware
app.set('view engine','ejs')
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));


//routes
//! we here use route that we imported as middleware, first parameter is that does this route has any basic name or not, it does not has, so we add /
app.use("/",ContactRoutes)
app.listen(PORT, () => console.log(` app listening on port port! ${PORT}`))