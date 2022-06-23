private var showList = false;
private var listEntry = 0;
private var list : GUIContent[];
private var listStyle : GUIStyle;
private var picked = false;
private var hej = 0;
 
function Start () {
	// Make some content for the popup list
	list = new GUIContent[5];
	list[0] = new GUIContent("10");
	list[1] = new GUIContent("20");
	list[2] = new GUIContent("30");
	list[3] = new GUIContent("40");
	list[4] = new GUIContent("50");
 
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
}
 
function OnGUI () {
	if (Popup.List (Rect(50, 100, 100, 20), showList, listEntry, GUIContent("Click me!"), list, listStyle)) {
		picked = true;
	}
	if (picked) {
		hej = parseInt(list[listEntry].text);
		GUI.Label (Rect(50, 70, 400, 20), "You picked " + list[listEntry].text + "!");
	}
	
	print(hej*2);
}