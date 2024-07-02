const axios = require('axios');

const student_login = async (req, res) => {
    let data = {};
    try {
        const { username, password } = req.body;
        data = await axios.post("https://pesu-auth.onrender.com/authenticate", {
            username,
            password,
            profile: true
        });
        res.cookie('profile', JSON.stringify(data.data.profile), {
            maxAge: 24 * 60 * 60 * 1000, 

        });
    } catch (error) {
        console.log(error);
    }
    res.status(200).json({"data":data.data});
};

module.exports = student_login;
