console.log('app.js is active');


function preeKey(e){
    console.log(e.keyCode) //untuk mengetahui keycode huruf yang di tekan
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    key.classList.toggle('playing')
    // console.log(key)
};


window.addEventListener('keydown', preeKey) 