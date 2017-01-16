@import 'common.js'

var onRun = function(context) {
	//reference the sketch document
	var doc = context.document;
	//reference the pages array in the document
	var pages = [doc pages];

	var selection = context.selection;

	if (selection.count() == 0) {
		doc.showMessage('Please select an artboard');
	}
	else {
		var file_path = selectFolder();

		//export all the pngs to the folder
		exportAllSymbols(doc, selection, file_path);

		//if user doesn't press cancel, alert that the export is done
		if(file_path != undefined){
			alert("Artboards Exported!", "Artboards exported to : " + file_path);
		}

		var compress = compressFiles(file_path);
	}
}

function selectFolder() {
  //open a window to select a folder to save to
  var panel = [NSOpenPanel openPanel];
  [panel setCanChooseDirectories:true];
  [panel setCanCreateDirectories:true];

  //checks if user clicks open in window
  var clicked = [panel runModal];
  if (clicked == NSFileHandlingPanelOKButton) {

    var isDirectory = true;
    var firstURL = [[panel URLs] objectAtIndex:0];
    var unformattedURL = [NSString stringWithFormat:@"%@", firstURL];

    //makes sure spaces aren't formatted to %20
    var file_path = [unformattedURL stringByRemovingPercentEncoding];

    //removes file:// from path
    if (0 === file_path.indexOf("file://")) {
     file_path = file_path.substring(7);
     return file_path;
   }
 }
}

function exportAllSymbols(doc, selection, file_path){
  //loop through the pages array
  for (var i = 0; i < selection.count(); i++){
   artboard = selection[i];
   artboardName = artboard.name();
   doc.saveArtboardOrSlice_toFile(artboard,file_path+"/"+artboardName+".svg");
 }
}

function compressFiles(file_path) {
  var task = NSTask.alloc().init();
  task.setLaunchPath("/usr/bin/zip");
  task.setArguments(['-rXj', file_path + 'archive.zip', file_path]);  
  var outputPipe = [NSPipe pipe];
  [task setStandardOutput:outputPipe];
  task.launch();
  var responseData = [[outputPipe fileHandleForReading] readDataToEndOfFile];
  var responseString = [[[NSString alloc] initWithData:responseData encoding:NSUTF8StringEncoding]];
  return responseString;
}

