import React from 'react'
import "./SendMail.css"
import CloseIcon from '@mui/icons-material/Close';
import { Button } from "@mui/material"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { CloseSendMessage } from "./features/mailSlice";



function SendMail() {
    const { register, handleSubmit, watch }  = useForm();

    const onSubmit = (Formdata) =>{
        console.log(Formdata);
    }

    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New Message</h3>
                <CloseIcon className="sendMail__close" />
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>

              <input 
                name="To"
                placeholder= "To"
                type="text"
                {...register("To", { required: true })} 
               />

            

              <input 
               name="subject"
               placeholder= "Subject" 
               type="text" 
               {...register("subject", { required: true })}
              />
               
              

              <input
               name= "message" 
               placeholder="Message..."
               type="text" 
               className="sendMail__message" 
               {...register("message", { required: true })}
              />
              

             <div className="sendMail__options">
                 <Button 
                 className="sendMail__send"
                 varient="contained"
                 color="primary"
                 type="submit"
                 >Send</Button>
             </div>

            </form>
            
        </div>
    )
}

export default SendMail
