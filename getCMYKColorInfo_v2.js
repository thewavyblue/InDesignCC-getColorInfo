if (app.documents.length && app.selection.length >= 1 && app.selection[0].hasOwnProperty('fillColor')) {
    swatch = app.selection[0].fillColor;
    swatchArr = [swatch.colorValue];
    cVal = "C" + Math.round(swatchArr[0][0]);
    mVal = "M" + Math.round(swatchArr[0][1]);
    yVal = "Y" + Math.round(swatchArr[0][2]);
    kVal = "K" + Math.round(swatchArr[0][3]);

    if (swatch instanceof Color && swatch.space == ColorSpace.CMYK) {
        output = cVal + " " + mVal + " " + yVal + " " + kVal;
    } else {
        alert ("Not a CMYK colour. Make sure you have checked this colour is using the CMYK space.");
    }

    var myPage = app.activeWindow.activePage; // Target the current active page
    var myTextFrame = myPage.textFrames.add(); // Add a text frame to the page
    myTextFrame.contents = output; // Append this content inside the text frame
    var swatchFrameLocXY = app.selection[0].geometricBounds;
    myTextFrame.geometricBounds = swatchFrameLocXY; // Frame location and dimensions: LocationX, LocationY, HeightY, WidthX
} else {
    alert("You need to select a shape with a colour fill first.");
}
