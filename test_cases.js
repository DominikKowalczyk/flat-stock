// Define test cases
var testCases = [
    { name: "Basic Case - Single Piece", pieceWidth: 1000, pieceHeight: 1500, numSheets: 1 },
    { name: "Multiple Pieces with Perfect Fit", pieceWidth: 1000, pieceHeight: 2000, numSheets: 5 },
    { name: "Multiple Pieces with Different Sizes", pieceWidth: 1200, pieceHeight: 1800, numSheets: 10 },
    { name: "Pieces with Rotations", pieceWidth: 2500, pieceHeight: 1200, numSheets: 3 },
    { name: "Large Number of Sheets", pieceWidth: 2000, pieceHeight: 2500, numSheets: 100 },
    { name: "Edge Case - Pieces Larger than Largest Stock", pieceWidth: 2500, pieceHeight: 4500, numSheets: 2 },
    { name: "Edge Case - Empty Input", pieceWidth: 0, pieceHeight: 0, numSheets: 0 },
    { name: "Edge Case - Negative Input", pieceWidth: -1000, pieceHeight: -1500, numSheets: -5 },
    { name: "Edge Case - Irregular Stock Sizes", pieceWidth: 2000, pieceHeight: 3000, numSheets: 10 },
    { name: "Edge Case - Limited Stock Availability", pieceWidth: 1500, pieceHeight: 2500, numSheets: 5 },
    { name: "Invalid Case - Negative Input", pieceWidth: -1000, pieceHeight: -1500, numSheets: -5 },
    { name: "Invalid Case - Empty Input", pieceWidth: 0, pieceHeight: 0, numSheets: 0 }
  ];
  