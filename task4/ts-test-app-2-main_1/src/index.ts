const canvas = document.createElement("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");

if (ctx) {
    
    const getRandomColor = (): string => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    };

    const drawRandomLine = () => {
        const startX = Math.random() * canvas.width;
        const startY = Math.random() * canvas.height;
        const endX = Math.random() * canvas.width;
        const endY = Math.random() * canvas.height;
        const color = getRandomColor();

        ctx.strokeStyle = color;
        ctx.lineWidth = Math.random() * 5 + 1; 
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
    };

    const drawLines = (lineCount: number) => {
        for (let i = 0; i < lineCount; i++) {
            drawRandomLine();
        }
    };


    drawLines(100);
} else {
    console.error("Не удалось получить контекст Canvas.");
}