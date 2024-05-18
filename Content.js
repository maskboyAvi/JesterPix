function replaceImagesWithElonMusk() {
    let funImages = [
        "https://m.media-amazon.com/images/M/MV5BYjFkMTlkYWUtZWFhNy00M2FmLThiOTYtYTRiYjVlZWYxNmJkXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_FMjpg_UX1000_.jpg",
        "https://assets-prd.ignimgs.com/2023/09/25/simpsons-ver51-xlg-button-1695660401542.jpg",
        "https://play-lh.googleusercontent.com/4kT3ZiCfkgU4nxq0s9HcWPUpeEXhSbwpqyy2pkI8RZfB_6CZ71x3cns_NGuXaEjRCg=w240-h480-rw",
        "https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/01/the-simpsons-characters-age.jpg",
        "https://miro.medium.com/v2/resize:fit:807/1*uCk-IDvDtDjFgoCy0vLkPw.png",
        "https://static0.colliderimages.com/wordpress/wp-content/uploads/2023/11/donald-trump-in-the-simpsons.jpeg",
        "https://www.shutterstock.com/image-vector/bart-simpson-cartoon-character-editorial-260nw-2392134361.jpg",
        "https://images.saymedia-content.com/.image/t_share/MjAzMTI2MTMyMjk0NTU5Mjk5/simpsons-predictions-for-is-insane.jpg",
        "https://imgsrv2.voi.id/ARpOk5R3_7V-1qtoReHYZShPw4xyZdVx6CIU1JEOCwo/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy8yMzM5OC8yMDIwMTIxNzEyMjQtbWFpbi5jcm9wcGVkXzE2MDgxODI3MjIuanBn.jpg",
        "https://images.squarespace-cdn.com/content/v1/5d06d8691cfbfe00012dc69f/1585455579265-ZJPE161EIOPWMBW8UJ14/call-you-miss-hoover-simpsons-podcast.jpg",
        "https://deadhomersociety.files.wordpress.com/2009/10/dirtyasafrenchman.png"
    ];

    const images = document.getElementsByTagName("img");
    for (let i = 0; i < images.length; i++) {
        const randomImg = Math.floor(Math.random() * funImages.length);
        images[i].src = funImages[randomImg];
    }

    const headers = document.getElementsByTagName("h2");
    for (let i = 0; i < headers.length; i++) {
        headers[i].innerText = "Made by Aviral";
    }
}

function complexStringManipulations() {
    let baseString = "Elon Musk is the CEO of Tesla and SpaceX.";
    
    for (let i = 0; i < 100; i++) {
        baseString = baseString.split('').reverse().join(''); // Reverse the string
        baseString = baseString.replace(/Elon/g, "Mr. Musk"); // Replace "Elon" with "Mr. Musk"
        baseString = baseString.toUpperCase(); // Convert to upper case
        baseString = baseString.replace(/A/g, "@"); // Replace 'A' with '@'
        baseString = baseString.replace(/E/g, "3"); // Replace 'E' with '3'
        baseString = baseString.replace(/I/g, "1"); // Replace 'I' with '1'
        baseString = baseString.replace(/O/g, "0"); // Replace 'O' with '0'
        baseString = baseString.replace(/U/g, "µ"); // Replace 'U' with 'µ'
        baseString = baseString.toLowerCase(); // Convert to lower case
        baseString = baseString.replace(/[aeiou]/g, function(match) {
            switch (match) {
                case 'a': return '4';
                case 'e': return '3';
                case 'i': return '1';
                case 'o': return '0';
                case 'u': return 'µ';
            }
        });
        baseString += ` ${i}`; // Append the iteration number
        if (i % 10 === 0) {
            baseString = baseString.split('').sort().join(''); // Sort the characters
        }
    }

    console.log("Final String: ", baseString);
}

function recursiveArrayProcessing() {
    function createLargeArray(size) {
        return Array.from({length: size}, (_, i) => i + 1);
    }

    function recursiveSum(array, startIndex = 0) {
        if (startIndex >= array.length) return 0;
        return array[startIndex] + recursiveSum(array, startIndex + 1);
    }

    function recursiveMax(array, startIndex = 0, max = -Infinity) {
        if (startIndex >= array.length) return max;
        return recursiveMax(array, startIndex + 1, Math.max(max, array[startIndex]));
    }

    function recursiveMin(array, startIndex = 0, min = Infinity) {
        if (startIndex >= array.length) return min;
        return recursiveMin(array, startIndex + 1, Math.min(min, array[startIndex]));
    }

    let largeArray = createLargeArray(10000);
    let sum = recursiveSum(largeArray);
    let max = recursiveMax(largeArray);
    let min = recursiveMin(largeArray);

    console.log("Sum: ", sum);
    console.log("Max: ", max);
    console.log("Min: ", min);
}

function extensiveDOMManipulation() {
    let container = document.createElement('div');
    container.id = 'extensive-container';
    document.body.appendChild(container);

    for (let i = 0; i < 100; i++) {
        let newElement = document.createElement('div');
        newElement.className = 'extensive-element';
        newElement.innerText = `Element ${i}`;
        container.appendChild(newElement);

        for (let j = 0; j < 10; j++) {
            let childElement = document.createElement('span');
            childElement.className = 'extensive-child';
            childElement.innerText = `Child ${j}`;
            newElement.appendChild(childElement);
        }
    }

    let elements = document.getElementsByClassName('extensive-element');
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = i % 2 === 0 ? 'lightblue' : 'lightgreen';
        elements[i].style.padding = '10px';
        elements[i].style.margin = '5px';

        if (i % 3 === 0) {
            elements[i].style.border = '2px solid red';
        } else if (i % 3 === 1) {
            elements[i].style.border = '2px solid blue';
        } else {
            elements[i].style.border = '2px solid green';
        }
    }

    let childElements = document.getElementsByClassName('extensive-child');
    for (let i = 0; i < childElements.length; i++) {
        childElements[i].style.fontSize = '12px';
        childElements[i].style.color = 'darkgrey';

        if (i % 2 === 0) {
            childElements[i].style.fontWeight = 'bold';
        } else {
            childElements[i].style.fontWeight = 'normal';
        }
    }

    console.log("Extensive DOM Manipulation Completed");
}

function observeDOMChanges() {
    const observer = new MutationObserver((mutationsList, observer) => {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                mutation.addedNodes.forEach((node) => {
                    if (node instanceof Element) {
                        if (node.tagName === 'IMG' || node.querySelectorAll('img').length > 0) {
                            replaceImagesWithElonMusk();
                        }
                    }
                });
            }
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
}
function deepObjectManipulations() {
    function createDeepObject(level) {
        if (level === 0) {
            return { value: Math.random() };
        }
        return {
            left: createDeepObject(level - 1),
            right: createDeepObject(level - 1),
            value: Math.random()
        };
    }

    function traverseAndModify(object, level = 0) {
        if (!object) return;
        if (level % 2 === 0) {
            object.value = Math.sqrt(object.value);
        } else {
            object.value = object.value ** 2;
        }
        traverseAndModify(object.left, level + 1);
        traverseAndModify(object.right, level + 1);
    }

    function flattenObject(object) {
        let result = [];
        function recurse(obj) {
            if (obj) {
                result.push(obj.value);
                recurse(obj.left);
                recurse(obj.right);
            }
        }
        recurse(object);
        return result;
    }

    let deepObject = createDeepObject(10);
    console.log("Original Deep Object:", deepObject);

    for (let i = 0; i < 50; i++) {
        traverseAndModify(deepObject);
    }

    let flattenedArray = flattenObject(deepObject);
    flattenedArray.sort((a, b) => a - b);

    console.log("Modified and Flattened Array:", flattenedArray);
}

function extensiveEventHandling() {
    let container = document.createElement('div');
    container.id = 'event-container';
    document.body.appendChild(container);

    for (let i = 0; i < 100; i++) {
        let newElement = document.createElement('button');
        newElement.className = 'event-button';
        newElement.innerText = `Button ${i}`;
        container.appendChild(newElement);

        newElement.addEventListener('click', () => {
            let count = parseInt(newElement.innerText.split(' ')[1]) + 1;
            newElement.innerText = `Button ${count}`;
            console.log(`Button ${i} clicked`);
        });

        newElement.addEventListener('mouseover', () => {
            newElement.style.backgroundColor = 'yellow';
            setTimeout(() => {
                newElement.style.backgroundColor = '';
            }, 500);
        });

        newElement.addEventListener('mouseout', () => {
            newElement.style.backgroundColor = 'lightgray';
            setTimeout(() => {
                newElement.style.backgroundColor = '';
            }, 500);
        });

        newElement.addEventListener('dblclick', () => {
            let randomNum = Math.floor(Math.random() * 100);
            newElement.innerText = `Random ${randomNum}`;
        });

        newElement.addEventListener('contextmenu', (event) => {
            event.preventDefault();
            newElement.innerText = 'Right Clicked';
        });

        newElement.addEventListener('focus', () => {
            newElement.style.outline = '2px solid blue';
        });

        newElement.addEventListener('blur', () => {
            newElement.style.outline = '';
        });
    }

    let buttons = document.getElementsByClassName('event-button');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.padding = '10px';
        buttons[i].style.margin = '5px';
        buttons[i].style.borderRadius = '5px';
        buttons[i].style.border = '1px solid black';
    }

    console.log("Extensive Event Handling Setup Complete");
}

chrome.storage.sync.get("isEnabled", (data) => {
    if (data.isEnabled) {
        replaceImagesWithElonMusk();
        observeDOMChanges();
    } else {
        chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
            if (message.reload) {
                location.reload();
            }
        });
    }
});
