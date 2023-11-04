import styles from './Button.module.css';

function Button({type, children, ...props}) {
return (
  <button type={type === 'submit' ? 'submit' : 'button'} className={styles.button} {...props}>
    {children}
  </button>
)
}

function SelectButton({children, ...props}){
  return (
    <select
    className={styles.button}
    {...props}
    >
      {children}
    </select>
  )
}

export { Button, SelectButton }