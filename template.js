function template(table, variable) {
    return `<div id="fillInTheBlanksActivity">
        ${table}
</div>

<button onclick="grade()">SUBMIT</button>

<script>
function grade() {
    let blanks = document.getElementById("fillInTheBlanksActivity").querySelectorAll("input");
    let score = 0;

    blanks.forEach(blank => {
        if (atob(blank.getAttribute("ak")).toLowerCase().trim() == blank.value.toLowerCase().trim()){
            blank.classList.remove("incorrect");
            score++
        }
        else {
            blank.classList.add("incorrect");
        }
    });

    let grade = (score / blanks.length) * 100;

    let player = window.parent.GetPlayer();
    player.SetVar("${variable}", grade);

    console.log("You got ", grade, "%");
}
</script>

<style>

table {
    border-collapse: collapse;
}

td {
border: solid #61C5D2 1px;
height: 40px;
padding: 10px;
position: relative;
text-align: center;
}

td.invisible {
border: none;
}

input {
width: 100%;
border: none;
box-sizing: border-box;
position: absolute;
left: 0;
top: 0;
height: 100%;
padding: 10px;
}

input.incorrect {
    border: solid red;
}

button {
color: #209FB0;
border: solid #209FB0 1px;
background-color: white;
font-weight: bold;
padding: 5px 10px;
border-radius: 7px;
}

button:active {
background-color: gainsboro;
}
</style>`;
}