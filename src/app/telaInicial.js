export default function Home() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-[#E2F1E7] flex flex-col p-6">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-8">
          <img src="/logo.ico"
            alt="AquaViva Logo"
            className="w-20 h-20" />
        </div>

        {/* Busca */}
        <div className="mb-2">
          <label htmlFor="search" className="text-[#629584] font-bold p-1">
            Busca
          </label>
          <div className="relative mt-2">
            <input
              type="text"
              id="search"
              placeholder="Digite a Cidade"
              className="w-full text-[#629584] px-4 py-2 rounded-lg border border-gray-300 focus:outline-none"
            />
            <button className="absolute right-2 top-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#629584]"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.9 14.32a8 8 0 111.414-1.415l3.387 3.387a1 1 0 01-1.414 1.414l-3.387-3.387zM8 14a6 6 0 100-12 6 6 0 000 12z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Histórico */}
        <div className="p-1">
        <img src="icon.png" className="absolute"></img>
          <h2 className="text-[#629584] font-bold mb-2">Histórico de Busca</h2>
          <ul className="text-[#629584] font-bold space-y-2">
            <li className="cursor-pointer hover:text-teal-800">Feira de Santana</li>
            <li className="cursor-pointer hover:text-teal-800">Salvador</li>
            <li className="cursor-pointer hover:text-teal-800">Amélia Rodrigues</li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-3/4 bg-teal-700 flex justify-center items-center relative">
        {/* Imagem Principal */}
        <img
          src="/main-image.png"
          alt="Main Illustration"
          className="w-1/2 h-auto"
        />

        {/* Fundo Decorativo */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-teal-800 rounded-t-full" />
      </div>
    </div>
  );
}
