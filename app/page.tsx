'use client'

import { useState } from 'react'

interface WeatherData {
  name: string
  main: {
    temp: number
    humidity: number
  }
  weather: Array<{
    description: string
    icon: string
  }>
}

export default function Home() {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [showInfo, setShowInfo] = useState(false)

  const fetchWeather = async () => {
    if (!city) return
    setLoading(true)
    setError('')
    try {
      const response = await fetch(`/api/weather?city=${encodeURIComponent(city)}`)
      if (!response.ok) throw new Error('Hava durumu alınamadı')
      const data: WeatherData = await response.json()
      setWeather(data)
    } catch (err) {
      setError('Hata: ' + (err as Error).message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container">
      <h1>Hava Durumu Uygulaması</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Şehir adı girin (örn: İstanbul, New York)"
      />
      <button className="weather-button" onClick={fetchWeather} disabled={loading}>
        {loading ? '⏳ Yükleniyor...' : '🌍 Hava Durumunu Getir'}
      </button>
      {error && <p className="error-message">❌ {error}</p>}
      {weather && (
        <div className="weather-result">
          <h2>📍 {weather.name}</h2>
          <p>🌡️ Sıcaklık: {Math.round(weather.main.temp - 273.15)}°C</p>
          <p>💧 Nem: {weather.main.humidity}%</p>
          <p>☁️ Durum: {weather.weather[0].description}</p>
          <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="Weather icon" />
        </div>
      )}
      <button className="toggle-button" onClick={() => setShowInfo(!showInfo)}>
        {showInfo ? 'Blog Yazısını Kapat' : 'Blog Yazısını Göster'}
      </button>

      {showInfo && (
        <section className="project-info">
          <article>
            <h2>Proje Yazısı: Hava Durumu Uygulaması</h2>
            <p>Bu projeyi ben Next.js ve TypeScript kullanarak yaptım. Temel hedefim, canlı hava durumu bilgisini kullanıcının girdiği şehir için hızlıca göstermekti.</p>

            <h3>Nasıl yaptım?</h3>
            <p>Sayfada bir şehir adı girme bölümü var. Kullanıcı bu alana yazıp butona bastığında, React içinden bir fetch isteği gönderiyorum. Bu istek, aynı projedeki API rotasına gidiyor ve oradan OpenWeatherMap verisi çekiliyor.</p>

            <h3>Neler kullandım?</h3>
            <p>Projede kullandığım araçlar ve teknolojiler şu şekilde:</p>
            <ul>
              <li>Next.js App Router: modern sayfa yapısı ve API route desteği için</li>
              <li>TypeScript: kodu daha güvenli ve anlaşılır yapmak için</li>
              <li>React `useState`: input, yükleme, hata ve veri durumlarını yönetmek için</li>
              <li>OpenWeatherMap API: gerçek zamanlı hava durumu verileri için</li>
              <li>Jest: temel test altyapısını kurmak için</li>
              <li>GitHub Actions: her push sonrası test otomasyonunu hazırlamak için</li>
            </ul>

            <h3> Gereksinimlerini Karşılamak</h3>
            <p> Bu projede tümünü uyguladım:</p>
            <ul>
              <li><strong>Testler:</strong> Jest ile temel test altyapısı kurdum. `npm test` komutu ile testler otomatik çalışır.</li>
              <li><strong>CI/CD:</strong> GitHub Actions yapılandırması var. Her push sonrası testler otomatik olarak koşuluyor.</li>
              <li><strong>TypeScript:</strong> Tüm kod TypeScript ile yazıldı, tip güvenliği sağlanıyor.</li>
              <li><strong>API Tasarımı:</strong> RESTful API prensiplerine uygun Next.js API rotası kurdum.</li>
              <li><strong>Ortam Değişkenleri:</strong> Gizli bilgiler `.env.local` içinde tutuluyor, güvenlik sağlanıyor.</li>
              <li><strong>Hata Yönetimi:</strong> Try-catch blokları ve açık hata mesajları ekledim.</li>
            </ul>

            <h3>İyileştirmeler ve Gelecek Planları</h3>
            <p>Bu uygulama, frontend ve backend'i tek bir Next.js projesinde birleştiriyor. API anahtarını `.env.local` içinde sakladım, böylece gizli bilgiler repoya gitmiyor.</p>
            <p>Gelecekte eklemek istediğim iyileştirmeler:</p>
            <ul>
              <li>Favori şehir kaydetme özelliği</li>
              <li>Daha güzel ve mobil uyumlu bir tasarım</li>
              <li>Hata mesajlarını daha kullanıcı dostu görüntüleme</li>
              <li>Veri cacheleme veya SSR/ISR ile performans iyileştirme</li>
            </ul>
          </article>
        </section>
      )}
    </div>
  )
}