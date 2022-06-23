var timer = 0.0;
var fart = 0.0;
var afstand = 20.0;
var sum = 0.0;
var sumtemp = 0.0;
var xitemp = 0.0;
var xi2 = 0.0;
var spred = 0.0;
var gnms = 0.0;
var fartmax = 0.0;
var fartmin = 0.0;
var fraktilstr = 0.85;
var fraktiltal = 0.0;
var fraktilned = 0.0;
var fraktilop = 0.0;
var fraktildecimal = 0.0;
var fraktilvaerdi = 0.0;
var startstop:String = "Start";
var counter = false;
var tidarr = new Array ();
var fartarr = new Array ();
var sortarr = new Array ();
var loldata = new Array ();
var xiarr = new Array ();
var hoejde : float = 0.0;
var bredde : float = 0.0;
var values : float[];
var grundoplysninger : String[];
private var go2 : String = "";

	function Update(){
    if (Input.GetKeyDown(KeyCode.Escape))
    Application.Quit();
    
    
    //var date = System.DateTime.Now.ToString("hh:mm:ss:MM/dd/yyyy");
    }

function Start () {
hoejde = Screen.height / 100.0;
bredde = Screen.width / 100.0;
}

function OnGUI () {


	GUI.Box (Rect (bredde*5,bredde*5,bredde * 90,hoejde * 30), "Loader Menu");

	if (GUI.Button (Rect (bredde*10,hoejde*10,bredde*30,hoejde*5), startstop)) {
		counter = !counter;
		if(counter == true) 
		{
			startstop = "Stop";
		}
		else
		{
			timer = Mathf.Round(timer * 100f) / 100f;
			tidarr.Add(timer);
			fart = Mathf.Round((afstand/timer)*360f) / 100f;
			fartarr.Add(fart);
			//sortarr.Add(fart);
			timer = 0;
			startstop = "Start";
			summer ();
		}
	}

	if (GUI.Button (Rect (bredde*14,hoejde*25,bredde*10,hoejde*5), "Save")) {
	save();
	}
	
	if (GUI.Button (Rect (bredde*30,hoejde*25,bredde*10,hoejde*5), "Load")) {
	load();
	}


	GUI.Label (Rect (bredde*22,hoejde*18,bredde*10,hoejde*5), timer.ToString("f1") +" s");
	GUI.Label (Rect (bredde*60,hoejde*10,bredde*25,hoejde*5), "Min: " + fartmin + " km/t");
	GUI.Label (Rect (bredde*60,hoejde*15,bredde*25,hoejde*5), "Ave.: " + gnms + " km/t");
	GUI.Label (Rect (bredde*60,hoejde*20,bredde*25,hoejde*5), "Max: " + fartmax + " km/t");
	GUI.Label (Rect (bredde*60,hoejde*25,bredde*25,hoejde*5), "Spred: " + spred + " km/t");

	var datahoejde = hoejde*32 + tidarr.length * hoejde*5;

 	for(var n = 0; n < tidarr.length; n++)
    {
    GUI.Label (new Rect (bredde*10,datahoejde,bredde*25,hoejde*5), tidarr[n] + " s " + fartarr[n] + " km/t");
    if (GUI.Button (Rect (bredde*40,datahoejde,bredde*20,hoejde*3), "Slet " + n)) {
    tidarr.RemoveAt(n);
    fartarr.RemoveAt(n);
    summer ();
	}
    datahoejde = datahoejde - hoejde*5;
    }

GUI.Label (Rect (bredde*75,hoejde*35,bredde*30,hoejde*5), "Filnavn: ");
go2 = GUI.TextField (Rect(bredde*65,hoejde*40,bredde*30,hoejde*4), go2, 25);

	if (GUI.Button (Rect (bredde*70,hoejde*80,bredde*10,hoejde*5), "Lol")) {
	print(tidarr);
	}

}

function FixedUpdate () {
	if(counter == true){
		timer += Time.deltaTime;
	}
}

function summer () {
if (tidarr.length != 0){
sortarr = new Array (fartarr);
sortarr = sortarr.Sort();
sum = 0;
gnms = 0;
for(var n = 0; n < tidarr.length; n++){
	sumtemp = fartarr[n];
    sum = sum + sumtemp;
    }
gnms = Mathf.Round((sum / tidarr.length) * 100f) / 100f;
fartmin = sortarr[0];
fartmax = sortarr[tidarr.length-1];
spredning ();
fraktil ();
}
else {
fartmin = 0.0;
fartmax = 0.0;
gnms = 0.0;
spred = 0.0;
}
}

function spredning () {
xi2 = 0;
for(var n = 0; n < tidarr.length; n++){
	xitemp = fartarr[n];
	xiarr[n] = xitemp - gnms;
	xi2 = Mathf.Pow(xitemp - gnms, 2) + xi2;
    }	
    spred = Mathf.Round(Mathf.Sqrt(xi2 / tidarr.length) * 10f) / 10f;;
}

function fraktil () {
if (tidarr.length > 1){
fraktiltal = fraktilstr * tidarr.length;
fraktilop = sortarr[Mathf.Floor(fraktiltal)];
fraktilned = sortarr[Mathf.Floor(fraktiltal) - 1];
fraktildecimal = Mathf.Round((fraktiltal - Mathf.Floor(fraktiltal))*100f) / 100f;
fraktilvaerdi = (fraktilop - fraktilned) * fraktildecimal + fraktilned;


}
else{

}
}

function save () {
//var grundoplysninger : String[] = go2.ToBuiltin(String) as String[];
//PlayerPrefsX.SetStringArray ("oplysninger", grundoplysninger);
if (tidarr.length > 0){
var values : float[] = tidarr.ToBuiltin(float) as float[];
PlayerPrefsX.SetFloatArray ("Numbers", values);
tidarr.Clear();
summer();
}
}


function load () {
//var grundoplysninger = new PlayerPrefsX.GetStringArray ("oplysninger");
//if (tidarr.length > 0){
var values = new PlayerPrefsX.GetFloatArray ("Numbers");
tidarr = new Array (values);
//}
}