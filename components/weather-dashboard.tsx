"use client"

import { useState } from "react"

export function WeatherDashboard() {
  const [city, setCity] = useState("")
  const [weather, setWeather] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const getWeather = async () => {
    if (!city) return

    setLoading(true)

    try {
      const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY

      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      )

      const data = await res.json()
      setWeather(data)
    } catch (error) {
      console.error(error)
    }

    setLoading(false)
  }

  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">
          Live Weather Dashboard
        </h2>

        <div className="flex gap-3 mb-6">
          <input
            type="text"
            placeholder="Search weather by city..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => {
            if (e.key === "Enter") {
              getWeather()
            }
         }}
        className="border border-gray-600 bg-slate-900 p-3 rounded w-full text-white placeholder-gray-400"
          />

          <button
            onClick={getWeather}
            className="px-6 py-3 rounded bg-blue-600 text-white"
          >
            Search
          </button>
        </div>

        {loading && <p>Loading...</p>}

        {weather?.main && (
          <div className="border rounded-lg p-6">
            <h3 className="text-2xl font-semibold">
              {weather.name}
            </h3>

            <p>Temperature: {weather.main.temp}°C</p>
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Weather: {weather.weather[0].description}</p>
          </div>
        )}
      </div>
    </section>
  )
}