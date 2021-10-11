var musicIndex = 0;
var wavesurfer = WaveSurfer.create({
    barWidth: 1,
    container: '#wavesurfer',
    cursorWidth: 0,
    dragSelection: true,
    height: 500,
    hideScrollbar: true,
    interact: true,
    normalize: true,
    waveColor: 'rgba(255,255,255,.05)',
    progressColor: 'rgba(255,255,255,.15)'
});

const files = ["music1.mp3",
"music2.mp3",
"music3.mp3",
"music4.mp3",
"music5.mp3",
"music6.mp3",
"music7.mp3",
"music8.mp3",
"music9.mp3",
"music10.mp3",
"music11.mp3",
"music12.mp3",
"music13.mp3",
"music14.mp3",
"music15.mp3",
"music16.mp3",
"music17.mp3",
"music18.mp3",
"music19.mp3",
"music20.mp3",
"music21.mp3",
"music22.mp3",
"music23.mp3",
"music24.mp3",
"music25.mp3",
"music26.mp3",
"music27.mp3",
"music28.mp3",
"music29.mp3",
"music30.mp3",
"music31.mp3",
"music32.mp3",
"music33.mp3",
"music34.mp3",
"music35.mp3",
"music36.mp3",
"music37.mp3",
"music38.mp3",
"music39.mp3",
"music40.mp3",
"music42.mp3",
"music43.mp3",
"music44.mp3",
"music45.mp3",
"music46.mp3",
"music47.mp3",
"music48.mp3",
"music49.mp3",
"music50.mp3",
"music51.mp3",
];

$('.player').on('click', '#play', function(){
  if( $(this).hasClass('load') ){
    $(this).removeClass('load');
  wavesurfer.load("music1.mp3");
  } else {
    wavesurfer.playPause();
  }
});

var i = 0;
// $('.button__next').on('click','#play', function(){
//   alert("gfgffgfg")
 function next(){
   musicIndex++;
const play= document.getElementById("play");
 wavesurfer.load(files[musicIndex]);
}

function prev(){
  musicIndex--;
const play= document.getElementById("play");
 wavesurfer.load(files[musicIndex]);
}

var m,
    s;

function getMinutes( convTime ){
  convTime = Number(convTime);
  m = Math.floor(convTime% 3600 / 60);
  return ((m < 10 ? "0" : "") + m);
}

function getSeconds( convTime ){
  convTime = Number(convTime);
  s = Math.floor(convTime % 3600 % 60);
  return ((s < 10 ? "0" : "") + s);
}

var totalTime,
    timeJump,
    currentTime,
    currentTimeJump;

wavesurfer.on('ready', function(){
  totalTime = wavesurfer.getDuration();
  timeJump = 300 / totalTime;
  $('.wavesurfer__elem').addClass('show');
  $('.button__loader').fadeOut();
  $('.time__minutes').text( getMinutes( totalTime ) );
  $('.time__seconds').text( getSeconds( totalTime ) );
  $('.time, .progress').fadeIn();
  
  wavesurfer.play();
});

function progressJump(){
  currentTime = wavesurfer.getCurrentTime();
  currentTimeJump = currentTime * timeJump + 10;
  $('.progress__button').css({ left: currentTimeJump+'px' });
  $('.progress__indicator').css({ width: currentTimeJump+'px' });
  
  $('.time__minutes').text( getMinutes( currentTime ) );
  $('.time__seconds').text( getSeconds( currentTime ) );
}

wavesurfer.on('audioprocess', function(){
  progressJump();
});

wavesurfer.on('pause', function(){
  $('.button__play-iconplay').fadeIn();
  $('.button__play-iconpause').fadeOut();
  $('.recordplayer').removeClass('play');
  $('.recordplayer__disc').removeClass('animate');
  $('.artist__image').removeClass('play');
});

wavesurfer.on('play', function(){
  $('.button__play-iconplay').fadeOut();
  $('.button__play-iconpause').fadeIn();
  $('.recordplayer').addClass('play');
  $('.recordplayer__disc').addClass('animate');
  $('.artist__image').addClass('play');
});

wavesurfer.on('loading', function(event){
  $('.button__loader').css({ height: event+'px' });
});

wavesurfer.on('seek', function(event){
  progressJump();
});



var toNodeList = function(arrayOfNodes){
  var fragment = document.createDocumentFragment();
  arrayOfNodes.forEach(function(item){
    fragment.appendChild(item.cloneNode());
  });
  return fragment.childNodes;
};

