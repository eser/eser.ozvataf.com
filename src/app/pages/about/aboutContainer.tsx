import * as React from 'react';
import ReactMarkdown from 'react-markdown';

interface AboutContainerProps {
}

interface AboutContainerState {
}

class AboutContainer extends React.Component<AboutContainerProps, AboutContainerState> {
    constructor(props: AboutContainerProps, context: any) {
        super(props, context);
    }

    render(): JSX.Element {
        return (
            <ReactMarkdown source={`
# Hakkında

İsmim Eser Özvataf, yazılım geliştirmenin yanısıra devops, takım yönetimi, mentorluk, kalite yönetimi, kullanıcı deneyimi ve yazılım mimarileri ile ilgilenmekteyim.

Şu anda KoçSistem'de Yazılım Geliştirme Lideri olarak kurumsal ölçekte uygulamaların hizmet sürekliliğini sağlamaktayım. Zamanım el verdiğince cloud üzerinde çalışan yüksek lisans tez projem ve açık kaynak projelerim üzerinde de efor sarf ediyorum.


## Geçmiş

Eskişehir'den İzmir'e yerleşmiş o dönem pek çevresi olmayan bir çocukken 1993 senesinde bilgisayarla tanıştım.

1994'den itibaren birer sene arayla programlamaya, BBSlere ve en nihayetinde internete girmem online içerik üretmek konusunda beni de cesaretlendirdi. Önce tek başıma, bir süre sonra çok katılımcılı web siteleri oluştururken amatör seviyede HTML ve ASP öğrenmeye başladım. Bir noktadan sonra freelance'den harçlık kazanmaya kadar ilerledim.

2004'de Celal Bayar Üniversitesi Bilgisayar Programcılığı bölümünden mezun olduktan sonra İzmir'de sırasıyla Egebilgi, Ispro ve devBiz firmalarında Uzman Yazılım Geliştirici olarak çalıştım.

Askerlik görevimi tamamladıktan sonra 2008'de Turkcell Çözüm Ortakları arasında bulunan CMFNET/Mobilpark firmasında deneyimli Full Stack (Tam Donanımlı) Yazılım Geliştirici ve Takım Liderliği görevini üstlendim.

2011 yılı itibariyle tekrar akademiye dönerek Doğu Akdeniz Üniversitesi çatısı altında önce Information Technology lisansı, ardından Information and Communications in Education yüksek lisansı programlarını tamamladım.

Eğitim hayatım boyunca açık kaynaklı projelerin oluşturulmasına ve geliştirilmesine elimden geldiğince destek olmaya çalıştım.

Aynı süreç içerisinde profesyonel olarak çeşitli e-ticaret ve mobil uygulama startuplarında yazılım mimarı, yazılım danışmanı ve yazılım geliştirici görevlerinde yer aldım.

Evliliğim ve İzmir'e taşınmamla birlikte, KoçSistem'e katıldım. Şu anda Yazılım Geliştirme Lideri olarak görevlendirildiğim projelerin hizmet sürekliliğini sağlamaktayım.


## Deneyimler

**Proje Yönetimi:** Scrum/Kanban, Agile Metodolojileri, Takım Liderliği

**Yazılım Geliştirme:** Gereksinim Toplama, Planlama, Prototipleme, Continuous Integration ve Delivery, DevOps, Test Süreci, Ölçeklendirme

**Yazılım Mimarisi:** Bulut Mimarisi, Mikroservisler ve Servis Odaklı Mimari, UML ve şemalar

**Yazılım Tasarımı:** Nesne Yönelimli Programlama, Fonksiyonel Programlama, Tasarım Prensipleri, Defansif Programlama

**Ürün Uzmanlığı:** APIler, Mesajlaşma Sistemleri, Sosyal Medya Uygulamaları, B2B/B2C E-Ticaret Uygulamaları, Web Uygulamaları

**Ürünleştirme:** Kalite Yönetimi, Kullanıcı Deneyimi

**Pazarlama:** SEO, Sosyal Medya Uygulamaları Geliştirme, Google Adwords, Google Webmaster Tools, Google Analytics, Google PageSpeed

**Platform:** Linux, macOS, Windows, Amazon Web Services

**Veri:** Postgres, SQL Server, MySql, Oracle, Mongodb, RabbitMQ, Memcached, Redis

**Programlama:** JavaScript, C#, PHP, Java, C/C++

**Ekosistemler:** Node/NPM, .NET, .NET Core

**Web:** HTML5, CSS3, JavaScript, Web Frontend Frameworkleri, CSS Frameworkleri

**Web Platform:** nginx, apache2, IIS


## Sertifikalar ve Sınavlar

**KOSGEB** Uygulamalı Girişimcilik Eğitimi - 04.2016

**edx** Berkeley (University of California) - 08.2013
CS-169.1x: Software as a Service
https://verify.edx.org/cert/da723362e8b74500992fc4bc84e5324c

**edx** The Massachusetts Institute of Technology - 06.2013
6.00x: Introduction to Computer Science and Programming
https://verify.edx.org/cert/4b90bae7e00a4d94b9793c93339334ba

**OSYM** Akademik Personel ve Lisansüstü Eğitimi Giriş Sınavı - 05.2012

**UKLA** General English (EFL) - 06.2011
Upper-Intermediate (Council of Europe B2)

**Turkcell** Turkcell Akademi - 06.2011
Proje Yönetimi Metodolojisi ve Uygulamaları

**Microsoft** Microsoft Certified Technology Specialist - 05.2010
MSTSC: Microsoft Windows Mobile Application Development

**Microsoft** Microsoft Certified Technology Specialist - 05.2010
MSTSC: Microsoft Windows Mobile Designing, Implementing and Managing
`} />
        );
    }
}

export {
    AboutContainer as default,
    AboutContainerProps,
    AboutContainerState,
};
