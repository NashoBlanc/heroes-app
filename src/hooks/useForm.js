import { useState } from "react"

export const useForm = (initialState = {}) => {

   const [values, setValues] =  useState(initialState);    

   const hadleInputChange = ({target}) => {
    setValues({
        ...values,
        [target.name]: target.value
    });
    }

    return [ values, hadleInputChange];
 

}