
const storageKey = 'ZZASDFGgame-storage';

export default {
    saveGame(data) {
        window.localStorage.setItem(storageKey, JSON.stringify(data));
    },
    loadGame(){
        return JSON.parse(window.localStorage.getItem(storageKey));
    }
};