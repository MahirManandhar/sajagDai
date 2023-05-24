const User=require("../models/userModel")

module.exports.getUser=async function getUser(req, res){
    // console. log('getUsercalled');
    let id=req.params.id;
    let user=await User. findById(id);
   if(user){
        return res.json(user);
    }
    else{
        return res.json({
            message: 'users not found'
        });
    }
}

// module.exports.postUsers=function postUser( req, res){
//     console. log(req.body);
//     users = req. body;
//     res. json({
//       message: "data received successfully",
//       user: req.body,
//     })
// }

module.exports.updateUsers=async function updateUser(req,res){
    // console. log(" req. body-> ", req.body);
    //update data in users obj
    try{
        let id=req.params.id;
        let user=await User.findById(id);
        let dataToBeUpdated = req.body;
        if(user){
            const keys=[];
            for(key in dataToBeUpdated){
                keys.push(key);
            }

            for(let i=0;i<keys. length;i++){
                user [keys [i]] =dataToBeUpdated [keys [i]];
            }
            const updatedData=await user.save();
            res. json({
             message: "data update successfully",
             data:user
            }); 
        }
        else{
            res.json({
                message:"User Not Found"
            });
        }
    }
    catch(err){
        message :err.message
    }
}

module.exports.deleteUsers=async function deleteUser(req,res) {
            // users={}
    try{
        let id=req.params.id;
        let user=await User.
        findByIdAndDelete(id);
        if(!user){
            res.json({
                message:"user nor found"
            })
        }
        res. json({
        message: "data has been deleted",
        data:user,
        });
    }

    catch(err){
        res.json({
            message:err.message
        });
    }
}

// module.exports.getAllUser=async function getAllUser( req, res){
//     let users=await User.find();
//     if(users){
//         res. json({
//         message: 'users retrieved',
//         data:users
//         });
//     }
            

//     res. send ("user id received"); 
// }




// function setCookies(req, res){
//     // res. setHeader('Set-Cookie','isLoggedIn=true");
//    res.cookie('isLoggedIn',true,{maxAge:1000*60*60*24,secure:true, http0nly:true});
//    res.cookie('isPrimeMember', true);
//    res.send('cookies has been set')
// }

// function getCookies(req, res){
//     let cookies=req.cookies.
//     isLoggedIn;
//     console. log(cookies);
//     res. send('cookies received');
// }

module.exports.updateProfileImage=function updateProfileImage(req,res){
    res.json({
        message:'file uploaded succesfully'
    })
}
    




