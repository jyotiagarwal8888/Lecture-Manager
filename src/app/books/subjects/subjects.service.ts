import { Injectable } from '@angular/core';
import { Subject } from '../subjects/subject.model';

export class SubjectService{
    
    private all_subjects: Subject[] = [
        new Subject( 1, 'English' ),
        new Subject( 2, 'Maths' ),
        new Subject( 3, 'Science' ),
        new Subject( 4, 'Hindi' ),
        new Subject( 5, 'Computer Science' ),
    ];

    private selected_subjects: Subject[];

    getAllSubjects(){
        return this.all_subjects;
    }

    getSubjectsById(id){
        for(let i = 0, j = 0; i<this.all_subjects.length; i++){
            if(this.all_subjects[i].subject_id == id)
                this.selected_subjects[j++] = this.all_subjects[i];
        }
        return this.selected_subjects;
    }

    getSubjectsByName(name){
        for(let i = 0, j = 0; i<this.all_subjects.length; i++){
            if(this.all_subjects[i].subject_name == name)
                this.selected_subjects[j++] = this.all_subjects[i];
        }
        return this.selected_subjects;
    }
    
}