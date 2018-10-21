import * as React from 'react';
import ReactMarkdown from 'react-markdown';

interface ProjectsContainerProps {
}

interface ProjectsContainerState {
}

class ProjectsContainer extends React.Component<ProjectsContainerProps, ProjectsContainerState> {
    constructor(props: ProjectsContainerProps, context: any) {
        super(props, context);
    }

    render(): JSX.Element {
        return (
            <ReactMarkdown source={`
# Projeler

Çalışmalarıma [Patreon](http://patreon.com/eserozvataf) üzerinden destek verebilirsiniz.

## Sosyal
- [GitHub Profilim](https://github.com/eserozvataf) (github.com/eserozvataf)
- [Açık Kaynak Komunitesi](https://acikkaynak.info) (acikkaynak.info)

## Başlattığım Açık Kaynak Projeler

- [dart](https://github.com/eserozvataf/dart) - *JavaScript*
- [leaves](https://github.com/eserozvataf/leaves) - *JavaScript*
- [hex-api-server](https://github.com/eserozvataf/hex-api-server) - *JavaScript*
- [jsmake](https://github.com/eserozvataf/jsmake) - *JavaScript*
- [jsmake-libraries](https://github.com/eserozvataf/jsmake-libraries) (maester, cofounder, ...) - *JavaScript*
- [es6-cachemanager](https://github.com/eserozvataf/es6-cachemanager) - *JavaScript*
- [servicemanager](https://github.com/eserozvataf/servicemanager) - *JavaScript*
- [react-eventmanager](https://github.com/eserozvataf/react-eventmanager) - *JavaScript*
- [entrepreneur](https://github.com/eserozvataf/entrepreneur) - *JavaScript*
- [laroux.js](https://github.com/eserozvataf/laroux.js) - *JavaScript*
- [sey](https://github.com/eserozvataf/sey) - *JavaScript*
- [apibone](https://github.com/eserozvataf/apibone) - *JavaScript*
- [Scabbia2 PHP Components](https://github.com/eserozvataf/scabbia2) - *PHP*
- [PM Tool](https://github.com/eserozvataf/pm) - *PHP*
- [Survey Tool](https://github.com/eserozvataf/survey) - *PHP*
- [Tassle](https://github.com/eserozvataf/tassle) - *.NET Standard*
- [Quake 3 Now](https://github.com/eserozvataf/q3now) - *C*

## Yer Aldığım Bazı Projeler

2017

- Danışan takibi üzerine kurumsal bir serverless AWS projesi - *KoçSistem*
- İş/çalışan takibi üzerine kurumsal bir .NET Core projesi - *KoçSistem*

2016

- Kapı Sistemleri üzerine kurumsal bir .NET projesi - *KoçSistem*
- Olev Niş Bir Uber Klonu - *Freelance*
- Thatsup Sosyal Medya Girişimi - *Freelance*

2015

- Alanadları.com Dijital Emlak Piyasası - *Freelance*
- Servisvar.com Servis Platformu - *Freelance*
- Magma.com.tr Online Sipariş Sitesi - *Zaimoğlu Holding*
- Luksbazaar.com Online Alışveriş Mağazası - *Zaimoğlu Holding*
- Magento için Xml Senkronizasyon Uygulaması - *Zaimoğlu Holding*

2014

- EasyWords Kelime Ezberleme Uygulaması - *Freelance*
- Hayırlısı.net Online Alışveriş Mağazası - *Freelance*
- Sosyalim Lokasyon Bazlı Mesajlaşma - *Freelance*
- OrnekHolidays.com Tatil Rezervasyon Sistemi - *Freelance*
- Doğu Akdeniz Üniversitesi Fotoğraf Yarışması - *DAÜ Sosyal Medya*
- Üstün Zekalılar Enstitüsü Online Sınav Sistemi - *Freelance*
- Beylerbeyi Emlak Online Emlak Sitesi - *Freelance*
- Hasan Sungur Group of Companies Portfolyo Sitesi - *Freelance*
- Tetris for Windows Mobile
- 10+2 Windows Mobile Verimlilik Uygulaması

2013

- Interesd Social Aggregator Sosyal Mecra - *Goldsoft*
- Kibrissiparis.com Yerel Market ve Yemek Sipariş Sitesi - *Goldsoft*

2008-2012

- CMFCell AtlasJet Inhouse SMS Mesaj Servisi - *CMFNet*
- CMFCell Yaşar Holding DYO Sadakat Programı - *CMFNet*
- CMFCell UA (Ukraine) SMS Gateway Mesaj Servisi - *CMFNet*
- CMFCell Message Gateway Mesaj Servisi - *CMFNet*
- Turkcell Outlook Mobile Service Mesaj Servisi - *CMFNet*
- Life (Ukrayna GSM Operatörü) Kazıma Kartı Sistemi - *CMFNet*
- CMFCell Excel Eklentisi - *CMFNet*
- CMFCell Outlook ve Active Directory Eklentisi - *CMFNet*
- CMFCell Desktop Adres Defteri ve Mesaj Gönderim Yazılımı - *CMFNet*

2006

- devMX/devDns/devGroupware .NET Components - *devBiz*
- devMail .NET Component - *devBiz*

2005

- ISPRO.net Web Hosting Paneli - *ISPRO*
- Oruçoğlu Termal Otel Online Rezervasyon - *ISPRO*
- Egem Online Servis Randevu Sistemi - *ISPRO*

2004

- Egebilgi.net Kobi Portalı - *Egebilgi*
- do-re Online Alışveriş Sitesi - *Egebilgi*
- Sir Winston Tea Web Sitesi - *Egebilgi*
- Boomerang İçerik Yönetim Sistemi - *Egebilgi*

2004 Öncesi

- Sis Web Hosting Otomasyonu - *Sis*
- Gozcard/Göztepe Spor Kulübü Online Alışveriş Mağazası - *Sis*
- Otolab Online Araç Bakım Randevu Sistemi - *Freelance*
- Sistech.com Teknoloji/Yazılım Haber Sitesi - *Sis*
- Turkishqf.org Oyun Haber Sitesi
`} />
        );
    }
}

export {
    ProjectsContainer as default,
    ProjectsContainerProps,
    ProjectsContainerState,
};
