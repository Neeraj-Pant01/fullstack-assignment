const router = require("express").Router();
const cardModel = require("./model")

router.post('/',async (req,res)=>{
    const newCard = new cardModel(req.body)
    try{
       const savedCard = await newCard.save();
       res.status(200).json(savedCard) 
    }catch(err){
        res.status(200).json({message:err.message})
    }
})

router.get('/:id', async (req,res)=>{
    try{
    const card = await cardModel.findById(req.params.id);
    if(!card) return res.status(200).json({message:"no card found !"})
        res.status(200).json(card)
    }catch(err){
        res.status(200).json({message:err.message})
    }
})

router.get('/', async (req,res)=>{
    const q = req.query;
    const filters = {
        ...(q.search && {title: {$regex : q.search , $options: "i"}})
    }
    try{
    const cards = await cardModel.find(filters);
    if(!cards) return res.status(200).json({message:"no cards available !"})
        res.status(200).json(cards)
    }catch(err){
        res.status(200).json({message:err.message})
    }
})

module.exports = router;