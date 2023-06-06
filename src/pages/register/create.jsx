import {FcGoogle} from 'react-icons/fc'
import {BsApple} from 'react-icons/bs'
import styles from './create.module.css'
import {BsTwitter} from 'react-icons/bs'
import { useRecoilState } from 'recoil'
import { createState } from '../../atoms/atoms'
import { useNavigate } from 'react-router-dom'

export function Create() {

// console.log(setCreate, create)
    const [create, setCreate] = useRecoilState(createState)

    const navigate = useNavigate();

    function handleCreate() {
        setCreate(!create)
    }

    return (
        <div className={styles.main}>
            <div className={styles.btnContainer}>
                <BsTwitter style={{color:"white"}}/>
                <h2 className={styles.createHead}>Join Twitter today</h2>

                <button className={styles.btn}><FcGoogle />Sign up with Google</button>

                <button className={styles.btn}><BsApple/>Sign up with Apple</button>
                
                <span className={styles.hr}></span>
                <div className={styles.termsdiv}>
                <button onClick={handleCreate} className={styles.btn}>Create account</button>
                {/* <div className={styles.termsdiv}> */}
                <p className={styles.terms}>By signing up, you agree to the<span className={styles.conditions}>Terms of Service</span> 
                and <span className={styles.conditions}>Privacy Policy</span>, including <span className={styles.conditions}>Cookie Use</span></p>
                <p className={styles.haveAcc}>Have an account already?<span onClick={()=>navigate('/login')} className={styles.login}>Log in</span></p>
                </div>
                {/* <div className={styles.haveAccP}>
                <p className={styles.haveAcc}>Have an account already?<span className={styles.conditions}>Log in</span></p>
                </div> */}
            </div>
        </div>
    );
}