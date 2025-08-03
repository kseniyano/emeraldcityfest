import React, { useEffect, useState } from "react";
import Papa from "papaparse";

const SIList = () => {
const [svoyachniki, setSvoyachniki] = useState([]);

  useEffect(() => {
    fetch(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vT1noqIuaJOQd0rxcddL2_7YTJysA1cmRMiLmD1brhL7hadcgn5WVo6JxV7g1v5M55Q2_GIaeFrwPov/pub?gid=950809840&single=true&output=csv"
    )
      .then((res) => res.text())
      .then((csvText) => {
        const parsed = Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
        });

        const result = parsed.data
          .map((entry, i) => {
            if (!entry.name && !entry.city) {
              //console.warn(`Skipping empty row at line ${i + 2}`);
              return null;
            }

            return {
              id: entry.id,
              name: entry.name,
              city: entry.city,
              team: entry.team,
            };
          })
          .filter(Boolean);

        setSvoyachniki(result);
      });
  }, []);

  return (
    <ul>
      {svoyachniki.map((svoyachnik, index) => (
        <li key={index}>
          <div className="flex justify-between">
            <div className="flex gap-3 xl:gap-4 mb-2">
              <p className="w-[2ch]">{svoyachnik.id}.</p>
              {/* <p className="hidden sm:inline">
                {svoyachnik.name} ({svoyachnik.team})
              </p> */}
              <p className="inline">
                {svoyachnik.name}
                <br /><span className="text-primary-500">({svoyachnik.team})</span>
              </p>
            </div>
            <p className="text-right">{svoyachnik.city}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SIList;
