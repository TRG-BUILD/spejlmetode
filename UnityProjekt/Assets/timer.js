private var go1 : String = "";
private var go2 : String = "";
private var go3 : String = "";
private var go4 : String = "";
private var go5 : String = "";
var hoejde : float = 0.0;
var bredde : float = 0.0;

var grundoplysninger : String[];



function Update(){
if (Input.GetKeyDown(KeyCode.Escape))
Application.Quit();
}

function Start () {
hoejde = Screen.height / 100.0;
bredde = Screen.width / 100.0;
}




function OnGUI () {
			
GUI.Label (Rect (bredde*7,hoejde*10,bredde*30,hoejde*5), "Udført af: ");
go1 = GUI.TextField (Rect(bredde*39,hoejde*10,bredde*54,hoejde*4), go1, 25);

GUI.Label (Rect (bredde*7,hoejde*15,bredde*30,hoejde*5), "Filnavn: ");
go2 = GUI.TextField (Rect(bredde*39,hoejde*15,bredde*54,hoejde*4), go2, 25);

GUI.Label (Rect (bredde*7,hoejde*20,bredde*30,hoejde*5), "By: ");
go3 = GUI.TextField (Rect(bredde*39,hoejde*20,bredde*54,hoejde*4), go3, 25);

GUI.Label (Rect (bredde*7,hoejde*25,bredde*30,hoejde*5), "Vejnavn: ");
go4 = GUI.TextField (Rect(bredde*39,hoejde*25,bredde*54,hoejde*4), go4, 25);

GUI.Label (Rect (bredde*7,hoejde*30,bredde*30,hoejde*5), "Tid og dato: ");
GUI.Label (Rect (bredde*39,hoejde*30,bredde*54,hoejde*4), go5 + "");

if (GUI.Button (Rect (bredde*10,hoejde*40,bredde*20,hoejde*7), "Save")) {
save ();
}

if (GUI.Button (Rect (bredde*40,hoejde*40,bredde*20,hoejde*7), "Load")) {
load ();
}

if (GUI.Button (Rect (bredde*70,hoejde*40,bredde*20,hoejde*7), "Lol")) {
//noget andet
}


}



function save (){
if (go2 != "" && go2 != " "){
go5 = System.DateTime.Now.ToString("HH:mm:ss - dd/MM/yyyy");
grundoplysninger = new String[5];
grundoplysninger[0] = go1;
grundoplysninger[1] = go2;
grundoplysninger[2] = go3;
grundoplysninger[3] = go4;
grundoplysninger[4] = go5;
print("Fil gemt");
go1 = "";
go2 = "";
go3 = "";
go4 = "";
go5 = "";
PlayerPrefsX.SetStringArray ("oplysninger", grundoplysninger);
}
else{
print("Filnavnet mangler, spasser!");
}
}



function load (){
grundoplysninger = new PlayerPrefsX.GetStringArray ("oplysninger");
go1 = grundoplysninger[0];
go2 = grundoplysninger[1];
go3 = grundoplysninger[2];
go4 = grundoplysninger[3];
go5 = grundoplysninger[4];


}