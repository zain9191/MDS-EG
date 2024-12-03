document.addEventListener('DOMContentLoaded', () => {
    const dice = document.getElementById('dice');
    const rollButton = document.getElementById('rollButton');

    const categories = [
        {
            name: 'Social Media Usage',
            color: '#D02F37',  // ROUGE
            url: 'levels.html?subject=Social%20Media%20Usage&color=D02F37'
        },
        {
            name: 'Online Privacy',
            color: '#67B8CA',  // BLEU
            url: 'levels.html?subject=Online%20Privacy&color=67B8CA'
        },
        {
            name: 'Cybersecurity',
            color: '#4A9E4B',  // VERT
            url: 'levels.html?subject=Cybersecurity&color=4A9E4B'
        },
        {
            name: 'Internet History',
            color: '#F9DE52',  // JAUNE
            url: 'levels.html?subject=Internet%20History&color=F9DE52'
        },
        {
            name: 'E-commerce',
            color: '#E9B54F',  // ORANGE
            url: 'levels.html?subject=E-commerce&color=E9B54F'
        },
        {
            name: 'Internet Technologies',
            color: '#1F4986',  // BLEU FONCE
            url: 'levels.html?subject=Internet%20Technologies&color=1F4986'
        }
    ];

    rollButton.addEventListener('click', rollDice);

    function rollDice() {
        // Disable the button temporarily
        rollButton.disabled = true;

        // Generate random rotations
        const randX = getRandomInt(4, 16) * 90;
        const randY = getRandomInt(4, 16) * 90;

        // Apply the rotation to the dice
        dice.style.transform = `rotateX(${randX}deg) rotateY(${randY}deg)`;

        // Determine which face is on top after rotation
        const result = determineFace(randX, randY);

        // Wait for the animation to finish and add extra delay
        setTimeout(() => {
            // Redirect to the selected category's level page
            window.location.href = categories[result - 1].url;
        }, 2000); // 1 second for animation + 1 second extra delay
    }

    function getRandomInt(min, max) {
        // Returns a random integer between min (inclusive) and max (inclusive)
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function determineFace(rotX, rotY) {
        // Normalize rotations
        const x = rotX % 360;
        const y = rotY % 360;

        // Logic to determine which face is on top based on rotations
        if ((x === 0 || x === 360) && (y === 0 || y === 360)) return 1;
        if ((x === 0 || x === 360) && y === 90) return 4;
        if ((x === 0 || x === 360) && y === 180) return 3;
        if ((x === 0 || x === 360) && y === 270) return 2;

        if (x === 90) return 6;
        if (x === 270) return 5;

        // Default to face one if logic fails
        return 1;
    }
});
