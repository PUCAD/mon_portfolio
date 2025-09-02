let ul=document.createElement("ul");  // Creer un ul

//Ajouter un evenement click
document.getElementById("bouton").addEventListener("click",afficher)

 // Ajouter ul dans div
document.querySelector(".mon_div").appendChild(ul);   

function afficher(){
  let entry=document.getElementById("tache").value; // recuper la tache 

  if (entry!=""){

    //Creation de li
    let li=document.createElement("li");  

    // creation de checkbox
    let cases=document.createElement("input") 
    cases.type="checkbox";  

    // le span pour contenir le texte
    let span = document.createElement("span"); 
    span.textContent = entry;
    span.style.marginLeft = "10px"; // pour aérer un peu
  
    // Le bouton suprimer
     let button_remove=document.createElement("button");
     button_remove.textContent="suprimer";
   
    // Ajouter le les element dans li
    li.appendChild(cases);
    li.appendChild(span);   
    li.appendChild(button_remove); 

    //Ajout du li dans ul 
    ul.appendChild(li);

    document.getElementById("tache").value=""; //Reinitialisation des tache

    //
    cases.addEventListener("change", ()=> {

    if (cases.checked) {

      //barrer texte quand la case est cocher 
        span.style.textDecoration="line-through";

    } else {
        span.style.textDecoration="none";
         
      }
    });   
    
    
// la fonction supression de tache
  button_remove.addEventListener("click",function(){
    ul.removeChild(li);
    });
  };
};

// Fonction de sauvegarde dans localStorage
function sauvegarderTaches() {
  const tasks = [];
  ul.querySelectorAll("li").forEach(li => {
    const texte = li.querySelector("span").textContent;
    const fait = li.querySelector("input").checked;
    tasks.push({ texte, fait });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}