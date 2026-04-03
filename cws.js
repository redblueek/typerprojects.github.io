console.log("pass stage 2"); let preasmd = localStorage.getItem("typer/preasm"); preasmd = preasmd.replace("tcm i cws", ""); localStorage.setItem("typer/preasm", preasmd); let powerd = sessionStorage.getItem("typer/cmds"); console.log(powerd); console.log("finished.")
async (data) => {
    location.replace(data.split(' ')[1]);  
    return '<span class=\"green\">Changing...</span>'
}