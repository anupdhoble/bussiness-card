
export default function Footer(){
    return(
        <footer>
            <div>
                <a href="https://twitter.com/dhoble_anup" target="_blank"><img src={process.env.PUBLIC_URL + '/icons/Twitter.png'} /></a>
                <a href="https://www.facebook.com/anup.dhoble.96" target="_blank"><img src={process.env.PUBLIC_URL + '/icons/Facebook.png'} /></a>
                <a href="https://www.instagram.com/anupdhoble15/" target="_blank"><img src={process.env.PUBLIC_URL + '/icons/Instagram.png'} /></a>
                <a href="https://github.com/anupdhoble" target="_blank"><img src={process.env.PUBLIC_URL + '/icons/Github.png'} /></a>
            </div>
        </footer>
    )
}