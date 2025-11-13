import React, { useState, useEffect } from 'react';
import { TravelHeader, TravelLeg, TravelTag } from '@entur/travel';
import {Heading1, Heading2, Heading3, Paragraph, Label, SubLabel} from '@entur/typography';
import {Contrast, NavigationCard} from '@entur/layout';
import { PrimaryButton, SecondaryButton } from '@entur/button';
import {
  TrainIcon,
  ClockIcon,
  CalendarIcon,
  WifiIcon,
  CoffeeIcon,
  ToiletIcon,
} from '@entur/icons';
import { useContrast } from '@entur/layout';

import './App.css';
import citySvg from './city.svg';
import clock from './clock.svg';

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
        <Contrast className="journey-header">
          <TravelHeader size="large" from="🧑‍💻Kontoret" to="Julaften 🎄"></TravelHeader>
          <img src={citySvg} alt="City skyline" className="city-illustration" />
        </Contrast>

        {/* Countdown Banner */}
        {!isChristmasEve ? (
            <div className="countdown">
                <img src={clock} alt="clock" className="clock" height={100}/>
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
                ):
            <div className="christmas-banner">
                <Heading1>🎄 God jul! Toget har avgått! 🎅</Heading1>
            </div>
        }
        <div className="journey-content">
            <TravelLeg transport="train" direction="vertical" className="journey-leg" />
            <div className="journey-timespan">
                <div className="point-info">
                    <Heading3>Entur Kontor</Heading3>
                    <Paragraph className="point-time">
                        <ClockIcon inline size={16} /> 00:00
                    </Paragraph>
                    <Paragraph className="platform">Platform: Julekontoret 🏢</Paragraph>
                </div>

                <span className="journey-spacer"/>

                <TravelTag alert="none" transport="train" label="Nordpolen" labelPlacement="right">Polarekspressen</TravelTag>
                <div className="leg-info">

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

                <span className="journey-spacer"/>


                <div className="point-info">

                <Heading3>Julaften</Heading3>
                <Paragraph className="point-time">
                    <ClockIcon inline size={16} /> 00:00
                </Paragraph>
                <Paragraph className="platform">Platform: Nordpolen 🎅</Paragraph>
                </div>


            </div>



        </div>
        <div>








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
  );
}

export default App;
