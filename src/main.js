import './assets/main.css'

import { createApp, ref } from 'vue'
import App from './App.vue'

import settings from '@/settings/settings.json'
import music from '@/settings/music.json'

// Create audio players

// Choose music

export const _currentGameState = ref({
    guess: 0,
    guessed: [],
    isFinished: false,
});

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

function save(){
    if(!settings["infinite"]){
        const usString = localStorage.getItem("userStats");
        let stats;

        console.log("Set used");
        if(usString === null || usString === ""){
            stats = [];
        } else {
            stats = JSON.parse(usString);
        }

        let item = stats.find((item)=>{
            return item.id === id;
        })

        if(item === undefined){
            stats.push({
                id: id,
                guess: _currentGameState.value.guess,
                guessed: _currentGameState.value.guessed,
                isFinished: _currentGameState.value.isFinished,
            });
        }
        else {
            stats[stats.indexOf(item)] = {
                id: id,
                guess: _currentGameState.value.guess,
                guessed: _currentGameState.value.guessed,
                isFinished: _currentGameState.value.isFinished,
            };
        }

        localStorage.setItem("userStats", JSON.stringify(stats));
    }
}

export const currentGameState = new Proxy(_currentGameState, {
    get(target, prop, receiver) {
        save();
        return Reflect.get(...arguments);
    },

    set(target, key, value) {
        Object.set(target, key, value);
        save();
    },

    defineProperty(target, key, descriptor) {
        Object.defineProperty(target, key, descriptor);
        save();
    }
})

const app = createApp(App);
app.mount('#app')

