export class Article {
    constructor(
        public id: number,
        public language: String,
        public title: string,
        public description: string,
        public url?: string // ? denotes -- optional.
      ) {  

      }
}
