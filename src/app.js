const figlet = require('figlet');
const inquirer = require('inquirer');
const {addNote, listNotes, removeNote} = require("../utils/notes");


const topLevelQuestion = [
    { type: "list",
    name: "options",
    message: "What would you like to do?",
    choices: ["add", "list", "remove", "exit"] }
]; 

const addQuestion = [
    {type: 'input',
    name:'add', 
    message:'what would you like to add?'
    }
]

const main = () => {
    console.log(figlet.textSync('Notes App'));
    console.log("start of my app");
    app();
};

const app = async () => {
    const answers = await inquirer.prompt(topLevelQuestion);
    if (answers.options == "add") {
        const answer = await inquirer.prompt(addQuestion);
        addNote(answer.add);

        app();
    } else if (answers.options == "list") {
        listNotes();
        app() ;

    } else if (answers.options == "remove") {
        removeNote();
        app() ;

    } else if (answers.options == "exit") {
        console.log("ok, bye!");
    }
};

main();