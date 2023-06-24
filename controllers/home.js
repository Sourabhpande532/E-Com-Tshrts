exports.home = (req,res)=>{
    res.status(200).json({
        success:true,
        gretting:"Hello,Home Page From API"
    })
}
exports.Dummy = (req,res)=>{
    res.status(200).json({
        success:true,
        gretting:"Hello,Dummy From API"
    })
}