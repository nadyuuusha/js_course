const generateRandomCoordinate = (max: number): number => {
    return Math.random() * max;
  };
  
  const generateRandomAngle = (): number => {
    return Math.random() * Math.PI / 4;
  };
  
  const drawRay = (
    ctx: CanvasRenderingContext2D,
    startX: number,
    startY: number,
    length: number,
    angle: number
  ): void => {
    const endX = startX + length * Math.cos(angle);
    const endY = startY + length * Math.sin(angle);
  
    ctx.strokeStyle = `hsl(${Math.random() * 360}, 50%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
  };
  
  const drawBurstOfRays = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, numRays: number): void => {
    const startX = 0; 
    const startY = canvas.height / 2; 
  
    for (let i = 0; i < numRays; i++) {
      const length = generateRandomCoordinate(500); 
      const angle = generateRandomAngle(); 
      drawRay(ctx, startX, startY, length, angle);
    }
  };
  
  const setupCanvas = (): void => {
    const canvas = document.getElementById("Canvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d")!;
    const numRays = 300; 
    drawBurstOfRays(ctx, canvas, numRays);
  };
  
  document.addEventListener("DOMContentLoaded", setupCanvas);