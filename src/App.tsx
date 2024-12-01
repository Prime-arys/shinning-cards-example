import { Grid2 } from '@mui/material'
import CardBox from './components/CardBox'
import './App.css'
import './style.scss'

function App() {

  const random = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min

  const cardsNumber = random(6, 9);

  // Predefined size combinations that sum to 12
  const sizePatterns = [
    [4, 4, 4],      // Equal thirds
    [6, 6],         // Half and half
    [8, 4],         // Two thirds + one third
    [4, 8],         // One third + two thirds
    [3, 3, 3, 3],   // Quarters
    [9, 3],         // Three quarters + one quarter
    [3, 9],         // One quarter + three quarters
    [6, 3, 3],      // Half + two quarters
    [3, 6, 3],      // One quarter + half + one quarter
    [3, 3, 6],      // Two quarters + half
  ];

  // Create a layout that fills 9 cards with proper spacing
  const generateLayout = () => {
    const layout = [];
    let remaining = cardsNumber;
    
    while (remaining > 0) {
      const pattern = sizePatterns[Math.floor(Math.random() * sizePatterns.length)];
      const toTake = Math.min(pattern.length, remaining);
      layout.push(...pattern.slice(0, toTake));
      remaining -= toTake;
    }
    
    return layout.slice(0, 9);
  };

  const sizeList = generateLayout();

  return (
    <Grid2 container spacing={2} className="portfolio">
      {[...Array(cardsNumber)].map((_, i) => (
        <Grid2 size={sizeList[i]}>
          <CardBox>
            <div className="card">
              <div>
                <h2>Card {i + 1}</h2>
                <p>This is a card component.</p>
              </div>
            </div>
          </CardBox>
        </Grid2>
      ))}
    </Grid2>
  );
}

export default App
