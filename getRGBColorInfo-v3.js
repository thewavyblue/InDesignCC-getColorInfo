if (app.documents.length && app.selection.length >= 1 && app.selection[0].hasOwnProperty('fillColor'))
{
    swatch = app.selection[0].fillColor;
    swatchArr = [swatch.colorValue];
    rVal = "R" + Math.round(swatchArr[0][0]);
    gVal = "G" + Math.round(swatchArr[0][1]);
    bVal = "B" + Math.round(swatchArr[0][2]);

    if (swatch instanceof Color && swatch.space == ColorSpace.RGB) {
        var output = (rVal + " " + gVal + " " + bVal);
        var textFrame = app.selection[1]; // Grabs the second object (being the text frame)
        textFrame.contents += output + "\n"; // Append this content inside the text frame
    } else {    
        alert ("Not an RGB colour. Make sure you have checked this colour is using the RGB space.");
    }
} else {
    alert("You need to select a shape with a colour fill first.");
}