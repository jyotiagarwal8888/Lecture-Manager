import { Injectable } from '@angular/core';
import { Class } from '../classes/class.model';

export class ClassService{
    
    private all_classes: Class[] = [
        new Class( 1, 'lkg' ),
        new Class( 2, 'Standard 1' ),
        new Class( 3, 'Standard 2' ),
        new Class( 4, 'Standard 3' ),
        new Class( 5, 'Standard 4' ),
    ];

    private selectedClasses: Class[];

    getAllClasses(){
        return this.all_classes;
    }

    getClassesById(id){
        for(let i = 0, j = 0; i<this.all_classes.length; i++){
            if(this.all_classes[i].class_id == id)
                this.selectedClasses[j++] = this.all_classes[i];
        }
        return this.selectedClasses;
    }

    getClassesByName(name){
        for(let i = 0, j = 0; i<this.all_classes.length; i++){
            if(this.all_classes[i].class_name == name)
                this.selectedClasses[j++] = this.all_classes[i];
        }
        return this.selectedClasses;
    }
}