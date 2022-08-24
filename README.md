# [eser.ozvataf.com](https://github.com/eserozvataf/eser.ozvataf.com)

[![derleme durumu][build-image]][build-url]
[![kapsam durumu][coverage-image]][coverage-url]
[![lisans][license-image]][license-url]

## BENİ OKU

Bu kod tabanında, şu anda yapım aşamasında bulunan
[eser.ozvataf.com](https://eser.ozvataf.com/)'nun önizleme sürümü yer
almaktadır.

`master` branch'ine aktarılan değişiklikler, bir dizi derleme işleminden sonra
[https://eser.ozvataf.com/](https://eser.ozvataf.com/) adresinde belirecektir.

## Katkı Sağlamak

### Projede kullanılan kütüphaneler

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Next.js](https://nextjs.org/)
- [Semantic UI React](https://react.semantic-ui.com/)
- [Node.js](https://nodejs.org/)
- [GitHub Actions](https://github.com/features/actions)
- [adr-tool](https://github.com/keremciu/adr-tool)
- [husky](https://typicode.github.io/husky/)

### Çalışma Ortamını Hazırlamak

`node.js`'in ve `yarn`'ın sisteminizde kurulu olduğundan emin olun.

Repository'i klonlayıp, npm üzerinden bağımlılıkları çekerek çalışma ortamınızı
hazır hale getirin.

```sh
git clone https://github.com/eserozvataf/eser.ozvataf.com.git
cd eser.ozvataf.com
yarn install
yarn dev
```

### Çalışmaya Başlamak

`yarn dev` komutu ile geliştirme modunda kod tabanına müdahale etmeye
başlayabilirsiniz. Komutu çalıştırdıktan bir süre sonra browser'ınız açılacak,
siz değişiklik yaptığınız sürece "hot reloading" sayesinde browser'daki kod
otomatik olarak güncellenecektir.

### Çalışmayı Kontrol Etmek

`yarn lint` komutu ile yazılan kodun belirlenen eslint standartlarına uyup
uymadığını kontrol edebilirsiniz. Eğer bu kontrolü yapmazsanız Pull Request
oluşturduğunuzda GitHub tarafından bu kontroller otomatik işletilecek ve açmış
olduğunuz Pull Request'i sizden güncellemenizi isteyecektir.

Bazı kod standartları otomatik olarak düzeltilebilmektedir, bunu sağlamak için
`yarn lint:fix` komutunu kullanabilirsiniz.

Aynı zamanda yazmış olduğunuz birim testlerini `yarn test` komutu ile
başlatabilirsiniz. Testler de aynı lint işlemi gibi hem pull request hem de push
esnasında GitHub Actions tarafından CI/CD otomasyonuna bağlı olarak
çalıştırılmaktadır.

## Dizin Yapısı

| Klasör                      | Açıklama                                                     |
| --------------------------- | ------------------------------------------------------------ |
| `/src/`                     | Kaynak dosyalarını içeren klasör                             |
| `/src/pages/`               | - Sayfalar ve sayfalara ait React bileşenleri                |
| `/src/pages/api/`           | - Frontend tarafında sunucu taraflı çalışması gereken kodlar |
| `/src/pages/_app.page.tsx`  | - Tüm uygulama için bağımlılık bağlantıları ve konfigurasyon |
| `/src/pages/index.page.tsx` | - Uygulamanın başlangıç sayfası                              |
| `/public/`                  | Web dizininde yer alacak tüm statik dosyalar                 |

## Yapılacaklar

[GitHub Projesi](https://github.com/eserozvataf/eser.ozvataf.com/projects)
üzerinde detaylar yer almaktadır.

## Gereksinimler

- node.js (https://nodejs.org/)

## Notlar ve Teşekkürler

Webfontları içeri gömmek için
[google-webfonts-helper](https://google-webfonts-helper.herokuapp.com/)
kullanılmaktadır.

## Lisans

Apache 2.0, daha fazla detay için lütfen [LICENSE](LICENSE) dosyasını inceleyin.

## Katkı Sağlayanlar

[contributors.md](contributors.md) dosyasını inceleyebilirsiniz.

Herhangi bir katkıya açıktır. Hata düzenlemeleri, yeni özellik ve modüller
ekleyebilirsiniz.

- Koda katkı sağlamak için: Yukarıda anlatıldığı gibi repository'i klonlayın,
  değişikliklerinizi gerçekleştirin, ve bir pull request oluşturun.
- Bir hata bildirmek için: Bir şeyler ters gidiyorsa,
  [GitHub Issues](https://github.com/eserozvataf/eser.ozvataf.com/issues)
  üzerinden yeni bir issue oluşturup bize bildirin.

[build-image]: https://github.com/eserozvataf/eser.ozvataf.com/workflows/CI/badge.svg
[build-url]: https://github.com/eserozvataf/eser.ozvataf.com/actions?workflow=CI
[coverage-image]: https://img.shields.io/codecov/c/github/eserozvataf/eser.ozvataf.com.svg?style=flat-square
[coverage-url]: https://codecov.io/gh/eserozvataf/eser.ozvataf.com
[license-image]: https://img.shields.io/github/license/eserozvataf/eser.ozvataf.com.svg?style=flat-square
[license-url]: https://github.com/eserozvataf/eser.ozvataf.com/blob/master/LICENSE
