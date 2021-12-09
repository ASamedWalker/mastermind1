import { MAX_TRIES, CODE_LENGTH } from "../Config.js";

class BoardView {
  #element = document.querySelector(".game-board-view");

  // render a board
  renderBoard() {
    this.#element.innerHTML = '';

    for (let i = 1; i <= MAX_TRIES; i++) {
      const html = `
            <div class="game-try" data-turn="${i}">
                <div class="choice-row">
                    ${this.getHTMLForChoices()}
                </div>

                <div class="occurrence-status-row" data-turn="${i}">
                    ${this.getHTMLForOccurrenceStatusFlags()}
                </div>
            </div>
            `;
      this.#element.insertAdjacentHTML("afterbegin", html);
    }
  }

  //create and return html for textual or graphic representation of number sequence
  //-------------------------------------------------------------
  getHTMLForChoices() {
    let html = "";
    for (let i = 0; i < CODE_LENGTH; i++) {
      html += `<div class="choice choice-number" data-choice="${i}"><span class="number"></span></div>`;
    }
    return html;
  }

  //create and return html for occurrence flags (renders only once the HTML)
  //-------------------------------------------------------------
  getHTMLForOccurrenceStatusFlags() {
    let html = "";
    for (let i = 0; i < CODE_LENGTH; i++) {
      html += `<div class="choice occurrence-status-flag" data-occurrence-status="${i}"></div>`;
    }
    return html;
  }
}

export default new BoardView();
