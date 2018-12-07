import { BaseEntity } from './base-entity';

export class Note implements BaseEntity {
    constructor(
        public id?: number,
        public title?: string,
        public description?: string,
        public imageUrl?: string,
        public appUserId?: number,
    ) {
    }
}

