import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import settings from '@/settings/settings.json'
import music from '@/settings/music.json'
let listIndex;
let id = 0;

if(settings["infinite"]){
    listIndex = Math.random() * (music.length-1);
} else {
    const oldestDate = new Date(null);
    const currentDate = new Date();

    id = Math.floor((currentDate.getTime() - oldestDate.getTime()) / 86400000);

    listIndex = id % music.length;

    const usString = localStorage.getItem("userStats");
    if(usString !== null && usString !== ""){
        let stats = JSON.parse(usString);
        let item = stats.find((item)=>{
            return item.id === id;
        })

        if(item !== undefined){
            _currentGameState.value.guess = item.guess;
            _currentGameState.value.guessed = item.guessed;
            _currentGameState.value.isFinished = item.isFinished;
        }
    }
}

export const SelectedMusic = music[listIndex];
const app = createApp(App);
app.mount('#app')
