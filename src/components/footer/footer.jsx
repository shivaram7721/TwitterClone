import styles from './footer.module.css'
import { useNavigate } from 'react-router-dom';

export function Footer() {

    const navigate = useNavigate();


    return (
        <div className={styles.container}>
            <div className={styles.headFoot}>
                <h2 className={styles.head2}>Don't miss what's happening</h2>
                <p className={styles.para}>People on the Twitter are first to know</p>
            </div>

            <div className={styles.footBtnContainer}>
                <button onClick={()=>navigate('/login')} className={styles.footBtn1}>Log in</button>
                <button onClick={()=>navigate('/register')} className={styles.footBtn2}>Sign up</button>
            </div>
        </div>
    );
}