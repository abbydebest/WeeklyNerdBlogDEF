const baseURL = 'https://fdnd.directus.app/';
const endpointMe = 'items/person/192';

const myURL = baseURL + endpointMe;

let bag = document.querySelector(".bagContainer");
let minibag = document.querySelector(".charm1 img");
let charm = document.querySelector(".charm2 img");
let stuffMiniBag = document.querySelector(".stuffMiniBag");

let stuff = document.querySelector(".stuff");
let hidden = document.querySelector(".hidden");
let shadow = document.querySelector(".shadow");

console.log(myURL);


// async function getData(url) {
//     const response = await fetch(url);
//     if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     return response;
// }

fetch(myURL)
    .then(response => response.json())
    .then(abbsData => {

        // 🥐🥐🥐 To change to logo text to my Github handle 🥐🥐🥐

        // Get the HTML element in which I want to put the data/my github_handle
        let logo = document.querySelector(".githubLink");

        // Make variable of data github handle and give it the name gitHubHandle
        let gitHubHandle = abbsData.data.github_handle;

        // Check if this works
        console.log(gitHubHandle);

        // Change the text content of the logo/.githubLink class to data from the gitHunHandle = abbydebest
        logo.textContent = gitHubHandle;
        
        // 🎀🎀🎀 To change the img to my github avatar avatar 🎀🎀🎀
        // 🫶🏼 HELP VASILIS

        // Get the HTML element in which I want to put my image
        let myImg = document.createElement("img");

        // Change the source of the created image to data of avatar = https://avatars.githubusercontent.com/u/121155006?v=4
        myImg.src = abbsData.data.avatar;

        // Change the alt text of the created image to "Abby's meMoji"
        myImg.alt = "Abby's meMoji";

        // Add the myImg/created img to the logo element = <a> element with .githubLink class
        logo.appendChild(myImg);

        // Check if this works
        console.log(myImg);

        // Change the source/content of the img/.avatar class to data/img of myAvatar
        // myImg.src = myAvatar;

        // Check if this works
        // console.log(myAvatar);

        // ❤️‍🔥❤️‍🔥❤️‍🔥 To change p text to bio text from API ❤️‍🔥❤️‍🔥❤️‍🔥
        let bio = document.querySelector(".bio");
        let bioText = abbsData.data.bio;
        
        bio.textContent = bioText;

        // 🥡🥡🥡 To change href a with class .githunLink to link from API 🥡🥡🥡
        // SOURCE TO SELECT HREF: https://chatgpt.com/share/67ada448-9f48-8002-b4b2-cd99e857b2f9
        let gitHandle = document.querySelector(".githubLink");
        let gitLink = abbsData.data.website;

        gitHandle.setAttribute("href", gitLink);

    })
    .catch(error => console.error('Fout bij ophalen', error));

// SOURCE: https://pixelscommander.com/javascript/rotate-html-elements-with-mouse/
    new Propeller(bag, {
        inertia: 0.2,
        onDragStop: function() {
            console.log('stop');
            console.log(this.angle)

            if (this.angle < 250 && 100 < this.angle) {
                console.log("storten maar die spulletjes");
                stuff.classList.remove("hidden");
                shadow.classList.remove("hidden");

            }
        },
        onDragStart: function () {
            console.log('start');
        },
        onRotate: function () {
            console.log(this.angle);

            // if (this.angle < 250 && 100 < this.angle) {
            //     console.log("dontShowStuff");
            //     stuff.classList.add("hidden");
            //     stuffMiniBag.classList.add("hidden");
            //     shadow.classList.add("hidden");
            // }
                
            minibag.style.setProperty("--angle", this.angle);
            charm.style.setProperty("--angle", this.angle);
        }
});

    // function showLibraryInfo() {
    //     if (window.libInfoShown !== true) {
    //         var windStuff = document.getElementsByClassName('wind');
    //         var libStuff = document.getElementsByClassName('propeller');
    //         for (var i = 0; i < windStuff.length; i++) {
    //             var obj = windStuff[i];
    //             obj.style.display = 'none';
    //         }
    //         for (var i = 0; i < libStuff.length; i++) {
    //             var obj = libStuff[i];
    //             obj.style.display = 'inline-block';
    //         }
    //         window.libInfoShown = true;
    //     }
    // }
