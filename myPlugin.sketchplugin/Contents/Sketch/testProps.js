var onRun = function(context) {
	var doc = context.document;
	var selection = context.selection;

	if(selection.count() == 0) {
		doc.showMessage("Please select something.");
	} else {
		for(var i = 0; i < selection.count(); i++) {
			var layer = selection[i];
			var layerClass = layer.class();
			var layerFrame = layer.frame();
			var layerStyle = layer.style();
			var layerName = layer.name();
			var layerIsVisible = layer.isVisible();
			var layerIsLocked = layer.isLocked();
			var layerIsFlippedHorizontal = layer.isFlippedHorizontal();
			var layerIsVertical = layer.isFlippedVertical();
			var layerRotation = layer.rotation();
			var layerParent = layer.parentGroup();
			var layerIsSelected = layer.isSelected();
			var layerAbsoluteRect = layer.absoluteRect();
			var layerUserInfo = layer.userInfo();
			var layerCSSAttributeString = layer.CSSAttributeString();
			var layerCSSAttributes = layer.CSSAttributes();
			log('layername: ' + layerName);
			log('layerclass: ' + layerClass);
		}
	}
};