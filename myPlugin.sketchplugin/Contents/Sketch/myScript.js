@import 'common.js'

var onRun = function(context) {
  
  //reference the Application
  var app = [NSApplication sharedApplication];
  
  //reference the Sketch Document
  var doc = context.document;
  
  //reference all the pages in the document in an array
  var pages = [doc pages];
  alert("Number of Pages", "This document has " + pages.count() + " pages.");
  
  //loop through the pages of the document
  for (var i = 0; i < pages.count(); i++){
    
    //reference each page
    var page = pages[i];
    
    //get the name of the page
    var pageName = [page name];
    
    //show the page name in the console
    log(pageName);
    
  }
  
  //show a message in app
  doc.showMessage("MyPlugin Finished!");
  
  //send an alert message to the application
  alert("Plugin Finished!", "This is a message saying the Plugin is finished.")
  
}