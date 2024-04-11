if (app.documents.length && app.selection.length >= 1 && app.selection[0].hasOwnProperty('fillColor')) {
    swatch = app.selection[0].fillColor;
    swatchArr = [swatch.colorValue];
    cVal = "C" + Math.round(swatchArr[0][0]);
    mVal = "M" + Math.round(swatchArr[0][1]);
    yVal = "Y" + Math.round(swatchArr[0][2]);
    kVal = "K" + Math.round(swatchArr[0][3]);

    if (swatch instanceof Color && swatch.space == ColorSpace.CMYK) {
        output = cVal + " " + mVal + " " + yVal + " " + kVal;
        var textFrame = app.selection[1]; // Grabs the second object (being the text frame) 
        textFrame.contents += output + "\n"; // Append this content inside the text frame
    } else {
        alert ("Not a CMYK colour. Make sure you have checked this colour is using the CMYK space.");
    }
} else {
    alert("You need to select a shape with a colour fill first.");
}
