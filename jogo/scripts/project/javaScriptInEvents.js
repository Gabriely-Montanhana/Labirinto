

const scriptsInEvents = {

	async FolhaDeEventosNivel1_Event3_Act2(runtime, localVars)
	{
		let moeda = runtime.globalVars.Moedas
		moeda --;
		runtime.globalVars.Moedas = moeda;
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
