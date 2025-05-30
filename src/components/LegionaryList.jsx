
  import React, { useEffect, useState } from "react";


  const LegionaryList = () => {
  const [legionaries, setLegionaries] = useState([]);

  useEffect(() => {
      fetch(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vT1noqIuaJOQd0rxcddL2_7YTJysA1cmRMiLmD1brhL7hadcgn5WVo6JxV7g1v5M55Q2_GIaeFrwPov/pub?gid=182700545&single=true&output=csv"
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
              id_rating: entry.id_rating,
              name: entry.name,
              city: entry.city,
              };
          })
          .filter(Boolean);

          setLegionaries(result);
      });
  }, []);


  return (
      <ul>
        {legionaries.map((legionary, index) => (
          <li key={index}>
            <div className="flex justify-between">
              <div className="flex gap-2 xl:gap-4">
                <p>{legionary.id}.</p>
                <a
                  href={`https://rating.chgk.info/player/${legionary.id_rating}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <p className="min-w-7ch text-right">{legionary.id_rating}</p>
                </a>
                <p>{legionary.name}</p>
              </div>
              <p className="text-right">{legionary.city}</p>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default LegionaryList;

