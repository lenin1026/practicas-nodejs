const { Router } = require('express');
const axios = require('axios');


const router = Router();


router.get("/", (req, res) => {
    let isActive = true;

   const users = [
    {
        id: 1,
        name: "John",
        lastname: "perez"
    },
    
        {
            id: 2,
            name: "joe",
            lastname: "piterson"
        },
   ] 
    res.render("index", {
        title: 'index page'});
        isActive = isActive
        users
});

router.get("/about", (req, res) => {
    
    res.render("about");
});

router.get("/dashboard", (req, res) => {    
    res.render("dashboard");
});

router.get("/posts", async (req, res) => {
    const response = await axios.get('http://jsonplaceholder.typicode.com/posts')
    
    res.render("posts"), {
        posts: response.data
    }    
});

module.exports = router;