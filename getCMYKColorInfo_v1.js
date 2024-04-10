if (app.documents.length && app.selection.length >= 1 && app.selection[0].hasOwnProperty('fillColor'))
{
    swatch = app.selection[0].fillColor;
    swatchArr = [swatch.colorValue];
    cVal = "C" + Math.round(swatchArr[0][0]);
    mVal = "M" + Math.round(swatchArr[0][1]);
    yVal = "Y" + Math.round(swatchArr[0][2]);
    kVal = "K" + Math.round(swatchArr[0][3]);

    if (swatch instanceof Color && swatch.space == ColorSpace.CMYK)

    alert ("CMYK color: " + cVal + " " + mVal + " " + yVal + " " + kVal);

        // var fillColorInfo = swatch.colorValue.join(',');
        // var textFrame = doc.pages[0].textFrames.add();
        // textFrame.geometricBounds = [100, 100, 200, 300]; // Adjust coordinates and size as needed
        
        // // Add the color information to the text frame
        // var textContent = textFrame.insertionPoints[0].contents = fillColorInfo;

    else 

    alert ("Not a CMYK colour. Make sure you have checked this colour is using the CMYK space");
}