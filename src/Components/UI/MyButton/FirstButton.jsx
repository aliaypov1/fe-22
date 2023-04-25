
import style from './MyButton.module.css'
const FirstButton = ({children}) => {
    return (
       <button className={style.btn}>
       {children}
       </button>
    );
};

export default FirstButton;