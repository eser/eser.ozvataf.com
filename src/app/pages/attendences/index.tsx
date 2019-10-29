import React from 'react';
import ReactMarkdown from 'react-markdown';

import { List } from 'semantic-ui-react';

function Attendences() {
    return (
        <ReactMarkdown source={`
# Katıldığım Etkinlikler

## Konuşmalar

- ### Teknolot - 23 Ekim 2019
  [Sunum: GitHub Actions](https://speakerdeck.com/eser/github-actions)


- ### .NET Conf 2019 - 28 Eylül 2019
  [Sunum: .NET Ekosisteminin Açık Kaynak Yolculuğu ve Bugünü](https://speakerdeck.com/eser/dot-net-ekosisteminin-acik-kaynak-yolculugu-ve-bugunu)


- ### Build 2019 - 18 Haziran 2019
  [Sunum: React Native for Windows](https://speakerdeck.com/eser/react-native-for-windows)


- ### PHPKonf İstanbul - 04 Mayıs 2019
  [Sunum: Serverless PHP](https://speakerdeck.com/eser/serverless-php)


- ### PHPKonf İzmir - 09 Mart 2019
  [Sunum: Azure DevOps ve GitHub ile uçtan uca PHP projeleri](https://speakerdeck.com/eser/azure-devops-ve-github-ile-uctan-uca-php-projeleri)


- ### dotnetKonf - 03 Kasım 2018
  [Sunum: Daha taşınabilir, daha bağımsız .NET uygulamaları tasarlamak](https://speakerdeck.com/eser/daha-tasinabilir-daha-bagimsiz-net-uygulamalari-tasarlamak)


- ### Hacktoberfest - 26 Ekim 2018
  [Sunum: Açık Kaynak](https://speakerdeck.com/eser/acik-kaynak)


- ### WebEnd Açık Kaynak - 26 Mayıs 2018
  [Sunum: Açık Kaynak Pratikleri](https://speakerdeck.com/eser/acik-kaynak-pratikleri)


- ### FrontEnd İstanbul - 29 Mart 2018
  [Sunum: TypeScript](https://speakerdeck.com/eser/typescript)


- ### Developer Summit İzmir - 17 Mart 2018
  [Sunum: Uygulama Mimarisinde Fonksiyonların Yükselişi](https://speakerdeck.com/eser/uygulama-mimarisinde-fonksiyonlarin-yukselisi)


- ### Jstanbul - 18 Kasım 2017
  [Sunum: node.js ile serverless mimaride geliştirme yapmak](https://speakerdeck.com/eser/node-dot-js-ile-serverless-mimaride-gelistirme-yapmak)


- ### WebEnd 2017 - 21 Ekim 2017
  [Sunum: Hangi İhtiyaçlarla Serverless'a Yöneldik?](https://speakerdeck.com/eser/hangi-ihtiyaclarla-serverlessa-yoneldik)
`}
        />
    );
}

export {
    Attendences as default,
};
