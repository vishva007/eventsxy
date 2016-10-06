create database eventio;
use eventio;
create table location(location_id integer primary key,
                      location_name varchar(50));



create table events(event_id integer primary key ,
                  event_name varchar(50),
                  event_description varchar(50),
                  event_starttime date,
                  event_endtime date,
                  event_numparticipants integer,
                  event_location integer references location(location_id),
                  event_rating double,
                  event_ifcanceled boolean,
                  ifdeleted boolean);
                  



create table person(person_id integer primary key,
                    person_name varchar(50),
                    person_mail varchar(50),
                    person_password varchar(50)
                    );


create table role(role_id integer primary key,
                  role_desc varchar(50));

create table eveorg(eveorg integer primary key,
                    event_id integer references event(event_id),
                    person_id integer references person(person_id),
                    role integer references role(role_id),
                    score double,
                    eveorg_comments varchar(200));


insert into person values(-1,'admin','admin@admin.com','admin');
	 insert into person values(0,'vishva','vishva@admin.com','vishva');
	insert into person values(1,'bean','bean@admin.com','bean');
	  insert into person values(2,'anna','anna@admin.com','anna');


 insert into location values(1,'h25a1');
insert into events values (1,'event1' , 'event1 desc' , '2016-10-02' , '2016-10-03' , 12 , 1 , 0.0 , false , false );
insert into events values (2,'event2' , 'event2 desc' , '2016-10-02' , '2016-10-03' , 12 , 1 , 0.0 , false , false );



  insert into eveorg values(1,1,-1,1,0.0,'oo');
  insert into eveorg values(2,1,2,2,0.0,'oo');

    insert into role values(1,'presenter');
   insert into role values(2,'visitor');
