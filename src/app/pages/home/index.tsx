import React from 'react';

import { Container, List, Grid, Segment, Label, Header, Responsive } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import { faMediumM, faYoutube, faTwitch, faGithub, faSpeakerDeck, faMedium, faTwitter } from '@fortawesome/free-brands-svg-icons';

import styles from './styles.less';

function Home() {
    return (
        <>
            <Container>
                <Responsive minWidth={Responsive.onlyComputer.minWidth}>
                    <Header as="h1" className={styles.homeHeader}>Eser Ozvataf</Header>
                </Responsive>

                <Grid>
                    <Grid.Column mobile={16} tablet={16} computer={8}>
                        <Segment>
                            <Label ribbon>
                                <FontAwesomeIcon icon={faAddressCard} />
                                {' '}
                                Hakkında
                            </Label>
                            <Container className={styles.boxed}>
                                Merhaba! İsmim Eser Özvataf.
                                <br />
                                <br />
                                Yazılım geliştirme yolculuğuma programcı titriyle başladım.
                                Geride bıraktığım 18 yılda birçok geçiş dönemi yaşadım ve
                                deneyimler biriktirdim.
                                <br />
                                <br />
                                Bugün Yazılım Yöneticisi olarak Setur'da görev almaktayım.
                                Mühendislik yönetimi, kültürel dönüşüm, organizasyon
                                çevikliği, çevik liderlik, ürün odaklı geliştirme, çözüm
                                mimarisi, IT süreç yönetimi ve DevOps eksenli konular eksenli
                                konularda fayda sağlamaya çalışıyorum.
                                <br />
                                <br />
                                Kurumsaldaki hayatımın yanısıra çeşitli platformlarda yazılım
                                sektörü ve yazılım geliştirme ekseninde içerik üretiyor ve
                                konuşmalar yapıyorum.
                            </Container>
                        </Segment>
                    </Grid.Column>

                    <Grid.Column mobile={16} tablet={16} computer={8}>
                        <Segment>
                            <Label ribbon="right">
                                İçerik Üretimi ve Konuşmalar
                                {' '}
                                <FontAwesomeIcon icon={faChalkboardTeacher} />
                            </Label>
                            <Container className={`${styles.boxed} ${styles.linksWithIcons}`}>
                                <a href="https://twitch.tv/laroux">
                                    <FontAwesomeIcon icon={faTwitch} />
                                    {' '}
                                    Twitch
                                </a>
                                {' '}
                                üzerinde yazılımla ilgili yayınlar hazırlıyorum, bunların tekrarları
                                {' '}
                                <a href="https://www.youtube.com/channel/UCS3eVZDirUNTFrteoJsLP4g">
                                    <FontAwesomeIcon icon={faYoutube} />
                                    {' '}
                                    YouTube
                                </a>
                                'da bulunabiliyor.
                                {' '}

                                <br />
                                <br />

                                <a href="https://github.com/eserozvataf">
                                    <FontAwesomeIcon icon={faGithub} />
                                    {' '}
                                    GitHub
                                </a>
                                {' '}
                                üzerinde açık kaynaklı projeler oluşturmaya (160'a yakın kendi
                                repository'm vardı en son) veya mevcut projelere katkıda bulunmaya
                                çalışıyorum.

                                <br />
                                <br />

                                Davet geldiği sürece yurtiçi konferanslarda konuşmacı olarak yer
                                alıyorum. Bu konuşmalara ait sunumları
                                {' '}
                                <a href="https://speakerdeck.com/eser">
                                    <FontAwesomeIcon icon={faSpeakerDeck} />
                                    {' '}
                                    SpeakerDeck
                                </a>
                                'e yüklüyorum.

                                <br />
                                <br />

                                Ayrıca
                                {' '}
                                <a href="https://medium.com/@eserozvataf">
                                    <FontAwesomeIcon icon={faMedium} />
                                    {' '}
                                    Medium
                                </a>
                                {' '}
                                üzerinde uzun uzun blog yazıları ile,
                                {' '}
                                <a href="https://twitter.com/eserozvataf">
                                    <FontAwesomeIcon icon={faTwitter} />
                                    {' '}
                                    Twitter
                                </a>
                                {' '}
                                üzerinde ise tweetlerle görüşlerimi paylaşıyorum.
                                <br />
                                <br />
                            </Container>
                        </Segment>
                    </Grid.Column>

                    <Grid.Column width={16}>
                        <Segment>
                            <Label ribbon as="a" href="https://medium.com/@eserozvataf">
                                <FontAwesomeIcon icon={faMediumM} />
                                {' '}
                                Blog Yazılarım
                            </Label>
                            <Container className={styles.boxed}>
                                <List bulleted>
                                    <List.Item href="https://medium.com/@eserozvataf/a%C3%A7%C4%B1k-kaynak-i%CC%87nisiyatifi-a10392c1cafa">Açık Kaynak İnisiyatifi</List.Item>
                                    <List.Item href="https://medium.com/@eserozvataf/wordpressin-kerameti-f4b68649be1e">WordPress’in kerameti</List.Item>
                                    <List.Item href="https://medium.com/@eserozvataf/g%C3%B6n%C3%BCll%C3%BC-oldu%C4%9Fum-i%C5%9Flere-dair-planlama-ve-de%C4%9Ferlendirme-99804de476be">Gönüllü olduğum işlere dair planlama ve değerlendirme</List.Item>
                                    <List.Item href="https://medium.com/@eserozvataf/teslimat-bizim-i%C5%9Fimiz-mi-cbfb2c48c325">Teslimat bizim işimiz (mi?)</List.Item>
                                    <List.Item href="https://medium.com/@eserozvataf/react%C4%B1n-vizyonu-ve-hooks-56651120ce75">React’ın Vizyonu ve Hooks</List.Item>
                                    <List.Item href="https://medium.com/@eserozvataf/%C3%BCretmek-ve-g%C3%B6n%C3%BCll%C3%BCk-eb9eef34b5bb">Üretmek ve Gönüllük</List.Item>
                                    <List.Item href="https://medium.com/@eserozvataf/yar%C4%B1n%C4%B1-okuyabilir-miyiz-e0ce066149eb">Yarını okuyabilir miyiz?</List.Item>
                                    <List.Item href="https://medium.com/@eserozvataf/bash-dotnet-command-not-found-visual-studio-for-mac-deneyimleri-c837091ae890">-bash: dotnet: command not found — Visual Studio for Mac deneyimleri</List.Item>
                                    <List.Item href="https://medium.com/@eserozvataf/uzaktan-%C3%A7al%C4%B1%C5%9Fma-deneyimim-ki%C5%9Fisel-organizasyon-c27c47b86d89">Uzaktan Çalışma Deneyimim — Kişisel Organizasyon</List.Item>
                                    <List.Item href="https://medium.com/@eserozvataf/uzaktan-%C3%A7al%C4%B1%C5%9Fma-deneyimim-i%CC%87%C5%9Fverenler-ve-i%CC%87%C5%9F-arkada%C5%9Flar%C4%B1-91db51d281fb">Uzaktan Çalışma Deneyimim — İşverenler ve İş Arkadaşları</List.Item>
                                    <List.Item href="https://medium.com/@eserozvataf/daha-g%C3%BC%C3%A7l%C3%BC-bir-windows-komut-sat%C4%B1r%C4%B1-ef4bab9ea664">Daha güçlü bir Windows Komut Satırı</List.Item>
                                    <List.Item href="https://medium.com/@eserozvataf/microsoftun-yar%C4%B1-vizyonu-%C3%BCzerinden-webcomponents-ve-spa-10c3342cf8b3">Microsoft’un yarı vizyonu üzerinden WebComponents ve SPA</List.Item>
                                    <List.Item href="https://medium.com/@eserozvataf/microsoftun-g%C3%BC%C3%A7l%C3%BC-komut-sat%C4%B1r%C4%B1-perde-2-adcb482cde55">Microsoft’un güçlü komut satırı — Perde 2</List.Item>
                                    <List.Item href="https://medium.com/@eserozvataf/a%C3%A7%C4%B1k-kaynak-felsefesi-6712b9bda59c">Açık Kaynak Felsefesi</List.Item>
                                    <List.Item href="https://medium.com/@eserozvataf/azer-ko%C3%A7ulu-kik-left-pad-ve-npm-ed7c3098ecfb">Azer Koçulu, kik, left-pad ve NPM</List.Item>
                                    <List.Item href="https://medium.com/@eserozvataf/javascriptin-back-end-gelece%C4%9Fi-9443114b3c65">JavaScript’in back-end geleceği</List.Item>
                                </List>
                            </Container>
                        </Segment>
                    </Grid.Column>
                </Grid>

            </Container>
        </>
    );
}

export {
    Home as default,
};
