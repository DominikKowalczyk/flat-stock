function calculateSheetNeeds(flatStocks, pieceWidth, pieceHeight, numSheets, testName) {
    // Check for invalid inputs
    if (pieceWidth <=  0 || pieceHeight <=  0 || numSheets <=  0) {
      Logger.log('Invalid input detected for test case: ' + testName);
      return;
    }
  
    // Sort the flat stocks by area in ascending order, prioritizing landscape-oriented stocks
  flatStocks.sort(function(a, b) {
      // Sort primarily by area in ascending order
      var areaComparison = (a.width * a.height) - (b.width * b.height);
      
      // If areas are equal, sort by width in ascending order
      if (areaComparison === 0) {
          var widthComparison = a.width - b.width;
          
          // If widths are equal, sort by height in ascending order
          if (widthComparison === 0) {
              return a.height - b.height;
          }
          
          return widthComparison;
      }
      
      return areaComparison;
  });
  
    // Initialize counters for each flat stock size
    var stockCounts = {};
    flatStocks.forEach(function(stock) {
      stockCounts[stock.width + 'x' + stock.height] =  0;
    });
  
    // Calculate how many of each flat stock size is needed
    for (var i =  0; i < numSheets; i++) {
      // Check if the piece fits into any of the flat stock sizes
      for (var j =  0; j < flatStocks.length; j++) {
        var stock = flatStocks[j];
        if ((pieceWidth <= stock.width && pieceHeight <= stock.height) ||
            (pieceHeight <= stock.width && pieceWidth <= stock.height)) {
          stockCounts[stock.width + 'x' + stock.height]++;
          break; // Move to the next piece since this one is taken care of
        } else if (j === flatStocks.length -  1) {
          // If none of the stock sizes fit, log an error
          Logger.log('The piece is to large to fit in any available stock');
        }
      }
    }
  
    return stockCounts;
  
    /* Output the results to a new sheet named after the test
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = spreadsheet.insertSheet(testName);
    sheet.appendRow(['Flat Stock Size', 'Number of Pieces']);
    for (var size in stockCounts) {
      sheet.appendRow([size, stockCounts[size]]);
    }*/
  }
  