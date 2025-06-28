import React, { useEffect, useState } from "react";
import Papa from "papaparse";

const parsePlayers = (playerString) => {
  if (!playerString || typeof playerString !== "string") return [];

  return playerString.split("_").map((entry) => {
    if (!entry.includes(":")) return { id: "", name: entry.trim() };
    const [id, name] = entry.split(":");
    return {
      id: id?.trim() || "",
      name: name?.trim() || "",
    };
  });
};

const TeamGrid = () => {
const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vT1noqIuaJOQd0rxcddL2_7YTJysA1cmRMiLmD1brhL7hadcgn5WVo6JxV7g1v5M55Q2_GIaeFrwPov/pub?gid=0&single=true&output=csv"
    )
      .then((res) => res.text())
      .then((csvText) => {
        const parsed = Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
        });

        const result = parsed.data
          .map((entry, i) => {
            if (!entry.name && !entry.city && !entry.players) {
              console.warn(`Skipping empty row at line ${i + 2}`);
              return null;
            }

            return {
              id: entry.id,
              name: entry.name,
              city: entry.city,
              icons: entry.icons,
              players: parsePlayers(entry.players),
              deposit: entry.deposit,
              fee: entry.fee,
            };
          })
          .filter(Boolean);

        setTeams(result);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {teams.map((team, index) => (
        <div key={index} className="p-6 border rounded-2xl border-primary-300">
          <h4 className="text-xl font-semibold">
            {team.id}. {team.name}
          </h4>
          <div className="flex w-full justify-between items-center mb-6">
            <h5 className="text-accent">{team.city}</h5>
            <div>
              <i
                className={`fa-solid fa-list text-[1.5rem] mr-3 ${
                  team.players && team.players.length > 0 ? "text-emerald" : "text-primary-100"
                }`}
                title="Состав команды внесён"
              ></i>
              <i
                className={`fa-solid fa-dollar-sign text-[1.5rem] mr-3  ${
                  team.deposit === "Yes" ? "text-emerald" : "text-primary-100"
                }`}
                title="Депозит оплачен"
              ></i>
              <i
                className={`fa-solid fa-sack-dollar text-[1.5rem] ${
                  team.fee === "Yes" ? "text-emerald" : "text-primary-100"
                }`}
                title="Взнос оплачен полностью"
              ></i>
            </div>
          </div>
          <ul>
            {team.players.map((player, idx) => (
              <ol key={idx} className={idx === 0 ? "font-bold" : ""}>
                <div className="flex gap-2 xl:gap-4">
                  <p className="min-w-7ch text-right">{player.id}</p>
                  <p>{player.name}</p>
                </div>
              </ol>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TeamGrid;