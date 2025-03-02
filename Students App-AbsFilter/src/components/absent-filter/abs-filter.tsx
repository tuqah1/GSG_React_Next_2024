import React, { useState } from "react";
import "./abs-filter.css";

interface AbsentsFilterProps {
  min: number;
  max: number;
  onFilterChange: (minAbsents: number, maxAbsents: number) => void;
}

const AbsentsFilter = (props: AbsentsFilterProps) => {
  const [minAbsents, setMinAbsents] = useState<number>(props.min);
  const [maxAbsents, setMaxAbsents] = useState<number>(props.max);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), maxAbsents);
    setMinAbsents(value);
    props.onFilterChange(value, maxAbsents);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), minAbsents);
    setMaxAbsents(value);
    props.onFilterChange(minAbsents, value);
  };

  return (
    <div className="absents-filter">
      <div className="filter-item">
        <label className="filter-label">Min Absents:</label>
        <input
          type="number"
          value={minAbsents}
          onChange={handleMinChange}
          className="filter-input"
          placeholder="Min"
          min={props.min}
          max={maxAbsents}
        />
      </div>
      <div className="filter-item">
        <label className="filter-label">Max Absents:</label>
        <input
          type="number"
          value={maxAbsents}
          onChange={handleMaxChange}
          className="filter-input"
          placeholder="Max"
          min={minAbsents}
          max={props.max}
        />
      </div>
    </div>
  );
};

export default AbsentsFilter;
