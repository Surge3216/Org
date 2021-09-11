const router = require("express").Router();
const { Challenge } = require('../models/Challenge')

//post a Challenge
router.post("/", async (req, res)=> {
    const newChallenge = new Challenge(req.body);
    try{
        const savedChallenge = await newChallenge.save();
        res.status(200).json(savedChallenge)
    } catch(err){
        res.status(500).json(err)
    }
}),

// get a Challenge

router.get("/:id", async (req, res)=>{
    try{
        const getChallenge = await Challenge.findById(req.params.id)
        res.status(200).json(getChallenge);
    } catch (err) {
        res.status(500).json(err);
      }
}),

// get all Challenges

router.get("/get/all", async (req, res)=>{
    try{
        const challenges = await Challenge.find().sort({ createdAt: -1 });
        res.status(200).json(challenges)
    }catch (err) {
        res.status(500).json(err);
      }
})

module.exports = router;