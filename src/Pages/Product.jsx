import React from 'react'
import Header from '../components/Header/Header'
import scss from './Product.module.scss'
import Form from '../components/Form/Form'
import { IoMdArrowDropdown } from "react-icons/io";
import Card from '../components/Card/Card';

const Product = () => {
  return (
    <>
      <Header />
      <Form />
      <div className={scss.Filter}>
        <h4>20 Результатов</h4>
        <p>Новые <IoMdArrowDropdown /></p>
      </div>

      <Card/>
    </>
  )
}

export default Product