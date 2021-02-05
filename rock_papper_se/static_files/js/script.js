// This is for challenge 1
function age_indays(){
    let birth_year = prompt("Enter Your Birth Year ..... Good Man?");
    let age_days = (2021 - birth_year) * 365;
    // console.log(age_days);
    let h1 = document.createElement("h1");
    let text_ans = document.createTextNode("Your are Days " + age_days + " Old.");
    h1.setAttribute("id", "age_indays");
    h1.appendChild(text_ans);
    // now adding this in main document
    document.getElementById("flexbox-result").appendChild(h1);

}

function reset(){
    // removing element
    document.getElementById("age_indays").remove();
}

// This is for challenge 2
function generate_cat(){
    let image = document.createElement("img");
    let div = document.getElementById("cat_generate_section");
    image.setAttribute("height", "150px")
    image.src = "static_files/img/cat.png";
    div.appendChild(image);
}

// This is for challenge 3
function rps_game(your_choice){
    // console.log(your_choice);
    // console.log(your_choice.id);
    var human_choice = your_choice.id;
    var bot_choice = number_to_choice(rps_numbers());

    game_results = decide_winner(human_choice, bot_choice);
    console.log(game_results);

    msg = final_msg(game_results);
    console.log(msg);

    rps_front_end(human_choice, bot_choice, msg);
    // console.log(decide_winner(human_choice, bot_choice));


    // console.log("Player : ", human_choice);
    // console.log("Bot : ", bot_choice);
    // console.log(Math.floor(Math.random() * 3));
}



// functions for RPS GAME
function rps_numbers(){
    return Math.floor(Math.random() * 3);
}

function number_to_choice(number){
    return ["rock", "paper", "scissors"][number];
}

function decide_winner(human_choice, computer_choice){
    var rps_database = {
        "rock" : {"rock" : 0.5, "paper" : 0, "scissors" : 1},
        "paper" : {"paper" : 0.5, "scissors" : 0, "rock" : 1,},
        "scissors" : {"scissors" : 0.5, "rock" : 0, "paper" : 1},
    };

    var player_score = rps_database[human_choice][computer_choice];
    var computer_score = rps_database[computer_choice][human_choice];


    return [player_score, computer_score];
}

function final_msg([your_score, computer_score]){

    if (your_score === 0){
        return {"msg" : "You Lost!", "color" : "red"};
    }
    else if (your_score === 1){
        return {"msg" : "You Win", "color" : "green"};
    }
    else{
        return {"msg" : "You Tied", "color" : "yellow"};
    }

}

function rps_front_end(humans_image, bots_image, msg){

    var rps_img_database = {
        "rock" : document.getElementById("rock").src,
        "paper" : document.getElementById("paper").src,
        "scissors" : document.getElementById("scissors").src
    }

    // remove images from front end
    document.getElementById("rock").remove();
    document.getElementById("paper").remove();
    document.getElementById("scissors").remove();

    human_div = document.createElement("div");
    bot_div = document.createElement("div");
    msg_div = document.createElement("div");

    human_div.innerHTML = "<img src='" + rps_img_database[humans_image] + "' height=150 style='box-shadow:0px 10px 50px rgba(37, 50, 233, 1);'>";
    msg_div.innerHTML = "<h1 style='font-family:arial;font-size:3rem;padding:3rem;color:" + msg["color"] + "'>" + msg["msg"] + "</h1>";
    // msg_div.innerHTML = "<h1>" + msg["msg"] + "</h1>";
    bot_div.innerHTML = "<img src='" + rps_img_database[bots_image] + "' height=150 style='box-shadow:0px 10px 50px rgba(243, 30, 24, 1);'>";
    
    
    document.getElementById("flexbox-rps").appendChild(human_div);
    document.getElementById("flexbox-rps").appendChild(msg_div);
    document.getElementById("flexbox-rps").appendChild(bot_div);
}