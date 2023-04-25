import style from './MyButton.module.css'
const LastButton = ({children}) => {
    return (
       <button className={style.last__btn}>
       {children}
       </button>
    );
};

export default LastButton;