const Express= require('express');
const { Mongoose } = require('mongoose');
const router =Express.Router();
const employee = require('../Model/Schema');
const corporate =require('../Model/Schema2')

//Joining Two collection using $Lookup
router.get('/Details',(req,res,)=>
{
 corporate.aggregate([
        {
            $lookup:
            {
                from:'employee',
                localField:'email',
                foreignField:'email',
                as:'Employee_Detail'
            }
        }
 ]).exec((err,result)=>
    {
        if(err) throw err;
        if(result)
        {
            res.send(result);
        }
    })
    
});

router.get('/employee',async (req,res)=>{
    try{
        const data= await employee.find()
        console.log(data)
        res.send(data);
        // res.json(data);
    }catch(err)
    {
        console.log('Error'+err);
    }
    });
    router.get('/corporate',async (req,res)=>{
        try{
            const data= await corporate.find()
            console.log(data)
            res.send(data);
            // res.json(data);
        }catch(err)
        {
            console.log('Error'+err);
        }
        });

router.post('/employee',async(req,res)=>
{
    const data =new employee({
        name:req.body.name,
        jobId:req.body.jobId,
        sal:req.body.sal,
        email:req.body.email
    })
    try {
        const save= await data.save();
        res.send(save);

    } catch (error) {
        console.log('Errror={$error}');
        res.send(`Error:${error}`);
        
    }
})

router.post('/corporate',async(req,res)=>
{
    const data2 =new corporate({
        name:req.body.name,
        email:req.body.email
    })
   try {
       const save2=await data2.save();
       res.send(save2);
       
   } catch (error) {
       res.send(`Error:${error}`)
       
   }
})

 module.exports=router;