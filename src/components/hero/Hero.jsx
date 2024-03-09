import { HeroContainerStyle,HeroTextStyle,HeroImg } from "./HeroStyle"

function Hero() {
  return (
    <HeroContainerStyle>
      <HeroTextStyle>
          <h1>Cars Dealer</h1>
          <h2>Find your dream car here!</h2>
          <p>Search your favorite car</p>
      </HeroTextStyle>

      <HeroImg>
        <img src="../../../public/civic.png" alt="Car" />
      </HeroImg>

    </HeroContainerStyle>
  )
}

export default Hero