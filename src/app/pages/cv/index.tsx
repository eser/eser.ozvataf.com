import React from "react";
import ReactMarkdown from "react-markdown";

function Cv() {
  return (
    <ReactMarkdown
      children={`
# Eser Özvataf

İzmir, Türkiye
[eser@ozvataf.com](mailto:eser@ozvataf.com)


## Özet

Soyutlama ve kutunun dışından düşünme konularında yetenekli biri olarak 18 yıl içerisinde IT alanında
birçok farklı rolde yer aldım. Yazılım Geliştirici olarak başladığım çalışma hayatında Proje Yönetimi,
Kurumsal Mimarlık ve Süreç Liderliği görevleriyle devam ettim. Geldiğim noktada Agile ve DevOps
pratiklerini özümseyerek farklı şehirlerdeki farklı ürün gruplarının süreç işleyişleri ve değer
çıktılarını garantiye alan bir görev üstleniyorum.

Profesyonel çalışmalarımın yanısıra gönüllü olarak konferans ve yerel etkinliklere konuşmacı olarak
katılıyorum; Twitch'de yayınlar düzenliyorum.


## Deneyim

### **Yazılım Yöneticisi, Setur**

Eylül 2018 - Mevcut

Sorumluluklar:
- 32 kişilik bir ekibin direkt yönetsel sorumluluğu,
- Agile ve DevOps dönüşümü,
- Agile yazılım ve ürün geliştirme süreçlerinin tasarlanması,
- Yazılım kalite kriterleri ve metriklerinin belirlenmesi,
- Meetuplar ve eğitimler,
- Pratiklerin yaygınlaştırılması,
- Açık Kaynak araçlar,
- Uzaktan çalışma kültürü,
- Koçluk ve mentörlük,

Teknoloji: JavaScript, React, React Native, node.js, .NET Core, Kubernetes, Azure, AKS, Microservices, Containerization, Docker, Linux

### **Yazılım Geliştirme Lideri, KoçSistem**

Mayıs 2016 - Eylül 2018

### **Yazılım Mimarı, Mobilex**

Eylül 2015 - Nisan 2016

### **E-Ticaret Yazılım Danışmanı, Zaimoğlu Holding**

Eylül 2014 - Ağustos 2015

### **Sosyal Medya Uzmanı ve Araştırma Görevlisi, Doğu Akdeniz Üniversitesi**

Eylül 2013 - Eylül 2014

### **Takım Lideri, Goldsoft**

Haziran 2012 - Ağustos 2013

### **Yazılım Geliştirme Yöneticisi, CMFNet**

Haziran 2008 - Mayıs 2012

### **Yazılım Tasarım Mühendisi, devBiz**

Ağustos 2006 - Ocak 2007

### **Backend Yazılım Geliştirici ve Sistem Yöneticisi, Ispro**

Mart 2005 - Nisan 2006

### **Web Yazılım Geliştirici, Egebilgi**

Haziran 2004 - Şubat 2005

### **Web Yazılım Geliştirici, Sis Hosting**

Haziran 2001 - Ağustos 2002


## Eğitim

### **Yüksek Lisans - Information and Communication Technologies in Education**

Kurum: Doğu Akdeniz Üniversitesi
Ortalama: 3.44/4
2013 - 2019

### **Lisans - Information Technology**

Kurum: Doğu Akdeniz Üniversitesi
Ortalama: 3.12/4
2010 - 2012

### **Önlisans - Bilgisayar Programcılığı**

Kurum: Celal Bayar Üniversitesi
Ortalama: 78.77/100
2002 - 2004


## Sertifikalar ve Sınavlar

### Uygulamalı Girişimcilik Eğitimi

Kurum: KOSGEB
Nisan 2016

### **edx** CS-169.1x: Software as a Service

Kurum: Berkeley (University of California)
Ağustos 2013
https://verify.edx.org/cert/da723362e8b74500992fc4bc84e5324c


### **edx** 6.00x: Introduction to Computer Science and Programming

Kurum: The Massachusetts Institute of Technology
Haziran 2013
https://verify.edx.org/cert/4b90bae7e00a4d94b9793c93339334ba

### Akademik Personel ve Lisansüstü Eğitimi Giriş Sınavı

Kurum: OSYM
Mayıs 2012

### General English (EFL) - Upper-Intermediate (Council of Europe B2)

Kurum: UKLA
Haziran 2011

### Proje Yönetimi Metodolojisi ve Uygulamaları

Kurum: Turkcell Akademi
Haziran 2011

### MCTS - Microsoft Windows Mobile Application Development

Kurum: Microsoft
Mayıs 2010

### MCTS - Microsoft Windows Mobile Designing, Implementing and Managing

Kurum: Microsoft
Mayıs 2010

`}
    />
  );
}

export { Cv as default };
