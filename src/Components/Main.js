import Rewiews from "./Rewiews"


function Main(){




    return (
        <main>
        <nav>
            <div class="nav-left">
                <h1>04:15:25:02</h1>
                <h3>скидка 20%, успейте записаться!</h3>
                <p>Посети наш пробный урок, и узнай как стать программистом с нуля!</p>
            </div>
            <div class="nav-right">
                <img src="./Assets/react.png" alt=""/>
                <p>Front-End</p>
                <button class="wh_button"><a href="#">Учебный план</a></button>
                <button class="bl_button"><a href="#">Оставить заявку</a></button>
            </div>
        </nav>
        <aside>
            <div class="aside-left">
                <h1>Knew IT</h1>
                <h3>Knew IT - это первая школа программирования в Казахстане. За 11 лет мы обучили 10000 выпускников.</h3>
                <h4>Наша школа обучает программистов для Kaspi, Qazqom, Samruk, Атамекен, Coca-cola и KCell.</h4>
            </div>
            <div class="aside-right">
                <img src="./Assets/team.jpg" alt=""/>
            </div>
        </aside>
        <Rewiews/>
    </main>
    )
}


export default Main