import React from 'react'
import { Formik,Form,Field} from 'formik';

const AddProduct = () => {
    
  return (
    <div className='col-lg-5 mx-auto mt-3'>
        <h1>Add Products</h1>
        <Formik 
         initialValues={{
            productName: '',
            productPrice: 0,
            productUrl: ''
         }}
         onSubmit={(values) => {
            let users = JSON.parse(localStorage.getItem('product'));
            users.push({
                ...values
            })
            localStorage.setItem('product',JSON.stringify(users))
         }}
        >
        <Form>
            <label className='mt-2' htmlFor='productName'>Product Name</label>
            <Field className='form-control mt-3'  id='productName' name='productName' placeholder='Leman' />

            <label className='mt-2'  htmlFor='productPrice'>Product Price</label>
            <Field className='form-control mt-3' type='number' id='productPrice' name='productPrice' placeholder='∞' />

            <label className='mt-2' htmlFor='productUrl'>Product Url</label>
            <Field className='form-control mt-3' type='url' id='productUrl' name='productUrl' placeholder='...' />

            <button className='btn btn-success mt-2' type='submit'>Submit</button>
        </Form>
        </Formik>
    </div>
  )
}

export default AddProduct
