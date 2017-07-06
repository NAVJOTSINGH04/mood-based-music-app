
function toggleSong() {
  //function KEY WORD IS USED TO START THE function
var song = document.querySelector('audio');
if(song.paused == true) {
console.log('Playing');
$('.play-icon').removeClass('fa-play').addClass('fa-pause');
song.play();
}
else {
console.log('Pausing');
$('.play-icon').removeClass('fa-pause').addClass('fa-play');
song.pause();
}
}
$('.welcome-screen button').on('click', function() {
    var name = $('#name-input').val();
    if (name.length > 2) {
        var message = "Welcome, " + name;
        $('.main .user-name').text(message);
        $('.welcome-screen').addClass('hidden');
        $('.main').removeClass('hidden');
    } else {
        $('#name-input').addClass('error');
    }
});
$('.play-icon').on('click', function() {
  toggleSong();

});
$('body').on('keypress', function(event) {
            if (event.keyCode == 32) {
            toggleSong();
          }
        });
function fancyTimeFormat(time)
{
// Hours, minutes and seconds
var hrs = ~~(time / 3600);
var mins = ~~((time % 3600) / 60);
var secs = time % 60;

// Output like "1:01" or "4:03:59" or "123:03:59"
var ret = "";

if (hrs > 0) {
    ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
}

ret += "" + mins + ":" + (secs < 10 ? "0" : "");
ret += "" + secs;
return ret;
}
        function updateCurrentTime() {
var song = document.querySelector('audio');
// console.log(song.currentTime);
// console.log(song.duration);
var currentTime = Math.floor(song.currentTime);
currentTime = fancyTimeFormat(currentTime);
var duration = Math.floor(song.duration);
duration = fancyTimeFormat(duration);
$('.time-elapsed').text(currentTime);
$('.song-duration').text(duration);
}



var songs = [{
    'name': 'razamand',
    'artist': 'diljit',
    'album': 'Sardarji 2',
    'duration': '2:56',
   'fileName': 'song1.mp3',
   'image': 'img1.jpg'
},
{
    'name': 'dil di queen',
    'artist': 'ninja',
    'album': 'crazy tabbar',
    'duration': '3:15',
    'fileName': 'song2.mp3'
},
{
    'name': 'Hostel',
    'artist': 'Sharry maan',
    'album': 'single track',
    'duration': '2:34',
    'fileName': 'song3.mp3'
},
{
    'name': 'oh ho ho',
    'artist': 'sukhbir',
    'album': 'hindi medium',
    'duration': '2:29',
    'fileName': 'song4.mp3'
}]
function changeCurrentSongDetails(songObj) {
$('.current-song-image').attr('src','img/'+songObj.image)
$('.current-song-name').text(songObj.name)
$('.current-song-album').text(songObj.album)
}
function addSongNameClickEvent(songName,position) {
 var id = '#song' + position;
 $(id).click(function() {
 var audio = document.querySelector('audio');
 var currentSong = audio.src;
 if(currentSong.search(songName) != -1)
  {
   toggleSong();
  }
 else {
   audio.src = songName;
   toggleSong();
   changeCurrentSongDetails(songObj);
    }
  });
}


window.onload = function() {
  $('#songs').DataTable(
    {
        paging: false
    }
  );


for(var i =0; i < songs.length;i++) {
   var obj = songs[i];
   var name = '#song' + (i+1);
   var song = $(name);
   updateCurrentTime();
   setTimeout(function() {
     updateCurrentTime();
   },1000);

   song.find('.song-name').text(obj.name);
   song.find('.song-artist').text(obj.artist);
   song.find('.song-album').text(obj.album);
   song.find('.song-length').text(obj.duration);
   addSongNameClickEvent(obj.fileName,i+1)
 }
}
