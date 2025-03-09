import { useState } from "react";

function App() {
  const [showUrl, setShowUrl] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setShowUrl(event.target.url.value);
  }

  return (
    <main className="bg-slate-600">
      <h1 className="text-gray-50 font-black w-full text-center text-xl p-10">
        Series favoritas do meu amor ❤️
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="text"
          name="url"
          placeholder="Insira o codigo IMDB"
          className="w-1/2 p-2 rounded-md text-black"
        />
        <button
          type="submit"
          className="w-1/2 p-2 rounded-md bg-gray-500 text-white"
        >
          Enviar
        </button>
      </form>
      {showUrl && (
        <div className="h-svh flex flex-col items-center">
          <iframe
            src={`https://vidsrc.me/embed/tv?imdb=${showUrl}&ds_lang=pt`}
            width="100%"
            height="100%;"
            allowfullscreen
          ></iframe>
        </div>
      )}
    </main>
  );
}

export default App;
