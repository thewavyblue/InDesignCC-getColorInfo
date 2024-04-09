if (app.documents.length && app.selection.length >= 1 && app.selection[0].hasOwnProperty('fillColor'))
{
    swatch = app.selection[0].fillColor;
    if (swatch instanceof Color && swatch.space == ColorSpace.CMYK)
        alert ("color: "+swatch.colorValue.join(','));

        // var fillColorInfo = swatch.colorValue.join(',');
        // var textFrame = doc.pages[0].textFrames.add();
        // textFrame.geometricBounds = [100, 100, 200, 300]; // Adjust coordinates and size as needed
        
        // // Add the color information to the text frame
        // var textContent = textFrame.insertionPoints[0].contents = fillColorInfo;

    else if (swatch instanceof Gradient)
    {
        list = [];
        for (i=0; i<swatch.gradientStops.length; i++)
            if (swatch.gradientStops[i].stopColor instanceof Color)
                list.push (i+' = '+swatch.gradientStops[i].stopColor.colorValue.join(','));
            else
                list.push (i+' = ?');
        alert ("gradient:\r"+list.join('\r'));
    }
}