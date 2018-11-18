/*********************************************
 *  Author:         Joe Kirkham
 *  Date Created:   2018/09/19
 *  Description:    Custom functions for Jamerator.
 *
 *                  See Git change diffs and commit comments for an update log.
 *********************************************/

function getRandomIdx(arr)
/*
    getRandomIdx() returns a randomly-selected index in an array passed in ar
    Assumption: arg1 'arr' is an array. Returns nothing otherwise.
*/
{
    return (Math.floor((Math.random() * ((arr.length - 1) + 1))));
}

function getRandomVal(arr)
/*
    Returns the contents of a randomly-selected index in the array passed in arg
    Assumption: arg1 'arr' is an array. Just returns nothing otherwise.
*/
{
    return arr[getRandomIdx(arr)];
}

function writeScaleTab(ordinal, scale)
/*
    Sets the contents of a scale tab block to contain the elements of the scale it is passed.
    arg1=scale order n, arg2=scale object
*/
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

function setScaleHeader(ordinal, name)
/*
    setScaleHeader() sets the header elem for a scale to the name of the scale.
    arg1=scale n, arg2=scale name
*/
{
    //find the appropriate element by id
    var idStr = "scaleTabHeader" + ordinal;
    var elem = document.getElementById(idStr);

    //edit the text
    elem.textContent = name;
}

function setFret(ordinal, s, n, val)
/*
    setFret() sets the contents of a fret div element to the value in val.
    arg1=scale order n, arg2=string n, arg3=note n, arg4=val to be inserted
*/
{
    //find the appropriate elem by id
    var idStr = ordinal + "s" + s + "n" + n;
    var elem = document.getElementById(idStr);

    //edit the text
    elem.textContent = val;
}
