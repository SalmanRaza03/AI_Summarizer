import {logo} from '../assets';

const Hero = () => {
  return (
    <header className = "w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-7">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />

        <button
          type="button"
          onClick={() => window.open('https://github.com/SalmanRaza03')}
          className="black_btn"

        >
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden"/>
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with Sumz, an open-source article summarizer that transforms lengthy and vast articles into clear and concise summaries on the go.
      </h2>
    </header>
  )
}

export default Hero