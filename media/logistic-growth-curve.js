function drawLogisticCurve() {
    const canvas = document.getElementById('logisticCurve');
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    canvas.width = 600;
    canvas.height = 400;
    
    // Set background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw axes
    ctx.beginPath();
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 2;
    
    // Y-axis
    ctx.moveTo(50, 350);
    ctx.lineTo(50, 50);
    
    // X-axis
    ctx.moveTo(50, 350);
    ctx.lineTo(550, 350);
    ctx.stroke();
    
    // Add labels
    ctx.font = '14px Arial';
    ctx.fillStyle = '#000000';
    ctx.textAlign = 'center';
    
    // X-axis label
    ctx.fillText('Time', 300, 380);
    
    // Y-axis label
    ctx.save();
    ctx.translate(20, 200);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('Population Size', 0, 0);
    ctx.restore();
    
    // Draw logistic curve
    ctx.beginPath();
    ctx.strokeStyle = '#3498db';
    ctx.lineWidth = 3;
    
    // Parameters for logistic function
    const K = 250; // Carrying capacity
    const r = 0.03; // Growth rate
    const N0 = 10; // Initial population
    
    // Plot points
    for(let x = 0; x < 500; x++) {
        const t = x / 2;
        const N = K / (1 + ((K - N0) / N0) * Math.exp(-r * t));
        const xPos = x + 50;
        const yPos = 350 - N;
        
        if(x === 0) {
            ctx.moveTo(xPos, yPos);
        } else {
            ctx.lineTo(xPos, yPos);
        }
    }
    ctx.stroke();
    
    // Add carrying capacity line
    ctx.beginPath();
    ctx.strokeStyle = '#e74c3c';
    ctx.setLineDash([5, 5]);
    ctx.moveTo(50, 100);
    ctx.lineTo(550, 100);
    ctx.stroke();
    
    // Add carrying capacity label
    ctx.fillStyle = '#e74c3c';
    ctx.textAlign = 'right';
    ctx.fillText('Carrying Capacity (K)', 540, 90);
}

// Call the function when the window loads
window.onload = function() {
    drawLogisticCurve();
};