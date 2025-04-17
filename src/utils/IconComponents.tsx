import React from 'react';
import * as FaIcons from 'react-icons/fa';

// Create wrapper components for icons
export const ArrowRightIcon: React.FC = () => {
  return (
    <span className="icon-wrapper">
      {React.createElement(FaIcons.FaArrowRight as React.ComponentType)}
    </span>
  );
};

export const DownloadIcon: React.FC = () => {
  return (
    <span className="icon-wrapper me-2">
      {React.createElement(FaIcons.FaDownload as React.ComponentType)}
    </span>
  );
};

export const CalendarIcon: React.FC = () => {
  return (
    <span className="icon-wrapper">
      {React.createElement(FaIcons.FaCalendarAlt as React.ComponentType)}
    </span>
  );
};

export const PlayIcon: React.FC = () => {
  return (
    <span className="icon-wrapper">
      {React.createElement(FaIcons.FaPlay as React.ComponentType)}
    </span>
  );
};
