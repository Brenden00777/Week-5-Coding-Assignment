
// Created a player that hold the name of the position.

class Player{
    constructor(name, position){
        this.name = name;
        this.position = position;
    }


// Then we decribe that player.

describe() {
    return `${this.name} plays ${this.position}.` 
}
}

// Creating a class with an array with the names.


class Team{
    constructor(name){
        this.name = name;
        this.player =[];
    }


// Will check to see if the player is san instance of our player class the instanceof
//operator 

    addPlayer(player){
        if (player instanceof Player){
            this.players.push(player)
        } else {
            throw new Error(`You can only add an instance of player. Argument in not a player: ${player}`);

        }
    }

//Desribes just like our player class and print out name of team and how many players on team


    describe(){
        return `${this.name} has ${this.players.length} players.`
    }
}
// Our main menu has an empty array of teams and shows what team is selected and is set to null at ehe start.
class Menu{
    constructor(){
        this.teams= [];
        this.selected = null;
    }

// We are going add a start method thats going to start up the menu application
// We get the selection at the beginning then we want to get our selection at the end as well so it will contine to loop.
// We are going to show the menu options then the user is gonna make a selection and if they don't hit 0 then we will keep looping

    start() {
        let selection = this.showMainMenuOptions();
        
        while (selection != 0){
            switch (selection) {
                case '1' :
                    this.createTeam();
                    break;
                case '2' : 
                    this.viewTeam();
                    break;
                case '3' :
                    this.deleteTeam();
                    break;
                case '4' :
                    this.displayTeam();
                    break;
                default: 
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert('Goodbye!')
    }
    showMainMenuOptions(){
        return prompt(`
        0) exit
        1) create new team
        2) view team
        3) delete team 
        4) display teams
        `);
    }
}


