
  function HeroSvg() {
    return (
      <svg 
      width="400"
      height="400"
      xmlns='http://www.w3.org/2000/svg'
      fill="orange"
      viewBox='0 0 400 400' 
      >
        <filter id='noiseFilter'>
          <feTurbulence
            type='fractalNoise'
            baseFrequency='0.65'
            numOctaves='3'
            stitchTiles='stitch' />
        </filter>

        <rect width='100%' height='100%' filter='url(#noiseFilter)' />
      </svg>
    )
  }
 
 export default HeroSvg