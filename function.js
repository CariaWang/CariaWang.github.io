// bridge
function show_bridge() {
	bridge_char = "0";
	// p1
	bridge = document.getElementById("bridge");
	// bridge.style.color = "black";
	for (var i = 25; i > 0; i--) {
		bridge.innerHTML += '&nbsp;';
	}
	for (var i = 32; i > 0; i--) {
		bridge.innerHTML += "<span class = 'bridge_1'>"+bridge_char+"</span>";
	}
	bridge.innerHTML += '<br />';
	// p2
	for (var i = 18; i > 0; i--) {
		bridge.innerHTML += '&nbsp;';
	}
	for (var i = 4; i > 0; i--) {
		bridge.innerHTML += "<span class = 'bridge_2'>"+bridge_char+"</span>";
	}
	for (var i = 62; i > 0; i--) {
		bridge.innerHTML += '&nbsp;';
	}
	for (var i = 4; i > 0; i--) {
		bridge.innerHTML += "<span class = 'bridge_2'>"+bridge_char+"</span>";
	}
	bridge.innerHTML += '<br />';
	// p3
	for (var i = 10; i > 0; i--) {
		bridge.innerHTML += '&nbsp;';
	}
	for (var i = 4; i > 0; i--) {
		bridge.innerHTML += "<span class = 'bridge_3'>"+bridge_char+"</span>";
	}
	for (var i = 78; i > 0; i--) {
		bridge.innerHTML += '&nbsp;';
	}
	for (var i = 4; i > 0; i--) {
		bridge.innerHTML += "<span class = 'bridge_3'>"+bridge_char+"</span>";
	}
	bridge.innerHTML += '<br />';
	// p4
	for (var i = 4; i > 0; i--) {
		bridge.innerHTML += '&nbsp;';
	}
	for (var i = 4; i > 0; i--) {
		bridge.innerHTML += "<span class = 'bridge_4'>"+bridge_char+"</span>";
	}
	for (var i = 90; i > 0; i--) {
		bridge.innerHTML += '&nbsp;';
	}
	for (var i = 4; i > 0; i--) {
		bridge.innerHTML += "<span class = 'bridge_4'>"+bridge_char+"</span>";
	}
	bridge.innerHTML += '<br />';
	// p5
	for (var i = 4; i > 0; i--) {
		bridge.innerHTML += "<span class = 'bridge_5'>"+bridge_char+"</span>";
	}
	for (var i = 98; i > 0; i--) {
		bridge.innerHTML += '&nbsp;';
	}
	for (var i = 4; i > 0; i--) {
		bridge.innerHTML += "<span class = 'bridge_5'>"+bridge_char+"</span>";
	}
	bridge.innerHTML += '<br />';
}

// moon
function show_moon() {
	moon_char = "5";
	moon = document.getElementById("moon");
	// p1
	for (var i = 7; i > 0; i--) {
		moon.innerHTML += '&nbsp;';
	}
	for (var i = 11; i > 0; i--) {
		moon.innerHTML += "<span class = 'moon_1'>"+moon_char+"</span>";
	}
	moon.innerHTML += '<br />';
	// p2
	for (var i = 4; i > 0; i--) {
		moon.innerHTML += '&nbsp;';
	}
	for (var i = 14; i > 0; i--) {
		moon.innerHTML += "<span class = 'moon_2'>"+moon_char+"</span>";
	}
	moon.innerHTML += '<br />';
	// p3
	for (var i = 2; i > 0; i--) {
		moon.innerHTML += '&nbsp;';
	}
	for (var i = 16; i > 0; i--) {
		moon.innerHTML += "<span class = 'moon_3'>"+moon_char+"</span>";
	}
	moon.innerHTML += '<br />';
	// p4
	for (var i = 18; i > 0; i--) {
		moon.innerHTML += "<span class = 'moon_4'>"+moon_char+"</span>";
	}
	moon.innerHTML += '<br />';
	// p5
	for (var i = 2; i > 0; i--) {
		moon.innerHTML += '&nbsp;';
	}
	for (var i = 16; i > 0; i--) {
		moon.innerHTML += "<span class = 'moon_5'>"+moon_char+"</span>";
	}
	moon.innerHTML += '<br />';
	// p6
	for (var i = 4; i > 0; i--) {
		moon.innerHTML += '&nbsp;';
	}
	for (var i = 14; i > 0; i--) {
		moon.innerHTML += "<span class = 'moon_6'>"+moon_char+"</span>";
	}
	moon.innerHTML += '<br />';
	// p6
	for (var i = 7; i > 0; i--) {
		moon.innerHTML += '&nbsp;';
	}
	for (var i = 11; i > 0; i--) {
		moon.innerHTML += "<span class = 'moon_7'>"+moon_char+"</span>";
	}
	moon.innerHTML += '<br />';
}

// I
function show_I() {
	I_char = "1";
	ii = document.getElementById("I");
	// p1
	for (var i = 1; i <= 28; i++) {
		ii.innerHTML += I_char;
		if ((i < 28) && (i % 4 == 0)) {
			ii.innerHTML += '<br />';
		}
	}
}

//xin
function show_xin() {
	xin_char = "2";
	xin = document.getElementById("xin");
	// p1
	for (var i = 1; i <= 21; i++) {
		if ((i <= 5) || (i>=9 && i<=18)) {
			xin.innerHTML += "&nbsp;";
		}else {
			xin.innerHTML += xin_char;
		}
	}
	xin.innerHTML += "<br />";
	// p2
	for (var i = 1; i <= 18; i++) {
		if ((i <= 2) || (i>=9 && i<=12)) {
			xin.innerHTML += "&nbsp;";
		}else {
			xin.innerHTML += xin_char;
		}
	}
	xin.innerHTML += "<br />";
	// p3
	for (var i = 1; i <= 16; i++) {
		xin.innerHTML += xin_char;
	}
	xin.innerHTML += "<br />";
	// p4
	for (var i = 1; i <= 16; i++) {
		if (i <= 3) {
			xin.innerHTML += "&nbsp;";
		}else{
			xin.innerHTML += xin_char;
		}
	}
	xin.innerHTML += "<br />";
	// p5
	for (var i = 1; i <= 16; i++) {
		if (i <= 9) {
			xin.innerHTML += "&nbsp;";
		}else{
			xin.innerHTML += xin_char;
		}
	}
	xin.innerHTML += "<br />";
	// p6
	for (var i = 1; i <= 16; i++) {
		if (i <= 14) {
			xin.innerHTML += "&nbsp;";
		}else{
			xin.innerHTML += xin_char;
		}
	}
	xin.innerHTML += "<br />";

}

// U
function show_U() {
	U_char = "1";
	u = document.getElementById("U");
	// p1
	for (var i = 1; i <= 5; i++) {
		for (var j = 1; j <= 22; j++) {
			if ((j <= 3) || (j >=20)) {
				u.innerHTML += U_char;
			}
			else{
				u.innerHTML += '&nbsp;';
			}
		}
		u.innerHTML += '<br />';
	}
	// p2
	for (var i = 1; i <= 20; i++) {
		if ((i <= 2) || (i >= 6 && i <= 17)) {
			u.innerHTML += '&nbsp;';
		}
		else{
			u.innerHTML += U_char;
		}
	}
	u.innerHTML += '<br />';
	// p3
	for (var i = 1; i <= 14; i++) {
		if (i <= 6) {
			u.innerHTML += '&nbsp;';
		}
		else{
			u.innerHTML += U_char;
		}
	}
}

// qi
function show_qi() {
	qi_char = "3";
	qi = document.getElementById("qi");
	// p1
	for (var i = 1; i <= 9; i++) {
		if (i<=8) {
			qi.innerHTML += "&nbsp;"
		} else {
			qi.innerHTML += "<span class = 'qi_1'>"+qi_char+"</span>";
		}
	}
	qi.innerHTML += '<br />';
	// p2
	for (var i = 1; i <= 16; i++) {
		if (i<=8 || (i>=10 && i<=15)) {
			qi.innerHTML += "&nbsp;"
		} else {
			qi.innerHTML += "<span class = 'qi_2'>"+qi_char+"</span>";
		}
	}
	qi.innerHTML += '<br />';
	// p3
	for (var i = 1; i <= 12; i++) {
		if (i<=8 || (i>=10 && i<=11)) {
			qi.innerHTML += "&nbsp;"
		} else {
			qi.innerHTML += "<span class = 'qi_3'>"+qi_char+"</span>";
		}
	}
	qi.innerHTML += '<br />';
	// p4
	for (var i = 1; i <= 7; i++) {
		if (i<=2 || i>=7) {
			qi.innerHTML += "<span class = 'qi_4'>"+qi_char+"</span>";
		} else {
			qi.innerHTML += "&nbsp;"
		}
	}
	qi.innerHTML += '<br />';
	// p5
	for (var i = 1; i <= 21; i++) {
		if (i==9 || i==21) {
			qi.innerHTML += "<span class = 'qi_5'>"+qi_char+"</span>";
		} else {
			qi.innerHTML += "&nbsp;"
		}
	}
	qi.innerHTML += '<br />';
	// p6
	for (var i = 1; i <= 14; i++) {
		if (i>=9) {
			qi.innerHTML += "<span class = 'qi_6'>"+qi_char+"</span>";
		} else {
			qi.innerHTML += "&nbsp;"
		}
	}
	qi.innerHTML += '<br />';
}

// xi
function show_xi() {
	xi_char = "3";
	xi = document.getElementById("xi");
	// p1
	for (var i = 1; i <= 8; i++) {
		if (i<=7) {
			xi.innerHTML += "&nbsp;"
		} else {
			xi.innerHTML += "<span class = 'qi_1'>"+xi_char+"</span>";
		}
	}
	xi.innerHTML += '<br />';
	// p2
	for (var i = 1; i <= 10; i++) {
		if (i<=4) {
			xi.innerHTML += "&nbsp;"
		} else {
			xi.innerHTML += "<span class = 'qi_2'>"+xi_char+"</span>";
		}
	}
	xi.innerHTML += '<br />';
	// p3
	for (var i = 1; i <= 12; i++) {
		if (i==1 || i==5 || i==12) {
			xi.innerHTML += "<span class = 'qi_3'>"+xi_char+"</span>";
		} else {
			xi.innerHTML += "&nbsp;"
		}
	}
	xi.innerHTML += '<br />';
	// p4
	for (var i = 1; i <= 11; i++) {
		if (i>=10) {
			xi.innerHTML += "<span class = 'qi_4'>"+xi_char+"</span>";
		} else {
			xi.innerHTML += "&nbsp;"
		}
	}
	xi.innerHTML += '<br />';
	// p5
	for (var i = 1; i <= 6; i++) {
		if (i==6) {
			xi.innerHTML += "<span class = 'qi_5'>"+xi_char+"</span>";
		} else {
			xi.innerHTML += "&nbsp;"
		}
	}
	xi.innerHTML += '<br />';
	// p6
	xi.innerHTML += "<span class = 'qi_6'>"+xi_char+"</span>";
	xi.innerHTML += '<br />';
}

show_moon();
show_bridge();
show_qi();
show_xi();
show_I();
show_xin();
show_U();

bridge_1 = document.getElementsByClassName("bridge_1");
bridge_2 = document.getElementsByClassName("bridge_2");
bridge_3 = document.getElementsByClassName("bridge_3");
bridge_4 = document.getElementsByClassName("bridge_4");
bridge_5 = document.getElementsByClassName("bridge_5");
moon_1 = document.getElementsByClassName("moon_1");
moon_2 = document.getElementsByClassName("moon_2");
moon_3 = document.getElementsByClassName("moon_3");
moon_4 = document.getElementsByClassName("moon_4");
moon_5 = document.getElementsByClassName("moon_5");
moon_6 = document.getElementsByClassName("moon_6");
moon_7 = document.getElementsByClassName("moon_7");
// qi_1 = document.getElementsByClassName("qi_1");
// qi_2 = document.getElementsByClassName("qi_2");
// qi_3 = document.getElementsByClassName("qi_3");
// qi_4 = document.getElementsByClassName("qi_4");
// qi_5 = document.getElementsByClassName("qi_5");
// qi_6 = document.getElementsByClassName("qi_6");
qi = document.getElementById("qi");
xi = document.getElementById("xi");
ii = document.getElementById("I");
xin = document.getElementById("xin");
u = document.getElementById("U");

function change_bridge(color_name, index) {
	for (var i = 0; i < bridge_1.length; i++) {
		bridge_1[i].style.color = color_name[index];
	}
	for (var i = 0; i < bridge_2.length; i++) {
		bridge_2[i].style.color = color_name[(index)%4 + 1];
	}
	for (var i = 0; i < bridge_3.length; i++) {
		bridge_3[i].style.color = color_name[(index+1)%4 + 1];
	}
	for (var i = 0; i < bridge_4.length; i++) {
		bridge_4[i].style.color = color_name[(index+2)%4 + 1];
	}
	for (var i = 0; i < bridge_5.length; i++) {
		bridge_5[i].style.color = color_name[(index+3)%4 + 1];
	}
}

function change_moon(color_name, index) {
	for (var i = 0; i < moon_1.length; i++) {
		moon_1[i].style.color = color_name[(index)%7];
	}
	for (var i = 0; i < moon_2.length; i++) {
		moon_2[i].style.color = color_name[(index+1)%7];
	}
	for (var i = 0; i < moon_3.length; i++) {
		moon_3[i].style.color = color_name[(index+2)%7];
	}
	for (var i = 0; i < moon_4.length; i++) {
		moon_4[i].style.color = color_name[(index+3)%7];
	}
	for (var i = 0; i < moon_5.length; i++) {
		moon_5[i].style.color = color_name[(index+4)%7];
	}
	for (var i = 0; i < moon_6.length; i++) {
		moon_6[i].style.color = color_name[(index+5)%7];
	}
	for (var i = 0; i < moon_7.length; i++) {
		moon_7[i].style.color = color_name[(index+6)%7];
	}
}


// for (var i = 0; i < qi_1.length; i++) {
// 	qi_1[i].style.color = "#FF0000";
// }
// for (var i = 0; i < qi_2.length; i++) {
// 	qi_2[i].style.color = "#FF0000";
// }
// for (var i = 0; i < qi_3.length; i++) {
// 	qi_3[i].style.color = "#FF0000";
// }
// for (var i = 0; i < qi_4.length; i++) {
// 	qi_4[i].style.color = "#FF0000";
// }
// for (var i = 0; i < qi_5.length; i++) {
// 	qi_5[i].style.color = "#FF0000";
// }
// for (var i = 0; i < qi_6.length; i++) {
// 	qi_6[i].style.color = "#FF0000";
// }

var color_moon = ["#F5FFFA", "#FFFFF0", "#FFFAF0", "#FFFAFA", "#FFF5EE", "#FAF0E6", "#FDF5E6"];
var color_bridge = ["#EEEE00", "#FFFF00", "#FFFF33", "#FFFF77", "#FFFFBB"];
var xin_color = ["#FF0088", "#FF0000"];
var moon_index = 0;
var bridge_index = 0;
var xin_index = 0;

function change_color() {
	change_moon(color_moon, moon_index);
	change_bridge(color_bridge, bridge_index);
	qi.style.color = xin_color[xin_index];
	xi.style.color = xin_color[xin_index];
	ii.style.color = xin_color[(xin_index+1)%2];
	u.style.color = xin_color[(xin_index+1)%2];
	xin.style.color = xin_color[(xin_index+1)%2];
	moon_index++;
	bridge_index++;
	xin_index ++;
	if (moon_index==3) {moon_index=0;}
	if (bridge_index == 4) {bridge_index=0;}
	if (xin_index == 2) {xin_index = 0;}
}

// setInterval("change_color();", 1000);

function playPause() {
	myAudio = document.getElementById('aud');
	if(myAudio.paused){
		myAudio.play();
		interval = setInterval("change_color();", 1300);
	}else{
		clearInterval(interval);
		myAudio.pause();
	}
}