import React from 'react'
import { useState } from 'react'

const GroupedTeamMembers = ({ employees, selectedTeam, setTeam }) => {

    const [groupedEmployees, setGroupedData] = useState(GroupTeamMembers());

    function GroupTeamMembers() {
        var teams = [];

        var teamAMembers = employees.filter((employee) => employee.teamName === 'TeamA');
        var TeamA = { team: 'TeamA', members: teamAMembers, collapsed: selectedTeam === 'TeamA' ? false : true }
        teams.push(TeamA);

        var teamBMembers = employees.filter((employee) => employee.teamName === 'TeamB');
        var TeamB = { team: 'TeamB', members: teamBMembers, collapsed: selectedTeam === 'TeamB' ? false : true }
        teams.push(TeamB);

        var teamCMembers = employees.filter((employee) => employee.teamName === 'TeamC');
        var TeamC = { team: 'TeamC', members: teamCMembers, collapsed: selectedTeam === 'TeamC' ? false : true }
        teams.push(TeamC);

        var teamDMembers = employees.filter((employee) => employee.teamName === 'TeamD');
        var TeamD = { team: 'TeamD', members: teamDMembers, collapsed: selectedTeam === 'TeamD' ? false : true }
        teams.push(TeamD);

        return teams;
    }

    function handleTeamClick(event) {
        var transformedGroupData = groupedEmployees.map((groupedData) => groupedData.team === event.currentTarget.id
            ? { ...groupedData, collapsed: !groupedData.collapsed }
            : groupedData);
        setGroupedData(transformedGroupData);
        setTeam(event.currentTarget.id);
    }

    return (
        <main className='container'>
            {
                groupedEmployees.map((item) => {
                    return (
                        <div key={item.team} className='card mt-2' style={{ cursou: "pointer" }}>
                            <h4 id={item.team} className='card-header text-secondary bg-white' onClick={handleTeamClick}>
                                Team Name: {item.team}
                            </h4>
                            <div id={"collapse_" + item.team}
                                className={item.collapsed === true ? "collapse" : ""}>
                                <hr />
                                {
                                    item.members.map((member) => {
                                        return (
                                            <div className="mt-2">
                                                <h5 className='card-title mt-2'>
                                                    <span className='text-dark'>Full Name: {member.fullName}</span>
                                                </h5>
                                                <p>Designation: {member.designation}</p>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
        </main>
    )
}

export default GroupedTeamMembers