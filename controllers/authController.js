const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

exports.register = async (req, res) => {
    const { name, email, password } = req.body;

    const hashed = await bcrypt.hash(password, 10);

    try{
        const user = await User.create({
            name,
            email,
            password: hashed,
        });

        res.json(user);

    } catch (err){

        console.error(err);

        return res.status(400).json({ message: "Email already exists." });
    }
}

exports.login = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email }});
    if(!user) return res.status(401).json({ message: "Invalid email or password." });

    const match = await bcrypt.compare(password, user.password);
    if(!match) return res.status(401).json({ message: "Invalid email or password." });

    const token = jwt.sign({ id: user.id }, 'secretkey', { expiresIn: '1d' });
    res.json({ token });
}

exports.userInfo = async (req, res) => {
    const user = await User.findByPk(req.user.id, { attributes: ['id', 'name', 'email'] });
    res.json(user);
  };