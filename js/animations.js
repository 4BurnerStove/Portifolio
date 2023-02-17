import { Settings } from "./settings.js"

const { 
  animeDown,
  animeTop,
  animeRight,
  animeLeft,
  left,
  right,
  top,
  down,
  off,
  AnimationScrollHidden
} = Settings

export function AllAnimation() {
  function ExecuteAnimation() {
    scrollAnimation(Settings.AnimationScrollHidden, Settings.off)
    scrollAnimation(Settings.animeRight, Settings.right)
    scrollAnimation(Settings.animeLeft, Settings.left)
    scrollAnimation(Settings.animeTop, Settings.top)
    scrollAnimation(Settings.animeDown, Settings.down)
  }
  
  
  function scrollAnimation(name, type) {
    const observer = new IntersectionObserver (entries => {
      Array.from(entries).forEach( entry => {
       if (entry.intersectionRatio >= 1) {
         entry.target.classList.add(type)
      }
      })
      
     }, {
         threshold: [0, .5, 1]
     })
     
     Array.from(name).forEach( element =>{
       observer.observe(element)
     })  
  }

  return {
    AllAnimation,
    ExecuteAnimation,
    scrollAnimation
  }
}