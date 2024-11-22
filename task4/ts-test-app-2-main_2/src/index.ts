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

    
    const drawRandomRectangle = () => {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const width = Math.random() * 100 + 20; 
        const height = Math.random() * 100 + 20; 
        const color = getRandomColor();

        ctx.fillStyle = color;
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;

     
        ctx.fillRect(x, y, width, height);
        ctx.strokeRect(x, y, width, height);
    };

    
    const drawRectangles = (count: number) => {
        for (let i = 0; i < count; i++) {
            drawRandomRectangle();
        }
    };

    
    drawRectangles(100);
} else {
    console.error("Не удалось получить контекст Canvas.");
}