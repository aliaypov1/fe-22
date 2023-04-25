import React from 'react';
import style from './About.module.css'
import FirstButton from '../UI/MyButton/FirstButton';
import LastButton from '../UI/MyButton/LastButton';

const About = () => {
    return (
        <>
        <section className={style.about}>
            <div className="container">
            <h1 className={style.about__title}>Поступайте за границу <br /> с UniPage</h1>
            <p className={style.about__text}>Ваш эксперт по образованию за рубежом</p>
            <div className={style.buttons}>
                <FirstButton>Бесплатная консультация</FirstButton>
                <LastButton>Об услугах</LastButton>
            </div>
            <div className={style.about__wrapper}>
                <a href="#" className={style.wrapper__title}><p className={style.wrapper__text}>2023</p> год основания</a>
                <a href="#" className={style.wrapper__title}><p className={style.wrapper__text}>4 000+</p> cтудентов</a>
                <a href="#" className={style.wrapper__title}><p className={style.wrapper__text}>5 000+</p> публикаций</a>
                <a href="#" className={style.wrapper__title}><p className={style.wrapper__text}>28 000+</p> университетов</a>
            </div>
            </div>
        </section>
        <section className={style.content}>
        <div className="container">
            <div className={style.content__card}>
                <div className={style.content__cards}>
                    <h1 className={style.content__title}>О UniPage</h1>
                    <p className={style.content__text}>Мы сами учились за границей и знаем, как бывает сложно и страшно на этом пути. Чтобы поддержать таких же талантливых и амбициозных студентов, мы создали международное образовательное агентство UniPage. 
<p className={style.content__sm_title}>Каждый год сотни людей реализуют мечту об обучении за границей с нашей помощью.</p> </p>
                </div>
                <div className={style.content__cards2}>
                    <div className={style.content__img}>
                        <img src="https://img.freepik.com/premium-photo/multiracial-creative-people-modern-office-group-young-business-people-senior-boss-are-working-together-with-laptop-tablet-smart-phone-notebook-graphs-successful-team-coworking_452079-107.jpg?w=2000" alt="" />
                    </div>
                </div>
            </div>
        </div>
        </section>
        </>
    );
};

export default About;