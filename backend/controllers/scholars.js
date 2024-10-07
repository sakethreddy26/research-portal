const scholarSchema=require("../models/scholars_model")


const getallscholars =async(req,res)=>{
    try {
        const scholars = await scholarSchema.find();
        res.json(scholars);
      } catch (err) {
        res.status(500).send('Server Error');
      }
}


module.exports=getallscholars