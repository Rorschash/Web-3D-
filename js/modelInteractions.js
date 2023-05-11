//adapted from example code 'benskitchen.com'

function stopRotation() {
	offAttr('model__TimeSensor001-TIMER', 'enabled');
}

function animateModel() {
	toggleAttr('model__TimeSensor001-TIMER', 'enabled');
}

function toggleAttr(id, attr) {
	let dom = document.querySelector(`#${getIdOf3d()} #${id}`);
	dom.setAttribute(attr, dom.getAttribute(attr) == 'false');
}

function onAttr(id, attr) {
	let dom = document.querySelector(`#${getIdOf3d()} #${id}`);
	if (dom) {
		dom.setAttribute(attr, 'true');
	}
}

function offAttr(id, attr) {
	let dom = document.querySelector(`#${getIdOf3d()} #${id}`);
	if (dom) {
		dom.setAttribute(attr, 'false');
	}
}

function isOnOfAttr(id, attr) {
	let dom = document.querySelector(`#${getIdOf3d()} #${id}`);
	if (dom) {
		return dom.getAttribute(attr) == 'true'
	}{
		throw new Error('No this dom')
	}
}

function fullScreenX3d() {
	let x3d = document.querySelector(`#${getShowedModelId()} > div.model3D > x3d`);
	if (x3d) {
		x3d.requestFullscreen();
	}
}

function toggleRender() {
	let x3d = document.querySelector(`#${getShowedModelId()} > div.model3D > x3d`);
	if (x3d) {
		x3d.runtime.togglePoints(true);
		x3d.runtime.togglePoints(true);
	}
}

function wireframe() {
	let x3d = document.querySelector(`#${getShowedModelId()} > div.model3D > x3d`);
	while (x3d.runtime.togglePoints(true) != 2) {
		
	}
}

function vertexForX3d() {
	let x3d = document.querySelector(`#${getShowedModelId()} > div.model3D > x3d`);
	while (x3d.runtime.togglePoints() != 1) {
		
	}
}

function polygon() {
	let x3d = document.querySelector(`#${getShowedModelId()} > div.model3D > x3d`);
	while (x3d.runtime.togglePoints() != 0) {
		
	}
}

function nextView() {
	let x3d = document.querySelector(`#${getShowedModelId()} > div.model3D > x3d`);
	if (x3d) {
		x3d.runtime.nextView();
	}
}

function prevView() {
	let x3d = document.querySelector(`#${getShowedModelId()} > div.model3D > x3d`);
	if (x3d) {
		x3d.runtime.prevView();
	}
}

function zoomX3d(zoomStep) {
	let x3d = document.querySelector(`#${getShowedModelId()} > div.model3D > x3d`);
	if (x3d) {
		x3d.runtime.zoom(zoomStep);
	}
}

function resetZoomX3d() {
	let x3d = document.querySelector(`#${getShowedModelId()} > div.model3D > x3d`);
	if (x3d) {
		x3d.runtime.fitAll();
		// x3d.runtime.showAll();
	}
}

function headlight() {
	toggleAttr('model__headlight', 'headlight');
	// setHeadLightBtnStat(arguments[0]);
}

function cameraFront() {
	onAttr('model__CameraFront','bind');
}

function cameraBack() {
	onAttr('model__CameraBack','bind');
}

function cameraLeft() {
	onAttr('model__CameraLeft','bind');
}

function cameraRight() {
	onAttr('model__CameraRight','bind');
}

function cameraTop() {
	onAttr('model__CameraTop','bind');
}

function cameraBottom() {
	onAttr('model__CameraBottom','bind');
}

function cameraOff() {
	let idOf3d = getIdOf3d();
	document.querySelector(`#${idOf3d} #model__CameraBottom`).setAttribute('bind', 'false');
	document.querySelector(`#${idOf3d} #model__CameraTop`).setAttribute('bind', 'false');
	document.querySelector(`#${idOf3d} #model__CameraRight`).setAttribute('bind', 'false');
	document.querySelector(`#${idOf3d} #model__CameraLeft`).setAttribute('bind', 'false');
	document.querySelector(`#${idOf3d} #model__CameraBack`).setAttribute('bind', 'false');
	document.querySelector(`#${idOf3d} #model__CameraFront`).setAttribute('bind', 'false');

	let x3d = document.querySelector(`#${getShowedModelId()} > div.model3D > x3d`);
	if (x3d) {
		x3d.runtime.resetView()
		// x3d.runtime.showAll();
	}
}

function getIdOf3d() {
	let showedId = getShowedModelId();
	return `${showedId} > div.model3D > x3d > scene > inline >`;
}

function getShowedModelId() {
	return document.querySelector("#models > div > div.col-sm-8 > div > div.card-header > ul a.active").id.toLowerCase().slice(3);
}

function cameraX() {
	onAttr('model__CameraX','bind');
}

function RotX() {
	cameraX();
	onAttr('model__TimeSensor001-TIMER', 'enabled');
}
function RotY() {
	cameraTop();
	onAttr('model__TimeSensor001-TIMER', 'enabled');
}
function RotZ() {
	cameraFront();
	onAttr('model__TimeSensor001-TIMER', 'enabled');
}

function OnmiLight() {

	toggleAttr('model__Omni003', 'on');
	toggleAttr('model__Omni004', 'on');
	toggleAttr('model__Omni005', 'on');
	toggleAttr('model__Omni006', 'on');

}

function defaultLight() {
	onAttr('model__headlight', 'headlight');
	// setHeadLightBtnStat(arguments[0]);
	setHeadlightSwitchStat();

	onAttr('model__Omni003', 'on');
	onAttr('model__Omni004', 'on');
	onAttr('model__Omni005', 'on');
	onAttr('model__Omni006', 'on');
	setOnmiBtnStat()
}
