 let intervalId;

        function getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        function changeColor() {
            const elements = document.querySelectorAll('*');
            elements.forEach(function (element) {
                element.style.color = getRandomColor();
            });
        }

        // Start changing color automatically when the page loads
        window.onload = function() {
            intervalId = setInterval(changeColor, 1000); // Change color every second
        };
