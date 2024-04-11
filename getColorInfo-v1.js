if (app.documents.length && app.selection.length >= 1 && app.selection[0].hasOwnProperty('fillColor'))
{
    var msgNoColourSelected = "You need to select a shape with a RGB or CMYK colour fill first.";
    swatch = app.selection[0].fillColor;
    swatchArr = [swatch.colorValue];

    // RGB colour values
    rVal = "R" + Math.round(swatchArr[0][0]);
    gVal = "G" + Math.round(swatchArr[0][1]);
    bVal = "B" + Math.round(swatchArr[0][2]);

    // CMYK colour values
    cVal = "C" + Math.round(swatchArr[0][0]);
    mVal = "M" + Math.round(swatchArr[0][1]);
    yVal = "Y" + Math.round(swatchArr[0][2]);
    kVal = "K" + Math.round(swatchArr[0][3]);
    
    // //converts rgb to hex (from https://stackoverflow.com/questions/10325469/what-is-the-formula-to-convert-a-color-in-cmyk-to-hex)
    // function rgbToHex(r, g, b) {
    // return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    //     function componentToHex(c) {
    //         var hex = c.toString(16);
    //         return hex.length === 1 ? "0" + hex : hex;
    //     }
    // }

    if (swatch instanceof Color && swatch.space == ColorSpace.RGB) {
        var output = (rVal + " " + gVal + " " + bVal);
    } else if (swatch instanceof Color && swatch.space == ColorSpace.CMYK) {
        output = cVal + " " + mVal + " " + yVal + " " + kVal;
    } else {
        alert(msgNoColourSelected);
    }
    var textFrame = app.selection[1]; // Grabs the second object (being the text frame) 
    textFrame.contents += output + "\n"; // Append this content inside the text frame

} else {
    alert(msgNoColourSelected);
}
