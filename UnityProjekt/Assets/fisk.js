	var windowRect : Rect = Rect ();

	function OnGUI () {
		// Register the window. Notice the 3rd parameter 
		windowRect = GUI.Window (0, windowRect, DoMyWindow, "My Window");
	}

	// Make the contents of the window
	function DoMyWindow (windowID : int) {
		if (GUI.Button (Rect (10,20,100,20), "Hello World"))
			print ("Got a click");
	}