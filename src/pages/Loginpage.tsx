import React from 'react'
import { Formik, Form} from 'formik'
import * as Yup from 'yup'
import Inputfield from '../components/Inputfield'
import Button from '../components/Button'


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
        

    }

  return (
    <div>
        <Formik 
        initialValues={initialvalues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema} >
            {()=>{
                return(
                    <div>
                        <Form>
                           <Inputfield type='text' name='emailAddress' label='Email Address'/>
                           <Inputfield type='password' name='password' label='Password'/>
                           <Inputfield type='checkbox' name='checkbox' label='I accept all terms and conditions.'/>
                           <Button type='submit' className='border-2' text='Login'/>

                        </Form>
                    </div>
                )

            }}

        </Formik>
    </div>
  )
}

export default Loginpage