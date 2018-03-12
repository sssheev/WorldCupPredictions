drop table User;
drop table UserInPool;
drop table Pool;
drop table Tournament;
drop table GroupPrediction;
drop table Group;
drop table Team;
drop table PlayoffMatch;

CREATE TABLE User(
uid integer, 
email char(30), 
userName char(20),
password char(20),
admin char(15),
PRIMARY KEY(uid),
UNIQUE(email, username)
);

CREATE TABLE UserInPool(
userId integer, 
pid integer,
joined boolean,
PRIMARY KEY(pid, userId),
FOREIGN KEY (userId) references User(uid) 
);

CREATE TABLE Pool(
    pid integer, 
name char(20), 
creatorId integer,
PRIMARY KEY(pid),
FOREIGN KEY (creatorID) references User(uid)
);

CREATE TABLE Tournament(
    tid integer, 
name char(20), 
ownerId integer,
score integer,
PRIMARY KEY(tid),
FOREIGN KEY (ownerID) references User(uid)
);

CREATE TABLE GroupPrediction(
    letter char(1),
    tournamentId integer,
    first char(20),
     second char(20),
    third char(20),
    fourth char(20),
            PRIMARY KEY(tid,letter),
FOREIGN KEY(letter) references Group(letter),
    FOREIGN KEY(tournamentId) references Tournament(tid),
FOREIGN KEY(first,second,third,fourth) references Team(country,country,country,country)
);

CREATE TABLE Group(
    letter char(1),
    team1 char(20),
    team2 char(20),
    team3 char(20),
    team4 char(20),
            PRIMARY KEY(letter),
    FOREIGN KEY(team1,team2,team3,team4) references Team(country)
);

CREATE TABLE Team(
    country char(20),
    PRIMARY KEY (country)    
);

CREATE TABLE PlayoffMatch(
    matchNum integer,
    tournamentId integer,
    teamA char(20),
    teamB char(20),
    teamAScore integer,
    teamBScore integer,
    PRIMARY KEY(matchNum, tournamentId),
    FOREIGN KEY(tournamentId) references Tournament(tid)
    FOREIGN KEY(teamA,teamB) references Team(country,country)
);
