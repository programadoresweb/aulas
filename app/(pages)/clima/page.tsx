"use client";

import { useState, FormEvent } from 'react';

// Definimos uma interface para estruturar os dados do clima (evita erros do TypeScript)
interface ClimaData {
  name: string;
  sys: {
    country: string;
  };
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    description: string;
  }[];
  wind: {
    speed: number;
  };
}

export default function Home() {
  const [cidade, setCidade] = useState<string>('');
  const [clima, setClima] = useState<ClimaData | null>(null);
  const [erro, setErro] = useState<string>('');

  const buscarClima = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!cidade) return;

    try {
      setErro('');
      const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
      const resposta = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&lang=pt_br&appid=${apiKey}`
      );
      
      const dados = await resposta.json();

      if (dados.cod !== 200) {
        setErro('Cidade não encontrada.');
        setClima(null);
        return;
      }

      setClima(dados);
    } catch {
      setErro('Ocorreu um erro ao buscar os dados.');
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-slate-900 text-white">
      <div className="w-full max-w-md bg-slate-800 p-8 rounded-2xl shadow-xl">
        <h1 className="text-2xl font-bold mb-6 text-center">Previsão do Tempo 🌤️</h1>
        
        <form onSubmit={buscarClima} className="flex gap-2 mb-6">
          <input
            type="text"
            placeholder="Digite o nome da cidade..."
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
            className="flex-1 px-4 py-2 rounded-lg bg-slate-700 border border-slate-600 focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg font-medium transition"
          >
            Buscar
          </button>
        </form>

        {erro && <p className="text-red-400 text-center mb-4">{erro}</p>}

        {clima && (
          <div className="text-center bg-slate-700/50 p-6 rounded-xl border border-slate-600">
            <h2 className="text-xl font-semibold">{clima.name}, {clima.sys.country}</h2>
            <p className="text-5xl font-bold my-4">{Math.round(clima.main.temp)}°C</p>
            <p className="capitalize text-slate-300">{clima.weather[0].description}</p>
            
            <div className="flex justify-around mt-6 text-sm text-slate-400">
              <div>
                <p>Umidade</p>
                <p className="font-bold text-white">{clima.main.humidity}%</p>
              </div>
              <div>
                <p>Vento</p>
                <p className="font-bold text-white">{clima.wind.speed} m/s</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}