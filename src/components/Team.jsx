import React from "react";
import Title from "./Title";
import Card from "./Card";
import { team } from '../data'
const Team = () => {
  return (
    <section className="TeamBg equal-margin" id="team">
      <Title title="meet our team" text="Meet our experts that turns vision to reality.Together, We tend to create something extraordinary." />
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {team.map((team) => {
    
    return <Card key={team.name} {...team}/>
})}
      </div>
    </section>
  );
};

export default Team;
