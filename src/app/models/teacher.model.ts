export class Teacher{
    constructor( 
        public teacher_id: string, 
        public first_name: string,
        public last_name: string,
        public email: string,
        public school_id: number, 
        public user_type: string,
        public gender: string
        ){}
}