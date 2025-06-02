
  import React, { useEffect, useState } from "react";


  const SIList = () => {
  const [svoyachniki, setSvoyachniki] = useState([]);

  useEffect(() => {
      fetch(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vT1noqIuaJOQd0rxcddL2_7YTJysA1cmRMiLmD1brhL7hadcgn5WVo6JxV7g1v5M55Q2_GIaeFrwPov/pub?gid=950809840&single=true&output=csv"
      )
      .then((res) => res.text())
      .then((csv) => {
          const lines = csv.trim().split("\n");
          const headers = lines[0].split(",");

          const result = lines
          .slice(1)
          .map((line, lineIndex) => {
              const values = line.split(",");
              const entry = {};

              headers.forEach((h, i) => {
              const header = h?.trim() ?? "";
              const value = values[i]?.trim() ?? "";
              entry[header] = value;
              });

              if (!entry.name && !entry.city) {
              console.warn(`Skipping empty row at index ${lineIndex + 2}`);
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
              <div className="flex gap-3 xl:gap-4">
                <p className="w-[2ch]">{svoyachnik.id}.</p>
                <p>{svoyachnik.name} ({svoyachnik.team})</p>
              </div>
              <p className="text-right">{svoyachnik.city}</p>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default SIList;

