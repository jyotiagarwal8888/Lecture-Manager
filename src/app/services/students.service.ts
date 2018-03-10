import { Injectable } from '@angular/core';
import { Student } from '../models/student.model';

export class StudentService{
    
    private selected_students: Student[];
    private all_students: Student[] =  [
        new Student('1', 'Aditya', 'Jain',  'aditya@gmail.com', 1, 'lkg', 'student', 'male'),
        new Student('2', 'Jyoti', 'Agarwal',  'aditya@gmail.com', 4, '1', 'student', 'female'),
        new Student('3', 'Agam', 'Jain',  'aditya@gmail.com', 2, '3', 'student', 'male'),
        new Student('4', 'Rounak', 'Goliya',  'aditya@gmail.com', 4, '3', 'student', 'male'),
        new Student('5', 'Seema', 'gupta',  'aditya@gmail.com', 3, 'lkg', 'student', 'female'),
        new Student('6', 'Vivek', 'Jain',  'aditya@gmail.com', 1, '4', 'student', 'male'),
        new Student('7', 'Rupali', 'Jain',  'aditya@gmail.com', 3, '2', 'student', 'female'),
        new Student('8', 'Ritu', 'Jain',  'aditya@gmail.com', 2, 'lkg', 'student', 'female'),
    ];

    getAllStudents(){
        return this.all_students;
    }
    getStudentsBySchool(id){
        console.log(this.all_students.length);
        this.selected_students = [];
        if(id != 0){
            for( let i=0, j=0 ; i< this.all_students.length; i++ ){
                if(this.all_students[i].school_id == id){
                    this.selected_students[j++] = this.all_students[i];
                }
            }
        }
        else{
            this.selected_students = this.all_students;
        }
        return this.selected_students;
    }

    getStudentsByClass(class_name){
        this.selected_students = [];
        if(class_name != 'all'){
            for( let i=0, j=0 ; i< this.all_students.length; i++ ){
                if(this.all_students[i].class_name == class_name){
                    this.selected_students[j++] = this.all_students[i];
                }
            }
        }
        else{
            this.selected_students = this.all_students;
        }
        return this.selected_students;
    }

    getStudentsByClassAndSchool(class_name, school_id){
        this.selected_students = [];
        for( let i=0, j=0 ; i< this.all_students.length; i++ ){
            if(this.all_students[i].class_name == class_name && this.all_students[i].school_id == school_id){
                this.selected_students[j++] = this.all_students[i];
            }
        }
        return this.selected_students;
    }
    
}
