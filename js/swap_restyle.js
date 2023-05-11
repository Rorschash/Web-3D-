// JavaScript Document
var counter = 0;
$(document).ready(function() {
	
	selectPage();
	selectModel();

	function selectPage() {

		$('#home').show();
		$('#about').hide();
		$('#models').hide();
		$('#interaction').hide();
		$('#cokeDescription').hide();
		$('#spriteDescription').hide(); 
		$('#pepperDescription').hide(); 


		$('#navHome').click(function(){
			$('#navbarSupportedContent > ul > li >a').removeClass('active');
			$('#navHome').addClass('active');
			$('#home').show();
			$('#about').hide();
			$('#models').hide();
			$('#interaction').hide();
			$('#cokeDescription').hide();
			$('#spriteDescription').hide(); 
			$('#pepperDescription').hide(); 	  
		});

		$('#navAbout').click(function(){
			$('#navbarSupportedContent > ul > li >a').removeClass('active');
			$('#navAbout').addClass('active');
			$('#home').hide();
			$('#about').show();
			$('#models').hide();
			$('#interaction').hide();
			$('#cokeDescription').hide();
			$('#spriteDescription').hide(); 
			$('#pepperDescription').hide(); 	  
		});

		$('#navModels').click(function(){
			$('#navbarSupportedContent > ul > li >a').removeClass('active');
			$('#navModels').addClass('active');
			$('#home').hide();
			$('#about').hide();
			$('#models').show();
			$('#interaction').show(); 
			$('#cokeDescription').show();
			$('#spriteDescription').hide(); 
			$('#pepperDescription').hide(); 
		});
	}

	function selectModel() {

		$('#navCoke').click(function(){
			$('#models > div > div.col-sm-8 > div > div.card-header > ul > li > a').removeClass('active');
			$('#navCoke').addClass('active');

			$('#models > div > div.col-sm-8 > div > div.card-body > div').hide();
			$('#coke').show();

			$('#cokeDescription').show();
			$('#spriteDescription').hide(); 
			$('#pepperDescription').hide(); 

			// setHeadLightBtnStat(arguments[0].target);
			setOnmiBtnStat()
			setHeadlightSwitchStat()

		});

		$('#navSprite').click(function(){
			$('#models > div > div.col-sm-8 > div > div.card-header > ul > li > a').removeClass('active');
			$('#navSprite').addClass('active');

			$('#models > div > div.col-sm-8 > div > div.card-body > div').hide();
			$('#sprite').show();

			$('#cokeDescription').hide();
			$('#spriteDescription').show();
			$('#pepperDescription').hide();  	  	  

			// setHeadLightBtnStat(arguments[0].target);
			setOnmiBtnStat()
			setHeadlightSwitchStat()

		});

		// $('#navSprite-wf').click(function(){
		// 	$('#models > div > div.col-sm-8 > div > div.card-header > ul > li > a').removeClass('active');
		// 	$('#navSprite-wf').addClass('active');

		// 	$('#models > div > div.col-sm-8 > div > div.card-body > div').hide();
		// 	$('#sprite-wf').show();

		// 	$('#cokeDescription').hide();
		// 	$('#spriteDescription').show();
		// 	$('#pepperDescription').hide();  	  	  

		// 	// setHeadLightBtnStat(arguments[0].target);
		// 	setOnmiBtnStat()
		// 	setHeadlightSwitchStat()


		// });

		$('#navPepper').click(function(){
			$('#models > div > div.col-sm-8 > div > div.card-header > ul > li > a').removeClass('active');
			$('#navPepper').addClass('active');

			$('#models > div > div.col-sm-8 > div > div.card-body > div').hide();
			$('#pepper').show();

			$('#cokeDescription').hide();
			$('#spriteDescription').hide(); 
			$('#pepperDescription').show(); 	   

			// setHeadLightBtnStat(arguments[0].target);
			setOnmiBtnStat()
			setHeadlightSwitchStat()

		});
	}

});

function setHeadLightBtnStat(clickedBtn) {
	let headlightBtn = $("#headlightBtn");
	if (isOnOfAttr('model__headlight', 'headlight')) {
		if (!clickedBtn.isEqualNode(headlightBtn[0])) {
			headlightBtn.addClass('active');
		}
		headlightBtn.text("Headlight On");
	} else {
		if (!clickedBtn.isEqualNode(headlightBtn[0])) {
			headlightBtn.removeClass('active');
		}
		headlightBtn.text("Headlight Off");

	}
}

function setHeadlightSwitchStat() {
	let onmiSwitch = $("#headlightSwitch")[0];
	try {
		onmiSwitch.disabled = false;
		onmiSwitch.checked = isOnOfAttr('model__headlight', 'headlight');
	} catch (error) {
		console.log(error)
		onmiSwitch.checked = false
		onmiSwitch.disabled = true;
	}
}

function setOnmiBtnStat() {
	let onmiSwitch = $("#onmiSwitch")[0];
	onmiSwitch.checked = isOnOfAttr('model__Omni003', 'on');
}

function changeLook() {
	counter += 1;
	switch (counter) {
		case 1:
			document.getElementById('bodyColor').style.backgroundColor = 'lightblue';
			document.getElementById('headerColor').style.backgroundColor = '#FF0000';
			document.getElementById('footerColor').style.backgroundColor = '#FF9900';
			break;
		case 2:
			document.getElementById('bodyColor').style.backgroundColor = '#FF6600';
			document.getElementById('headerClor').style.backgroundColor = '#FF9999';
			document.getElementById('footerColor').style.backgroundColor = '#996699';
			break;
		case 3:
			document.getElementById('bodyColor').style.backgroundColor = 'coral';
			document.getElementById('headerColor').style.backgroundColor = 'darkcyan';
			document.getElementById('footerColor').style.backgroundColor = 'darksalmom';
			break;
		case 4:
			counter = 0;
			document.getElementById('bodyColor').style.backgroundColor = 'lightgrey';
			document.getElementById('headerColor').style.backgroundColor = 'chocolate';
			document.getElementById('footerColor').style.backgroundColor = 'dimgrey';
			break;
	}
}

function changeBack() {
	document.getElementById('bodyColor').style.backgroundColor = '#FFFFFF';
	document.getElementById('headerColor').style.backgroundColor = 'rgba(175,0,0,1)';
	document.getElementById('footerColor').style.backgroundColor = 'rgba(175,0,0,1)';
}

