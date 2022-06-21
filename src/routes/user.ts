import express from "express";
const router = express.Router()

router.get('/getAll',async (req,res) => {
    return res.status(200).json({message:"asd"})
})

export default router