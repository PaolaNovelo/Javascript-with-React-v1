import "./Footer.css"

const Footer = () => {
    return <footer className = 'footer' style={{ backgroundImage: "url(/img/footer.png)"}}>
        <div className = 'redes'>
            <a href = 'https://github.com/PaolaNovelo'>
                <img src = "/img/github.png"  alt = "Github" class="icon"/>
            </a>
            <a href = 'https://www.linkedin.com/in/paolanovelo/'>
                <img src = "/img/linkedin.png" alt = "Linkedin"  class="icon"/>
            </a>
            <a href = 'https://www.instagram.com/pausnov/'>
                <img src = "/img/instagram.png" alt = "Instagram"/>
            </a>
        </div>
        <img src = '/img/Logo.png' alt='org'/>
        <strong>
            Desarrollado por Pao
        </strong>
    </footer>
}

export default Footer