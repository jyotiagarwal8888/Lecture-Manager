import { Component, OnInit , ViewChild, ElementRef} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClassService } from '../classes/classes.service';
import { Subject } from '../books/subjects/subject.model';
import { SubjectService } from '../books/subjects/subjects.service';
import { Class } from '../classes/class.model';
import { BookService } from '../books/books.service';
import { Book } from '../books/books.model';

@Component({
    selector: "app-books",
    templateUrl: "./books.component.html",
    styleUrls: ['./books.component.css']
})

export class booksComponent implements OnInit{
    @ViewChild('f') filter_options: NgForm;
    all_classes: Class[];
    all_books: Book[];
    all_subjects: Subject[];
    selectedBooks: Book[];
    selected_classes: Array<number>;
    selected_subjects: Array<number>;

    constructor(
        private classService: ClassService,
        private bookService: BookService,
        private subjectService: SubjectService){}

    ngOnInit(){
        this.all_classes = this.classService.getAllClasses();
        this.all_books = this.bookService.getAllBooks();
        this.all_subjects = this.subjectService.getAllSubjects();
        this.selectedBooks = this.bookService.getAllBooks();
        this.selected_classes = [];
        this.selected_subjects = [];
    }

    onClassFilter(class_id){
        if( this.selected_classes.indexOf(class_id) == -1 ){
            this.selected_classes.push(class_id);
        }
        else{
            this.selected_classes.splice(this.selected_classes.indexOf(class_id), 1);
        }
        this.bookService.getBooksfilter(this.selected_classes, this.selected_subjects);
        this.selectedBooks = this.bookService.filtered_books;
    }
    onSubjectFilter(subject_id){
        if( this.selected_subjects.indexOf(subject_id) == -1 ){
            this.selected_subjects.push(subject_id);
        }
        else{
            this.selected_subjects.splice(this.selected_subjects.indexOf(subject_id), 1);
        }
        this.bookService.getBooksfilter(this.selected_classes, this.selected_subjects);
        this.selectedBooks = this.bookService.filtered_books;
    }

}