function queryString(name) 
{
	var AllVars = window.location.search.substring(1);
	var Vars = AllVars.split("&");
	for (i = 0; i < Vars.length; i++)
	{
		var Var = Vars[i].split("=");
		if (Var[0] == name) return Var[1];
	}
	return "";
}