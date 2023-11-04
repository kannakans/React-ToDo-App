import styles from './PageHeader.module.css';

function PageHeader({children, ...props}) {
  return <p className={styles.page_header} {...props}>
    {children}
    </p>
}

export default PageHeader;