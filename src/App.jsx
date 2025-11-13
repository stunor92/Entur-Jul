import React, { useState, useEffect } from 'react';
import { TravelHeader, TravelLeg, TravelTag } from '@entur/travel';
import { Heading1, Heading2, Heading3, Paragraph, Label } from '@entur/typography';
import { NavigationCard } from '@entur/layout';
import { PrimaryButton, SecondaryButton } from '@entur/button';
import { 
  TrainIcon, 
  ClockIcon, 
  CalendarIcon, 
  WifiIcon,
  CoffeeIcon,
  ToiletIcon,
  LogoPositiveIcon
} from '@entur/icons';
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
      <div className="entur-header">
        <div className="header-content">
          <LogoPositiveIcon className="entur-logo" size={120} />
          <Heading2 className="header-title">Julereise 2025</Heading2>
        </div>
      </div>

      <div className="container">
        <div className="journey-container">
          {/* Journey Header */}
          <div className="journey-header">
            <TravelHeader
              from={
                <div className="station">
                  <span className="station-name">Entur Kontor</span>
                </div>
              }
              to={
                <div className="station">
                  <span className="station-name">Julaften</span>
                </div>
              }
              size="large"
            />
          </div>

          {/* Main Journey Card */}
          <div className="journey-card">
            <div className="journey-summary">
              <div className="summary-time">
                <div className="time-block">
                  <Heading1 className="departure-time">00:00</Heading1>
                  <Paragraph className="time-label">24. des 2025</Paragraph>
                </div>
                <div className="duration-block">
                  <Paragraph className="duration-label">Reisetid</Paragraph>
                  <div className="countdown-mini">
                    <span className="countdown-number">{String(timeLeft.days).padStart(2, '0')}</span>
                    <span className="countdown-unit">d</span>
                    <span className="countdown-separator">:</span>
                    <span className="countdown-number">{String(timeLeft.hours).padStart(2, '0')}</span>
                    <span className="countdown-unit">t</span>
                    <span className="countdown-separator">:</span>
                    <span className="countdown-number">{String(timeLeft.minutes).padStart(2, '0')}</span>
                    <span className="countdown-unit">m</span>
                  </div>
                </div>
                <div className="time-block">
                  <Heading1 className="arrival-time">00:00</Heading1>
                  <Paragraph className="time-label">24. des 2025</Paragraph>
                </div>
              </div>
            </div>

            {/* Travel Leg Details */}
            <div className="leg-details">
              <div className="leg-timeline">
                <div className="leg-point start-point">
                  <div className="point-marker"></div>
                  <div className="point-info">
                    <Heading3>Entur Kontor</Heading3>
                    <Paragraph className="point-time">
                      <ClockIcon inline size={16} /> 00:00
                    </Paragraph>
                    <Paragraph className="platform">Platform: Julekontoret 🏢</Paragraph>
                  </div>
                </div>

                <div className="leg-line-container">
                  <TravelLeg transport="train" direction="vertical" className="journey-leg" />
                  <div className="leg-info">
                    <TravelTag 
                      transport="train" 
                      details="Polar Express"
                      label="Direktetog"
                      labelPlacement="right"
                    >
                      <div className="train-details-tag">
                        <TrainIcon size={24} />
                        <span className="train-name">Polar Express</span>
                      </div>
                    </TravelTag>
                    
                    <div className="amenities">
                      <div className="amenity-item">
                        <WifiIcon size={20} />
                        <span>WiFi</span>
                      </div>
                      <div className="amenity-item">
                        <CoffeeIcon size={20} />
                        <span>Kafé</span>
                      </div>
                      <div className="amenity-item">
                        <ToiletIcon size={20} />
                        <span>Toalett</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="leg-point end-point">
                  <div className="point-marker"></div>
                  <div className="point-info">
                    <Heading3>Julaften</Heading3>
                    <Paragraph className="point-time">
                      <ClockIcon inline size={16} /> 00:00
                    </Paragraph>
                    <Paragraph className="platform">Platform: Nordpolen 🎅</Paragraph>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Countdown Banner */}
          {!isChristmasEve ? (
            <div className="countdown-banner">
              <div className="countdown-content">
                <CalendarIcon size={32} className="banner-icon" />
                <div className="countdown-info">
                  <Heading2>Nedtelling til avgang</Heading2>
                  <div className="countdown-display">
                    <div className="time-unit">
                      <span className="number">{String(timeLeft.days).padStart(2, '0')}</span>
                      <span className="label">dager</span>
                    </div>
                    <span className="separator">:</span>
                    <div className="time-unit">
                      <span className="number">{String(timeLeft.hours).padStart(2, '0')}</span>
                      <span className="label">timer</span>
                    </div>
                    <span className="separator">:</span>
                    <div className="time-unit">
                      <span className="number">{String(timeLeft.minutes).padStart(2, '0')}</span>
                      <span className="label">minutter</span>
                    </div>
                    <span className="separator">:</span>
                    <div className="time-unit">
                      <span className="number">{String(timeLeft.seconds).padStart(2, '0')}</span>
                      <span className="label">sekunder</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="journey-message">
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
            <div className="christmas-banner">
              <Heading1>🎄 God jul! Toget har avgått! 🎅</Heading1>
            </div>
          )}

          {/* Action Buttons */}
          <div className="action-buttons">
            <PrimaryButton className="book-button">
              Bestill billett til Polar Express
            </PrimaryButton>
            <SecondaryButton className="share-button">
              Del reise
            </SecondaryButton>
          </div>

          {/* Journey Info Cards */}
          <div className="info-cards">
            <NavigationCard
              title="Om Polar Express"
              titleIcon={<TrainIcon size={24} />}
              className="info-card"
            >
              En magisk reise fra Entur kontor til julaften. Nyt komfort, 
              god mat og drikke mens du glir avgårde mot julens under.
            </NavigationCard>
            
            <NavigationCard
              title="Hva du trenger"
              titleIcon={<CalendarIcon size={24} />}
              className="info-card"
            >
              Husk å ta med julekosekort, pakkekort og mange smil! 
              Billetten er gyldig for alle med julestemning.
            </NavigationCard>
          </div>
        </div>

        <footer className="footer">
          <Paragraph>Entur AS · Juletog 2025 · God jul! 🎄✨</Paragraph>
        </footer>
      </div>
    </div>
  );
}

export default App;
