import React from 'react';
import { NavLink } from 'react-router-dom';

import './assets/fonts/bree-serif.scss';
import './assets/fonts/open-sans.scss';
import fontAwesomeStyles from 'font-awesome/scss/font-awesome.scss';
import layoutStyles from './assets/styles.scss';

function Layout(props) {
    // the JSX syntax is quite intuitive but check out
    // https://facebook.github.io/react/docs/jsx-in-depth.html
    // if you need additional help

    return (
        <>
            <header className={layoutStyles.header}>
                <h1><NavLink exact={true} to="/">Eser Ozvataf</NavLink></h1>
                <p>Yazılım Düşünür, Planlar, Geliştirir, Konuşur</p>
                <div className={layoutStyles.followIcons}>
                    <a href="https://twitch.tv/laroux"><i className={`${fontAwesomeStyles.fa} ${fontAwesomeStyles.faTwitch} ${fontAwesomeStyles.fa2X}`}></i></a>
                    <a href="https://www.youtube.com/channel/UCS3eVZDirUNTFrteoJsLP4g"><i className={`${fontAwesomeStyles.fa} ${fontAwesomeStyles.faYoutubeSquare} ${fontAwesomeStyles.fa2X}`}></i></a>
                    <a href="https://github.com/eserozvataf"><i className={`${fontAwesomeStyles.fa} ${fontAwesomeStyles.faGithubSquare} ${fontAwesomeStyles.fa2X}`}></i></a>
                    <a href="https://twitter.com/eserozvataf"><i className={`${fontAwesomeStyles.fa} ${fontAwesomeStyles.faTwitterSquare} ${fontAwesomeStyles.fa2X}`}></i></a>
                    <a href="https://linkedin.com/in/eserozvataf"><i className={`${fontAwesomeStyles.fa} ${fontAwesomeStyles.faLinkedinSquare} ${fontAwesomeStyles.fa2X}`}></i></a>
                    <a href="mailto:eser@ozvataf.com"><i className={`${fontAwesomeStyles.fa} ${fontAwesomeStyles.faEnvelopeSquare} ${fontAwesomeStyles.fa2X}`}></i></a>
                </div>

                <h6><NavLink exact={true} to="/">Blog</NavLink></h6>
                <h6><NavLink to="/about/">Hakkımda</NavLink></h6>
                <h6><NavLink to="/projects/">Projeler</NavLink></h6>
                <h6><NavLink to="/attendences/">Katılımlarım</NavLink></h6>
                <h6><NavLink to="/contact/">İletişim</NavLink></h6>
            </header>
            <main className={layoutStyles.content}>
                {props.children}
            </main>
            <footer className={layoutStyles.footer}>
                <section className={layoutStyles.footerMessage}>© 2018 Eser Ozvataf.</section>
            </footer>
        </>
    );
}

export {
    Layout as default,
};
