import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { School } from '../models/school.model';
import { Teacher } from '../models/teacher.model';
import { Parents } from '../models/parents.model';
import { Student } from '../models/student.model';
import { ClassService } from '../classes/classes.service';
import { Class } from '../classes/class.model';
import { StudentService } from '../services/students.service';
import { TeacherService } from '../services/teachers.service';
import { SchoolService } from '../services/schools.service';

@Component({
    selector: "app-register",
    templateUrl: "./register.component.html",
    styleUrls: [
        './register.component.css'
    ]
})


export class registerComponent implements OnInit{

    //@ViewChild('f') reg_form: NgForm;
    reg_form : FormGroup;
    userSelected : Boolean;
    userSelectedType : string;
    registered_schools : School[];
    selected_students: Student[];
    all_teachers: Teacher[];
    all_classes: Class[];
    is_schoolSelected: Boolean;
    is_classSelected: Boolean;
    selectedSchoolId: number;
    selectedClassName: string;
    selected_teachers: Teacher[];
    isFormValid: Boolean;

    constructor(
        private studentService: StudentService,
        private teacherService: TeacherService,
        private schoolService: SchoolService,
        private classService: ClassService){}

    ngOnInit(){
        this.userSelected = true;
        this.is_schoolSelected = false;
        this.registered_schools = this.schoolService.getAllSchools();
        this.userSelectedType = 'school';
        this.isFormValid = false;
        this.all_classes = this.classService.getAllClasses();
        
        this.reg_form = new FormGroup({
            'fname' : new FormControl(null, Validators.required),
            'lname' : new FormControl(null),
            'email' : new FormControl(null, [Validators.required, Validators.email]),
            'password' : new FormControl(null, Validators.required),
            'c_password' : new FormControl(null, Validators.required),
            'user_type' : new FormControl('school'),
            'userData' : new FormGroup({
                'school_name' : new FormControl(null, Validators.required),
                'school_id' : new FormControl(''),
                'teacher_id' : new FormControl(''),
                'class_name' : new FormControl(''),
                'student_id' : new FormControl('')
            }),
        });
    }

    onSelectUser(user_type: string){
        this.userSelected = true;
        this.userSelectedType = user_type;
        //console.log(this.userSelected);
        if( user_type == 'school'){
            this.reg_form.get('userData.school_name').setValidators([Validators.required]);
            this.reg_form.get('userData.school_name').updateValueAndValidity();
            this.reg_form.get('fname').setValidators([Validators.required]);
            this.reg_form.get('fname').updateValueAndValidity();
            this.reg_form.get('email').setValidators([Validators.required, Validators.email]);
            this.reg_form.get('email').updateValueAndValidity();

            this.reg_form.get('userData.school_id').clearValidators();
            this.reg_form.get('userData.school_id').updateValueAndValidity();
            this.reg_form.get('userData.teacher_id').clearValidators();
            this.reg_form.get('userData.teacher_id').updateValueAndValidity();
            this.reg_form.get('userData.class_name').clearValidators();
            this.reg_form.get('userData.class_name').updateValueAndValidity();
            this.reg_form.get('userData.student_id').clearValidators();
            this.reg_form.get('userData.student_id').updateValueAndValidity();
        }
        else if( user_type == 'student' ){
            this.reg_form.get('userData.school_id').setValidators([Validators.required]);
            this.reg_form.get('userData.school_id').updateValueAndValidity();
            this.reg_form.get('userData.class_name').setValidators([Validators.required]);
            this.reg_form.get('userData.class_name').updateValueAndValidity();
            this.reg_form.get('userData.student_id').setValidators([Validators.required]);
            this.reg_form.get('userData.student_id').updateValueAndValidity();

            this.reg_form.get('fname').clearValidators();
            this.reg_form.get('fname').updateValueAndValidity();
            this.reg_form.get('email').clearValidators();
            this.reg_form.get('email').updateValueAndValidity();
            this.reg_form.get('userData.school_name').clearValidators();
            this.reg_form.get('userData.school_name').updateValueAndValidity();
            this.reg_form.get('userData.teacher_id').clearValidators();
            this.reg_form.get('userData.teacher_id').updateValueAndValidity();
        }
        else if( user_type == 'parent' ){
            this.reg_form.get('userData.school_id').setValidators([Validators.required]);
            this.reg_form.get('userData.school_id').updateValueAndValidity();
            this.reg_form.get('userData.class_name').setValidators([Validators.required]);
            this.reg_form.get('userData.class_name').updateValueAndValidity();
            this.reg_form.get('userData.student_id').setValidators([Validators.required]);
            this.reg_form.get('userData.student_id').updateValueAndValidity();
            this.reg_form.get('fname').setValidators([Validators.required]);
            this.reg_form.get('fname').updateValueAndValidity();
            this.reg_form.get('email').setValidators([Validators.required, Validators.email]);
            this.reg_form.get('email').updateValueAndValidity();

            this.reg_form.get('userData.school_name').clearValidators();
            this.reg_form.get('userData.school_name').updateValueAndValidity();
            this.reg_form.get('userData.teacher_id').clearValidators();
            this.reg_form.get('userData.teacher_id').updateValueAndValidity();
        }
        else if( user_type == 'teacher' ){
            this.reg_form.get('userData.school_id').setValidators([Validators.required]);
            this.reg_form.get('userData.school_id').updateValueAndValidity();
            this.reg_form.get('userData.teacher_id').setValidators([Validators.required]);
            this.reg_form.get('userData.teacher_id').updateValueAndValidity();

            this.reg_form.get('fname').clearValidators();
            this.reg_form.get('fname').updateValueAndValidity();
            this.reg_form.get('email').clearValidators();
            this.reg_form.get('email').updateValueAndValidity();
            this.reg_form.get('userData.school_name').clearValidators();
            this.reg_form.get('userData.school_name').updateValueAndValidity();
            this.reg_form.get('userData.class_name').clearValidators();
            this.reg_form.get('userData.class_name').updateValueAndValidity();
            this.reg_form.get('userData.student_id').clearValidators();
            this.reg_form.get('userData.student_id').updateValueAndValidity();
        }
    }

    onSelectSchool(event){
        this.selectedSchoolId = event.target.value;
        if( this.selectedSchoolId){
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
        if( this.selectedClassName != ''){
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
                'school_id' : '',
                'class_name' : '',
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