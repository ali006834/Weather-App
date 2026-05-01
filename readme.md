# 🌍 Hava Durumu Uygulaması

**🚀 Canlı Uygulama:** [https://weather-app-gamma-sooty-76.vercel.app/](https://weather-app-gamma-sooty-76.vercel.app/)

Gerçek zamanlı hava durumu bilgisini şehir adı girerek anında gösteren bir web uygulaması. Frontend ve backend'i aynı projede birleştirdim ve tam bir full-stack örneği oluşturdum.

## 🎯 Neden yaptım?

Full-stack bir geliştirici olma yolunda ilerlediğim için, bu projede:
- **Frontend**: React bileşenleriyle modern kullanıcı arayüzü
- **Backend**: Next.js API rotaları ile sunucu tarafı işlemleri
- **Testler**: Jest ile otomatik test altyapısı
- **CI/CD**: GitHub Actions ile her push'ta test çalıştırması
- **TypeScript**: Tüm kodun tip güvenliği ile yazılması
- **Güvenlik**: API anahtarlarını ortam değişkenlerinde saklama

...gibi şeyleri bir proje içinde uygulayarak öğrendim.

## 🛠 Kullandığım Teknolojiler

- **Next.js 14**: Modern React framework, API routes ve App Router desteği
- **TypeScript**: Tip güvenliği ve hataları erken yakalama
- **React Hooks**: `useState` ile state yönetimi
- **OpenWeatherMap API**: Canlı hava durumu verileri
- **Jest**: Unit testler ve test altyapısı
- **GitHub Actions**: CI/CD pipeline
- **Vercel**: Üretim ortamına dağıtım (hazır)

## 🚀 Nasıl Çalışıyor?

1. **Kullanıcı arayüzü**: Şehir adı girip butona basıyor
2. **Frontend**: `fetch()` ile `/api/weather` rotasına istek gönderiyor
3. **Backend**: API rotası OpenWeatherMap'e sunucu tarafından istek yapıyor
4. **Veri**: JSON format verisi frontend'e dönüyor
5. **Görüntüleme**: React state güncelleniyor, UI yenileniyor

## 📦 Kurulum ve Çalıştırma

### Geliştirme Ortamında

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev

# Tarayıcıda aç
# http://localhost:3000
```

### Testleri Çalıştır

```bash
# Tüm testleri çalıştır
npm test

# Watch modunda çalıştır (değişiklikleri izle)
npm test --watch
```

### Üretim İçin Derle

```bash
# Build yap
npm run build

# Üretim sunucusunu başlat
npm start
```

## ✨ Özellikler

- ✅ **Anında Arama**: Şehir yazıp butona basınca sonuç geliyor
- ✅ **Sıcaklık Dönüşümü**: Kelvin'den Celsius'a otomatik çevirme
- ✅ **Nem Gösterimi**: Havadaki nem yüzdesini göster
- ✅ **Hava Durumu İkonu**: OpenWeatherMap'in verdiği icon gösterilir
- ✅ **Hata Yönetimi**: Ağ hataları ve API hatalarını kullanıcıya göster
- ✅ **Yükleme Animasyonu**: İşlem sırasında "Yükleniyor" durumu
- ✅ **Responsive Tasarım**: Mobil ve masaüstü uyumlu

## 🔍 İş Gereksinimleri ve Uygulanması

### Testler ✅
```bash
npm test  # Jest testleri çalışır
```
- `app/__tests__/page.test.tsx`: Bileşen test dosyası
- Test altyapısı kurulmuş ve çalışır durumda

### CI/CD Pipeline ✅
```yaml
# .github/workflows/ci.yml
- Her push sonrası Node.js testleri otomatik koşuluyor
- Node 18.x ve 20.x versiyonlarında test yapılıyor
```

### TypeScript ✅
```typescript
// Tüm kod TypeScript ile yazılmış
interface WeatherData { ... }  // Veri yapısı tanımlandı
const data: WeatherData = ...  // Tip güvenliği
```

### API Tasarımı ✅
- **RESTful prensipler**: `GET /api/weather?city=istanbul`
- **Status kodları**: 400 (geçersiz istek), 500 (sunucu hatası)
- **Hata mesajları**: JSON format'ta açık hata dönüşü

### Ortam Değişkenleri ✅
```bash
# .env.local (gitignore'da, repo'ya gitmez)
OPENWEATHER_API_KEY=your_api_key_here
```
Kendi API anahtarını OpenWeatherMap'ten alıp `.env.local` dosyasına yapıştır.

### Hata Yönetimi ✅
```typescript
try {
  // API çağrısı
} catch (err) {
  // Hatayı kullanıcıya göster
  setError('Hava durumu alınamadı')
}
```

## 📝 Proje Yapısı

```
weather-app/
├── app/
│   ├── page.tsx              # Ana sayfa bileşeni
│   ├── layout.tsx            # Root layout
│   ├── globals.css           # Global stiller
│   ├── api/
│   │   └── weather/
│   │       └── route.ts      # API rotası
│   └── __tests__/
│       └── page.test.tsx     # Testler
├── .github/
│   └── workflows/
│       └── ci.yml            # CI/CD yapılandırması
├── package.json              # Dependencies
├── tsconfig.json             # TypeScript config
├── jest.config.js            # Jest config
├── jest.setup.js             # Jest setup
├── next.config.js            # Next.js config
└── .env.local                # Ortam değişkenleri
```

## 🌐 Dağıtım (Vercel)

Bu proje Vercel'e dağıtıldı ve canlı olarak çalışıyor:

**Vercel Deployment:**
- **Live URL**: https://weather-app-gamma-sooty-76.vercel.app/
- **Status**: ✅ Ready
- **Source**: GitHub `main` branch
- **Auto Deploy**: Her push'ta otomatik güncelleniyor

Vercel, GitHub'daki değişiklikleri otomatik algılar ve projeyi yeniden derleyip dağıtır. Değişiklik yapmak için:
1. Kodu düzenle
2. `git push` yap
3. Vercel otomatik deploy eder (2-3 dakika)

Vercel'e dağıtımın avantajları:
- ✅ Automatic CI/CD
- ✅ SSL sertifikası (HTTPS)
- ✅ Global CDN
- ✅ Serverless Functions (API routes)
- ✅ Çok hızlı deployment

## 🌐 Geliştirme ve Üretim

Bu proje Vercel'e dağıtılmak için tamamen hazır:

```bash
# Vercel CLI ile manuel deploy
vercel

# Ya da GitHub'a push edip Vercel otomatik deploy etsin
git push origin main  # Vercel otomatik deploy eder!
```

## 📚 Neler Öğrendim?

- Next.js App Router ve API Route yapısı
- React state yönetimi ve hooks
- TypeScript ile type safety
- Jest ile unit testing
- GitHub Actions ile CI/CD
- API güvenliği (API anahtarları saklama)
- Error handling ve user feedback
- Responsive web tasarımı

## 🔐 Güvenlik Notları

- API anahtarı `.env.local` içinde (gitignore'da)
- Frontend'ten hiçbir API anahtarı açıkta kalmaz
- API rotası sunucu tarafında çalışıyor (backend'de)
- URL parametreleri `encodeURIComponent()` ile encode ediliyor

## 🚧 Gelecek İyileştirmeler

- [ ] Favori şehir kaydetme (localStorage)
- [ ] Hava tahmini (5 gün)
- [ ] Şehir arama önerisi (autocomplete)
- [ ] Daha detaylı hava bilgileri
- [ ] Koyu mod / açık mod desteği
- [ ] Multilingual support (EN, TR, etc.)
- [ ] PWA support (offline mod)

## 👨‍💻 İletişim

Bu proje portfolio için oluşturdum. Sorularınız varsa benimle iletişime geçebilirsiniz.

---

**Stack:** Next.js + TypeScript + React + Jest + GitHub Actions
**Deploy:** Vercel Ready ✅
**Testing:** Jest ✅
**CI/CD:** GitHub Actions ✅