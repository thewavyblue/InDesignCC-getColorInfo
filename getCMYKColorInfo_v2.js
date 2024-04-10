if (app.documents.length && app.selection.length >= 1 && app.selection[0].hasOwnProperty('fillColor'))
{
    swatch = app.selection[0].fillColor;
    swatchArr = [swatch.colorValue];
    cVal = "C" + Math.round(swatchArr[0][0]);
    mVal = "M" + Math.round(swatchArr[0][1]);
    yVal = "Y" + Math.round(swatchArr[0][2]);
    kVal = "K" + Math.round(swatchArr[0][3]);

    if (swatch instanceof Color && swatch.space == ColorSpace.CMYK) {
        output = "CMYK color: " + cVal + " " + mVal + " " + yVal + " " + kVal;
        // alert (output);
    } else {
        alert ("Not a CMYK colour. Make sure you have checked this colour is using the CMYK space.");
    }

    myPage = app.activeWindow.activePage; // target the current active page
    myTextFrame = myPage.textFrames.add();
    myTextFrame.contents = output;
    myTextFrame.geometricBounds = [0, 0, 10, 100]; // LocationX, LocationY, HeightY, WidthX (dims are in mm)
}
