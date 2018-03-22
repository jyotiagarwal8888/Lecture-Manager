import { Injectable } from '@angular/core';
import { Book } from './books.model';

export class BookService{

    public filtered_books: Book[];
    public all_books: Book[] = [
        new Book( '1', 1, '../../assets/book-pdfs/pdf.pdf', '../../assets/images/english-cover.jpg', 'English 1', 1, 1 ),
        new Book( '2', 1, '../../assets/book-pdfs/pdf.pdf', '../../assets/images/english-cover.jpg', 'English 2', 2, 2 ),
        new Book( '3', 2, '../../assets/book-pdfs/pdf2.pdf', '../../assets/images/maths-cover.webp', 'Maths 1', 3, 4 ),
        new Book( '4', 2, '../../assets/book-pdfs/pdf3.pdf', '../../assets/images/maths-cover.webp', 'Maths 2', 4, 3 ),
        new Book( '5', 3, '../../assets/book-pdfs/pdf4.pdf', '../../assets/images/science-cover.webp', 'Science 1', 1, 5 ),
        new Book( '6', 3, '../../assets/book-pdfs/pdf.pdf', '../../assets/images/science-cover.webp', 'Science 2', 2, 1 ),
        new Book( '7', 4, '../../assets/book-pdfs/pdf2.pdf', '../../assets/images/hindi-cover.webp', 'Hindi 1', 3, 2 ),
        new Book( '8', 4, '../../assets/book-pdfs/pdf4.pdf', '../../assets/images/hindi-cover.webp', 'Hindi 2', 4, 3 ),
        new Book( '9', 5, '../../assets/book-pdfs/pdf3.pdf', '../../assets/images/computer-cover.webp', 'Computer 1', 1, 4 ),
        new Book( '10', 5, '../../assets/book-pdfs/pdf.pdf', '../../assets/images/computer-cover.webp', 'Computer 2', 2, 5 ),
        new Book( '11', 5, '../../assets/book-pdfs/pdf2.pdf', '../../assets/images/computer-cover.webp', 'Computer 3', 3, 1 ),
        new Book( '12', 1, '../../assets/book-pdfs/pdf3.pdf', '../../assets/images/english-cover.jpg', 'English 3', 4, 2 ),
        new Book( '13', 2, '../../assets/book-pdfs/pdf4.pdf', '../../assets/images/maths-cover.webp', 'Maths 3', 1, 3 ),
        new Book( '14', 4, '../../assets/book-pdfs/pdf4.pdf', '../../assets/images/hindi-cover.webp', 'Hindi 3', 2, 4 ),
    ];


    getAllBooks(){
        return this.all_books;
    }
    getBooksByClassIds(class_ids: Array<number>){
        //console.log(class_ids);
        this.filtered_books = [];
        for( let i = 0, j = 0; i<this.all_books.length; i++){
            if( class_ids.indexOf(this.all_books[i].class_id) > -1 ){
                this.filtered_books[j++] = this.all_books[i];
            }
        }
        console.log(this.filtered_books);
        //return this.filtered_books;
    }
    getBooksBySubjectIds(subject_ids: Array<number>){
        this.filtered_books = [];
        for( let i = 0, j = 0; i<this.all_books.length; i++){
            if( subject_ids.indexOf(this.all_books[i].subject_id ) != -1 ){
                this.filtered_books[j++] = this.all_books[i];
            }
        }
        return this.filtered_books;
    }
    getBooksByClassAndSubject(class_ids: Array<number>, subject_ids: Array<number>){
        this.filtered_books = [];
        for( let i = 0, j = 0; i<this.all_books.length; i++){
            if( (class_ids.indexOf(this.all_books[i].class_id) != -1) && (
                subject_ids.indexOf(this.all_books[i].subject_id ) != -1)){
                this.filtered_books[j++] = this.all_books[i];
            }
        }
        return this.filtered_books;
    }
    getBooksfilter(class_ids: Array<number>, subject_ids: Array<number>){
        console.log(class_ids);
        if( class_ids.length == 0 && subject_ids.length == 0 ){
            this.filtered_books = this.getAllBooks();
        }
        else if( class_ids.length != 0 && subject_ids.length == 0 ){
            this.getBooksByClassIds(class_ids);
        }
        else if( class_ids.length == 0 && subject_ids.length != 0 ){
            this.getBooksBySubjectIds(subject_ids);
        }
        else if( class_ids.length != 0 && subject_ids.length != 0 ){
            this.getBooksByClassAndSubject( class_ids, subject_ids);
        }
    }
}