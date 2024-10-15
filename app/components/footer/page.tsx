import style from './footer.module.css'



const Footer = () => {
  return (
    <div >
      <p className={style.para}>
        &copy; 2024 My Footer. All rights reserved. Designed by{' Muhammad '}
        <a href="https://example.com">Example Company</a>.
      </p>
    </div>
  )
}

export default Footer
