export class Book{
    constructor( 
        public book_id: string, 
        public subject_id: number,
        public pdf_path: string,
        public cover_image: string,
        public book_title: string,
        public school_id: number, 
        public class_id: number
        ){}
}