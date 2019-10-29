import React from 'react';

import { Container, List, Grid, Segment, Label, Button } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMediumM, faTelegram } from '@fortawesome/free-brands-svg-icons';

import styles from './styles.less';

function Home() {
    return (
        <>
            <Container>
                <h1 className={styles.homeHeader}>Eser Ozvataf</h1>

                <Grid columns={2}>
                    <Grid.Column>
                        <Segment>
                            <Label ribbon>
                                Üretim
                            </Label>
                            <Container className={styles.boxed}>
                                Merhaba! İsmim Eser Özvataf.

                                <br />
                                <br />

                                <a href="https://twitch.tv/laroux">Twitch</a>
                                { ' ' }
                                üzerinde yazılımla ilgili yayınlar hazırlıyorum, bunların tekrarları
                                { ' ' }
                                <a href="https://www.youtube.com/channel/UCS3eVZDirUNTFrteoJsLP4g">YouTube</a>
                                'da bulunabiliyor.
                                { ' ' }

                                <br />
                                <br />

                                <a href="https://github.com/eserozvataf">GitHub</a>
                                { ' ' }
                                üzerinde açık kaynaklı projeler oluşturmaya (160'a yakın kendi repository'm vardı
                                en son) veya mevcut projelere katkıda bulunmaya çalışıyorum.

                                <br />
                                <br />

                                Davet geldiği sürece yurtiçi konferanslarda konuşmacı olarak yer alıyorum. Bu konuşmalara
                                ait sunumları
                                { ' ' }
                                <a href="https://speakerdeck.com/eser">SpeakerDeck</a>
                                'e yüklüyorum.

                                <br />
                                <br />

                                Ayrıca
                                { ' ' }
                                <a href="https://medium.com/@eserozvataf">Medium</a>
                                { ' ' }
                                üzerinde uzun uzun blog yazıları ile,
                                { ' ' }
                                <a href="https://twitter.com/eserozvataf">Twitter</a>
                                { ' ' }
                                üzerinde ise tweetlerle görüşlerimi paylaşıyorum.
                            </Container>
                        </Segment>
                    </Grid.Column>

                    <Grid.Column>
                        <Segment>
                            <Label ribbon="right">
                                Blog
                            </Label>
                            <Container className={styles.boxed}>
                                <Button as="a" basic size="massive" href="https://medium.com/@eserozvataf">
                                    <FontAwesomeIcon icon={faMediumM} />
                                    { ' ' }
                                    Tüm Blog Yazılarım
                                </Button>

                                <List bulleted>
                                    <List.Item href="https://medium.com/@eserozvataf/wordpressin-kerameti-f4b68649be1e">WordPress’in kerameti</List.Item>
                                    <List.Item href="https://medium.com/@eserozvataf/g%C3%B6n%C3%BCll%C3%BC-oldu%C4%9Fum-i%C5%9Flere-dair-planlama-ve-de%C4%9Ferlendirme-99804de476be">Gönüllü olduğum işlere dair planlama ve değerlendirme</List.Item>
                                    <List.Item href="https://medium.com/@eserozvataf/teslimat-bizim-i%C5%9Fimiz-mi-cbfb2c48c325">Teslimat bizim işimiz (mi?)</List.Item>
                                    <List.Item href="https://medium.com/@eserozvataf/react%C4%B1n-vizyonu-ve-hooks-56651120ce75">React’ın Vizyonu ve Hooks</List.Item>
                                    <List.Item href="https://medium.com/@eserozvataf/%C3%BCretmek-ve-g%C3%B6n%C3%BCll%C3%BCk-eb9eef34b5bb">Üretmek ve Gönüllük</List.Item>
                                </List>
                            </Container>

                            <Label ribbon="right">
                                Komuniteler
                            </Label>
                            <Container className={styles.boxed}>
                                <Button as="a" basic size="medium" href="https://t.me/acikkaynak">
                                    <FontAwesomeIcon icon={faTelegram} />
                                    { ' ' }
                                    açık kaynak
                                </Button>

                                <Button as="a" basic size="medium" href="https://t.me/devizmir">
                                    <FontAwesomeIcon icon={faTelegram} />
                                    { ' ' }
                                    Dev İzmir
                                </Button>

                                <Button as="a" basic size="medium" href="https://t.me/jstanbulGroup">
                                    <FontAwesomeIcon icon={faTelegram} />
                                    { ' ' }
                                    JSTANBUL
                                </Button>
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
