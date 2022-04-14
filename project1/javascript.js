function creatediv()
{
    document.getElementById("box").style.width = document.getElementById("width").value+"px";
    document.getElementById("box").style.height = document.getElementById("height").value+"px";
    document.getElementById("box").style.borderWidth = document.getElementById("edthick").value;
    document.getElementById("box").style.borderStyle = document.getElementById("edgetype").value;
    document.getElementById("box").style.borderColor = document.getElementById("edgecolor").value;
    document.getElementById("box").style.backgroundColor = document.getElementById("bgcolor").value;
    document.getElementById("box").style.borderRadius = document.getElementById("ovality").value;
}