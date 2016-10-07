create database eventio;
use eventio;
create table location(location_id integer primary key NOT NULL AUTO_INCREMENT,
                      location_name varchar(50),
                      location_pincode varchar(50),
                      location_address varchar(30));



create table events(event_id integer primary key NOT NULL AUTO_INCREMENT,
                  event_name varchar(50),
                  event_description varchar(50),
                  event_starttime date,
                  event_endtime date,
                  event_numparticipants integer,
                  event_private boolean,
                  event_location integer references location(location_id),
                  event_rating double,
                  event_ifcanceled boolean,
                  ifdeleted boolean);
                  

create table invites(invite_id integer primary key NOT NULL AUTO_INCREMENT,
                      invite_event integer references event(event_id),
                      invite_personto integer references person(person_id),
                      invite_personfrom integer references person(person_id)
                      invite_time date
                      invite_ifcanceled boolean); 


create table person(person_id integer primary key NOT NULL AUTO_INCREMENT,
                    person_name varchar(50),
                    person_mail varchar(50),
                    person_password varchar(50));


create table role(role_id integer primary key NOT NULL AUTO_INCREMENT,
                  role_desc varchar(50));

create table eveorg(eveorg_id integer primary key NOT NULL AUTO_INCREMENT,
                    event_id integer references event(event_id),
                    person_id integer references person(person_id),
                    role integer references role(role_id),
                    score double,
                    eveorg_comments varchar(200));


insert into person (person_name , person_mail , person_password)values('admin','admin@admin.com','admin');
	 insert into person (person_name , person_mail , person_password)values('vishva','vishva@admin.com','vishva');
	insert into person (person_name , person_mail , person_password)values('bean','bean@admin.com','bean');
	  insert into person (person_name , person_mail , person_password)values('anna','anna@admin.com','anna');


 insert into location(location_name , location_pincode , location_address) values('h25a1' , '111111' , 'h25a1');

insert into events (event_name , event_description , event_starttime , event_endtime ,event_numparticipants ,event_private , event_location , event_rating , event_ifcanceled , ifdeleted )values ('event1' , 'event1 desc' , '2016-10-02' , '2016-10-03' , 12 , false,1 , 0.0 , false , false );
insert into events (event_name , event_description , event_starttime , event_endtime ,event_numparticipants ,event_private , event_location , event_rating , event_ifcanceled , ifdeleted )values ('event2' , 'event2 desc' , '2016-10-02' , '2016-10-03' , 12 , false,1 , 0.0 , false , false );


insert into eveorg (event_id,person_id,role,score,eveorg_comments)values(1,-1,1,0.0,'oo');
insert into eveorg  (event_id,person_id,role,score,eveorg_comments) values(1,2,2,0.0,'oo');
  

    insert into role(role_desc) values('presenter');
   insert into role(role_desc) values('visitor');
