const soundboard = {

  /**
   * Propriétés liées au DOM
   * les valeurs appropriées seront données par la méthode "definePads"
   */
  kickElement: null,
  hihatElement: null,
  snareElement: null,
  wobbleElement: null,
  vocalElement: null,
  scratchElement: null,
  
  /**
   * Propriétés liées à l'Audio
   * les valeurs appropriées seront données par la la méthode "preloadSamples"
   */
  kickAudio: null,
  hihatAudio: null,
  snareAudio: null,
  wobbleAudio: null,
  vocalAudio: null,
  scratchAudio: null,

  /**
   * Méthode permettant d'initialiser la sound board
   */
  init: function() {
    console.log('soundboard.init');
    soundboard.definePads();
    soundboard.preloadSamples();
    soundboard.attachEvents();
  },

  /**
   * Méthode permettant de sélectionner dans le DOM
   * les différents éléments pads
   */
  definePads: function() {
    // TODO 2
    soundboard.kickElement = document.querySelector('.pad-1');
    soundboard.hihatElement = document.querySelector('.pad-2');
    soundboard.snareElement = document.querySelector('.pad-3');
    soundboard.wobbleElement = document.querySelector('.pad-4');
    soundboard.vocalElement = document.querySelector('.pad-5');
    soundboard.scratchElement = document.querySelector('.pad-6');
  },

  /**
   * Méthode permettant d'initialiser et de précharger
   * les différents samples audio à jouer
   */
  preloadSamples: function() {
    soundboard.kickAudio = new Audio('assets/audio/kick.opus');
    soundboard.hihatAudio = new Audio('assets/audio/hihat.opus');
    soundboard.snareAudio = new Audio('assets/audio/snare.opus');
    soundboard.wobbleAudio = new Audio('assets/audio/wobble.opus');
    soundboard.vocalAudio = new Audio('assets/audio/voice.opus');
    soundboard.scratchAudio = new Audio('assets/audio/scratch.opus');
  },

  /**
   * Méthode/Handler exécuté lorsque le pad "kick" est pressé
   */
  handleKickClick: function() {
    soundboard.kickAudio.currentTime = 0;
    soundboard.kickAudio.play();
  },

  /**
   * Méthode/Handler exécuté lorsque le pad "hi-hat" est appuyé
   */
  handleHihatClick: function() {
    soundboard.hihatAudio.currentTime = 0;
    soundboard.hihatAudio.play();
  },

  /**
   * Méthode/Handler exécuté lorsque le pad "snare" est appuyé
   */
  handleSnareClick: function() {
    soundboard.snareAudio.currentTime = 0;
    soundboard.snareAudio.play();
  },

  /**
   * Méthode/Handler exécuté lorsque le pad "wobble" est appuyé
   */
  handleWobbleClick: function() {
    soundboard.wobbleAudio.currentTime = 0;
    soundboard.wobbleAudio.play();
  },

  /**
   * Méthode/Handler exécuté lorsque le pad "vocal" est appuyé
   */
  handleFxClick: function() {
    soundboard.vocalAudio.currentTime = 0;
    soundboard.vocalAudio.play();
  },

  /**
   * Méthode/Handler exécuté lorsque le pad "scratch" est appuyé
   */
  handleScratchClick: function() {
    soundboard.scratchAudio.currentTime = 0;
    soundboard.scratchAudio.play();
  },

  /**
  * Méthode/Handler exécuté lorsque n'importe quelle touche du clavier est pressée
  */
  handleKeyboard: function(event) {
    if (event.key === 'a') { soundboard.kickElement.click(), soundboard.changeColorPadKick(); }
    if (event.key === 'z') { soundboard.hihatElement.click(), soundboard.changeColorPadHit(); }
    if (event.key === 'e') { soundboard.snareElement.click(), soundboard.changeColorPadSnare(); }
    if (event.key === 'q') { soundboard.wobbleElement.click(), soundboard.changeColorPadWobble(); }
    if (event.key === 's') { soundboard.vocalElement.click(), soundboard.changeColorPadVocal(); }
    if (event.key === 'd') { soundboard.scratchElement.click(), soundboard.changeColorPadScratch(); }
  },
  
  /**
   * Méthode/Handler pour changer la couleur des pads
   */
  changeColorPadKick : function() {
    soundboard.kickElement.style.backgroundColor = "#7ee787";
    soundboard.kickElement.style.color = "#0D1117";
    setTimeout(function(){
      soundboard.kickElement.style.backgroundColor = "#0D1117";
    soundboard.kickElement.style.color = "#c9d1d9";

    },500);
  },
  changeColorPadHit : function() {
    soundboard.hihatElement.style.backgroundColor = "#7ee787";
    soundboard.hihatElement.style.color = "#0D1117";
    setTimeout(function(){
      soundboard.hihatElement.style.backgroundColor = "#0D1117";
      soundboard.hihatElement.style.color = "#c9d1d9";
    },500);
  },
  changeColorPadSnare : function() {
    soundboard.snareElement.style.backgroundColor = "#7ee787";
    soundboard.snareElement.style.color = "#0D1117";
    setTimeout(function(){
      soundboard.snareElement.style.backgroundColor = "#0D1117";
      soundboard.snareElement.style.color = "#c9d1d9";
    },500);
  },
  changeColorPadWobble : function() {
    soundboard.wobbleElement.style.backgroundColor = "#7ee787";
    soundboard.wobbleElement.style.color = "#0D1117";
    setTimeout(function(){
      soundboard.wobbleElement.style.backgroundColor = "#0D1117";
      soundboard.wobbleElement.style.color = "#c9d1d9";
    },500);
  },
  changeColorPadVocal : function() {
    soundboard.vocalElement.style.backgroundColor = "#7ee787";
    soundboard.vocalElement.style.color = "#0D1117";
    setTimeout(function(){
      soundboard.vocalElement.style.backgroundColor = "#0D1117";
      soundboard.vocalElement.style.color = "#c9d1d9";
    },500);
  },
  changeColorPadScratch : function() {
    soundboard.scratchElement.style.backgroundColor = "#7ee787";
    soundboard.scratchElement.style.color = "#0D1117";
    setTimeout(function(){
      soundboard.scratchElement.style.backgroundColor = "#0D1117";
      soundboard.scratchElement.style.color = "#c9d1d9";
    },500);
  },
  
  /**
   * Méthode permettant d'ajouter un écouteur d'évènement par pad
   */
  attachEvents: function() {
    // TODO 3
    soundboard.kickElement.addEventListener('click', soundboard.handleKickClick);
    soundboard.kickElement.addEventListener('click', soundboard.changeColorPadKick);
    soundboard.hihatElement.addEventListener('click', soundboard.handleHihatClick);
    soundboard.hihatElement.addEventListener('click', soundboard.changeColorPadHit);
    soundboard.snareElement.addEventListener('click', soundboard.handleSnareClick);
    soundboard.snareElement.addEventListener('click', soundboard.changeColorPadSnare);
    soundboard.wobbleElement.addEventListener('click', soundboard.handleWobbleClick);
    soundboard.wobbleElement.addEventListener('click', soundboard.changeColorPadWobble);
    soundboard.vocalElement.addEventListener('click', soundboard.handleFxClick);
    soundboard.vocalElement.addEventListener('click', soundboard.changeColorPadVocal);
    soundboard.scratchElement.addEventListener('click', soundboard.handleScratchClick);
    soundboard.scratchElement.addEventListener('click', soundboard.changeColorPadScratch);
    document.addEventListener('keydown', soundboard.handleKeyboard);
  },

}