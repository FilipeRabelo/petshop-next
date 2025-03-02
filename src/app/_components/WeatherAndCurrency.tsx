// "use client";

// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import moment from 'moment';

// // Defina o tipo para os dados da cotação
// interface CurrencyData {
//   code: string;
//   codein: string;
//   name: string;
//   high: string;
//   low: string;
//   varBid: string;
//   pctChange: string;
//   bid: string;
//   ask: string;
//   timestamp: string;
//   create_date: string;
// }

// // Defina o tipo para os dados do clima
// interface WeatherData {
//   weather: {
//     description: string;
//   }[];
//   main: {
//     temp: number;
//   };
// }

// const WeatherAndCurrency = () => {
//   const [weather, setWeather] = useState<WeatherData | null>(null); // Aplicando o tipo
//   const [currency, setCurrency] = useState<CurrencyData | null>(null); // Aplicando o tipo
//   const [time, setTime] = useState(moment());
//   const [isUpdating, setIsUpdating] = useState(false);

//   // Mapeamento de descrições do clima
//   const weatherDescriptions: Record<string, string> = {
//     'overcast clouds': 'nublado',
//     'clear sky': 'céu limpo',
//     'few clouds': 'poucas nuvens',
//     'scattered clouds': 'nuvens dispersas',
//     'broken clouds': 'nuvens quebradas',
//     'shower rain': 'chuva leve',
//     rain: 'chuva',
//     thunderstorm: 'trovoada',
//     snow: 'neve',
//     mist: 'névoa',
//     // Adicione mais descrições conforme necessário
//   };

//   // Função para buscar o clima
//   const fetchWeather = async () => {
//     const apiKey = 'a50155814ade064b197222b3a2cb54a2'; // Sua chave da API
//     const city = 'Belo Horizonte'; // Cidade desejada
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

//     try {
//       const response = await axios.get(url);
//       setWeather(response.data);
//       console.log('Clima atualizado:', response.data); // Log para depuração
//     } catch (error) {
//       console.error('Erro ao buscar o clima:', error);
//     }
//   };

//   // Função para buscar a cotação do dólar
//   const fetchCurrency = async () => {
//     const timestamp = Date.now(); // Adiciona um timestamp único para evitar cache
//     const url = `https://economia.awesomeapi.com.br/json/last/USD-BRL?timestamp=${timestamp}`;

//     try {
//       const response = await axios.get(url);
//       setCurrency(response.data.USDBRL);
//       console.log('Cotação atualizada:', response.data.USDBRL); // Log para depuração
//     } catch (error) {
//       console.error('Erro ao buscar a cotação do dólar:', error);
//     }
//   };

//   // Função para atualizar tudo
//   const updateAll = async () => {
//     setIsUpdating(true); // Desabilita o botão
//     await fetchWeather(); // Atualiza o clima
//     await fetchCurrency(); // Atualiza a cotação
//     setTime(moment()); // Atualiza o tempo
//     setIsUpdating(false); // Habilita o botão novamente
//     console.log('Tudo atualizado!'); // Log para depuração
//   };

//   // Atualiza o tempo a cada segundo
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTime(moment()); // Atualiza o estado do tempo
//     }, 1000); // 1000 ms = 1 segundo

//     return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
//   }, []);

//   // Busca os dados ao carregar o componente e a cada 30 minutos
//   useEffect(() => {
//     // Função para buscar os dados
//     const fetchData = () => {
//       console.log('Buscando dados...'); // Log para depuração
//       fetchWeather();
//       fetchCurrency();
//     };

//     // Busca os dados imediatamente ao carregar o componente
//     fetchData();

//     // Configura o intervalo para buscar os dados a cada 30 minutos
//     const interval = setInterval(fetchData, 1800000); // 1800000 ms = 30 minutos

//     // Limpa o intervalo ao desmontar o componente
//     return () => {
//       console.log('Limpando intervalo...'); // Log para depuração
//       clearInterval(interval);
//     };
//   }, []); // Array vazio garante que o useEffect só roda uma vez (no mount)

//   return (
//     <div className="px-20 mb-10 bg-[#E84C3D]">
//       {/* Grid Container */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#E84C3D]">
//         {/* Seção do Clima */}
//         <div className="bg-white p-4 text-black rounded-lg shadow-md mt-10" data-aos="fade-right" data-aos-duration="3000">
//           <h2 className="text-xl font-bold mb-2">Clima em Belo Horizonte</h2>
//           {weather ? (
//             <p>
//               {weatherDescriptions[weather.weather[0].description] || weather.weather[0].description}, {weather.main.temp}°C
//             </p>
//           ) : (
//             <p>Carregando clima...</p>
//           )}
//         </div>

//         {/* Seção da Cotação do Dólar */}
//         <div className="bg-white p-4 text-black rounded-lg shadow-md mt-10" data-aos="fade-up" data-aos-duration="3000">
//           <h2 className="text-xl font-bold mb-2">Cotação do Dólar</h2>
//           {currency ? (
//             <p>
//               R$ {currency.bid}
//             </p>
//           ) : (
//             <p>Carregando cotação...</p>
//           )}
//         </div>

//         {/* Seção do Contador de Tempo */}
//         <div className="bg-white text-black p-4 rounded-lg shadow-md mt-10" data-aos="fade-down" data-aos-duration="3000">
//           <h2 className="text-xl font-bold mb-2">Hora Atual</h2>
//           <p>{time.format('HH:mm:ss')}</p> {/* Exibe horas, minutos e segundos */}
//         </div>
//       </div>

//       {/* Botão de Atualização */}
//       <div className="flex justify-center mt-6">
//         <button
//           onClick={updateAll}
//           disabled={isUpdating}
//           className="font-bold flex justify-center bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-300 hover:text-black transition-all duration-500"
//         >
//           {isUpdating ? 'Atualizando...' : 'Atualizar Tudo Agora'}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default WeatherAndCurrency;













"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';

// Defina o tipo para os dados da cotação
interface CurrencyData {
  code: string;
  codein: string;
  name: string;
  high: string;
  low: string;
  varBid: string;
  pctChange: string;
  bid: string;
  ask: string;
  timestamp: string;
  create_date: string;
}

// Defina o tipo para os dados do clima
interface WeatherData {
  weather: {
    description: string;
  }[];
  main: {
    temp: number;
  };
}

const WeatherAndCurrency = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null); // Aplicando o tipo
  const [currency, setCurrency] = useState<CurrencyData | null>(null); // Aplicando o tipo
  const [time, setTime] = useState(moment());
  const [isUpdating, setIsUpdating] = useState(false);
  const [timeLeft, setTimeLeft] = useState<number>(1800); // 1800 segundos = 30 minutos

  // Mapeamento de descrições do clima
  const weatherDescriptions: Record<string, string> = {
    'overcast clouds': 'nublado',
    'clear sky': 'céu limpo',
    'few clouds': 'poucas nuvens',
    'scattered clouds': 'nuvens dispersas',
    'broken clouds': 'nuvens quebradas',
    'shower rain': 'chuva leve',
    rain: 'chuva',
    thunderstorm: 'trovoada',
    snow: 'neve',
    mist: 'névoa',
    // Adicione mais descrições conforme necessário
  };

  // Função para buscar o clima
  const fetchWeather = async () => {
    const apiKey = 'a50155814ade064b197222b3a2cb54a2'; // Sua chave da API
    const city = 'Belo Horizonte'; // Cidade desejada
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await axios.get(url);
      setWeather(response.data);
      console.log('Clima atualizado:', response.data); // Log para depuração
    } catch (error) {
      console.error('Erro ao buscar o clima:', error);
    }
  };

  // Função para buscar a cotação do dólar
  const fetchCurrency = async () => {
    const timestamp = Date.now(); // Adiciona um timestamp único para evitar cache
    const url = `https://economia.awesomeapi.com.br/json/last/USD-BRL?timestamp=${timestamp}`;

    try {
      const response = await axios.get(url);
      setCurrency(response.data.USDBRL);
      console.log('Cotação atualizada:', response.data.USDBRL); // Log para depuração
    } catch (error) {
      console.error('Erro ao buscar a cotação do dólar:', error);
    }
  };

  // Função para atualizar tudo
  const updateAll = async () => {
    setIsUpdating(true); // Desabilita o botão
    await fetchWeather(); // Atualiza o clima
    await fetchCurrency(); // Atualiza a cotação
    setTime(moment()); // Atualiza o tempo
    setTimeLeft(1800); // Reinicia o contador regressivo
    setIsUpdating(false); // Habilita o botão novamente
    console.log('Tudo atualizado!'); // Log para depuração
  };

  // Atualiza o tempo a cada segundo
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(moment()); // Atualiza o estado do tempo
    }, 1000); // 1000 ms = 1 segundo

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, []);

  // Atualiza o contador regressivo a cada segundo
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0)); // Decrementa o tempo
    }, 1000); // 1000 ms = 1 segundo

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, []);

  // Busca os dados ao carregar o componente e a cada 30 minutos
  useEffect(() => {
    // Função para buscar os dados
    const fetchData = () => {
      console.log('Buscando dados...'); // Log para depuração
      fetchWeather();
      fetchCurrency();
      setTimeLeft(1800); // Reinicia o contador regressivo
    };

    // Busca os dados imediatamente ao carregar o componente
    fetchData();

    // Configura o intervalo para buscar os dados a cada 30 minutos
    const interval = setInterval(fetchData, 1800000); // 1800000 ms = 30 minutos

    // Limpa o intervalo ao desmontar o componente
    return () => {
      console.log('Limpando intervalo...'); // Log para depuração
      clearInterval(interval);
    };
  }, []); // Array vazio garante que o useEffect só roda uma vez (no mount)

  // Função para formatar o tempo restante
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className="px-20 mb-10 bg-[#E84C3D]">
      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 bg-[#E84C3D]">
        {/* Seção do Clima */}
        <div className="bg-white p-4 text-black rounded-lg shadow-md mt-10" data-aos="fade-right" data-aos-duration="3000">
          <h2 className="text-xl font-bold mb-2">Belo Horizonte</h2>
          {weather ? (
            <p>
              {weatherDescriptions[weather.weather[0].description] || weather.weather[0].description}, {weather.main.temp}°C
            </p>
          ) : (
            <p>Carregando clima...</p>
          )}
        </div>

        {/* Seção da Cotação do Dólar */}
        <div className="bg-white p-4 text-black rounded-lg shadow-md mt-10" data-aos="fade-up" data-aos-duration="3000">
          <h2 className="text-xl font-bold mb-2">Cotação do Dólar</h2>
          {currency ? (
            <p>
              R$ {currency.bid} 
            </p>
          ) : (
            <p>Carregando cotação...</p>
          )}
        </div>

        {/* Seção do Contador de Tempo */}
        <div className="bg-white text-black p-4 rounded-lg shadow-md mt-10" data-aos="fade-down" data-aos-duration="3000">
          <h2 className="text-xl font-bold mb-2">Tempo Atual</h2>
          <p>{time.format('HH:mm:ss')}</p> {/* Exibe horas, minutos e segundos */}
        </div>

        {/* Seção do Contador Regressivo */}
        <div className="bg-white text-black p-4 rounded-lg shadow-md mt-10" data-aos="fade-down" data-aos-duration="3000">
          <h2 className="text-xl font-bold mb-2">Próxima Atualização</h2>
          <p>{formatTime(timeLeft)}</p> {/* Exibe o tempo restante */}
        </div>
      </div>

      {/* Botão de Atualização */}
      <div className="flex justify-center mt-6">
        <button
          onClick={updateAll}
          disabled={isUpdating}
          className="font-bold flex justify-center bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-300 hover:text-black transition-all duration-500"
        >
          {isUpdating ? 'Atualizando...' : 'Atualizar Tudo Agora'}
        </button>
      </div>
    </div>
  );
};

export default WeatherAndCurrency;