/*********************************************
 *  Author:         Joe Kirkham
 *  Date Created:   2018/09/19
 *  Description:    Generates a random starting chord, progression, style, feel, tempo, and scale shapes/patterns
 *                  with which to practice and jam. Also generates a link to YouTube with a search string
 *                  that contains some of this information.
 *
 *                  See Git change diffs and commit comments for an update log.
 *********************************************/

/**needed functions**/

/*getRandomIdx() returns a randomly-selected index in an array passed in ar
* Assumption: arg1 'arr' is an array. Returns nothing otherwise.
* */
function getRandomIdx(arr)
{
    return (Math.floor((Math.random() * ((arr.length - 1) + 1))));
}

/*getRandomVal() returns the contents of a randomly-selected index in the array passed in arg
* Assumption: arg1 'arr' is an array. Just returns nothing otherwise.
* */
function getRandomVal(arr)
{
    return arr[getRandomIdx(arr)];
}

/*writeScaleTab() sets the contents of a scale tab block to contain the elements of the scale it is passed.
arg1=scale order n, arg2=scale object
 */
function writeScaleTab(ordinal, scale)
{
    //set the scale header text to the scale name
    setScaleHeader(ordinal, scale.name);

    //set the notes of the tab
    //loop through each string
    for (var i = 0; i < 6; i++)
    {
        //for each note on that string for the scale
        for (var j = 0; j < scale.frets[i].length; j++)
        {
            //compensate for the randomly-selected root note and set the value
            var adjustedVal = ((scale.frets[i][j] + (((12 + rootNoteIdx) - scale.root) % 12)) + 1);
            setFret(ordinal, (i+1), (j+1), adjustedVal);
        }
    }
}

/*setScaleHeader() sets the header elem for a scale to the name of the scale.
* arg1=scale n, arg2=scale name
 */
function setScaleHeader(ordinal, name)
{
    //find the appropriate element by id
    var idStr = "scaleTabHeader" + ordinal;
    var elem = document.getElementById(idStr);

    //edit the text
    elem.textContent = name;
}

/*setFret() sets the contents of a fret div element to the value in val.
* arg1=scale order n, arg2=string n, arg3=note n, arg4=val to be inserted*/
function setFret(ordinal, s, n, val)
{
    //find the appropriate elem by id
    var idStr = ordinal + "s" + s + "n" + n;
    var elem = document.getElementById(idStr);

    //edit the text
    elem.textContent = val;
}

//get elements
var elRootChord = document.getElementById("rootChord");
var elProg = document.getElementById("progression");
var elStyle = document.getElementById("style");
var elFeel = document.getElementById("feel");
var elTempo = document.getElementById("tempo");
var elYouTube = document.getElementById("youtube");

//declare choices
var noteOps = ["A", "A#/Bb", "B", "C", "C#/Db", "D", "D#/Eb", "E", "F", "F#/Gb", "G", "G#/Ab"];

var flavorOps =
    [
        "Major"
        , "Major Pentatonic"
        , "Major 6"
        , "7"
        , "Major 7"
        , "Major 9"
        , "Major Blues"
        , "Major Diminished"
        , "Major Augmented"
        , "Minor"
        , "Minor Pentatonic"
        , "Minor 6"
        , "Minor 7"
        , "Minor 9"
        , "Minor Blues"
        , "Minor Diminished"
        , "Minor Augmented"
    ];

var progOps =
    [
        "I / V"
        , "I / IV"
        , "I / IV / V"
        , "I / IV / V 12-bar Blues (No Quick Change)"
        , "I / IV / V 12-bar Blues (Quick Change)"
        , "I / VI / II / V"
        , "IV / II / I"
        , "IV / IIb / I"
        , "I / V / VI / IV"
    ];

var styleOps =
    [
        "4/4 Rock"
        , "Blues"
        , "Funk"
        , "Latin"
        , "Jazz"
    ];

var feelOps =
    [
        "8th"
        , "16th"
        , "Triplet"
    ];

var tempoOps =
    [
        "80"
        , "90"
        , "100"
        , "110"
        , "120"
        , "130"
        , "140"
    ];

/*each scale is an object consisting of 3 parts:
 1) a name
 2) a 2D-array of frets ordered strings 1-6
 3) an index of the root note. use the note ref here:
        A   A#/Bb   B   C   C#/Db   D   D#/Eb   E   F   F#/Gb   G   G#/Ab
        1     2     3   4     5     6     7     8   9    10    11    12
 */
var scaleOps =
    [
        {name: "Root 6 Index/3 Per String", frets: [[2, 4, 5], [2, 4, 5], [1, 2, 4], [1, 2, 4], [0, 2, 4], [0, 2, 4]], root: 8}
        , {name: "Root 6 Pinky AKA Guajira", frets: [[1, 3, 4], [1, 2, 4], [0, 1, 3], [1, 3], [1, 3, 4], [1, 3, 4]], root: 12}
        , {name: "Root 6 Middle", frets: [[0, 1, 3], [1, 3], [0, 2, 3], [0, 2, 3], [0, 1, 3], [0, 1, 3]], root: 9}
        , {name: "Root 5 Middle", frets: [[1, 3], [1, 3], [0, 2, 3], [0, 1, 3], [0, 1, 3], [1, 3]], root: 2}
        , {name: "Root 5 Pinky", frets: [[0, 1, 3], [0, 1, 3], [0, 2], [0, 2, 3], [0, 2, 3], [0, 1, 3]], root: 4}
        , {name: "3-6-3", frets: [[5, 6, 7, 8, 9], [5, 6, 7], [2, 3, 4, 5, 6], [2, 3, 4], [0, 1, 2, 3, 4], [0, 1, 2]], root: 10}
        , {name: "6-3-6", frets: [[7, 8, 9], [5, 6, 7, 8, 9], [4, 5, 6], [2, 3, 4, 5, 6], [2, 3, 4],  [0, 1, 2, 3, 4]], root: 5}
        , {name: "Blues Box", frets: [[0, 3], [0, 3], [0, 2, 3], [0, 2], [0, 1, 2], [0, 3]], root: 8}
        , {name: "BB King Blues", frets: [[1, 3], [1, 3], [0, 1, 2], [0, 3], [0, 3], [1, 3]], root: 6}
        //, {name:  "Martino 3 fingers * 4 positions (child variants)", frets: [[],[],[],[],[],[]]}
        //, {name:  "Martino 4 fingers * 3 positions (child variants)", frets: [[],[],[],[],[],[]]}
        //, {name:  "Root 4 Diminished (child variants)", frets: [[],[],[],[],[],[]]}
    ];

//TODO: finish tabbing out martino stuff
//TODO: add a +12 bool for each scale; or maybe, just disregard this and make it an assumption of its usage

/**assign vars**/
var rootNoteIdx = getRandomIdx(noteOps);
var rootNote = noteOps[rootNoteIdx];
var rootChord = rootNote + ' ' + getRandomVal(flavorOps);
var prog = getRandomVal(progOps);
var style = getRandomVal(styleOps);
var feel = getRandomVal(feelOps);
var tempo = getRandomVal(tempoOps);
var youTube = "https://www.youtube.com/results?search_query=" + rootChord + '+' + prog + '+' + style + '+' + "backing";

//scales to use are generated a bit more complexly.
var scales = [];
var tempScaleOp;
var isRepeat;
var scaleCount = 3;
var c = 0;

//create as many scales as specified. ensure no duplicates
while (c < scaleCount)
{
    isRepeat = false;

    //get a random scale
    tempScaleOp = getRandomVal(scaleOps);

    //ensure that it hasn't already been selected
    for (var j = 0; (j < scales.length) && !(isRepeat); j++)
    {
        //alert(tempScaleOp.name + " vs " + scales[j].name); //debug

        if ((tempScaleOp.name) === scales[j.name])
        {
            isRepeat = true;
        }
    }

    //if not a repeat, go ahead and add to the scales list. else do nada and restart, picking again.
    if (!isRepeat)
    {
        scales.push(tempScaleOp);
        c++;
    }
}

/**populate elems**/
elRootChord.textContent += rootChord;
elProg.textContent += prog;
elStyle.textContent += style;
elFeel.textContent += feel;
elTempo.textContent += tempo;
elYouTube.href = youTube;

//populate scale frets
for (var i=0; i < scales.length; i++)
{
    writeScaleTab((i+1), scales[i]);
}