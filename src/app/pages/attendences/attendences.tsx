import React from 'react';
import ReactMarkdown from 'react-markdown';

function Attendences() {
    return (
        <ReactMarkdown source={`
# Katıldığım Etkinlikler

## Konuşmalar

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
`} />
    );
}

export {
    Attendences as default,
};
