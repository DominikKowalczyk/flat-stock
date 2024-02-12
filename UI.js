function showSidebar() {
    var htmlOutput = HtmlService.createHtmlOutputFromFile('sidebar')
      .setTitle('Sheet Allocation')
      .setWidth(300);
    SpreadsheetApp.getUi().showSidebar(htmlOutput);
  }
  