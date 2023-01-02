let inputText = document.querySelector(".get-repos input"),
    button = document.querySelector(".get-button"),
    showData = document.querySelector(".show-data");


button.onclick = function(){
    if (inputText.value == "") {
        showData.innerHTML = "Please Enter Repo Name"  
    } else{
        
        fetch(`https://api.github.com/users/${inputText.value}/repos`)
  .then((response) => response.json())
  .then((data) =>{ 
    showData.innerHTML = ""
    data.forEach((value) => {
        let repoName = document.createElement("div"),
            repoText = document.createTextNode(value.name)
        repoName.appendChild(repoText)
        showData.appendChild(repoName)
        let link = document.createElement("a"),
            linkText = document.createTextNode("Visit")
        link.appendChild(linkText)
        link.href = `https://github.com/${inputText.value}/${value.name}`
        link.setAttribute("target","_blank")
         repoName.appendChild(link)
        let stars = document.createElement("span"),
            starsCount = document.createTextNode(value.stargazers_count)
        stars.appendChild(starsCount)
        repoName.appendChild(stars)
    repoName.className = "details"

    })
    



    });

    }

}