const router = require('express').Router();

const {
    LoginUser
} = require('../controller/user_controller');

app.post("/login",async (req,res) => {

    Token = await LoginUser(req,res);
    res.send(Token);


});

app.post("/signUp",async (req,res) => {
	var ID =await CreateUser(req,res);
    res.send(ID);
});

app.get("/party/playing", async (req,res) => {
	var state =await videoState(req,res);
    res.send(state);
});

module.exports = router;    