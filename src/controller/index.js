const homePage = (req, res)=>{
    res.status(200).send("<h1>Welcome to my website</h1>");
}

export default {homePage}