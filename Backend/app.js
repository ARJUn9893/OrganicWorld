const express = require('express');
const app = express();
const bcrypt = require('bcryptjs');

require("./db/connectdata");
const customerData = require("./db/model/mySCHEMA");
const port = process.env.port || 8000;
app.use(express.json());
app.get('/', (req, res) => {
    res.status(200).send('hello this home')
});
app.post('/sign-up', async (req, res) => {
    try {
        var firstname = req.body.firstname;
        var lastname = req.body.lastname;
        var email = req.body.email;
        var password = req.body.password;
        if (password === req.body.confirmpassword) {
            password = await bcrypt.hash(password, 10);
            const usersignup = new customerData({ firstname, lastname, email, password });
            const saveuser = await usersignup.save();
            console.log(`the user successfully registered to us name: ${saveuser.firstname + " " + saveuser.lastname}`)
            res.status(201).json(saveuser.firstname + " " + saveuser.lastname);
        }
        else {
            res.status(400).json({});
        }
    } catch (err) {
        res.status(500).json({});

    }
});
app.post('/login', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const validateuser = await customerData.findOne({ email });
    if (validateuser) {
        const match = await bcrypt.compare(password, validateuser.password);
        console.log(match)

        if (match) {
            console.log(`the user successfully loged in  name: ${validateuser.firstname + " " + validateuser.lastname}`);
            res.status(201).json(validateuser.firstname + " " + validateuser.lastname);
        }
        else {
            res.status(400).json({});
        }
    }
    else {
        res.status(500).json({});

    }

});
app.listen(port, (err) => {
    if (err) return console.log(err)
    console.log(`server is started at http://localhost:${port}/`);
});