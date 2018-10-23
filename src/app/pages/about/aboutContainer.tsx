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

İsmim Eser Özvataf, devops, yazılım mimarisi, IT süreçleri, takım yönetimi, takım koçluğu, kalite yönetimi ve kullanıcı deneyimi konularıyla ilgilenmekteyim.

Şu anda Setur'da Süreç Lideri olarak çalışmaktayım. Zamanım el verdiğince cloud üzerinde çalışan yüksek lisans tez projem ve açık kaynak projelerim üzerinde de efor sarf ediyorum.


## Geçmiş

Eskişehir'den İzmir'e yerleşmiş o dönem pek çevresi olmayan bir çocukken 1993 senesinde bilgisayarla tanıştım.

1994'den itibaren birer sene arayla programlamaya, BBSlere ve en nihayetinde internete girmem online içerik üretmek konusunda beni de cesaretlendirdi. Önce tek başıma, bir süre sonra çok katılımcılı web siteleri oluştururken amatör seviyedeki Basic, Pascal ve C bilgimin üzerine HTML ve ASP öğrenmeye başladım. Bir noktadan sonra yazılım geliştirmeye olan ilgimi freelance çalışarak harçlık kazanmaya kadar ilerledim.

2004'de Celal Bayar Üniversitesi Bilgisayar Programcılığı bölümünden mezun olduktan sonra İzmir'de sırasıyla Egebilgi, Ispro ve devBiz firmalarında Uzman Yazılım Geliştirici olarak çalıştım.

Askerlik görevimi tamamladıktan sonra 2008'de Turkcell Çözüm Ortakları arasında bulunan CMFNET/Mobilpark firmasında deneyimli Full Stack (Tam Donanımlı) Yazılım Geliştirici ve Takım Liderliği görevini üstlendim.

2011 yılı itibariyle tekrar akademiye dönerek Doğu Akdeniz Üniversitesi çatısı altında önce Information Technology lisansı, ardından Information and Communications in Education yüksek lisansı programlarını tamamladım.

Eğitim hayatım boyunca açık kaynaklı projelerin oluşturulmasına ve geliştirilmesine elimden geldiğince destek olmaya çalıştım.

Aynı süreç içerisinde profesyonel olarak çeşitli e-ticaret ve mobil uygulama startuplarında yazılım mimarı, yazılım danışmanı ve yazılım geliştirici görevlerinde yer aldım.

Evliliğim ve İzmir'e taşınmamla birlikte, Yazılım Geliştirme Lideri olarak KoçSistem'e katılarak görevlendirildiğim projelerde hizmet sürekliliğini sağladım. Yine KoçSistem içerisinde Ar-Ge ve İş Uygulamaları altında Kurumsal Mimari ekibinde görev aldım.

Bugün ise Setur'da Süreç Lideri olarak çalışmaktayım.


## Deneyimler

**Proje Yönetimi:** Scrum, Agile Metodolojileri, Takım Liderliği

**Yazılım Geliştirme:** Gereksinim Toplama, Planlama, Prototipleme, DevOps Süreçleri, Sürüm Kontrolü

**Yazılım Mimarisi:** Bulut Mimarisi, Mikroservisler ve Servis Odaklı Mimari, Ölçeklendirme, UML ve şemalar

**Yazılım Tasarımı:** Nesne Yönelimli Programlama, Fonksiyonel Programlama, Tasarım Prensipleri, Defansif Programlama

**Ürünleştirme:** Product Ownership, Kalite Yönetimi, Kullanıcı Deneyimi

**Alan Bilgileri:** Yazılımcılara Araçlar, Mesajlaşma Sistemleri, Sosyal Medya Uygulamaları, B2B/B2C E-Ticaret Uygulamaları, Web Uygulamaları

**Platform:** Linux, macOS, Windows, Amazon Web Services, Azure

**Veri:** Postgres, SQL Server, MySql, Oracle, Mongodb, RabbitMQ, Memcached, Redis

**Programlama:** JavaScript (Front-end, Node, NPM), C# (.NET Core), PHP, Java, C/C++

**Web:** HTML5, CSS3, JavaScript, Web Frontend Frameworkleri (React v.s.), CSS Frameworkleri


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
