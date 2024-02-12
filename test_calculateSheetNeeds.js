function runTests(testCases) {
 
    // Iterate through test cases
    testCases.forEach(function(test) {
      // Run the calculation for the current test case
      var stockCounts = calculateSheetNeeds(flatStocks, test.pieceWidth, test.pieceHeight, test.numSheets);
       // Output the results to the Google Script execution log
    console.log('Results for test case: ' + test.name);
    console.log('Flat Stock Size\t\tNumber of Pieces');
    for (var size in stockCounts) {
      console.log(size + '\t\t' + stockCounts[size]);
    }
    });
  
    
  }
  
  runTests(testCases)