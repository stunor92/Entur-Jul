import React, { useState, useEffect } from 'react';
import { TravelHeader, TravelLeg, LegLine } from '@entur/travel';
import { Heading1, Paragraph } from '@entur/typography';
import './App.css';

function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isChristmasEve, setIsChristmasEve] = useState(false);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const currentYear = now.getFullYear();
      
      // Christmas Eve is December 24th at 00:00:00
      let christmasEve = new Date(currentYear, 11, 24, 0, 0, 0);
      
      // If Christmas Eve has passed this year, count down to next year
      if (now > christmasEve) {
        christmasEve = new Date(currentYear + 1, 11, 24, 0, 0, 0);
      }
      
      // Check if it's Christmas Eve
      if (now.getDate() === 24 && now.getMonth() === 11) {
        setIsChristmasEve(true);
        return;
      }
      
      // Calculate time difference
      const timeDiff = christmasEve - now;
      
      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const getDepartureTime = () => {
    const now = new Date();
    const currentYear = now.getFullYear();
    const christmasEve = new Date(currentYear, 11, 24, 0, 0, 0);
    
    if (now > christmasEve) {
      return new Date(currentYear + 1, 11, 24, 0, 0, 0);
    }
    return christmasEve;
  };

  const formatTime = (date) => {
    return date.toLocaleString('no-NO', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const departureDate = getDepartureTime();

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <Heading1 className="main-title">🎄 Julereisen 2025 🎅</Heading1>
          <Paragraph className="subtitle">
            Polar Express avgår snart til julaften!
          </Paragraph>
        </header>

        <main className="main-content">
          {/* Travel Journey Display */}
          <div className="travel-card">
            <TravelHeader
              from={
                <div className="station">
                  <span className="station-icon">🏢</span>
                  <span className="station-name">Entur Kontor</span>
                </div>
              }
              to={
                <div className="station">
                  <span className="station-icon">🎄</span>
                  <span className="station-name">Julaften</span>
                </div>
              }
              size="large"
            />
            
            <div className="travel-leg-container">
              <div className="leg-content">
                <TravelLeg transport="train" direction="vertical" />
                <div className="train-info">
                  <div className="train-header">
                    <span className="train-icon">🚂</span>
                    <span className="train-name">Polar Express</span>
                  </div>
                  <div className="train-details">
                    <div className="detail-row">
                      <span className="detail-label">Avgang:</span>
                      <span className="detail-value">{formatTime(departureDate)}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Platform:</span>
                      <span className="detail-value">Nordpolen 🎅</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Countdown Display */}
          {!isChristmasEve ? (
            <div className="countdown-card">
              <Heading1 className="countdown-title">
                Nedtelling til avgang
              </Heading1>
              <div className="countdown-display">
                <div className="time-unit">
                  <span className="number">{String(timeLeft.days).padStart(2, '0')}</span>
                  <span className="label">dager</span>
                </div>
                <div className="time-separator">:</div>
                <div className="time-unit">
                  <span className="number">{String(timeLeft.hours).padStart(2, '0')}</span>
                  <span className="label">timer</span>
                </div>
                <div className="time-separator">:</div>
                <div className="time-unit">
                  <span className="number">{String(timeLeft.minutes).padStart(2, '0')}</span>
                  <span className="label">minutter</span>
                </div>
                <div className="time-separator">:</div>
                <div className="time-unit">
                  <span className="number">{String(timeLeft.seconds).padStart(2, '0')}</span>
                  <span className="label">sekunder</span>
                </div>
              </div>
              
              <div className="message">
                {timeLeft.days === 0 && timeLeft.hours < 1 ? (
                  <Paragraph className="urgent-message">
                    🎅 Polar Express avgår snart! Kom deg ombord! 🎄
                  </Paragraph>
                ) : timeLeft.days === 0 ? (
                  <Paragraph className="soon-message">
                    🎁 I dag avgår Polar Express til julaften! 🎁
                  </Paragraph>
                ) : timeLeft.days === 1 ? (
                  <Paragraph className="tomorrow-message">
                    ⭐ Bare én dag til avgang! ⭐
                  </Paragraph>
                ) : (
                  <Paragraph className="normal-message">
                    ❄️ Husk å bestille billett til Polar Express! ❄️
                  </Paragraph>
                )}
              </div>
            </div>
          ) : (
            <div className="christmas-message">
              <Heading1>🎄 God jul! Toget har avgått! 🎅</Heading1>
            </div>
          )}
        </main>

        <footer className="footer">
          <Paragraph>God jul fra Entur! 🎄✨</Paragraph>
        </footer>
      </div>
    </div>
  );
}

export default App;
