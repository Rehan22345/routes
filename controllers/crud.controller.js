const model = require("../model/blog");

module.exports.ShowData = async(req,res)=>{
    const datas = await model.find();
    res.json({
        message : "data retrived successfully",
        data : datas,
    });
}

module.exports.ShowParticularData = async(req,res)=>{
    const {id} = req.params;
    const data = await model.findById(id);
    res.json({
        message : "data retrived successfully",
        data : data,
    })

}

module.exports.CreateData = async(req,res)=>{
const {name, description,title} = req.body;
const datas = await model.create({
    name : name,
    description : description,
    title : title
})
    res.json({
        message : "data created successfully",
        data : datas,
    })

}



module.exports.UpdateData = async(req,res)=>{
    const id = req.params.id;
    const updatedata = await model.findByIdAndUpdate(id,req.body);
        res.json({
            message : "data updated successfully",
            data : updatedata,
        })
    
    }
    


    module.exports.DeleteData = async(req,res)=>{
        const id = req.params.id;
        const updatedata = await model.findByIdAndDelete(id);
            res.json({
                message : "data deleted successfully",
            })
        
        }