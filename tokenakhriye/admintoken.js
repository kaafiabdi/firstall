
const adminToken = async(req,res,next)=>{
    if(req.userinfo.role !== "admin"){
        res.status(404).json({
            success:false,
            message:"sorry admin ka uun ayaa loo ogolyahay halkaaan"
        })
    }
    next()

}

export default adminToken