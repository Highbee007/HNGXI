import style from './Footer.module.css'

const Footer = () => {
    return <div>
        <div className={style.comment}>
            <label>Comment here</label>
            <input type="textarea" />
            <button>Comment</button>
        </div>
        <div className={style.subscribe}>
            <label>Subscribe for News and Updates</label>
            <input type="email" />
            <button>Subscribe</button>
        </div>
    </div>
};


export default Footer;