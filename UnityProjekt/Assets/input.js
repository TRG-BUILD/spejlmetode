    var stringToEdit : String;
    var newText : String;
    private var floatvariabel : float;
    
    function OnGUI () {
        // Make a text field that modifies stringToEdit.
        stringToEdit = GUI.TextField (Rect (10, 10, 180, 20), stringToEdit, 10);
        GUI.Label (Rect (80,40,80,20), floatvariabel + "" );
        
        
    if (GUI.Button (Rect (10,40,60,20), "Kontrol")) {
    lol ();
    //afstandskontrol ();
    }   
        
    }
    
    
    
    
    
    
    
    function afstandskontrol () {
    		if (float.TryParse(stringToEdit, floatvariabel)){
    			print ("Yes! The number is " + floatvariabel);
    		}
    		else {
    		print ("That's not a god damn number!");
    		stringToEdit = "Prøv igen!";	
    		}
    }
    
    
function lol () {
//newText = stringToEdit.Split(",").join(".");
stringToEdit = stringToEdit.Replace(",","."); 
}