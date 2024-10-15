import style from './hero.module.css'





const Hero = () => {
  return (
    <div>
        <h1 className={style.hero}>Hello this is hero section</h1>
        <p className={style.text}>This button is for example</p>
        <button className={style.button}>Click me</button>
        
      
    </div>
  )
}

export default Hero