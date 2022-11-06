//variables

let	clicks 			= 0;	// increment this by one every click
let	auto_clicks 	= 0;	// automatically click once per second
let	cost 			= 1;	// the cost of this should increase exponentially
let	upgrade_speed 	= 0;	// the level of the speed up upgrade
let	click_rate 		= 1000;	// ms between each autoclick
let	interval_auto;			// storing our interval here so we can update it
let	click_increment = 1;	// how many clicks per click

//functions

function update_total_clicks() { //updates the number of clicks
	const e = document.getElementById("total_clicks");
	e.innerHTML = clicks;
}

function buy_something(c, button) {
	if (clicks < c) {
		button.className = 'btn btn-danger';
		setTimeout(() => {
			const e = document.getElementsByClassName("btn-danger")[0];
			e.className = 'btn btn-success';
		}, 1000);
		return false;
	}
	clicks -= c;
	return true;
}

function update_workers() {
	const e2 = document.getElementById("time_period");
	e2.innerHTML = parseFloat(click_rate / 1000.0).toFixed(2);
	clearInterval(interval_auto);
	interval_auto = setInterval(() => {
		clicks += auto_clicks;
		update_total_clicks();
	}, click_rate);
}
//click events
document.getElementById("click").onclick = function() {
	clicks = parseFloat(clicks) + parseFloat(click_increment);
	update_total_clicks(); //updates the text
};
document.getElementById("buy_click").onclick = function() {
	if (!buy_something(cost, this)) return;
	auto_clicks++;
	cost = 2 ** auto_clicks; //new cost
	update_total_clicks();
	const e = document.getElementById("clicks_per_second");
	e.innerHTML = auto_clicks;
	const e2 = document.getElementById("buy_click");
	e2.innerHTML = `Buy for ${cost}`;
	const e2 = document.getElementById("autoclicker_level");
	e2.innerHTML = `lvl  ${auto_clicks}`;
};
document.getElementById("upgrade_speed").onclick = function() {
	const upgrade_cost = (Math.pow(3, upgrade_speed)) * 100;
	if (!buy_something(upgrade_cost, this)) return;
	upgrade_speed++;
	click_rate *= 0.90;
	update_workers();
	const e2 = document.getElementById("upgrade_speed");
	e2.innerHTML = `Buy for ${(3 ** upgrade_speed) * 100}`;
	const e2 = document.getElementById("speed_level");
	e2.innerHTML = `lvl  ${upgrade_speed}`;
};

//Increase Click Increment
document.getElementById("increase_clicks").onclick = function() {
	const upgrade_cost = (3 ** click_increment) * 1;
	if (!buy_something(upgrade_cost, this)) return;
	click_increment++;
	update_workers();
	const e2 = document.getElementById("click_increment");
	e2.innerHTML = `Buy for ${(3 ** click_increment) * 100}`;
};

//Start Autoclickers
update_workers();

function set_cookie(cookie_name, value) {
	const expiry = new Date();
	expiry.setTime(new Date().getTime() + (10 * 60 * 1000));
	const c_value = `${escape(btoa(JSON.stringify(value)))}; expires=${expiry.toUTCString()}`;
	document.cookie = `${cookie_name}=${c_value}`;
}

function get_cookie(cookie_name) {
	let c_value = document.cookie;
	let c_start = c_start == -1 ? c_value.indexOf(`${cookie_name}=`) : c_value.indexOf(` ${cookie_name}=`);
	if (c_start == -1) return false;
	c_start = c_value.indexOf("=", c_start) + 1;
	const c_end = c_end == -1 ? c_value.length : c_value.indexOf(";", c_start);
	c_value = atob(unescape(c_value.substring(c_start, c_end)));
	return JSON.parse(c_value);
}
