import * as React from 'react';
import ReactMarkdown from 'react-markdown';

interface AttendencesContainerProps {
}

interface AttendencesContainerState {
}

class AttendencesContainer extends React.Component<AttendencesContainerProps, AttendencesContainerState> {
    constructor(props: AttendencesContainerProps, context: any) {
        super(props, context);
    }

    render(): JSX.Element {
        return (
            <ReactMarkdown source={`
# Katıldığım Etkinlikler

## Konuşmalar

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
}

export {
    AttendencesContainer as default,
    AttendencesContainerProps,
    AttendencesContainerState,
};
