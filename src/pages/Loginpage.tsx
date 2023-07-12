import React from 'react'
import { Formik, Form} from 'formik'
import * as Yup from 'yup'
import Inputfield from '../components/Inputfield'
import Button from '../components/Button'
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

const Loginpage = () => {
    const initialvalues={
        emailAddress:'',
        password:'',
        checkbox:false,
    }
    const validationSchema=Yup.object({
        emailAddress:Yup.string().required('Please enter valid email address.'),
        password:Yup.string().required('Please enter correct password'),
        checkbox:Yup.boolean().oneOf([true],'Please accept all the terms and conditions.')
    })
    const handleSubmit=(values:typeof initialvalues)=>{
        toast.success('Account scuccessfully created')

    }

  return (
    <div className='flex justify-center items-center '>
        <Formik 
        initialValues={initialvalues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema} >
            {()=>{
                return(
                    <div className='flex justify-center items-center h-96 border-2 w-[50%]'>
                        <Form>
                           <Inputfield type='text' name='emailAddress' label='Email Address'/>
                           <Inputfield type='password' name='password' label='Password'/>
                           <Inputfield type='checkbox' name='checkbox' label='I accept all terms and conditions.'/>
                           <Button type='submit' className='border-2' text='Login'/>

                        </Form>
                        <ToastContainer className='ml-auto'/>
                    </div>
                )

            }}

        </Formik>
    </div>
  )
}

export default Loginpage