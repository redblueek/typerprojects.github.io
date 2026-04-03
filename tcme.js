console.log(navigator.userAgent); console.log(localStorage.getItem("typer/pkgs")); console.log("pass 1 stage"); localStorage.setItem("typer/asm", "say Typer Command Exploit, successfully loaded in ASMM"); let allpackages = localStorage.getItem("typer/pkgs"); if(allpackages.includes("cws")) { execute("tcm", "tcm rm cws"); } else { localStorage.setItem("typer/preasm", "tcm i cwss"); if (allpackages.includes("tcme")) { let ap1 = localStorage.getItem("typer/pkgs"); ap1 = ap1.replace("tcme;", ""); } execute("tcm", "tcm rm tcme"); window.location.reload(); } 
async (data) => {
  return "This command should not be executed in the Command Interface. Abort.";
}
