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
        placeholder="Şehir adı girin"
      />
      <button onClick={fetchWeather} disabled={loading}>
        {loading ? 'Yükleniyor...' : 'Hava Durumunu Getir'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>Sıcaklık: {Math.round(weather.main.temp - 273.15)}°C</p>
          <p>Nem: {weather.main.humidity}%</p>
          <p>Açıklama: {weather.weather[0].description}</p>
          <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="Weather icon" />
        </div>
      )}
    </div>
  )
}