var botname = "Ravindrasinh";
var botBirthdate = "26/01/2003";
var username = "";
var userBirthdate = "";

module.exports.Replay = function name(Msg) {

    Msg = Msg.toUpperCase();
    // console.log(Msg.indexOf("WHAT IS MY NAME ?"));
    if (Msg.indexOf("HI") > -1 || Msg.indexOf("HELLO") > -1 || Msg.indexOf("HEY") > -1) {

        if (username == "") {
            Msg = "HELLO USER";
        } else {
            Msg = "HELLO " + username;
        }

    } else if (Msg.indexOf("MY NAME IS") > -1) {

        username = Msg.slice(Msg.indexOf("MY NAME IS") + 11).trim()
        Msg = "HELLO " + username + ", I AM " + botname;

    } else if (Msg.indexOf("WHAT IS MY NAME ?") > -1) {

        if (username == "") {
            Msg = "YOU DON'T SAY YOUR NAME 😑😑";
        } else {
            Msg = "I THINK YOUR NAME IS " + username;
        }
    } else if (Msg.indexOf("WHAT IS YOUR NAME ?") > -1) {

        Msg = "MY NAME IS " + botname;

    } else if (Msg.indexOf("MY BIRTHDATE IS") > -1) {

        userBirthdate = Msg.slice(Msg.indexOf("MY BIRTHDATE IS") + 16).trim()

        Msg = "HAPPY BIRTHDAY IN ADVANCE, " + GetDaysOfNextBirthday(userBirthdate) + " DAYS TO GO..";

    } else if (Msg.indexOf("WHAT IS MY AGE ?") > -1) {

        if (userBirthdate == "") {
            Msg = "I DON'T KNOW YOUR BIRTHDATE 🥺🥺";
        } else {
            Msg = "YOUR AGE IS :- " + CountAge(userBirthdate);
        }

    } else if (Msg.indexOf("WHAT IS YOUR AGE ?") > -1) {

        Msg = "MY AGE IS :- " + CountAge(botBirthdate);

    } else if (Msg.indexOf("WHAT IS MY BIRTHDATE ?") > -1) {

        if (userBirthdate == "") {
            Msg = "I DON'T KNOW YOUR BIRTHDATE 🥺🥺";
        } else {
            Msg = "YOUR BIRTHDATE IS :- " + userBirthdate;
        }

    } else if (Msg.indexOf("WHAT IS YOUR BIRTHDATE ?") > -1) {

        Msg = "MY BIRTHDATE IS :- " + botBirthdate;

    } else {

        Msg = " I DON'T KNOW WHAT YOU SAY 🫥🫥 ";

    }

    return Msg;
}

function CountAge(BD) {

    const parts = BD.split("/");
    const birthDate = new Date(parts[2], parts[1] - 1, parts[0]);
    const currentDate = new Date();
    const timeDiff = currentDate - birthDate;
    const age = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365.25));

    return age
}

function GetDaysOfNextBirthday(DB) {

    const parts = DB.split("/");
    const birthDate = new Date(parts[2], parts[1] - 1, parts[0]);
    const currentDate = new Date();
    const nextBirthday = new Date(currentDate.getFullYear(), birthDate.getMonth(), birthDate.getDate());
    if (nextBirthday < currentDate) {
        nextBirthday.setFullYear(currentDate.getFullYear() + 1);
    }
    const timeDiff = nextBirthday - currentDate;
    const days = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    return days;
}