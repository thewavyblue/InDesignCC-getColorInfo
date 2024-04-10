if (app.documents.length && app.selection.length >= 1 && app.selection[0].hasOwnProperty('fillColor'))
{
    swatch = app.selection[0].fillColor;
    swatchArr = [swatch.colorValue];
    rVal = "R" + Math.round(swatchArr[0][0]);
    gVal = "G" + Math.round(swatchArr[0][1]);
    bVal = "B" + Math.round(swatchArr[0][2]);

    if (swatch instanceof Color && swatch.space == ColorSpace.RGB) {
        alert ("RGB color: " + rVal + " " + gVal + " " + bVal);

        // var fillColorInfo = swatch.colorValue.join(',');
        // var textFrame = doc.pages[0].textFrames.add();
        // textFrame.geometricBounds = [100, 100, 200, 300]; // Adjust coordinates and size as needed
        
        // // Add the color information to the text frame
        // var textContent = textFrame.insertionPoints[0].contents = fillColorInfo;

    } else {    
        alert ("Not an RGB colour. Make sure you have checked this colour is using the RGB space.");
    }
}