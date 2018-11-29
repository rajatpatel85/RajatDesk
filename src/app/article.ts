export class Article {
    constructor(       
        public language: String,        
        public header: string,
        public title: string,
        public description: string,
        public url?: string, // ? denotes -- optional.
        public languageId?: String,
        public headerId?: String,
        public titleId?: string,
        public status?: boolean
      ) {  

      }
}
