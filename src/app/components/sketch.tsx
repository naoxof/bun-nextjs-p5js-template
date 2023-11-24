// components/MySketch.js
import p5 from 'p5';

const MySketch = (p: p5) => {
    p.setup = () => {
        // example
        p.createCanvas(p.windowWidth, p.windowHeight)
        p.background(100);
    };

    p.draw = () => {
        // example
        p.fill(255, 0, 0);
        p.ellipse(p.width / 2, p.height / 2, 50, 50);
    }
};

export default MySketch;