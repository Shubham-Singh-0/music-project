const music = new Audio('mp3/5.mp3');
// music.play();

const Songs = [
    {
        id: "1",
        songName : ` Khairiyat <br>
        <div class="subtitle">Arjit Singh</div>`,
        poster : "1.jpg"
    },
    {
        id: "2",
        songName : ` Excuses <br>
        <div class="subtitle">Ap Dhillon</div>`,
        poster: "2.jpg"
    },
    {
        id: "3",
        songName : ` Desh Mere <br>
        <div class="subtitle">Arjit singh</div>`,
        poster: "3.jpg"
    },
    {
        id: "4",
        songName : ` Dhoka <br>
        <div class="subtitle">Arjit singh</div>`,
        poster: "4.jpg"
    }, 
    {
        id: "5",
        songName : ` Tera Yaar Hoon Mai <br>
        <div class="subtitle"> Arjit Singh</div>`,
        poster: "5.jpg"
    }, 
    {
        id: "6",
        songName : ` Chunar <br>
        <div class="subtitle">Arjit singh</div>`,
        poster: "6.jpg"
    },
    {
        id: "7",
        songName : ` Galti Se Mistake<br>
        <div class="subtitle">Arjit  singh</div>`,
        poster: "7.jpg"
    },
    {
        id: "8",
        songName : ` Hamari Adhuri Kahani <br>
        <div class="subtitle">Arjit  singh</div>`,
        poster: "8.jpg"
    },
    {
        id: "9",
        songName : ` Mithoon <br>
        <div class="subtitle">Arjit singh</div>`,
        poster: "9.jpg"
    }, 
    {
        id: "10",
        songName : ` Yeed Na Aaye <br>
        <div class="subtitle"> Akull</div>`,
        poster: "10.jpg"
    },
    {
        id: "11",
        songName : ` Mera Yaaraa <br>
        <div class="subtitle">Arjit Singh singh</div>`,
        poster: "11.jpg"
    },
    {
        id: "12",
        songName : ` Nashe Si Chad Gayi<br>
        <div class="subtitle">Arjit  singh</div>`,
        poster: "12.jpg"
    },
    {
        id: "13",
        songName : ` Bewafa <br>
        <div class="subtitle">Imran Khan</div>`,
        poster: "13.jpg"
    },
    {
        id: "14",
        songName : ` Kesariya <br>
        <div class="subtitle">Arjit singh</div>`,
        poster: "14.jpg"
    },
    {
        id: "15",
        songName : ` Kala Rang <br>
        <div class="subtitle">Kaka FT. Gini Kapoor</div>`,
        poster: "15.jpg"
    },
    {
        id: "16",
        songName : ` Ek ladki <br>
        <div class="subtitle">Shivam singh</div>`,
        poster: "16.jpg"
    },
    {
        id: "17",
        songName : ` Pachtaoge <br>
        <div class="subtitle">Arjit singh</div>`,
        poster: "17.jpg"

    },
    {
        id: "18",
        songName : ` Ae Watan <br>
        <div class="subtitle">Arjit singh</div>`,
        poster: "18.jpg"
    }
]




Array.from(document.getElementsByClassName(`SongItem`)).forEach((e , i )=> {
    e.getElementsByTagName('img')[0].src= Songs[i].poster;
    e.getElementsByTagName('h5')[0].src= innerHTML[i].songName
    
})


let masterPlay = document.getElementById('masterPlay');
 masterPlay.addEventListener('click',()=>{
    if(music.paused || music.currentTime <= 0){
        music.play();
        Wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

    }
    else{
        music.pause();
        Wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
 })




 let index = 0;

 let poster_master_play = document.getElementById('poster_master_play');
 let title = document.getElementById('title');
 
 Array.from(document.getElementsByClassName('playListPlay')).forEach((e) =>{
    e.addEventListener('click' , ()=>{
        index = el.traget.id;
        music.src= `audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitles = songs.filter((els) =>{
            return els .id == index;
        });

        songTitles.forEach(elss =>{
            let{songName} = elss;
            title.innerHTML = songName;
            poster_master_play.src = poster;

        })

        
    })
 })


 let currentStart = document.getElementById('currentStart');
 let currentEnd = document.getElementById('currentEnd');
 let seek = document.getElementById('seek');
 let bar2 = document.getElementById('bar2');
 let dot = document.getElementsByClassName('dot');
 music.addEventListener('timeupdate' , ()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min1 = math.floor(music_dur /  60);
    let sec1 = math.floor(music_dur % 60);

    if (sec1 < 10){
        sec1 =`0${sec1}` ;
    }


    currentStart.innerText = `${min1} : ${sec1}`;

    let min2 = math.floor(music_curr /60);
    let sec2 = math.floor(music_curr%60);

    if (sec2 <10){
        sec2 = `0${sec2}`;
    }

    currentStart.innerText =` ${min2}:${sec2}`;



    let progressBar = parseInt((music_curr / music_dur ) * 100);

    seek.value =  progressBar;
     let seekbar = seek.value;
 })

