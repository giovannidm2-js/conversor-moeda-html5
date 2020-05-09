export function callback() {
	console.log("Caiu aqui");
	var oResponse = this;
	var sResponseBody = oResponse.responseText;
	var oJSON = JSON.parse(sResponseBody);
	var sReais = oJSON.rates.BRL;
	console.log(sReais);

	// AQUI
	var oUrl = new URL(location.href);
	var sValorOrigem = oUrl.searchParams.get("valor_origem");
	console.log(sValorOrigem);

	document.querySelector("#valor_destino").value = sReais * sValorOrigem;
}

export function chamaAPI() {
	const sURL = "https://api.exchangeratesapi.io/latest";
	var oRequest = new XMLHttpRequest();
	oRequest.addEventListener("load", callback);

	// oRequest.addEventListener("load", function(){ 
	// 	callback(this.responseText);
	// }  );

	oRequest.open("GET", sURL);
	oRequest.send();
	console.log("depois do send");
}