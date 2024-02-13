const counters = document.querySelectorAll( '.counter' );


counters.forEach( ( counters ) => {
  counters.innerHTML = 0; 
  
  const updateCounter = () => {
    const targetCounter = +counters.getAttribute( 'data-target' );
    let startingCount = +counters.innerHTML;
    let incr = targetCounter/100;

    if (startingCount < targetCounter) {
        counters.innerHTML = `${Math.round(startingCount + incr)}`;
        setTimeout(updateCounter, 40);
    } else {
        counters.innerHTML = targetCounter;
    }
  }
  updateCounter();
})