import { Injectable } from '@angular/core';
import { School } from '../models/school.model';

export class SchoolService{
    
    private registered_schools: School[] = [
        new School( 1, 'Delhi Public School, Jaipur', 'dps@gmail.com', 'school' ),
        new School( 2, 'Delhi Public School, Bangalore', 'dps1@gmail.com', 'school' ),
        new School( 3, 'Surjeet Girls School, Bangalore', 'sgs@gmail.com', 'school' ),
        new School( 4, 'St. John School, Bangalore', 'sjs@gmail.com', 'school' )
    ]

    getAllSchools(){
        return this.registered_schools;
    }
}
