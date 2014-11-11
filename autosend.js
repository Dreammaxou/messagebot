
var lastId = 0;
window.onload(autosend());

function autosend()
{
	for (var key in data = document.getElementsByClassName("msg"))
	{
		if(parseInt(key) != NaN)
		{
			splitId1=document.getElementById("list_messages").innerHTML.split("id_msg=\"");
			splitId2=splitId1[parseInt(key)+1].split("\">");
			id=splitId2[0];
			if (splitId2[0] >lastId)
			{
				if (document.getElementsByClassName("msg")[key].getElementsByClassName("me")[0]!= undefined)
				{
					document.getElementById("cb_message").value="@"+document.getElementsByClassName("msg")[key].getElementsByClassName("username")[0].innerHTML + " ** Je suis absent pour le moment ! Envoyez moi un message en MP **";
					//go();
					document.getElementById("form_chatbox").submit();
					lastId=splitId2[0];
					document.write(lastId);
				}
			}
		}
	}
	setTimeout("autosend()",1000)
}

/*
function init_xhr()
{
	if (window.XMLHttpRequest) // Firefox
		xhr = new XMLHttpRequest();
	else
	{
		if (window.ActiveXObject) // Internet Explorer
			xhr = new ActiveXObject("Microsoft.XMLHTTP");
		else // XMLHttpRequest non supporté par le navigateur
		{ 
			alert("Votre navigateur ne supporte pas les objets XMLHTTPRequest...");
			return;
		}
	}
	return xhr;
}

function go()
{
	var xhr = init_xhr();
	xhr.onreadystatechange = function () // création du listener
    {
		if (xhr.readyState == 4 && xhr.status == 200)
		{
			
		}
    }
	xhr.open("POST", "http://leveldown.fr/chatbox/post", true);
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	xhr.send("message=" +document.getElementById("cb_message").value+"&room="+document.getElementById("room").value);
}*/
