import { userM } from "../modals/UserModel.js";
export const userCreation = async (req, res) => {
    const userDat = req.body;
    console.log(userDat)
    try {
      const userData = new userM(userDat);
      const savedUser = await userData.save();
  
      res.status(201).json({
        message: "User Created",
        userData: savedUser,
      });
    } catch (e) {
      console.error("Error saving user:", e.message);
      res.status(500).json({
        message: "Server Error",
      });
    }
  }
  
  export const getAllUser = async(req,res)=>{
    try{
       const users=await userM.find()
       res.status(200).json({
        users,
        message:"User fetch  successfully"
       })
    }
    catch(e){
       res.status(500).json({
        message:"server Error"
       })
    }
  }

