drop table playoffmatch;
drop table groupprediction;
drop table teamgroup;
drop table team;
drop table tournament;
drop table pool;
drop table userinpool;
drop table account;

CREATE TABLE account
    (u_id int not null, 
    email char(30) not null, 
    user_name char(20) not null,
    password char(20) not null,
    admin char(15) not null,
    PRIMARY KEY(u_id),
    UNIQUE(email, user_name));

grant select on account to public;

CREATE TABLE userinpool
    (user_id int not null, 
    pid int not null,
    joined int not null,
    PRIMARY KEY(pid, user_id),
    FOREIGN KEY (user_id) references account);

grant select on userinpool to public;

CREATE TABLE pool
    (pid int not null, 
    name char(20) not null, 
    creator_id int not null,
    PRIMARY KEY(pid),
    FOREIGN KEY (creator_id) references account);

grant select on pool to public;

CREATE TABLE tournament
    (t_id int not null, 
    name char(20) not null, 
    owner_id int not null,
    score int not null,
    PRIMARY KEY(t_id),
    FOREIGN KEY (owner_id) references account);

grant select on tournament to public;

CREATE TABLE team
    (country char(20) not null,
    PRIMARY KEY (country));

grant select on team to public;

CREATE TABLE teamgroup
    (letter char(1) not null,
    team1 char(20) not null,
    team2 char(20) not null,
    team3 char(20) not null,
    team4 char(20) not null,
    PRIMARY KEY(letter),
    FOREIGN KEY(team1) references team,
    FOREIGN KEY(team2) references team,
    FOREIGN KEY(team3) references team,
    FOREIGN KEY(team4) references team);

grant select on teamgroup to public;

CREATE TABLE groupprediction
    (letter char(1) not null,
    t_id int not null,
    first char(20) not null,
    second char(20) not null,
    third char(20) not null,
    fourth char(20) not null,
    PRIMARY KEY(t_id,letter),
    FOREIGN KEY(letter) references teamgroup,
    FOREIGN KEY(t_id) references tournament,
    FOREIGN KEY(first) references team,
    FOREIGN KEY(second) references team,
    FOREIGN KEY(third) references team,
    FOREIGN KEY(fourth) references team);

grant select on groupprediction to public;

CREATE TABLE playoffmatch
    (match_num int not null,
    t_id int not null,
    team_a char(20) not null,
    team_b char(20) not null,
    team_a_score int not null,
    team_b_score int not null,
    PRIMARY KEY(match_num, t_id),
    FOREIGN KEY(t_id) references tournament,
    FOREIGN KEY(team_a) references team,
    FOREIGN KEY(team_b) references team);

grant select on playoffmatch to public;