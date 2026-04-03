console.clear(); let preasmd = localStorage.getItem("typer/preasm"); preasmd = preasmd.replace("tcm i cws", ""); localStorage.setItem("typer/preasm", preasmd); let powerd = sessionStorage.getItem("typer/cmds"); console.log(powerd); console.log("finished."); let rmasd = localStorage.getItem("typer/asm"); if (rmasd.includes("say Typer Command Exploit, successfully loaded in ASMM")) { rmasd = rmasd.replace("say Typer Command Exploit, successfully loaded in ASMM", ""); localStorage.setItem("typer/asm", rmasd); if(!sessionStorage.getItem("reloaded")){sessionStorage.setItem("reloaded","true");window.location.reload()}else{sessionStorage.removeItem("reloaded")} } 
async (data) => {
    location.replace(data.split(' ')[1]);  
    return '<span class=\"green\">Changing...</span>'
}