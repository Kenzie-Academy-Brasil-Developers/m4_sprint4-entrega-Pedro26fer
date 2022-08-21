
const verifyDataSentIsNullMiddleware = (req,res,next) => {
    
    const {name, price} = req.body

    if(!name || !price){
        
        return res.status(400).json({
            message: 'Invalid data'
        })
    }

    next()
}

export default verifyDataSentIsNullMiddleware