import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { School } from '../models/school.model';
import { Teacher } from '../models/teacher.model';
import { Parents } from '../models/parents.model';
import { Student } from '../models/student.model';
import { StudentService } from '../services/students.service';
import { TeacherService } from '../services/teachers.service';
import { SchoolService } from '../services/schools.service';

@Component({
    selector: "app-register",
    templateUrl: "./register.component.html"
})


export class registerComponent implements OnInit{

    //@ViewChild('f') reg_form: NgForm;
    reg_form : FormGroup;
    userSelected : Boolean;
    userSelectedType : string;
    registered_schools : School[];
    selected_students: Student[];
    all_teachers: Teacher[];
    is_schoolSelected: Boolean;
    is_classSelected: Boolean;
    selectedSchoolId: number;
    selectedClassName: string;
    selected_teachers: Teacher[];
    isFormValid: Boolean;

    constructor(
        private studentService: StudentService,
        private teacherService: TeacherService,
        private schoolService: SchoolService){}

    ngOnInit(){
        this.userSelected = true;
        this.is_schoolSelected = false;
        this.registered_schools = this.schoolService.getAllSchools();
        this.userSelectedType = 'school';
        this.isFormValid = false;
        
        this.reg_form = new FormGroup({
            'fname' : new FormControl(null, Validators.required),
            'lname' : new FormControl(null),
            'email' : new FormControl(null, [Validators.required, Validators.email]),
            'password' : new FormControl(null, Validators.required),
            'c_password' : new FormControl(null, Validators.required),
            'user_type' : new FormControl('school', Validators.required),
            'userData' : new FormGroup({
                'school_name' : new FormControl(null, Validators.required),
                'school_id' : new FormControl(0, Validators.required),
                'teacher_id' : new FormControl('', Validators.required),
                'class_name' : new FormControl('all', Validators.required),
                'student_id' : new FormControl('', Validators.required)
            }),
        });
    }

    onSelectUser(user_type: string){
        this.userSelected = true;
        this.userSelectedType = user_type;
        //console.log(this.userSelected);
    }

    onSelectSchool(event){
        this.selectedSchoolId = event.target.value;
        if( this.selectedSchoolId != 0){
            this.is_schoolSelected = true;
        }
        else{
            this.is_schoolSelected = false;
        }
        this.selected_students = this.getStudents();
        this.selected_teachers = this.teacherService.getTeachersBySchool(this.selectedSchoolId);
    }

    onSelectClass(event){
        this.selectedClassName = event.target.value;
        if( this.selectedClassName != 'all'){
            this.is_classSelected = true;
        }
        else{
            this.is_classSelected = false;
        }
        this.selected_students = this.getStudents();
    }

    getStudents(){
        if( this.is_classSelected && this.is_schoolSelected){
            return this.studentService.getStudentsByClassAndSchool(this.selectedClassName, this.selectedSchoolId);
        }
        else if( this.is_classSelected && !this.is_schoolSelected){
            return this.studentService.getStudentsByClass(this.selectedClassName);
        }
        else if( !this.is_classSelected && this.is_schoolSelected){
            return this.studentService.getStudentsBySchool(this.selectedSchoolId);
        }
        else{
            return this.studentService.getAllStudents();
        }  
    }

    onRegister(){
        if( this.reg_form.value.password === this.reg_form.value.c_password ){
            this.isFormValid = true;
            this.onReset();
        }
    }

    onReset(){
        this.reg_form.reset({
            'user_type' : 'school',
            'userData' : {
                'school_id' : 0,
                'class_name' : 'all',
                'user_id' : '',
                'student_id' : '',
                'teacher_id' : ''
            }
        });
        this.userSelectedType = 'school';
    }

    onLogin(){

    }

}