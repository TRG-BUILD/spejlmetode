var hoejde : float = 0.0;
var bredde : float = 0.0;
var tab = 0.0;

private var showList = false;
private var listEntry = 0;
private var list : GUIContent[];
 var listStyle : GUIStyle;
private var picked1 = false;
var hej:String = "Undersøgelsestype";

private var go1 : String = "";
private var go2 : String = "";
private var go3 : String = "";
private var go4 : String = "";
private var go5 : String = "";
private var go6 : String = "";
private var go7 : String = "";
private var go8 : String = "";
private var go9 : String = "";
private var go10 : String = "";
private var go11 : String = "";

private var input1  : String = "";
private var input2  : String = "";
private var input3  : String = "";
private var input4  : String = "";
private var input5  : String = "";
private var input6  : String = "";
private var input7  : String = "";
private var picked2 = false;
private var picked3 = false;
private var picked4 = false;
private var showList2 = false;
private var showList3 = false;
private var showList4 = false;
private var list2 : GUIContent[];
private var list3 : GUIContent[];
private var list4 : GUIContent[];
private var listEntry2 = 0;
private var listEntry3 = 0;
private var listEntry4 = 0;
var scrollPosition : Vector2 = Vector2.zero;
var scrollPosition2 : Vector2 = Vector2.zero;
private var input8  : String = "";
private var input9  : String = "";
private var input10  : String = "";



//Variable til inputs
var afstand: float;
var fartgraense: float;
var hastmargin: float;
var fraktilstr: float;
var konfidensniveau: float;
var signifikansniveauchi: float;
var signifikansniveauhyp: float;
var inputkontrolvar = 0.0;
var preantal = 0.0;
var pregnms = 0.0;
var prespred = 0.0;

//Variable til avancerede resultater
private var normalkontrol = 1;

var customGuiStyle : GUISkin;
var icon1 : Texture2D;
var icon2 : Texture2D;
var icon3 : Texture2D;
var icon4 : Texture2D;
			
function Update(){
if (Input.GetKeyDown(KeyCode.Escape))
Application.Quit();
}
    
    
function Start () {
hoejde = Screen.height / 100.0;
bredde = Screen.width / 100.0;

	// Make some content for the popup list
	list = new GUIContent[3];
	list[0] = new GUIContent("Forundersøgelse");
	list[1] = new GUIContent("Efterundersøgelse");
	list[2] = new GUIContent("Generel undersøgelse");
	
	// Liste til konfidesniveau
	list2 = new GUIContent[6];
	list2[0] = new GUIContent("99");
	list2[1] = new GUIContent("98");
	list2[2] = new GUIContent("95");
	list2[3] = new GUIContent("90");
	list2[4] = new GUIContent("80");
	list2[5] = new GUIContent("50");
	
	// Liste til signifikansniveau fordelingstest
	list3 = new GUIContent[6];
	list3[0] = new GUIContent("0.005");
	list3[1] = new GUIContent("0.010");
	list3[2] = new GUIContent("0.025");
	list3[3] = new GUIContent("0.050");
	list3[4] = new GUIContent("0.100");
	list3[5] = new GUIContent("0.250");
	
	// Liste til signifikansniveau hypotesetest
	list4 = new GUIContent[6];
	list4[0] = new GUIContent("0.005");
	list4[1] = new GUIContent("0.010");
	list4[2] = new GUIContent("0.025");
	list4[3] = new GUIContent("0.050");
	list4[4] = new GUIContent("0.100");
	list4[5] = new GUIContent("0.250");
 
	// Make a GUIStyle that has a solid white hover/onHover background to indicate highlighted items
	listStyle = new GUIStyle();
	listStyle.normal.textColor = Color.white;
	var tex = new Texture2D(2, 2);
	var colors = new Color[4];
	for (color in colors) color = Color.white;
	tex.SetPixels(colors);
	tex.Apply();
	listStyle.hover.background = tex;
	listStyle.onHover.background = tex;
	listStyle.padding.left = listStyle.padding.right = listStyle.padding.top = listStyle.padding.bottom = 4;
	listStyle.fontSize = 2.3 * hoejde;
	
	
	//Inputvariable
input3 = "15";
input4 = "85";
input5 = "99";
input6 = "0.05";
input7 = "0.01";
	
}



function OnGUI () {

customGuiStyle.box.fontSize = 3*hoejde;
customGuiStyle.button.fontSize = 2.8*hoejde;
customGuiStyle.label.fontSize = 2.3*hoejde;
customGuiStyle.textField.fontSize = 2.3*hoejde;
customGuiStyle.verticalScrollbar.fixedWidth = 2.8*hoejde;
customGuiStyle.verticalScrollbarThumb.fixedWidth = 2.8*hoejde;
GUI.skin = customGuiStyle;



//Forside
if(tab == 0){ 
GUI.Box (Rect (bredde*20,hoejde*5,bredde * 60,hoejde * 20), "Live speed analysis");

if (GUI.Button (Rect (bredde*25,hoejde*65,bredde*50,hoejde*7), "Foretag ny måling")) {
tab = 1;
}

if (GUI.Button (Rect (bredde*25,hoejde*80,bredde*50,hoejde*7), "Åbn tidligere måling")) {
}

}


//GO
else if(tab == 1){
if (GUI.Button (Rect (0,0,bredde*25,hoejde*10), icon1)) {
}
if (GUI.Button (Rect (bredde*25,0,bredde*25,hoejde*10), icon2)) {
tab = 2;
}
if (GUI.Button (Rect (bredde*50,0,bredde*25,hoejde*10), icon3)) {
inputkontrol ();
if (inputkontrolvar == 7){
tab = 3;
}
}
if (GUI.Button (Rect (bredde*75,0,bredde*25,hoejde*10), icon4)) {
inputkontrol ();
if (inputkontrolvar == 7 && normalkontrol == 1){
tab = 4;
}
}

GUI.Box (Rect (0,hoejde*10,bredde * 100,hoejde * 5), "Grundlæggende oplysninger");
if (GUI.Button (Rect (bredde*84.3,hoejde*10.5,bredde*15,hoejde*4), "Hjælp")) {
tab = 5;
}

GUI.Label (Rect (bredde*7,hoejde*17,bredde*30,hoejde*5), "Type: ");	
			
GUI.Label (Rect (bredde*7,hoejde*22,bredde*30,hoejde*5), "Udført af: ");
go1 = GUI.TextField (Rect(bredde*39,hoejde*22,bredde*54,hoejde*4), go1, 25);

GUI.Label (Rect (bredde*7,hoejde*27,bredde*30,hoejde*5), "Filnavn: ");
go2 = GUI.TextField (Rect(bredde*39,hoejde*27,bredde*54,hoejde*4), go2, 25);

GUI.Label (Rect (bredde*7,hoejde*32,bredde*30,hoejde*5), "By: ");
go3 = GUI.TextField (Rect(bredde*39,hoejde*32,bredde*54,hoejde*4), go3, 25);

GUI.Label (Rect (bredde*7,hoejde*37,bredde*30,hoejde*5), "Vejnavn: ");
go4 = GUI.TextField (Rect(bredde*39,hoejde*37,bredde*54,hoejde*4), go4, 25);

GUI.Label (Rect (bredde*7,hoejde*42,bredde*30,hoejde*5), "Adm. vejnr.: ");
go5 = GUI.TextField (Rect(bredde*39,hoejde*42,bredde*54,hoejde*4), go5, 25);

GUI.Label (Rect (bredde*7,hoejde*47,bredde*35,hoejde*5), "Stationering fra: ");
go6 = GUI.TextField (Rect(bredde*39,hoejde*47,bredde*16,hoejde*4), go6, 25);

GUI.Label (Rect (bredde*61,hoejde*47,bredde*25,hoejde*5), "til: ");
go7 = GUI.TextField (Rect(bredde*77,hoejde*47,bredde*16,hoejde*4), go7, 25);

GUI.Label (Rect (bredde*7,hoejde*55,bredde*30,hoejde*5), "Temperatur: ");
go8 = GUI.TextField (Rect(bredde*39,hoejde*55,bredde*16,hoejde*4), go8, 25);

GUI.Label (Rect (bredde*62,hoejde*55,bredde*30,hoejde*5), "Vind: ");
go9 = GUI.TextField (Rect(bredde*77,hoejde*55,bredde*16,hoejde*4), go9, 25);

GUI.Label (Rect (bredde*7,hoejde*60,bredde*30,hoejde*5), "Vejrforhold: ");
go10 = GUI.TextField (Rect(bredde*39,hoejde*60,bredde*16,hoejde*4), go10, 25);

GUI.Label (Rect (bredde*62,hoejde*60,bredde*30,hoejde*5), "Føre: ");
go11 = GUI.TextField (Rect(bredde*77,hoejde*60,bredde*16,hoejde*4), go11, 25);

if (GUI.Button (Rect (bredde*25,hoejde*90,bredde*50,hoejde*7), "Gem")) {
}
customGuiStyle.button.fontSize = 2.1*hoejde;
if (Popup.List (Rect(bredde*55,hoejde*17,bredde*38,hoejde*4), showList, listEntry, GUIContent(hej), list, listStyle)) {
picked1 = true;
}
if (picked1) {
hej = list[listEntry].text;
}
customGuiStyle.button.fontSize = 2.8*hoejde;

}


//Inputs
else if(tab == 2){
if (GUI.Button (Rect (0,0,bredde*25,hoejde*10), icon1)) {
tab = 1;
}
if (GUI.Button (Rect (bredde*25,0,bredde*25,hoejde*10), icon2)) {
}
if (GUI.Button (Rect (bredde*50,0,bredde*25,hoejde*10), icon3)) {
inputkontrol ();
if (inputkontrolvar == 7){
tab = 3;
}
}
if (GUI.Button (Rect (bredde*75,0,bredde*25,hoejde*10), icon4)) {
inputkontrol ();
if (inputkontrolvar == 7 && normalkontrol == 1){
tab = 4;
}
}

GUI.Box (Rect (0,hoejde*10,bredde * 100,hoejde * 5), "Inputs");
if (GUI.Button (Rect (bredde*84.3,hoejde*10.5,bredde*15,hoejde*4), "Hjælp")) {
tab = 6;
}

//SCROLL begin
scrollPosition = GUI.BeginScrollView (Rect (0,hoejde*17,bredde*100,hoejde*85),
scrollPosition, Rect (0, 0, bredde*95, hoejde*83));

GUI.Label (Rect (bredde*7,hoejde*0,bredde*65,hoejde*5), "Måleafstand [m]: ");
input1 = GUI.TextField (Rect(bredde*75,hoejde*0,bredde*18,hoejde*4), input1, 25);

GUI.Label (Rect (bredde*7,hoejde*5,bredde*65,hoejde*5), "Hastighedsgrænse [km/t]: ");
input2 = GUI.TextField (Rect(bredde*75,hoejde*5,bredde*18,hoejde*4), input2, 25);

GUI.Label (Rect (bredde*7,hoejde*10,bredde*65,hoejde*5), "Overskridelsesmargin [km/t]: ");
input3 = GUI.TextField (Rect(bredde*75,hoejde*10,bredde*18,hoejde*4), input3, 25);

GUI.Label (Rect (bredde*7,hoejde*15,bredde*65,hoejde*5), "Fraktilberegning [%]: ");
input4 = GUI.TextField (Rect(bredde*75,hoejde*15,bredde*18,hoejde*4), input4, 25);

GUI.Label (Rect (bredde*7,hoejde*20,bredde*65,hoejde*5), "Konfidensniveau [%]: ");

GUI.Box (Rect (0,hoejde*37,bredde * 100,hoejde * 5), "Tidligere målinger");
if (GUI.Button (Rect (bredde*25,hoejde*44,bredde*50,hoejde*7), "Hent tidligere datasæt")) {
tab = 9;
}

GUI.Label (Rect (bredde*7,hoejde*53,bredde*65,hoejde*5), "Antal målinger: ");
input8 = GUI.TextField (Rect(bredde*75,hoejde*53,bredde*18,hoejde*4), input8, 25);

GUI.Label (Rect (bredde*7,hoejde*58,bredde*65,hoejde*5), "Middelhastighed [km/t]: ");
input9 = GUI.TextField (Rect(bredde*75,hoejde*58,bredde*18,hoejde*4), input9, 25);

GUI.Label (Rect (bredde*7,hoejde*63,bredde*65,hoejde*5), "Spredning [km/t]: ");
input10 = GUI.TextField (Rect(bredde*75,hoejde*63,bredde*18,hoejde*4), input10, 25);

if (GUI.Button (Rect (bredde*25,hoejde*73,bredde*50,hoejde*7), "Anvend")) {
tidligeredatakontrol ();
}

customGuiStyle.button.fontSize = 2.1*hoejde;
GUI.Label (Rect (bredde*7,hoejde*30,bredde*65,hoejde*5), "Signifikansniveau hypotesetest: ");
	if (Popup.List (Rect(bredde*75,hoejde*30,bredde*18,hoejde*4), showList4, listEntry4, GUIContent(input7), list4, listStyle)) {
		picked4 = true;
	}
	if (picked4) {
		input7 = list4[listEntry4].text;
	}

GUI.Label (Rect (bredde*7,hoejde*25,bredde*65,hoejde*5), "Signifikansniveau fordelingstest: ");
	if (Popup.List (Rect(bredde*75,hoejde*25,bredde*18,hoejde*4), showList3, listEntry3, GUIContent(input6), list3, listStyle)) {
		picked3 = true;
	}
	if (picked3) {
		input6 = list3[listEntry3].text;
	}
	if (Popup.List (Rect(bredde*75,hoejde*20,bredde*18,hoejde*4), showList2, listEntry2, GUIContent(input5), list2, listStyle)) {
		picked2 = true;
	}
	if (picked2) {
		input5 = list2[listEntry2].text;
	}
customGuiStyle.button.fontSize = 2.8*hoejde;
        GUI.EndScrollView ();

}


//Måling
else if(tab == 3){
if (GUI.Button (Rect (0,0,bredde*25,hoejde*10), icon1)) {
tab = 1;
}
if (GUI.Button (Rect (bredde*25,0,bredde*25,hoejde*10), icon2)) {
tab = 2;
}
if (GUI.Button (Rect (bredde*50,0,bredde*25,hoejde*10), icon3)) {
inputkontrol ();
if (inputkontrolvar == 7){
tab = 3;
}
}
if (GUI.Button (Rect (bredde*75,0,bredde*25,hoejde*10), icon4)) {
inputkontrol ();
if (inputkontrolvar == 7 && normalkontrol == 1){
tab = 4;
}
}

GUI.Box (Rect (0,hoejde*10,bredde * 100,hoejde * 5), "Måleresultater");
if (GUI.Button (Rect (bredde*84.3,hoejde*10.5,bredde*15,hoejde*4), "Hjælp")) {
tab = 7;
}

GUI.Label (Rect (bredde*7,hoejde*17,bredde*65,hoejde*5), "Antal målinger: ");
GUI.Label (Rect (bredde*88,hoejde*17,bredde*10,hoejde*5), "stk");

GUI.Label (Rect (bredde*7,hoejde*22,bredde*65,hoejde*5), "Middelhastighed: ");
GUI.Label (Rect (bredde*88,hoejde*22,bredde*10,hoejde*5), "km/t");

GUI.Label (Rect (bredde*7,hoejde*27,bredde*65,hoejde*5), "Maks. hastighed: ");
GUI.Label (Rect (bredde*88,hoejde*27,bredde*10,hoejde*5), "km/t");

GUI.Label (Rect (bredde*7,hoejde*32,bredde*65,hoejde*5), "Min. hastighed: ");
GUI.Label (Rect (bredde*88,hoejde*32,bredde*10,hoejde*5), "km/t");

GUI.Label (Rect (bredde*7,hoejde*37,bredde*65,hoejde*5), "Spredning: ");
GUI.Label (Rect (bredde*88,hoejde*37,bredde*10,hoejde*5), "km/t");

GUI.Label (Rect (bredde*7,hoejde*42,bredde*65,hoejde*5), "Datasæt OK? ");
GUI.Label (Rect (bredde*88,hoejde*42,bredde*10,hoejde*5), "");

GUI.Label (Rect (bredde*7,hoejde*47,bredde*65,hoejde*5), "Seneste måling: ");
GUI.Label (Rect (bredde*88,hoejde*47,bredde*10,hoejde*5), "km/t");

if (GUI.Button (Rect (bredde*7,hoejde*54,bredde*43,hoejde*7), "Se data")) {
tab = 10;
}
if (GUI.Button (Rect (bredde*50,hoejde*54,bredde*43,hoejde*7), "Slet seneste måling")) {
}
customGuiStyle.label.fontSize = 5*hoejde;
GUI.Label (Rect (bredde*45,hoejde*75,bredde*10,hoejde*10), " s");
customGuiStyle.label.fontSize = 2.3*hoejde;
if (GUI.Button (Rect (bredde*7,hoejde*85,bredde*86,hoejde*10), "Start/stop")) {
}

}


//Advanceret
else if(tab == 4){
if (GUI.Button (Rect (0,0,bredde*25,hoejde*10), icon1)) {
tab = 1;
}
if (GUI.Button (Rect (bredde*25,0,bredde*25,hoejde*10), icon2)) {
tab = 2;
}
if (GUI.Button (Rect (bredde*50,0,bredde*25,hoejde*10), icon3)) {
inputkontrol ();
if (inputkontrolvar == 7){
tab = 3;
}
}
if (GUI.Button (Rect (bredde*75,0,bredde*25,hoejde*10), icon4)) {
inputkontrol ();
if (inputkontrolvar == 7 && normalkontrol == 1){
tab = 4;
}
}

GUI.Box (Rect (0,hoejde*10,bredde * 100,hoejde * 5), "Avancerede resultater");
if (GUI.Button (Rect (bredde*84.3,hoejde*10.5,bredde*15,hoejde*4), "Hjælp")) {
tab = 8;
}

scrollPosition2 = GUI.BeginScrollView (Rect (0,hoejde*17,bredde*100,hoejde*83),
scrollPosition2, Rect (0, 0, bredde*95, hoejde*135));

GUI.Box (Rect (bredde * 5,0,bredde * 90,hoejde * 5), "Generelt");

GUI.Label (Rect (bredde*7,hoejde*7,bredde*40,hoejde*5), "Antal målinger: ");
GUI.Label (Rect (bredde*86,hoejde*7,bredde*10,hoejde*5), "stk");

GUI.Label (Rect (bredde*7,hoejde*12,bredde*40,hoejde*5), "Middelhastighed: ");
GUI.Label (Rect (bredde*86,hoejde*12,bredde*10,hoejde*5), "km/t");

GUI.Label (Rect (bredde*7,hoejde*17,bredde*40,hoejde*5), "Maks. hastighed: ");
GUI.Label (Rect (bredde*86,hoejde*17,bredde*10,hoejde*5), "km/t");

GUI.Label (Rect (bredde*7,hoejde*22,bredde*40,hoejde*5), "Min. hastighed]: ");
GUI.Label (Rect (bredde*86,hoejde*22,bredde*10,hoejde*5), "km/t");

GUI.Label (Rect (bredde*7,hoejde*27,bredde*40,hoejde*5), "Spredning: ");
GUI.Label (Rect (bredde*86,hoejde*27,bredde*10,hoejde*5), "km/t");

GUI.Label (Rect (bredde*7,hoejde*32,bredde*40,hoejde*5), "Fraktilhastighed: ");
GUI.Label (Rect (bredde*86,hoejde*32,bredde*10,hoejde*5), "km/t");

GUI.Label (Rect (bredde*7,hoejde*37,bredde*450,hoejde*5), "Andel over hast.grænse + margin: ");
GUI.Label (Rect (bredde*86,hoejde*37,bredde*10,hoejde*5), "%");

GUI.Box (Rect (bredde * 5,hoejde*45,bredde * 90,hoejde * 5), "Middelhastighed");

GUI.Label (Rect (bredde*7,hoejde*52,bredde*40,hoejde*5), "Konfidensniveau: ");
GUI.Label (Rect (bredde*86,hoejde*52,bredde*10,hoejde*5), "%");

GUI.Label (Rect (bredde*7,hoejde*57,bredde*40,hoejde*5), "Fra måling: ");
GUI.Label (Rect (bredde*86,hoejde*57,bredde*10,hoejde*5), "km/t");

GUI.Label (Rect (bredde*7,hoejde*62,bredde*40,hoejde*5), "Populationsminimum: ");
GUI.Label (Rect (bredde*86,hoejde*62,bredde*10,hoejde*5), "km/t");

GUI.Label (Rect (bredde*7,hoejde*67,bredde*40,hoejde*5), "Populationsmaksimum: ");
GUI.Label (Rect (bredde*86,hoejde*67,bredde*10,hoejde*5), "km/t");

GUI.Box (Rect (bredde * 5,hoejde*75,bredde * 90,hoejde * 5), "Forskel mellem middelhastigheder");

GUI.Label (Rect (bredde*7,hoejde*82,bredde*40,hoejde*5), "Konfidensniveau: ");
GUI.Label (Rect (bredde*86,hoejde*82,bredde*10,hoejde*5), "%");

GUI.Label (Rect (bredde*7,hoejde*87,bredde*40,hoejde*5), "Middelforskel: ");
GUI.Label (Rect (bredde*86,hoejde*87,bredde*10,hoejde*5), "km/t");

GUI.Label (Rect (bredde*7,hoejde*92,bredde*40,hoejde*5), "Minimumsforskel: ");
GUI.Label (Rect (bredde*86,hoejde*92,bredde*10,hoejde*5), "km/t");

GUI.Label (Rect (bredde*7,hoejde*97,bredde*40,hoejde*5), "Maximumsforskel: ");
GUI.Label (Rect (bredde*86,hoejde*97,bredde*10,hoejde*5), "km/t");

GUI.Box (Rect (bredde * 5,hoejde*105,bredde * 90,hoejde * 5), "Konklusion");

GUI.Label (Rect (bredde*7,hoejde*112,bredde*40,hoejde*5), "Hastighed er lol.");
GUI.Label (Rect (bredde*7,hoejde*117,bredde*40,hoejde*5), "Hastighed er mere lol.");

if (GUI.Button (Rect (bredde*25,hoejde*125,bredde*50,hoejde*7), "Gem")) {
}

GUI.EndScrollView ();

}

//Hjælp til GO
else if(tab == 5){
GUI.Box (Rect (bredde * 5,hoejde*5,bredde * 90,hoejde * 5), "Hjælp til grundlæggende oplysninger");
GUI.Label (Rect (bredde*7,hoejde*11,bredde*86,hoejde*75), "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nam cursus. Morbi ut mi. Nullam enim leo, egestas id, condimentum at, laoreet mattis, massa. Sed eleifend nonummy diam. Praesent mauris ante, elementum et, bibendum at, posuere sit amet, nibh. Duis tincidunt lectus quis dui viverra vestibulum. Suspendisse vulputate aliquam dui. Nulla elementum dui ut augue. Aliquam vehicula mi at mauris. Maecenas placerat, nisl at consequat rhoncus, sem nunc gravida justo, quis eleifend arcu velit quis lacus. Morbi magna magna, tincidunt a, mattis non, imperdiet vitae, tellus. Sed odio est, auctor ac, sollicitudin in, consequat vitae, orci. Fusce id felis. Vivamus sollicitudin metus eget eros. \n \nPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In posuere felis nec tortor. Pellentesque faucibus. Ut accumsan ultricies elit. Maecenas at justo id velit placerat molestie. Donec dictum lectus non odio. Cras a ante vitae enim iaculis aliquam. Mauris nunc quam, venenatis nec, euismod sit amet, egestas placerat, est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras id elit. Integer quis urna. Ut ante enim, dapibus malesuada, fringilla eu, condimentum quis, tellus. Aenean porttitor eros vel dolor. Donec convallis pede venenatis nibh. Duis quam. Nam eget lacus. Aliquam erat volutpat. Quisque dignissim congue leo. \n \nMauris vel lacus vitae felis vestibulum volutpat. Etiam est nunc, venenatis in, tristique eu, imperdiet ac, nisl. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In iaculis facilisis massa. Etiam eu urna. Sed porta. Suspendisse quam leo, molestie sed, luctus quis, feugiat in, pede. Fusce tellus.");
if (GUI.Button (Rect (bredde*25,hoejde*90,bredde*50,hoejde*7), "Luk hjælp")) {
tab = 1;
}

}

//Hjælp til input
else if(tab == 6){
GUI.Box (Rect (bredde * 5,hoejde*5,bredde * 90,hoejde * 5), "Hjælp til inputs");
GUI.Label (Rect (bredde*7,hoejde*11,bredde*86,hoejde*75), "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nam cursus. Morbi ut mi. Nullam enim leo, egestas id, condimentum at, laoreet mattis, massa. Sed eleifend nonummy diam. Praesent mauris ante, elementum et, bibendum at, posuere sit amet, nibh. Duis tincidunt lectus quis dui viverra vestibulum. Suspendisse vulputate aliquam dui. Nulla elementum dui ut augue. Aliquam vehicula mi at mauris. Maecenas placerat, nisl at consequat rhoncus, sem nunc gravida justo, quis eleifend arcu velit quis lacus. Morbi magna magna, tincidunt a, mattis non, imperdiet vitae, tellus. Sed odio est, auctor ac, sollicitudin in, consequat vitae, orci. Fusce id felis. Vivamus sollicitudin metus eget eros. \n \nPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In posuere felis nec tortor. Pellentesque faucibus. Ut accumsan ultricies elit. Maecenas at justo id velit placerat molestie. Donec dictum lectus non odio. Cras a ante vitae enim iaculis aliquam. Mauris nunc quam, venenatis nec, euismod sit amet, egestas placerat, est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras id elit. Integer quis urna. Ut ante enim, dapibus malesuada, fringilla eu, condimentum quis, tellus. Aenean porttitor eros vel dolor. Donec convallis pede venenatis nibh. Duis quam. Nam eget lacus. Aliquam erat volutpat. Quisque dignissim congue leo. \n \nMauris vel lacus vitae felis vestibulum volutpat. Etiam est nunc, venenatis in, tristique eu, imperdiet ac, nisl. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In iaculis facilisis massa. Etiam eu urna. Sed porta. Suspendisse quam leo, molestie sed, luctus quis, feugiat in, pede. Fusce tellus.");
if (GUI.Button (Rect (bredde*25,hoejde*90,bredde*50,hoejde*7), "Luk hjælp")) {
tab = 2;
}

}

//Hjælp til måling
else if(tab == 7){
GUI.Box (Rect (bredde * 5,hoejde*5,bredde * 90,hoejde * 5), "Hjælp til måleresultater");
GUI.Label (Rect (bredde*7,hoejde*11,bredde*86,hoejde*75), "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nam cursus. Morbi ut mi. Nullam enim leo, egestas id, condimentum at, laoreet mattis, massa. Sed eleifend nonummy diam. Praesent mauris ante, elementum et, bibendum at, posuere sit amet, nibh. Duis tincidunt lectus quis dui viverra vestibulum. Suspendisse vulputate aliquam dui. Nulla elementum dui ut augue. Aliquam vehicula mi at mauris. Maecenas placerat, nisl at consequat rhoncus, sem nunc gravida justo, quis eleifend arcu velit quis lacus. Morbi magna magna, tincidunt a, mattis non, imperdiet vitae, tellus. Sed odio est, auctor ac, sollicitudin in, consequat vitae, orci. Fusce id felis. Vivamus sollicitudin metus eget eros. \n \nPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In posuere felis nec tortor. Pellentesque faucibus. Ut accumsan ultricies elit. Maecenas at justo id velit placerat molestie. Donec dictum lectus non odio. Cras a ante vitae enim iaculis aliquam. Mauris nunc quam, venenatis nec, euismod sit amet, egestas placerat, est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras id elit. Integer quis urna. Ut ante enim, dapibus malesuada, fringilla eu, condimentum quis, tellus. Aenean porttitor eros vel dolor. Donec convallis pede venenatis nibh. Duis quam. Nam eget lacus. Aliquam erat volutpat. Quisque dignissim congue leo. \n \nMauris vel lacus vitae felis vestibulum volutpat. Etiam est nunc, venenatis in, tristique eu, imperdiet ac, nisl. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In iaculis facilisis massa. Etiam eu urna. Sed porta. Suspendisse quam leo, molestie sed, luctus quis, feugiat in, pede. Fusce tellus.");
if (GUI.Button (Rect (bredde*25,hoejde*90,bredde*50,hoejde*7), "Luk hjælp")) {
tab = 3;
}

}

//Hjælp til avan. resultater
else if(tab == 8){
GUI.Box (Rect (bredde * 5,hoejde*5,bredde * 90,hoejde * 5), "Hjælp til avancerede resultater");
GUI.Label (Rect (bredde*7,hoejde*11,bredde*86,hoejde*75), "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nam cursus. Morbi ut mi. Nullam enim leo, egestas id, condimentum at, laoreet mattis, massa. Sed eleifend nonummy diam. Praesent mauris ante, elementum et, bibendum at, posuere sit amet, nibh. Duis tincidunt lectus quis dui viverra vestibulum. Suspendisse vulputate aliquam dui. Nulla elementum dui ut augue. Aliquam vehicula mi at mauris. Maecenas placerat, nisl at consequat rhoncus, sem nunc gravida justo, quis eleifend arcu velit quis lacus. Morbi magna magna, tincidunt a, mattis non, imperdiet vitae, tellus. Sed odio est, auctor ac, sollicitudin in, consequat vitae, orci. Fusce id felis. Vivamus sollicitudin metus eget eros. \n \nPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In posuere felis nec tortor. Pellentesque faucibus. Ut accumsan ultricies elit. Maecenas at justo id velit placerat molestie. Donec dictum lectus non odio. Cras a ante vitae enim iaculis aliquam. Mauris nunc quam, venenatis nec, euismod sit amet, egestas placerat, est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras id elit. Integer quis urna. Ut ante enim, dapibus malesuada, fringilla eu, condimentum quis, tellus. Aenean porttitor eros vel dolor. Donec convallis pede venenatis nibh. Duis quam. Nam eget lacus. Aliquam erat volutpat. Quisque dignissim congue leo. \n \nMauris vel lacus vitae felis vestibulum volutpat. Etiam est nunc, venenatis in, tristique eu, imperdiet ac, nisl. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In iaculis facilisis massa. Etiam eu urna. Sed porta. Suspendisse quam leo, molestie sed, luctus quis, feugiat in, pede. Fusce tellus.");
if (GUI.Button (Rect (bredde*25,hoejde*90,bredde*50,hoejde*7), "Luk hjælp")) {
tab = 4;
}

}

//Tidligere målinger
else if(tab == 9){
GUI.Box (Rect (bredde * 5,hoejde*5,bredde * 90,hoejde * 5), "Tidligere målinger");
if (GUI.Button (Rect (bredde*25,hoejde*90,bredde*50,hoejde*7), "Tilbage")) {
tab = 2;
}

}

//Tidligere målinger
else if(tab == 10){
GUI.Box (Rect (bredde * 5,hoejde*5,bredde * 90,hoejde * 5), "Data");
if (GUI.Button (Rect (bredde*25,hoejde*90,bredde*50,hoejde*7), "Tilbage")) {
tab = 3;
}

}



}



function inputkontrol () {
inputkontrolvar = 0;
if (float.TryParse(input1, afstand)){
inputkontrolvar = inputkontrolvar + 1;
}
else {
input1 = "";
inputkontrolvar = inputkontrolvar - 1;
}
if (float.TryParse(input2, fartgraense)){
inputkontrolvar = inputkontrolvar + 1;
}
else {
input2 = "";
inputkontrolvar = inputkontrolvar - 1;
}
if (float.TryParse(input3, hastmargin)){
inputkontrolvar = inputkontrolvar + 1;
}
else {
input3 = "";
inputkontrolvar = inputkontrolvar - 1;
}
if (float.TryParse(input4, fraktilstr)){
inputkontrolvar = inputkontrolvar + 1;
}
else {
input4 = "";
inputkontrolvar = inputkontrolvar - 1;
}
if (float.TryParse(input5, konfidensniveau)){
inputkontrolvar = inputkontrolvar + 1;
}
else {
inputkontrolvar = inputkontrolvar - 1;
}
if (float.TryParse(input6, signifikansniveauchi)){
inputkontrolvar = inputkontrolvar + 1;
}
else {
inputkontrolvar = inputkontrolvar - 1;
}
if (float.TryParse(input7, signifikansniveauhyp)){
inputkontrolvar = inputkontrolvar + 1;
}
else {
inputkontrolvar = inputkontrolvar - 1;
}
}

    
         
function tidligeredatakontrol (){
if (float.TryParse(input8, preantal)){
}
else{
input8 = "";
}
if (float.TryParse(input9, pregnms)){
}
else{
input9 = "";
}
if (float.TryParse(input10, prespred)){
}
else{
input10 = "";
}
}     

         