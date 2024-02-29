const gameRouletteButton = document.getElementById("game1");
const AppScreen = document.getElementById("app");

const RouletteAtributes = [
    {
        Id: 1,
        headerContent: 'MainMenu',
        div2Content: '',
    }
]

const RenderGames = () => {
    AppScreen.innerHTML = `
    <div class="chooseGame-button" id="game1">
        Gra 1
    </div>
    <div class="chooseGame-button" id="game2">
        Gra 2
    </div>
    <div class="chooseGame-button" id="game3">
        Gra 3
    </div>
    `;
}

const Roulette = () => {
    AppScreen.className = "appGame";
    gameRouletteButton.addEventListener("click", () =>{

    })
}

const Game = () =>{
    RenderGames();
    Roulette();
}
