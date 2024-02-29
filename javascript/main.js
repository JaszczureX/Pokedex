const AppScreen = document.getElementById("app");

const RouletteAtributes = [
    {
        Id: 0,
        headerContent: 'MainMenu',
        div2Content: '',
    }
];

const RenderGames = () => {
    AppScreen.innerHTML = `
        <div id="bufor">
            <div class="chooseGame-button" id="game1">
                Gra 1
            </div>
            <div class="chooseGame-button" id="game2">
                Gra 2
            </div>
            <div class="chooseGame-button" id="game3">
                Gra 3
            </div>
        </div>
    `;
};

const Roulette = () => {
    const gameRouletteButton = document.getElementById("game1");
    gameRouletteButton.addEventListener("click", () => {

    })
};

const Game = () => {
    RenderGames();
    Roulette();
};

document.addEventListener("DOMContentLoaded", Game);
