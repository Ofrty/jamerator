/*********************************************
 *  Author:         Joe Kirkham
 *  Date Created:   2018/09/19
 *  Date Modified:
 *  Description:    Generates a random starting chord,
 *                  progression, style, feel, tempo,
 *                  and scale shapes/patterns with which
 *                  to practice and jam. Also generates a
 *                  link to YouTube with a search string
 *                  that contains some of this information.
 *********************************************/

/**needed functions**/
function getRandom(arr)
{
    return arr[Math.floor((Math.random() * ((arr.length-1) + 1)))]
}

//get elements
var elRootChord = document.getElementById("rootChord");
var elProg = document.getElementById("progression");
var elStyle = document.getElementById("style");
var elFeel = document.getElementById("feel");
var elTempo = document.getElementById("tempo");
var elScales = document.getElementById("scales");
var elYouTube = document.getElementById("youtube");

//declare choices
var noteOps = ["C","C#/Db","D","D#/Eb","E","F","F#/Gb","G","G#/Ab","A","A#/Bb","B"];

var flavorOps =
    [
        "Major"
        ,"Major Pentatonic"
        ,"Major 6"
        ,"7"
        ,"Major 7"
        ,"Major 9"
        ,"Major Blues"
        ,"Major Diminished"
        ,"Major Augmented"
        ,"Minor"
        ,"Minor Pentatonic"
        ,"Minor 6"
        ,"Minor 7"
        ,"Minor 9"
        ,"Minor Blues"
        ,"Minor Diminished"
        ,"Minor Augmented"
    ];

var progOps =
    [
        "I / V"
        ,"I / IV"
        ,"I / IV / V"
        ,"I / IV / V 12-bar Blues (No Quick Change)"
        ,"I / IV / V 12-bar Blues (Quick Change)"
        ,"I / VI / II / V"
        ,"IV / II / I"
        ,"IV / IIb / I"
        ,"I / V / VI / IV"
    ];

var styleOps =
    [
        "4/4 Rock"
        ,"Blues"
        ,"Funk"
        ,"Latin"
        ,"Jazz"
    ];

var feelOps =
    [
        "8th"
        ,"16th"
        ,"Triplet"
    ];

var tempoOps =
    [
        "80"
        ,"90"
        ,"100"
        ,"110"
        ,"120"
        ,"130"
        ,"140"
    ];

var scaleOps =
    [
        "Open"
        ,"Root 6 Index/3 Per String"
        ,"Root 6 Middle"
        ,"Root 6 Pinky AKA Guajira"
        ,"Root 5 Middle"
        ,"Root 5 Pinky"
        ,"3-6-3"
        ,"6-3-6"
        ,"Blues Box"
        ,"BB King Blues"
        ,"Martino 3 fingers * 4 positions (child variants)"
        ,"Martino 4 fingers * 3 positions (child variants)"
        ,"Root 4 Diminished (child variants)"
    ];

//TODO: add a +12 bool for each scale

/**assign vars**/
var rootChord = getRandom(noteOps) + ' ' + getRandom(flavorOps);
var prog = getRandom(progOps);
var style = getRandom(styleOps);
var feel = getRandom(feelOps);
var tempo = getRandom(tempoOps);
var scales = getRandom(scaleOps) + ', ' + getRandom(scaleOps) + ', ' + getRandom(scaleOps);
var youTube = "https://www.youtube.com/results?search_query=" + rootChord + '+' + prog + '+' + style + '+' + "backing track";

/**populate elems**/
elRootChord.textContent += rootChord;
elProg.textContent += prog;
elStyle.textContent += style;
elFeel.textContent += feel;
elTempo.textContent += tempo;
elScales.textContent += scales;
elYouTube.href = youTube;