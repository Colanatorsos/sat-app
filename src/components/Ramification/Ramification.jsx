import React from 'react'
import scss from './Ramification.module.scss'
import { Link } from 'react-router-dom'

const Ramification = () => {
  return (
    <div className={scss.section}>
      <div className={scss.heading}>
        <div className={scss.text_wrapper}>Верь в то, чтобы найти это.</div>
      </div>
      <div className={scss.wrapper}>
        <p className={scss.div}>Ищите недвижимость на продажу и в аренду <br /> в Кыргызстане</p>
      </div>
      <div className={scss.link}>
        <Link to='/' className={scss.text_wrapper_2}>Продажа</Link>
        <Link to='/filter' className={scss.text_wrapper_3}>Покупка</Link>
      </div>
    </div>
  )
}

export default Ramification