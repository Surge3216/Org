const router = require("express").Router();
const { Bio } = require("../models/Bio");
const { User } = require("../models/User");
//Create a Bio

router.post("/", async (req, res)=> {
    const newBio = new Bio(req.body);
    try{
        const savedBio = await newBio.save();
        res.status(200).json(savedBio)
    } catch(err){
        res.status(500).json(err)
    }
}),

// get bio

router.get("/:id", async (req, res)=>{
    try{
        const currentUser = await User.findById(req.params.id);
        const userBio = await Bio.find({userId: currentUser._id })
        res.status(200).json(userBio[0]);
    } catch (err) {
        res.status(500).json(err);
      }
})

// get all Bio

router.get("/players/all", async (req, res)=>{
    try{
        const bios = await Bio.find()
        res.status(200).json(bios)
    }catch (err) {
        res.status(500).json(err);
      }
})

module.exports = router;