import { Injectable } from '@angular/core';
import { Teacher } from '../models/teacher.model';

export class TeacherService{
    
    private selected_teachers: Teacher[];
    private all_teachers: Teacher[] = [
        new Teacher('1', 'Aditya', 'teacher1',  'teacher1@gmail.com', 1, 'teacher', 'male'),
        new Teacher('2', 'Jyoti', 'teacher2',  'teacher2@gmail.com', 4, 'teacher', 'female'),
        new Teacher('3', 'Agam', 'teacher3',  'teacher3@gmail.com', 2, 'teacher', 'male'),
        new Teacher('4', 'Rounak', 'teacher4',  'teacher4@gmail.com', 4, 'teacher', 'male'),
        new Teacher('5', 'Seema', 'teacher5',  'teacher5@gmail.com', 3, 'teacher', 'female'),
        new Teacher('6', 'Vivek', 'teacher6',  'teacher6@gmail.com', 1, 'teacher', 'male'),
        new Teacher('7', 'Rupali', 'teacher7',  'teacher7@gmail.com', 3, 'teacher', 'female'),
        new Teacher('8', 'Ritu', 'teacher8',  'aditeacher8tya@gmail.com', 2, 'teacher', 'female'),
    ];

    getAllTeachers(){
        return this.all_teachers;
    }
    getTeachersBySchool(school_id){
        this.selected_teachers = [];
        for( let i=0, j=0 ; i< this.all_teachers.length; i++ ){
            if(this.all_teachers[i].school_id == school_id){
                this.selected_teachers[j++] = this.all_teachers[i];
            }
        }
        return this.selected_teachers;
    }
}
